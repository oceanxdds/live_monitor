(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(t,e,o){o(194),t.exports=o(447)},388:function(t,e,o){"use strict";var n=o(81);o.n(n).a},389:function(t,e,o){(t.exports=o(390)(!1)).push([t.i,"\n[v-cloak] { display: none;}\n.mw-1140{ max-width:1140px;\n}\n.bg-custom{ background-color:#f0f0f0;\n}\r\n",""])},447:function(t,e,o){"use strict";o.r(e);var n=o(31),i=o(187),s=o.n(i),a=o(188),r=o.n(a),c=o(189),u=o.n(c),l=o(190),d=o.n(l),v=o(191),f=o.n(v),h=o(192),m=o.n(h),p="https://www.youtube-nocookie.com/embed",b="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com",_="https://livestream.com",w=function(t){return t.split(/ |,/).map(function(t){if(!t)return null;var e=function(t){var e="",o="",n="",i="";return t?(!e&&(i=t.match(/^[a-zA-Z0-9-_.]+$/))&&(e=[n="yt",i[0]].join(":"),o=p+"/"+i[0]),!e&&(i=t.match(/^(yt):([a-zA-Z0-9-_.]+)$/))&&(e=[n=i[1],i[2]].join(":"),o=p+"/"+i[2]),!e&&(i=t.match(/^https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9-_.]+)/))&&(e=[n="yt",i[1]].join(":"),o=p+"/"+i[1]),!e&&(i=t.match(/^https:\/\/www.youtube\.com\/embed\/([a-zA-Z0-9-_.]+)/))&&(e=[n="yt",i[1]].join(":"),o=p+"/"+i[1]),!e&&(i=t.match(/^https:\/\/youtu\.be\/([a-zA-Z0-9-_.]+)/))&&(e=[n="yt",i[1]].join(":"),o=p+"/"+i[1]),!e&&(i=t.match(/^(tt):([a-zA-Z0-9-_.]+)$/))&&(n=i[1],e=[i[1],i[2]].join(":"),o="https://player.twitch.tv/?channel="+i[2]+"&autoplay=false"),!e&&(i=t.match(/^https:\/\/www\.twitch\.tv\/([a-zA-Z0-9-_.]+)/))&&(e=[n="tt",i[1]].join(":"),o="https://player.twitch.tv/?channel="+i[1]+"&autoplay=false"),!e&&(i=t.match(/^(fb):([a-zA-Z0-9-_.]+):(\d+)$/))&&(e=[n=i[1],i[2],i[3]].join(":"),o=b+"/"+i[2]+"/videos/"+i[3]+"&autoplay=false"),!e&&(i=t.match(/^https:\/\/www\.facebook\.com\/([a-zA-Z0-9-_.]+)\/videos\/(\d+)/))&&(e=[n="fb",i[1],i[2]].join(":"),o=b+"/"+i[1]+"/videos/"+i[2]+"&autoplay=false"),!e&&(i=t.match(/^(ls):(\d+):(\d+)$/))&&(e=[n=i[1],i[2],i[3]].join(":"),o=_+"/accounts/"+i[2]+"/events/"+i[3]+"/player"),!e&&(i=t.match(/^(ls):(\d+):(\d+):(\d+)$/))&&(e=[n=i[1],i[2],i[3],i[4]].join(":"),o=_+"/accounts/"+i[1]+"/events/"+i[2]+"/videos/"+i[3]+"/player"),!e&&(i=t.match(/^https:\/\/livestream\.com\/accounts\/(\d+)\/events\/(\d+)/))&&(e=[n="ls",i[1],i[2]].join(":"),o=_+"/accounts/"+i[1]+"/events/"+i[2]+"/player"),!e&&(i=t.match(/^https:\/\/livestream\.com\/accounts\/(\d+)\/events\/(\d+)\/videos\/(\d+)/))&&(e=[n="ls",i[1],i[2],i[3]].join(":"),o=_+"/accounts/"+i[1]+"/events/"+i[2]+"/videos/"+i[3]+"/player"),e?{type:n,code:e,url:o,focus:!1,order:0}:null):null}(t);return e||null}).filter(function(t){return t})},y=o(185),x=o.n(y),g=[{url:"https://oceanxdds.github.io/live_monitor/channel.txt",last:"",callback:function(t,e,o){e!=t.last&&(t.last=e,o([e]))}},{url:"https://ncehk2019.github.io/nce-live-datasrc/lives.json",last:"",callback:function(t,e,o){if(e&&e.lives){var n=e.lives.filter(function(t){return t.active}).map(function(t){return t["#id"]});t.last!=n.join()&&(t.last=n.join(),o(n))}}}],k={data:function(){return{version:"190619",url:"",videos:[],export_url:"",export_url_id:"export_url_id",auto:!1,auto_interval:null}},watch:{hash:function(){window.location.hash=this.hash,this.export_url="https://oceanxdds.github.io/live_monitor/"+this.hash},videos:function(){document.title=(this.videos.length?"("+this.videos.length+") ":"")+"Live Monitor"},auto:function(){if(clearInterval(this.auto_interval),this.auto){var t=this;this.auto_interval=setInterval(function(){t.syncLive()},6e5)}}},computed:{hash:function(){return"#"+this.videos.map(function(t){return t}).sort(function(t,e){return t.order-e.order}).map(function(t){return t.code}).join(",")}},mounted:function(){window.location.hash&&this.addVideo(window.location.hash.substr(1))},methods:{syncLive:function(){var t,e=this;t=function(t){t.forEach(function(t){e.addVideo(t)})},g.forEach(function(e){x.a.get(e.url,{params:{time:(new Date).getTime()}}).then(function(o){e.callback(e,o.data,t)})})},addVideo:function(t){var e=this;t=t||this.url,w(t).forEach(function(t){e.videos.filter(function(e){return e.code==t.code}).length>0||(t.order=e.videos.length,e.videos.push(t))}),this.url=""},removeVideo:function(t){this.videos.splice(this.videos.indexOf(t),1),this.updateOrder()},focusVideo:function(t){this.videos.forEach(function(e){e.focus=e.code==t.code&&!e.focus})},moveLeft:function(t){if(0!=t.order){var e=this.videos.filter(function(e){return e.order==t.order-1})[0],o=[t.order,e.order];e.order=o[0],t.order=o[1]}},moveRight:function(t){if(t.order!=this.videos.length-1){var e=this.videos.filter(function(e){return e.order==t.order+1})[0],o=[e.order,t.order];t.order=o[0],e.order=o[1]}},updateOrder:function(){this.videos.map(function(t){return t}).sort(function(t,e){return t.order-e.order}).forEach(function(t,e){t.order=e})},copyUrl:function(){var t=document.createRange();t.selectNode(document.getElementById(this.exportUrlId));var e=window.getSelection();e.removeAllRanges(),e.addRange(t),document.execCommand("copy"),e.removeAllRanges()}}},C=(o(388),o(186)),j=Object(C.a)(k,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"shadow-sm"},[o("div",{staticClass:"container-fluid mw-1140 py-2"},[o("div",{staticClass:"d-flex"},[o("div",{staticClass:"mr-1"},[o("b-button",{staticClass:"text-nowrap",attrs:{size:"sm",pill:"",variant:"success"},on:{click:function(e){return t.syncLive()}}},[t._v("I ♥ HK")])],1),t._v(" "),o("div",{staticClass:"ml-1 flex-grow-1"},[o("b-input-group",{attrs:{prepend:"Source",size:"sm"}},[o("b-form-input",{attrs:{placeholder:"YouTube, Twitch, Facebook, Livestream"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addVideo()}},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),o("b-input-group-append",[o("b-button",{on:{click:function(e){return t.addVideo()}}},[t._v("Enter")])],1)],1)],1)])])]),t._v(" "),o("div",{staticClass:"container-fluid"},[t.videos.length?o("div",{staticClass:"form-row py-3"},t._l(t.videos,function(e){return o("div",{key:e.code,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3",class:{"col-md-12":e.focus,"col-lg-8":e.focus,"col-xl-6":e.focus},style:{order:e.focus?0:e.order+1}},[o("div",{staticClass:"border my-1"},[o("div",{staticClass:"d-flex py-1"},[o("div",{staticClass:"mx-1"},[o("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(o){return t.focusVideo(e)}}},[t._v("CH"+t._s(e.order+1))])],1),t._v(" "),o("div",{staticClass:"mx-1"},[o("b-form-input",{attrs:{size:"sm",value:e.code,disabled:""}})],1),t._v(" "),o("div",{staticClass:"mx-1"},[o("b-button-group",[o("b-button",{attrs:{variant:"secondary",size:"sm"},on:{click:function(o){return t.moveLeft(e)}}},[t._v("<")]),t._v(" "),o("b-button",{attrs:{variant:"secondary",size:"sm"},on:{click:function(o){return t.moveRight(e)}}},[t._v(">")])],1)],1),t._v(" "),o("div",{staticClass:"mx-1 ml-auto"},[o("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(o){return t.removeVideo(e)}}},[t._v("✕")])],1)]),t._v(" "),o("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:e.url,allowfullscreen:""}})],1)])}),0):o("div",{staticClass:"py-5 text-center text-secondary"},[o("h6",[t._v("Watch Live from YouTube, Twitch, Facebook, Livestream in one page.")])])]),t._v(" "),o("div",{},[o("div",{staticClass:"container-fluid mw-1140 py-2"},[o("b-input-group",{attrs:{prepend:"Share",size:"sm"}},[o("b-form-input",{attrs:{id:t.export_url_id,disabled:""},model:{value:t.export_url,callback:function(e){t.export_url=e},expression:"export_url"}}),t._v(" "),o("b-input-group-append",[o("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.copyUrl()}}},[t._v("Copy URL")])],1)],1)],1),t._v(" "),o("div",{staticClass:"container-fluid mw-1140 py-2"},[o("div",{staticClass:"d-flex"},[o("div",{staticClass:"mr-1 flex-fill"},[o("b-form-checkbox",{attrs:{switch:""},model:{value:t.auto,callback:function(e){t.auto=e},expression:"auto"}},[t._v("\r\n                        Load videos every 5 min(s).\r\n                    ")])],1),t._v(" "),o("div",{staticClass:"mx-1 p-2 small"},[t._v("\r\n                    Version: "+t._s(t.version)+"\r\n                ")]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mx-1"},[e("a",{attrs:{href:"https://extradition.g0vhk.io/index-en.html",target:"_blank"}},[e("img",{attrs:{src:"images/theme/Bauhinia-32px.png",title:"Hong Kong Anti Extradition Law"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-1"},[e("a",{attrs:{href:"https://github.com/oceanxdds/live_monitor",target:"_blank"}},[e("img",{attrs:{src:"images/theme/GitHub-Mark-32px.png",title:"GitHub"}})])])}],!1,null,null,null).exports;n.default.use(s.a),n.default.use(r.a),n.default.use(u.a),n.default.use(d.a),n.default.use(f.a),n.default.use(m.a),new n.default({el:"app",render:function(t){return t(j)}})},81:function(t,e,o){var n=o(389);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(391)(n,i);n.locals&&(t.exports=n.locals)}},[[193,1,2]]]);