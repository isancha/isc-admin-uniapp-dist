(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-kds-kds"],{"0197":function(t,e,n){"use strict";var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("276c")),o=i(n("e954")),a=i(n("fc11")),s=i(n("5d7d")),u=function(){function t(){(0,r.default)(this,t),(0,a.default)(this,"BASE_URL","admin/MeiTuanReport/")}return(0,o.default)(t,[{key:"getList",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return s.default.doHttp(this.BASE_URL+"getOrderList","get",{store:t,page:e,pageSize:n})}}]),t}(),l=new u;e.default=l},"13e8":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uTabsSwiper:n("91ed").default,uCard:n("d505").default,uButton:n("d9ad").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{attrs:{id:"kds"}},[n("v-uni-view",[n("u-tabs-swiper",{ref:"tabs",attrs:{list:t.storeList,current:t.subsectionCurrent,"is-scroll":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sectionChange.apply(void 0,arguments)}}}),n("v-uni-view",t._l(t.orderList,(function(e,i){return n("u-card",{key:i,attrs:{"show-head":!1,showFoot:!1}},[n("v-uni-view",{attrs:{slot:"body"},slot:"body"},[n("v-uni-view",{staticClass:"u-flex"},[n("v-uni-view",{staticClass:"u-flex-1"},[t._v(t._s(e.orderBase.pickupNo)+"号订单")]),n("v-uni-view",{},[n("u-button",{staticStyle:{width:"200rpx",height:"50rpx",margin:"0rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.doTTS(e.orderBase.pickupNo)}}},[t._v("叫号")])],1)],1)],1)],1)})),1)],1)],1)},o=[]},"2a70":function(t,e,n){var i=n("ca20");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("fdadc746",i,!0,{sourceMap:!1,shadowMode:!1})},3959:function(t,e,n){"use strict";var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("276c")),o=i(n("e954")),a=i(n("fc11")),s=i(n("5d7d")),u=function(){function t(){(0,r.default)(this,t),(0,a.default)(this,"BASE_URL","admin/StoreConfig/")}return(0,o.default)(t,[{key:"findAll",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return s.default.doHttp(this.BASE_URL+"findAll","get",{page:t,pageSize:e,field:n})}},{key:"find",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return s.default.doHttp(this.BASE_URL+"find","get",{id:t,field:e})}},{key:"create",value:function(t){return delete t.id,s.default.doHttp(this.BASE_URL+"create","post",t)}},{key:"update",value:function(t){return s.default.doHttp(this.BASE_URL+"update","post",t)}},{key:"delete",value:function(t){return s.default.doHttp(this.BASE_URL+"delete","post",{id:t})}}]),t}(),l=new u;e.default=l},6270:function(t,e,n){"use strict";var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("c964"));n("a9e3"),n("d3b7"),n("ac1f"),n("d81d");var o=i(n("7133")),a=o.default,s=uni.getSystemInfoSync(),u=s.windowWidth,l="UEl_",c={name:"u-tabs-swiper",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},height:{type:[Number,String],default:80},fontSize:{type:[Number,String],default:30},swiperWidth:{type:[String,Number],default:750},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[Number,String],default:40},barHeight:{type:[Number,String],default:6},gutter:{type:[Number,String],default:40},zIndex:{type:[Number,String],default:1},bgColor:{type:String,default:"#ffffff"},autoCenterMode:{type:String,default:"window"},name:{type:String,default:"name"},count:{type:String,default:"count"},offset:{type:Array,default:function(){return[5,20]}},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}}},data:function(){return{scrollLeft:0,tabQueryInfo:[],windowWidth:0,animationFinishCurrent:this.current,componentsWidth:0,line3AddDx:0,line3Dx:0,preId:l,sW:0,tabsInfo:[],colorGradientArr:[],colorStep:100}},computed:{getCurrent:function(){var t=Number(this.current);return t>this.getTabs.length-1?this.getTabs.length-1:t<0?0:t},getTabs:function(){return this.list},scrollBarLeft:function(){return Number(this.line3Dx)+Number(this.line3AddDx)},barWidthPx:function(){return uni.upx2px(this.barWidth)},tabItemStyle:function(){var t=this;return function(e){var n={height:t.height+"rpx",lineHeight:t.height+"rpx",padding:"0 ".concat(t.gutter/2,"rpx"),color:t.tabsInfo.length>0?t.tabsInfo[e]?t.tabsInfo[e].color:t.activeColor:t.inactiveColor,fontSize:t.fontSize+"rpx",zIndex:t.zIndex+2,fontWeight:e==t.getCurrent&&t.bold?"bold":"normal"};return e==t.getCurrent&&(n=Object.assign(n,t.activeItemStyle)),n}},tabBarStyle:function(){var t={width:this.barWidthPx+"px",height:this.barHeight+"rpx",borderRadius:"100px",backgroundColor:this.activeColor,left:this.scrollBarLeft+"px"};return Object.assign(t,this.barStyle)}},watch:{current:function(t,e){this.change(t),this.setFinishCurrent(t)},list:function(){var t=this;this.$nextTick((function(){t.init()}))}},mounted:function(){this.init()},methods:{init:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.countPx(),e.next=3,t.getTabsInfo();case 3:t.countLine3Dx(),t.getQuery((function(){t.setScrollViewToCenter()})),t.colorGradientArr=a.colorGradient(t.inactiveColor,t.activeColor,t.colorStep);case 6:case"end":return e.stop()}}),e)})))()},getTabsInfo:function(){var t=this;return new Promise((function(e,n){for(var i=uni.createSelectorQuery().in(t),r=0;r<t.list.length;r++)i.select("."+l+r).boundingClientRect();i.exec((function(n){for(var i=[],r=0;r<n.length;r++)n[r].color=t.inactiveColor,r==t.getCurrent&&(n[r].color=t.activeColor),i.push(n[r]);t.tabsInfo=i,e()}))}))},countLine3Dx:function(){var t=this.tabsInfo[this.animationFinishCurrent];t&&(this.line3Dx=t.left+t.width/2-this.barWidthPx/2-this.tabsInfo[0].left)},countPx:function(){this.sW=uni.upx2px(Number(this.swiperWidth))},emit:function(t){this.$emit("change",t)},change:function(){this.setScrollViewToCenter()},getQuery:function(t){var e=this;try{var n=uni.createSelectorQuery().in(this).select(".u-tabs");n.fields({size:!0},(function(n){n?(e.componentsWidth=n.width,t&&"function"===typeof t&&t(n)):e.getQuery(t)})).exec()}catch(i){this.componentsWidth=u}},setScrollViewToCenter:function(){var t;if(t=this.tabsInfo[this.animationFinishCurrent],t){var e,n=t.left+t.width/2;e="window"===this.autoCenterMode?u:this.componentsWidth,this.scrollLeft=n-e/2}},setDx:function(t){var e=t>0?this.animationFinishCurrent+1:this.animationFinishCurrent-1;e=e<=0?0:e,e=e>=this.list.length?this.list.length-1:e;this.tabsInfo[e];var n=this.tabsInfo[this.animationFinishCurrent],i=n.left+n.width/2,r=this.tabsInfo[e],o=r.left+r.width/2,a=Math.abs(o-i);this.line3AddDx=t/this.sW*a,this.setTabColor(this.animationFinishCurrent,e,t)},setTabColor:function(t,e,n){var i=Math.abs(Math.ceil(n/this.sW*100)),r=this.colorGradientArr.length;i=i>=r?r-1:i<=0?0:i,this.tabsInfo[e].color=this.colorGradientArr[i],this.tabsInfo[t].color=this.colorGradientArr[r-1-i]},setFinishCurrent:function(t){var e=this;this.tabsInfo.map((function(n,i){return n.color=t==i?e.activeColor:e.inactiveColor,n})),this.line3AddDx=0,this.animationFinishCurrent=t,this.countLine3Dx()}}};e.default=c},"64b1":function(t,e,n){"use strict";n.r(e);var i=n("13e8"),r=n("8ce7");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"b29a0830",null,!1,i["a"],a);e["default"]=u.exports},8033:function(t,e,n){"use strict";var i=n("2a70"),r=n.n(i);r.a},"8ce7":function(t,e,n){"use strict";n.r(e);var i=n("a67a"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"91ed":function(t,e,n){"use strict";n.r(e);var i=n("e599"),r=n("cdd1");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("8033");var a,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"bf70be7e",null,!1,i["a"],a);e["default"]=u.exports},a67a:function(t,e,n){"use strict";(function(t){var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7"),n("4160"),n("159b");var r=i(n("3959")),o=i(n("0197")),a={name:"",components:{},data:function(){return{storeList:[],subsectionCurrent:0,orderList:[],innerAudioContext:null}},computed:{},onLoad:function(t){var e=this;this.innerAudioContext=uni.createInnerAudioContext(),this.getShopList().then((function(){e.getOrderList(e.storeList[e.subsectionCurrent].store_id,1)})),setInterval((function(){e.getOrderList(e.storeList[e.subsectionCurrent].store_id,1)}),6e4)},onShow:function(t){},methods:{getShopList:function(){var t=this;return new Promise((function(e,n){t.storeList=[],r.default.findAll(1,999,"id,store_name").then((function(n){n.data.data.forEach((function(e,n){t.storeList.push({store_id:e.id,name:e.store_name})})),e()}))}))},sectionChange:function(e){this.subsectionCurrent=e,t.log(this.storeList[this.subsectionCurrent]),this.getOrderList(this.storeList[this.subsectionCurrent].store_id,1)},getOrderList:function(t,e){var n=this;o.default.getList(t,e).then((function(t){n.orderList=t.data}))},doTTS:function(e){var n="请"+e+"号顾客，到取餐口取餐。",i="http://tsn.baidu.com/text2audio?tex="+encodeURI(n)+"&tok=24.2850f463e860a85aa5f741f62820333d.2592000.1635433676.282335-10854623&cuid=KDS-TTS&ctp=1&lan=zh";this.innerAudioContext.autoplay=!0,this.innerAudioContext.src=i,this.innerAudioContext.onPlay((function(){t.log("开始播放")})),this.innerAudioContext.onError((function(e){t.log("发生错误"),t.log(e),uni.showToast({icon:"error",title:"播放音频失败"})}))}}};e.default=a}).call(this,n("5a52")["default"])},ca20:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.full-width[data-v-bf70be7e]{width:100%}.u-m-a[data-v-bf70be7e]{margin:auto}.u-m-l-a[data-v-bf70be7e]{margin-left:auto}.u-m-r-a[data-v-bf70be7e]{margin-right:auto}.u-justify-center[data-v-bf70be7e]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}uni-view[data-v-bf70be7e],\nuni-scroll-view[data-v-bf70be7e]{box-sizing:border-box}.u-tabs[data-v-bf70be7e]{width:100%;-webkit-transition-property:background-color,color;transition-property:background-color,color}[data-v-bf70be7e]::-webkit-scrollbar,[data-v-bf70be7e]::-webkit-scrollbar,[data-v-bf70be7e]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}uni-scroll-view[data-v-bf70be7e]  ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-bf70be7e]{width:100%;white-space:nowrap;position:relative}.u-tabs-scroll-box[data-v-bf70be7e]{position:relative}.u-tabs-scorll-flex[data-v-bf70be7e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.u-tabs-scorll-flex .u-tabs-item[data-v-bf70be7e]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-tabs-item[data-v-bf70be7e]{position:relative;display:inline-block;text-align:center;-webkit-transition-property:background-color,color,font-weight;transition-property:background-color,color,font-weight}.content[data-v-bf70be7e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.boxStyle[data-v-bf70be7e]{pointer-events:none;position:absolute;-webkit-transition-property:all;transition-property:all}.boxStyle2[data-v-bf70be7e]{pointer-events:none;position:absolute;bottom:0;-webkit-transition-property:all;transition-property:all;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.itemBackgroundBox[data-v-bf70be7e]{pointer-events:none;position:absolute;top:0;-webkit-transition-property:left,background-color;transition-property:left,background-color;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nflex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.itemBackground[data-v-bf70be7e]{height:100%;width:100%;-webkit-transition-property:all;transition-property:all}.u-scroll-bar[data-v-bf70be7e]{position:absolute;bottom:%?4?%}',""]),t.exports=e},cdd1:function(t,e,n){"use strict";n.r(e);var i=n("6270"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},e599:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uBadge:n("9971").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-tabs",style:{zIndex:t.zIndex,background:t.bgColor}},[n("v-uni-scroll-view",{staticClass:"u-scroll-view",style:{zIndex:t.zIndex+1},attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[n("v-uni-view",{staticClass:"u-tabs-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.getTabs,(function(e,i){return n("v-uni-view",{key:i,staticClass:"u-tabs-item",class:[t.preId+i],style:[t.tabItemStyle(i)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.emit(i)}}},[n("u-badge",{attrs:{count:e[t.count]||e["count"]||0,offset:t.offset,size:"mini"}}),t._v(t._s(e[t.name]||e["name"]))],1)})),t.showBar?n("v-uni-view",{staticClass:"u-scroll-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)},o=[]}}]);