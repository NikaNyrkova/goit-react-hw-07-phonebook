(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form_contact:"ContactForm_form_contact__3zkwZ",label:"ContactForm_label__RbtfU",input:"ContactForm_input__d8UQW",button:"ContactForm_button__2_ohI"}},20:function(t,e,n){t.exports={item:"ContactListItem_item__8jvX3",button:"ContactListItem_button__11dpp"}},21:function(t,e,n){t.exports={label:"Filter_label__2eWHt",input:"Filter_input__1NZGh"}},34:function(t,e,n){t.exports={section:"Section_section__3kG_a"}},35:function(t,e,n){t.exports={list:"ContactList_list__2L8vm"}},71:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(13),o=n.n(c),u=n(7),i=n(16),s=n(4),b=n(31),l=n(2),j=n(3),f=Object(s.b)("phonebook-filter"),p=n(5),d=n.n(p),O=n(8),m=n(9),h=n.n(m);function x(){return v.apply(this,arguments)}function v(){return(v=Object(O.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return C.apply(this,arguments)}function C(){return(C=Object(O.a)(d.a.mark((function t(e){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return y.apply(this,arguments)}function y(){return(y=Object(O.a)(d.a.mark((function t(e){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}h.a.defaults.baseURL="http://localhost:3000",h.a.defaults.baseURL="http://localhost:3000";var w,g,N=Object(s.c)("phonebook/addContact",function(){var t=Object(O.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),F=Object(s.c)("phonebook/deleteContact",function(){var t=Object(O.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),L=Object(s.c)("phonebook/fetchContacts",Object(O.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),A=Object(s.d)([],(w={},Object(l.a)(w,N.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(i.a)(t),[n])})),Object(l.a)(w,F.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(l.a)(w,L.fulfilled,(function(t,e){return e.payload})),w)),z=Object(s.d)("",Object(l.a)({},f,(function(t,e){return e.payload}))),Z=Object(s.d)(!1,(g={},Object(l.a)(g,N.pending,(function(){return!0})),Object(l.a)(g,N.rejected,(function(){return!1})),Object(l.a)(g,N.fulfilled,(function(){return!1})),Object(l.a)(g,F.pending,(function(){return!0})),Object(l.a)(g,F.rejected,(function(){return!1})),Object(l.a)(g,F.fulfilled,(function(){return!1})),Object(l.a)(g,L.pending,(function(){return!0})),Object(l.a)(g,L.rejected,(function(){return!1})),Object(l.a)(g,L.fulfilled,(function(){return!1})),g)),I=Object(j.b)({phonebookContacts:A,phonebookFilter:z,loading:Z}),S=n(11),U=[].concat(Object(i.a)(Object(s.e)({serializableCheck:{ignoredActions:[S.a,S.f,S.b,S.c,S.d,S.e]}})),[b.logger]),J=Object(s.a)({reducer:I,middleware:U,devTools:!0}),R=(n(69),n(32)),q=n(33),B=n(38),D=n(36),E=n(34),G=n.n(E),M=n(1),T=function(t){var e=t.title,n=t.children;return Object(M.jsxs)("section",{className:G.a.section,children:[Object(M.jsx)("h2",{children:e}),n]})},W=n(19),H=n(37),P=n(73),Q=n(14),X=function(t){return t.phonebookContacts},$=function(t){return t.phonebookFilter},K=Object(Q.a)([X,$],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)||t.number.includes(e)}))})),V=n(10),Y=n.n(V),tt=function(){var t=Object(r.useState)({name:"",number:""}),e=Object(H.a)(t,2),n=e[0],a=e[1],c=Object(u.b)(),o=Object(P.a)(),i=Object(P.a)(),s=Object(u.c)((function(t){return X(t)})),b=function(){a({name:"",number:""})},j=function(t){var e=t.currentTarget,n=e.name,r=e.value;a((function(t){return Object(W.a)(Object(W.a)({},t),{},Object(l.a)({},n,r))}))},f=function(t,e){var n=t.name,r=t.number;e.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):e.some((function(t){return t.number===r}))?alert("".concat(r," is already in contacts")):(!function(t){c(N(t))}(t),b())};return Object(M.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f(n,s),b()},className:Y.a.form_contact,children:[Object(M.jsxs)("label",{htmlFor:o,className:Y.a.label,children:["Name",Object(M.jsx)("input",{type:"text",id:o,onChange:j,value:n.name,className:Y.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(M.jsxs)("label",{htmlFor:i,className:Y.a.label,children:["Number",Object(M.jsx)("input",{type:"tel",id:i,onChange:j,value:n.number,className:Y.a.input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(M.jsx)("button",{type:"submit",className:Y.a.button,children:"Add contact"})]})},et=n(35),nt=n.n(et),rt=n(20),at=n.n(rt),ct=function(t){var e=t.contacts,n=t.deleteContact;return e.map((function(t){var e=t.id,r=t.name,a=t.number;return Object(M.jsxs)("li",{className:at.a.item,children:[Object(M.jsxs)("span",{children:[r,": ",a]}),Object(M.jsx)("button",{onClick:function(){return n(e)},type:"button",className:at.a.button,children:"Delete"})]},e)}))},ot=function(){var t=Object(u.c)(K),e=Object(u.b)();return Object(r.useEffect)((function(){e(L())}),[e]),Object(M.jsx)("ul",{className:nt.a.list,children:Object(M.jsx)(ct,{contacts:t,deleteContact:function(t){return e(F(t))}})})},ut=n(21),it=n.n(ut),st=function(){var t=Object(u.c)($),e=Object(u.b)();return Object(M.jsxs)("label",{className:it.a.label,children:["Find contact by name",Object(M.jsx)("input",{type:"text",className:it.a.input,value:t,onChange:function(t){return e(f(t.target.value))}})]})},bt=function(t){Object(B.a)(n,t);var e=Object(D.a)(n);function n(){return Object(R.a)(this,n),e.apply(this,arguments)}return Object(q.a)(n,[{key:"render",value:function(){return Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)(T,{title:"Phonebook",children:Object(M.jsx)(tt,{})}),Object(M.jsxs)(T,{title:"Contacts",children:[Object(M.jsx)(st,{}),Object(M.jsx)(ot,{})]})]})}}]),n}(r.Component);o.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(u.a,{store:J,children:Object(M.jsx)(bt,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.ea057640.chunk.js.map