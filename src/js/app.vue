<template>
<div>
    <div class="shadow-sm">
        <div class="container-fluid mw-1140 py-2">
            <b-input-group prepend="Source" size="sm">
                <b-form-input v-model="url" placeholder="YouTube, Twitch, Facebook, Livestream" @keydown.enter="addVideo()"></b-form-input>
                <b-input-group-append>
                    <b-button @click="addVideo()">Enter</b-button>
                </b-input-group-append>
            </b-input-group>
        </div>
    </div>

    <div class="container-fluid">
        <div class="form-row py-3" v-if="videos.length">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3" :class="{'col-md-12':v.focus,'col-lg-8':v.focus,'col-xl-6':v.focus,'order-first':v.focus}" v-for="(v,index) in videos" :key="v.code">
                <div class="border my-1">
                    <div class="d-flex py-1">
                        <div class="mx-1"><b-button variant="success" size="sm" @click="focusVideo(v)">CH{{ (index+1) }}</b-button></div>
                        <div class="mx-1"><b-form-input size="sm" :value="v.type +':'+ v.code " disabled></b-form-input></div>
                        <div class="mx-1">
                            <b-button-group>
                                <b-button variant="secondary" size="sm" @click="moveLeft(index)">&lt;</b-button>
                                <b-button variant="secondary" size="sm" @click="moveRight(index)">&gt;</b-button>
                            </b-button-group>
                        </div>
                        <div class="mx-1 ml-auto"><b-button variant="danger" size="sm" @click="removeVideo(index)">&#10005;</b-button></div>
                    </div>
                    <b-embed type="iframe" aspect="16by9" :src="v.url" allowfullscreen></b-embed>
                </div>
            </div>
        </div>
        <div v-else class="py-5 text-center text-secondary">
            <h6>Watch Live from YouTube, Twitch, Facebook, Livestream in one page.</h6>
        </div>
    </div>

    <div class="">
        <div class="container-fluid mw-1140 py-2">
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
                    <a href="https://extradition.g0vhk.io/index-en.html" target="_blank">
                        <img src="images/theme/Bauhinia-32px.png" title="Hong Kong Anti Extradition Bill">
                    </a>
                 </div>
                <div class="ml-1">
                    <a href="https://github.com/oceanxdds/live_monitor" target="_blank">
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
.mw-1140{ max-width:1140px; }
.bg-custom{ background-color:#f0f0f0; }
</style>

<script>

const live_monitor_host = "https://oceanxdds.github.io/live_monitor";
const yt_host = "https://www.youtube.com";
const yt_short_host = "https://youtu.be";
const yt_embed_host = "https://www.youtube-nocookie.com/embed";
const tt_host = "https://www.twitch.tv";
const tt_embed_channel_host = "https://player.twitch.tv/?channel=";
const fb_host = "https://www.facebook.com";
const fb_embed_host = "https://www.facebook.com/plugins/video.php?href=";
const ls_host = "https://livestream.com";

export default {
    data:function(){
        return {
            version:'190615',
            url:'',
            exportUrlId:'expUrlId',
            videos:[]
        }
    },
    watch:{
        hash:function(){

            window.location.hash = this.hash;
        }
    },
    computed:{
        hash:function(){
            
            return '#'+this.videos.map(v=>v.type+':'+v.code).join(',');
        },
        export_url:function(){

            return live_monitor_host +'/'+ this.hash;
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
                    if(temp = u.match(/^[a-zA-Z0-9-_:.]+$/))
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
                            url2 = tt_embed_channel_host+code+'&autoplay=false';
                            type = 'tt';
                        }
                        else if(temp.length==3&&temp[0]=='fb'){
                            code = temp[1]+':'+temp[2];
                            url2 = fb_embed_host+fb_host+'/'+temp[1]+'/videos/'+temp[2];
                            type = 'fb';
                        }
                        else if(temp.length==3&&temp[0]=='ls'){
                            code = temp[1]+':'+temp[2];
                            url2 = ls_host+'/accounts/'+temp[1]+'/events/'+temp[2]+'/player';
                            type = 'ls';
                        }
                        else if(temp.length==4&&temp[0]=='ls'){
                            code = temp[1]+':'+temp[2]+':'+temp[3];
                            url2 = ls_host+'/accounts/'+temp[1]+'/events/'+temp[2]+'/videos/'+temp[3]+'/player';
                            type = 'ls';
                        }
                        else{
                            url2 = yt_embed_host+'/'+code;
                            type = 'yt';
                        }
                    }
                }

                if(!code && u.match(yt_host))
                {
                    if(temp = u.replace(yt_host,"").match(/v=[a-zA-Z0-9-_.]+/))
                    {
                        code = temp[0].replace('v=','');
                        url2 = yt_embed_host+'/'+code;
                        type = 'yt';
                    }
                }

                if(!code && u.match(yt_short_host))
                {
                    if(temp = u.replace(yt_short_host,"").match(/[a-zA-Z0-9-_.]+/))
                    {
                        code = temp[0];
                        url2 = yt_embed_host+'/'+code;
                        type = 'yt';
                    }
                }

                if(!code && u.match(tt_host))
                {
                    if(temp = u.replace(tt_host,"").match(/[a-zA-Z0-9-_.]+/))
                    {
                        code = temp[0];
                        url2 = tt_embed_channel_host+code+'&autoplay=false';
                        type = 'tt';
                    }
                }

                if(!code && u.match(fb_host))
                {
                    if(temp = u.replace(fb_host,"").match(/\/([a-zA-Z0-9-_.]+)\/videos\/(\d+)/))
                    {
                        code = temp[1]+':'+temp[2];
                        url2 = fb_embed_host+fb_host+'/'+temp[1]+'/videos/'+temp[2];
                        type = 'fb';
                    }
                }

                if(!code && u.match(ls_host))
                {
                    if(temp = u.replace(ls_host,"").match(/accounts\/(\d+)\/events\/(\d+)\/videos\/(\d+)/))
                    {
                        code = temp[1]+':'+temp[2]+':'+temp[3];
                        url2 = ls_host+'/accounts/'+temp[1]+'/events/'+temp[2]+'/videos/'+temp[3]+'/player';
                        type = 'ls';
                    }
                }

                if(!code && u.match(ls_host))
                {
                    if(temp = u.replace(ls_host,"").match(/accounts\/(\d+)\/events\/(\d+)/))
                    {
                        code = temp[1]+':'+temp[2];
                        url2 = ls_host+'/accounts/'+temp[1]+'/events/'+temp[2]+'/player';
                        type = 'ls';
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
                    type:type
                });
            });

            this.url = '';
        },
        removeVideo:function(index){

            this.videos.splice(index,1);
        },
        focusVideo:function(video){

            this.videos.forEach(v=>{v.focus=(v.code==video.code)&&!v.focus});
        },
        moveLeft:function(index){

            if(index==0)
                return ;

            this.videos.splice(index-1,0,this.videos.splice(index,1)[0]);
        },
        moveRight:function(index){

            if(index==this.videos.length-1)
                return ;

            this.videos.splice(index,0,this.videos.splice(index+1,1)[0]);
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