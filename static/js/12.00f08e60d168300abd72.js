webpackJsonp([12],{TOQO:function(t,e){},"iPd/":function(t,e,n){var r;r=function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){var r,o,i;o=[t,e,n(13),n(14),n(43),n(44)],void 0===(i="function"==typeof(r=function(t,e,n,r,o,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("function"!=typeof t)throw"imageLoaded directive error: objet "+t+" should be a function "+e}function c(t,e){var n=(0,h.default)(t),r=n.images.map(function(t){return{img:t.img,src:t.img.src}}),o=t.__imagesLoaded__.context;(function(t,e){var n=t.length;if(n!=e.length)return!1;for(var r=0;r<n;r++){var o=t[r],i=e[r];if(o.img!==i.img||o.src!==i.src)return!1}return!0})(o,r)||(function(t,e){var n=e.value,r=e.arg,o=e.modifiers;if(!r)return u(n),void t.on("always",function(t){return setTimeout(function(){return n(t)})});var i=!!o&&!!(0,f.default)(o).length,s=i?o:n,c=i?function(t){return n}:function(t){return n[t]},a=function(){var e=c(h);u(e,i?"":"property "+h+" of "+n),t[r](h,function(t,n){return setTimeout(function(){return e(t,n)})})};for(var h in s)a()}(n,e),(0,a.default)(t.__imagesLoaded__,{context:r,imageLoaded:n}))}Object.defineProperty(e,"__esModule",{value:!0});var a=s(n),f=s(r),h=s(o),p=s(i);e.default={bind:function(t){t.__imagesLoaded__={context:[]}},inserted:function(t,e){c(t,e)},componentUpdated:function(t,e){p.default.nextTick(function(){c(t,e)})},unbind:function(t,e){t.__imagesLoaded__=null}},t.exports=e.default})?r.apply(e,o):r)||(t.exports=i)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){t.exports=!n(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(4),o=n(1),i=n(21),s=n(25),u="prototype",c=function(t,e,n){var a,f,h,p=t&c.F,d=t&c.G,l=t&c.S,v=t&c.P,g=t&c.B,m=t&c.W,y=d?o:o[e]||(o[e]={}),x=y[u],b=d?r:l?r[e]:(r[e]||{})[u];d&&(n=e);for(a in n)f=!p&&b&&void 0!==b[a],f&&a in y||(h=f?b[a]:n[a],y[a]=d&&"function"!=typeof b[a]?n[a]:g&&f?i(h,r):m&&b[a]==h?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(h):v&&"function"==typeof h?i(Function.call,h):h,v&&((y.virtual||(y.virtual={}))[a]=h,t&c.R&&x&&!x[a]&&s(x,a,h)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(30),o=n(23);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(8),o=n(6);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(6);t.exports=function(t){return Object(r(t))}},function(t,e,n){t.exports={default:n(15),__esModule:!0}},function(t,e,n){t.exports={default:n(16),__esModule:!0}},function(t,e,n){n(40),t.exports=n(1).Object.assign},function(t,e,n){n(41),t.exports=n(1).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(11),o=n(37),i=n(36);t.exports=function(t){return function(e,n,s){var u,c=r(e),a=o(c.length),f=i(s,a);if(t&&n!=n){for(;a>f;)if(u=c[f++],u!=u)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(17);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(5),o=n(4).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(28),o=n(33);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(3)&&!n(2)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(9),o=n(29),i=n(31),s=n(12),u=n(8),c=Object.assign;t.exports=!c||n(2)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=s(t),c=arguments.length,a=1,f=o.f,h=i.f;c>a;)for(var p,d=u(arguments[a++]),l=f?r(d).concat(f(d)):r(d),v=l.length,g=0;v>g;)h.call(d,p=l[g++])&&(n[p]=d[p]);return n}:c},function(t,e,n){var r=n(18),o=n(26),i=n(38),s=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(24),o=n(11),i=n(19)(!1),s=n(34)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),c=0,a=[];for(n in u)n!=s&&r(u,n)&&a.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(a,n)||a.push(n));return a}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(7),o=n(1),i=n(2);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",s)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(35)("keys"),o=n(39);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(4),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(10),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(7);r(r.S+r.F,"Object",{assign:n(27)})},function(t,e,n){var r=n(12),o=n(9);n(32)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r,o;"undefined"!=typeof window&&window,void 0===(o="function"==typeof(r=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},r=n[t]=n[t]||[];return-1==r.indexOf(e)&&r.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{},r=n[t]=n[t]||{};return r[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var r=n.indexOf(e);return-1!=r&&n.splice(r,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var r=0,o=n[r];e=e||[];for(var i=this._onceEvents&&this._onceEvents[t];o;){var s=i&&i[o];s&&(this.off(t,o),delete i[o]),o.apply(this,e),o=n[r+=s?0:1]}return this}},t})?r.call(e,n,e,t):r)||(t.exports=o)},function(t,e,n){var r,o;!function(i,s){"use strict";r=[n(42)],void 0===(o=function(t){return function(t,e){function n(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e,o){return this instanceof r?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=function(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var n=0;n<t.length;n++)e.push(t[n]);else e.push(t);return e}(t),this.options=n({},this.options),"function"==typeof e?o=e:n(this.options,e),o&&this.on("always",o),this.getImages(),s&&(this.jqDeferred=new s.Deferred),void setTimeout(function(){this.check()}.bind(this))):new r(t,e,o)}function o(t){this.img=t}function i(t,e){this.url=t,this.element=e,this.img=new Image}var s=t.jQuery,u=t.console;r.prototype=Object.create(e.prototype),r.prototype.options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&c[e]){for(var n=t.querySelectorAll("img"),r=0;r<n.length;r++){var o=n[r];this.addImage(o)}if("string"==typeof this.options.background){var i=t.querySelectorAll(this.options.background);for(r=0;r<i.length;r++){var s=i[r];this.addElementBackgroundImages(s)}}}};var c={1:!0,9:!0,11:!0};return r.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var n=/url\((['"])?(.*?)\1\)/gi,r=n.exec(e.backgroundImage);null!==r;){var o=r&&r[2];o&&this.addBackground(o,t),r=n.exec(e.backgroundImage)}},r.prototype.addImage=function(t){var e=new o(t);this.images.push(e)},r.prototype.addBackground=function(t,e){var n=new i(t,e);this.images.push(n)},r.prototype.check=function(){function t(t,n,r){setTimeout(function(){e.progress(t,n,r)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},r.prototype.progress=function(t,e,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&u&&u.log("progress: "+n,t,e)},r.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},o.prototype=Object.create(e.prototype),o.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},o.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},o.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},o.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},o.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},o.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},i.prototype=Object.create(o.prototype),i.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},i.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},r.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((s=e).fn.imagesLoaded=function(t,e){var n=new r(this,t,e);return n.jqDeferred.promise(s(this))})},r.makeJQueryPlugin(),r}(i,t)}.apply(e,r))||(t.exports=o)}(window)},function(e,n){e.exports=t}])},t.exports=r(n("7+uW"))},otUI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("UBjx"),o=n("bh5B"),i=n("iPd/"),s=n.n(i),u=n("Fwkz"),c=n("GyW3"),a={data:function(){return{title:"内容详情页",contentHTML:"",contentText:""}},directives:{imagesLoaded:s.a},components:{VHeader:r.a,Scroll:o.a},created:function(){this.scrollHeight=window.innerHeight-60,Object(c.c)()&&(this.scrollHeight=window.innerHeight-74),this.title=this.$route.params.title,this._getDetail()},methods:{_getDetail:function(){var t=this;u.a.get(this,"/v1/contentDesc/"+this.$route.params.contentId,null,function(e){t.contentHTML=e.contentHtml,t.$vux.loading.show({text:"加载中..."})})},imageLoaded:function(t){this.$vux.loading.hide(),this.$refs.scroll.scroll.refresh()}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-wrapper"},[e("v-header",{attrs:{title:this.title}}),this._v(" "),e("scroll",{ref:"scroll",style:{height:this.scrollHeight+"px"}},[e("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded",value:this.imageLoaded,expression:"imageLoaded"}],staticClass:"content",domProps:{innerHTML:this._s(this.contentHTML)}})])],1)},staticRenderFns:[]};var h=n("VU/8")(a,f,!1,function(t){n("uYNH"),n("TOQO")},"data-v-701abfbb",null);e.default=h.exports},uYNH:function(t,e){}});
//# sourceMappingURL=12.00f08e60d168300abd72.js.map