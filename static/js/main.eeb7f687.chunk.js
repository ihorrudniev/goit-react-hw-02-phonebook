(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=(n(17),n(12)),s=n(2),u=n(3),l=n(5),b=n(4),d=n(11),m=n(7),h=n.n(m),j=(n(26),n(0)),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=h.a.generate(),t.numberInputId=h.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n={id:h.a.generate(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:"Form",onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:"Form__label",htmlFor:this.nameInputId,children:["Name"," ",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:this.handleChange,id:this.nameInputId,required:!0})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{className:"Form__label",htmlFor:this.numberInputId,children:["Number"," ",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:n,onChange:this.handleChange,required:!0})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=f,C=(n(28),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"Filter__title",children:"Find contacts by name"}),Object(j.jsx)("input",{className:"Filter__input",type:"text",name:"filter",value:this.props.value,onChange:this.props.onChange})]})}}]),n}(a.Component)),O=C,v=(n(29),function(t){var e=t.children;return Object(j.jsx)("div",{className:"Container",children:e})}),g=(n(9),function(t){var e=t.id,n=t.name,a=t.number,r=t.onDeleteContact;return Object(j.jsxs)("li",{className:"Contacts__item",children:[n,": ",a,Object(j.jsx)("button",{className:"Contacts__btn",type:"submit",onClick:function(){return r(e)},children:"Delete"})]})}),x=function(t){var e=t.findContact,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:"ContactsList__item",children:e().map((function(t){var e=t.id,a=t.name,r=t.number;return Object(j.jsx)(g,{id:e,name:a,number:r,onDeleteContact:n},e)}))})},_=(n(30),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.hasContacts(e.name)?alert("".concat(e.name," is already in contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(o.a)(n))}}))},t.hasContacts=function(e){return t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.findContact=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLocaleLowerCase();return n.length?a.filter((function(t){return t.name.toLowerCase().includes(r)})):a},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(j.jsxs)(v,{children:[Object(j.jsx)("h1",{className:"App__title",children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:this.addContact}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"App__title",children:"Contacts"}),Object(j.jsx)(O,{value:t,onChange:this.changeFilter}),Object(j.jsx)(x,{findContact:this.findContact,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component)),y=_,F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),F()},9:function(t,e,n){}},[[31,1,2]]]);
//# sourceMappingURL=main.eeb7f687.chunk.js.map