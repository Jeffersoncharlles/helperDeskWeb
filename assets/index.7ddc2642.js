var ee=Object.defineProperty,te=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var T=(t,s,o)=>s in t?ee(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,L=(t,s)=>{for(var o in s||(s={}))M.call(s,o)&&T(t,o,s[o]);if(O)for(var o of O(s))q.call(s,o)&&T(t,o,s[o]);return t},j=(t,s)=>te(t,ae(s));var J=(t,s)=>{var o={};for(var i in t)M.call(t,i)&&s.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&O)for(var i of O(t))s.indexOf(i)<0&&q.call(t,i)&&(o[i]=t[i]);return o};import{f as y,r as l,j as e,t as b,a as r,L as E,F as ne,b as Q,c as X,d as U,e as B,g as W,h as oe,i as re,k as se,l as ce,m as G,R as K,n as ie,S as le,B as de,T as ue,o as me,p as he}from"./vendor.db50ae85.js";const pe=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function o(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=o(a);fetch(a.href,c)}};pe();const fe={apiKey:"AIzaSyAL0i4LyBeU1Lp7b655w7HpsadCnfWITtU",authDomain:"helperdesk-59688.firebaseapp.com",projectId:"helperdesk-59688",storageBucket:"helperdesk-59688.appspot.com",messagingSenderId:"791202362469",appId:"1:791202362469:web:a7c1bcaf339a16436e028c",measurementId:"G-EM1TN94H19"};y.apps.length||y.initializeApp(fe);const x={position:"top-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark"},Y=l.exports.createContext({}),_e=({children:t})=>{const[s,o]=l.exports.useState({}),[i,a]=l.exports.useState(!1),[c,p]=l.exports.useState(!0);l.exports.useEffect(()=>{m()},[]);const m=()=>{const v=localStorage.getItem("@deskSystem");v&&(o(JSON.parse(v)),p(!1)),p(!1)},C=async({email:v,password:u,name:_})=>{a(!0),await y.auth().createUserWithEmailAndPassword(v,u).then(async({user:n})=>{let h=n==null?void 0:n.uid;await y.firestore().collection("users").doc(h).set({name:_,avatarUrl:null}).then(()=>{let d={uid:n==null?void 0:n.uid,name:_,email:n==null?void 0:n.email,avatarUrl:null};o(d),f(d),a(!1),b.success("Bem vindo a plataforma!",x)})}).catch(n=>{console.log(n),b.error("Ops algo deu errado!",x),a(!1)})},g=async(v,u)=>{a(!0),await y.auth().signInWithEmailAndPassword(v,u).then(async({user:_})=>{var w,H;let n=_==null?void 0:_.uid;const h=await y.firestore().collection("users").doc(n).get();let d={uid:_==null?void 0:_.uid,name:(w=h.data())==null?void 0:w.name,email:_==null?void 0:_.email,avatarUrl:(H=h.data())==null?void 0:H.avatarUrl};o(d),f(d),a(!1),b.success("Bem vindo de volta!",x)}).catch(_=>{console.log(_),b.error("Ops algo deu errado!",x),a(!1)})},f=async v=>{localStorage.setItem("@deskSystem",JSON.stringify(v))},N=async()=>{await y.auth().signOut(),localStorage.removeItem("@deskSystem"),o({})};return e(Y.Provider,{value:{signed:!!s.email,user:s,loading:c,isAuth:i,SignUp:C,signOut:N,SignIn:g,setUser:o,storageSave:f},children:t})},P=()=>l.exports.useContext(Y);//!!user converte para true ou false
const ge="_container_f7mo8_1";var ve={container:ge},Z="/helperDeskWeb/assets/avatar.9a7b892a.png";const D=()=>{const{user:t}=P();return r("header",{className:ve.container,children:[e("picture",{children:e("img",{src:t.avatarUrl===null?Z:t.avatarUrl,alt:"Foto Avatar"})}),r(E,{to:"/dashboard",children:[e(ne,{size:24,color:"#fff"}),"Chamados"]}),r(E,{to:"/customers",children:[e(Q,{size:24,color:"#fff"}),"Clientes"]}),r(E,{to:"/profile",children:[e(X,{size:24,color:"#fff"}),"Configura\xE7\xF5es"]})]})},ye="_container_1jdyo_1";var be={container:ye};const z=({children:t,name:s})=>r("section",{className:be.container,children:[t,e("span",{children:s})]}),Se="_content_o1aos_75",Ce="_content_form_o1aos_83",xe="_container_o1aos_115",Ne="_status_o1aos_136";var I={content:Se,content_form:Ce,container:xe,status:Ne};const we=()=>{const{user:t}=P(),[s,o]=l.exports.useState([]),[i,a]=l.exports.useState(!0),[c,p]=l.exports.useState(0),[m,C]=l.exports.useState("Suporte"),[g,f]=l.exports.useState("Aberto"),[N,v]=l.exports.useState("");l.exports.useEffect(()=>{u()},[]);const u=async()=>{await y.firestore().collection("customers").get().then(n=>{let h=[];if(n.forEach(d=>{h.push({id:d.id,nameFantasy:d.data().nameFantasy})}),h.length===0){o([{id:"1",nameFantasy:"",address:"",cnpj:""}]),a(!1);return}o(h),a(!1)}).catch(n=>{console.log("deu erro"),a(!1),o([{id:"1",nameFantasy:"",address:"",cnpj:""}])})},_=async n=>{n.preventDefault(),await y.firestore().collection("calls").add({created_at:new Date,client:s[c].nameFantasy,client_id:s[c].id,topic:m,status:g,subject:N,user_id:t.uid}).then(()=>{b.success("Chamado criado com sucesso!!"),v(""),p(0)}).catch(h=>{b.error("ocorreu um erro ao registar")})};return r(U,{children:[e(D,{}),r("main",{className:I.container,children:[e(z,{name:"Novo chamado",children:e(B,{size:24})}),e("section",{className:`${I.content}`,children:r("form",{className:`${I.content_form}`,onSubmit:_,children:[e("label",{htmlFor:"Cliente",children:"Cliente"}),i?e("input",{type:"text",disabled:!0,value:"carregando clientes..."}):e("select",{value:c,onChange:n=>p(Number(n.target.value)),children:s.map((n,h)=>e("option",{value:h,children:n.nameFantasy},n.id))}),e("label",{htmlFor:"Assunto",children:"Assunto"}),r("select",{value:m,onChange:n=>C(n.target.value),children:[e("option",{value:"Suporte",children:"Suporte"}),e("option",{value:"Visita T\xE9cnica",children:"Visita T\xE9cnica"}),e("option",{value:"Financeiro",children:"Financeiro"})]}),e("label",{htmlFor:"Status",children:"Status"}),r("div",{className:I.status,children:[e("input",{type:"radio",name:"radio",value:"Aberto",onChange:n=>f(n.target.value),checked:g==="Aberto"}),e("span",{children:"Em Aberto"}),e("input",{type:"radio",name:"radio",value:"Progresso",onChange:n=>f(n.target.value),checked:g==="Progresso"}),e("span",{children:"Em Progresso"}),e("input",{type:"radio",name:"radio",value:"Atendido",onChange:n=>f(n.target.value),checked:g==="Atendido"}),e("span",{children:"Finalizado"})]}),e("br",{}),e("label",{htmlFor:"Complemento",children:"Complemento"}),e("textarea",{placeholder:"Descreva seu problema (opcional).",value:N,onChange:n=>v(n.target.value)}),e("button",{type:"submit",children:"Registrar"})]})})]})]})},Fe="_content_1lfm9_75",$e="_content_form_1lfm9_83",Ee="_container_1lfm9_115";var R={content:Fe,content_form:$e,container:Ee};const ke=t=>t.replace(/\D+/g,"").replace(/(\d{2})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1/$2").replace(/(\d{4})(\d)/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1"),Ae=()=>{const[t,s]=l.exports.useState(""),[o,i]=l.exports.useState(""),[a,c]=l.exports.useState("");document.title="Customers || HelperDesk";const p=async m=>{m.preventDefault(),t!==""&&o!==""&&a!==""?await y.firestore().collection("customers").add({nameFantasy:t,cnpj:o,address:a}).then(()=>{s(""),i(""),c(""),b.success("Empresa Cadastrada com sucesso!",x)}).catch(C=>{b.error("Ocorreu um erro tenta novamente mais tarde",x)}):b.error("Preencha todos os campos!",x)};return r(U,{children:[e(D,{}),r("main",{className:R.container,children:[e(z,{name:"Clientes",children:e(Q,{size:24})}),e("section",{className:R.content,children:r("form",{className:`${R.content_form} ${R.customers}`,onSubmit:p,children:[e("label",{htmlFor:"Nome fantasia",children:"Nome Fantasia"}),e("input",{type:"text",value:t,onChange:m=>s(m.target.value)}),e("label",{htmlFor:"CNPJ",children:"CNPJ"}),e("input",{placeholder:"00.000.000/0000-00",type:"text",value:o,onChange:m=>i(ke(m.target.value))}),e("label",{htmlFor:"Endere\xE7o",children:"Endere\xE7o"}),e("input",{type:"text",value:a,onChange:m=>c(m.target.value)}),e("button",{type:"submit",children:"Cadastrar"})]})})]})]})},Ue="_content_1wfns_75",Pe="_content_form_1wfns_83",De="_container_1wfns_115",ze="_dashboard_1wfns_125",Oe="_more_1wfns_137",Le="_action_1wfns_198",Ie="_badge_1wfns_208";var S={content:Ue,content_form:Pe,container:De,dashboard:ze,more:Oe,new:"_new_1wfns_148",action:Le,badge:Ie};const Re=t=>new Date(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}),V=y.firestore().collection("calls").orderBy("created_at","desc"),je=()=>{const[t,s]=l.exports.useState([]),[o,i]=l.exports.useState(!0),[a,c]=l.exports.useState(!1),[p,m]=l.exports.useState(!1),[C,g]=l.exports.useState();document.title="Dashboard || HelperDesk",l.exports.useEffect(()=>(f(),()=>{}),[]);const f=async()=>{await V.limit(5).get().then(u=>{N(u)}).catch(u=>{console.log(u),b.error("Ocorreu um erro ao carregar os chamados"),c(!1)}),i(!1)},N=async u=>{if(u.size===0)m(!0);else{let n=[];u.forEach(d=>{n.push({id:d.id,topic:d.data().topic,subject:d.data().subject,client:d.data().client,client_id:d.data().client_id,created_at:d.data().created_at,status:d.data().status,created_formatted:Re(d.data().created_at.seconds*1e3+d.data().created_at.nanoseconds/1e6)})});const h=u.docs[u.docs.length-1];s(d=>[...d,...n]),g(h)}c(!1)},v=async()=>{c(!0),await V.startAfter(C).limit(5).get().then(u=>{N(u)}).catch()};return o?r(U,{children:[e(D,{}),r("main",{className:S.container,children:[e(z,{name:"Atendimentos",children:e(W,{size:24})}),e("section",{className:`${S.content} ${S.dashboard}`,children:e("span",{children:"Buscando Chamados"})})]})]}):r(U,{children:[e(D,{}),r("main",{className:S.container,children:[e(z,{name:"Atendimentos",children:e(W,{size:24})}),t.length===0?r("section",{className:`${S.content} ${S.dashboard}`,children:[e("span",{children:"Nenhum Chamado Registrado..."}),r(E,{to:"/new",className:S.new,children:[e(B,{size:24}),"Novo chamado"]})]}):r(U,{children:[r(E,{to:"/new",className:S.new,children:[e(B,{size:24}),"Novo chamado"]}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{scope:"col",children:"Cliente"}),e("th",{scope:"col",children:"Assunto"}),e("th",{scope:"col",children:"Status"}),e("th",{scope:"col",children:"Criado em"}),e("th",{children:"#"})]})}),e("tbody",{children:t.map((u,_)=>r("tr",{children:[e("td",{"data-label":"Cliente",children:u.client}),e("td",{"data-label":"Assunto",children:u.topic}),e("td",{"data-label":"Status",children:e("span",{className:S.badge,style:{backgroundColor:u.status==="Aberto"?"#5cb85c":"#999"},children:u.status})}),e("td",{"data-label":"Cadastrado",children:u.created_formatted}),r("td",{"data-label":"#",children:[e("button",{className:S.action,style:{backgroundColor:"#3583f6"},onClick:()=>{},children:e(oe,{color:"#fff",size:16})}),e("button",{className:S.action,style:{backgroundColor:"#f6a935"},onClick:()=>{},children:e(re,{color:"#fff",size:16})})]})]},u.id))})]}),a&&e("h3",{style:{marginTop:15},children:"Buscando dados..."}),!a&&!p&&e("button",{className:S.more,onClick:v,children:"Buscar Mais"})]})]})]})},Be="_container_gkq9f_1",He="_content_gkq9f_11",Te="_content_form_gkq9f_19",Me="_content_form_avatar_gkq9f_23",qe="_content_logout_gkq9f_76";var k={container:Be,content:He,content_form:Te,content_form_avatar:Me,content_logout:qe};const Je=()=>{const{user:t,signOut:s,setUser:o,storageSave:i}=P(),[a,c]=l.exports.useState(t&&t.name),[p,m]=l.exports.useState(t&&t.email),[C,g]=l.exports.useState(t&&t.avatarUrl),[f,N]=l.exports.useState(null);document.title="Profile || HelperDesk";const v=async n=>{var h,d;if((h=n.target.files)==null?void 0:h[0]){const w=(d=n.target.files)==null?void 0:d[0];if(w.type==="image/jpeg"||w.type==="image/png")N(w),g(URL.createObjectURL(n.target.files[0]));else return b.warning("Envie imagem do tipo PNG ou JPEG",x),N(null),null}},u=async()=>{const n=t.uid;await y.storage().ref(`images/${n}/${f==null?void 0:f.name}`).put(f).then(async()=>{await y.storage().ref(`images/${n}`).child(f==null?void 0:f.name).getDownloadURL().then(async h=>{let d=h;await y.firestore().collection("users").doc(t.uid).update({avatarUrl:d,name:a}).then(()=>{let w=j(L({},t),{name:a,avatarUrl:d});o(w),i(w),b.success("Foto Salva com Sucesso",x)})})})},_=async n=>{n.preventDefault(),f===null&&a!==""?await y.firestore().collection("users").doc(t.uid).update({name:a}).then(()=>{let h=j(L({},t),{name:a});o(h),i(h),b.success("Nome alterado com sucesso!",x)}).catch(h=>{b.error("Ocorreu um erro!tente mais tarde!",x)}):a!==""&&f!==null&&u()};return r(U,{children:[e(D,{}),e("main",{className:k.container,children:r("section",{children:[e(z,{name:"Meu perfil",children:e(X,{size:24})}),e("div",{className:k.content,children:r("form",{className:k.content_form,onSubmit:_,children:[r("label",{htmlFor:"upload avatar",className:k.content_form_avatar,children:[e("span",{children:e(se,{color:"#FFF",size:25})}),e("input",{type:"file",accept:"image/*",onChange:v}),C===null?e("img",{src:Z,width:"250",height:"250",alt:"Foto de perfil do usu\xE1rio"}):e("img",{src:C,width:"250",height:"250",alt:"Foto de perfil do usu\xE1rio"})]}),e("label",{htmlFor:"Nome",children:"Nome"}),e("input",{type:"text",value:a,onChange:n=>c(n.target.value)}),e("label",{htmlFor:"Email",children:"Email"}),e("input",{type:"email",value:String(p),disabled:!0}),e("button",{type:"submit",children:"Salvar"})]})}),e("div",{className:k.content,children:e("button",{className:k.content_logout,onClick:()=>s(),children:"Sair"})})]})})]})},We="_container_tzf5t_1",Ge="_container_left_tzf5t_10",Ke="_container_left_animate_tzf5t_21",Ve="_container_right_tzf5t_24",Qe="_container_right_card_tzf5t_31",Xe="_card_textfield_tzf5t_48";var $={container:We,container_left:Ge,container_left_animate:Ke,container_right:Ve,container_right_card:Qe,card_textfield:Xe};ce().shape({email:G().email().required(),password:G()});const Ye=()=>{const{SignIn:t,isAuth:s}=P(),[o,i]=l.exports.useState(""),[a,c]=l.exports.useState("");document.title="Signin || HelperDesk";const p=m=>{m.preventDefault(),o!==""&&a!==""&&t(o,a)};return r("main",{className:$.container,children:[r("section",{className:$.container_left,children:[r("h1",{children:["HelperDesk ",e("br",{})," "]}),e("div",{className:$.container_left_animate})]}),e("section",{className:$.container_right,children:r("form",{className:$.container_right_card,onSubmit:p,children:[r("div",{className:$.card_textfield,children:[e("label",{htmlFor:"email",children:"Email"}),e("input",{type:"email",placeholder:"email@email.com",value:o,onChange:m=>i(m.target.value)})]}),r("div",{className:$.card_textfield,children:[e("label",{htmlFor:"password",children:"Password"}),e("input",{type:"password",placeholder:"******",value:a,onChange:m=>c(m.target.value)})]}),e("button",{type:"submit",children:s?"Carregando..":"Acessar"}),e(E,{to:"/register",children:"Criar uma Conta"})]})})]})},Ze="_container_1gmfy_1",et="_container_left_1gmfy_10",tt="_container_left_animate_1gmfy_21",at="_container_right_1gmfy_24",nt="_container_right_card_1gmfy_31",ot="_card_textfield_1gmfy_48";var F={container:Ze,container_left:et,container_left_animate:tt,container_right:at,container_right_card:nt,card_textfield:ot};const rt=()=>{const{SignUp:t,isAuth:s}=P(),[o,i]=l.exports.useState(""),[a,c]=l.exports.useState(""),[p,m]=l.exports.useState("");document.title="Signin || HelperDesk";const C=g=>{g.preventDefault(),p!==""&&o!==""&&a!==""&&t({email:o,password:a,name:p})};return r("main",{className:F.container,children:[r("section",{className:F.container_left,children:[r("h1",{children:["Criar Cadastro ",e("br",{})," "]}),e("div",{className:F.container_left_animate})]}),e("section",{className:F.container_right,children:r("form",{className:F.container_right_card,onSubmit:C,children:[r("div",{className:F.card_textfield,children:[e("label",{htmlFor:"nome",children:"Nome"}),e("input",{type:"name",value:p,onChange:g=>m(g.target.value)})]}),r("div",{className:F.card_textfield,children:[e("label",{htmlFor:"email",children:"Email"}),e("input",{type:"email",value:o,onChange:g=>i(g.target.value)})]}),r("div",{className:F.card_textfield,children:[e("label",{htmlFor:"password",children:"Password"}),e("input",{type:"password",placeholder:"******",value:a,onChange:g=>c(g.target.value)})]}),e("button",{type:"submit",children:s?"Carregando..":"Cadastrar"}),e(E,{to:"/",children:"J\xE1 tem uma conta? Entre"})]})})]})},A=o=>{var i=o,{isPrivate:t}=i,s=J(i,["isPrivate"]);const{signed:a,loading:c}=P();return c?e("div",{}):!a&&t?e(K,{to:"/"}):a&&!t?e(K,{to:"/dashboard"}):e(ie,L({},s))},st=()=>r(le,{children:[e(A,{exact:!0,path:"/",component:Ye}),e(A,{exact:!0,path:"/register",component:rt}),e(A,{exact:!0,path:"/dashboard",component:je,isPrivate:!0}),e(A,{exact:!0,path:"/profile",component:Je,isPrivate:!0}),e(A,{exact:!0,path:"/customers",component:Ae,isPrivate:!0}),e(A,{exact:!0,path:"/new",component:we,isPrivate:!0})]});function ct(){return e(_e,{children:r(de,{children:[e(ue,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,pauseOnFocusLoss:!1,pauseOnHover:!1}),e(st,{})]})})}me.render(e(he.StrictMode,{children:e(ct,{})}),document.getElementById("root"));
