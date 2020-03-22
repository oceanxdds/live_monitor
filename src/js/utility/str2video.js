const yt_embed_host = "https://www.youtube-nocookie.com/embed";
const yt_embed_channel_host = "https://www.youtube-nocookie.com/embed/live_stream?autoplay=1&channel=";
const tt_embed_channel_host = "https://player.twitch.tv/?channel=";
const fb_embed_host = "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com";
const ls_embed_host = "https://livestream.com";

let str2video = function(str){

    let code,url,temp;

    if(!str)
        return null;

    //youtube yt:xxx
    if(temp = str.match(/^((yt):)?([a-zA-Z0-9-_.]+)$/))
    {
        code = 'yt:'+temp[3];
        url = yt_embed_host+'/'+temp[3];
    }

    //youtube yc:xxx
    if(temp = str.match(/^((yc):)?([a-zA-Z0-9-_.]+)$/))
    {
        code = 'yc:'+temp[3];
        url = yt_embed_channel_host+temp[3];
    }
    
    //youtube regular
    else if(temp = str.match(/^https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9-_.]+)/))
    {
        code = 'yt:'+temp[1];
        url = yt_embed_host+'/'+temp[1];
    }

    //youtube embed channel live
    else if(temp = str.match(/^https:\/\/www.youtube\.com\/embed\/live_stream\?channel=([a-zA-Z0-9-_.]+)/))
    {
        code = 'yc:'+temp[1];
        url = yt_embed_channel_host + temp[1];
    }
    
    //youtube channel live
    else if(temp = str.match(/^https:\/\/www\.youtube\.com\/channel\/([a-zA-Z0-9-_.]+)\/live/))
    {
        code = 'yc:'+temp[1];
        url = yt_embed_channel_host + temp[1];
    }

    //youtube embed
    else if(temp = str.match(/^https:\/\/www.youtube\.com\/embed\/([a-zA-Z0-9-_.]+)/))
    {
        code = 'yt:'+temp[1];
        url = yt_embed_host+'/'+temp[1];
    }
    
    //youtube short
    else if(temp = str.match(/^https:\/\/youtu\.be\/([a-zA-Z0-9-_.]+)/))
    {
        code = 'yt:'+temp[1];
        url = yt_embed_host+'/'+temp[1];
    }
    

    //twitch tt:xxx
    else if(temp = str.match(/^(tt):([a-zA-Z0-9-_.]+)$/))
    {
        code = temp[0];
        url = tt_embed_channel_host+temp[2]+'&autoplay=false';
    }

    //twitch regular
    else if(temp = str.match(/^https:\/\/www\.twitch\.tv\/([a-zA-Z0-9-_.]+)/))
    {
        code = 'tt:'+temp[1];
        url = tt_embed_channel_host+temp[1]+'&autoplay=false';
    }
    
    //facebook fb:xxx:xxx
    else if(temp = str.match(/^(fb):([a-zA-Z0-9-_.]+):(\d+)$/))
    {
        code = temp[0];
        url = fb_embed_host+'/'+temp[2]+'/videos/'+temp[3]+'&autoplay=false';
    }

    //facebook regular
    else if(temp = str.match(/^https:\/\/www\.facebook\.com\/([a-zA-Z0-9-_.]+)\/videos\/(\d+)/))
    {
        code = 'fb:'+temp[1]+':'+temp[2];
        url = fb_embed_host+'/'+temp[1]+'/videos/'+temp[2]+'&autoplay=false';
    }

    //livestream ls:xxx:xxx
    else if(temp = str.match(/^(ls):(\d+):(\d+)$/))
    {
        code = temp[0];
        url = ls_embed_host+'/accounts/'+temp[2]+'/events/'+temp[3]+'/player';
    }

    //livestream ls:xxx:xxx:xxx
    else if(!code && (temp = str.match(/^(ls):(\d+):(\d+):(\d+)$/)))
    {
        code = temp[0];
        url = ls_embed_host+'/accounts/'+temp[1]+'/events/'+temp[2]+'/videos/'+temp[3]+'/player';
    }

    //livestream regular
    else if(temp = str.match(/^https:\/\/livestream\.com\/accounts\/(\d+)\/events\/(\d+)/))
    {
        code = 'ls:'+temp[1]+':'+temp[2];
        url = ls_embed_host+'/accounts/'+temp[1]+'/events/'+temp[2]+'/player';
    }

    //livestream video
    else if(temp = str.match(/^https:\/\/livestream\.com\/accounts\/(\d+)\/events\/(\d+)\/videos\/(\d+)/))
    {
        code = 'ls:'+temp[1]+':'+temp[2]+':'+temp[3];
        url = ls_embed_host+'/accounts/'+temp[1]+'/events/'+temp[2]+'/videos/'+temp[3]+'/player';
    }

    else
    {
        return null;
    }
    
    return {
        code:code,
        url:url,
        focus:false,
        order: 0,
        dragging:false,
        dragover:false
    };
};

export {str2video};