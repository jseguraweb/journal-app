(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n(32)},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),l=n(9),i=n(2),s=(n(16),n(17),n(3)),u=n(4),m=function(e){var t=e.changeCategory,n=e.category,r=Object(a.useState)(!1),o=Object(i.a)(r,2),l=o[0],m=o[1],f=Object(u.b)({marginTop:0,from:{marginTop:-1e3,transitionDuration:".8s"}}),p=Object(u.b)({opacity:l?1:0,display:l?"block":"none",zIndex:l?2:1});return c.a.createElement(u.a.div,{style:f},c.a.createElement("header",null,c.a.createElement("h1",{onClick:function(){return t("business")}},"The Journal App"),l?c.a.createElement(s.f,{className:"icon-menu",onClick:function(){return m(!l)}}):c.a.createElement(s.a,{className:"icon-menu",onClick:function(){return m(!l)}})),c.a.createElement(u.a.nav,{style:p},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){m(!l),t("Business")},style:{backgroundColor:"Business"===n?"#fff":"#000",color:"Business"===n?"#000":"#fff"}},"BUSINESS"),c.a.createElement("li",{onClick:function(){m(!l),t("Sport")},style:{backgroundColor:"Sport"===n?"#fff":"#000",color:"Sport"===n?"#000":"#fff"}},"SPORT"),c.a.createElement("li",{onClick:function(){m(!l),t("Entertainment")},style:{backgroundColor:"Entertainment"===n?"#fff":"#000",color:"Entertainment"===n?"#000":"#fff"}},"ENTERTAINMENT"),c.a.createElement("li",{onClick:function(){m(!l),t("Technology")},style:{backgroundColor:"Technology"===n?"#fff":"#000",color:"Technology"===n?"#000":"#fff"}},"TECHNOLOGY"))))},f=(n(18),n(19),function(e){var t=e.article;return c.a.createElement("article",null,c.a.createElement("h3",{className:"title"},t.title),c.a.createElement("div",{className:"image",style:{backgroundImage:'url("'.concat(t.img,'")')}}),c.a.createElement("p",{className:"description"},t.content),c.a.createElement("p",{className:"link"},c.a.createElement("a",{href:t.source_url},"Continue reading")))}),p=function(e){var t=e.news,n=e.category,r=e.userInput,o=Object(a.useState)(""),l=Object(i.a)(o,2),s=l[0],m=l[1],p=Object(u.b)({opacity:1,from:{opacity:0,transitionDelay:".5s",transitionDuration:".5s"}});return Object(a.useEffect)((function(){m(t.filter((function(e){return e.category===n})).map((function(e,t){return c.a.createElement(u.a.div,{style:p,className:"box",key:t},c.a.createElement(f,{key:t,article:e}))})))}),[n]),Object(a.useEffect)((function(){m(t.filter((function(e){return-1!==e.title.toLocaleLowerCase().indexOf(r.toLocaleLowerCase())})).map((function(e,t){return e.content&&e.category===n?c.a.createElement(u.a.div,{style:p,className:"box",key:t},c.a.createElement(f,{key:t,article:e})):null})))}),[r]),console.log("news in pool: ",t),console.log("news filtered: ",t.filter((function(e){return e.category===n}))),c.a.createElement("div",{className:"container"},s)},b=(n(20),n(10)),E=n(11),g=function(){return c.a.createElement("div",{className:"loadingBackground"},c.a.createElement("p",{className:"loading-message"},"loading ",c.a.createElement(b.a,{icon:E.a,spin:!0})))},d=(n(26),function(e){var t=e.handleSubmit,n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],l=r[1],m=Object(u.b)({marginTop:0,from:{marginTop:-1e3,transitionDuration:".8s"}});return c.a.createElement(u.a.form,{style:m,action:"#",className:"search-bar",onSubmit:function(e){e.preventDefault(),t(o),l("")}},c.a.createElement("input",{type:"text",onChange:function(e){l(e.target.value)},value:o}),c.a.createElement("button",{className:"search-btn"},c.a.createElement(s.e,{className:"search-icon"})))}),h=(n(27),function(){return c.a.createElement("footer",null,c.a.createElement("p",{className:"copyright"},"Made with ",c.a.createElement(s.c,{className:"heart"})," by Jaime Segura"),c.a.createElement("div",{className:"icons"},c.a.createElement("a",{href:"https://github.com/jseguraweb",className:"icon"},c.a.createElement(s.b,null))," ",c.a.createElement("a",{href:"https://www.linkedin.com/in/jaime-segura/",className:"icon"},c.a.createElement(s.d,null))))}),y=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),u=Object(i.a)(s,2),f=(u[0],u[1],Object(a.useState)([])),b=Object(i.a)(f,2),E=(b[0],b[1],Object(a.useState)([])),y=Object(i.a)(E,2),j=(y[0],y[1],Object(a.useState)([])),O=Object(i.a)(j,2),k=(O[0],O[1],Object(a.useState)(!0)),N=Object(i.a)(k,2),v=N[0],S=N[1],w=Object(a.useState)(""),C=Object(i.a)(w,2),T=C[0],x=C[1],B=Object(a.useState)(""),I=Object(i.a)(B,2),D=I[0],L=I[1],R=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://newscafapi.p.rapidapi.com/apirapid/news/",{method:"GET",headers:{"x-rapidapi-host":"newscafapi.p.rapidapi.com","x-rapidapi-key":"ed00fcb69dmsh67123677c95871cp1544abjsn90b6a0b9e599"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n),S(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("ERROR:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();console.log("News: ",n),console.log("category: ",T);return Object(a.useEffect)((function(){R(),x("Business")}),[]),c.a.createElement("div",null,c.a.createElement(m,{changeCategory:function(e){x(e),L("")},category:T}),c.a.createElement(d,{handleSubmit:function(e){L(e)}}),n.length>0?c.a.createElement(p,{news:n,category:T,userInput:D}):null,v?c.a.createElement(g,null):null,n.length>0?c.a.createElement(h,null):null)},j=n(12),O=n.n(j);n(31);O.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.2467d828.chunk.js.map