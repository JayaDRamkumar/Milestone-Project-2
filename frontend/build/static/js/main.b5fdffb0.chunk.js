(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{50:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),r=c(17),a=c.n(r),i=c(12),j=c(6),o=c(54),b=c(56),l=c(55),d=c(35),h=c(53),O=c(4);var u=function(){return Object(O.jsxs)(o.a,{bg:"dark",variant:"dark",children:[Object(O.jsx)("link",{rel:"stylesheet",href:"../../public/style.css"}),Object(O.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",crossorigin:"anonymous"}),Object(O.jsx)(o.a.Brand,{as:i.b,to:"/",children:"The Modern Movie Portal"}),Object(O.jsxs)(b.a,{className:"mr-auto",children:[Object(O.jsx)(b.a.Link,{as:i.b,to:"/",children:"Home"}),Object(O.jsx)(b.a.Link,{as:i.b,to:"/about",children:"About"})]}),Object(O.jsxs)(l.a,{children:[Object(O.jsx)(d.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(O.jsx)(h.a,{variant:"outline-light",children:"Search"})]})]})},x=c(19),p=c(22),m=c(16);var v=function(){Object(j.f)();var e=Object(s.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!0),a=Object(m.a)(r,2),o=a[0],b=a[1],l=Object(s.useState)(null),d=Object(m.a)(l,2),h=d[0],u=d[1];Object(s.useEffect)((function(){var e;!function(){(e=e||Object(p.a)(Object(x.a)().mark((function e(){var t,c;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5001/movies");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.next=8,t.json();case 8:c=e.sent,n(c),b(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),u(e.t0),b(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}()}),[]);var v=null;return v=o?Object(O.jsx)("p",{children:"Loading..."}):h?Object(O.jsxs)("p",{children:["Error: ",h.message]}):c.map((function(e){return Object(O.jsxs)("div",{className:"col-sm-6",children:[Object(O.jsx)("h2",{children:Object(O.jsx)(i.b,{to:"/movies/".concat(e._id),children:e.title})}),Object(O.jsx)("p",{className:"text-center",children:e.rated}),Object(O.jsx)("img",{style:{width:"200px"},src:e.pic,alt:e.title}),Object(O.jsxs)("p",{className:"text-center",children:["Rated ",e.rated,", ",e.duration," Minutes"]})]},e._id)})),Object(O.jsxs)("main",{children:[Object(O.jsx)("h1",{children:"Modern Movie Portal -HOME"}),Object(O.jsx)("div",{className:"row",children:v})]})};var f=function(){var e=Object(j.g)().id,t=Object(j.f)(),c=Object(s.useState)(null),n=Object(m.a)(c,2),r=n[0],a=n[1],i=Object(s.useState)(!0),o=Object(m.a)(i,2),b=o[0],l=o[1],d=Object(s.useState)(null),h=Object(m.a)(d,2),u=h[0],v=h[1];return Object(s.useEffect)((function(){var t;!function(){(t=t||Object(p.a)(Object(x.a)().mark((function t(){var c,s;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5001/movies/".concat(e));case 3:if((c=t.sent).ok){t.next=6;break}throw new Error("Network response was not ok");case 6:return t.next=8,c.json();case 8:s=t.sent,a(s),l(!1),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),v(t.t0),l(!1);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}()}),[e]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:r?r.title:"Loading..."}),b?Object(O.jsx)("p",{children:"Loading..."}):u?Object(O.jsxs)("p",{children:["Error: ",u.message]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:r.rated}),Object(O.jsx)("img",{style:{width:"200px"},src:r.pic,alt:r.title}),Object(O.jsxs)("p",{children:["Rated ",r.rated,", ",r.duration," Minutes"]}),Object(O.jsx)("button",{onClick:function(){return t.goBack()},children:"Go Back"})]})]})};var k=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(u,{}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:v}),Object(O.jsx)(j.a,{exact:!0,path:"/movies",component:v}),Object(O.jsx)(j.a,{exact:!0,path:"/movies/:id",component:f})]})]})};a.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.b5fdffb0.chunk.js.map