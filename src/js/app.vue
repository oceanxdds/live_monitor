<template>
<div>
    <div class="shadow-sm">
        <div class="container-fluid mw-1140 py-2">
            <div class="d-flex">
                <div class="mr-1">
                    <b-button size="sm" class="text-nowrap" pill variant="success" @click="syncLive()">I ♥ HK</b-button>
                </div>
                <div class="ml-1 flex-fill">
                    <b-input-group prepend="Source" size="sm">
                        <b-form-input v-model="url" placeholder="YouTube, Twitch, Facebook, Livestream" @keydown.enter="addVideo()"></b-form-input>
                        <b-input-group-append>
                            <b-button @click="addVideo()">Enter</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </div>
            </div>
            
            
        </div>
    </div>

    <div class="container-fluid">
        <div class="form-row py-3" v-if="videos.length">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3" :class="{'col-md-12':v.focus,'col-lg-8':v.focus,'col-xl-6':v.focus}" :style="{'order':v.focus?0:(v.order+1)}" v-for="v in videos" :key="v.code">
                <div class="border my-1">
                    <div class="d-flex py-1">
                        <div class="mx-1"><b-button variant="success" size="sm" @click="focusVideo(v)">CH{{ (v.order+1) }}</b-button></div>
                        <div class="mx-1"><b-form-input size="sm" :value="v.code" disabled></b-form-input></div>
                        <div class="mx-1">
                            <b-button-group>
                                <b-button variant="secondary" size="sm" @click="moveLeft(v)">&lt;</b-button>
                                <b-button variant="secondary" size="sm" @click="moveRight(v)">&gt;</b-button>
                            </b-button-group>
                        </div>
                        <div class="mx-1 ml-auto"><b-button variant="danger" size="sm" @click="removeVideo(v)">&#10005;</b-button></div>
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
                <b-form-input v-model="export_url" :id="export_url_id" disabled></b-form-input>
                <b-input-group-append>
                    <b-button variant="secondary" @click="copyUrl()">Copy URL</b-button>
                </b-input-group-append>
            </b-input-group>
        </div>
        <div class="container-fluid mw-1140 py-2">
            <div class="d-flex">
                <div class="mr-1 flex-fill">
                    <b-form-checkbox v-model="auto" switch>
                        Load videos every 5 min(s).
                    </b-form-checkbox>
                </div>
                <div class="mx-1 p-2 small">
                    Version: {{ version }}
                </div>
                <div class="mx-1">
                    <a href="https://extradition.g0vhk.io/index-en.html" target="_blank">
                        <img src="images/theme/Bauhinia-32px.png" title="Hong Kong Anti Extradition Law">
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
</style>

<script>
import {str2videos} from './utility';
import {loadVideos} from './utility';

const live_monitor_host = "https://oceanxdds.github.io/live_monitor";

export default {
    data:function(){
        return {
            version:'190620',
            url:'',
            videos:[],
            export_url:'',
            export_url_id:'export_url_id',
            auto:false,
            auto_interval:null
        }
    },
    watch:{

        hash:function(){

            window.location.hash = this.hash;
            this.export_url = live_monitor_host +'/'+ this.hash;
        },
        videos:function(){

            document.title = (this.videos.length ? '('+this.videos.length+') ' : '')+'Live Monitor';
        },
        auto:function(){
            
            clearInterval(this.auto_interval);

            if(this.auto)
            {
                let self = this;
                this.auto_interval = setInterval(function(){
                    self.syncLive();
                },600000)
            }
        }
    },
    computed:{

        hash:function(){
            
            return '#'+this.videos.map(v=>v).sort((a,b)=>(a.order-b.order)).map(v=>v.code).join(',');
        }
    },
    mounted:function(){
        
        if(window.location.hash)
            this.addVideo(window.location.hash.substr(1));
        
        this.syncLive();

        this.auto = true;
    },
    methods:{
        
        syncLive:function(){
            
            let self = this;

            loadVideos(function(arr){
                
                arr.forEach(str=>{self.addVideo(str);})
            });
        },
        addVideo:function(url){
            
            url = url ? url : this.url;

            let videos = str2videos(url);
            
            videos.forEach(video=>{

                if(this.videos.filter(v=>v.code==video.code).length>0)
                    return ;
        
                video.order = this.videos.length;
                this.videos.push(video);
            });

            this.url = '';
        },
        removeVideo:function(video){

            this.videos.splice(this.videos.indexOf(video),1);
            this.updateOrder();
        },
        focusVideo:function(video){

            this.videos.forEach(v=>{v.focus=(v.code==video.code)&&!v.focus});
        },
        moveLeft:function(video){

            if(video.order==0) return;

            let left = this.videos.filter(v=>v.order==video.order-1)[0];
            [left.order,video.order] = [video.order,left.order];
        },
        moveRight:function(video){

            if(video.order==this.videos.length-1) return;
                        
            let right = this.videos.filter(v=>v.order==video.order+1)[0];
            [video.order,right.order] = [right.order,video.order];
        },
        updateOrder:function(){

           this.videos.map(v=>v).sort((a,b)=>(a.order-b.order))
                .forEach((v,index)=>{v.order = index});
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