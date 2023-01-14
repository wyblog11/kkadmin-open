var k=Object.defineProperty,R=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var E=(e,u,t)=>u in e?k(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t,B=(e,u)=>{for(var t in u||(u={}))L.call(u,t)&&E(e,t,u[t]);if(D)for(var t of D(u))M.call(u,t)&&E(e,t,u[t]);return e},I=(e,u)=>R(e,T(u));var g=(e,u,t)=>new Promise((o,l)=>{var h=r=>{try{s(t.next(r))}catch(m){l(m)}},i=r=>{try{s(t.throw(r))}catch(m){l(m)}},s=r=>r.done?o(r.value):Promise.resolve(r.value).then(h,i);s((t=t.apply(e,u)).next())});import{B as V,u as j}from"./useForm.e68d1deb.js";import{V as W,A as b,c1 as O,bd as _,B as $,r as A,u as S,j as U,a1 as P,D as G,a2 as N,a6 as z,w as H,a5 as J}from"./vendor.bf608252.js";/* empty css               *//* empty css               */import{T as K}from"./index.5e8233ff.js";import{c as C,e as Q,f as X}from"./friend.519df00b.js";import{f as Y,G as Z,_ as ee}from"./index.543cbf26.js";import{B as te,a as ue}from"./index.6ac6a85b.js";const{userInfo:p}=Y(),{permCodeList:w}=Z(),oe="",he=[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u5934\u50CF",dataIndex:"avatar",width:100,customRender:({record:e})=>b(O,{src:e.avatar})},{title:"\u94FE\u63A5",dataIndex:"link",customRender:({record:e})=>b("a",{href:e.link,target:"target"},e.from[0].userName)},{title:"\u6807\u7B7E",dataIndex:"tag",width:100,customRender:({record:e})=>{const u=e.tag;if(u.length>=0){const t=u[0].bgColor,o=u[0].name;return b(_,{color:t},()=>o)}else return""}},{title:"\u63CF\u8FF0",dataIndex:"description",width:150},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:e})=>{const u=e.status;let t="",o="";return u==="0"?(t="green",o="\u542F\u7528"):u==="1"?(t="yellow",o="\u5F85\u5BA1\u6838"):u==="2"&&(t="red",o="\u5C4F\u853D"),b(_,{color:t},()=>o)}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180,customRender:({record:e})=>b(K,{value:e.createTime,mode:"date"})}],Be=[{field:"name",label:"\u53CB\u94FE\u540D\u79F0",component:"Input",colProps:{span:6},labelWidth:"80px"},{field:"link",label:"\u94FE\u63A5",component:"Input",colProps:{span:6},labelWidth:"50px"},{field:"from",label:"\u6765\u81EA",component:"Input",colProps:{span:6},labelWidth:"50px"},{field:"to",label:"\u53BB\u5F80",component:"Input",colProps:{span:6},labelWidth:"50px",defaultValue:p==null?void 0:p._id,ifShow:w.includes("update:allFriendList")||w.includes("add:allFriendList")},{field:"tag",label:"\u6807\u7B7E",component:"ApiSelect",componentProps:{api:C,labelField:"name",valueField:"_id",params:{user:oe}},labelWidth:"50px",colProps:{span:6}},{field:"status",label:"\u72B6\u6001",component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u5F85\u5BA1\u6838",value:"1"},{label:"\u5C4F\u853D",value:"2"}]},colProps:{span:6},labelWidth:"50px"}],ae=[{field:"name",label:"\u53CB\u94FE\u540D\u79F0",component:"Input",required:!0},{field:"avatar",label:"\u5934\u50CF",component:"Input",required:!0},{field:"description",label:"\u63CF\u8FF0",component:"Input",required:!0},{field:"link",label:"\u5730\u5740",component:"Input",required:!0},{field:"tag",label:"\u6807\u7B7E",component:"Select",helpMessage:"\u8F93\u5165\u53BB\u5F80\u540E\u53EF\u663E\u793A\u5BF9\u65B9\u7684\u6807\u7B7E"},{field:"status",label:"\u72B6\u6001",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u5DF2\u542F\u7528",value:"0"},{label:"\u5F85\u5BA1\u6838",value:"1"},{label:"\u5DF2\u5C4F\u853D",value:"2"}]}},{field:"from",label:"\u6765\u81EA",component:"Input",required:!0,defaultValue:p==null?void 0:p._id,ifShow:w.includes("update:allFriendList")||w.includes("add:allFriendList")},{field:"to",label:"\u53BB\u5F80",component:"Input",required:!0,componentProps:({formActionType:e})=>({onChange:W(u=>g(void 0,null,function*(){const o=(yield C({userId:u.target.value})).map(l=>({label:l.name,value:l._id}));e.updateSchema({field:"tag",componentProps:{options:o}})}),500)})},{field:"theme.borderStyle",label:"\u8FB9\u6846\u6837\u5F0F",component:"Input",required:!1},{field:"theme.titleColor",label:"\u6587\u5B57\u989C\u8272",component:"Input",required:!1},{field:"theme.descriptionColor",label:"\u63CF\u8FF0\u989C\u8272",component:"Input",required:!1},{field:"theme.boderAnimation",label:"\u8FB9\u6846\u52A8\u753B",component:"Input",required:!1},{field:"theme.avatarAnimation",label:"\u5934\u50CF\u52A8\u753B",component:"Input",required:!1},{field:"theme.variable",label:"\u5176\u4ED6\u53D8\u91CF",helpMessage:"\u4F8B\u5982 primary-color:#000;primary-two:2;",component:"InputTextArea",required:!1},{field:"theme.cardStyle",label:"\u5361\u7247\u6837\u5F0F",component:"Input",required:!1,helpMessage:"\u76EE\u524D\u53EA\u652F\u6301card\u548Citem\u54E6"},{field:"theme.screenshot",label:"\u5C4F\u5E55\u622A\u56FE",component:"Input",required:!1}],re=$({name:"MenuDrawer",components:{BasicDrawer:te,BasicForm:V},emits:["success","register"],setup(e,{emit:u}){const t=A(!0),o=A(null),[l,{resetFields:h,setFieldsValue:i,validate:s,updateSchema:r}]=j({labelWidth:100,schemas:ae,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[m,{setDrawerProps:v,closeDrawer:x}]=ue(a=>g(this,null,function*(){if(h(),v({confirmLoading:!1}),t.value=!!(a==null?void 0:a.isUpdate),t.value?o.value=a.record._id:o.value=null,S(t)){const d=a.record.theme;let f={};Object.keys(d).forEach(n=>{f["theme."+n]=d[n]}),C({userId:a.record.to[0]._id}).then(n=>{const c=n.map(F=>({label:F.name,value:F._id}));r({field:"tag",componentProps:{options:c}}),r({field:"to",dynamicDisabled:!0}),i(B(I(B({},a.record),{tag:a.record.tag[0]._id,from:a.record.from[0]._id,to:a.record.to[0]._id}),f))})}else i(B({},a.record))})),q=U(()=>S(t)?"\u7F16\u8F91\u53CB\u94FE":"\u6DFB\u52A0\u53CB\u94FE");function y(){return g(this,null,function*(){try{const a=yield s();v({confirmLoading:!0});const d=f=>{let n={_id:o.value,theme:{}};return Object.keys(f).forEach(c=>{const F=f[c];c.includes("theme")?n.theme[c.split(".")[1]]=F:n[c]=F}),n};o.value?yield Q(d(a)):(d(a),yield X(d(a))),x(),u("success")}finally{v({confirmLoading:!1})}})}return{registerDrawer:m,registerForm:l,getTitle:q,handleSubmit:y}}});function le(e,u,t,o,l,h){const i=P("BasicForm"),s=P("BasicDrawer");return G(),N(s,J(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:z(()=>[H(i,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var ne=ee(re,[["render",le]]),ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ne});export{ne as M,ge as a,he as c,Be as s};
