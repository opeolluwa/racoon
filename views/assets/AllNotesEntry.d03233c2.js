import{n as oe,q as ie,d as ce,a as ae,I as ue,B as se,S as fe,s as de,u as pe,_ as le,r as K,o as R,c as V,f as he,x as Z,l as ee,e as F,F as te,y as ve,t as J,p as me,k as be}from"./index.f8e3d68e.js";import{A as ge,a as ye}from"./AppEmptyState.32bdad68.js";import{u as re}from"./notes.67e3bc46.js";function _e(d,_){for(var o=0;o<_.length;o++){var a=_[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}}function we(d){var _=new Date(d),o=_.getMonth()+1,a=o<10?"0".concat(o):o,e=_.getDate()<10?"0".concat(_.getDate()):_.getDate(),t=_.getHours()<10?"0".concat(_.getHours()):_.getHours(),r=_.getMinutes()<10?"0".concat(_.getMinutes()):_.getMinutes();return"".concat(_.getFullYear(),"-").concat(a,"-").concat(e," ").concat(t,":").concat(r)}function z(d,_){return" ".concat(d," ").concat(_).concat(d>1?"s":""," ago")}function U(d,_){return" ".concat(d," ").concat(_).concat(d>1?"s":""," atr\xE1s")}function G(d,_){return" ".concat(d," ").concat(_).concat(d>1?"s":""," atr\xE1s")}function H(d,_){return"il y a ".concat(d," ").concat(_).concat(d>1?"s":"")}function X(d,_){return" ".concat(d," ").concat(_).concat(d>1?"s":""," temu")}var Se={zh_TW:{short:{now:"\u525B\u525B",sec:" \u79D2",min:" \u5206",hour:" \u5C0F\u6642",day:" \u5929"},long:{now:"\u525B\u525B",sec:" \u79D2\u9418\u524D",min:" \u5206\u9418\u524D",hour:" \u5C0F\u6642\u524D",day:" \u5929\u524D"}},zh_CN:{short:{now:"\u521A\u521A",sec:" \u79D2",min:" \u5206",hour:" \u5C0F\u65F6",day:" \u5929"},long:{now:"\u521A\u521A",sec:" \u79D2\u949F\u524D",min:" \u5206\u949F\u524D",hour:" \u5C0F\u65F6\u524D",day:" \u5929\u524D"}},en:{short:{now:"just now",sec:"s",min:"m",hour:"h",day:"d"},long:{now:"just now",sec:function(d){return z(d,"second")},min:function(d){return z(d,"minute")},hour:function(d){return z(d,"hour")},day:function(d){return z(d,"day")}}},jp:{short:{now:"\u3059\u3053\u3057\u524D",sec:" \u79D2",min:" \u5206",hour:" \u6642\u9593",day:" \u65E5"},long:{now:"\u3059\u3053\u3057\u524D",sec:" \u79D2\u524D",min:" \u5206\u524D",hour:" \u6642\u9593\u524D",day:" \u65E5\u524D"}},pt_BR:{short:{now:"agora",sec:"s",min:"m",hour:"h",day:"d"},long:{now:"agora",sec:function(d){return G(d,"segundo")},min:function(d){return G(d,"minuto")},hour:function(d){return G(d,"hora")},day:function(d){return G(d,"dia")}}},es:{short:{now:"ahora mismo",sec:"s",min:"m",hour:"h",day:"d"},long:{now:"ahora mismo",sec:function(d){return U(d,"segundo")},min:function(d){return U(d,"minuto")},hour:function(d){return U(d,"hora")},day:function(d){return U(d,"dia")}}},ar:{short:{now:"\u0642\u0628\u0644 \u0642\u0644\u064A\u0644",sec:" \u062B\u0627\u0646\u064A\u0629",min:" \u062F\u0642\u064A\u0642\u0629",hour:" \u0633\u0627\u0639\u0629",day:" \u064A\u0648\u0645"},long:{now:"\u0642\u0628\u0644 \u0642\u0644\u064A\u0644",sec:function(d){return" \u0642\u0628\u0644 ".concat(d," \u062B\u0648\u0627\u0646\u064A")},min:function(d){return" \u0642\u0628\u0644 ".concat(d," \u062F\u0642\u0627\u0626\u0642")},hour:function(d){return" \u0642\u0628\u0644 ".concat(d," \u0633\u0627\u0639\u0627\u062A")},day:function(d){return" \u0642\u0628\u0644 ".concat(d," \u0623\u064A\u0627\u0645")}}},fr:{short:{now:"maintenant",sec:"s",min:"m",hour:"h",day:"j"},long:{now:"maintenant",sec:function(d){return H(d,"seconde")},min:function(d){return H(d,"minute")},hour:function(d){return H(d,"heure")},day:function(d){return H(d,"jour")}}},pl:{short:{now:"przed chwil\u0105",sec:"s",min:"m",hour:"g",day:"d"},long:{now:"przed chwil\u0105",sec:function(d){return X(d,"sekund")},min:function(d){return X(d,"minut")},hour:function(d){return X(d,"godzin")},day:function(d){return X(d,"dni")}}},tr:{short:{now:"\u015Fimdi",sec:"sn",min:"dk",hour:"s",day:"g"},long:{now:"\u015Fimdi",sec:"saniye",min:"dakika",hour:"saat",day:"g\xFCn"}}},xe=function(){function d(a,e,t){(function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")})(this,d),this.dateTime=a,this.locale=e||"en",this.type=t||"short"}var _,o;return _=d,(o=[{key:"setLocale",value:function(a){this.locale=a}},{key:"getTimeAgoString",value:function(a,e){return typeof e=="string"?"".concat(a).concat(e):e(a)}},{key:"getTimeAgo",value:function(){var a,e,t=Se[this.locale][this.type],r=t.now,n=t.min,i=t.hour,c=t.day,s=(a=this.dateTime,!isNaN(a)||/^\d+$/.test(a)?a:a instanceof Date?a.getTime():(a=(a||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(a).getTime())),f=new Date().getTime(),u=((e=new Date).setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),e.getTime(),function(){var p=new Date;p.setMonth(0),p.setDate(1),p.setHours(0),p.setMinutes(0),p.setSeconds(0),p.setMilliseconds(0),p.getTime()}(),(f-s)/1e3);return{timeago:u<=0||Math.floor(u/60)<=0?r:u<3600?this.getTimeAgoString(Math.round(u/60),n):u>=3600&&Math.round(u/3600)<24?this.getTimeAgoString(Math.round(u/3600),i):u/86400<=31?this.getTimeAgoString(Math.round(u/86400),c):function(p){var l=new Date(p),h=l.getMonth()+1,m=h<10?"0".concat(h):h,g=l.getDate()<10?"0".concat(l.getDate()):l.getDate();return"".concat(l.getFullYear(),"-").concat(m,"-").concat(g)}(s),nowString:we(s)}}}])&&_e(_.prototype,o),d}();function Oe(d,_,o,a,e,t,r,n,i,c){typeof r!="boolean"&&(i=n,n=r,r=!1);const s=typeof o=="function"?o.options:o;let f;if(d&&d.render&&(s.render=d.render,s.staticRenderFns=d.staticRenderFns,s._compiled=!0,e&&(s.functional=!0)),a&&(s._scopeId=a),t?(f=function(u){(u=u||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(u=__VUE_SSR_CONTEXT__),_&&_.call(this,i(u)),u&&u._registeredComponents&&u._registeredComponents.add(t)},s._ssrRegister=f):_&&(f=r?function(u){_.call(this,c(u,this.$root.$options.shadowRoot))}:function(u){_.call(this,n(u))}),f)if(s.functional){const u=s.render;s.render=function(p,l){return f.call(l),u(p,l)}}else{const u=s.beforeCreate;s.beforeCreate=u?[].concat(u,f):[f]}return o}const Ee=Oe({render:function(){var d=this.$createElement;return(this._self._c||d)("span",[this._t("default",null,{timeago:this.timeago})],2)},staticRenderFns:[]},void 0,{name:"TimeAgo",props:{datetime:{type:[String,Date,Number],default:function(d){return new Date}},locale:{type:String,default:"en"},refresh:{type:[Number,Boolean],default:!1},long:{type:Boolean,default:!1},todo:{type:Function,default:function(d){}},tooltip:{type:[String,Boolean],default:!1}},data:function(){return{timeago:"",nowString:"",intervalId:null}},computed:{options:function(){return{placement:typeof this.tooltip=="string"?this.tooltip:"top",content:this.nowString}}},methods:{reloadTime:function(){var d,_,o,a=(d=this.datetime,_=this.locale,o=this.long?"long":"short",new xe(d,_,o).getTimeAgo()),e=a.timeago,t=a.nowString;this.timeago=e,this.nowString=t,this.intervalId&&this.todo()}},mounted:function(){var d=this;this.$nextTick(function(){d.reloadTime(),d.refresh&&(d.refresh===!0||d.refresh,d.intervalId=setInterval(d.reloadTime,1e3*d.refresh))})},destroyed:function(){this.intervalId&&clearInterval(this.intervalId)}},void 0,!1,void 0,!1,void 0,void 0,void 0),Te=Ee;var ne={exports:{}};(function(d,_){(function(o,a){d.exports=a()})(typeof self<"u"?self:ie,function(){return function(o){var a={};function e(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return o[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=o,e.c=a,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r||4&r&&typeof t=="object"&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&typeof t!="string")for(var i in t)e.d(n,i,function(c){return t[c]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s="fb15")}({"00ee":function(o,a,e){var t=e("b622"),r=t("toStringTag"),n={};n[r]="z",o.exports=String(n)==="[object z]"},"0366":function(o,a,e){var t=e("e330"),r=e("59ed"),n=e("40d5"),i=t(t.bind);o.exports=function(c,s){return r(c),s===void 0?c:n?i(c,s):function(){return c.apply(s,arguments)}}},"06cf":function(o,a,e){var t=e("83ab"),r=e("c65b"),n=e("d1e7"),i=e("5c6c"),c=e("fc6a"),s=e("a04b"),f=e("1a2d"),u=e("0cfb"),p=Object.getOwnPropertyDescriptor;a.f=t?p:function(l,h){if(l=c(l),h=s(h),u)try{return p(l,h)}catch{}if(f(l,h))return i(!r(n.f,l,h),l[h])}},"07fa":function(o,a,e){var t=e("50c4");o.exports=function(r){return t(r.length)}},"0b42":function(o,a,e){var t=e("da84"),r=e("e8b5"),n=e("68ee"),i=e("861d"),c=e("b622"),s=c("species"),f=t.Array;o.exports=function(u){var p;return r(u)&&(p=u.constructor,n(p)&&(p===f||r(p.prototype))?p=void 0:i(p)&&(p=p[s],p===null&&(p=void 0))),p===void 0?f:p}},"0cfb":function(o,a,e){var t=e("83ab"),r=e("d039"),n=e("cc12");o.exports=!t&&!r(function(){return Object.defineProperty(n("div"),"a",{get:function(){return 7}}).a!=7})},"0d51":function(o,a,e){var t=e("da84"),r=t.String;o.exports=function(n){try{return r(n)}catch{return"Object"}}},"13d2":function(o,a,e){var t=e("d039"),r=e("1626"),n=e("1a2d"),i=e("83ab"),c=e("5e77").CONFIGURABLE,s=e("8925"),f=e("69f3"),u=f.enforce,p=f.get,l=Object.defineProperty,h=i&&!t(function(){return l(function(){},"length",{value:8}).length!==8}),m=String(String).split("String"),g=o.exports=function(y,v,b){String(v).slice(0,7)==="Symbol("&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),b&&b.getter&&(v="get "+v),b&&b.setter&&(v="set "+v),(!n(y,"name")||c&&y.name!==v)&&l(y,"name",{value:v,configurable:!0}),h&&b&&n(b,"arity")&&y.length!==b.arity&&l(y,"length",{value:b.arity});try{b&&n(b,"constructor")&&b.constructor?i&&l(y,"prototype",{writable:!1}):y.prototype&&(y.prototype=void 0)}catch{}var x=u(y);return n(x,"source")||(x.source=m.join(typeof v=="string"?v:"")),y};Function.prototype.toString=g(function(){return r(this)&&p(this).source||s(this)},"toString")},1626:function(o,a){o.exports=function(e){return typeof e=="function"}},"1a2d":function(o,a,e){var t=e("e330"),r=e("7b0b"),n=t({}.hasOwnProperty);o.exports=Object.hasOwn||function(i,c){return n(r(i),c)}},"1d80":function(o,a,e){var t=e("da84"),r=t.TypeError;o.exports=function(n){if(n==null)throw r("Can't call method on "+n);return n}},"1dde":function(o,a,e){var t=e("d039"),r=e("b622"),n=e("2d00"),i=r("species");o.exports=function(c){return n>=51||!t(function(){var s=[],f=s.constructor={};return f[i]=function(){return{foo:1}},s[c](Boolean).foo!==1})}},"23cb":function(o,a,e){var t=e("5926"),r=Math.max,n=Math.min;o.exports=function(i,c){var s=t(i);return s<0?r(s+c,0):n(s,c)}},"23e7":function(o,a,e){var t=e("da84"),r=e("06cf").f,n=e("9112"),i=e("cb2d"),c=e("6374"),s=e("e893"),f=e("94ca");o.exports=function(u,p){var l,h,m,g,y,v,b=u.target,x=u.global,O=u.stat;if(h=x?t:O?t[b]||c(b,{}):(t[b]||{}).prototype,h)for(m in p){if(y=p[m],u.dontCallGetSet?(v=r(h,m),g=v&&v.value):g=h[m],l=f(x?m:b+(O?".":"#")+m,u.forced),!l&&g!==void 0){if(typeof y==typeof g)continue;s(y,g)}(u.sham||g&&g.sham)&&n(y,"sham",!0),i(h,m,y,u)}}},"241c":function(o,a,e){var t=e("ca84"),r=e("7839"),n=r.concat("length","prototype");a.f=Object.getOwnPropertyNames||function(i){return t(i,n)}},"2d00":function(o,a,e){var t,r,n=e("da84"),i=e("342f"),c=n.process,s=n.Deno,f=c&&c.versions||s&&s.version,u=f&&f.v8;u&&(t=u.split("."),r=t[0]>0&&t[0]<4?1:+(t[0]+t[1])),!r&&i&&(t=i.match(/Edge\/(\d+)/),(!t||t[1]>=74)&&(t=i.match(/Chrome\/(\d+)/),t&&(r=+t[1]))),o.exports=r},"342f":function(o,a,e){var t=e("d066");o.exports=t("navigator","userAgent")||""},"3a9b":function(o,a,e){var t=e("e330");o.exports=t({}.isPrototypeOf)},"3bbe":function(o,a,e){var t=e("da84"),r=e("1626"),n=t.String,i=t.TypeError;o.exports=function(c){if(typeof c=="object"||r(c))return c;throw i("Can't set "+n(c)+" as a prototype")}},"408a":function(o,a,e){var t=e("e330");o.exports=t(1 .valueOf)},"40d5":function(o,a,e){var t=e("d039");o.exports=!t(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")})},"44ad":function(o,a,e){var t=e("da84"),r=e("e330"),n=e("d039"),i=e("c6b6"),c=t.Object,s=r("".split);o.exports=n(function(){return!c("z").propertyIsEnumerable(0)})?function(f){return i(f)=="String"?s(f,""):c(f)}:c},"485a":function(o,a,e){var t=e("da84"),r=e("c65b"),n=e("1626"),i=e("861d"),c=t.TypeError;o.exports=function(s,f){var u,p;if(f==="string"&&n(u=s.toString)&&!i(p=r(u,s))||n(u=s.valueOf)&&!i(p=r(u,s))||f!=="string"&&n(u=s.toString)&&!i(p=r(u,s)))return p;throw c("Can't convert object to primitive value")}},4930:function(o,a,e){var t=e("2d00"),r=e("d039");o.exports=!!Object.getOwnPropertySymbols&&!r(function(){var n=Symbol();return!String(n)||!(Object(n)instanceof Symbol)||!Symbol.sham&&t&&t<41})},"4d64":function(o,a,e){var t=e("fc6a"),r=e("23cb"),n=e("07fa"),i=function(c){return function(s,f,u){var p,l=t(s),h=n(l),m=r(u,h);if(c&&f!=f){for(;h>m;)if(p=l[m++],p!=p)return!0}else for(;h>m;m++)if((c||m in l)&&l[m]===f)return c||m||0;return!c&&-1}};o.exports={includes:i(!0),indexOf:i(!1)}},"50c4":function(o,a,e){var t=e("5926"),r=Math.min;o.exports=function(n){return n>0?r(t(n),9007199254740991):0}},5692:function(o,a,e){var t=e("c430"),r=e("c6cd");(o.exports=function(n,i){return r[n]||(r[n]=i!==void 0?i:{})})("versions",[]).push({version:"3.22.7",mode:t?"pure":"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.7/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(o,a,e){var t=e("d066"),r=e("e330"),n=e("241c"),i=e("7418"),c=e("825a"),s=r([].concat);o.exports=t("Reflect","ownKeys")||function(f){var u=n.f(c(f)),p=i.f;return p?s(u,p(f)):u}},"577e":function(o,a,e){var t=e("da84"),r=e("f5df"),n=t.String;o.exports=function(i){if(r(i)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return n(i)}},5899:function(o,a){o.exports=`	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`},"58a8":function(o,a,e){var t=e("e330"),r=e("1d80"),n=e("577e"),i=e("5899"),c=t("".replace),s="["+i+"]",f=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),p=function(l){return function(h){var m=n(r(h));return 1&l&&(m=c(m,f,"")),2&l&&(m=c(m,u,"")),m}};o.exports={start:p(1),end:p(2),trim:p(3)}},5926:function(o,a,e){var t=e("b42e");o.exports=function(r){var n=+r;return n!==n||n===0?0:t(n)}},"59ed":function(o,a,e){var t=e("da84"),r=e("1626"),n=e("0d51"),i=t.TypeError;o.exports=function(c){if(r(c))return c;throw i(n(c)+" is not a function")}},"5c6c":function(o,a){o.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(o,a,e){var t=e("83ab"),r=e("1a2d"),n=Function.prototype,i=t&&Object.getOwnPropertyDescriptor,c=r(n,"name"),s=c&&function(){}.name==="something",f=c&&(!t||t&&i(n,"name").configurable);o.exports={EXISTS:c,PROPER:s,CONFIGURABLE:f}},6374:function(o,a,e){var t=e("da84"),r=Object.defineProperty;o.exports=function(n,i){try{r(t,n,{value:i,configurable:!0,writable:!0})}catch{t[n]=i}return i}},"65f0":function(o,a,e){var t=e("0b42");o.exports=function(r,n){return new(t(r))(n===0?0:n)}},"68ee":function(o,a,e){var t=e("e330"),r=e("d039"),n=e("1626"),i=e("f5df"),c=e("d066"),s=e("8925"),f=function(){},u=[],p=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,h=t(l.exec),m=!l.exec(f),g=function(v){if(!n(v))return!1;try{return p(f,u,v),!0}catch{return!1}},y=function(v){if(!n(v))return!1;switch(i(v)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return m||!!h(l,s(v))}catch{return!0}};y.sham=!0,o.exports=!p||r(function(){var v;return g(g.call)||!g(Object)||!g(function(){v=!0})||v})?y:g},"69f3":function(o,a,e){var t,r,n,i=e("7f9a"),c=e("da84"),s=e("e330"),f=e("861d"),u=e("9112"),p=e("1a2d"),l=e("c6cd"),h=e("f772"),m=e("d012"),g="Object already initialized",y=c.TypeError,v=c.WeakMap,b=function(w){return n(w)?r(w):t(w,{})},x=function(w){return function(S){var A;if(!f(S)||(A=r(S)).type!==w)throw y("Incompatible receiver, "+w+" required");return A}};if(i||l.state){var O=l.state||(l.state=new v),j=s(O.get),P=s(O.has),N=s(O.set);t=function(w,S){if(P(O,w))throw new y(g);return S.facade=w,N(O,w,S),S},r=function(w){return j(O,w)||{}},n=function(w){return P(O,w)}}else{var T=h("state");m[T]=!0,t=function(w,S){if(p(w,T))throw new y(g);return S.facade=w,u(w,T,S),S},r=function(w){return p(w,T)?w[T]:{}},n=function(w){return p(w,T)}}o.exports={set:t,get:r,has:n,enforce:b,getterFor:x}},7156:function(o,a,e){var t=e("1626"),r=e("861d"),n=e("d2bb");o.exports=function(i,c,s){var f,u;return n&&t(f=c.constructor)&&f!==s&&r(u=f.prototype)&&u!==s.prototype&&n(i,u),i}},7418:function(o,a){a.f=Object.getOwnPropertySymbols},7839:function(o,a){o.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(o,a,e){var t=e("da84"),r=e("1d80"),n=t.Object;o.exports=function(i){return n(r(i))}},"7f9a":function(o,a,e){var t=e("da84"),r=e("1626"),n=e("8925"),i=t.WeakMap;o.exports=r(i)&&/native code/.test(n(i))},"825a":function(o,a,e){var t=e("da84"),r=e("861d"),n=t.String,i=t.TypeError;o.exports=function(c){if(r(c))return c;throw i(n(c)+" is not an object")}},"83ab":function(o,a,e){var t=e("d039");o.exports=!t(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},"861d":function(o,a,e){var t=e("1626");o.exports=function(r){return typeof r=="object"?r!==null:t(r)}},8875:function(o,a,e){var t,r,n;(function(i,c){r=[],t=c,n=typeof t=="function"?t.apply(a,r):t,n===void 0||(o.exports=n)})(typeof self<"u"&&self,function(){function i(){var c=Object.getOwnPropertyDescriptor(document,"currentScript");if(!c&&"currentScript"in document&&document.currentScript||c&&c.get!==i&&document.currentScript)return document.currentScript;try{throw new Error}catch(x){var s,f,u,p=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,l=/@([^@]*):(\d+):(\d+)\s*$/gi,h=p.exec(x.stack)||l.exec(x.stack),m=h&&h[1]||!1,g=h&&h[2]||!1,y=document.location.href.replace(document.location.hash,""),v=document.getElementsByTagName("script");m===y&&(s=document.documentElement.outerHTML,f=new RegExp("(?:[^\\n]+?\\n){0,"+(g-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),u=s.replace(f,"$1").trim());for(var b=0;b<v.length;b++)if(v[b].readyState==="interactive"||v[b].src===m||m===y&&v[b].innerHTML&&v[b].innerHTML.trim()===u)return v[b];return null}}return i})},8925:function(o,a,e){var t=e("e330"),r=e("1626"),n=e("c6cd"),i=t(Function.toString);r(n.inspectSource)||(n.inspectSource=function(c){return i(c)}),o.exports=n.inspectSource},"90e3":function(o,a,e){var t=e("e330"),r=0,n=Math.random(),i=t(1 .toString);o.exports=function(c){return"Symbol("+(c===void 0?"":c)+")_"+i(++r+n,36)}},9112:function(o,a,e){var t=e("83ab"),r=e("9bf2"),n=e("5c6c");o.exports=t?function(i,c,s){return r.f(i,c,n(1,s))}:function(i,c,s){return i[c]=s,i}},"94ca":function(o,a,e){var t=e("d039"),r=e("1626"),n=/#|\.prototype\./,i=function(p,l){var h=s[c(p)];return h==u||h!=f&&(r(l)?t(l):!!l)},c=i.normalize=function(p){return String(p).replace(n,".").toLowerCase()},s=i.data={},f=i.NATIVE="N",u=i.POLYFILL="P";o.exports=i},"9bf2":function(o,a,e){var t=e("da84"),r=e("83ab"),n=e("0cfb"),i=e("aed9"),c=e("825a"),s=e("a04b"),f=t.TypeError,u=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l="enumerable",h="configurable",m="writable";a.f=r?i?function(g,y,v){if(c(g),y=s(y),c(v),typeof g=="function"&&y==="prototype"&&"value"in v&&m in v&&!v[m]){var b=p(g,y);b&&b[m]&&(g[y]=v.value,v={configurable:h in v?v[h]:b[h],enumerable:l in v?v[l]:b[l],writable:!1})}return u(g,y,v)}:u:function(g,y,v){if(c(g),y=s(y),c(v),n)try{return u(g,y,v)}catch{}if("get"in v||"set"in v)throw f("Accessors not supported");return"value"in v&&(g[y]=v.value),g}},a04b:function(o,a,e){var t=e("c04e"),r=e("d9b5");o.exports=function(n){var i=t(n,"string");return r(i)?i:i+""}},a9e3:function(o,a,e){var t=e("83ab"),r=e("da84"),n=e("e330"),i=e("94ca"),c=e("cb2d"),s=e("1a2d"),f=e("7156"),u=e("3a9b"),p=e("d9b5"),l=e("c04e"),h=e("d039"),m=e("241c").f,g=e("06cf").f,y=e("9bf2").f,v=e("408a"),b=e("58a8").trim,x="Number",O=r[x],j=O.prototype,P=r.TypeError,N=n("".slice),T=n("".charCodeAt),w=function($){var M=l($,"number");return typeof M=="bigint"?M:S(M)},S=function($){var M,D,q,Y,L,Q,B,W,C=l($,"number");if(p(C))throw P("Cannot convert a Symbol value to a number");if(typeof C=="string"&&C.length>2){if(C=b(C),M=T(C,0),M===43||M===45){if(D=T(C,2),D===88||D===120)return NaN}else if(M===48){switch(T(C,1)){case 66:case 98:q=2,Y=49;break;case 79:case 111:q=8,Y=55;break;default:return+C}for(L=N(C,2),Q=L.length,B=0;B<Q;B++)if(W=T(L,B),W<48||W>Y)return NaN;return parseInt(L,q)}}return+C};if(i(x,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var A,I=function($){var M=arguments.length<1?0:O(w($)),D=this;return u(j,D)&&h(function(){v(D)})?f(Object(M),D,I):M},E=t?m(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;E.length>k;k++)s(O,A=E[k])&&!s(I,A)&&y(I,A,g(O,A));I.prototype=j,j.constructor=I,c(r,x,I,{constructor:!0})}},aed9:function(o,a,e){var t=e("83ab"),r=e("d039");o.exports=t&&r(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},b0c0:function(o,a,e){var t=e("83ab"),r=e("5e77").EXISTS,n=e("e330"),i=e("9bf2").f,c=Function.prototype,s=n(c.toString),f=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=n(f.exec),p="name";t&&!r&&i(c,p,{configurable:!0,get:function(){try{return u(f,s(this))[1]}catch{return""}}})},b42e:function(o,a){var e=Math.ceil,t=Math.floor;o.exports=Math.trunc||function(r){var n=+r;return(n>0?t:e)(n)}},b622:function(o,a,e){var t=e("da84"),r=e("5692"),n=e("1a2d"),i=e("90e3"),c=e("4930"),s=e("fdbf"),f=r("wks"),u=t.Symbol,p=u&&u.for,l=s?u:u&&u.withoutSetter||i;o.exports=function(h){if(!n(f,h)||!c&&typeof f[h]!="string"){var m="Symbol."+h;c&&n(u,h)?f[h]=u[h]:f[h]=s&&p?p(m):l(m)}return f[h]}},b727:function(o,a,e){var t=e("0366"),r=e("e330"),n=e("44ad"),i=e("7b0b"),c=e("07fa"),s=e("65f0"),f=r([].push),u=function(p){var l=p==1,h=p==2,m=p==3,g=p==4,y=p==6,v=p==7,b=p==5||y;return function(x,O,j,P){for(var N,T,w=i(x),S=n(w),A=t(O,j),I=c(S),E=0,k=P||s,$=l?k(x,I):h||v?k(x,0):void 0;I>E;E++)if((b||E in S)&&(N=S[E],T=A(N,E,w),p))if(l)$[E]=T;else if(T)switch(p){case 3:return!0;case 5:return N;case 6:return E;case 2:f($,N)}else switch(p){case 4:return!1;case 7:f($,N)}return y?-1:m||g?g:$}};o.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},c04e:function(o,a,e){var t=e("da84"),r=e("c65b"),n=e("861d"),i=e("d9b5"),c=e("dc4a"),s=e("485a"),f=e("b622"),u=t.TypeError,p=f("toPrimitive");o.exports=function(l,h){if(!n(l)||i(l))return l;var m,g=c(l,p);if(g){if(h===void 0&&(h="default"),m=r(g,l,h),!n(m)||i(m))return m;throw u("Can't convert object to primitive value")}return h===void 0&&(h="number"),s(l,h)}},c430:function(o,a){o.exports=!1},c65b:function(o,a,e){var t=e("40d5"),r=Function.prototype.call;o.exports=t?r.bind(r):function(){return r.apply(r,arguments)}},c6b6:function(o,a,e){var t=e("e330"),r=t({}.toString),n=t("".slice);o.exports=function(i){return n(r(i),8,-1)}},c6cd:function(o,a,e){var t=e("da84"),r=e("6374"),n="__core-js_shared__",i=t[n]||r(n,{});o.exports=i},c8ba:function(o,a){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch{typeof window=="object"&&(e=window)}o.exports=e},ca84:function(o,a,e){var t=e("e330"),r=e("1a2d"),n=e("fc6a"),i=e("4d64").indexOf,c=e("d012"),s=t([].push);o.exports=function(f,u){var p,l=n(f),h=0,m=[];for(p in l)!r(c,p)&&r(l,p)&&s(m,p);for(;u.length>h;)r(l,p=u[h++])&&(~i(m,p)||s(m,p));return m}},cb2d:function(o,a,e){var t=e("1626"),r=e("9112"),n=e("13d2"),i=e("6374");o.exports=function(c,s,f,u){u||(u={});var p=u.enumerable,l=u.name!==void 0?u.name:s;return t(f)&&n(f,l,u),u.global?p?c[s]=f:i(s,f):(u.unsafe?c[s]&&(p=!0):delete c[s],p?c[s]=f:r(c,s,f)),c}},cc12:function(o,a,e){var t=e("da84"),r=e("861d"),n=t.document,i=r(n)&&r(n.createElement);o.exports=function(c){return i?n.createElement(c):{}}},d012:function(o,a){o.exports={}},d039:function(o,a){o.exports=function(e){try{return!!e()}catch{return!0}}},d066:function(o,a,e){var t=e("da84"),r=e("1626"),n=function(i){return r(i)?i:void 0};o.exports=function(i,c){return arguments.length<2?n(t[i]):t[i]&&t[i][c]}},d1e7:function(o,a,e){var t={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,n=r&&!t.call({1:2},1);a.f=n?function(i){var c=r(this,i);return!!c&&c.enumerable}:t},d2bb:function(o,a,e){var t=e("e330"),r=e("825a"),n=e("3bbe");o.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var i,c=!1,s={};try{i=t(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),i(s,[]),c=s instanceof Array}catch{}return function(f,u){return r(f),n(u),c?i(f,u):f.__proto__=u,f}}():void 0)},d81d:function(o,a,e){var t=e("23e7"),r=e("b727").map,n=e("1dde"),i=n("map");t({target:"Array",proto:!0,forced:!i},{map:function(c){return r(this,c,arguments.length>1?arguments[1]:void 0)}})},d9b5:function(o,a,e){var t=e("da84"),r=e("d066"),n=e("1626"),i=e("3a9b"),c=e("fdbf"),s=t.Object;o.exports=c?function(f){return typeof f=="symbol"}:function(f){var u=r("Symbol");return n(u)&&i(u.prototype,s(f))}},da84:function(o,a,e){(function(t){var r=function(n){return n&&n.Math==Math&&n};o.exports=r(typeof globalThis=="object"&&globalThis)||r(typeof window=="object"&&window)||r(typeof self=="object"&&self)||r(typeof t=="object"&&t)||function(){return this}()||Function("return this")()}).call(this,e("c8ba"))},dc4a:function(o,a,e){var t=e("59ed");o.exports=function(r,n){var i=r[n];return i==null?void 0:t(i)}},e330:function(o,a,e){var t=e("40d5"),r=Function.prototype,n=r.bind,i=r.call,c=t&&n.bind(i,i);o.exports=t?function(s){return s&&c(s)}:function(s){return s&&function(){return i.apply(s,arguments)}}},e893:function(o,a,e){var t=e("1a2d"),r=e("56ef"),n=e("06cf"),i=e("9bf2");o.exports=function(c,s,f){for(var u=r(s),p=i.f,l=n.f,h=0;h<u.length;h++){var m=u[h];t(c,m)||f&&t(f,m)||p(c,m,l(s,m))}}},e8b5:function(o,a,e){var t=e("c6b6");o.exports=Array.isArray||function(r){return t(r)=="Array"}},f5df:function(o,a,e){var t=e("da84"),r=e("00ee"),n=e("1626"),i=e("c6b6"),c=e("b622"),s=c("toStringTag"),f=t.Object,u=i(function(){return arguments}())=="Arguments",p=function(l,h){try{return l[h]}catch{}};o.exports=r?i:function(l){var h,m,g;return l===void 0?"Undefined":l===null?"Null":typeof(m=p(h=f(l),s))=="string"?m:u?i(h):(g=i(h))=="Object"&&n(h.callee)?"Arguments":g}},f772:function(o,a,e){var t=e("5692"),r=e("90e3"),n=t("keys");o.exports=function(i){return n[i]||(n[i]=r(i))}},fb15:function(o,a,e){if(e.r(a),e.d(a,"install",function(){return g}),e.d(a,"Observer",function(){return h}),typeof window<"u"){var t=window.document.currentScript,r=e("8875");t=r(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:r});var n=t&&t.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);n&&(e.p=n[1])}e("d81d"),e("b0c0");var i=function(){var v=this,b=v.$createElement,x=v._self._c||b;return x("div",[v._t("default")],2)},c=[],s=(e("a9e3"),{name:"observer",data:function(){return{observer:null}},props:{root:{type:[HTMLElement,window],default:null},rootMargin:{type:[String,Number],default:"0px"},threshold:{type:[Array,Number],default:0}},methods:{unobserve:function(){this.observer.unobserve(this.$el)}},mounted:function(){var v=this,b={root:this.root,rootMargin:this.rootMargin,threshold:this.threshold};this.observer=new IntersectionObserver(function(x){v.$emit("on-change",x[0],v.unobserve)},b),this.observer.observe(this.$el)},beforeDestroy:function(){this.observer&&(this.unobserve(),this.observer=null)}}),f=s;function u(v,b,x,O,j,P,N,T){var w,S=typeof v=="function"?v.options:v;if(b&&(S.render=b,S.staticRenderFns=x,S._compiled=!0),O&&(S.functional=!0),P&&(S._scopeId="data-v-"+P),N?(w=function(E){E=E||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,E||typeof __VUE_SSR_CONTEXT__>"u"||(E=__VUE_SSR_CONTEXT__),j&&j.call(this,E),E&&E._registeredComponents&&E._registeredComponents.add(N)},S._ssrRegister=w):j&&(w=T?function(){j.call(this,(S.functional?this.parent:this).$root.$options.shadowRoot)}:j),w)if(S.functional){S._injectStyles=w;var A=S.render;S.render=function(E,k){return w.call(k),A(E,k)}}else{var I=S.beforeCreate;S.beforeCreate=I?[].concat(I,w):[w]}return{exports:v,options:S}}var p=u(f,i,c,!1,null,null,null),l=p.exports,h=l,m=[h],g=function(v){m.map(function(b){v.component(b.name,b)})};typeof window<"u"&&window.Vue&&g(window.Vue);var y=h;a.default=y},fc6a:function(o,a,e){var t=e("44ad"),r=e("1d80");o.exports=function(n){return t(r(n))}},fdbf:function(o,a,e){var t=e("4930");o.exports=t&&!Symbol.sham&&typeof Symbol.iterator=="symbol"}})})})(ne);const je=oe(ne.exports),Ne=ce({name:"ProjectView",components:{BaseButton:ae,Icon:ue,AppModal:ge,BaseTextInput:se,AppEmptyState:ye,Spinner:fe,Timeago:Te,Observer:je},data:()=>({showProjectModal:!1,addProject:{name:"",description:"",url:"",image:"",github:"",technologies:""}}),mounted(){this.$watch(()=>this.$route.params,()=>{this.fetchNoteRequests()},{immediate:!0})},computed:{...de(re,["noteEntries","noOfRows","pageIndex","isLoading"])},methods:{...pe(re,["fetchAllNotes"]),async fetchNoteRequests(){await this.fetchAllNotes()},handleIntersection(){alert("fool"),this.fetchNoteRequests()},editNote(d){this.$router.push({name:"edit-note",params:{noteId:String(d)}})}}});const Ie=d=>(me("data-v-258c91ac"),d=d(),be(),d),Ae={key:0,class:"fetching__data"},Me=Ie(()=>F("p",null,"fetching todo",-1)),Ce=["onClick"],$e={class:"note__entry__header"},Pe={class:"trim__text"},ke={class:"note__entry__header__date"},De={class:"note__entry__content"},Fe={class:"trim__text"};function Re(d,_,o,a,e,t){var c,s;const r=K("Spinner"),n=K("AppEmptyState"),i=K("AppNetworkError");return R(),V(te,null,[d.isLoading?(R(),V("div",Ae,[he(r),Me])):Z("",!0),((c=d.noteEntries)==null?void 0:c.length)===0?(R(),ee(n,{key:1})):Z("",!0),!d.isLoading&&((s=d.noteEntries)==null?void 0:s.length)===0?(R(),ee(i,{key:2})):Z("",!0),F("div",null,[(R(!0),V(te,null,ve(d.noteEntries,f=>(R(),V("div",{class:"note__entry",key:f.id.toString(),onClick:u=>d.editNote(f.id.toString())},[F("div",$e,[F("h3",Pe,J(f.title),1),F("p",ke,J(new Date(f.dateAdded.toString()).toLocaleDateString(void 0,{weekday:"short",year:"numeric",month:"short",day:"numeric"})),1)]),F("div",De,[F("p",Fe,J(f.content),1)])],8,Ce))),128))])],64)}const ze=le(Ne,[["render",Re],["__scopeId","data-v-258c91ac"]]);export{ze as default};