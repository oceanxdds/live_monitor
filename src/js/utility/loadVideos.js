import axios from 'axios';

let names = {
    'me': "https://oceanxdds.github.io/live_monitor/channel.txt",
    'g0v': "https://ncehk2019.github.io/nce-live-datasrc/lives.json"
};

let loadVideos = function(name, callback){

    axios.get( names[name] ,{
        params: {time: (new Date()).getTime()}
    })
    .then(function (response) {
        callback(response);
    });
}

export {loadVideos};