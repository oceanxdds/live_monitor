<template>
<div>
    <div class="shadow-sm">
        <div class="container-fluid mw-1140 py-2">
            <div class="d-flex">
                <div class="mr-1 flex-fill">
                    <b-input-group prepend="" size="sm">
                        <b-input-group-append>
                            <b-dropdown size="sm" split text="Reload" variant="success" @click="syncLive()">
                                <b-dropdown-item href="#" @click="toggleAuto()">
                                    Auto reload | <span class="font-weight-bold" :class="{'text-success':auto,'text-secondary':!auto}">{{ auto ? 'On' : 'Off' }}</span>
                                </b-dropdown-item>
                                <b-dropdown-text style="width:275px">
                                    Youtube channel live check
                                </b-dropdown-text>
                            </b-dropdown>
                        </b-input-group-append>
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
            <div class="col-12 col-md-6 col-lg-4 col-xl-3" 
                :class="{'col-md-12':v.focus,'col-lg-8':v.focus,'col-xl-6':v.focus,'dragging':v.dragging,'dragover':v.dragover}" 
                :style="{'order':v.focus?0:(v.order+1)}" 
                v-for="v in videos" :key="v.code"
                :id="v.code">
                <div class="border my-1 bg-white">
                    <div class="d-flex py-1 cursor-move"
                        draggable="true"
                        @dragstart="dragstart_handler(v)"
                        @dragend="dragend_handler(v)"
                        
                        @dragenter="dragenter_handler(v)"
                        @dragover.prevent="dragover_handler(v)"
                        @dragleave="dragleave_handler(v)"
                        @drop="drop_handler(v)"
                        
                        @touchend="dragend_handler(v)">
                        <b-dropdown class="mx-1" size="sm" split :text="'CH'+ (v.order+1) " variant="success" @click="focusVideo(v)">
                            <b-dropdown-text style="width:275px">
                                <b-form-input size="sm" :value="v.code" disabled></b-form-input>
                            </b-dropdown-text>
                        </b-dropdown>
                        <div class="mx-1 ml-auto"><b-button variant="danger" size="sm" @click="removeVideo(v)">&#10005;</b-button></div>
                    </div>
                    <b-embed type="iframe" aspect="16by9" :src="v.url" allowfullscreen draggable="false"></b-embed>
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

                </div>
                <div class="mx-1 p-2 small">
                    Version: {{ version }}
                </div>
                <div class="mx-1">
                    <a href="https://tl.hkrev.info/en/police-timeline/" target="_blank">
                        <img src="images/theme/hkdm-32px.png" title="Hong Kong Democratic Movement">
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
[draggable="true"] { user-select: none; }
.cursor-move{ cursor:move; }
.dragging{background-color:cornflowerblue}
.dragover{background-color:cornflowerblue}
</style>

<script>
import {str2videos} from './utility';
import {loadVideos} from './utility';

const live_monitor_host = "https://oceanxdds.github.io/live_monitor";

export default {
    data:function(){
        return {
            version:'200322',
            url:'',
            videos:[],
            export_url:'',
            export_url_id:'export_url_id',
            auto:false,
            auto_interval:null,
            live_mode:true,
            dragged_video:null
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
        
        if(this.live_mode){
            
            this.syncLive();

            this.auto = true;
        }
        
    },
    methods:{
        toggleAuto:function(){

            this.auto = ! this.auto;
        },
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
            TextRange.selectNode(document.getElementById(this.export_url_id));

            let sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(TextRange);
            document.execCommand("copy");
            sel.removeAllRanges();
        },
        dragstart_handler:function(video){
            this.dragged_video = video;
            video.dragging = true;
        },
        dragend_handler:function(video){
            this.dragged_video = null;
            video.dragging = false;
        },
        dragenter_handler:function(video){
            video.dragover = true;
        },
        dragover_handler:function(video){
            video.dragover = true;
        },
        dragleave_handler:function(video){
            video.dragover = false;
        },
        drop_handler:function(video){
            
            video.dragover = false;
            
            if(!this.dragged_video)
                return;
            
            let a = this.dragged_video;
            let b = video;
            let order = video.order;

            if( b.order < a.order ){
                
                this.videos.forEach(v=>{
                    if( order <= v.order && v.order < a.order )
                        v.order++;
                })

                a.order = order;
            }
            else if( a.order < b.order ){

                this.videos.forEach(v=>{
                    if( a.order < v.order && v.order <= order )
                        v.order--;
                })

                a.order = order;
            }else{
                
            }
            
            
        }
    }
}
</script>