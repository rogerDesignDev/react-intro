(this["webpackJsonpreact-intro"]=this["webpackJsonpreact-intro"]||[]).push([[0],{5:function(e,t,r){e.exports={black:"#0a1021",white:"#fff",gray:"#d9d9d9",gray100:"#fafafe",gray200:"#b3b3b3",purple:"#4329d2",purple200:"#2c179f",success:"#42942d",error:"#c81a1a",borderRadius:".8rem"}},89:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),n=r(25),i=r.n(n),c=r(15),s=r(146),l=r(70),d=r(5),m=r.n(d),u=Object(l.a)({components:{MuiCssBaseline:{styleOverrides:function(){return{html:{fontSize:"62.5%"},body:{color:m.a.black,fontSize:"1.5rem",lineHeight:"2.4rem"}}}},MuiButtonBase:{defaultProps:{disableRipple:!0}}},typography:{body1:{fontSize:"1.5rem",lineHeight:"2.4rem"}}}),b=r(130),h=r(132),p=r(139),j=r(129),g=r(16),x=r(65),f=r.n(x),O=r(140),v=r(134),k=r(6),C=r(141),w=r.p+"static/media/logo.6c099ca5.svg",y=r(1),N=Object(v.a)((function(e){return{header:Object(k.a)({alignItems:"center",borderBottom:".1rem solid"+m.a.gray,display:"flex",height:"5.6rem",marginBottom:"3rem"},e.breakpoints.up("md"),{height:"9rem",marginBottom:"4.8rem"}),wrapper:Object(k.a)({display:"flex",flexWrap:"wrap",width:"100%"},e.breakpoints.up("md"),{marginLeft:"auto",marginRight:"auto",maxWidth:"60rem"}),logo:Object(k.a)({width:"100%"},e.breakpoints.up("md"),{maxWidth:"12.5rem"}),date:Object(k.a)({alignItems:"center",display:"flex"},e.breakpoints.up("md"),{marginLeft:"auto"})}}));function S(e){var t=N(),r=new Intl.DateTimeFormat([],{timeZone:"Europe/Madrid",year:"numeric",month:"numeric",day:"numeric"}).format(new Date);return Object(y.jsx)(O.a,{className:t.header,component:"header",children:Object(y.jsxs)(O.a,{className:t.wrapper,children:[Object(y.jsx)(O.a,{className:t.logo,children:Object(y.jsx)(C.a,{className:t.logoImg,component:"img",image:w,alt:"MyTask",width:"125",height:"29"})}),Object(y.jsx)(O.a,{className:t.date,children:r})]})})}var L=r(10);var R=o.a.createContext();function B(e){var t=function(e,t){var r=o.a.useState(!1),a=Object(L.a)(r,2),n=a[0],i=a[1],c=o.a.useState(!0),s=Object(L.a)(c,2),l=s[0],d=s[1],m=o.a.useState(t),u=Object(L.a)(m,2),b=u[0],h=u[1];return o.a.useEffect((function(){setTimeout((function(){try{var r,a=localStorage.getItem(e);a?r=JSON.parse(a):(localStorage.setItem(e,JSON.stringify(t)),r=t),h(r),d(!1)}catch(n){i(n)}}),1e3)})),{item:b,saveItem:function(t){try{var r=JSON.stringify(t);localStorage.setItem(e,r),h(t)}catch(n){i(n)}},loading:l,error:n}}("TODOS_V1",[]),r=t.item,a=t.saveItem,n=t.loading,i=t.error,s=o.a.useState(""),l=Object(L.a)(s,2),d=l[0],m=l[1],u=o.a.useState(!1),b=Object(L.a)(u,2),h=b[0],p=b[1],j=r.filter((function(e){return!!e.completed})).length,g=r.length,x=[];x=!d.length>=1?r:r.filter((function(e){var t=e.text.toLowerCase(),r=d.toLowerCase();return t.includes(r)}));return Object(y.jsx)(R.Provider,{value:{loading:n,error:i,totalTodos:g,completedTodos:j,searchValue:d,setSearchValue:m,searchedTodos:x,addTodo:function(e){var t=Object(c.a)(r);t.push({completed:!1,text:e}),a(t)},completeTodo:function(e){var t=r.findIndex((function(t){return t.text===e})),o=Object(c.a)(r);o[t].completed?o[t].completed=!1:o[t].completed=!0,a(o)},deleteTodo:function(e){var t=r.findIndex((function(t){return t.text===e})),o=Object(c.a)(r);o.splice(t,1),a(o)},openModal:h,setOpenModal:p},children:e.children})}var T=r(97),z=r(135),W=r(143),I=r(144),M=r.p+"static/media/task.a3abd450.svg",H=r(142),D=Object(v.a)((function(e){return{root:{fill:m.a.purple,stroke:"none",strokeLinecap:"round",strokeLinejoin:"round",transition:e.transitions.create(["stroke","fill"]),height:"2.4rem",width:"2.4rem"}}})),F=function(e){var t=e.className,r=D();return Object(y.jsx)(H.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:Object(y.jsx)("path",{d:"M23.6975 22.281L16.8116 15.3901C18.1691 13.7621 18.9856 11.6815 18.9856 9.40915C18.9856 4.22501 14.731 0.00982666 9.49769 0.00982666C4.26437 0.00982666 0 4.22993 0 9.41407C0 14.5982 4.25453 18.8134 9.48786 18.8134C11.711 18.8134 13.7571 18.051 15.3803 16.7771L22.2908 23.6877C22.6941 24.091 23.2942 24.091 23.6975 23.6877C24.1008 23.2843 24.1008 22.6843 23.6975 22.281ZM2.0166 9.41407C2.0166 5.34152 5.37104 2.03135 9.48786 2.03135C13.6047 2.03135 16.9591 5.34152 16.9591 9.41407C16.9591 13.4866 13.6047 16.7968 9.48786 16.7968C5.37104 16.7968 2.0166 13.4817 2.0166 9.41407Z"})})},P=Object(v.a)((function(e){return{root:{fill:"none",height:"2.4rem",stroke:m.a.purple,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,transition:e.transitions.create(["stroke","fill"]),width:"2.4rem"}}})),V=function(e){var t=e.className,r=P();return Object(y.jsxs)(H.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:[Object(y.jsx)("path",{d:"M18 6L6 18"}),Object(y.jsx)("path",{d:"M6 6L18 18"})]})},Z=Object(v.a)((function(e){return{root:{backgroundPosition:"90% bottom",backgroundRepeat:"no-repeat",backgroundSize:"contain",width:"100%"},wrapper:Object(k.a)({width:"100%"},e.breakpoints.up("md"),{marginLeft:"auto",marginRight:"auto",maxWidth:"60rem"}),title:Object(k.a)({color:m.a.black,fontSize:"3.2rem",fontWeight:700,lineHeight:"4rem",marginBottom:"2rem"},e.breakpoints.up("md"),{fontSize:"4rem",lineHeight:"4.8rem"}),search:Object(k.a)({position:"relative",width:"100%"},e.breakpoints.up("md"),{maxWidth:"39rem"}),input:{display:"flex",marginBottom:"4.8rem",position:"relative",width:"100%","& input":{alignItems:"center",backgroundColor:m.a.white,border:".1rem solid"+m.a.gray,borderRadius:".8rem",boxShadow:"none",color:m.a.black,display:"flex",fontSize:"1.5rem",height:"2.8rem",lineHeight:"2.4rem",padding:"1rem 2rem 1rem 5.5rem",transition:e.transitions.create(["border-color"]),width:"100%","&:hover, &:focus":{borderColor:m.a.black},"&:focus":{fontWeight:600}}},inputValue:{marginBottom:".8rem"},icon:{position:"absolute",left:"1.5rem"},buttonClear:{position:"absolute",right:".5rem",top:".5rem"},result:Object(k.a)({display:"flex",width:"100%",marginBottom:"1.6rem"},e.breakpoints.up("md"),{maxWidth:"39rem"})}}));function J(){var e=Z(),t=Object(a.useContext)(R),r=t.searchValue,o=t.setSearchValue;return Object(y.jsx)(O.a,{className:e.root,style:{backgroundImage:"url(".concat(M,")")},children:Object(y.jsxs)(O.a,{className:e.wrapper,children:[Object(y.jsx)(T.a,{className:e.title,component:"h1",children:"Listado de Tareas"}),Object(y.jsxs)(O.a,{className:e.search,children:[Object(y.jsx)(z.a,{className:0===(null===r||void 0===r?void 0:r.length)?e.input:""===r?Object(y.jsx)(y.Fragment,{}):e.input+" "+e.inputValue,placeholder:"Buscar en la lista de Tareas",startAdornment:Object(y.jsx)(W.a,{className:e.icon,position:"start",children:Object(y.jsx)(F,{})}),onChange:function(e){console.log(e.target.value);var t=e.target.value;o(t)},value:r}),""!==r&&Object(y.jsx)(I.a,{className:e.buttonClear,onClick:function(){o("")},children:Object(y.jsx)(V,{})})]}),""===r?Object(y.jsx)(y.Fragment,{}):Object(y.jsx)(O.a,{className:e.result,children:Object(y.jsxs)(T.a,{className:e.paragrapy,children:['"',Object(y.jsx)("strong",{children:r}),'" Aparece en los siguientes resultados.']})})]})})}var A=Object(v.a)((function(e){return{root:Object(k.a)({display:"flex",fontSize:"1.5rem",lineHeight:"2.4rem",marginBottom:"2.4rem",width:"100%"},e.breakpoints.up("md"),{fontSize:"2rem",marginBottom:"3rem"})}})),E=function(){var e=A(),t=Object(a.useContext)(R),r=t.totalTodos,o=t.completedTodos;return Object(y.jsxs)(T.a,{className:e.root,component:"h2",children:["Has completado ",o," de ",r," Tarea",r>1?"s":""]})},_=Object(v.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",width:"100%"},list:{display:"flex",flexWrap:"wrap",margin:0,padding:0,width:"100%"}}}));function $(e){var t=_();return Object(y.jsx)(O.a,{className:t.root,children:Object(y.jsx)(O.a,{className:t.list,component:"ul",children:e.children})})}var q=r(122),G=r(137),K=r(133),Q=Object(v.a)((function(e){return{root:{fill:m.a.white,height:"2.4rem",stroke:m.a.gray200,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,transition:e.transitions.create(["stroke","fill"]),width:"2.4rem","& circle":{fill:m.a.white,stroke:m.a.gray200,transition:e.transitions.create(["stroke","fill"])}}}})),U=function(e){var t=e.className,r=Q();return Object(y.jsx)(H.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:Object(y.jsx)("circle",{cx:"12",cy:"12",r:"11"})})},X=Object(v.a)((function(e){return{root:{fill:m.a.success,stroke:"none",strokeLinecap:"round",strokeLinejoin:"round",transition:e.transitions.create(["stroke","fill"]),height:"2.4rem",width:"2.4rem"}}})),Y=function(e){var t=e.className,r=X();return Object(y.jsx)(H.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:Object(y.jsx)("path",{d:"M20.4853 3.51469C18.2188 1.24823 15.2053 0 12 0C8.79464 0 5.78119 1.24823 3.51469 3.51469C1.24823 5.78119 0 8.79469 0 12C0 15.2053 1.24823 18.2188 3.51469 20.4853C5.78119 22.7518 8.79469 24 12 24C15.2053 24 18.2188 22.7518 20.4853 20.4853C22.7518 18.2188 24 15.2053 24 12C24 8.79469 22.7518 5.78123 20.4853 3.51469ZM17.7331 9.14405L11.0269 15.8503C10.8896 15.9876 10.7097 16.0562 10.5298 16.0562C10.3498 16.0562 10.1699 15.9876 10.0326 15.8503L6.26691 12.0847C5.99231 11.8101 5.99231 11.3649 6.26691 11.0903C6.54145 10.8157 6.98667 10.8157 7.26127 11.0903L10.5298 14.3588L16.7387 8.14969C17.0133 7.87509 17.4585 7.87509 17.7331 8.14969C18.0077 8.42428 18.0077 8.86945 17.7331 9.14405Z"})})},ee=Object(v.a)((function(e){return{root:{fill:m.a.gray200,height:"2.4rem",stroke:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,transition:e.transitions.create(["stroke","fill"]),width:"2.4rem"}}})),te=function(e){var t=e.className,r=ee();return Object(y.jsx)(H.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:Object(y.jsx)("path",{d:"M12 0C8.79461 0 5.78123 1.24822 3.51476 3.51469C-1.16408 8.19345 -1.16408 15.8064 3.51462 20.4852C5.78109 22.7518 8.79461 24 12 24C15.2052 24 18.2188 22.7518 20.4852 20.4852C25.1641 15.8064 25.1641 8.19345 20.4852 3.51469C18.2188 1.24822 15.2052 0 12 0ZM17.3997 17.3996C17.1866 17.6127 16.9075 17.7192 16.6283 17.7192C16.3492 17.7192 16.0699 17.6127 15.857 17.3996L12 13.5428L8.14305 17.3997C7.92996 17.6127 7.65083 17.7193 7.37163 17.7193C7.09251 17.7193 6.81323 17.6127 6.60036 17.3997C6.17425 16.9737 6.17425 16.283 6.60036 15.8569L10.4572 12L6.60029 8.14305C6.17418 7.71709 6.17418 7.02633 6.60029 6.60029C7.02625 6.17433 7.71702 6.17433 8.14305 6.60029L12 10.4572L15.8568 6.60029C16.2828 6.17433 16.9735 6.17433 17.3996 6.60029C17.8257 7.02625 17.8257 7.71702 17.3996 8.14305L13.5428 12L17.3997 15.8569C17.8257 16.2829 17.8257 16.9737 17.3997 17.3996Z"})})},re=Object(v.a)((function(e){return{item:{alignItems:"center",backgroundPosition:"90% bottom",backgroundRepeat:"no-repeat",backgroundSize:"contain",border:".1rem solid"+m.a.gray,borderRadius:m.a.borderRadius,boxShadow:"0 .2rem 2rem ".concat(Object(q.a)(m.a.black,.1)),display:"flex",flexWrap:"wrap",marginBottom:"2.4rem",padding:"2.5rem 2rem",transition:e.transitions.create(["border-color"]),width:"100%","&:last-child":{marginBottom:0},"&:hover":{borderColor:m.a.purple}},itemCompleted:{borderColor:m.a.success,boxShadow:"0 .2rem 2rem ".concat(Object(q.a)(m.a.success,.3)),"& $paragrapy":{textDecoration:"line-through"}},button:{marginRight:"1.6rem",padding:0,"&:hover":{backgroundColor:"transparent","& $iconCheckbox":{"& circle":{stroke:m.a.purple}}}},iconCheckbox:{paddingLeft:0,"&:hover":{stroke:m.a.purple}},paragrapy:{margin:0},delete:{marginLeft:"auto",padding:0,"&:hover":{backgroundColor:"transparent"}},IconDelete:{"&:hover":{fill:m.a.error}}}}));function ae(e){var t=re(),r=Object(a.useContext)(R).loading;return Object(y.jsxs)(O.a,{className:null!==e&&void 0!==e&&e.completed?t.item+" "+t.itemCompleted:t.item,component:"li",children:[r?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(G.a,{className:t.button,variant:"circular",width:24,height:24}),Object(y.jsx)(G.a,{className:t.paragrapy,variant:"rounded",width:210,height:24}),Object(y.jsx)(G.a,{className:t.delete,variant:"circular",width:24,height:24})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(K.a,{className:t.button,onClick:null===e||void 0===e?void 0:e.onComplete,children:!0===e.completed?Object(y.jsx)(Y,{className:t.iconCheckboxChecked}):Object(y.jsx)(U,{className:t.iconCheckbox})}),Object(y.jsx)(T.a,{className:t.paragrapy,children:null===e||void 0===e?void 0:e.text}),Object(y.jsx)(I.a,{className:t.delete,onClick:null===e||void 0===e?void 0:e.onDelete,children:Object(y.jsx)(te,{className:t.IconDelete})})]}),null===e||void 0===e?void 0:e.children]})}var oe=r(131),ne=r(128),ie=r(145),ce=r(147),se=Object(v.a)((function(e){return{button:{background:m.a.purple,borderRadius:m.a.borderRadius,color:m.a.white,display:"flex",fontSize:"1.5rem",fontWeight:700,height:"5rem",lineHeight:"2.4rem",marginBottom:"3rem",marginLeft:"auto",marginRight:"auto",maxWidth:"20rem",width:"100%",transition:e.transitions.create(["background"]),"&:hover":{background:m.a.purple200}},dialogScrollPaper:{backgroundColor:Object(q.a)(m.a.black,.8)},dialog:Object(k.a)({borderRadius:"1.6rem",margin:".8rem 1.2rem",maxHeight:"calc(100% - 2.4rem)",maxWidth:"calc(100% - 1.6rem)",width:"100%"},e.breakpoints.up("sm"),{margin:"3.2rem",maxHeight:"calc(100% - 6.4rem)",maxWidth:"60rem"}),dialogClose:{display:"flex",justifyContent:"flex-end"},dialogTitle:Object(k.a)({padding:"1.6rem 1.2rem"},e.breakpoints.up("md"),{padding:"2.4rem 4.8rem"}),dialogContent:Object(k.a)({backgroundColor:m.a.gray100,borderRadius:m.a.borderRadius,padding:"1.2rem",margin:"0 1.2rem 1.2rem 1.2rem"},e.breakpoints.up("md"),{margin:"0 4.8rem 2.4rem 4.8rem",padding:"1.6rem"}),buttonClose:{backgroundColor:m.a.gray100,borderRadius:"50%",height:"3.2rem",width:"3.2rem"},title:{fontSize:"2.2rem",fontWeight:700,lineHeight:"3.2rem"},subtitle:{marginBottom:"1.6rem"},input:{display:"flex",marginBottom:"2.4rem",position:"relative",width:"100%","& input":{alignItems:"center",backgroundColor:m.a.white,border:".1rem solid"+m.a.gray,borderRadius:".8rem",boxShadow:"none",color:m.a.black,display:"flex",fontSize:"1.5rem",height:"2.8rem",lineHeight:"2.4rem",padding:"1rem 2rem",transition:e.transitions.create(["border-color"]),width:"100%","&:hover, &:focus":{borderColor:m.a.black},"&:focus":{fontWeight:600}}},textarea:{alignItems:"center",backgroundColor:m.a.white,border:".1rem solid"+m.a.gray,borderRadius:".8rem",boxShadow:"none",color:m.a.black,display:"flex",fontSize:"1.5rem",lineHeight:"2.4rem",marginBottom:"2.4rem",padding:"1rem 2rem",position:"relative",transition:e.transitions.create(["border-color"]),width:"100%","&:hover, &:focus":{borderColor:m.a.black},"&:focus":{fontWeight:600}},buttonSave:{marginBottom:0}}}));function le(e){var t=e.open,r=e.setOpen,n=se(),i=Object(a.useState)(""),c=Object(L.a)(i,2),s=c[0],l=c[1],d=Object(a.useContext)(R),m=d.addTodo,u=d.setOpenModal,b=o.a.useState("paper"),h=Object(L.a)(b,2),p=h[0],j=h[1],g=function(e){return function(){r(!0),j(e)}};return Object(y.jsxs)(a.Fragment,{children:[Object(y.jsx)(K.a,{className:n.button,onClick:g("paper"),children:"A\xf1adir Tarea"}),Object(y.jsxs)(oe.a,{PaperProps:{classes:{root:n.dialog}},BackdropProps:{classes:{root:n.diagoScrollPaper}},open:t,scroll:p,"aria-labelledby":"task-dialog-title","aria-describedby":"task-dialog-description",children:[Object(y.jsxs)(ne.a,{id:"task-dialog-title",component:"div",children:[Object(y.jsx)(O.a,{className:n.dialogClose,children:Object(y.jsx)(K.a,{className:n.buttonClose,onClick:function(){r(!1)},"aria-label":"close",children:Object(y.jsx)(V,{})})}),Object(y.jsx)(T.a,{className:n.title,component:"h2",children:"Crear una nueva Tarea"})]}),Object(y.jsx)(ie.a,{children:Object(y.jsxs)(O.a,{id:"task-dialog-description",children:[Object(y.jsx)(T.a,{className:n.subtitle,component:"h3",children:"T\xedtulo de la Tarea:"}),Object(y.jsxs)(O.a,{className:n.form,component:"form",onSubmit:function(e){e.preventDefault(),m(s),u(!1),l("")},children:[Object(y.jsx)(ce.a,{className:n.textarea,"aria-label":"Insertar texto de la Tarea",minRows:3,placeholder:"Por ejemplo: Vacaciones",onChange:function(e){l(e.target.value)},value:s}),Object(y.jsx)(K.a,{className:n.button+" "+n.buttonSave,onClick:g("paper"),type:"submit",children:"Crear Tarea"})]})]})})]})]})}var de=Object(v.a)((function(e){var t;return{root:{width:"100%"},wrapper:Object(k.a)({display:"flex",flexWrap:"wrap",width:"100%"},e.breakpoints.up("md"),{marginLeft:"auto",marginRight:"auto",maxWidth:"60rem"}),taskResult:(t={backgroundColor:m.a.white,border:".1rem solid"+m.a.gray,borderRadius:m.a.borderRadius,display:"flex",flexWrap:"wrap",marginBottom:"2.4rem",marginTop:"3rem",padding:"2rem",position:"relative",width:"100%"},Object(k.a)(t,e.breakpoints.up("md"),{marginBottom:"3rem",padding:"3rem"}),Object(k.a)(t,"&::before",{backgroundColor:m.a.white,border:".1rem solid"+m.a.gray,borderBottom:0,borderTopLeftRadius:m.a.borderRadius,borderTopRightRadius:m.a.borderRadius,content:'""',display:"block",height:"1.5rem",left:0,marginLeft:"auto",marginRight:"auto",position:"absolute",right:0,top:"-1.6rem",width:"95%"}),Object(k.a)(t,"&::after",{backgroundColor:m.a.white,border:".1rem solid"+m.a.gray,borderBottom:0,borderTopLeftRadius:".8rem",borderTopRightRadius:".8rem",content:'""',display:"block",height:"1.5rem",left:0,marginLeft:"auto",marginRight:"auto",position:"absolute",right:0,top:"-3.1rem",width:"90%"}),t),taskResultParagraph:{marginBottom:"3rem",textAlign:"center",width:"100%"}}}));function me(){var e=de(),t=Object(a.useContext)(R),r=t.error,o=t.loading,n=t.totalTodos,i=t.completedTodos,c=t.searchedTodos,s=t.completeTodo,l=t.deleteTodo,d=t.openModal,m=t.setOpenModal;return Object(y.jsx)(O.a,{className:e.main,component:"main",children:Object(y.jsxs)(O.a,{className:e.wrapper,children:[Object(y.jsx)(J,{}),Object(y.jsxs)(O.a,{className:e.taskResult,children:[0===(null===c||void 0===c?void 0:c.length)?Object(y.jsxs)(T.a,{className:e.taskResultParagraph,component:"p",children:[r&&Object(y.jsxs)(y.Fragment,{children:["Hubo un ",Object(y.jsx)("strong",{children:"error"}),"..."]}),o&&Object(y.jsxs)(y.Fragment,{children:["Cargando ",Object(y.jsx)("strong",{children:"Tareas"}),"..."]}),!o&&!(null!==c&&void 0!==c&&c.length)&&Object(y.jsxs)(y.Fragment,{children:["Todavia no hay ",Object(y.jsx)("strong",{children:"tareas"})," disponibles, prueba a\xf1adir una."]})]}):Object(y.jsx)(E,{total:n,completed:i}),o?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)($,{children:Object(y.jsx)(ae,{})})}):Object(y.jsx)($,{children:c.map((function(e,t){return Object(y.jsx)(ae,{text:null===e||void 0===e?void 0:e.text,completed:null===e||void 0===e?void 0:e.completed,onComplete:function(){return s(null===e||void 0===e?void 0:e.text)},onDelete:function(){return l(null===e||void 0===e?void 0:e.text)}},(null===e||void 0===e?void 0:e.text)+t)}))})]}),Object(y.jsx)(le,{open:d,setOpen:m})]})})}var ue=r(138),be=Object(v.a)((function(e){return{root:{fill:m.a.purple,stroke:"none",strokeLinecap:"round",strokeLinejoin:"round",transition:e.transitions.create(["stroke","fill"]),height:"2.4rem",width:"2.4rem"}}})),he=function(e){var t=e.className,r=be();return Object(y.jsx)(H.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:Object(y.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"})})},pe=Object(v.a)((function(e){return{root:{fill:m.a.purple,stroke:"none",strokeLinecap:"round",strokeLinejoin:"round",transition:e.transitions.create(["stroke","fill"]),height:"2.4rem",width:"2.4rem"}}})),je=function(e){var t=e.className,r=pe();return Object(y.jsx)(H.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:Object(y.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},ge=Object(v.a)((function(e){return{footer:{backgroundColor:m.a.gray100,color:m.a.purple},wrapper:Object(k.a)({display:"flex",flexWrap:"wrap",width:"100%"},e.breakpoints.up("md"),{marginLeft:"auto",marginRight:"auto",maxWidth:"60rem"}),footerInner:{alignItems:"center",display:"flex",flexWrap:"wrap",padding:"3rem 0",width:"100%"},copy:{fontSize:"1.5rem"},social:{alignItems:"center",display:"flex",flexWrap:"wrap",marginLeft:"auto"},link:{display:"flex",marginRight:"1.6rem","&:last-child":{marginRight:0}},icon:{"&:hover":{fill:m.a.purple200}}}}));function xe(){var e=ge();return Object(y.jsx)(O.a,{className:e.footer,component:"footer",children:Object(y.jsx)(O.a,{className:e.wrapper,children:Object(y.jsxs)(O.a,{className:e.footerInner,children:[Object(y.jsxs)(T.a,{className:e.copy,component:"p",children:["Desarrollado por ",Object(y.jsx)("strong",{children:"Roger Fernandes Bomfim"})]}),Object(y.jsxs)(O.a,{className:e.social,children:[Object(y.jsx)(ue.a,{className:e.link,href:"https://es.linkedin.com/in/alyenstudio",target:"_blank",color:"inherit",children:Object(y.jsx)(je,{className:e.icon})}),Object(y.jsx)(ue.a,{className:e.link,href:"https://github.com/rogerDesignDev",target:"_blank",color:"inherit",children:Object(y.jsx)(he,{className:e.icon})})]})]})})})}var fe=Object(v.a)((function(e){return{root:{width:"100%"}}}));var Oe=function(){var e=fe();return Object(y.jsxs)(O.a,{className:e.root,children:[Object(y.jsx)(S,{}),Object(y.jsx)(B,{children:Object(y.jsx)(me,{})}),Object(y.jsx)(xe,{})]})},ve=Object(g.b)({plugins:[].concat(Object(c.a)(Object(h.a)().plugins),[f()()])});var ke=function(){return Object(y.jsx)(s.a,{theme:u,children:Object(y.jsx)(j.a,{injectFirst:!0,children:Object(y.jsxs)(p.b,{jss:ve,children:[Object(y.jsx)(b.a,{}),Object(y.jsx)(Oe,{})]})})})};i.a.render(Object(y.jsx)(ke,{}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.d7243ed2.chunk.js.map