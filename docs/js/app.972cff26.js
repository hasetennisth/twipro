(function(t){function n(n){for(var r,a,c=n[0],l=n[1],s=n[2],d=0,f=[];d<c.length;d++)a=c[d],o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(n);while(f.length)f.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,c=1;c<e.length;c++){var l=e[c];0!==o[l]&&(r=!1)}r&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={app:0},i=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("64a9"),o=e.n(r);o.a},"0d75":function(t,n,e){},"3a9a":function(t,n,e){},"44f9":function(t,n,e){"use strict";var r=e("eefa"),o=e.n(r);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{style:t.initial_value,attrs:{id:"app"}},[e("Main")],1)},i=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("div",{attrs:{id:"scene"}},[e("div",{staticClass:"ground"},t._l(14,function(n){return e("div",{key:n,staticClass:"ground_row row"},t._l(12,function(r){return e("div",{key:r,staticClass:"ground_child col-1"},[7==n&&6==r?e("div",[e("Chara")],1):t._e()])}),0)}),0),e("Control",{on:{stage_reload:t.reload_call}})],1)])},c=[],l=(e("e4b4"),[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1]),s=[1,1,1,1,1,1,1,1,1,1,1,1],u=[1,1,1,1,1,1,1,1,1,1,1,1],d={0:"field1",1:"yama1"},f={ground:l};function _(t){return f[t]}function h(t){switch(t){case"top":for(var n=0;n<12;n++)l.unshift(l[s.length-12+n]),l.length=144,u.unshift(l[l.length-12+n]);break;case"left":break;case"right":break;case"bottom":for(var e=0;e<12;e++)s.push(l[e]),0==e&&l.splice(0,12),l.push(u[e]);console.log(l);break;default:break}}var p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"border d-inline",attrs:{id:"player"}},[t._v("Al")])},v=[],g={name:"character"},m=g,b=(e("cb29"),e("2877")),y=Object(b["a"])(m,p,v,!1,null,"66252426",null),k=y.exports,w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"controllers"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6",attrs:{id:"control_top"},on:{click:function(n){return t.top_click()}}},[t._v("a")]),e("div",{staticClass:"col-6",attrs:{id:"control_right"},on:{click:function(n){return t.right_click()}}},[t._v("a")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6",attrs:{id:"control_left"},on:{click:function(n){return t.left_click()}}},[t._v("a")]),e("div",{staticClass:"col-6",attrs:{id:"control_bottom"},on:{click:function(n){return t.bottom_click()}}},[t._v("a")])])])},C=[],O={name:"control",methods:{top_click:function(){this.$emit("stage_reload","top")},left_click:function(){this.$emit("stage_reload","left")},right_click:function(){this.$emit("stage_reload","right")},bottom_click:function(){this.$emit("stage_reload","bottom")}}},j=O,x=(e("44f9"),Object(b["a"])(j,w,C,!1,null,"392865a5",null)),$=x.exports,E=(e("3022"),{name:"game",data:function(){return{}},components:{Chara:k,Control:$},mounted:function(){this.load_call()},methods:{load_call:function(){this.dedication_id(),this.stage_load()},reload_call:function(t){this.remove_class(_("ground")),h(t),this.stage_load()},dedication_id:function(){for(var t=document.getElementsByClassName("ground_child"),n=0;n<t.length;n++)t[n].setAttribute("id","ground_child_"+n)},stage_load:function(){for(var t=_("ground"),n=0;n<t.length;n++)document.getElementById("ground_child_"+n).classList.add(d[t[n]])},remove_class:function(t){for(var n=0;n<t.length;n++)document.getElementById("ground_child_"+n).classList.remove(d[t[n]])}}}),M=E,P=(e("abc1"),Object(b["a"])(M,a,c,!1,null,"54ca03d8",null)),S=P.exports,B=innerWidth,T=innerHeight,A={name:"app",components:{Main:S},mounted:function(){},computed:{initial_value:function(){return{"over-flow":"hidden","--body_width":B+"px","--body_height":T+"px"}}}},I=A,J=(e("034f"),Object(b["a"])(I,o,i,!1,null,null,null)),L=J.exports,H=e("9f7b"),N=e.n(H);e("f9e3"),e("2dd8");r["a"].config.productionTip=!1,r["a"].use(N.a),new r["a"]({render:function(t){return t(L)}}).$mount("#app")},"64a9":function(t,n,e){},abc1:function(t,n,e){"use strict";var r=e("0d75"),o=e.n(r);o.a},cb29:function(t,n,e){"use strict";var r=e("3a9a"),o=e.n(r);o.a},e4b4:function(t,n){},eefa:function(t,n,e){}});
//# sourceMappingURL=app.972cff26.js.map