import {str2video} from './str2video';

let str2videos = function(url){

    return url.split(/ |,/).map(str=>{

        return str ? str2video(str) : null;

    }).filter(v=>v);
}

export {str2videos};