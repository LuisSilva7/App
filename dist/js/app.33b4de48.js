(function(){"use strict";var i={6614:function(i,e,t){var a=t(5130),s=t(6768);function n(i,e){const t=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.Wv)(t)}var o=t(1241);const c={},r=(0,o.A)(c,[["render",n]]);var l=r,d=t(1387),h=(t(4114),t(5002)),v=t(144);const u=i=>((0,s.Qi)("data-v-6bd0e55b"),i=i(),(0,s.jt)(),i),m={class:"login-page"},k=u((()=>(0,s.Lk)("h1",null,"GoHelp",-1)));var p={__name:"Login",setup(i){const e=(0,d.rd)();let t,a=(0,v.KR)(!1);const n=()=>{const i=new h.HF;(0,h.df)((0,h.xI)(),i).then((i=>{console.log(i.user),JSON.parse(localStorage.getItem("iniciatives")).some((e=>e.email===i.user.email))?e.push({name:"Iniciatives",params:{email:i.user.email}}):alert("O email inserido não se encontra associado a nenhuma iniciativa. Tente novamente!")})).catch((i=>{console.log("erro"),console.log(i)}))};return(0,s.sV)((()=>{t=(0,h.xI)(),(0,h.hg)(t,(i=>{i?a.value=!0:a=!1}))})),(i,e)=>((0,s.uX)(),(0,s.CE)("div",m,[(0,s.Lk)("div",{class:"login-box"},[k,(0,s.Lk)("button",{onClick:n,class:"google-button"},"Login com Google")])]))}};const f=(0,o.A)(p,[["__scopeId","data-v-6bd0e55b"]]);var g=f,L=t(4232);const I={class:"mini-container"},b={class:"container"},C={class:"scroll-container"};function A(i,e,t,a,n,o){const c=(0,s.g2)("TheHeader"),r=(0,s.g2)("Tittle"),l=(0,s.g2)("IniciativeFrame");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(c),(0,s.bF)(r,{tittle:n.tittle},null,8,["tittle"]),(0,s.Lk)("div",I,[(0,s.Lk)("h3",null,(0,L.v_)(n.iniciativesNumber),1)]),(0,s.Lk)("div",b,[(0,s.Lk)("div",C,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.iniciatives,(i=>((0,s.uX)(),(0,s.CE)("div",{key:i.id},[(0,s.bF)(l,{iniciative:i},null,8,["iniciative"])])))),128))])])],64)}var E=t.p+"img/logo-main-image.8e9f7627.png";const x=i=>((0,s.Qi)("data-v-3681cf4a"),i=i(),(0,s.jt)(),i),F={class:"header"},S=x((()=>(0,s.Lk)("div",{class:"left-content"},[(0,s.Lk)("img",{src:E,alt:"logo"}),(0,s.Lk)("h3",null,"GoHelp")],-1))),R=x((()=>(0,s.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-box-arrow-right",viewBox:"0 0 16 16"},[(0,s.Lk)("path",{"fill-rule":"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"}),(0,s.Lk)("path",{"fill-rule":"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"})],-1))),B=[R];var w={__name:"TheHeader",setup(i){const e=(0,d.rd)();let t,a=(0,v.KR)(!1);(0,v.KR)(!1);(0,s.sV)((()=>{t=(0,h.xI)(),(0,h.hg)(t,(i=>{JSON.parse(localStorage.getItem("iniciatives")).some((e=>e.email===i.email))?a.value=!0:a=!1}))}));const n=()=>{(0,h.CI)(t).then((()=>{e.push("/")}))};return(i,e)=>((0,s.uX)(),(0,s.CE)("header",F,[S,(0,s.Lk)("div",{class:"right-content"},[(0,s.Lk)("h5",{onClick:n,class:"sign-out-button"},B)])]))}};const y=(0,o.A)(w,[["__scopeId","data-v-3681cf4a"]]);var J=y;const T=i=>((0,s.Qi)("data-v-527ebcfc"),i=i(),(0,s.jt)(),i),O=T((()=>(0,s.Lk)("hr",null,null,-1)));function H(i,e,t,a,n,o){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("h1",null,(0,L.v_)(t.tittle),1),O],64)}var X={props:["tittle"]};const N=(0,o.A)(X,[["render",H],["__scopeId","data-v-527ebcfc"]]);var U=N,P="data:image/png;base64,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";const V={class:"quadrado"},K={class:"row row-cols-2"},G={class:"col-6"},Q={class:"conteudo-imagem"},q={key:0,src:P,height:"200px",width:"200px",alt:"Foto da Iniciativa"},M=["src"],W={class:"col-4",style:{width:"fit-content",height:"fit-content"}},z={class:"date"},j={id:"month"},_={id:"day"},Y={class:"informacoes"},D={class:"texto"},Z={id:"titulo"},$={id:"numero"},ii={id:"local"};function ei(i,e,t,a,n,o){return(0,s.uX)(),(0,s.CE)("div",V,[(0,s.Lk)("div",K,[(0,s.Lk)("div",G,[(0,s.Lk)("div",Q,[""===t.iniciative.photo?((0,s.uX)(),(0,s.CE)("img",q)):((0,s.uX)(),(0,s.CE)("img",{key:1,src:n.imageUrl,height:"80px",width:"80px",alt:"Foto da Iniciativa"},null,8,M))])]),(0,s.Lk)("div",W,[(0,s.Lk)("div",z,[(0,s.Lk)("h1",j,(0,L.v_)(n.month),1),(0,s.Lk)("h3",_,(0,L.v_)(n.day),1)])])]),(0,s.Lk)("div",Y,[(0,s.Lk)("div",D,[(0,s.Lk)("h5",Z,(0,L.v_)(t.iniciative.theme),1),(0,s.Lk)("p",$,"Nº minímo de participantes: "+(0,L.v_)(t.iniciative.minParticipants),1),(0,s.Lk)("p",ii,"Local: "+(0,L.v_)(t.iniciative.local),1)]),(0,s.Lk)("button",{onClick:e[0]||(e[0]=(...i)=>o.redirect&&o.redirect(...i)),class:"botao"},"Iniciar")])])}var ti=t(7844),ai={props:["iniciative"],data(){return{month:"",day:"",imageUrl:""}},methods:{redirect(){this.$router.push({name:"CheckIn",params:{theme:this.iniciative.theme}})}},created(){var i=this.iniciative.date.split("-");"01"===i[1]&&(this.month="Jan"),"02"===i[1]&&(this.month="Fev"),"03"===i[1]&&(this.month="Mar"),"04"===i[1]&&(this.month="Abr"),"05"===i[1]&&(this.month="Mai"),"06"===i[1]&&(this.month="Jun"),"07"===i[1]&&(this.month="Jul"),"08"===i[1]&&(this.month="Ago"),"09"===i[1]&&(this.month="Set"),"10"===i[1]&&(this.month="Out"),"11"===i[1]&&(this.month="Nov"),"12"===i[1]&&(this.month="Dez"),this.day=i[2];const e=(0,ti.c7)();if(this.iniciative.photo){const i=(0,ti.KR)(e,"images/"+this.iniciative.photo);(0,ti.qk)(i).then((i=>{console.log("URL da imagem obtida:",i),this.imageUrl=i})).catch((i=>{throw console.error("Erro ao obter URL da imagem:",i),i}))}else{const i=(0,ti.KR)(e,"images/defaultImage.png");(0,ti.qk)(i).then((i=>{console.log("URL da imagem obtida:",i),this.imageUrl=i})).catch((i=>{throw console.error("Erro ao obter URL da imagem:",i),i}))}}};const si=(0,o.A)(ai,[["render",ei],["__scopeId","data-v-15151bfe"]]);var ni=si,oi={components:{TheHeader:J,Tittle:U,IniciativeFrame:ni},data(){return{tittle:"Minhas Iniciativas",iniciatives:[],iniciativesNumber:0}},created(){this.iniciatives=JSON.parse(localStorage.getItem("iniciatives")).filter((i=>i.email===this.$route.params.email&&"aceite"===i.status)),this.iniciativesNumber=this.iniciatives.length}};const ci=(0,o.A)(oi,[["render",A],["__scopeId","data-v-b115213c"]]);var ri=ci;const li=i=>((0,s.Qi)("data-v-4a8d878e"),i=i(),(0,s.jt)(),i),di={class:"row colabs"},hi={class:"colaboradores",style:{"padding-right":"24px"}},vi=li((()=>(0,s.Lk)("div",{class:"sub-titulo"},[(0,s.Lk)("p",null,"Colaborador/ Profissional")],-1))),ui={class:"check-boxes"},mi={class:"row mats"},ki={class:"materiais"},pi=li((()=>(0,s.Lk)("div",{class:"sub-titulo2"},[(0,s.Lk)("hr"),(0,s.Lk)("p",null,"Material")],-1))),fi={class:"check-boxes dois"},gi={class:"button-container"};function Li(i,e,t,a,n,o){const c=(0,s.g2)("TheHeader"),r=(0,s.g2)("Tittle"),l=(0,s.g2)("CheckInBox"),d=(0,s.g2)("ButtonGoBack"),h=(0,s.g2)("ButtonGoFoward");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(c),(0,s.bF)(r,{tittle:n.tittle},null,8,["tittle"]),(0,s.Lk)("div",di,[(0,s.Lk)("div",hi,[vi,(0,s.Lk)("div",ui,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.iniciative.collaborators,(i=>((0,s.uX)(),(0,s.CE)("div",{key:i.name},[(0,s.bF)(l,{nome:i.name,papel:"Colaborador",check:i.check,onChecked:o.handleChecked,class:"checkinout-box"},null,8,["nome","check","onChecked"])])))),128)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.iniciative.professionals,(i=>((0,s.uX)(),(0,s.CE)("div",{key:i.name},[(0,s.bF)(l,{nome:i.name,papel:"Profissional",check:i.check,onChecked:o.handleChecked,class:"checkinout-box"},null,8,["nome","check","onChecked"])])))),128))])])]),(0,s.Lk)("div",mi,[(0,s.Lk)("div",ki,[pi,(0,s.Lk)("div",fi,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.iniciative.materials,(i=>((0,s.uX)(),(0,s.CE)("div",{key:i.name,class:"object"},[(0,s.bF)(l,{nome:i.name,papel:"Material",check:i.check,onChecked:o.handleChecked,class:"checkinout-box"},null,8,["nome","check","onChecked"])])))),128))])])]),(0,s.Lk)("div",gi,[(0,s.bF)(d),(0,s.bF)(h,{onClick:o.redirect},null,8,["onClick"])])],64)}const Ii=i=>((0,s.Qi)("data-v-ea2dc362"),i=i(),(0,s.jt)(),i),bi=Ii((()=>(0,s.Lk)("p",null,"Anterior",-1))),Ci=[bi];function Ai(i,e,t,a,n,o){return(0,s.uX)(),(0,s.CE)("button",{onClick:e[0]||(e[0]=(...i)=>o.back&&o.back(...i)),class:"button"},Ci)}var Ei={methods:{back(){this.$router.go(-1)}}};const xi=(0,o.A)(Ei,[["render",Ai],["__scopeId","data-v-ea2dc362"]]);var Fi=xi;const Si=i=>((0,s.Qi)("data-v-6193da66"),i=i(),(0,s.jt)(),i),Ri=Si((()=>(0,s.Lk)("p",null,"Continuar",-1))),Bi=[Ri];function wi(i,e,t,a,n,o){return(0,s.uX)(),(0,s.CE)("button",{onClick:e[0]||(e[0]=(...i)=>o.foward&&o.foward(...i)),class:"button"},Bi)}var yi={props:["id","redirectPage"],methods:{foward(){this.$router.push({name:this.redirectPage,params:{id:this.id}})}}};const Ji=(0,o.A)(yi,[["render",wi],["__scopeId","data-v-6193da66"]]);var Ti=Ji;const Oi=i=>((0,s.Qi)("data-v-033e1863"),i=i(),(0,s.jt)(),i),Hi={key:0,class:"container"},Xi={class:"nome"},Ni={class:"profissao"},Ui=Oi((()=>(0,s.Lk)("div",{class:"divisoria"},null,-1))),Pi=Oi((()=>(0,s.Lk)("p",null,"CheckIn",-1))),Vi=[Pi];function Ki(i,e,t,a,n,o){return t.check?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",Hi,[(0,s.Lk)("div",Xi,[(0,s.Lk)("p",null,(0,L.v_)(t.nome),1)]),(0,s.Lk)("div",Ni,[(0,s.Lk)("p",null,(0,L.v_)(t.papel),1)]),Ui,(0,s.Lk)("div",{onClick:e[0]||(e[0]=(...i)=>o.checked&&o.checked(...i)),class:"checkin"},Vi)]))}var Gi={props:["nome","papel","check"],data(){return{}},methods:{checked(){this.$emit("checked",this.nome,this.papel)}}};const Qi=(0,o.A)(Gi,[["render",Ki],["__scopeId","data-v-033e1863"]]);var qi=Qi,Mi={components:{TheHeader:J,Tittle:U,ButtonGoBack:Fi,ButtonGoFoward:Ti,CheckInBox:qi},data(){return{tittle:"Gestão de Evento",iniciative:{}}},methods:{redirect(){this.$router.push({name:"DuringIniciative",params:{theme:this.iniciative.theme}})},handleChecked(i,e){if("Material"===e){const e=JSON.parse(localStorage.getItem("iniciatives")).findIndex((i=>i.theme===this.iniciative.theme));var t=JSON.parse(localStorage.getItem("iniciatives"));t.splice(e,1);const s=this.iniciative.materials.findIndex((e=>e.name===i));var a=this.iniciative.materials.find((e=>e.name===i));a.check=!0,this.iniciative.materials.splice(s,1),this.iniciative.materials.push(a),t.push(this.iniciative),localStorage.setItem("iniciatives",JSON.stringify(t))}else if("Colaborador"===e){const e=JSON.parse(localStorage.getItem("iniciatives")).findIndex((i=>i.theme===this.iniciative.theme));t=JSON.parse(localStorage.getItem("iniciatives"));t.splice(e,1);const a=this.iniciative.collaborators.findIndex((e=>e.name===i));var s=this.iniciative.collaborators.find((e=>e.name===i));s.check=!0,this.iniciative.collaborators.splice(a,1),this.iniciative.collaborators.push(s),t.push(this.iniciative),localStorage.setItem("iniciatives",JSON.stringify(t))}else{const e=JSON.parse(localStorage.getItem("iniciatives")).findIndex((i=>i.theme===this.iniciative.theme));t=JSON.parse(localStorage.getItem("iniciatives"));t.splice(e,1);const a=this.iniciative.professionals.findIndex((e=>e.name===i));var n=this.iniciative.professionals.find((e=>e.name===i));n.check=!0,this.iniciative.professionals.splice(a,1),this.iniciative.professionals.push(n),t.push(this.iniciative),localStorage.setItem("iniciatives",JSON.stringify(t))}}},created(){this.iniciative=JSON.parse(localStorage.getItem("iniciatives")).find((i=>i.theme===this.$route.params.theme))}};const Wi=(0,o.A)(Mi,[["render",Li],["__scopeId","data-v-4a8d878e"]]);var zi=Wi,ji=t.p+"img/exclamation-triangle.f7cd9994.svg";const _i=i=>((0,s.Qi)("data-v-6b9552de"),i=i(),(0,s.jt)(),i),Yi={class:"container"},Di=_i((()=>(0,s.Lk)("div",{class:"sub-titulo"},[(0,s.Lk)("h4",null,"Reportar Problema")],-1))),Zi={class:"corpo"},$i={class:"row"},ie={class:"row"},ee={class:"row"},te={class:"row"},ae={class:"button-container"};function se(i,e,t,a,n,o){const c=(0,s.g2)("TheHeader"),r=(0,s.g2)("Tittle"),l=(0,s.g2)("AudioBox"),d=(0,s.g2)("VideoBox"),h=(0,s.g2)("TextBox"),v=(0,s.g2)("PhotoBox"),u=(0,s.g2)("ButtonGoBack"),m=(0,s.g2)("ButtonGoFoward");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(c),(0,s.bF)(r,{tittle:n.iniciative.theme},null,8,["tittle"]),(0,s.Lk)("div",Yi,[Di,(0,s.Lk)("img",{onClick:e[0]||(e[0]=(...i)=>o.open&&o.open(...i)),src:ji,class:"imagem",alt:"Imagem"})]),(0,s.Lk)("div",Zi,[(0,s.Lk)("div",$i,[(0,s.bF)(l,{iniciative:this.iniciative,class:"item"},null,8,["iniciative"])]),(0,s.Lk)("div",ie,[(0,s.bF)(d,{iniciative:this.iniciative,class:"item"},null,8,["iniciative"])]),(0,s.Lk)("div",ee,[(0,s.bF)(h,{iniciative:this.iniciative,class:"item"},null,8,["iniciative"])]),(0,s.Lk)("div",te,[(0,s.bF)(v,{iniciative:this.iniciative,class:"item"},null,8,["iniciative"])])]),(0,s.Lk)("div",ae,[(0,s.bF)(u),(0,s.bF)(m,{onClick:o.redirect},null,8,["onClick"])])],64)}const ne={class:"retangulo1"},oe={class:"quadrado1"},ce={class:"retangulo2"},re={class:"display-area"},le=["src"];function de(i,e,t,a,n,o){return(0,s.uX)(),(0,s.CE)("div",ne,[(0,s.Lk)("div",oe,[(0,s.Lk)("input",{type:"file",onChange:e[0]||(e[0]=(...i)=>o.handleFileChange&&o.handleFileChange(...i)),id:"audio",name:"audio",accept:"audio/*",required:""},null,32),(0,s.Lk)("button",{onClick:e[1]||(e[1]=(...i)=>o.addAudio&&o.addAudio(...i))},"add audio")]),(0,s.Lk)("div",ce,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.audioUrls,((i,e)=>((0,s.uX)(),(0,s.CE)("div",{key:e,class:"trabalhador"},[(0,s.Lk)("div",re,[(0,s.Lk)("audio",{src:i,controls:""},null,8,le)])])))),128))])])}var he={props:["iniciative"],data(){return{tittle:"Gestão de Evento",file:null,audioUrls:[]}},methods:{addAudio(){if(this.file){const i=(0,ti.c7)(),e=(0,ti.KR)(i,"audios/"+this.file.name);(0,ti.D)(e,this.file).then((i=>{console.log("Audio enviado com sucesso para o Firebase!"),this.handleAudio()})).catch((i=>{console.error("Erro ao enviar audio:",i)}))}this.iniciative.duringIniciativeAudios.push(this.file.name);var i=JSON.parse(localStorage.getItem("iniciatives")).filter((i=>i.theme!==this.iniciative.theme));i.push(this.iniciative),localStorage.setItem("iniciatives",JSON.stringify(i))},handleAudio(){const i=(0,ti.c7)(),e=[];for(const t of this.iniciative.duringIniciativeAudios)if(t){const a=(0,ti.KR)(i,"audios/"+t);e.push((0,ti.qk)(a).then((i=>({duringIniciativeAudio:t,url:i}))))}Promise.all(e).then((i=>{i.forEach((({duringIniciativeAudio:i,url:e})=>{const t=this.iniciative.duringIniciativeAudios.findIndex((e=>e===i));this.audioUrls[t]=e})),console.log("URLs dos audios obtidos:",this.audioUrl)})).catch((i=>{console.error("Erro ao obter URLs dos audios:",i)}))},handleFileChange(i){this.file=i.target.files[0]}},created(){this.handleAudio()}};const ve=(0,o.A)(he,[["render",de],["__scopeId","data-v-3944cee3"]]);var ue=ve;const me={class:"retangulo1"},ke={class:"quadrado1"},pe={class:"retangulo2"},fe={class:"display-area"},ge=["src"];function Le(i,e,t,a,n,o){return(0,s.uX)(),(0,s.CE)("div",me,[(0,s.Lk)("div",ke,[(0,s.Lk)("input",{type:"file",onChange:e[0]||(e[0]=(...i)=>o.handleFileChange&&o.handleFileChange(...i)),id:"video",name:"video",accept:"video/*",required:""},null,32),(0,s.Lk)("button",{onClick:e[1]||(e[1]=(...i)=>o.addVideo&&o.addVideo(...i))},"add video")]),(0,s.Lk)("div",pe,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.videoUrls,((i,e)=>((0,s.uX)(),(0,s.CE)("div",{key:e,class:"trabalhador"},[(0,s.Lk)("div",fe,[(0,s.Lk)("video",{src:i,height:"68px",width:"68px",controls:""},null,8,ge)])])))),128))])])}var Ie={props:["iniciative"],data(){return{tittle:"Gestão de Evento",file:null,videoUrls:[]}},methods:{addVideo(){if(this.file){const i=(0,ti.c7)(),e=(0,ti.KR)(i,"videos/"+this.file.name);(0,ti.D)(e,this.file).then((i=>{console.log("Video enviado com sucesso para o Firebase!"),this.handleVideo()})).catch((i=>{console.error("Erro ao enviar video:",i)}))}this.iniciative.duringIniciativeVideos.push(this.file.name);var i=JSON.parse(localStorage.getItem("iniciatives")).filter((i=>i.theme!==this.iniciative.theme));i.push(this.iniciative),localStorage.setItem("iniciatives",JSON.stringify(i))},handleVideo(){const i=(0,ti.c7)(),e=[];for(const t of this.iniciative.duringIniciativeVideos)if(t){const a=(0,ti.KR)(i,"videos/"+t);e.push((0,ti.qk)(a).then((i=>({duringIniciativeVideo:t,url:i}))))}Promise.all(e).then((i=>{i.forEach((({duringIniciativeVideo:i,url:e})=>{const t=this.iniciative.duringIniciativeVideos.findIndex((e=>e===i));this.videoUrls[t]=e})),console.log("URLs dos videos obtidos:",this.videoUrl)})).catch((i=>{console.error("Erro ao obter URLs dos videos:",i)}))},handleFileChange(i){this.file=i.target.files[0]}},created(){this.handleVideo()}};const be=(0,o.A)(Ie,[["render",Le],["__scopeId","data-v-6995d8a6"]]);var Ce=be;const Ae={class:"retangulo1"},Ee={class:"quadrado1"},xe={class:"retangulo2"},Fe={class:"textarea"};function Se(i,e,t,n,o,c){return(0,s.uX)(),(0,s.CE)("div",Ae,[(0,s.Lk)("div",Ee,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>o.newText=i),placeholder:"Insira o seu comentário aqui..."},null,512),[[a.Jo,o.newText]]),(0,s.Lk)("button",{onClick:e[1]||(e[1]=(...i)=>c.addText&&c.addText(...i))},"Adicionar")]),(0,s.Lk)("div",xe,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.iniciative.duringIniciativeTexts,((i,e)=>((0,s.uX)(),(0,s.CE)("div",{key:e,class:"trabalhador"},[(0,s.Lk)("div",Fe,(0,L.v_)(i),1)])))),128))])])}var Re={props:["iniciative"],data(){return{tittle:"Gestão de Evento",newText:""}},methods:{addText(){this.iniciative.duringIniciativeTexts.push(this.newText),this.newText="";var i=JSON.parse(localStorage.getItem("iniciatives")).filter((i=>i.theme!==this.iniciative.theme));i.push(this.iniciative),localStorage.setItem("iniciatives",JSON.stringify(i))}}};const Be=(0,o.A)(Re,[["render",Se],["__scopeId","data-v-414365ad"]]);var we=Be;const ye={class:"retangulo1"},Je={class:"quadrado1"},Te={class:"retangulo2"},Oe={class:"display-area"},He=["src"];function Xe(i,e,t,a,n,o){return(0,s.uX)(),(0,s.CE)("div",ye,[(0,s.Lk)("div",Je,[(0,s.Lk)("input",{type:"file",onChange:e[0]||(e[0]=(...i)=>o.handleFileChange&&o.handleFileChange(...i)),id:"foto",name:"foto",accept:"image/*",required:""},null,32),(0,s.Lk)("button",{onClick:e[1]||(e[1]=(...i)=>o.addPhoto&&o.addPhoto(...i))},"add foto")]),(0,s.Lk)("div",Te,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.imageUrls,((i,e)=>((0,s.uX)(),(0,s.CE)("div",{key:e,class:"trabalhador"},[(0,s.Lk)("div",Oe,[(0,s.Lk)("img",{src:i,height:"68px",width:"68px",alt:"Foto do Colaborador"},null,8,He)])])))),128))])])}var Ne={props:["iniciative"],data(){return{tittle:"Gestão de Evento",file:null,imageUrls:[]}},methods:{addPhoto(){if(this.file){const i=(0,ti.c7)(),e=(0,ti.KR)(i,"images/"+this.file.name);(0,ti.D)(e,this.file).then((i=>{console.log("Imagem enviada com sucesso para o Firebase!"),this.handlePhoto()})).catch((i=>{console.error("Erro ao enviar imagem:",i)}))}this.iniciative.duringIniciativePhotos.push(this.file.name);var i=JSON.parse(localStorage.getItem("iniciatives")).filter((i=>i.theme!==this.iniciative.theme));i.push(this.iniciative),localStorage.setItem("iniciatives",JSON.stringify(i))},handlePhoto(){const i=(0,ti.c7)(),e=[];for(const t of this.iniciative.duringIniciativePhotos)if(t){const a=(0,ti.KR)(i,"images/"+t);e.push((0,ti.qk)(a).then((i=>({duringIniciativePhoto:t,url:i}))))}else this.imageUrls.push("defaultImage.png");Promise.all(e).then((i=>{i.forEach((({duringIniciativePhoto:i,url:e})=>{const t=this.iniciative.duringIniciativePhotos.findIndex((e=>e===i));this.imageUrls[t]=e})),console.log("URLs das imagens obtidas:",this.imageUrl)})).catch((i=>{console.error("Erro ao obter URLs das imagens:",i)}))},handleFileChange(i){this.file=i.target.files[0]}},created(){this.handlePhoto()}};const Ue=(0,o.A)(Ne,[["render",Xe],["__scopeId","data-v-26281458"]]);var Pe=Ue,Ve={components:{TheHeader:J,Tittle:U,AudioBox:ue,VideoBox:Ce,TextBox:we,PhotoBox:Pe,ButtonGoBack:Fi,ButtonGoFoward:Ti},data(){return{iniciative:{},problem:!1,problemText:""}},methods:{open(){this.iniciative.reportProblem=!0,this.iniciative.problem=this.problemText;var i=JSON.parse(localStorage.getItem("iniciatives")).filter((i=>i.theme!==this.iniciative.theme));i.push(this.iniciative),localStorage.setItem("iniciatives",JSON.stringify(i))},redirect(){this.$router.push({name:"CheckOut",params:{theme:this.iniciative.theme}})}},created(){this.iniciative=JSON.parse(localStorage.getItem("iniciatives")).find((i=>i.theme===this.$route.params.theme))}};const Ke=(0,o.A)(Ve,[["render",se],["__scopeId","data-v-6b9552de"]]);var Ge=Ke;const Qe=i=>((0,s.Qi)("data-v-72cd3d4a"),i=i(),(0,s.jt)(),i),qe={class:"page>"},Me={class:"row colabs"},We=Qe((()=>(0,s.Lk)("div",{class:"colaboradores"},[(0,s.Lk)("div",{class:"sub-titulo"},[(0,s.Lk)("p",null,"Colaborador/ Profissional")])],-1))),ze={class:"check-boxes"},je={class:"row mats"},_e=Qe((()=>(0,s.Lk)("div",{class:"materiais"},[(0,s.Lk)("div",{class:"sub-titulo2"},[(0,s.Lk)("hr"),(0,s.Lk)("p",null,"Material")])],-1))),Ye={class:"check-boxes dois"},De={class:"button-container"};function Ze(i,e,t,a,n,o){const c=(0,s.g2)("TheHeader"),r=(0,s.g2)("Tittle"),l=(0,s.g2)("CheckOutBox"),d=(0,s.g2)("ButtonGoBack"),h=(0,s.g2)("ButtonGoFoward");return(0,s.uX)(),(0,s.CE)("div",qe,[(0,s.bF)(c),(0,s.bF)(r,{tittle:n.tittle},null,8,["tittle"]),(0,s.Lk)("div",Me,[We,(0,s.Lk)("div",ze,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.iniciative.collaborators,(i=>((0,s.uX)(),(0,s.CE)("div",{key:i.name},[(0,s.bF)(l,{nome:i.name,papel:"Colaborador",check:i.check,onChecked:o.handleChecked,class:"checkinout-box"},null,8,["nome","check","onChecked"])])))),128)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.iniciative.professionals,(i=>((0,s.uX)(),(0,s.CE)("div",{key:i.name},[(0,s.bF)(l,{nome:i.name,papel:"Profissional",check:i.check,onChecked:o.handleChecked,class:"checkinout-box"},null,8,["nome","check","onChecked"])])))),128))])]),(0,s.Lk)("div",je,[_e,(0,s.Lk)("div",Ye,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.iniciative.materials,(i=>((0,s.uX)(),(0,s.CE)("div",{key:i.name},[(0,s.bF)(l,{nome:i.name,papel:"Material",check:i.check,onChecked:o.handleChecked,class:"checkinout-box"},null,8,["nome","check","onChecked"])])))),128))])]),(0,s.Lk)("div",De,[(0,s.bF)(d),(0,s.bF)(h,{onClick:o.redirect},null,8,["onClick"])])])}const $e=i=>((0,s.Qi)("data-v-39b693be"),i=i(),(0,s.jt)(),i),it={key:0,class:"container"},et={class:"nome"},tt={class:"profissao"},at=$e((()=>(0,s.Lk)("div",{class:"divisoria"},null,-1))),st=$e((()=>(0,s.Lk)("p",null,"CheckOut",-1))),nt=[st];function ot(i,e,t,a,n,o){return t.check?((0,s.uX)(),(0,s.CE)("div",it,[(0,s.Lk)("div",et,[(0,s.Lk)("p",null,(0,L.v_)(t.nome),1)]),(0,s.Lk)("div",tt,[(0,s.Lk)("p",null,(0,L.v_)(t.papel),1)]),at,(0,s.Lk)("div",{onClick:e[0]||(e[0]=(...i)=>o.checked&&o.checked(...i)),class:"checkin"},nt)])):(0,s.Q3)("",!0)}var ct={props:["nome","papel","check"],data(){return{}},methods:{checked(){this.$emit("checked",this.nome,this.papel)}}};const rt=(0,o.A)(ct,[["render",ot],["__scopeId","data-v-39b693be"]]);var lt=rt,dt={components:{TheHeader:J,Tittle:U,ButtonGoBack:Fi,ButtonGoFoward:Ti,CheckOutBox:lt},data(){return{tittle:"Gestão de Evento",iniciative:{}}},methods:{redirect(){this.$router.push({name:"Statistics",params:{theme:this.iniciative.theme}})},handleChecked(i,e){if("Material"===e){const e=JSON.parse(localStorage.getItem("iniciatives")).findIndex((i=>i.theme===this.iniciative.theme));var t=JSON.parse(localStorage.getItem("iniciatives"));t.splice(e,1);const s=this.iniciative.materials.findIndex((e=>e.name===i));var a=this.iniciative.materials.find((e=>e.name===i));a.check=!1,this.iniciative.materials.splice(s,1),this.iniciative.materials.push(a),t.push(this.iniciative),localStorage.setItem("iniciatives",JSON.stringify(t))}else if("Colaborador"===e){const e=JSON.parse(localStorage.getItem("iniciatives")).findIndex((i=>i.theme===this.iniciative.theme));t=JSON.parse(localStorage.getItem("iniciatives"));t.splice(e,1);const a=this.iniciative.collaborators.findIndex((e=>e.name===i));var s=this.iniciative.collaborators.find((e=>e.name===i));s.check=!1,this.iniciative.collaborators.splice(a,1),this.iniciative.collaborators.push(s),t.push(this.iniciative),localStorage.setItem("iniciatives",JSON.stringify(t))}else{const e=JSON.parse(localStorage.getItem("iniciatives")).findIndex((i=>i.theme===this.iniciative.theme));t=JSON.parse(localStorage.getItem("iniciatives"));t.splice(e,1);const a=this.iniciative.professionals.findIndex((e=>e.name===i));var n=this.iniciative.professionals.find((e=>e.name===i));n.check=!1,this.iniciative.professionals.splice(a,1),this.iniciative.professionals.push(n),t.push(this.iniciative),localStorage.setItem("iniciatives",JSON.stringify(t))}}},created(){this.iniciative=JSON.parse(localStorage.getItem("iniciatives")).find((i=>i.theme===this.$route.params.theme))}};const ht=(0,o.A)(dt,[["render",Ze],["__scopeId","data-v-72cd3d4a"]]);var vt=ht;const ut=i=>((0,s.Qi)("data-v-07bbdfeb"),i=i(),(0,s.jt)(),i),mt=ut((()=>(0,s.Lk)("div",{class:"title"},[(0,s.Lk)("h3",null,"Estatísticas")],-1))),kt={class:"corpo"},pt={class:"rodape"},ft={class:"button-container"};function gt(i,e,t,a,n,o){const c=(0,s.g2)("TheHeader"),r=(0,s.g2)("Tittle"),l=(0,s.g2)("StatisticsForm"),d=(0,s.g2)("ButtonGoBack");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(c),(0,s.bF)(r,{tittle:n.tittle},null,8,["tittle"]),mt,(0,s.Lk)("div",kt,[(0,s.bF)(l,{theme:n.iniciative.theme},null,8,["theme"])]),(0,s.Lk)("div",pt,[(0,s.Lk)("div",ft,[(0,s.bF)(d)])])],64)}const Lt=i=>((0,s.Qi)("data-v-fcbb4e90"),i=i(),(0,s.jt)(),i),It={class:"center"},bt={class:"txt_field"},Ct=Lt((()=>(0,s.Lk)("label",null,"Número de Participantes:",-1))),At={class:"txt_field"},Et=Lt((()=>(0,s.Lk)("label",null,"Donativos (quantidade monetária):",-1))),xt={class:"txt_field"},Ft=Lt((()=>(0,s.Lk)("label",null,"Duração da Iniciativa:",-1))),St={class:"txt_field"},Rt=Lt((()=>(0,s.Lk)("label",null,"Custos da Iniciativa:",-1))),Bt={class:"esferas"},wt={key:0},yt=Lt((()=>(0,s.Lk)("div",{class:"txt_field"},[(0,s.Lk)("label",{for:"companyField"},"Nível de Sucesso")],-1))),Jt={class:"esferas-container"},Tt={key:1},Ot=Lt((()=>(0,s.Lk)("div",{class:"txt_field"},[(0,s.Lk)("label",{for:"companyField"},"Nível de Sucesso")],-1))),Ht={class:"esferas-container"},Xt={key:2},Nt=Lt((()=>(0,s.Lk)("div",{class:"txt_field"},[(0,s.Lk)("label",{for:"companyField"},"Nível de Sucesso")],-1))),Ut={class:"esferas-container"},Pt={key:3},Vt=Lt((()=>(0,s.Lk)("div",{class:"txt_field"},[(0,s.Lk)("label",{for:"companyField"},"Nível de Sucesso")],-1))),Kt={class:"esferas-container"},Gt={key:4},Qt=Lt((()=>(0,s.Lk)("div",{class:"txt_field"},[(0,s.Lk)("label",{for:"companyField"},"Nível de Sucesso")],-1))),qt={class:"esferas-container"},Mt={key:5},Wt=Lt((()=>(0,s.Lk)("div",{class:"txt_field"},[(0,s.Lk)("label",{for:"companyField"},"Nível de Sucesso")],-1))),zt={class:"esferas-container"},jt={class:"last-btn"};function _t(i,e,t,n,o,c){return(0,s.uX)(),(0,s.CE)("div",It,[(0,s.Lk)("form",null,[(0,s.Lk)("div",bt,[(0,s.bo)((0,s.Lk)("input",{type:"text",required:"","onUpdate:modelValue":e[0]||(e[0]=i=>o.dataForm.participants=i)},null,512),[[a.Jo,o.dataForm.participants]]),Ct]),(0,s.Lk)("div",At,[(0,s.bo)((0,s.Lk)("input",{type:"text",required:"","onUpdate:modelValue":e[1]||(e[1]=i=>o.dataForm.donatives=i)},null,512),[[a.Jo,o.dataForm.donatives]]),Et]),(0,s.Lk)("div",xt,[(0,s.bo)((0,s.Lk)("input",{type:"text",required:"","onUpdate:modelValue":e[2]||(e[2]=i=>o.dataForm.duration=i)},null,512),[[a.Jo,o.dataForm.duration]]),Ft]),(0,s.Lk)("div",St,[(0,s.bo)((0,s.Lk)("input",{type:"text",required:"","onUpdate:modelValue":e[3]||(e[3]=i=>o.dataForm.costs=i)},null,512),[[a.Jo,o.dataForm.costs]]),Rt]),(0,s.Lk)("div",Bt,[0===o.iniciative.successRate?((0,s.uX)(),(0,s.CE)("div",wt,[yt,(0,s.Lk)("div",Jt,[(0,s.Lk)("div",{onClick:e[4]||(e[4]=i=>c.esferasHandler(20)),class:"esferaBranca"}),(0,s.Lk)("div",{onClick:e[5]||(e[5]=i=>c.esferasHandler(40)),class:"esferaBranca"}),(0,s.Lk)("div",{onClick:e[6]||(e[6]=i=>c.esferasHandler(60)),class:"esferaBranca"}),(0,s.Lk)("div",{onClick:e[7]||(e[7]=i=>c.esferasHandler(80)),class:"esferaBranca"}),(0,s.Lk)("div",{onClick:e[8]||(e[8]=i=>c.esferasHandler(100)),class:"esferaBranca"})])])):20===o.iniciative.successRate?((0,s.uX)(),(0,s.CE)("div",Tt,[Ot,(0,s.Lk)("div",Ht,[(0,s.Lk)("div",{onClick:e[9]||(e[9]=i=>c.esferasHandler(20)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[10]||(e[10]=i=>c.esferasHandler(40)),class:"esferaBranca"}),(0,s.Lk)("div",{onClick:e[11]||(e[11]=i=>c.esferasHandler(60)),class:"esferaBranca"}),(0,s.Lk)("div",{onClick:e[12]||(e[12]=i=>c.esferasHandler(80)),class:"esferaBranca"}),(0,s.Lk)("div",{onClick:e[13]||(e[13]=i=>c.esferasHandler(100)),class:"esferaBranca"})])])):40===o.iniciative.successRate?((0,s.uX)(),(0,s.CE)("div",Xt,[Nt,(0,s.Lk)("div",Ut,[(0,s.Lk)("div",{onClick:e[14]||(e[14]=i=>c.esferasHandler(20)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[15]||(e[15]=i=>c.esferasHandler(40)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[16]||(e[16]=i=>c.esferasHandler(60)),class:"esferaBranca"}),(0,s.Lk)("div",{onClick:e[17]||(e[17]=i=>c.esferasHandler(80)),class:"esferaBranca"}),(0,s.Lk)("div",{onClick:e[18]||(e[18]=i=>c.esferasHandler(100)),class:"esferaBranca"})])])):60===o.iniciative.successRate?((0,s.uX)(),(0,s.CE)("div",Pt,[Vt,(0,s.Lk)("div",Kt,[(0,s.Lk)("div",{onClick:e[19]||(e[19]=i=>c.esferasHandler(20)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[20]||(e[20]=i=>c.esferasHandler(40)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[21]||(e[21]=i=>c.esferasHandler(60)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[22]||(e[22]=i=>c.esferasHandler(80)),class:"esferaBranca"}),(0,s.Lk)("div",{onClick:e[23]||(e[23]=i=>c.esferasHandler(100)),class:"esferaBranca"})])])):80===o.iniciative.successRate?((0,s.uX)(),(0,s.CE)("div",Gt,[Qt,(0,s.Lk)("div",qt,[(0,s.Lk)("div",{onClick:e[24]||(e[24]=i=>c.esferasHandler(20)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[25]||(e[25]=i=>c.esferasHandler(40)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[26]||(e[26]=i=>c.esferasHandler(60)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[27]||(e[27]=i=>c.esferasHandler(80)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[28]||(e[28]=i=>c.esferasHandler(100)),class:"esferaBranca"})])])):((0,s.uX)(),(0,s.CE)("div",Mt,[Wt,(0,s.Lk)("div",zt,[(0,s.Lk)("div",{onClick:e[29]||(e[29]=i=>c.esferasHandler(20)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[30]||(e[30]=i=>c.esferasHandler(40)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[31]||(e[31]=i=>c.esferasHandler(60)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[32]||(e[32]=i=>c.esferasHandler(80)),class:"esferaVerde"}),(0,s.Lk)("div",{onClick:e[33]||(e[33]=i=>c.esferasHandler(100)),class:"esferaVerde"})])]))]),(0,s.Lk)("div",jt,[(0,s.Lk)("button",{onClick:e[34]||(e[34]=(...i)=>c.end&&c.end(...i)),class:"button"},"Terminar")])])])}var Yt={props:["theme"],data(){return{dataForm:{participants:0,donatives:0,duration:0,costs:0},iniciative:{}}},methods:{end(){const i=(0,h.xI)();(0,h.hg)(i,(i=>{if(i){this.iniciative.status="passada",this.iniciative.participants=this.dataForm.participants,this.iniciative.donatives=this.dataForm.donatives,this.iniciative.duration=this.dataForm.duration,this.iniciative.costs=this.dataForm.costs;var e=JSON.parse(localStorage.getItem("iniciatives")).filter((i=>i.theme!==this.iniciative.theme));e.push(this.iniciative),localStorage.setItem("iniciatives",JSON.stringify(e)),this.$router.push({name:"Iniciatives",params:{email:i.email}})}}))},esferasHandler(i){this.iniciative.successRate=i}},created(){this.iniciative=JSON.parse(localStorage.getItem("iniciatives")).find((i=>i.theme===this.theme))}};const Dt=(0,o.A)(Yt,[["render",_t],["__scopeId","data-v-fcbb4e90"]]);var Zt=Dt,$t={components:{TheHeader:J,Tittle:U,ButtonGoBack:Fi,StatisticsForm:Zt},data(){return{tittle:"Conclusão do Evento",iniciative:{}}},created(){this.iniciative=JSON.parse(localStorage.getItem("iniciatives")).find((i=>i.theme===this.$route.params.theme))}};const ia=(0,o.A)($t,[["render",gt],["__scopeId","data-v-07bbdfeb"]]);var ea=ia;const ta=[{path:"/",name:"Login",component:g},{path:"/iniciatives/:email",name:"Iniciatives",component:ri,props:!0,meta:{requiresAuth:!0}},{path:"/checkIn/:theme",name:"CheckIn",component:zi,props:!0,meta:{requiresAuth:!0}},{path:"/duringIniciative/:theme",name:"DuringIniciative",component:Ge,props:!0,meta:{requiresAuth:!0}},{path:"/checkOut/:theme",name:"CheckOut",component:vt,props:!0,meta:{requiresAuth:!0}},{path:"/statistics/:theme",name:"Statistics",component:ea,props:!0,meta:{requiresAuth:!0}}],aa=(0,d.aE)({history:(0,d.LA)("/App/"),routes:ta}),sa=()=>new Promise(((i,e)=>{const t=(0,h.hg)((0,h.xI)(),(e=>{t(),i(e)}),e)}));aa.beforeEach((async(i,e,t)=>{if(i.matched.some((i=>i.meta.requiresAuth))){const i=await sa();i?t():(alert("É necessário fazer login para realizar esta operação!"),t("/"))}else t()}));var na=aa,oa=t(9953),ca=t.n(oa),ra=t(6400);const la={apiKey:"AIzaSyBSBhhJZfcQE3bsABgYPK0sZlJeRyGJkak",authDomain:"projetopw-4c35b.firebaseapp.com",projectId:"projetopw-4c35b",storageBucket:"projetopw-4c35b.appspot.com",messagingSenderId:"62984874544",appId:"1:62984874544:web:dff7afbfde6314aad15bf5"};(0,ra.Wp)(la);const da=(0,a.Ef)(l);da.use(na).use(ca()),da.mount("#app")}},e={};function t(a){var s=e[a];if(void 0!==s)return s.exports;var n=e[a]={exports:{}};return i[a].call(n.exports,n,n.exports,t),n.exports}t.m=i,function(){var i=[];t.O=function(e,a,s,n){if(!a){var o=1/0;for(d=0;d<i.length;d++){a=i[d][0],s=i[d][1],n=i[d][2];for(var c=!0,r=0;r<a.length;r++)(!1&n||o>=n)&&Object.keys(t.O).every((function(i){return t.O[i](a[r])}))?a.splice(r--,1):(c=!1,n<o&&(o=n));if(c){i.splice(d--,1);var l=s();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=i.length;d>0&&i[d-1][2]>n;d--)i[d]=i[d-1];i[d]=[a,s,n]}}(),function(){t.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return t.d(e,{a:e}),e}}(),function(){t.d=function(i,e){for(var a in e)t.o(e,a)&&!t.o(i,a)&&Object.defineProperty(i,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"===typeof window)return window}}()}(),function(){t.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)}}(),function(){t.p="/App/"}(),function(){var i={524:0};t.O.j=function(e){return 0===i[e]};var e=function(e,a){var s,n,o=a[0],c=a[1],r=a[2],l=0;if(o.some((function(e){return 0!==i[e]}))){for(s in c)t.o(c,s)&&(t.m[s]=c[s]);if(r)var d=r(t)}for(e&&e(a);l<o.length;l++)n=o[l],t.o(i,n)&&i[n]&&i[n][0](),i[n]=0;return t.O(d)},a=self["webpackChunkaplicacao"]=self["webpackChunkaplicacao"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(6614)}));a=t.O(a)})();
//# sourceMappingURL=app.33b4de48.js.map