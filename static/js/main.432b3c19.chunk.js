(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(8),r=c.n(n),s=c(4),a=c(20),o=c(5),u=c(11),i=c(18),l="LOADING_TODOS",d="SELECT_USER",j="GET_ERROR",b="GET_USER",O="DELETE_TODO",p=function(e){return{type:l,todos:e}},f=function(e){return{type:d,userId:e}},h=function(e){return{type:j,message:e}},x=function(e){return{type:b,user:e}},m=function(e){return{type:O,id:e}},_=function(e){return e.todos},v=function(e){return e.userId},y=function(e){return e.errorLoading},T=function(e){return e.user},N={todos:[],userId:0,errorLoading:"",user:null},L=Object(u.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{todos:t.todos});case d:return Object(o.a)(Object(o.a)({},e),{},{userId:t.userId});case j:return Object(o.a)(Object(o.a)({},e),{},{message:t.message});case b:return Object(o.a)(Object(o.a)({},e),{},{user:t.user});case O:return Object(o.a)(Object(o.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.id}))});default:return e}}),Object(i.composeWithDevTools)()),C=L,k=c(7),E=c(3),w=c.n(E),g=c(0),I=(c(29),c(6)),S=(c(30),c(13)),U=c.n(S),D=c(19),A=c.n(D),R="https://mate.academy/students-api",B=function(){var e=Object(k.a)(w.a.mark((function e(t){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(R,"/").concat(t));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){return B("users/".concat(e))};function F(e){return J.apply(this,arguments)}function J(){return(J=Object(k.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(R,"/todos/").concat(t),{method:"DELETE"});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=c(1),q=function(){var e=Object(g.useState)(""),t=Object(I.a)(e,2),c=t[0],n=t[1],r=Object(g.useState)(""),a=Object(I.a)(r,2),o=a[0],u=a[1],i=Object(g.useState)("all"),l=Object(I.a)(i,2),d=l[0],j=l[1],b=Object(s.c)(_),O=Object(s.b)(),p=function(){var e=b.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())}));switch(d){case"active":return e.filter((function(e){return!e.completed}));case"completed":return e.filter((function(e){return e.completed}));default:return e}}(),h=Object(g.useCallback)((function(e){O(f(e))}),[]),x=Object(g.useCallback)(function(){var e=Object(k.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:O(m(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),y=Object(g.useCallback)(A()(u,1e3),[]),T=Object(s.c)(v);return Object(W.jsxs)("div",{className:"TodoList",children:[Object(W.jsx)("h2",{children:"Todos:"}),Object(W.jsxs)("div",{className:"TodoList__input",children:[Object(W.jsx)("h3",{children:"Select todo title"}),Object(W.jsx)("label",{children:Object(W.jsx)("input",{className:"TodoList__input--title",type:"text",value:c,onChange:function(e){var t=e.target.value;n(t),y(t)},"data-cy":"filterByTitle"})})]}),Object(W.jsxs)("div",{className:"TodoList__select",children:[Object(W.jsx)("h3",{children:"Select todo status:"}),Object(W.jsxs)("select",{value:d,onChange:function(e){return j(e.target.value)},className:"TodoList__select--selector",children:[Object(W.jsx)("option",{children:"all"}),Object(W.jsx)("option",{children:"active"}),Object(W.jsx)("option",{children:"completed"})]})]}),Object(W.jsx)("div",{className:"TodoList__list-container",children:Object(W.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:p.map((function(e){return Object(W.jsxs)("li",{className:U()("TodoList__item",{"TodoList__item--checked":e.completed},{"TodoList__item--unchecked":!e.completed}),children:[Object(W.jsxs)("label",{children:[Object(W.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(W.jsx)("p",{children:e.title})]}),e.userId&&Object(W.jsxs)("div",{className:"buttons",children:[Object(W.jsx)("button",{className:U()("button","TodoList__user-button",{"TodoList__user-button--selected":T===e.userId}),type:"button","data-cy":"userButton",value:e.userId,onClick:function(){return h(e.userId)},children:"User #".concat(e.userId)}),Object(W.jsx)("button",{type:"button",onClick:function(){return x(e.id)},className:"button 'TodoList__user-button'",children:"DELETE"})]})]},e.id)}))})})]})},z=(c(43),function(){var e=Object(s.c)(T),t=Object(s.c)(v),c=Object(s.c)(y),n=Object(s.b)();Object(g.useEffect)((function(){function e(){return(e=Object(k.a)(w.a.mark((function e(){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(t);case 3:c=e.sent,n(x(c)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n(h("Can't load user"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var r=Object(g.useCallback)((function(e){n(f(e))}),[]);return Object(W.jsx)(W.Fragment,{children:e?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:"CurrentUser",children:[Object(W.jsx)("h2",{className:"CurrentUser__title",children:Object(W.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(W.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:e.name}),Object(W.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(W.jsx)("p",{className:"CurrentUser__phone",children:e.phone})]}),Object(W.jsx)("button",{type:"button",className:"CurrentUser__clear",onClick:function(){return r(0)},children:"Clear User"})]}):Object(W.jsx)("p",{children:c})})}),H=function(){var e=Object(s.b)(),t=Object(s.c)(v),c=Object(g.useCallback)(Object(k.a)(w.a.mark((function t(){var c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B("todos");case 2:c=t.sent,e(p(c));case 4:case"end":return t.stop()}}),t)}))),[]);return Object(g.useEffect)((function(){c()}),[]),Object(W.jsxs)("div",{className:"App",children:[Object(W.jsx)("div",{className:"App__sidebar",children:Object(W.jsx)(q,{})}),Object(W.jsx)("div",{className:"App__content",children:Object(W.jsx)("div",{className:"App__content-container",children:t?Object(W.jsx)(z,{}):"No user selected"})})]})},K=function(){return Object(W.jsx)(s.a,{store:C,children:Object(W.jsx)(a.a,{children:Object(W.jsx)(H,{})})})};r.a.render(Object(W.jsx)(K,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.432b3c19.chunk.js.map