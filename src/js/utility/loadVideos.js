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
    },
    {
        url: "https://ncehk2019.github.io/nce-live-datasrc/lives.json",
        last:'',
        callback:function(src,data,callback){
            
            if(data&&data.lives){
                
                let arr = data.lives.filter(v=>v.active).map(v=>v['#id']);
                if(src.last != arr.join()){
                    src.last = arr.join();
                    callback(arr);
                }
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