webpackJsonp([9],{SuMM:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABn0lEQVR4Xu2WwVHEMAxFrUNyphOgA6gE6GBzsWuwL9kOgEqgA0InnJODd7yzmQFmkygzOlijv2fvj/T1vmVyxn9kvH8HA0CAcQcQAeMA4BJEBBAB4w4gAsYBwBZABBAB4w4gAsYBwBZABBAB4w4gAsYBwBbYFYEY4xMRHZxzdxdyhpzzMYTwvoekmnRYBvR9fzNN08evxv/3OzRN89h13c+aEbXplFpZBqSUvlaan3sevPf3awbUpsMyIMZ4IKKeifiL9/7t2tnadOYaNwlgTm2Tgtp09hiQmdM/H/PeXzU1pVSVDgy4OLAZgRjjQES3HApyzt8hhHlF/vlLbTp7CHh2zr1yDHDOLV6CKaWqdNgGlIOc6a1Nf/5YbTqsNVgOlQfMOI6fS1Eozbdt+8B5CNWkwzZgnmDBOOdc3gXnO6E0TkTHpd2/FJuadDYvQWb21R6DAWpHJ1Q4CBAyUq0MCFA7OqHCQYCQkWplQIDa0QkVDgKEjFQrAwLUjk6ocBAgZKRaGRCgdnRChYMAISPVyoAAtaMTKhwECBmpVsY8ASfy7AJQqvWL1AAAAABJRU5ErkJggg=="},gFuP:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACVklEQVR4Xu1a0U3DQAx9NwFsAExAmQCcBYANYAJWYAUmgA2ABeJ2AsoElA1gAiNXF6mKgF6E8kIT+6dSFeV8z8+O750TJm5p4vtHABAMmDgCkQITJ0AUwUiBSIGBEFDVMwAHvryZraqqWgzhCj0FVHUG4B6A/27aEsC1iPgvzagAqOohgBcA+z/s8APAiYisWAhQAajreplSOt6yuaWInIwOgEx9j36JOQsoqUBjgKpe5dwvAeBSRJ5KHvzrM0wALgA8Fjo8SgC8AL4VAnDEKoQ0BvjG67qep5ROfwPBzBZVVXmPQDEqAP4ZNDP/Eux9tzsz+0wpzVjRdx+oAPiCqrpvZk/fMOEZwJWIeC9AMzoAzc5yU+R1wW3FjPomuoMBQAvxloUCgP8SiaH8CAYMhXw+GzQHo1dW79/eL50Bufq7HtBuduZZD6Adhel9QOgBBa0wgLmICCs1aSkQekDoATp5PcBV4FJJLPSA0RXBfBQOPSCLIg9tPcCVoJSS6wHjbYQ2aZ2bouZ2yO8CqBtvfKH1Aayc7rpOANAVsbE9HwwYIqJZGT51CdzXz1L5gq0I04/DuRdwHcD1gEYRbmLgXwGfD3BdgGbUFCg8EdJuhukMiPmA8sMQjQW0FOg4H+C14IFRCJgATF4PiPkAVfWxl/Mt1H4WEWcLxWgpkHsAvxr3+YD1gGTbzOw9zwfQrsipADQgALgFcNMC4M7/Z3eDdABamsC6FR7qWozeCFGSuuMigzKgo6+9PB4A9ALrDr00GLBDwerF1WBAL7Du0EuDATsUrF5c/QKwIulBA2sY8wAAAABJRU5ErkJggg=="},gVhu:function(t,e){},tzAJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("UBjx"),s=a("orwS"),n=a("bh5B"),o=a("QMpk"),r=a("Msp2"),c=a("kMOI"),l=a("Fwkz"),d=a("75UI"),m=a("GyW3"),h=a("KvKp"),p=a("T452"),u=a("EdC7"),g=a.n(u),y=a("SuMM"),v=a.n(y),f=a("gFuP"),A=a.n(f),C=.85*window.innerHeight,_={data:function(){return{more:v.a,moreVert:A.a,showShare:!1,showActionSheet:!1,showInput:!1,showReply:!1,placeholder:"发布你的精彩评论...",userAddress:"",shareContent:{},headerStyles:{color:"#fff",background:"rgba(255, 255, 255, 0)"},dynamic:{},starList:[],commentPageNum:1,commentList:[],replyList:[],currentComment:null,currentReply:null,replyType:0}},components:{VHeader:i.a,Share:s.a,Scroll:n.a,BottomInput:o.a,Actionsheet:r.a},created:function(){this.paddingBottom=0,this.paddingTop=20,Object(m.c)()&&(this.paddingBottom=20,this.paddingTop=34),this.imgHeight=250,this.replyScrollHeight=window.innerHeight-this.paddingTop-44-53-this.paddingBottom,this._getDynamicDesc(),this._viewDynamic(),this._getStarList(),this._getCommentList(!0);var t=this;d.a.getPosition(this,function(e,a){t.$store.commit("SET_POSITION",[parseFloat(e.longitude),parseFloat(e.latitude)]),t.userAddress=a.formattedAddress})},methods:{_getDynamicDesc:function(){var t=this;l.a.get(this,"/v1/dynamic",{id:this.$route.params.dynamicId,curUserId:c.b.get("id"),type:1},function(e){if(null!=e){var a=g.a;e[0].headUrl&&(a=e[0].headUrl.indexOf(p.f)>-1?e[0].headUrl+"-bheader":e[0].headUrl),e[0].headUrl=a,e[0].atlas=e[0].atlas.split(";"),e[0].publishAddress="贵阳市南明区太升国际",e[0].publishTime=Object(h.b)(e[0].publishTime),t.dynamic=e[0],console.log(t.dynamic),t.preloadImg(t.dynamic.atlas[0])}else t.$vux.toast.text("该动态不存在","middle")})},_viewDynamic:function(){var t=c.b.get("id");null!=t&&l.a.post(this,"/v1/messageRecord",{userId:t,targetId:this.$route.params.dynamicId,type:1},function(t){},null,!1)},_getStarList:function(){var t=this;l.a.get(this,"/v1/starMan/"+this.$route.params.dynamicId,{pageSize:5},function(e){e.forEach(function(t){var e=g.a;t.headUrl&&(e=t.headUrl.indexOf(p.f)>-1?t.headUrl+"-sheader":t.headUrl),t.headUrl=e}),t.starList=e},null,!1)},_getCommentList:function(t){var e=this;l.a.get(this,"/v1/DynamicRecord/"+this.$route.params.dynamicId,{pageSize:5,pageNum:e.commentPageNum},function(a){0===a.length?(e.commentPageNum>1&&e.commentPageNum--,!0!==t&&e.$refs.scroll.hiddenPullUpLoad()):(a.forEach(function(t){var e=g.a;t.headUrl&&(e=t.headUrl.indexOf(p.f)>-1?t.headUrl+"-bheader":t.headUrl),t.headUrl=e,t.createAt=Object(h.b)(t.createAt)}),e.commentPageNum<=1?e.commentList=a:e.commentList=e.commentList.concat(a))},null,!1)},_getReplyList:function(t){var e=this;l.a.get(this,"/v1/reply/"+this.currentComment.id,{pageNum:e.replyPageNum,pageSize:10},function(a){0===a.length?(e.replyPageNum>1&&e.replyPageNum--,!0!==t&&e.$refs.replyScroll.hiddenPullUpLoad()):(a.forEach(function(t){var e=g.a;t.headUrl&&(e=t.headUrl.indexOf(p.f)>-1?t.headUrl+"-bheader":t.headUrl),t.headUrl=e,t.createAt=Object(h.b)(t.createAt)}),e.replyPageNum<=1?e.replyList=a:e.replyList=e.replyList.concat(a))})},changeFollowStatus:function(t){var e=this,a=c.b.get("id");if(null!=a){if(!this.sendRequest)if(a!==t){var i="NO"===this.dynamic.follower?1:0;this.dynamic.follower="NO"===this.dynamic.follower?"YES":"NO",this.sendRequest=!0;var s=this;l.a.post(this,"/v1/follow/"+a+"/"+t+"/"+i,null,function(a){s.sendRequest=!1,i&&l.a.post(e,"/v1/pushAlias",{userId:t,content:c.b.get("nickname")+"刚刚关注你，赶快去看啊看吧~",linkUrl:"/user/focus"})},null,!1)}else this.$vux.toast.text("自己不能关注自己！","middle")}else this.$vux.toast.text("请先登录！","middle")},updateMessage:function(t,e){var a=c.b.get("id");if(null!=a){if(!this.sendRequest){var i={userId:a,targetId:t,type:1,starType:e?0:1},s=this;this.sendRequest=!0,l.a.post(this,"/v1/messageRecord",i,function(t){s.sendRequest=!1,e?(s.dynamic.star=0,s.dynamic.starSum--):(s.dynamic.star=1,s.dynamic.starSum++),s._getStarList()},function(){s.sendRequest=!1},!1)}}else this.$vux.toast.text("请先登录！","middle")},scrollWrapper:function(t){t.y<=-(this.imgHeight-this.paddingTop-40)?this.headerStyles={color:"#000",background:"rgba(255, 255, 255, 1)"}:(this.headerStyles={color:"#fff",background:"rgba(255, 255, 255, "+Math.abs(t.y/this.imgHeight)+")"},Math.abs(t.y/this.imgHeight)>.88&&(this.headerStyles.color="#000"))},preloadImg:function(t){var e=new Image,a=this;e.addEventListener("load",function(i){"load"===i.type&&(a.imgHeight=e.height,e.height>e.width?e.height>=C&&(a.imgHeight=C,a.$refs.topImg.style.height=C+"px",a.$refs.topImg.style.width=e.width*(C/e.height)+"px"):e.width>=window.innerWidth?(a.$refs.topImg.style.width=window.innerWidth+"px",a.$refs.topImg.style.height=e.height*(window.innerWidth/e.width)+"px",a.imgHeight=e.height*(window.innerWidth/e.width)):(a.$refs.topImg.style.marginTop="60px",a.$refs.topImg.style.transform="translateY(-50%)"),a.$refs.topImg.src=t,a.$refs.topImg.parentElement.style.backgroundColor="#000")}),e.src=t},toShowActionSheet:function(t){this.currentComment=t,this.showActionSheet=!0},clickActionSheet:function(t){"reply"===t&&this.toShowInput(0)},onReplyPullingUp:function(){this.replyPageNum++,this._getReplyList()},toShowInput:function(t,e){null!=c.b.get("id")?(this.showInput=!0,this.replyType=t,0===t?this.placeholder="回复 "+this.currentComment.nickname+" 的评论":1===t?(this.currentReply=e,this.placeholder="回复 "+e.userName):(this.currentComment=null,this.currentReply=null,this.placeholder="发布你的精彩评论...")):this.$vux.toast.text("请先登录","middle")},toShowReply:function(t){this.currentComment=t,this.replyPageNum=1,this._getReplyList(!0),this.showReply=!0},sendComment:function(t){if(""!==t.replace(/\s/g,"")){var e=c.b.get(),a=this;if(null==this.replyType)l.a.post(this,"/v1/DynamicRecord",{dynamicId:a.$route.params.dynamicId,userId:e.id,content:t},function(t){t.createAt="刚刚",t.nickname=e.nickname,t.headUrl=e.headUrl||g.a,a.commentList.splice(0,0,t),a.showInput=!1,a.dynamic.commentCount++,a.$refs.bottomInput.setContent(""),a.$vux.toast.text("评论成功","middle")});else{var i={targetId:a.dynamic.id,targetType:a.replyType,userId:e.id,comment:t,targetCommentId:a.currentComment.id};null!=a.currentComment?i.targetUserId=a.currentComment.userId:null!=a.currentReply&&(i.targetUserId=a.currentReply.userId);var s=this.$store.getters.position;2===s.length&&(i.longitude=s[0],i.latitude=s[1],i.commentLocation=a.userAddress),l.a.post(this,"/v1/reply/",i,function(t){a.showInput=!1,a.dynamic.commentCount++,a.$refs.bottomInput.setContent(""),a.$vux.toast.text("回复成功","middle");for(var i=0;i<a.commentList.length;i++){var s=a.commentList[i];s.id===a.currentComment.id&&s.replyCount++}t.createAt="刚刚",t.userName=e.nickname,a.currentReply&&(t.targetUserName=a.currentReply.userName),t.headUrl=e.headUrl||g.a,null!=a.currentReply&&a.replyList.splice(0,0,t)})}}else this.$vux.toast.text("消息不能为空","middle")},toMyInfo:function(t){this.$router.push("/user/archives/"+t)},toShare:function(){if(null!=c.b.get()){this.showShare=!0;var t=c.b.get("nickname");this.shareContent={title:t+"分享了 "+this.dynamic.nickname+" 发的动态",desc:this.dynamic.content,thumbUrl:this.dynamic.atlas[0]+"-meitu3",linkUrl:p.a}}else this.$vux.toast.text("请先登录","middle")}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dynamic-desc-wrapper"},[a("v-header",{staticClass:"header",attrs:{fixed:!0,fontColor:t.headerStyles.color,customBackground:t.headerStyles.background,showBackground:!1}},[a("div",{staticClass:"right",staticStyle:{top:"2px",right:"5px"},attrs:{slot:"right"},on:{click:function(e){e.stopPropagation(),t.toShare(e)}},slot:"right"},[a("i",{staticClass:"fa fa-share-square-o"})])]),t._v(" "),t.dynamic?a("scroll",{ref:"wrapperScroll",staticClass:"main",style:{height:"calc(100% - "+(49+t.paddingBottom)+"px)"},attrs:{data:t.commentList,bounce:!1,probeType:3,listenScroll:!0},on:{scroll:t.scrollWrapper}},[a("div",{staticClass:"imgWrapper"},[a("img",{ref:"topImg"})]),t._v(" "),a("div",{staticClass:"dynamic-wrapper"},[a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("p",[a("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.dynamic.publishAddress))]),t._v(" "),a("p",[t._v("附近500条\n          "),a("i",{staticClass:"fa fa-angle-right",staticStyle:{"font-size":"18px"},attrs:{"aria-hidden":"true"}})])]),t._v(" "),""!=t.dynamic.content&&t.dynamic.tags&&0!=t.dynamic.tags.length?a("p",{staticClass:"text"},[t._l(t.dynamic.tags,function(e,i){return a("a",{key:i,staticClass:"tag",attrs:{href:"javascript: void(0)"},on:{click:function(e){e.stopPropagation(),t.toTag(t.dynamic.tagIds[i])}}},[t._v("#"+t._s(e)+"#")])}),t._v("\n        "+t._s(t.dynamic.content)+"\n      ")],2):t._e(),t._v(" "),a("p",{staticStyle:{"font-size":"12px"}},[t._v("拍摄于"+t._s(t.dynamic.publishTime))]),t._v(" "),a("div",{staticClass:"user"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.dynamic.headUrl,expression:"dynamic.headUrl"}],staticClass:"headImg",on:{click:function(e){e.stopPropagation(),t.toMyInfo(t.dynamic.publisher)}}}),t._v(" "),a("div",{staticStyle:{width:"calc(100% - 130px)"}},[a("p",[a("b",{staticStyle:{color:"#000"}},[t._v(t._s(t.dynamic.nickname))])]),t._v(" "),a("p",{staticClass:"txt"},[t._v(t._s(t.dynamic.publishTime)+" 发布")])]),t._v(" "),"YES"==t.dynamic.follower?a("div",{staticClass:"litter-button",on:{click:function(e){e.stopPropagation(),t.changeFollowStatus(t.dynamic.publisher)}}},[a("i",{staticClass:"fa fa-plus",staticStyle:{"margin-right":"2px"},attrs:{"aria-hidden":"true"}}),t._v("关注\n        ")]):a("div",{staticClass:"litter-button",staticStyle:{color:"#bfc0c0","border-color":"#bfc0c0"},on:{click:function(e){e.stopPropagation(),t.changeFollowStatus(t.dynamic.publisher)}}},[t._v("\n          已关注\n        ")])]),t._v(" "),a("div",{staticClass:"star"},[t.dynamic.starSum?a("div",{staticClass:"imgs"},[t._l(t.starList,function(e){return a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.headUrl,expression:"item.headUrl"}],key:e.id,on:{click:function(a){a.stopPropagation(),t.toMyInfo(e.id)}}})}),t._v(" "),t.dynamic.starSum>5?a("div",{staticClass:"more"},[a("img",{attrs:{src:t.more,width:"100%",height:"100%"}})]):t._e()],2):a("p",{staticStyle:{color:"#999"}},[t._v("成为第一个为Ta点赞的人")]),t._v(" "),a("div",{staticClass:"star-btn",class:{active:0!=t.dynamic.star},on:{click:function(e){e.stopPropagation(),t.updateMessage(t.dynamic.id,t.dynamic.star)}}},[t._v("\n          "+t._s(t.dynamic.starSum)+"\n          "),0!=t.dynamic.star?a("i",{staticClass:"fa fa-thumbs-up",attrs:{"aria-hidden":"true"}}):a("i",{staticClass:"fa fa-thumbs-o-up",attrs:{"aria-hidden":"true"}})])]),t._v(" "),t.dynamic.commentCount>0||t.dynamic.starSum>0?a("div",{staticClass:"comment"},[t.dynamic.commentCount?a("p",[t._v("全部"),a("b",[t._v(t._s(t.dynamic.commentCount))]),t._v("条评论")]):t._e(),t._v(" "),t.commentList.length?a("ul",{staticClass:"list"},t._l(t.commentList,function(e){return a("li",{key:e.id},[a("div",{staticClass:"item"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.headUrl,expression:"item.headUrl",arg:"background-image"}],staticClass:"headImg",on:{click:function(a){a.stopPropagation(),t.toMyInfo(e.userId)}}}),t._v(" "),a("div",{staticStyle:{width:"calc(100% - 70px)"}},[a("p",{staticStyle:{"padding-top":"3px"}},[t._v(t._s(e.nickname))]),t._v(" "),a("p",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.createAt))])]),t._v(" "),a("img",{attrs:{src:t.moreVert,height:"28px"},on:{click:function(a){a.stopPropagation(),t.toShowActionSheet(e)}}})]),t._v(" "),a("div",{staticClass:"content"},[a("p",[t._v(t._s(e.content))]),t._v(" "),e.replyCount?a("p",{staticClass:"replay",on:{click:function(a){a.stopPropagation(),t.toShowReply(e)}}},[t._v("查看"+t._s(e.replyCount)+"条回复\n                "),a("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})]):t._e()])])})):a("p",[t._v("快来留下第一条评论吧")])]):t._e()])]):t._e(),t._v(" "),a("div",{staticClass:"bottom",style:{paddingBottom:t.paddingBottom+6+"px"}},[a("p",{on:{click:function(e){t.toShowInput(null)}}},[t._v("发布你的精彩评论")]),t._v(" "),a("div",{staticClass:"star-btn",class:{active:0!=t.dynamic.star},on:{click:function(e){e.stopPropagation(),t.updateMessage(t.dynamic.id,t.dynamic.star)}}},[t._v("\n      "+t._s(t.dynamic.starSum)+"\n      "),0!=t.dynamic.star?a("i",{staticClass:"fa fa-thumbs-up",attrs:{"aria-hidden":"true"}}):a("i",{staticClass:"fa fa-thumbs-o-up",attrs:{"aria-hidden":"true"}})])]),t._v(" "),t.showReply?a("div",{staticClass:"reply-wrapper",style:{top:t.paddingTop+10+"px"}},[a("div",{staticClass:"head"},[t._v("\n      评论详情\n      "),a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"},on:{click:function(e){e.stopPropagation(),t.showReply=!1}}})]),t._v(" "),a("scroll",{ref:"replyScroll",staticClass:"reply-scroll",style:{height:t.replyScrollHeight+"px"},attrs:{data:t.replyList,pullUpLoad:!0},on:{pullingUp:t.onReplyPullingUp}},[a("div",{staticClass:"comment"},[a("div",{staticClass:"item"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.currentComment.headUrl,expression:"currentComment.headUrl",arg:"background-image"}],staticClass:"headImg",on:{click:function(e){e.stopPropagation(),t.toMyInfo(t.currentComment.userId)}}}),t._v(" "),a("div",[a("p",{staticStyle:{"padding-top":"4px"}},[t._v(t._s(t.currentComment.nickname))]),t._v(" "),a("p",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.currentComment.createAt))])])]),t._v(" "),a("div",{staticClass:"content"},[a("p",[t._v(t._s(t.currentComment.content))])])]),t._v(" "),t.replyList.length?a("ul",{staticClass:"list"},t._l(t.replyList,function(e){return a("li",{key:e.id,on:{click:function(a){a.stopPropagation(),t.toShowInput(1,e)}}},[a("div",{staticClass:"item"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.headUrl,expression:"item.headUrl",arg:"background-image"}],staticClass:"headImg",on:{click:function(a){a.stopPropagation(),t.toMyInfo(e.userId)}}}),t._v(" "),a("div",[a("p",{staticStyle:{"padding-top":"4px"}},[t._v(t._s(e.userName))]),t._v(" "),a("p",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.createAt))])])]),t._v(" "),a("div",{staticClass:"content"},[0==e.targetType?a("p",[t._v(t._s(e.comment))]):t._e(),t._v(" "),1==e.targetType?a("p",[t._v("回复"),a("font",{staticStyle:{color:"#37c3e2"},on:{click:function(a){a.stopPropagation(),t.toMyInfo(e.targetUserId)}}},[t._v(t._s(e.targetUserName))]),t._v(": "+t._s(e.comment))],1):t._e()])])})):t._e()]),t._v(" "),a("div",{staticClass:"bottom",style:{paddingBottom:t.paddingBottom+6+"px"}},[a("p",{on:{click:function(e){t.toShowInput(0,t.currentComment)}}},[t._v("点击回复"+t._s(t.currentComment.nickname)+"的评论")])])],1):t._e(),t._v(" "),a("bottom-input",{ref:"bottomInput",attrs:{placeholder:t.placeholder},on:{send:t.sendComment},model:{value:t.showInput,callback:function(e){t.showInput=e},expression:"showInput"}}),t._v(" "),a("actionsheet",{attrs:{menus:{reply:"回复",report:"举报"},"show-cancel":""},on:{"on-click-menu":t.clickActionSheet},model:{value:t.showActionSheet,callback:function(e){t.showActionSheet=e},expression:"showActionSheet"}}),t._v(" "),a("share",{attrs:{title:t.shareContent.title,desc:t.shareContent.desc,thumbUrl:t.shareContent.thumbUrl,linkUrl:t.shareContent.linkUrl},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}})],1)},staticRenderFns:[]};var S=a("VU/8")(_,w,!1,function(t){a("gVhu")},"data-v-b524173a",null);e.default=S.exports}});
//# sourceMappingURL=9.fc15f91bc76e03124142.js.map