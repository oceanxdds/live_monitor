import axios from 'axios';

let sources = [
    {
        url: "https://oceanxdds.github.io/live_monitor/channel.txt",
        last:'',
        callback:function(src,data,callback){

            if(data!=src.last){
                src.last = data;
                callback([data]);
            }
        }
    }
];


let loadVideos = function(callback){

    sources.forEach(src=>{

        axios.get(src.url ,{
            params: {time: (new Date()).getTime()}
        })
        .then(function(response){

            src.callback(src,response.data,callback)
        });
    });
}

export {loadVideos};