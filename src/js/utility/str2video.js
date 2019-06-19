const yt_host = "https://www.youtube.com";
const yt_short_host = "https://youtu.be";
const yt_embed_host = "https://www.youtube-nocookie.com/embed";
const tt_host = "https://www.twitch.tv";
const tt_embed_channel_host = "https://player.twitch.tv/?channel=";
const fb_host = "https://www.facebook.com";
const fb_embed_host = "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com";
const ls_host = "https://livestream.com";

let str2video = function(str){

    let code = '';
    let url = '';
    let type = '';
    let temp = '';

    if(!str)
        return null;

    //youtube
    if(!code && (temp = str.match(/^[a-zA-Z0-9-_.]+$/)))
    {
        type = 'yt';
        code = [type,temp[0]].join(':');
        url = yt_embed_host+'/'+temp[0];
    }

    //youtube yt:xxx
    if(!code && (temp = str.match(/^(yt):([a-zA-Z0-9-_.]+)$/)))
    {
        type = temp[1];
        code = [type,temp[2]].join(':');
        url = yt_embed_host+'/'+temp[2];
    }
    
    //youtube regular
    if(!code && (temp = str.match(/^https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9-_.]+)/)))
    {
        type = 'yt';
        code = [type,temp[1]].join(':');
        url = yt_embed_host+'/'+temp[1];
    }

    //youtube embed
    if(!code && (temp = str.match(/^https:\/\/www.youtube\.com\/embed\/([a-zA-Z0-9-_.]+)/)))
    {
        type = 'yt';
        code = [type,temp[1]].join(':');
        url = yt_embed_host+'/'+temp[1];
    }
    
    //youtube short
    if(!code && (temp = str.match(/^https:\/\/youtu\.be\/([a-zA-Z0-9-_.]+)/)))
    {
        type = 'yt';
        code = [type,temp[1]].join(':');
        url = yt_embed_host+'/'+temp[1];
    }

    //twitch tt:xxx
    if(!code && (temp = str.match(/^(tt):([a-zA-Z0-9-_.]+)$/)))
    {
        type = temp[1];
        code = [temp[1],temp[2]].join(':');
        url = tt_embed_channel_host+temp[2]+'&autoplay=false';
    }

    //twitch regular
    if(!code && (temp = str.match(/^https:\/\/www\.twitch\.tv\/([a-zA-Z0-9-_.]+)/)))
    {
        type = 'tt';
        code = [type,temp[1]].join(':');
        url = tt_embed_channel_host+temp[1]+'&autoplay=false';
    }
    
    //facebook fb:xxx:xxx
    if(!code && (temp = str.match(/^(fb):([a-zA-Z0-9-_.]+):(\d+)$/)))
    {
        type = temp[1];
        code = [type,temp[2],temp[3]].join(':');
        url = fb_embed_host+'/'+temp[2]+'/videos/'+temp[3]+'&autoplay=false';
    }

    //facebook regular
    if(!code && (temp = str.match(/^https:\/\/www\.facebook\.com\/([a-zA-Z0-9-_.]+)\/videos\/(\d+)/)))
    {
        type = 'fb';
        code = [type,temp[1],temp[2]].join(':');
        url = fb_embed_host+'/'+temp[1]+'/videos/'+temp[2]+'&autoplay=false';
    }

    //livestream ls:xxx:xxx
    if(!code && (temp = str.match(/^(ls):(\d+):(\d+)$/)))
    {
        type = temp[1];
        code = [type,temp[2],temp[3]].join(':');
        url = ls_host+'/accounts/'+temp[2]+'/events/'+temp[3]+'/player';
    }

    //livestream ls:xxx:xxx:xxx
    if(!code && (temp = str.match(/^(ls):(\d+):(\d+):(\d+)$/)))
    {
        type = temp[1];
        code = [type,temp[2],temp[3],temp[4]].join(':');
        url = ls_host+'/accounts/'+temp[1]+'/events/'+temp[2]+'/videos/'+temp[3]+'/player';
    }

    //livestream regular
    if(!code && (temp = str.match(/^https:\/\/livestream\.com\/accounts\/(\d+)\/events\/(\d+)/)))
    {
        type = 'ls';
        code = [type,temp[1],temp[2]].join(':');
        url = ls_host+'/accounts/'+temp[1]+'/events/'+temp[2]+'/player';
    }

    //livestream video
    if(!code && (temp = str.match(/^https:\/\/livestream\.com\/accounts\/(\d+)\/events\/(\d+)\/videos\/(\d+)/)))
    {
        type = 'ls';
        code = [type,temp[1],temp[2],temp[3]].join(':');
        url = ls_host+'/accounts/'+temp[1]+'/events/'+temp[2]+'/videos/'+temp[3]+'/player';
    }

    if(!code)
        return null;
    
    return {
        type:type,
        code:code,
        url:url,
        focus:false,
        order: 0
    };
};

export {str2video};