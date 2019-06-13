<template>
    <div class="container-fluid">
        <b-input-group class="my-3" prepend="Source" size="sm">
            <b-form-input v-model="url" placeholder="[ YouTube ] yt:ID or URL or Short URL. [ Twitch ] tt:ID or URL." @keydown.enter="addVideo()"></b-form-input>
            <b-input-group-append>
                <b-button @click="addVideo()">Enter</b-button>
            </b-input-group-append>
        </b-input-group>
        <div class="form-row my-3">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3" :class="{'col-md-12':v.focus,'col-lg-8':v.focus,'col-xl-6':v.focus}" v-for="v in orderedVideos" :key="v.code">
                <div class="d-flex border py-1">
                    <div class="p-1 mx-1">{{ v.type }}:{{ v.code }}</div>
                    <div class="mx-1"><b-button variant="success" size="sm" @click="focusVideo(v)">Focus</b-button></div>
                    <div class="mx-1">
                        <b-button-group>
                            <b-button variant="secondary" size="sm" @click="moveLeft(v)">&lt;</b-button>
                            <b-button variant="secondary" size="sm" @click="moveRight(v)">&gt;</b-button>
                        </b-button-group>
                    </div>
                    <div class="mx-1 ml-auto"><b-button variant="danger" size="sm" @click="removeVideo(v)">&times;</b-button></div>
                </div>
                <b-embed type="iframe" aspect="16by9" :src="v.url" allowfullscreen></b-embed>
            </div>
        </div>
    
        <div class="d-flex">
            <div class="mr-1 flex-grow-1">
                <b-input-group class="" prepend="Share" size="sm">
                    <b-form-input v-model="exportUrl" :id="exportUrlId" disabled></b-form-input>
                    <b-input-group-append>
                        <b-button variant="secondary" @click="copyUrl()">Copy URL</b-button>
                    </b-input-group-append>
                </b-input-group>
            </div>
            <div class="ml-auto mx-1 p-2 small">
                Version: {{ version }}
            </div>
            <div class="ml-1">
                <a href="https://github.com/oceanxdds/yt_monitor" target="_blank">
                    <img src="images/theme/GitHub-Mark-32px.png">
                </a>
            </div>
        </div>
    
    </div>
</template>

<style>
[v-cloak] { display: none;}
</style>

<script>

const yt_monitor_host = "https://oceanxdds.github.io/yt_monitor";
const yt_host = "https://www.youtube.com";
const yt_short_host = "https://youtu.be";
const yt_embed_host = "https://www.youtube-nocookie.com/embed";
const tt_host = "https://www.twitch.tv";
const tt_embed_channel_host = "https://player.twitch.tv/?channel=";

export default {
    data:function(){
        return {
            version:'190613',
            url:'',
            exportUrlId:'expUrl',
            videos:[]
        }
    },
    computed:{
        orderedVideos:function(){
            return this.videos.sort((a,b)=>(a.order-b.order));
        },
        hash:function(){
            
            return '#'+this.orderedVideos.map(v=>v.type+':'+v.code).join(',');
        },
        exportUrl:function(){

            return yt_monitor_host +'/'+ this.hash;
        },
    },
    created:function(){
        
        if(window.location.hash)
            this.addVideo(window.location.hash.substr(1));
    },
    methods:{

        addVideo:function(url){
            
            url = url ? url : this.url;

            url.split(/ |,/).filter(x=>x).forEach(u=>{

                let code = '';
                let temp = '';
                let url2 = '';
                let type = '';

                if(!code)
                {
                    if(temp = u.match(/^[a-zA-Z0-9-_:]+$/))
                    {
                        code = temp[0];
                        temp = code.split(':');

                        if(temp.length==2&&temp[0]=='yt'){
                            code = temp[1];
                            url2 = yt_embed_host+'/'+code;
                            type = 'yt';
                        }
                        else if(temp.length==2&&temp[0]=='tt')
                        {
                            code = temp[1];
                            url2 = tt_embed_channel_host+code;
                            type = 'tt';
                        }
                        else{
                            url2 = yt_embed_host+'/'+code;
                            type = 'yt';
                        }
                    }
                }

                if(!code)
                {
                    if(u.match(yt_host))
                    {
                        if(temp = u.replace(yt_host,"").match(/v=[a-zA-Z0-9-_]+/))
                        {
                            code = temp[0].replace('v=','');
                            url2 = yt_embed_host+'/'+code;
                            type = 'yt';
                        }
                    }
                }

                if(!code)
                {
                    if(u.match(yt_short_host))
                    {
                        if(temp = u.replace(yt_short_host,"").match(/[a-zA-Z0-9-_]+/))
                        {
                            code = temp[0];
                            url2 = yt_embed_host+'/'+code;
                            type = 'yt';
                        }
                    }
                }

                if(!code)
                {
                    if(u.match(tt_host))
                    {
                        if(temp = u.replace(tt_host,"").match(/[a-zA-Z0-9-_]+/))
                        {
                            code = temp[0];
                            url2 = tt_embed_channel_host+code;
                            type = 'tt';
                        }
                    }
                }

                if(!code)
                    return;

                if(this.videos.filter(v=>v.code==code).length>0)
                    return ;
                
                this.videos.push({
                    code:code,
                    focus:false,
                    url:url2,
                    type:type,
                    order:this.videos.length
                });
            });

            this.url = '';

            this.updateHash();
        },
        removeVideo:function(video){

            this.videos = this.videos.filter(v=>v.code!=video.code);

            this.updateOrder();
            this.updateHash();
        },
        focusVideo:function(video){

            this.videos.map(v=>{v.focus=(v.code==video.code)&&!v.focus});
        },
        moveLeft:function(video){

            if(video.order!=0){

                let index = video.order;
                let left,right;
                this.videos.forEach(v=>{
                    if(v.order==index-1) left = v;
                    if(v.order==index)   right = v;
                });
                left.order = index;
                right.order = index-1;
            }

            this.updateHash();
        },
        moveRight:function(video){

            if(video.order!=this.videos.length-1){

                let index = video.order;
                let left,right;
                this.videos.forEach(v=>{
                    if(v.order==index)    left = v;
                    if(v.order==index+1)  right = v;
                });
                left.order = index+1;
                right.order = index;
            }
            
            this.updateHash();
        },
        updateOrder:function(){

            let order=0;
            this.orderedVideos.forEach(v=>{v.order=order++});
        },
        updateHash:function(){
            
            window.location.hash = this.hash;
        },
        copyUrl:function(){

            let TextRange = document.createRange();

            TextRange.selectNode(document.getElementById(this.exportUrlId));

            let sel = window.getSelection();

            sel.removeAllRanges();

            sel.addRange(TextRange);

            document.execCommand("copy");
            
            sel.removeAllRanges();
        }
    }
}
</script>