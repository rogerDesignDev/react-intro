(this["webpackJsonpreact-intro"]=this["webpackJsonpreact-intro"]||[]).push([[0],{5:function(e,t,r){e.exports={black:"#0a1021",white:"#fff",gray:"#d9d9d9",gray100:"#fafafe",gray200:"#b3b3b3",purple:"#4329d2",purple200:"#2c179f",success:"#42942d",error:"#c81a1a",borderRadius:".8rem"}},89:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),i=r(25),n=r.n(i),s=r(15),c=r(146),l=r(70),d=r(5),m=r.n(d),u=Object(l.a)({components:{MuiCssBaseline:{styleOverrides:function(){return{html:{fontSize:"62.5%"},body:{color:m.a.black,fontSize:"1.5rem",lineHeight:"2.4rem"}}}},MuiButtonBase:{defaultProps:{disableRipple:!0}}},typography:{body1:{fontSize:"1.5rem",lineHeight:"2.4rem"}}}),h=r(130),b=r(132),p=r(139),g=r(129),j=r(16),f=r(65),x=r.n(f),O=r(6),k=r(140),v=r(97),C=r(134),w=r(10);function y(){var e=function(e,t){var r=o.a.useState(!1),a=Object(w.a)(r,2),i=a[0],n=a[1],s=o.a.useState(!0),c=Object(w.a)(s,2),l=c[0],d=c[1],m=o.a.useState(t),u=Object(w.a)(m,2),h=u[0],b=u[1];return o.a.useEffect((function(){setTimeout((function(){try{var r,a=localStorage.getItem(e);a?r=JSON.parse(a):(localStorage.setItem(e,JSON.stringify(t)),r=t),b(r),d(!1)}catch(i){n(i)}}),1e3)})),{item:h,saveItem:function(t){try{var r=JSON.stringify(t);localStorage.setItem(e,r),b(t)}catch(i){n(i)}},loading:l,error:i}}("TODOS_V1",[]),t=e.item,r=e.saveItem,a=e.loading,i=e.error,n=o.a.useState(""),c=Object(w.a)(n,2),l=c[0],d=c[1],m=o.a.useState(!1),u=Object(w.a)(m,2),h=u[0],b=u[1],p=t.filter((function(e){return!!e.completed})).length,g=t.length,j=[];j=!l.length>=1?t:t.filter((function(e){var t=e.text.toLowerCase(),r=l.toLowerCase();return t.includes(r)}));return{loading:a,error:i,totalTodos:g,completedTodos:p,searchValue:l,setSearchValue:d,searchedTodos:j,addTodo:function(e){var a=Object(s.a)(t);a.push({completed:!1,text:e}),r(a)},completeTodo:function(e){var a=t.findIndex((function(t){return t.text===e})),o=Object(s.a)(t);o[a].completed?o[a].completed=!1:o[a].completed=!0,r(o)},deleteTodo:function(e){var a=t.findIndex((function(t){return t.text===e})),o=Object(s.a)(t);o.splice(a,1),r(o)},openModal:h,setOpenModal:b}}var N=r(141),R=r.p+"static/media/logo.6c099ca5.svg",L=r(1),S=Object(C.a)((function(e){return{header:Object(O.a)({alignItems:"center",borderBottom:".1rem solid"+m.a.gray,display:"flex",height:"5.6rem",marginBottom:"3rem"},e.breakpoints.up("md"),{height:"9rem",marginBottom:"4.8rem"}),wrapper:Object(O.a)({display:"flex",flexWrap:"wrap",paddingLeft:"2rem",paddingRight:"2rem",width:"100%"},e.breakpoints.up("sm"),{marginLeft:"auto",marginRight:"auto",maxWidth:"60rem",paddingLeft:0,paddingRight:0}),logo:{maxWidth:"12.5rem",width:"100%"},date:{alignItems:"center",display:"flex",marginLeft:"auto"}}}));function T(e){var t=S(),r=new Intl.DateTimeFormat([],{timeZone:"Europe/Madrid",year:"numeric",month:"numeric",day:"numeric"}).format(new Date);return Object(L.jsx)(k.a,{className:t.header,component:"header",children:Object(L.jsxs)(k.a,{className:t.wrapper,children:[Object(L.jsx)(k.a,{className:t.logo,children:Object(L.jsx)(N.a,{className:t.logoImg,component:"img",image:R,alt:"MyTask",width:"125",height:"29"})}),Object(L.jsx)(k.a,{className:t.date,children:r})]})})}var B=r(135),z=r(143),W=r(144),I=r.p+"static/media/task.a3abd450.svg",M=r(142),H=Object(C.a)((function(e){return{root:{fill:m.a.purple,stroke:"none",strokeLinecap:"round",strokeLinejoin:"round",transition:e.transitions.create(["stroke","fill"]),height:"2.4rem",width:"2.4rem"}}})),F=function(e){var t=e.className,r=H();return Object(L.jsx)(M.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:Object(L.jsx)("path",{d:"M23.6975 22.281L16.8116 15.3901C18.1691 13.7621 18.9856 11.6815 18.9856 9.40915C18.9856 4.22501 14.731 0.00982666 9.49769 0.00982666C4.26437 0.00982666 0 4.22993 0 9.41407C0 14.5982 4.25453 18.8134 9.48786 18.8134C11.711 18.8134 13.7571 18.051 15.3803 16.7771L22.2908 23.6877C22.6941 24.091 23.2942 24.091 23.6975 23.6877C24.1008 23.2843 24.1008 22.6843 23.6975 22.281ZM2.0166 9.41407C2.0166 5.34152 5.37104 2.03135 9.48786 2.03135C13.6047 2.03135 16.9591 5.34152 16.9591 9.41407C16.9591 13.4866 13.6047 16.7968 9.48786 16.7968C5.37104 16.7968 2.0166 13.4817 2.0166 9.41407Z"})})},D=Object(C.a)((function(e){return{root:{fill:"none",height:"2.4rem",stroke:m.a.purple,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,transition:e.transitions.create(["stroke","fill"]),width:"2.4rem"}}})),P=function(e){var t=e.className,r=D();return Object(L.jsxs)(M.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:[Object(L.jsx)("path",{d:"M18 6L6 18"}),Object(L.jsx)("path",{d:"M6 6L18 18"})]})},V=Object(C.a)((function(e){return{root:Object(O.a)({backgroundPosition:"90% bottom",backgroundRepeat:"no-repeat",backgroundSize:"12rem",width:"100%"},e.breakpoints.up("md"),{backgroundSize:"contain"}),wrapper:Object(O.a)({width:"100%"},e.breakpoints.up("sm"),{marginLeft:"auto",marginRight:"auto",maxWidth:"60rem"}),title:Object(O.a)({color:m.a.black,fontSize:"3.2rem",fontWeight:700,lineHeight:"4rem",marginBottom:"2rem"},e.breakpoints.up("md"),{fontSize:"4rem",lineHeight:"4.8rem"}),search:Object(O.a)({position:"relative",width:"100%"},e.breakpoints.up("md"),{maxWidth:"39rem"}),input:{display:"flex",marginBottom:"4.8rem",position:"relative",width:"100%","& input":{alignItems:"center",backgroundColor:m.a.white,border:".1rem solid"+m.a.gray,borderRadius:".8rem",boxShadow:"none",color:m.a.black,display:"flex",fontSize:"1.5rem",height:"2.8rem",lineHeight:"2.4rem",padding:"1rem 2rem 1rem 5.5rem",transition:e.transitions.create(["border-color"]),width:"100%","&:hover, &:focus":{borderColor:m.a.black},"&:focus":{fontWeight:600}}},inputValue:{marginBottom:".8rem"},icon:{position:"absolute",left:"1.5rem"},buttonClear:{position:"absolute",right:".5rem",top:".5rem"},result:Object(O.a)({display:"flex",width:"100%",marginBottom:"1.6rem"},e.breakpoints.up("md"),{maxWidth:"39rem"})}}));function Z(e){var t=e.searchValue,r=e.setSearchValue,a=e.searchResult,o=V();return Object(L.jsx)(k.a,{className:o.root,style:{backgroundImage:"url(".concat(I,")")},children:Object(L.jsxs)(k.a,{className:o.wrapper,children:[Object(L.jsx)(v.a,{className:o.title,component:"h1",children:"Listado de Tareas"}),Object(L.jsxs)(k.a,{className:o.search,children:[Object(L.jsx)(B.a,{className:0===(null===a||void 0===a?void 0:a.length)||""===t?o.input:o.input+" "+o.inputValue,placeholder:"Buscar en la lista de Tareas",startAdornment:Object(L.jsx)(z.a,{className:o.icon,position:"start",children:Object(L.jsx)(F,{})}),onChange:function(e){var t=e.target.value;r(t)},value:t}),""!==t&&Object(L.jsx)(W.a,{className:o.buttonClear,onClick:function(){r("")},children:Object(L.jsx)(P,{})})]}),0===a.length||""===t?Object(L.jsx)(L.Fragment,{}):Object(L.jsx)(k.a,{className:o.result,children:Object(L.jsxs)(v.a,{className:o.paragrapy,children:['"',Object(L.jsx)("strong",{children:t}),'" Aparece en los siguientes resultados.']})})]})})}var A=Object(C.a)((function(e){return{root:Object(O.a)({display:"flex",fontSize:"1.5rem",lineHeight:"2.4rem",marginBottom:"2.4rem",width:"100%"},e.breakpoints.up("md"),{fontSize:"2rem",marginBottom:"3rem"})}})),J=function(e){var t=e.totalTodos,r=e.completedTodos,a=A();return Object(L.jsxs)(v.a,{className:a.root,component:"h2",children:["Has completado ",r," de ",t," Tarea",t>1?"s":""]})},E=Object(C.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",width:"100%"},list:{display:"flex",flexWrap:"wrap",margin:0,padding:0,width:"100%"}}}));function $(e){var t=e.children,r=E();return Object(L.jsx)(k.a,{className:r.root,children:Object(L.jsx)(k.a,{className:r.list,component:"ul",children:t})})}var _=r(122),q=r(137),G=r(133),K=Object(C.a)((function(e){return{root:{fill:m.a.white,height:"2.4rem",stroke:m.a.gray200,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,transition:e.transitions.create(["stroke","fill"]),width:"2.4rem","& circle":{fill:m.a.white,stroke:m.a.gray200,transition:e.transitions.create(["stroke","fill"])}}}})),Q=function(e){var t=e.className,r=K();return Object(L.jsx)(M.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:Object(L.jsx)("circle",{cx:"12",cy:"12",r:"11"})})},U=Object(C.a)((function(e){return{root:{fill:m.a.success,stroke:"none",strokeLinecap:"round",strokeLinejoin:"round",transition:e.transitions.create(["stroke","fill"]),height:"2.4rem",width:"2.4rem"}}})),X=function(e){var t=e.className,r=U();return Object(L.jsx)(M.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:Object(L.jsx)("path",{d:"M20.4853 3.51469C18.2188 1.24823 15.2053 0 12 0C8.79464 0 5.78119 1.24823 3.51469 3.51469C1.24823 5.78119 0 8.79469 0 12C0 15.2053 1.24823 18.2188 3.51469 20.4853C5.78119 22.7518 8.79469 24 12 24C15.2053 24 18.2188 22.7518 20.4853 20.4853C22.7518 18.2188 24 15.2053 24 12C24 8.79469 22.7518 5.78123 20.4853 3.51469ZM17.7331 9.14405L11.0269 15.8503C10.8896 15.9876 10.7097 16.0562 10.5298 16.0562C10.3498 16.0562 10.1699 15.9876 10.0326 15.8503L6.26691 12.0847C5.99231 11.8101 5.99231 11.3649 6.26691 11.0903C6.54145 10.8157 6.98667 10.8157 7.26127 11.0903L10.5298 14.3588L16.7387 8.14969C17.0133 7.87509 17.4585 7.87509 17.7331 8.14969C18.0077 8.42428 18.0077 8.86945 17.7331 9.14405Z"})})},Y=Object(C.a)((function(e){return{root:{fill:m.a.gray200,height:"2.4rem",stroke:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,transition:e.transitions.create(["stroke","fill"]),width:"2.4rem"}}})),ee=function(e){var t=e.className,r=Y();return Object(L.jsx)(M.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:Object(L.jsx)("path",{d:"M12 0C8.79461 0 5.78123 1.24822 3.51476 3.51469C-1.16408 8.19345 -1.16408 15.8064 3.51462 20.4852C5.78109 22.7518 8.79461 24 12 24C15.2052 24 18.2188 22.7518 20.4852 20.4852C25.1641 15.8064 25.1641 8.19345 20.4852 3.51469C18.2188 1.24822 15.2052 0 12 0ZM17.3997 17.3996C17.1866 17.6127 16.9075 17.7192 16.6283 17.7192C16.3492 17.7192 16.0699 17.6127 15.857 17.3996L12 13.5428L8.14305 17.3997C7.92996 17.6127 7.65083 17.7193 7.37163 17.7193C7.09251 17.7193 6.81323 17.6127 6.60036 17.3997C6.17425 16.9737 6.17425 16.283 6.60036 15.8569L10.4572 12L6.60029 8.14305C6.17418 7.71709 6.17418 7.02633 6.60029 6.60029C7.02625 6.17433 7.71702 6.17433 8.14305 6.60029L12 10.4572L15.8568 6.60029C16.2828 6.17433 16.9735 6.17433 17.3996 6.60029C17.8257 7.02625 17.8257 7.71702 17.3996 8.14305L13.5428 12L17.3997 15.8569C17.8257 16.2829 17.8257 16.9737 17.3997 17.3996Z"})})},te=Object(C.a)((function(e){return{item:{alignItems:"center",backgroundPosition:"90% bottom",backgroundRepeat:"no-repeat",backgroundSize:"contain",border:".1rem solid"+m.a.gray,borderRadius:m.a.borderRadius,boxShadow:"0 .2rem 2rem ".concat(Object(_.a)(m.a.black,.1)),display:"flex",flexWrap:"wrap",marginBottom:"2.4rem",padding:"2.5rem 2rem",transition:e.transitions.create(["border-color"]),width:"100%","&:last-child":{marginBottom:0},"&:hover":{borderColor:m.a.purple}},itemCompleted:{borderColor:m.a.success,boxShadow:"0 .2rem 2rem ".concat(Object(_.a)(m.a.success,.3)),"& $paragrapy":{textDecoration:"line-through"}},button:{marginRight:"1.6rem",padding:0,"&:hover":{backgroundColor:"transparent","& $iconCheckbox":{"& circle":{stroke:m.a.purple}}}},iconCheckbox:{paddingLeft:0,"&:hover":{stroke:m.a.purple}},paragrapy:{margin:0},delete:{marginLeft:"auto",padding:0,"&:hover":{backgroundColor:"transparent"}},IconDelete:{"&:hover":{fill:m.a.error}}}}));function re(e){var t=e.completed,r=e.loading,a=e.onComplete,o=e.text,i=e.onDelete,n=e.children,s=te();return Object(L.jsxs)(k.a,{className:t?s.item+" "+s.itemCompleted:s.item,component:"li",children:[r?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(q.a,{className:s.button,variant:"circular",width:24,height:24}),Object(L.jsx)(q.a,{className:s.paragrapy,variant:"rounded",width:150,height:24}),Object(L.jsx)(q.a,{className:s.delete,variant:"circular",width:24,height:24})]}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(G.a,{className:s.button,onClick:a,children:!0===t?Object(L.jsx)(X,{className:s.iconCheckboxChecked}):Object(L.jsx)(Q,{className:s.iconCheckbox})}),Object(L.jsx)(v.a,{className:s.paragrapy,children:o}),Object(L.jsx)(W.a,{className:s.delete,onClick:i,children:Object(L.jsx)(ee,{className:s.IconDelete})})]}),n]})}var ae=r(131),oe=r(128),ie=r(145),ne=r(147),se=Object(C.a)((function(e){return{button:{background:m.a.purple,borderRadius:m.a.borderRadius,color:m.a.white,display:"flex",fontSize:"1.5rem",fontWeight:700,height:"5rem",lineHeight:"2.4rem",marginBottom:"3rem",marginLeft:"auto",marginRight:"auto",maxWidth:"20rem",width:"100%",transition:e.transitions.create(["background"]),"&:hover":{background:m.a.purple200}},dialogScrollPaper:{backgroundColor:Object(_.a)(m.a.black,.8)},dialog:Object(O.a)({borderRadius:"1.6rem",margin:".8rem 1.2rem",maxHeight:"calc(100% - 2.4rem)",maxWidth:"calc(100% - 1.6rem)",width:"100%"},e.breakpoints.up("sm"),{margin:"3.2rem",maxHeight:"calc(100% - 6.4rem)",maxWidth:"60rem"}),dialogClose:{display:"flex",justifyContent:"flex-end"},dialogTitle:Object(O.a)({padding:"1.6rem 1.2rem"},e.breakpoints.up("md"),{padding:"2.4rem 4.8rem"}),dialogContent:Object(O.a)({backgroundColor:m.a.gray100,borderRadius:m.a.borderRadius,padding:"1.2rem",margin:"0 1.2rem 1.2rem 1.2rem"},e.breakpoints.up("md"),{margin:"0 4.8rem 2.4rem 4.8rem",padding:"1.6rem"}),buttonClose:{backgroundColor:m.a.gray100,borderRadius:"50%",height:"3.2rem",width:"3.2rem"},title:{fontSize:"2.2rem",fontWeight:700,lineHeight:"3.2rem"},subtitle:{marginBottom:"1.6rem"},input:{display:"flex",marginBottom:"2.4rem",position:"relative",width:"100%","& input":{alignItems:"center",backgroundColor:m.a.white,border:".1rem solid"+m.a.gray,borderRadius:".8rem",boxShadow:"none",color:m.a.black,display:"flex",fontSize:"1.5rem",height:"2.8rem",lineHeight:"2.4rem",padding:"1rem 2rem",transition:e.transitions.create(["border-color"]),width:"100%","&:hover, &:focus":{borderColor:m.a.black},"&:focus":{fontWeight:600}}},textarea:{alignItems:"center",backgroundColor:m.a.white,border:".1rem solid"+m.a.gray,borderRadius:".8rem",boxShadow:"none",color:m.a.black,display:"flex",fontSize:"1.5rem",lineHeight:"2.4rem",marginBottom:"2.4rem",padding:"1rem 2rem",position:"relative",transition:e.transitions.create(["border-color"]),width:"100%","&:hover, &:focus":{borderColor:m.a.black},"&:focus":{fontWeight:600}},buttonSave:{marginBottom:0}}}));function ce(e){var t=e.openModal,r=e.setOpenModal,i=e.addTodo,n=se(),s=Object(a.useState)(""),c=Object(w.a)(s,2),l=c[0],d=c[1],m=o.a.useState("paper"),u=Object(w.a)(m,2),h=u[0],b=u[1],p=function(e){return function(){r(!0),b(e)}};return Object(L.jsxs)(a.Fragment,{children:[Object(L.jsx)(G.a,{className:n.button,onClick:p("paper"),children:"A\xf1adir Tarea"}),Object(L.jsxs)(ae.a,{PaperProps:{classes:{root:n.dialog}},BackdropProps:{classes:{root:n.diagoScrollPaper}},open:t,scroll:h,"aria-labelledby":"task-dialog-title","aria-describedby":"task-dialog-description",children:[Object(L.jsxs)(oe.a,{id:"task-dialog-title",component:"div",children:[Object(L.jsx)(k.a,{className:n.dialogClose,children:Object(L.jsx)(G.a,{className:n.buttonClose,onClick:function(){r(!1)},"aria-label":"close",children:Object(L.jsx)(P,{})})}),Object(L.jsx)(v.a,{className:n.title,component:"h2",children:"Crear una nueva Tarea"})]}),Object(L.jsx)(ie.a,{children:Object(L.jsxs)(k.a,{id:"task-dialog-description",children:[Object(L.jsx)(v.a,{className:n.subtitle,component:"h3",children:"T\xedtulo de la Tarea:"}),Object(L.jsxs)(k.a,{className:n.form,component:"form",onSubmit:function(e){e.preventDefault(),i(l),r(!1),d("")},children:[Object(L.jsx)(ne.a,{className:n.textarea,"aria-label":"Insertar texto de la Tarea",minRows:3,placeholder:"Por ejemplo: Vacaciones",onChange:function(e){d(e.target.value)},value:l}),Object(L.jsx)(G.a,{className:n.button+" "+n.buttonSave,onClick:p("paper"),type:"submit",children:"Crear Tarea"})]})]})})]})]})}var le=r(138),de=Object(C.a)((function(e){return{root:{fill:m.a.purple,stroke:"none",strokeLinecap:"round",strokeLinejoin:"round",transition:e.transitions.create(["stroke","fill"]),height:"2.4rem",width:"2.4rem"}}})),me=function(e){var t=e.className,r=de();return Object(L.jsx)(M.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:Object(L.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"})})},ue=Object(C.a)((function(e){return{root:{fill:m.a.purple,stroke:"none",strokeLinecap:"round",strokeLinejoin:"round",transition:e.transitions.create(["stroke","fill"]),height:"2.4rem",width:"2.4rem"}}})),he=function(e){var t=e.className,r=ue();return Object(L.jsx)(M.a,{className:t?r.root+" "+t:r.root,fontSize:"inherit",viewBox:"0 0 24 24",children:Object(L.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},be=Object(C.a)((function(e){return{footer:{backgroundColor:m.a.gray100,color:m.a.purple},wrapper:Object(O.a)({display:"flex",flexWrap:"wrap",paddingLeft:"2rem",paddingRight:"2rem",width:"100%"},e.breakpoints.up("sm"),{marginLeft:"auto",marginRight:"auto",maxWidth:"60rem",paddingLeft:0,paddingRight:0}),footerInner:{alignItems:"center",display:"flex",flexWrap:"wrap",padding:"3rem 0",width:"100%"},copy:Object(O.a)({fontSize:"1.5rem",width:"100%",textAlign:"center",marginBottom:"1.6rem"},e.breakpoints.up("md"),{marginBottom:0,textAlign:"letf",width:"auto"}),social:Object(O.a)({alignItems:"center",display:"flex",flexWrap:"wrap",marginLeft:"auto",marginRight:"auto"},e.breakpoints.up("md"),{marginLeft:"auto",marginRight:0}),link:{display:"flex",marginRight:"1.6rem","&:last-child":{marginRight:0}},icon:{"&:hover":{fill:m.a.purple200}}}}));function pe(){var e=be();return Object(L.jsx)(k.a,{className:e.footer,component:"footer",children:Object(L.jsx)(k.a,{className:e.wrapper,children:Object(L.jsxs)(k.a,{className:e.footerInner,children:[Object(L.jsxs)(v.a,{className:e.copy,component:"p",children:["Desarrollado por ",Object(L.jsx)("strong",{children:"Roger Fernandes Bomfim"})]}),Object(L.jsxs)(k.a,{className:e.social,children:[Object(L.jsx)(le.a,{className:e.link,href:"https://es.linkedin.com/in/alyenstudio",target:"_blank",color:"inherit",children:Object(L.jsx)(he,{className:e.icon})}),Object(L.jsx)(le.a,{className:e.link,href:"https://github.com/rogerDesignDev",target:"_blank",color:"inherit",children:Object(L.jsx)(me,{className:e.icon})})]})]})})})}var ge=Object(C.a)((function(e){var t;return{root:{width:"100%"},wrapper:Object(O.a)({display:"flex",flexWrap:"wrap",paddingLeft:"2rem",paddingRight:"2rem",width:"100%"},e.breakpoints.up("sm"),{marginLeft:"auto",marginRight:"auto",maxWidth:"60rem",paddingLeft:0,paddingRight:0}),taskResult:(t={backgroundColor:m.a.white,border:".1rem solid"+m.a.gray,borderRadius:m.a.borderRadius,display:"flex",flexWrap:"wrap",marginBottom:"2.4rem",marginTop:"3rem",padding:"2rem",position:"relative",width:"100%"},Object(O.a)(t,e.breakpoints.up("md"),{marginBottom:"3rem",padding:"3rem"}),Object(O.a)(t,"&::before",{backgroundColor:m.a.white,border:".1rem solid"+m.a.gray,borderBottom:0,borderTopLeftRadius:m.a.borderRadius,borderTopRightRadius:m.a.borderRadius,content:'""',display:"block",height:"1.5rem",left:0,marginLeft:"auto",marginRight:"auto",position:"absolute",right:0,top:"-1.6rem",width:"95%"}),Object(O.a)(t,"&::after",{backgroundColor:m.a.white,border:".1rem solid"+m.a.gray,borderBottom:0,borderTopLeftRadius:".8rem",borderTopRightRadius:".8rem",content:'""',display:"block",height:"1.5rem",left:0,marginLeft:"auto",marginRight:"auto",position:"absolute",right:0,top:"-3.1rem",width:"90%"}),t),taskResultNoitem:{alignItems:"center",minHeight:"19.2rem","& $taskResultParagraph":{margin:0}},taskResultParagraph:{marginBottom:"3rem",textAlign:"center",width:"100%"}}}));var je=function(){var e=ge(),t=y(),r=t.error,a=t.loading,o=t.searchedTodos,i=t.completeTodo,n=t.deleteTodo,s=t.openModal,c=t.setOpenModal,l=t.totalTodos,d=t.completedTodos,m=t.searchValue,u=t.setSearchValue,h=t.addTodo;return Object(L.jsxs)(k.a,{className:e.root,children:[Object(L.jsx)(T,{}),Object(L.jsx)(k.a,{className:e.main,component:"main",children:Object(L.jsxs)(k.a,{className:e.wrapper,children:[Object(L.jsx)(Z,{searchValue:m,setSearchValue:u,searchResult:o}),Object(L.jsxs)(k.a,{className:a||null!==o&&void 0!==o&&o.length?e.taskResult:e.taskResult+" "+e.taskResultNoitem,children:[0===(null===o||void 0===o?void 0:o.length)?Object(L.jsxs)(v.a,{className:e.taskResultParagraph,component:"p",children:[r&&Object(L.jsxs)(L.Fragment,{children:["Hubo un ",Object(L.jsx)("strong",{children:"error"}),"..."]}),a&&Object(L.jsxs)(L.Fragment,{children:["Cargando ",Object(L.jsx)("strong",{children:"Tareas"}),"..."]}),0===(null===o||void 0===o?void 0:o.length)&&(null===m||void 0===m?void 0:m.length)>=1?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("strong",{children:['"',m,'"']})," esta palabra no coincide con ning\xfan resultado."]}):!a&&!(null!==o&&void 0!==o&&o.length)&&Object(L.jsxs)(L.Fragment,{children:["Todavia no hay ",Object(L.jsx)("strong",{children:"tareas"})," disponibles, prueba a\xf1adir una."]})]}):Object(L.jsx)(J,{totalTodos:l,completedTodos:d}),a?Object(L.jsx)(L.Fragment,{children:Object(L.jsx)($,{children:Object(L.jsx)(re,{loading:a})})}):Object(L.jsx)(L.Fragment,{children:a||null!==o&&void 0!==o&&o.length?Object(L.jsx)($,{children:o.map((function(e,t){return Object(L.jsx)(re,{text:null===e||void 0===e?void 0:e.text,completed:null===e||void 0===e?void 0:e.completed,onComplete:function(){return i(null===e||void 0===e?void 0:e.text)},onDelete:function(){return n(null===e||void 0===e?void 0:e.text)}},(null===e||void 0===e?void 0:e.text)+t)}))}):Object(L.jsx)(L.Fragment,{})})]}),Object(L.jsx)(ce,{openModal:s,setOpenModal:c,addTodo:h})]})}),Object(L.jsx)(pe,{})]})},fe=Object(j.b)({plugins:[].concat(Object(s.a)(Object(b.a)().plugins),[x()()])});var xe=function(){return Object(L.jsx)(c.a,{theme:u,children:Object(L.jsx)(g.a,{injectFirst:!0,children:Object(L.jsxs)(p.b,{jss:fe,children:[Object(L.jsx)(h.a,{}),Object(L.jsx)(je,{})]})})})};n.a.render(Object(L.jsx)(xe,{}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.e73c4c36.chunk.js.map