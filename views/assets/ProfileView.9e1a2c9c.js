import{U as b,K as k,o as B,c as L,j as N,v as C,e as t,V as q,m as U,x as M,W as j,X as E,w as T,d as $,I as z,B as F,a as x,S as K,u as H,s as J,z as P,_ as R,r as h,f as r,t as A,g as W,i as V,p as X,k as Y,Y as G}from"./index.f8e3d68e.js";var D={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return l=>["number","string","boolean"].indexOf(typeof l)!==-1||l==null},required:!1},modelValue:{validator:function(e){return l=>["number","string","boolean"].indexOf(typeof l)!==-1||l==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(e,l){const o=function(d,i,u){const{value:c,modelValue:s,falseValue:a,trueValue:n,disabled:g}=b(d),f=s&&s.value!==void 0?s:c,p=k(()=>f.value===n.value),v=m=>{i.emit("input",m),i.emit("update:modelValue",m),i.emit("change",m)},O=()=>{v(n.value)},I=()=>{v(a.value)};return[null,void 0,!1,0,"0","off"].indexOf(f.value)!==-1&&[a.value,n.value].indexOf(f.value)===-1&&I(),[!0,1,"1","on"].indexOf(f.value)!==-1&&[a.value,n.value].indexOf(f.value)===-1&&O(),{externalValue:f,checked:p,update:v,check:O,uncheck:I,handleInput:m=>{v(m.target.checked?n.value:a.value)},handleClick:()=>{g.value||(p.value?I():O())}}}(e,l),w=function(d,i,u){const{trueValue:c,falseValue:s,onLabel:a,offLabel:n}=b(d),g=u.checked,f=u.update;return{label:k(()=>{let p=g.value?a.value:n.value;return p||(p="&nbsp;"),p}),toggle:()=>{f(g.value?s.value:c.value)},on:()=>{f(c.value)},off:()=>{f(s.value)}}}(e,0,{checked:o.checked,update:o.update}),S=function(d,i,u){const c=b(d),s=c.disabled,a=u.checked,n=k(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...c.classes.value}));return{classList:k(()=>({container:n.value.container,toggle:[n.value.toggle,s.value?a.value?n.value.toggleOnDisabled:n.value.toggleOffDisabled:a.value?n.value.toggleOn:n.value.toggleOff],handle:[n.value.handle,s.value?a.value?n.value.handleOnDisabled:n.value.handleOffDisabled:a.value?n.value.handleOn:n.value.handleOff],label:n.value.label}))}}(e,0,{checked:o.checked}),_=function(d,i,u){const{disabled:c}=b(d),s=u.check,a=u.uncheck,n=u.checked;return{handleSpace:()=>{c.value||(n.value?a():s())}}}(e,0,{check:o.check,uncheck:o.uncheck,checked:o.checked});return{...o,...S,...w,..._}}};const Q=["tabindex","aria-checked","aria-describedby","aria-labelledby"],Z=["id","name","value","checked","disabled"],ee=["innerHTML"],le=["checked"];D.render=function(e,l,o,w,S,_){return B(),L("div",j({class:e.classList.container,tabindex:o.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":o.describedby,"aria-labelledby":o.labelledby,role:"switch"},o.aria,{onKeypress:l[1]||(l[1]=E(T((...d)=>e.handleSpace&&e.handleSpace(...d),["prevent"]),["space"]))}),[N(t("input",{type:"checkbox",id:o.id,name:o.name,value:o.trueValue,checked:e.checked,disabled:o.disabled},null,8,Z),[[C,!1]]),t("div",{class:q(e.classList.toggle),onClick:l[0]||(l[0]=(...d)=>e.handleClick&&e.handleClick(...d))},[t("span",{class:q(e.classList.handle)},null,2),U(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[t("span",{class:q(e.classList.label),innerHTML:e.label},null,10,ee)]),o.required?(B(),L("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,le)):M("v-if",!0)],2)],16,Q)},D.__file="src/Toggle.vue";const ae=$({name:"profile__pageView",components:{AppSwitch:D,Icon:z,BaseTextInput:F,BaseButton:x,Spinner:K},methods:{...H(P,["updateUserInformation"]),toggleTheme(){this.preferences.theme=this.preferences.theme=="darkMode"?"":"darkMode",document.documentElement.setAttribute("data-theme",this.preferences.theme),localStorage.setItem("theme",this.preferences.theme)},updateProfile(){this.updateUserInformation(this.profile),console.log("updated")}},computed:{...J(P,["userInformation","isLoading"]),fullname(){var e;return String((e=this.userInformation)==null?void 0:e.fullname)||"Jane Doe"},username(){var e;return String((e=this.userInformation)==null?void 0:e.username)||"username"},email(){var e;return String((e=this.userInformation)==null?void 0:e.email)||"jane@mailer.com"},disabledState(){return this.isLoading===!0},profile:()=>({fullname:"",username:"",email:"",theme:""})},data:()=>({networkError:!1,preferences:{darkMode:!0,theme:"",showNetworkError:!1,allowPushNotifications:!1,enable2FA:!0}})});const y=e=>(X("data-v-f0588ef8"),e=e(),Y(),e),ne={id:"profile__page"},te={id:"avatar"},oe=y(()=>t("img",{src:G,alt:"avatar"},null,-1)),se={id:"edit__button"},de={id:"user"},ie={id:"user__information"},re=y(()=>t("h3",null,"Account Information",-1)),ue={id:"preferences"},ce=y(()=>t("h3",null,"Preferences",-1)),fe=V(" dark mode "),pe=V(" network error message "),me=V(" allow push notifications "),he=V(" enable 2FA"),ge=y(()=>t("h3",null,"Security",-1));function ve(e,l,o,w,S,_){const d=h("Icon"),i=h("BaseTextInput"),u=h("Spinner"),c=h("BaseButton"),s=h("AppSwitch");return B(),L("div",ne,[t("div",te,[oe,t("button",se,[r(d,{icon:"mdi:pencil"})]),t("div",de,[t("h3",null,A(e.fullname),1),t("small",null,A(e.email),1)])]),t("section",ie,[re,t("form",{action:"",onSubmit:l[3]||(l[3]=T((...a)=>e.updateProfile&&e.updateProfile(...a),["prevent"]))},[r(i,{placeholder:"Jane Doe",label:"fullname",modelValue:e.fullname,"onUpdate:modelValue":l[0]||(l[0]=a=>e.fullname=a)},null,8,["modelValue"]),r(i,{placeholder:"jane@mailer.com",label:"email",type:"email",class:"field",modelValue:e.email,"onUpdate:modelValue":l[1]||(l[1]=a=>e.email=a)},null,8,["modelValue"]),r(i,{placeholder:"username",modelValue:e.username,"onUpdate:modelValue":l[2]||(l[2]=a=>e.username=a),label:"username",type:"text",class:"field"},null,8,["modelValue"]),r(c,{text:"",disabled:e.disabledState},{default:W(()=>[N(t("span",null,"Save Changes",512),[[C,!e.isLoading]]),N(r(u,{"animation-duration":1e3,size:30,color:"#ffffff"},null,512),[[C,e.isLoading]])]),_:1},8,["disabled"])],32)]),t("section",ue,[ce,t("div",null,[r(s,{modelValue:e.preferences.darkMode,"onUpdate:modelValue":l[4]||(l[4]=a=>e.preferences.darkMode=a),onClick:e.toggleTheme},null,8,["modelValue","onClick"]),fe]),t("div",null,[r(s,{modelValue:e.preferences.showNetworkError,"onUpdate:modelValue":l[5]||(l[5]=a=>e.preferences.showNetworkError=a)},null,8,["modelValue"]),pe]),t("div",null,[r(s,{modelValue:e.preferences.allowPushNotifications,"onUpdate:modelValue":l[6]||(l[6]=a=>e.preferences.allowPushNotifications=a)},null,8,["modelValue"]),me]),t("div",null,[r(s,{modelValue:e.preferences.enable2FA,"onUpdate:modelValue":l[7]||(l[7]=a=>e.preferences.enable2FA=a)},null,8,["modelValue"]),he])]),t("section",null,[ge,r(i,{placeholder:"new password",label:"New Password",type:"password",class:"field"}),r(i,{placeholder:"new password",label:"Confirm Password",type:"password",class:"field"})])])}const ke=R(ae,[["render",ve],["__scopeId","data-v-f0588ef8"]]);export{ke as default};