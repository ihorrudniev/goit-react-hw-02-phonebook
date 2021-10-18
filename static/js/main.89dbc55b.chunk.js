(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){},18:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(11),i=n.n(c),o=(n(18),n(13)),s=n(3),u=n(4),l=n(6),d=n(5),m=n(12),b=n(1),h=n.n(b),j=n(8),f=n.n(j),p=(n(29),n(0)),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameInputId=f.a.generate(),e.numberInputId=f.a.generate(),e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(m.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n={id:f.a.generate(),name:e.state.name,number:e.state.number};e.props.onSubmit(n),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(p.jsxs)("form",{className:"Form",onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:"Form__label",htmlFor:this.nameInputId,children:["Name"," ",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:t,onChange:this.handleChange,id:this.nameInputId,required:!0})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{className:"Form__label",htmlFor:this.numberInputId,children:["Number"," ",Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:n,onChange:this.handleChange,required:!0})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component);C.PropType={onSubmit:h.a.func.isRequired};var O=C,v=(n(31),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{className:"Filter__title",children:"Find contacts by name"}),Object(p.jsx)("input",{className:"Filter__input",type:"text",name:"filter",value:this.props.value,onChange:this.props.onChange})]})}}]),n}(a.Component));v.PropType={value:h.a.string,onChange:h.a.func.isRequired};var g=v,x=(n(32),function(e){var t=e.children;return Object(p.jsx)("div",{className:"Container",children:t})}),y=(n(10),function(e){var t=e.id,n=e.name,a=e.number,r=e.onDeleteContact;return Object(p.jsxs)("li",{className:"Contacts__item",children:[n,": ",a,Object(p.jsx)("button",{className:"Contacts__btn",type:"submit",onClick:function(){return r(t)},children:"Delete"})]})});y.prototype={id:h.a.number.isRequired,name:h.a.string.isRequired,number:h.a.number.isRequired,onDeleteContact:h.a.func.isRequired};var _=y,F=function(e){var t=e.findContact,n=e.onDeleteContact;return Object(p.jsx)("ul",{className:"ContactsList__item",children:t().map((function(e){var t=e.id,a=e.name,r=e.number;return Object(p.jsx)(_,{id:t,name:a,number:r,onDeleteContact:n},t)}))})};F.prototype={findContact:h.a.func.isRequired,onDeleteContact:h.a.func.isRequired};var S=F,N=(n(33),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){e.hasContacts(t.name)?alert("".concat(t.name," is already in contacts")):e.setState((function(e){var n=e.contacts;return{contacts:[t].concat(Object(o.a)(n))}}))},e.hasContacts=function(t){return e.state.contacts.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))},e.findContact=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLocaleLowerCase();return n.length?a.filter((function(e){return e.name.toLowerCase().includes(r)})):a},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter;return Object(p.jsxs)(x,{children:[Object(p.jsx)("h1",{className:"App__title",children:"Phonebook"}),Object(p.jsx)(O,{onSubmit:this.addContact}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"App__title",children:"Contacts"}),Object(p.jsx)(g,{value:e,onChange:this.changeFilter}),Object(p.jsx)(S,{findContact:this.findContact,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component)),w=N,I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),I()}},[[34,1,2]]]);
//# sourceMappingURL=main.89dbc55b.chunk.js.map