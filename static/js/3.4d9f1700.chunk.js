/*! For license information please see 3.4d9f1700.chunk.js.LICENSE.txt */
(this["webpackJsonpgoit-react-hw-08-registration-and-login"]=this["webpackJsonpgoit-react-hw-08-registration-and-login"]||[]).push([[3],{86:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var c=typeof o;if("string"===c||"number"===c)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===c)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var o=n(33),r=n(34),c=n(37),a=n(35),l=n(0),i=n(8),s=n(47),u=n(36),d=n(86),b=n.n(d),j=n(1),h=function(e){var t=e.text,n=e.completed,o=e.onToggleCompleted,r=e.onDelete;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"checkbox",className:"TodoList__checkbox",checked:n,onChange:o}),Object(j.jsx)("p",{className:"TodoList__text",children:t}),Object(j.jsx)("button",{type:"button",className:"TodoList__btn",onClick:r,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},f=(n(87),function(e){var t=e.todos,n=e.onDeleteTodo,o=e.onToggleCompleted;return console.log("TodoList re-render")||Object(j.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,r=e.description,c=e.completed;return Object(j.jsx)("li",{className:b()("TodoList__item",{"TodoList__item--completed":c}),children:Object(j.jsx)(h,{text:r,completed:c,onToggleCompleted:function(){return o({id:t,completed:!c})},onDelete:function(){return n(t)}})},t)}))})}),p=Object(i.b)((function(e){return{todos:Object(u.f)(e)}}),(function(e){return{onDeleteTodo:function(t){return e(u.g.deleteTodo(t))},onToggleCompleted:function(t){return e(u.g.toggleCompleted(t))}}}))(f),O=(n(88),function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={message:""},e.handleChange=function(t){e.setState({message:t.currentTarget.value})},e.handleSubmit=function(t){if(t.preventDefault(),""!==e.state.message)return e.props.onSubmit(e.state.message),e.props.onSave(),void e.setState({message:""});alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438.")},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(j.jsx)("textarea",{className:"TodoEditor__textarea",value:this.state.message,onChange:this.handleChange}),Object(j.jsx)("button",{type:"submit",className:"TodoEditor__button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}}]),n}(l.Component)),m=Object(i.b)(null,(function(e){return{onSubmit:function(t){return e(u.g.addTodo(t))}}}))(O),v=(n(89),Object(i.b)((function(e){return{value:Object(u.c)(e)}}),(function(e){return{onChange:function(t){return e(Object(u.a)(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("div",{className:"TodoFilter",children:[Object(j.jsx)("p",{className:"TodoFilter__label",children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443"}),Object(j.jsx)("input",{type:"text",className:"TodoFilter__input",value:t,onChange:n})]})}))),g=(n(90),Object(i.b)((function(e){return{total:Object(u.e)(e),completed:Object(u.b)(e)}}))((function(e){var t=e.total,n=e.completed;return Object(j.jsxs)("div",{className:"Stats",children:[Object(j.jsxs)("p",{className:"Stats__item",children:[Object(j.jsx)("span",{className:"Stats__value",children:t}),Object(j.jsx)("span",{className:"Stats__label",children:"\u0412\u0441\u0435\u0433\u043e"})]}),Object(j.jsxs)("p",{className:"Stats__item",children:[Object(j.jsx)("span",{className:"Stats__value",children:n}),Object(j.jsx)("span",{className:"Stats__label",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"})]})]})}))),x=n(22),y=(n(91),document.querySelector("#modal-root")),_=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(x.createPortal)(Object(j.jsx)("div",{className:"Modal__backdrop",onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:"Modal__content",children:this.props.children})}),y)}}]),n}(l.Component),k=n(18),w=n(25),C=(n(92),function(e){var t=e.children,n=e.onClick,o=Object(w.a)(e,["children","onClick"]);return Object(j.jsx)("button",Object(k.a)(Object(k.a)({type:"button",className:"IconButton",onClick:n},o),{},{children:t}))});C.defaultProps={onClick:function(){return null},children:null};var T=C;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M=l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),L=l.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"});function E(e,t){var n=e.title,o=e.titleId,r=S(e,["title","titleId"]);return l.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":o},r),n?l.createElement("title",{id:o},n):null,M,L)}var D=l.forwardRef(E),P=(n.p,n(46));var A=Object(i.b)((function(e){return{clicks:e.counter.value}}),(function(e){return{onClick:function(){return e(Object(P.b)())}}}))((function(e){var t=e.clicks,n=e.onClick;return Object(j.jsxs)("button",{type:"button",onClick:n,children:["\u041a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 ",t," \u0440\u0430\u0437"]})})),B={display:"flex",alignItems:"flex-end",marginBottom:20},I=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTodos()}},{key:"render",value:function(){var e=this.state.showModal;return Object(j.jsxs)(s.a,{children:[Object(j.jsxs)("div",{style:B,children:[Object(j.jsx)(v,{}),Object(j.jsx)(g,{}),Object(j.jsx)(T,{onClick:this.toggleModal,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c todo",children:Object(j.jsx)(D,{width:"40",height:"40",fill:"#fff"})}),this.props.isLoadingTodos&&Object(j.jsx)("h1",{children:"Loading..."}),Object(j.jsx)(A,{})]}),Object(j.jsx)(p,{}),e&&Object(j.jsx)(_,{onClose:this.toggleModal,children:Object(j.jsx)(m,{onSave:this.toggleModal})})]})}}]),n}(l.Component);t.default=Object(i.b)((function(e){return{isLoadingTodos:Object(u.d)(e)}}),(function(e){return{fetchTodos:function(){return e(u.g.fetchTodos())}}}))(I)}}]);
//# sourceMappingURL=3.4d9f1700.chunk.js.map