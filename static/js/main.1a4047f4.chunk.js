(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){},43:function(e,a,t){e.exports=t(79)},48:function(e,a,t){},73:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var r={};t.r(r),t.d(r,"traerTodosLosUsuarios",function(){return y});var n={};t.r(n),t.d(n,"traerTodasLasPublicaciones",function(){return x}),t.d(n,"traerPublicacionesPorUsuario",function(){return L}),t.d(n,"abrirYcerrar",function(){return D}),t.d(n,"traerComentarios",function(){return w});var c={};t.r(c),t.d(c,"traerTodasLasTareas",function(){return H}),t.d(c,"cambiarUsuarioId",function(){return Z}),t.d(c,"cambiarTituloTarea",function(){return F}),t.d(c,"agregarTarea",function(){return J}),t.d(c,"editarTarea",function(){return z}),t.d(c,"cambioCheckbox",function(){return K}),t.d(c,"eliminarTarea",function(){return Y}),t.d(c,"limpiarFormulario",function(){return W});var o=t(0),s=t.n(o),l=t(25),i=t.n(l),u=(t(48),t(10)),m=t(20),p=t(15),d=t(16),b=t(18),E=t(17),f=t(19),A=t(4),O=t(2),v=t.n(O),R=t(5),h=t(11),g=t.n(h),y=function(){return function(){var e=Object(R.a)(v.a.mark(function e(a){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"USUARIOS_CARGANDO"}),e.prev=1,e.next=4,g.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,a({type:"TRAER_TODOS_USUARIOS",payload:t.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),a({type:"USUARIOS_ERROR",payload:"Error al intentar cargar la lista de usuarios"});case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(a){return e.apply(this,arguments)}}()},T=(t(73),function(e){return s.a.createElement("div",{className:"j-container-helper"},s.a.createElement("div",{className:"lds-hourglass"}))}),j=(t(74),Object(A.b)(function(e){return e.usuariosReducer})(function(e){return s.a.createElement("div",null,s.a.createElement("table",{className:"table table-inverse mt-4"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"First Name"),s.a.createElement("th",null,"Website"),s.a.createElement("th",null,"Email"),s.a.createElement("th",{className:"text-center"},"Acciones"))),s.a.createElement("tbody",null,e.usuarios.map(function(e,a){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.website),s.a.createElement("td",null,e.email),s.a.createElement("td",{className:"text-center"},s.a.createElement(u.b,{to:"/publicaciones/".concat(a)},s.a.createElement("i",{className:"far fa-eye"}))))}))))})),N=(t(24),function(e){return s.a.createElement("div",{className:"fatal-container"},s.a.createElement("div",{id:"clouds"},s.a.createElement("div",{className:"cloud x1"}),s.a.createElement("div",{className:"cloud x1_5"}),s.a.createElement("div",{className:"cloud x2"}),s.a.createElement("div",{className:"cloud x3"}),s.a.createElement("div",{className:"cloud x4"}),s.a.createElement("div",{className:"cloud x5"})),s.a.createElement("div",{className:"c"},s.a.createElement("div",{className:"_404"},"404"),s.a.createElement("div",{className:"_1"},e.mensaje)))}),_=function(e){function a(){var e;return Object(p.a)(this,a),(e=Object(b.a)(this,Object(E.a)(a).call(this))).ponerContenidoTabla=function(){return e.props.loading?s.a.createElement(T,null):e.props.error?s.a.createElement(N,{mensaje:e.props.error}):s.a.createElement(j,null)},e.state={usuarios:[]},e}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.usuarios.length||this.props.traerTodosLosUsuarios()}},{key:"render",value:function(){return console.log("props ::: ",this.props),s.a.createElement("div",{className:"j-container container"},s.a.createElement("h1",null,"Lista de Usuarios"),this.ponerContenidoTabla())}}]),a}(o.Component),I=Object(A.b)(function(e){return e.usuariosReducer},r)(_),C=function(){return s.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-sm"},s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-list-2","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse container",id:"navbar-list-2"},s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement("u",{className:"nav-link logo-container"},s.a.createElement("span",null,"Task"),s.a.createElement("i",{class:"icon-logo fas fa-thumbtack"}),s.a.createElement("i",{className:"second"},"Manager"))),s.a.createElement("li",{className:"nav-item active"},s.a.createElement(u.b,{className:"nav-link",to:"/"},"Usuarios ",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.b,{className:"nav-link",to:"/tareas"},"Tareas"))),s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",target:"_blank",href:"https://ingjaimediaz.com"},"Desarrollado por: ",s.a.createElement("strong",null,s.a.createElement("i",{class:"fas fa-user-shield pl-2 pr-2"})," Ing. Jaime D\xedaz."))))))},k=(t(76),t(1)),U=(t(77),Object(A.b)(function(e){return e.publicacionesReducer})(function(e){if(e.comentarioError)return s.a.createElement(N,{mensaje:e.comentarioError});if(e.commentarioLoading&&!e.comentarios.length)return s.a.createElement(T,null);return s.a.createElement("ul",null,e.comentarios.map(function(e){return s.a.createElement("li",null,s.a.createElement("b",null,s.a.createElement("u",null,e.email)),s.a.createElement("br",null),e.body)}))})),S=t(21),x=function(){return function(){var e=Object(R.a)(v.a.mark(function e(a){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"PUBLICACIONES_CARGANDO"}),e.prev=1,e.next=4,g.a.get("https://jsonplaceholder.typicode.com/posts");case 4:t=e.sent,a({type:"TRAER_TODAS_LAS_PUBLICACIONES",payload:t.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),a({type:"PUBLICACIONES_ERROR",payload:"Error interno en la plataforma, intente m\xe1s tarde por favor."});case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(a){return e.apply(this,arguments)}}()},L=function(e){return function(){var a=Object(R.a)(v.a.mark(function a(t,r){var n,c,o,s,l,i,u,m,p;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"PUBLICACIONES_CARGANDO"}),n=r().usuariosReducer.usuarios,c=r().publicacionesReducer.publicaciones,o=n[e],s=o.id,console.log("desde el actions de publicaciones: "+e),console.log(" ahora procesando el objeto :: ",o.id),a.prev=7,a.next=10,g.a.get("https://jsonplaceholder.typicode.com/posts?userId="+s);case 10:l=a.sent,i=l.data.map(function(e){return Object(k.a)({},e,{comentarios:[],abierto:!1})}),u=[].concat(Object(S.a)(c),[i]),t({type:"TRAER_PUBLICACION_POR_USUARIO",payload:u}),m=u.length-1,(p=Object(S.a)(n))[e]=Object(k.a)({},n[e],{publicaciones_key:m}),t({type:"TRAER_TODOS_USUARIOS",payload:p}),a.next=24;break;case 20:a.prev=20,a.t0=a.catch(7),console.error(a.t0),t({type:"PUBLICACIONES_ERROR",payload:"Error al intentar cargar la list de publicaciones."});case 24:case"end":return a.stop()}},a,null,[[7,20]])}));return function(e,t){return a.apply(this,arguments)}}()},D=function(e,a){return function(t,r){var n=r().publicacionesReducer.publicaciones,c=n[e][a],o=Object(k.a)({},c,{abierto:!c.abierto}),s=Object(S.a)(n);s[e]=Object(S.a)(n[e]),s[e][a]=o,t({type:"TRAER_PUBLICACION_POR_USUARIO",payload:s})}},w=function(e,a){return function(){var t=Object(R.a)(v.a.mark(function t(r,n){var c,o,s,l,i;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().publicacionesReducer.publicaciones,o=c[e][a],console.log("desde la accion mostrar comentario::: ",o),r({type:"PUBLICACIONES_CARGANDO_COMENTARIO"}),t.prev=4,t.next=7,g.a.get("https://jsonplaceholder.typicode.com/comments?postId="+o.id);case 7:s=t.sent,l=Object(k.a)({},o,{comentarios:s.data}),(i=Object(S.a)(c))[e]=Object(S.a)(c[e]),i[e][a]=l,r({type:"ACTUALIZAR_COMENTARIOS_POR_PUBLICACION",payload:i}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(4),console.error(t.t0),r({type:"PUBLICACIONES_COMENTARIO_ERROR",payload:"Error al intentar cargar los comentarios asociados a la publicaci\xf3n."});case 19:case"end":return t.stop()}},t,null,[[4,15]])}));return function(e,a){return t.apply(this,arguments)}}()},P=function(e){function a(){var e,t;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(b.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(n)))).ponerUsuario=function(){var e=t.props,a=e.usuariosReducer,r=e.match.params.key;if(a.error)return s.a.createElement(N,{mensaje:a.error});if(!a.usuarios.length||a.loading)return s.a.createElement(T,null);var n=a.usuarios[r].name;return s.a.createElement("h1",null,"Publicaciones del usuario: ",s.a.createElement("strong",null,n))},t.ponerPublicaciones=function(){var e=t.props,a=e.usuariosReducer,r=e.usuariosReducer.usuarios,n=e.publicacionesReducer,c=e.publicacionesReducer.publicaciones,o=e.match.params.key;if(r.length&&!a.error){if(n.loading)return s.a.createElement(T,null);if(n.error)return s.a.createElement(N,{mensaje:n.error});if(c.length&&"publicaciones_key"in r[o]){var l=r[o].publicaciones_key;return t.mostrarInformacionPublicacion(c[l],l)}}},t.mostrarInformacionPublicacion=function(e,a){return e.map(function(e,r){return s.a.createElement("div",{className:"item-publicacion",key:e.id,onClick:function(){return t.mostrarComentarios(a,r,e.comentarios)}},s.a.createElement("h2",null,e.title),s.a.createElement("h5",null,e.body),e.abierto?s.a.createElement(U,{comentarios:e.comentarios}):"Cerrado")})},t.mostrarComentarios=function(e,a,r){console.log("desde componente publicaciones ::: comentarios ::: ",r),t.props.abrirYcerrar(e,a),r.length||t.props.traerComentarios(e,a)},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(R.a)(v.a.mark(function e(){var a,t,r,n,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,t=a.usuariosReducer,r=a.traerPublicacionesPorUsuario,n=a.traerTodosLosUsuarios,c=a.match.params.key,t.usuarios.length){e.next=5;break}return console.log("<<< traer usuarios >>>"),e.next=5,n();case 5:if(!this.props.usuariosReducer.error){e.next=7;break}return e.abrupt("return");case 7:"publicaciones_key"in this.props.usuariosReducer.usuarios[c]||r(c);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.props),s.a.createElement("div",{className:"j-container container"},this.ponerUsuario(),this.ponerPublicaciones())}}]),a}(o.Component),B=Object(k.a)({},r,n),G=Object(A.b)(function(e){return{usuariosReducer:e.usuariosReducer,publicacionesReducer:e.publicacionesReducer}},B)(P),M=t(27),H=function(){return function(){var e=Object(R.a)(v.a.mark(function e(a){var t,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"TAREAS_CARGANDO"}),e.prev=1,e.next=4,g.a.get("https://jsonplaceholder.typicode.com/todos");case 4:t=e.sent,r={},t.data.map(function(e){return r[e.userId]=Object(k.a)({},r[e.userId],Object(M.a)({},e.id,Object(k.a)({},e)))}),a({type:"TRAER_TODAS_LAS_TAREAS",payload:r}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),a({type:"TAREAS_ERROR",payload:"Error al intentar cargar las tareas"});case 14:case"end":return e.stop()}},e,null,[[1,10]])}));return function(a){return e.apply(this,arguments)}}()},Z=function(e){return function(a){a({type:"CAMBIAR_USUARIO_ID",payload:e})}},F=function(e){return function(a){a({type:"CAMBIAR_TITULO_TAREA",payload:e})}},J=function(e){return function(){var a=Object(R.a)(v.a.mark(function a(t){var r;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"TAREAS_CARGANDO"}),a.prev=1,a.next=4,g.a.post("https://jsonplaceholder.typicode.com/todos",e);case 4:r=a.sent,console.log(r.data),t({type:"TAREA_AGREGADA_EDITADA"}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0.message),t({type:"TAREAS_ERROR",payload:"Error al intentar crear una tarea"});case 13:case"end":return a.stop()}},a,null,[[1,9]])}));return function(e){return a.apply(this,arguments)}}()},z=function(e){return function(){var a=Object(R.a)(v.a.mark(function a(t){return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"TAREAS_CARGANDO"}),a.prev=1,a.next=4,g.a.put("https://jsonplaceholder.typicode.com/todos/"+e.id,e);case 4:a.sent,t({type:"TAREA_AGREGADA_EDITADA"}),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0.message),t({type:"TAREAS_ERROR",payload:"Error al intentar crear una tarea"});case 12:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()},K=function(e,a){return function(t,r){var n=r().tareasReducer.tareas,c=n[e][a],o=Object(k.a)({},n);o[e]=Object(k.a)({},n[e]),o[e][a]=Object(k.a)({},n[e][a],{completed:!c.completed}),t({type:"ACTUALIZAR_TAREAS_CHECKED",payload:o})}},Y=function(e){return function(){var a=Object(R.a)(v.a.mark(function a(t){return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"TAREAS_CARGANDO"}),a.prev=1,a.next=4,g.a.delete("https://jsonplaceholder.typicode.com/todos/"+e);case 4:a.sent,t({type:"TRAER_TODAS_LAS_TAREAS",payload:{}}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),t({type:"TAREAS_ERROR",payload:"Error al intentar Eliminar una tarea"});case 11:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()},W=function(){return function(e){e({type:"LIMPIAR"})}},q=function(e){function a(){var e,t;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(b.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(n)))).cambiarUsuarioId=function(e){console.log(e.target.value),t.props.cambiarUsuarioId(e.target.value)},t.cambiarTituloTarea=function(e){t.props.cambiarTituloTarea(e.target.value)},t.guardarTarea=function(){var e=t.props,a=e.match.params,r=a.usua_id,n=a.tarea_id,c=e.usuarioId,o=e.tituloTarea,s=e.agregarTarea,l=e.tareas,i=e.editarTarea,u={usuarioId:c,tituloTarea:o,completed:!1};if(r&&n){var m=l[r][n];i(Object(k.a)({},u,{completed:m.completed,id:m.id}))}else s(u)},t.deshabilitarBoton=function(){var e=t.props,a=e.usuarioId,r=e.tituloTarea;return!!e.loading||(!a||!r)},t.mostrarAccionTarea=function(){var e=t.props,a=e.error;return e.loading?s.a.createElement(T,null):a?s.a.createElement(N,{mensaje:a}):void 0},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.match.params,t=a.usua_id,r=a.tarea_id,n=e.cambiarUsuarioId,c=e.cambiarTituloTarea,o=e.tareas,s=e.limpiarFormulario;if(t&&r){var l=o[t][r];n(l.userId),c(l.title)}else s()}},{key:"render",value:function(){return this.props.regresarHome?s.a.createElement(m.a,{to:"/tareas"}):s.a.createElement("div",{className:"j-container container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("h1",null,"Guardar Tareas"),s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("span",{className:"badge badge-info"},"Datos del usuario")),s.a.createElement("div",{className:"card-body p-4"},s.a.createElement("div",{className:"form-group formulario row"},s.a.createElement("label",null,"ID del usuario:"),s.a.createElement("input",{type:"number",className:"form-control",value:this.props.usuarioId,onChange:this.cambiarUsuarioId}),s.a.createElement("br",null),s.a.createElement("label",null,"T\xedtulo:"),s.a.createElement("input",{type:"text",className:"form-control",value:this.props.tituloTarea,onChange:this.cambiarTituloTarea}))),s.a.createElement("div",{className:"card-footer"},s.a.createElement("button",{className:"btn btn-primary bg-primary text-light  d-block",onClick:this.guardarTarea,disabled:this.deshabilitarBoton()},"Guardar")))),s.a.createElement("div",{className:"col-6"},this.mostrarAccionTarea())))}}]),a}(o.Component),Q=Object(A.b)(function(e){return e.tareasReducer},c)(q),V=(t(78),function(e){function a(){var e,t;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(b.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(n)))).mostrarContenidoTarea=function(){var e=t.props,a=e.tareas,r=e.loading,n=e.error;return r?s.a.createElement(T,null):n?s.a.createElement(N,{mensaje:n}):Object.keys(a).map(function(e){return s.a.createElement("div",{key:e},s.a.createElement("h2",{className:"usuario-titulo"},s.a.createElement("strong",null,"Usuario: "),e),s.a.createElement("div",{className:"tareas-container"},t.ponerTareas(e)))})},t.ponerTareas=function(e){var a=t.props,r=a.tareas,n=a.cambioCheckbox,c=a.eliminarTarea,o=Object(k.a)({},r[e]);return Object.keys(o).map(function(a){return s.a.createElement("div",{key:a,className:"item"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("input",{type:"checkbox",defaultChecked:o[a].completed,onChange:function(){return n(e,a)}}),o[a].title),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"botones-container d-flex"},s.a.createElement("button",{className:"btn btn-warning bg-warning text-light"},s.a.createElement(u.b,{className:"text-light w-100 h-100 d-block",to:"/tareas/guardar/".concat(e,"/").concat(a)},"Editar")),s.a.createElement("button",{className:"btn btn-danger bg-danger text-light",onClick:function(){return c(a)}},"Eliminar")))),s.a.createElement("span",null))})},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){Object.keys(this.props.tareas).length||this.props.traerTodasLasTareas()}},{key:"componentDidUpdate",value:function(){var e=this.props,a=e.traerTodasLasTareas,t=e.loading,r=e.tareas;Object.keys(r).length||t||a()}},{key:"render",value:function(){return s.a.createElement("div",{className:"j-container container"},s.a.createElement("button",{className:"btn btn-primary bg-primary text-light btn-agregar-tarea"},s.a.createElement(u.b,{to:"/tareas/guardar",className:"text-light  w-100 h-100 d-block"},"Agregar tarea")),this.mostrarContenidoTarea())}}]),a}(o.Component)),X=Object(A.b)(function(e){return e.tareasReducer},c)(V),$=function(){return s.a.createElement(u.a,null,s.a.createElement(C,null),s.a.createElement(m.d,null,s.a.createElement(m.b,{exact:!0,path:"/",component:I}),s.a.createElement(m.b,{exact:!0,path:"/tareas",component:X}),s.a.createElement(m.b,{exact:!0,path:"/publicaciones/:key",component:G}),s.a.createElement(m.b,{exact:!0,path:"/tareas/guardar",component:Q}),s.a.createElement(m.b,{exact:!0,path:"/tareas/guardar/:usua_id/:tarea_id",component:Q})))},ee=t(13),ae={usuarios:[],loading:!1,error:""},te={publicaciones:[],loading:!1,error:"",commentarioLoading:!1,comentarioError:""},re={tareas:{},loading:!1,error:"",usuarioId:"",tituloTarea:"",regresarHome:!1},ne=Object(ee.c)({usuariosReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TRAER_TODOS_USUARIOS":return Object(k.a)({},e,{usuarios:a.payload,loading:!1,error:""});case"USUARIOS_CARGANDO":return Object(k.a)({},e,{loading:!0});case"USUARIOS_ERROR":return Object(k.a)({},e,{error:a.payload,loading:!1});default:return e}},publicacionesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TRAER_TODAS_LAS_PUBLICACIONES":case"TRAER_PUBLICACION_POR_USUARIO":return Object(k.a)({},e,{publicaciones:a.payload,loading:!1,error:""});case"ACTUALIZAR_COMENTARIOS_POR_PUBLICACION":return Object(k.a)({},e,{publicaciones:a.payload,loading:!1,error:"",commentarioLoading:!1,comentarioError:""});case"PUBLICACIONES_CARGANDO":return Object(k.a)({},e,{loading:!0});case"PUBLICACIONES_ERROR":return Object(k.a)({},e,{error:a.payload,loading:!1});case"PUBLICACIONES_CARGANDO_COMENTARIO":return Object(k.a)({},e,{commentarioLoading:!0});case"PUBLICACIONES_COMENTARIO_ERROR":return console.log("from reducer :: ",a.payload),Object(k.a)({},e,{comentarioError:a.payload,commentarioLoading:!1});default:return e}},tareasReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TRAER_TODAS_LAS_TAREAS":return Object(k.a)({},e,{tareas:a.payload,loading:!1,error:"",regresarHome:!1});case"TAREAS_CARGANDO":return Object(k.a)({},e,{loading:!0});case"TAREAS_ERROR":return Object(k.a)({},e,{error:a.payload,loading:!1});case"CAMBIAR_USUARIO_ID":return Object(k.a)({},e,{usuarioId:a.payload});case"CAMBIAR_TITULO_TAREA":return Object(k.a)({},e,{tituloTarea:a.payload});case"TAREA_AGREGADA_EDITADA":return Object(k.a)({},e,{loading:!1,error:"",tareas:{},usuarioId:"",tituloTarea:"",regresarHome:!0});case"ACTUALIZAR_TAREAS_CHECKED":return Object(k.a)({},e,{tareas:a.payload});case"LIMPIAR":return Object(k.a)({},e,{usuarioId:"",tituloTarea:""});default:return e}}}),ce=t(42),oe=Object(ee.d)(ne,{},Object(ee.a)(ce.a));i.a.render(s.a.createElement(A.a,{store:oe},s.a.createElement($,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.1a4047f4.chunk.js.map