(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(11),l=c.n(a),n=(c(26),c(27),c(21)),r=c(3),i=c(16),d=c.n(i),o=c(19),j=c(10),b=c(12),m="LOGIN",h="FORM_SUBMITION_STATUS",x=function(e,t){return{type:m,payload:{email:e,password:t}}},O=(c(34),c(0)),u=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],l=Object(s.useState)(""),n=Object(j.a)(l,2),r=n[0],i=n[1],m=Object(s.useState)(!1),h=Object(j.a)(m,2),u=h[0],p=h[1],N=c.includes("@"),v=!N&&u,f=Object(s.useState)(!1),g=Object(j.a)(f,2),w=g[0],y=g[1],E=""!==r.trim()&&r.length>=6,P=!E&&w,k=!1;N&&E&&(k=!0);var S=Object(b.b)(),A=function(){var e=Object(o.a)(d.a.mark((function e(t){var s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p(!0),y(!0),N||E){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,s={email:c,password:r},console.log(s),e.next=10,fetch("http://localhost:8000/userData",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 10:a=e.sent,console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),console.log(e.t0.message);case 17:S(x({email:c,password:r,loggedIn:!0}));case 18:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}(),_=v?"form-group invalid":"form-group",I=P?"form-group invalid":"form-group";return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)("div",{className:"App pt-4",children:Object(O.jsx)("h1",{children:"Login or Signup"})}),Object(O.jsx)("div",{className:"row pt-4 justify-content-center",children:Object(O.jsxs)("div",{className:"col-6 pt-4",children:[Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{className:_,children:[Object(O.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(O.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",name:"email",onChange:function(e){var t=e.target.value;a(t),S(x(t))},onBlur:function(e){p(!0)}}),v&&Object(O.jsx)("p",{className:"error-text",children:"Email must not be empty"})]}),Object(O.jsxs)("div",{className:I,children:[Object(O.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",onChange:function(e){var t=e.target.value;i(t),S(x(t))},onBlur:function(e){y(!0)}}),P&&Object(O.jsx)("p",{className:"error-text",children:"Password must be more than 6 letter"})]}),Object(O.jsx)("button",{disabled:!k,type:"submit",className:"btn btn-primary",onClick:A,children:"Login"})]}),Object(O.jsx)("div",{})]})})]})},p=(c(36),function(){return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)("div",{class:"row",children:Object(O.jsx)("div",{class:"col text-center mt-4",children:Object(O.jsx)("button",{type:"button",className:"editbtn btn-primary","data-toggle":"modal","data-target":"#editProfileModal",children:"Edit Profile"})})}),Object(O.jsx)("div",{className:"modal fade right",tabindex:"-1",role:"dialog",id:"editProfileModal","aria-hidden":"true",children:Object(O.jsx)("div",{className:"modal-dialog modal-full-height modal-side modal-right",role:"document",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("h5",{className:"modal-title",children:"Edit Profile"}),Object(O.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(O.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("form",{className:"form-group",children:[Object(O.jsx)("label",{children:" Name"}),Object(O.jsx)("input",{type:"text",placeholder:"Enter Name",name:"name",className:"form-control"}),Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("input",{type:"email",name:"email",placeholder:"Enter Email",className:"form-control"}),Object(O.jsx)("label",{children:"Phone"}),Object(O.jsx)("input",{type:"number",name:"phone",placeholder:"Enter Phone number",className:"form-control"}),Object(O.jsx)("label",{children:"Address"}),Object(O.jsx)("input",{type:"textarea",name:"address",placeholder:"Enter Address",className:"form-control"}),Object(O.jsx)("label",{children:"City"}),Object(O.jsx)("input",{type:"text",name:"city",placeholder:"Enter City",className:"form-control"})]})}),Object(O.jsxs)("div",{className:"modal-footer",children:[Object(O.jsx)("button",{type:"button",className:"btn btn-primary",children:"Save Profile"}),Object(O.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"})]})]})})})]})}),N=(c(37),function(){return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)("div",{class:"row",children:Object(O.jsxs)("div",{className:"col-4 text-center profile",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col",children:Object(O.jsx)("img",{src:"/assets/profilePic.jpg",className:"img-fluid",alt:"Profile"})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col",children:Object(O.jsx)("button",{type:"button",className:"btn btn-link updatepic",children:"Update Photo"})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col",children:[Object(O.jsx)("h1",{children:"Hi, I Am Joe"}),Object(O.jsx)("p",{children:"Joined in 2021"})]})}),Object(O.jsx)("button",{type:"button",className:"btn btn-link",children:"Edit Profile"}),Object(O.jsx)("hr",{})]})})})}),v=(c(38),function(){return Object(O.jsx)(s.Fragment,{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-6 left",children:[Object(O.jsx)("img",{src:"/assets/Host-image.jpg",className:"img-fluid",alt:"Place"}),Object(O.jsx)("h1",{className:"imgtext",children:"Which of these best describes your place?"})]}),Object(O.jsxs)("div",{className:"col-6 right",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-10 cards",children:Object(O.jsxs)("button",{className:"cardbtn",children:[Object(O.jsx)("h4",{children:"Apartment"}),Object(O.jsx)("p",{children:"A single level house in society with multiple houses"})]})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-10 cards",children:Object(O.jsxs)("button",{className:"cardbtn",children:[Object(O.jsx)("h4",{children:"Residential Home"}),Object(O.jsx)("p",{children:"A home that may stand alone or have shared walls"})]})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-10 cards",children:Object(O.jsxs)("button",{className:"cardbtn",children:[Object(O.jsx)("h4",{children:"Villa"}),Object(O.jsx)("p",{children:"A luxury home that may have indoor-outdoor spaces"})]})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-10 cards",children:Object(O.jsxs)("button",{className:"cardbtn",children:[Object(O.jsx)("h4",{children:"Bungalow"}),Object(O.jsx)("p",{children:"A single level house with wide front porch"})]})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-10 cards",children:Object(O.jsxs)("button",{className:"cardbtn",children:[Object(O.jsx)("h4",{children:"TownHouse"}),Object(O.jsx)("p",{children:"A terraced house that may ave shared walls"})]})})}),Object(O.jsxs)("div",{className:"row mt-4 justify-content-center",children:[Object(O.jsx)("div",{className:"col-5 backbtn",children:Object(O.jsx)("button",{className:"btn btn-outline-dark btn-lg",children:"Back"})}),Object(O.jsx)("div",{className:"col-5 nextbtn",children:Object(O.jsx)("button",{className:"btn btn-dark btn-lg",children:"Next"})})]})]})]})})}),f=(c(39),function(){return Object(O.jsx)(s.Fragment,{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-6 left",children:[Object(O.jsx)("img",{src:"/assets/Host-image.jpg",className:"img-fluid",alt:"Place"}),Object(O.jsx)("h1",{className:"imgtext",children:"What kind of space will guests have?"})]}),Object(O.jsxs)("div",{className:"col-6 right",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-10 cards",children:Object(O.jsx)("button",{className:"cardbtn",children:Object(O.jsx)("h4",{children:"An entire place"})})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-10 cards",children:Object(O.jsx)("button",{className:"cardbtn",children:Object(O.jsx)("h4",{children:"A private room"})})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-10 cards",children:Object(O.jsx)("button",{className:"cardbtn",children:Object(O.jsx)("h4",{children:"A shared room"})})})}),Object(O.jsxs)("div",{className:"row mt-4 justify-content-center",children:[Object(O.jsx)("div",{className:"col-5 backbtn",children:Object(O.jsx)("button",{className:"btn btn-outline-dark btn-lg",children:"Back"})}),Object(O.jsx)("div",{className:"col-5 nextbtn",children:Object(O.jsx)("button",{className:"btn btn-dark btn-lg",children:"Next"})})]})]})]})})}),g=function(){return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)(n.a,{children:Object(O.jsxs)(r.c,{children:[Object(O.jsx)(r.a,{path:"/profile",exact:!0,component:N}),Object(O.jsx)(r.a,{path:"/editprofile",exact:!0,component:p}),Object(O.jsx)(r.a,{path:"/describeplace",exact:!0,component:v}),Object(O.jsx)(r.a,{path:"/spacetype",exact:!0,component:f}),Object(O.jsx)(r.a,{path:"/",exact:!0,component:u}),Object(O.jsx)(r.a,{children:"404 Not Found"})]})})})},w=c(13),y={userProfile:{email:"",password:""},loggedIn:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case m:return{userProfile:s};case h:return{state:e};default:return e}},P=Object(w.a)({userLogin:E}),k=Object(w.b)(P,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(Object(O.jsx)(b.a,{store:k,children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ec3e4ae2.chunk.js.map