webpackJsonp([35],{"H/q4":function(t,e){},"NB+o":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("UBjx"),a=s("KFH4"),l=s("GyW3"),n=s("kMOI"),o=s("Fwkz"),r=s("KvKp"),d=s("EdC7"),u=s.n(d),c=s("T452"),h={name:"UserDynamic",data:function(){return{showHeaderBackground:!1,followStatus:0,user:{},dynamicList:[]}},components:{VHeader:i.a,dynamicList:a.a},created:function(){this.paddingTop=40,Object(l.c)()?this.paddingTop+=34:this.paddingTop+=20,this.pageNum=0,this._getUserInfo(),this._getUserDynamic(0)},methods:{_getUserInfo:function(){var t=this;o.a.get(this,"/v1/userInfo/"+this.$route.params.userId,null,function(e){e.headUrl?e.headUrl.indexOf(c.f)>-1&&(e.headUrl+="-bheader"):e.headUrl=u.a,t.user=e})},_getUserDynamic:function(t){var e=this,s=this;o.a.get(s,"/v1/dynamic",{publisher:this.$route.params.userId,curUserId:n.b.get("id"),pageNum:t},function(i){if(0!==i.length){e.pageNum++;var a=[];i.forEach(function(t){var e=u.a;t.headUrl&&(e=t.headUrl.indexOf(c.f)>-1?t.headUrl+"-bheader":t.headUrl),s.followStatus="NO"===t.follower?0:1,a.push({user:{id:t.publisher,nickname:t.nickname,headUrl:e,signature:t.signature||"",local:parseInt(t.local)},product:{id:t.productId,thumblUrl:t.thumbUrl,name:t.name,address:t.address,type:t.type},dynamic:{id:t.id,content:t.content,atlas:t.atlas?t.atlas.split(";"):"",publishAddress:t.publishAddress,publishTime:Object(r.b)(t.publishTime),tags:t.tagNames?t.tagNames.split(";"):"",tagIds:t.tagIds?t.tagIds.split(";"):"",latitude:t.publishLatitude,longitude:t.publishLongitude},other:{collectionType:0!==t.collection,starType:0!==t.star,collectionNum:t.collectionSum,starNum:t.starSum,commentNum:t.commentCount,followStatus:"NO"===t.follower?0:1}})}),s.dynamicList=a}else t>0?s.$refs.dynamicList&&s.$refs.dynamicList.$refs.scroll.hiddenPullUpLoad():(s.pageNum=0,s.$refs.dynamicList.$refs.scroll.hiddenPullDown())})},scroll:function(t,e){t.y<=this.$refs.head.$el.clientHeight-this.$refs.top.clientHeight?this.showHeaderBackground=!0:this.showHeaderBackground=!1},changeFollowStatus:function(t){var e=n.b.get("id");if(null!=e){if(!this.sendRequest)if(e!==t){var s=0===this.followStatus?1:0;this.followStatus=s,this.sendRequest=!0;var i=this;o.a.post(this,"/v1/follow/"+e+"/"+t+"/"+s,null,function(t){i.sendRequest=!1},null,!1)}else this.$vux.toast.text("自己不能关注自己！","middle")}else this.$vux.toast.text("请先登录！","middle")},sendMessage:function(){null!=n.b.get("id")?(this.$store.dispatch("setChatObject",this.user),this.$router.push("/chat")):this.$vux.toast.text("请先登录！","middle")},toFollow:function(){null!=n.b.get("id")?this.$router.push("/user/focus/"+this.$route.params.userId):this.$vux.toast.text("请先登录！","middle")},toFans:function(){null!=n.b.get("id")?this.$router.push("/user/fans/"+this.$route.params.userId):this.$vux.toast.text("请先登录！","middle")},onPullingUp:function(){this._getUserDynamic(this.pageNum+1)},onPullingDown:function(){this._getUserDynamic(0)}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-dynamic-wrapper"},[s("v-header",{ref:"head",attrs:{title:t.user.nickname,showBackground:t.showHeaderBackground,fixed:!0}}),t._v(" "),s("dynamic-list",{ref:"dynamicList",staticStyle:{overflow:"hidden",height:"100%"},attrs:{list:t.dynamicList},on:{scroll:t.scroll,onPullingUp:t.onPullingUp,onPullingDown:t.onPullingDown}},[s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.user.headUrl,expression:"user.headUrl",arg:"background-image"}],ref:"top",staticClass:"top",attrs:{slot:"head"},slot:"head"},[s("div",{staticClass:"wrapper",style:{paddingTop:t.paddingTop+"px"}},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticClass:"head"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.user.headUrl,expression:"user.headUrl"}]})]),t._v(" "),s("div",{staticClass:"num"},[s("div",{staticClass:"item",on:{click:t.toFollow}},[s("p",[t._v("关注")]),t._v(" "),s("p",[t._v(t._s(t.user.followingCount))])]),t._v(" "),s("div",{staticClass:"diliver"}),t._v(" "),s("div",{staticClass:"item",on:{click:t.toFans}},[s("p",[t._v("粉丝")]),t._v(" "),s("p",[t._v(t._s(t.user.followerCount))])])])]),t._v(" "),s("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[s("div",{staticClass:"nickname",staticStyle:{"max-width":"50%"}},[s("p",{staticStyle:{"font-size":"18px"}},[t._v(t._s(t.user.nickname))])]),t._v(" "),s("div",{staticClass:"btn"},[s("div",{staticClass:"litter-button",on:{click:t.sendMessage}},[t._v("发私信")]),t._v(" "),1!=t.followStatus?s("div",{staticClass:"litter-button",on:{click:function(e){e.stopPropagation(),t.changeFollowStatus(t.user.id)}}},[s("i",{staticClass:"fa fa-plus",staticStyle:{"margin-right":"2px"},attrs:{"aria-hidden":"true"}}),t._v("关注")]):t._e(),t._v(" "),1==t.followStatus?s("div",{staticClass:"litter-button",staticStyle:{color:"#8492A6","border-color":"#8492A6"},on:{click:function(e){e.stopPropagation(),t.changeFollowStatus(t.user.id)}}},[t._v("已关注")]):t._e()])]),t._v(" "),s("p",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.user.signature))])])])])],1)},staticRenderFns:[]};var f=s("VU/8")(h,p,!1,function(t){s("H/q4")},"data-v-69cc5976",null);e.default=f.exports}});
//# sourceMappingURL=35.18a9f0d4a7ab7e4a88b6.js.map