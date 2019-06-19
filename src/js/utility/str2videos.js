import {str2video} from './str2video';

let str2videos = function(url){

    return url.split(/ |,/).map(str=>{

        if(!str)
            return null;
        
        let video = str2video(str);

        if(!video)
            return null;

        
        return video;
    
    }).filter(v=>v);
}

export {str2videos};