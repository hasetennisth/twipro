(function(t){function n(n){for(var o,c,a=n[0],l=n[1],u=n[2],d=0,f=[];d<a.length;d++)c=a[d],r[c]&&f.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);s&&s(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,a=1;a<e.length;a++){var l=e[a];0!==r[l]&&(o=!1)}o&&(i.splice(n--,1),t=c(c.s=e[0]))}return t}var o={},r={app:0},i=[];function c(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=o,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)c.d(e,o,function(n){return t[n]}.bind(null,o));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var s=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var o=e("64a9"),r=e.n(o);r.a},"083d":function(t,n,e){},"179e":function(t,n,e){},3277:function(t,n,e){"use strict";var o=e("083d"),r=e.n(o);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{style:t.initial_value,attrs:{id:"app"}},[e("Main")],1)},i=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("div",{attrs:{id:"scene"}},[e("div",{staticClass:"ground"},t._l(14,function(n){return e("div",{key:n,staticClass:"ground_row row"},t._l(12,function(o){return e("div",{key:o,staticClass:"ground_child col-1"},[7==n&&6==o?e("div",[e("Chara")],1):t._e()])}),0)}),0),e("Control",{on:{stage_reload:function(n){return t.stage_load()}}})],1)])},a=[],l=(e("e4b4"),[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1]),u={0:"field1",1:"yama1"},s={ground:l};function d(t){return s[t]}function f(){document.getElementById("ground_child_0").classList.remove(u[1]),l[0]=0}var _=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"border d-inline",attrs:{id:"player"}},[t._v("Al")])},p=[],v={name:"character"},h=v,g=(e("3277"),e("2877")),b=Object(g["a"])(h,_,p,!1,null,"1eb93006",null),m=b.exports,y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"controllers"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6",attrs:{id:"control_top"},on:{click:function(n){return t.top_click()}}},[t._v("a")]),e("div",{staticClass:"col-6",attrs:{id:"control_right"},on:{click:function(n){return t.right_click()}}},[t._v("a")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6",attrs:{id:"control_left"},on:{click:function(n){return t.left_click()}}},[t._v("a")]),e("div",{staticClass:"col-6",attrs:{id:"control_bottom"},on:{click:function(n){return t.bottom_click()}}},[t._v("a")])])])},k=[],w={name:"control",methods:{top_click:function(){f(),this.$emit("stage_reload")},left_click:function(){console.log("left")},right_click:function(){console.log("right")},bottom_click:function(){console.log("bottom")}}},C=w,O=(e("f152"),Object(g["a"])(C,y,k,!1,null,"0abc2465",null)),j=O.exports,x={name:"game",data:function(){return{}},components:{Chara:m,Control:j},mounted:function(){this.load_call()},methods:{load_call:function(){this.dedication_id(),this.stage_load()},dedication_id:function(){for(var t=document.getElementsByClassName("ground_child"),n=0;n<t.length;n++)t[n].setAttribute("id","ground_child_"+n)},stage_load:function(){for(var t=d("ground"),n=0;n<t.length;n++)document.getElementById("ground_child_"+n).classList.add(u[t[n]])}}},E=x,M=(e("b718"),Object(g["a"])(E,c,a,!1,null,"1d6f1bf9",null)),P=M.exports,$=innerWidth,S=innerHeight,B={name:"app",components:{Main:P},mounted:function(){},computed:{initial_value:function(){return{"over-flow":"hidden","--body_width":$+"px","--body_height":S+"px"}}}},T=B,A=(e("034f"),Object(g["a"])(T,r,i,!1,null,null,null)),I=A.exports,J=e("9f7b"),L=e.n(J);e("f9e3"),e("2dd8");o["a"].config.productionTip=!1,o["a"].use(L.a),new o["a"]({render:function(t){return t(I)}}).$mount("#app")},"64a9":function(t,n,e){},"7af7":function(t,n,e){},b718:function(t,n,e){"use strict";var o=e("7af7"),r=e.n(o);r.a},e4b4:function(t,n){},f152:function(t,n,e){"use strict";var o=e("179e"),r=e.n(o);r.a}});
//# sourceMappingURL=app.78e3685f.js.map