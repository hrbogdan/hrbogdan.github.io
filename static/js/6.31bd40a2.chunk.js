(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{341:function(e,t,a){},342:function(e,t,a){"use strict";var r=a(24);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),l=(0,r(a(26)).default)(n.default.createElement("path",{d:"M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z"}),"ThumbDownAlt");t.default=l},343:function(e,t,a){"use strict";var r=a(24);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),l=(0,r(a(26)).default)(n.default.createElement("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"}),"ThumbUpAlt");t.default=l},344:function(e,t,a){},345:function(e,t,a){},424:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(0),l=a.n(n),o=a(36),i=a(133),c=a(41),s=a(196),d=a(1),m=a(3),u=(a(2),a(5)),p=a(243),f=a(244),b=a(259),g=a(42),v=a(59),E=a(6),y=a(7),h=n.forwardRef((function(e,t){var a=e.children,r=e.classes,l=e.className,o=(e.color,e.component),i=void 0===o?"label":o,c=(e.disabled,e.error,e.filled,e.focused,e.required,Object(m.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),s=Object(v.a)(),p=Object(g.a)({props:e,muiFormControl:s,states:["color","required","focused","disabled","error","filled"]});return n.createElement(i,Object(d.a)({className:Object(u.a)(r.root,r["color".concat(Object(y.a)(p.color||"primary"))],l,p.disabled&&r.disabled,p.error&&r.error,p.filled&&r.filled,p.focused&&r.focused,p.required&&r.required),ref:t},c),a,p.required&&n.createElement("span",{"aria-hidden":!0,className:Object(u.a)(r.asterisk,p.error&&r.error)},"\u2009","*"))})),x=Object(E.a)((function(e){return{root:Object(d.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(h),O=n.forwardRef((function(e,t){var a=e.classes,r=e.className,l=e.disableAnimation,o=void 0!==l&&l,i=(e.margin,e.shrink),c=(e.variant,Object(m.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),s=Object(v.a)(),p=i;"undefined"===typeof p&&s&&(p=s.filled||s.focused||s.adornedStart);var f=Object(g.a)({props:e,muiFormControl:s,states:["margin","variant"]});return n.createElement(x,Object(d.a)({"data-shrink":p,className:Object(u.a)(a.root,r,s&&a.formControl,!o&&a.animated,p&&a.shrink,"dense"===f.margin&&a.marginDense,{filled:a.filled,outlined:a.outlined}[f.variant]),classes:{focused:a.focused,disabled:a.disabled,error:a.error,required:a.required,asterisk:a.asterisk},ref:t},c))})),j=Object(E.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(O),k=a(242),w=n.forwardRef((function(e,t){var a=e.children,r=e.classes,l=e.className,o=e.component,i=void 0===o?"p":o,c=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,Object(m.a)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),s=Object(v.a)(),p=Object(g.a)({props:e,muiFormControl:s,states:["variant","margin","disabled","error","filled","focused","required"]});return n.createElement(i,Object(d.a)({className:Object(u.a)(r.root,("filled"===p.variant||"outlined"===p.variant)&&r.contained,l,p.disabled&&r.disabled,p.error&&r.error,p.filled&&r.filled,p.focused&&r.focused,p.required&&r.required,"dense"===p.margin&&r.marginDense),ref:t},c)," "===a?n.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):a)})),S=Object(E.a)((function(e){return{root:Object(d.a)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(w),F=a(254),N={standard:p.a,filled:f.a,outlined:b.a},P=n.forwardRef((function(e,t){var a=e.autoComplete,r=e.autoFocus,l=void 0!==r&&r,o=e.children,i=e.classes,c=e.className,s=e.color,p=void 0===s?"primary":s,f=e.defaultValue,b=e.disabled,g=void 0!==b&&b,v=e.error,E=void 0!==v&&v,y=e.FormHelperTextProps,h=e.fullWidth,x=void 0!==h&&h,O=e.helperText,w=e.hiddenLabel,P=e.id,_=e.InputLabelProps,T=e.inputProps,C=e.InputProps,B=e.inputRef,q=e.label,z=e.multiline,I=void 0!==z&&z,L=e.name,M=e.onBlur,A=e.onChange,D=e.onFocus,R=e.placeholder,$=e.required,H=void 0!==$&&$,W=e.rows,V=e.rowsMax,J=e.select,U=void 0!==J&&J,Y=e.SelectProps,G=e.type,K=e.value,Q=e.variant,X=void 0===Q?"standard":Q,Z=Object(m.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]);var ee={};if("outlined"===X&&(_&&"undefined"!==typeof _.shrink&&(ee.notched=_.shrink),q)){var te,ae=null!==(te=null===_||void 0===_?void 0:_.required)&&void 0!==te?te:H;ee.label=n.createElement(n.Fragment,null,q,ae&&"\xa0*")}U&&(Y&&Y.native||(ee.id=void 0),ee["aria-describedby"]=void 0);var re=O&&P?"".concat(P,"-helper-text"):void 0,ne=q&&P?"".concat(P,"-label"):void 0,le=N[X],oe=n.createElement(le,Object(d.a)({"aria-describedby":re,autoComplete:a,autoFocus:l,defaultValue:f,fullWidth:x,multiline:I,name:L,rows:W,rowsMax:V,type:G,value:K,id:P,inputRef:B,onBlur:M,onChange:A,onFocus:D,placeholder:R,inputProps:T},ee,C));return n.createElement(k.a,Object(d.a)({className:Object(u.a)(i.root,c),disabled:g,error:E,fullWidth:x,hiddenLabel:w,ref:t,required:H,color:p,variant:X},Z),q&&n.createElement(j,Object(d.a)({htmlFor:P,id:ne},_),q),U?n.createElement(F.a,Object(d.a)({"aria-describedby":re,id:P,labelId:ne,value:K,input:oe},Y),o):oe,O&&n.createElement(S,Object(d.a)({id:re},y),O))})),_=Object(E.a)({root:{}},{name:"MuiTextField"})(P),T=a(342),C=a.n(T),B=a(343),q=a.n(B),z=(a(341),a(56));function I(e){var t=e.postid,a=Object(n.useState)(null),i=Object(r.a)(a,2),c=i[0],d=i[1],m=Object(n.useState)(""),u=Object(r.a)(m,2),p=u[0],f=u[1],b=Object(n.useState)(!localStorage.hasOwnProperty("gfeedb"+t)),g=Object(r.a)(b,2),v=g[0],E=g[1];function y(e){d(e),!0===e?(Object(z.a)(1,p,t,(function(e){console.log(e)})),E(!1),localStorage.setItem("gfeedb"+t,"yes")):!1===e&&(Object(z.a)(0,p,t,(function(e){console.log(e)})),E(!1),localStorage.setItem("gfeedb"+t,"no"))}return v?!0===c||!1===c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"unselectable feedback"},l.a.createElement(o.a,{color:"textPrimary",variant:"subtitle1",component:"p",gutterBottom:!0},l.a.createElement("b",null,"V\u0103 mul\u021bumim pentru feedback.")))):"no"===c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"unselectable feedback"},l.a.createElement(o.a,{color:"textPrimary",variant:"subtitle1",component:"p",gutterBottom:!0},"Cum putem s\u0103 \xeembun\u0103t\u0103\u021bim aceast\u0103 pagin\u0103?",l.a.createElement(_,{type:"text",fullWidth:!1,rows:4,variant:"filled",margin:"dense",style:{width:"100%",maxWidth:"900px"},multiline:!0,autoFocus:!0,value:p,onChange:function(e){f(e.target.value)}}),l.a.createElement("span",{id:"buttonsFeedback"},l.a.createElement(s.a,{onClick:function(){y("inapoi")},variant:"outlined",color:"default",size:"medium",style:{marginTop:"10px"}},"Inapoi"),"\xa0\xa0\xa0",l.a.createElement(s.a,{style:{marginTop:"10px"},onClick:function(){y(!1)},size:"medium",variant:"contained",color:"primary"},"Trimite"))))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"unselectable feedback"},l.a.createElement(o.a,{color:"textPrimary",variant:"subtitle1",component:"p",gutterBottom:!0},"Ce p\u0103rere ai despre aceast\u0103 postare? \xa0 \xa0",l.a.createElement("span",{id:"buttonsFeedback"},l.a.createElement(s.a,{onClick:function(){y("no")},size:"small",variant:"contained",color:"default"},l.a.createElement(C.a,null)),"\xa0\xa0\xa0",l.a.createElement(s.a,{onClick:function(){y(!0)},size:"small",variant:"contained",style:{background:"#4EB822",color:"white"},color:"primary"},l.a.createElement(q.a,null)))))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"unselectable feedback"},l.a.createElement(o.a,{color:"textPrimary",variant:"subtitle1",component:"p",gutterBottom:!0},"Mul\u021bumim pentru feedback. \xa0\xa0\xa0","no"===localStorage.getItem("gfeedb"+t)&&l.a.createElement(s.a,{disabled:!0,size:"small",style:{background:"#ff4444",color:"white"},variant:"contained",color:"primary"},l.a.createElement(C.a,null)),"yes"===localStorage.getItem("gfeedb"+t)&&l.a.createElement(s.a,{disabled:!0,size:"small",style:{background:"#4EB822",color:"white"},variant:"contained",color:"primary"},l.a.createElement(q.a,null)))))}var L=a(14),M=(a(344),function(e){var t=e.denumire,a=e.small;return void 0!==a&&a?l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{className:"tag_mic",color:"textSecondary",variant:"body2",component:"span"},t)):l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{className:"tag",color:"textSecondary",variant:"body2",component:"span"},t))}),A=a(193),D=(a(345),Object(A.a)({root:{borderRadius:"0px",margin:0}}));function R(e){var t=e.fullWidth,a=void 0!==t&&t,r=e.nume,n=e.link,c=(e.categorie,e.culoare_link,e.dimensiune),s=e.tip,d=void 0===s?"pdf":s;D();return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{item:!0,xs:12,sm:12,md:a?12:6},l.a.createElement("div",{className:"Doc"},l.a.createElement("a",{href:"https://api.osut.ro/media/docs/"+n},l.a.createElement("div",{className:"Document unselectable"},l.a.createElement(o.a,{color:"textPrimary",variant:"body1",component:"div",style:{textTransform:"none",fontWeight:400}},r,l.a.createElement("div",{className:"smaller"},l.a.createElement("span",{className:"categorie"},d)," \xb7\xa0",l.a.createElement("span",null,c))))))))}var $=function(e){var t=e.array;return l.a.createElement("div",{id:"atasamente",style:{margin:"0px",marginTop:0,padding:"5px 10px",paddingBottom:20}},t.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(R,{key:e.url,style:{marginBottom:"10px"},fullWidth:!0,nume:e.denumire,categorie:"",dimensiune:e.filesize,tip:e.tip_fisier,link:e.url}))})))},H=a(197),W=a(8),V=a(58),J=a(83),U=a(4);String.prototype.explode=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=this.split(e);return void 0!==t&&a.length>=t&&a.push(a.splice(t-1).join(e)),a};var Y=function(e){var t=e.percent;return l.a.createElement("div",{style:{position:"fixed",left:0,top:0,background:"#eee",width:100*t+"%",height:4,zIndex:21312321321,opacity:.6}})},G=function(e){var t=e.categorie,a=e.desc,r=e.data,n=e.titlu,i=e.tags,c=void 0===i?null:i;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{color:"primary",style:{marginBottom:"10px",textAlign:"left",textTransform:"uppercase",display:"block"},title:"Categorie articol",variant:"body2",component:"strong"},t),l.a.createElement(o.a,{color:"textPrimary",variant:"h4",component:"h1",gutterBottom:!0,dangerouslySetInnerHTML:{__html:n}}),a.length>0&&l.a.createElement(o.a,{color:"textSecondary",style:{marginBottom:"10px",textAlign:"left"},variant:"body1",component:"h2"},a),l.a.createElement("div",{className:"desc"},l.a.createElement(o.a,{color:"textPrimary",variant:"body2",component:"div",gutterBottom:!0,style:{textAlign:"left",opacity:.8}},l.a.createElement("div",{style:{marginLeft:"0px",marginTop:"0px"}},l.a.createElement(o.a,{color:"textSecondary",variant:"body2",component:"span",style:{marginRight:"6px"}},"Postat ",r,l.a.createElement("span",{className:"etichete"},""!==c&&l.a.createElement(l.a.Fragment,null,"\xa0\xb7\xa0 Etichete:"))),l.a.createElement("span",{className:"etichete"},""!==String(c)&&String(c).split(",").map((function(e){return l.a.createElement(M,{key:e,denumire:e.replace("#","")})})))))))},K=function(e){var t=e.titlu,a=(e.id,e.urlfriendly);e.tags;return l.a.createElement(W.b,{to:"/p/"+a,className:"related_article"},l.a.createElement(o.a,{color:"textPrimary",variant:"body1",component:"p",gutterBottom:!0,dangerouslySetInnerHTML:{__html:t}}))};function Q(e){var t=e.post_id,a=Object(n.useState)(""),s=Object(r.a)(a,2),d=s[0],m=s[1],u=Object(n.useState)(""),p=Object(r.a)(u,2),f=p[0],b=p[1],g=Object(n.useState)(""),v=Object(r.a)(g,2),E=v[0],y=v[1],h=Object(n.useState)([]),x=Object(r.a)(h,2),O=x[0],j=x[1],k=Object(n.useState)(0),w=Object(r.a)(k,2),S=w[0],F=w[1],N=Object(n.useRef)(null),P=function(){if(null!==N.current){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(N.current.clientHeight-document.documentElement.clientHeight+150);e>=.999&&(e=.999),F(e)}};Object(n.useEffect)((function(){return Object(z.d)(t,m,b,y,j,(function(){J.a.timeline({duration:.1,stagger:.15}).from(".whitebg",{ease:U.b.easeInOut,duration:.4,y:-40,opacity:0,stagger:.2})})),window.addEventListener("scroll",P,{passive:!0}),function(){window.removeEventListener("scroll",P)}}),[t]);Object(L.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement("title",null,"".concat(f.titlu," - OSUT")),l.a.createElement("meta",{name:"description",content:f.descriere_scurta})),l.a.createElement(Y,{percent:S}),l.a.createElement("div",{id:"thumbPostDiv"},""===f.video&&l.a.createElement("picture",null,""!==f.poza_webp&&l.a.createElement("source",{srcSet:"https://api.osut.ro/"+f.poza_webp,type:"image/webp"}),l.a.createElement("img",{src:f.poza,alt:f.titlu}))),l.a.createElement(H.a,{maxWidth:"lg",className:"post_mare",style:{marginTop:"50px"}},f?l.a.createElement(i.a,{container:!0,spacing:4,direction:"row",justify:"flex-start",style:{position:"relative"}},l.a.createElement(i.a,{item:!0,xs:12,md:8},l.a.createElement("div",{className:"whitebg nopadding",ref:N},""!==f.video?l.a.createElement("video",{width:"100%",autoPlay:!0,controls:!0,muted:!0,style:{borderRadius:"0px 0px 0px 0px",marginBottom:20,width:"100%"},loop:!0},l.a.createElement("source",{src:f.video,type:"video/mp4"}),"Your browser does not support the video tag."):l.a.createElement("picture",null,""!==f.poza_webp&&l.a.createElement("source",{srcSet:"https://api.osut.ro/"+f.poza_webp,type:"image/webp"}),l.a.createElement("img",{src:f.poza,alt:f.titlu})),l.a.createElement("div",{style:{maxWidth:"75ch",margin:"0px auto",padding:"0px 3px"},id:"continutArticolDiv"},l.a.createElement(G,{titlu:f.titlu,desc:f.descriere_scurta,data:d,tags:f.tags,categorie:f.denumire_categorie}),l.a.createElement("section",{id:"continut_articol"},l.a.createElement(o.a,{color:"textPrimary",variant:"body1",gutterBottom:!0,dangerouslySetInnerHTML:{__html:f.continut}})),l.a.createElement(I,{postid:f.id})))),l.a.createElement(i.a,{item:!0,xs:12,md:4},l.a.createElement("div",{id:"sidebarArticol"},O!==[]&&O.length>0&&l.a.createElement("div",{className:"whitebg",style:{padding:0,marginBottom:"30px"}},l.a.createElement(o.a,{color:"textPrimary",variant:"h5",component:"h6",style:{borderBottom:"1px solid rgba(180,180,190,.2)",padding:"20px"}},"Ata\u0219amente"),l.a.createElement($,{array:O})),l.a.createElement("div",{className:"whitebg",style:{padding:0}},Array.isArray(E)&&E.length>0&&l.a.createElement(o.a,{color:"textPrimary",variant:"h5",component:"h6",style:{borderBottom:"1px solid rgba(180,180,190,.2)",padding:"20px"}},"Din aceea\u0219i categorie"),Array.isArray(E)&&E.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(K,{titlu:e.titlu,urlfriendly:e.urlfriendly,id:e.id,tags:e.tags}))})))))):l.a.createElement(i.a,{item:!0,xs:12,style:{textAlign:"center"}},l.a.createElement(V.a,null),"Se \xeencarc\u0103...")))}t.default=function(e){var t=Object(L.h)().id;return l.a.createElement(Q,{key:t,post_id:t})}}}]);
//# sourceMappingURL=6.31bd40a2.chunk.js.map