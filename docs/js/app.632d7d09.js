(function(t){function n(n){for(var r,c,a=n[0],s=n[1],l=n[2],d=0,f=[];d<a.length;d++)c=a[d],o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(n);while(f.length)f.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,a=1;a<e.length;a++){var s=e[a];0!==o[s]&&(r=!1)}r&&(i.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},o={app:0},i=[];function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var u=s;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"021b":function(t,n,e){},"034f":function(t,n,e){"use strict";var r=e("64a9"),o=e.n(r);o.a},"3a9a":function(t,n,e){},"3c63":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{style:t.initial_value,attrs:{id:"app"}},[e("Main")],1)},i=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("div",{attrs:{id:"scene"}},[e("div",{staticClass:"ground"},t._l(14,function(n){return e("div",{key:n,staticClass:"ground_row row"},t._l(12,function(r){return e("div",{key:r,staticClass:"ground_child col-1"},[7==n&&6==r?e("div",[e("Chara")],1):t._e()])}),0)}),0),e("Control",{on:{stage_reload:t.reload_call}})],1)])},a=[],s=(e("e4b4"),e("a4bb")),l=e.n(s),u=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,101,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],d={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[]},f=[],_={0:"field1",1:"yama1",undefined:"blackout",101:"STAGE_ground"},h={0:"yama1",1:"blackout"},p={0:["STAGE_ground",-3,-3]},v={STAGE_ground:u};function b(){d={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[]},f=[]}function m(t,n,e){for(var r=v[e].length,o=Math.sqrt(r),i=[],c=0;c<12;c++){for(var a=0;a<12;a++)d[c][a]=t+a<0||o-1<t+a?void 0:v[e][(n+c)*o+t+a];for(var s=0;s<d[c].length;s++)i.push(d[c][s])}return f=i,i}function g(t,n,e){for(var r=0,o=77+n+12*e,i=document.getElementById("ground_child_"+o).classList,c=0;c<i.length;c++){for(var a=0;a<l()(h).length;a++)i[c]==h[a]&&(r=1);for(var s=0;s<l()(p).length;s++)i[c]==p[s][0]&&(r=p[s])}return r}var w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"border d-inline",attrs:{id:"player"}},[t._v("Al")])},k=[],y={name:"character"},C=y,E=(e("cb29"),e("2877")),O=Object(E["a"])(C,w,k,!1,null,"66252426",null),$=O.exports,j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"controllers"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 control_btn border pointer",attrs:{id:"control_top"},on:{click:function(n){return t.top_click()},touchstart:function(n){return t.put_btn("top")},touchend:function(n){return t.release_btn()}}},[t._m(0)]),e("div",{staticClass:"col-6 control_btn border pointer",attrs:{id:"control_right"},on:{click:function(n){return t.right_click()},touchstart:function(n){return t.put_btn("right")},touchend:function(n){return t.release_btn()}}},[t._m(1)])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 control_btn border pointer",attrs:{id:"control_left"},on:{click:function(n){return t.left_click()},touchstart:function(n){return t.put_btn("left")},touchend:function(n){return t.release_btn()}}},[t._m(2)]),e("div",{staticClass:"col-6 control_btn border pointer",attrs:{id:"control_bottom"},on:{click:function(n){return t.bottom_click()},touchstart:function(n){return t.put_btn("bottom")},touchend:function(n){return t.release_btn()}}},[t._m(3)])])])},x=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"control_kn"},[e("i",{staticClass:"fas fa-arrow-up"})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"control_kn"},[e("i",{staticClass:"fas fa-arrow-right"})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"control_kn"},[e("i",{staticClass:"fas fa-arrow-left"})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"control_kn"},[e("i",{staticClass:"fas fa-arrow-down"})])}],S={name:"control",data:function(){return{stop_count:1e3,nowcount:0,now_put:!1}},methods:{top_click:function(){this.$emit("stage_reload",0,-1,"top")},left_click:function(){this.$emit("stage_reload",-1,0,"left")},right_click:function(){this.$emit("stage_reload",1,0,"right")},bottom_click:function(){this.$emit("stage_reload",0,1,"bottom")},put_btn:function(t){var n=this,e=0,r=function r(){e++,n.nowcount=e;var o=setTimeout(r,300);if(e>n.stop_count&&(clearTimeout(o),n.stop_count=1e3,n.nowcount=0),e>3&&(n.now_put=!0),1==n.now_put){switch(t){case"top":n.top_click();break;case"left":n.left_click();break;case"right":n.right_click();break;case"bottom":n.bottom_click();break;default:break}n.top_click()}};r()},release_btn:function(){this.now_put=!1,this.stop_count=this.nowcount}}},T=S,M=(e("a08f"),Object(E["a"])(T,j,x,!1,null,"c255dc00",null)),A=M.exports,P=(e("3022"),{name:"game",data:function(){return{col:0,row:0,stage:"",temp_arr:[]}},components:{Chara:$,Control:A},mounted:function(){var t="STAGE_ground";this.load_call(t,0,0)},methods:{load_call:function(t,n,e){b(),this.remove_class(this.temp_arr),this.temp_arr=[],this.dedication_id(),this.col=n,this.row=e,this.stage_load(this.col,this.row,t),this.temp_arr=f,this.stage=t},reload_call:function(t,n,e){var r=g(this.temp_arr,t,n);return 1!=r&&(0!=r?(this.load_call(r[0],r[1],r[2]),!1):(this.col=this.col+t,this.row=this.row+n,this.remove_class(this.temp_arr),void this.stage_load(this.col,this.row,this.stage)))},dedication_id:function(){for(var t=document.getElementsByClassName("ground_child"),n=0;n<t.length;n++)t[n].setAttribute("id","ground_child_"+n)},stage_load:function(t,n,e){for(var r=m(t,n,e),o=0;o<r.length;o++)document.getElementById("ground_child_"+o).classList.add(_[r[o]]);this.temp_arr=r},remove_class:function(t){for(var n=0;n<t.length;n++)document.getElementById("ground_child_"+n).classList.remove(_[t[n]])}}}),B=P,G=(e("694d"),Object(E["a"])(B,c,a,!1,null,"69bebbed",null)),I=G.exports,L=innerWidth,J=innerHeight,q={name:"app",components:{Main:I},mounted:function(){},computed:{initial_value:function(){return{"over-flow":"hidden","--body_width":L+"px","--body_height":J+"px"}}}},H=q,N=(e("034f"),Object(E["a"])(H,o,i,!1,null,null,null)),W=N.exports,z=e("9f7b"),D=e.n(z);e("f9e3"),e("2dd8");r["a"].config.productionTip=!1,r["a"].use(D.a),new r["a"]({render:function(t){return t(W)}}).$mount("#app")},"64a9":function(t,n,e){},"694d":function(t,n,e){"use strict";var r=e("021b"),o=e.n(r);o.a},a08f:function(t,n,e){"use strict";var r=e("3c63"),o=e.n(r);o.a},cb29:function(t,n,e){"use strict";var r=e("3a9a"),o=e.n(r);o.a},e4b4:function(t,n){}});
//# sourceMappingURL=app.632d7d09.js.map