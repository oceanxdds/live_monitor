(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(t,e,o){o(160),t.exports=o(372)},338:function(t,e,o){"use strict";var r=o(74);o.n(r).a},339:function(t,e,o){(t.exports=o(340)(!1)).push([t.i,"\n[v-cloak] { display: none;}\r\n",""])},372:function(t,e,o){"use strict";o.r(e);var r=o(50),n=o(158),i="https://www.youtube.com",s={data:function(){return{version:"190613",url:"",exportUrlId:"expUrl",videos:[]}},computed:{orderedVideos:function(){return this.videos.sort(function(t,e){return t.order-e.order})},hash:function(){return"#"+this.orderedVideos.map(function(t){return t.code}).join(",")},exportUrl:function(){return"https://oceanxdds.github.io/yt_monitor/"+this.hash}},created:function(){window.location.hash&&this.addVideo(window.location.hash.substr(1))},methods:{addVideo:function(t){var e=this;(t=t||this.url).split(/ |,/).filter(function(t){return t}).forEach(function(t){var o="",r="";o||(r=t.match(/^[a-zA-Z0-9-_]+$/))&&(o=r[0]),o||t.match(i)&&(r=t.replace(i,"").match(/v=[a-zA-Z0-9-_]+/))&&(o=r[0].replace("v=","")),o||t.match("https://youtu.be")&&(r=t.replace("https://youtu.be","").match(/[a-zA-Z0-9-_]+/))&&(o=r[0]),o&&(e.videos.filter(function(t){return t.code==o}).length>0||e.videos.push({code:o,focus:!1,url:"https://www.youtube-nocookie.com/embed/"+o,order:e.videos.length}))}),this.url="",this.updateHash()},removeVideo:function(t){this.videos=this.videos.filter(function(e){return e.code!=t.code}),this.updateOrder(),this.updateHash()},focusVideo:function(t){this.videos.map(function(e){e.focus=e.code==t.code&&!e.focus})},moveLeft:function(t){if(0!=t.order){var e,o,r=t.order;this.videos.forEach(function(t){t.order==r-1&&(e=t),t.order==r&&(o=t)}),e.order=r,o.order=r-1}this.updateHash()},moveRight:function(t){if(t.order!=this.videos.length-1){var e,o,r=t.order;this.videos.forEach(function(t){t.order==r&&(e=t),t.order==r+1&&(o=t)}),e.order=r+1,o.order=r}this.updateHash()},updateOrder:function(){var t=0;this.orderedVideos.forEach(function(e){e.order=t++})},updateHash:function(){window.location.hash=this.hash},copyUrl:function(){var t=document.createRange();t.selectNode(document.getElementById(this.exportUrlId));var e=window.getSelection();e.removeAllRanges(),e.addRange(t),document.execCommand("copy"),e.removeAllRanges()}}},a=(o(338),o(153)),c=Object(a.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-fluid"},[o("b-input-group",{staticClass:"my-3",attrs:{prepend:"YouTube",size:"sm"}},[o("b-form-input",{attrs:{placeholder:"ID, or URL, or Short URL"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addVideo()}},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),o("b-input-group-append",[o("b-button",{on:{click:function(e){return t.addVideo()}}},[t._v("Enter")])],1)],1),t._v(" "),o("div",{staticClass:"form-row my-3"},t._l(t.orderedVideos,function(e){return o("div",{key:e.code,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3",class:{"col-md-12":e.focus,"col-lg-8":e.focus,"col-xl-6":e.focus}},[o("div",{staticClass:"d-flex border py-1"},[o("div",{staticClass:"p-1 mx-1"},[t._v(t._s(e.code))]),t._v(" "),o("div",{staticClass:"mx-1"},[o("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(o){return t.focusVideo(e)}}},[t._v("Focus")])],1),t._v(" "),o("div",{staticClass:"mx-1"},[o("b-button-group",[o("b-button",{attrs:{variant:"secondary",size:"sm"},on:{click:function(o){return t.moveLeft(e)}}},[t._v("<")]),t._v(" "),o("b-button",{attrs:{variant:"secondary",size:"sm"},on:{click:function(o){return t.moveRight(e)}}},[t._v(">")])],1)],1),t._v(" "),o("div",{staticClass:"mx-1 ml-auto"},[o("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(o){return t.removeVideo(e)}}},[t._v("×")])],1)]),t._v(" "),o("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:e.url,allowfullscreen:""}})],1)}),0),t._v(" "),o("div",{staticClass:"d-flex"},[o("div",{staticClass:"mr-1 flex-grow-1"},[o("b-input-group",{attrs:{prepend:"Share",size:"sm"}},[o("b-form-input",{attrs:{id:t.exportUrlId,disabled:""},model:{value:t.exportUrl,callback:function(e){t.exportUrl=e},expression:"exportUrl"}}),t._v(" "),o("b-input-group-append",[o("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.copyUrl()}}},[t._v("Copy URL")])],1)],1)],1),t._v(" "),o("div",{staticClass:"ml-auto mx-1 p-2 small"},[t._v("\n            Version: "+t._s(t.version)+"\n        ")]),t._v(" "),t._m(0)])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-1"},[e("a",{attrs:{href:"https://github.com/oceanxdds/yt_monitor",target:"_blank"}},[e("img",{attrs:{src:"images/theme/GitHub-Mark-32px.png"}})])])}],!1,null,null,null).exports;r.default.use(n.a),new r.default({el:"app",render:function(t){return t(c)}})},74:function(t,e,o){var r=o(339);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(341)(r,n);r.locals&&(t.exports=r.locals)}},[[159,1,2]]]);