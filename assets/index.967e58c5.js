var _=(y,u,n)=>new Promise((a,r)=>{var c=s=>{try{o(n.next(s))}catch(i){r(i)}},p=s=>{try{o(n.throw(s))}catch(i){r(i)}},o=s=>s.done?a(s.value):Promise.resolve(s.value).then(c,p);o((n=n.apply(y,u)).next())});import{B as E,r as k,$ as B,D as w,a2 as R,a6 as j,J as l,u as t,K as A,w as g,ae as f,A as V,bd as C}from"./vendor.bf608252.js";/* empty css               */import{P as T}from"./index.fdd8265c.js";import{u as m,D as v}from"./index.c28f0b48.js";import{G as q,V as z,D as N}from"./siteSetting.ba391e39.js";import{a9 as P}from"./index.543cbf26.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.b43ee9be.js";const U=()=>P.get({url:"/openapi/version"}),I={class:"flex justify-between items-center"},L={class:"flex-1"},O=["href"],S=f(" \u662F\u57FA\u4E8E "),G=["href"],H=f("\u89E3\u51B3\u65B9\u6848\u5BF9\u63A5"),J=["href"],K=f("\u7684\u4E00\u5957\u540E\u53F0\u7CFB\u7EDF\u3002 "),ne=E({setup(y){const{pkg:u,lastBuildTime:n}={pkg:{dependencies:{"@ant-design/colors":"^6.0.0","@ant-design/icons-vue":"^6.0.1","@iconify/iconify":"^2.1.1","@logicflow/core":"^1.0.7","@logicflow/extension":"^1.0.7","@vue/runtime-core":"^3.2.29","@vue/shared":"^3.2.29","@vueuse/core":"^7.5.4","@vueuse/shared":"^7.5.4","@zxcvbn-ts/core":"^1.2.0","ant-design-vue":"3.0.0-beta.8",axios:"^0.25.0",codemirror:"^5.65.1",cropperjs:"^1.5.12","crypto-js":"^4.1.1",dayjs:"^1.10.7",echarts:"^5.2.2","intro.js":"^4.3.0","lodash-es":"^4.17.21",mockjs:"^1.1.0",nprogress:"^0.2.0","path-to-regexp":"^6.2.0",pinia:"2.0.9","print-js":"^1.6.0",qrcode:"^1.5.0",qs:"^6.10.3","resize-observer-polyfill":"^1.5.1",showdown:"^1.9.1",sortablejs:"^1.14.0",tinymce:"^5.10.2",vditor:"^3.8.11",vue:"^3.2.29","vue-i18n":"^9.1.9","vue-json-pretty":"^1.8.2","vue-router":"^4.0.12","vue-types":"^4.1.1",xlsx:"^0.17.5"},devDependencies:{"@commitlint/cli":"^16.1.0","@commitlint/config-conventional":"^16.0.0","@iconify/json":"^2.0.28","@purge-icons/generated":"^0.7.0","@types/codemirror":"^5.60.5","@types/crypto-js":"^4.1.0","@types/fs-extra":"^9.0.13","@types/inquirer":"^8.1.3","@types/intro.js":"^3.0.2","@types/jest":"^27.4.0","@types/lodash-es":"^4.17.5","@types/mockjs":"^1.0.6","@types/node":"^17.0.10","@types/nprogress":"^0.2.0","@types/qrcode":"^1.4.2","@types/qs":"^6.9.7","@types/showdown":"^1.9.4","@types/sortablejs":"^1.10.7","@typescript-eslint/eslint-plugin":"^5.10.0","@typescript-eslint/parser":"^5.10.0","@vitejs/plugin-legacy":"^1.6.4","@vitejs/plugin-vue":"^2.1.0","@vitejs/plugin-vue-jsx":"^1.3.3","@vue/compiler-sfc":"3.2.29","@vue/test-utils":"^2.0.0-rc.18",autoprefixer:"^10.4.2",commitizen:"^4.2.4","conventional-changelog-cli":"^2.2.2","cross-env":"^7.0.3",dotenv:"^14.2.0",eslint:"^8.7.0","eslint-config-prettier":"^8.3.0","eslint-define-config":"^1.2.3","eslint-plugin-jest":"^25.7.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^8.3.0",esno:"^0.14.0","fs-extra":"^10.0.0",husky:"^7.0.4",inquirer:"^8.2.0",jest:"^27.4.7",less:"^4.1.2","lint-staged":"12.3.1","npm-run-all":"^4.1.5",postcss:"^8.4.5","postcss-html":"^1.3.0","postcss-less":"^6.0.0",prettier:"^2.5.1",rimraf:"^3.0.2","rollup-plugin-visualizer":"^5.5.4",stylelint:"^14.3.0","stylelint-config-html":"^1.0.0","stylelint-config-prettier":"^9.0.3","stylelint-config-recommended":"^6.0.0","stylelint-config-standard":"^24.0.0","stylelint-order":"^5.0.0","ts-jest":"^27.1.3","ts-node":"^10.4.0",typescript:"^4.5.5",vite:"^2.8.0-beta.3","vite-plugin-compression":"^0.4.0","vite-plugin-html":"^2.1.2","vite-plugin-imagemin":"^0.5.2","vite-plugin-mkcert":"^1.5.2","vite-plugin-mock":"^2.9.6","vite-plugin-purge-icons":"^0.7.0","vite-plugin-pwa":"^0.11.13","vite-plugin-style-import":"^1.4.1","vite-plugin-svg-icons":"^1.1.0","vite-plugin-theme":"^0.8.1","vite-plugin-vue-setup-extend":"^0.3.0","vite-plugin-windicss":"^1.6.3","vue-eslint-parser":"^8.2.0","vue-tsc":"^0.31.1"},name:"kk-admin-open",version:"2.8.0"},lastBuildTime:"2023-01-14 20:32:02"},{dependencies:a,devDependencies:r,name:c,version:p}=u,o=[],s=[],i=e=>h=>V(C,{color:e},()=>h),b=[{label:"\u524D\u7AEF\u7248\u672C",field:"version",render:i("blue")},{label:"\u6700\u540E\u7F16\u8BD1\u65F6\u95F4",field:"lastBuildTime",render:i("blue")},{label:"API\u7248\u672C",field:"apiVersion",render:i("red")},{label:"API\u66F4\u65B0\u65F6\u95F4",field:"apiDate",render:i("red")}],d=k({version:p,lastBuildTime:n,apiVersion:"loading...",apiDate:"loading..."});Object.keys(a).forEach(e=>{o.push({field:e,label:e})}),Object.keys(r).forEach(e=>{s.push({field:e,label:e})});const[D]=m({title:"\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56",data:a,schema:o,column:3}),[F]=m({title:"\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56",data:r,schema:s,column:3}),[x]=m({title:"\u9879\u76EE\u4FE1\u606F",data:d,schema:b,column:2});return B(()=>_(this,null,function*(){const e=yield U();d.value.apiDate=e.date,d.value.apiVersion=e.version})),(e,h)=>(w(),R(t(T),{title:"\u5173\u4E8E"},{headerContent:j(()=>[l("div",I,[l("span",L,[l("a",{href:t(q),target:"_blank"},A(t(c)),9,O),S,l("a",{href:t(z),target:"_blank"},"vben",8,G),H,l("a",{href:t(N),target:"_blank"},"kk-api",8,J),K])])]),default:j(()=>[g(t(v),{onRegister:t(x),class:"enter-y"},null,8,["onRegister"]),g(t(v),{onRegister:t(D),class:"my-4 enter-y"},null,8,["onRegister"]),g(t(v),{onRegister:t(F),class:"enter-y"},null,8,["onRegister"])]),_:1}))}});export{ne as default};
