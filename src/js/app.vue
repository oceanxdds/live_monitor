<template>
    <div class="container-fluid">
        <b-input-group class="my-3" prepend="YouTube">
            <b-form-input v-model="url" placeholder="ID, or URL, or Short URL"></b-form-input>
            <b-input-group-append>
                <b-button size="sm" text="Button" variant="primary" @click="addVideo()">Go</b-button>
            </b-input-group-append>
        </b-input-group>
        <div class="form-row my-3">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3" :class="{'col-md-12':v.focus,'col-lg-8':v.focus,'col-xl-6':v.focus}" v-for="v in videos" :key="v.code">
                <div class="border">
                    {{ v.code }}
                    <b-button variant="secondary" size="sm" @click="focusVideo(v.code)">Focus</b-button>
                    <b-button variant="danger" size="sm" @click="removeVideo(v.code)">&times;</b-button>
                    <b-embed type="iframe" aspect="16by9" :src="v.url" allowfullscreen></b-embed>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
[v-cloak] { display: none;}
</style>

<script>

const yt_host = "https://www.youtube.com";
const yt_short_host = "https://youtu.be";

export default {
    data:function(){
        return {
            url:'',
            videos:[]
        }
    },
    created:function(){
        
        this.addVideo('OYJ3ycwSlik');
    },
    methods:{

        addVideo:function(code){
            
            let temp = '';

            if(!code){

                if(temp = this.url.match(/^[a-zA-Z0-9]+$/))
                {
                    code = temp[0];
                }
            }

            if(!code)
            {
                if(this.url.match(yt_host))
                {
                    if(temp = this.url.replace(yt_host,"").match(/v=[a-zA-Z0-9]+/))
                    {
                        code = temp[0].replace('v=','');
                    }
                }
            }

            if(!code)
            {
                if(this.url.match(yt_short_host))
                {
                    if(temp = this.url.replace(yt_short_host,"").match(/[a-zA-Z0-9]+/))
                    {
                        code = temp[0];
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
                url:'https://www.youtube.com/embed/'+code
            });
        },
        removeVideo:function(code){

            this.videos = this.videos.filter(v=>v.code!=code);
        },
        focusVideo:function(code){

            this.videos.map(v=>{v.focus=(v.code==code)&&!v.focus});
        }
    }
}
</script>