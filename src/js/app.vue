<template>
<div>
    <div class="shadow-sm">
        <div class="container-fluid wm-1140 py-2">
            <b-input-group prepend="Source" size="sm">
                <b-form-input v-model="url" placeholder="[ YouTube ] yt:ID or URL or Short URL. [ Twitch ] tt:ID or URL. [ Facebook ] fb:ID:VideoID or URL." @keydown.enter="addVideo()"></b-form-input>
                <b-input-group-append>
                    <b-button @click="addVideo()">Enter</b-button>
                </b-input-group-append>
            </b-input-group>
        </div>
    </div>

    <div class="container-fluid">
        
        <div class="form-row py-3" v-if="ordered_videos.length">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3" :class="{'col-md-12':v.focus,'col-lg-8':v.focus,'col-xl-6':v.focus}" v-for="v in ordered_videos" :key="v.code">
                <div class="d-flex border py-1">
    
                    <div class="mx-1"><b-form-input size="sm" :value="v.type +':'+ v.code " disabled></b-form-input></div>
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

        <div v-else class="py-5 text-center text-secondary">
            <h6>Watch YouTube, Twitch, Facebook videos in one page.</h6>
        </div>
    </div>

    <div class="">
        <div class="container-fluid wm-1140 py-2">
            <b-input-group class="" prepend="Share" size="sm">
                <b-form-input v-model="export_url" :id="exportUrlId" disabled></b-form-input>
                <b-input-group-append>
                    <b-button variant="secondary" @click="copyUrl()">Copy URL</b-button>
                </b-input-group-append>
            </b-input-group>
        </div>
        <div class="container py-2">
            <div class="d-flex">
                <div class="mr-1 flex-grow-1">
                    
                </div>
                <div class="ml-auto mx-1 p-2 small">
                    Version: {{ version }}
                </div>
                <div class="mx-1">
                    <img src="images/theme/Bauhinia-32px.png" title="Hong Kong Anti Extradition Law">
                 </div>
                <div class="ml-1">
                    <a href="https://github.com/oceanxdds/yt_monitor" target="_blank">
                        <img src="images/theme/GitHub-Mark-32px.png" title="GitHub">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>
[v-cloak] { display: none;}
.wm-1140{ max-width:1140px; }
.bg-custom{ background-color:#f0f0f0; }
</style>

<script>

const yt_monitor_host = "https://oceanxdds.github.io/yt_monitor";
const yt_host = "https://www.youtube.com";
const yt_short_host = "https://youtu.be";
const yt_embed_host = "https://www.youtube-nocookie.com/embed";
const tt_host = "https://www.twitch.tv";
const tt_embed_channel_host = "https://player.twitch.tv/?channel=";
const fb_host = "https://www.facebook.com";
const fb_embed_host = "https://www.facebook.com/plugins/video.php?href=";

export default {
    data:function(){
        return {
            version:'190614',
            url:'',
            exportUrlId:'expUrl',
            videos:[]
        }
    },
    computed:{
        ordered_videos:function(){

            return this.videos.sort((a,b)=>(a.order-b.order));
        },
        hash:function(){
            
            return '#'+this.videos.map(v=>v.type+':'+v.code).join(',');
        },
        export_url:function(){

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
                        else if(temp.length==3&&temp[0]=='fb'){
                            code = temp[1]+':'+temp[2];
                            url2 = fb_embed_host+fb_host+'/'+temp[1]+'/videos/'+temp[2];
                            type = 'fb';
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
                {
                    if(u.match(fb_host))
                    {
                        if(temp = u.replace(fb_host,"").match(/\/([a-zA-Z0-9-_]+)\/videos\/(\d+)/))
                        {
                            code = temp[1]+':'+temp[2];
                            url2 = fb_embed_host+fb_host+'/'+temp[1]+'/videos/'+temp[2];
                            type = 'fb';
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

            let index = video.order;

            if(index==0)
                return ;

            [this.videos[index-1],this.videos[index]]
            = [this.videos[index],this.videos[index-1]];

            this.updateOrder();
            this.updateHash();
        },
        moveRight:function(video){

            let index = video.order;

            if(index==this.videos.length-1)
                return ;

            [this.videos[index],this.videos[index+1]]
            = [this.videos[index+1],this.videos[index]];

            this.updateOrder();
            this.updateHash();
        },
        updateOrder:function(){

            let order=0;
            this.videos.forEach(v=>{v.order=order++});
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