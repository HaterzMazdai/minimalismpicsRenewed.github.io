(this.webpackJsonpminimalismpics_renewed=this.webpackJsonpminimalismpics_renewed||[]).push([[0],{107:function(e,t,n){e.exports={icon:"ScrollButton_icon__24axN"}},117:function(e,t,n){e.exports=n(187)},122:function(e,t,n){},170:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(7),s=n.n(o),r=(n(122),n(36)),i=n(18),l=n(87),u=n.n(l),m=n(88),p=n.n(m),d=n(190),f=n(192),_=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],s=n[1];return c.a.createElement(d.a,{className:p.a.input,onPressEnter:function(t){e.onChange(o)},onChange:function(e){s(e.target.value)},allowClear:!0,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u043b\u043e\u0432\u0443",suffix:c.a.createElement(f.a,{onClick:function(t){e.onChange(o)}})})},h=n(9),E=function(e){var t=Object(h.e)(),n=Object(a.useState)("/minimalismpicsRenewed/auth"===t.location.pathname),o=Object(i.a)(n,2),s=o[0],r=o[1];return c.a.createElement("header",{className:u.a.header},c.a.createElement("div",{onClick:function(){t.push(s?"/minimalismpicsRenewed/":"/minimalismpicsRenewed/auth"),r(!s)}},"minimalispics."),!s&&c.a.createElement(_,{onChange:function(t){e.onSearch(t)},delay:1e3}))},b=Object(r.b)(null,(function(e){return{onSearch:function(t){return e(function(e){return{type:"HANDLE_SEARCH",value:e}}(t))}}}))(E),w=n(72),j=n.n(w),O=n(98),v=n(191),g=n(99),k=n.n(g),C=n(55),S=n.n(C),x=n(56),N=n.n(x),y=(n(170),n(189)),H=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],s=n[1],r=e.post;return Object(a.useEffect)((function(){window.innerWidth<=960||((new Image).src=r.urls.regular)}),[r.urls.regular]),c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{alt:"",key:r.id+e.index,src:r.urls.thumb,className:N.a.post,onClick:function(){s(!0)}}),c.a.createElement(y.a,{visible:o,className:"".concat(N.a.postModal," post"),centered:!0,width:820,closable:!1,onCancel:function(){s(!1)},footer:!1},c.a.createElement("div",{onClick:function(){s(!1)},className:N.a.postModal__container},c.a.createElement("img",{alt:"",onClick:function(e){e.stopPropagation()},key:r.id+e.index,src:r.urls.regular,className:N.a.postModal__img}))))},M=n(107),R=n.n(M),P=function(e){return c.a.createElement("div",{className:R.a.icon,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})},L=function(e){var t=Object(r.c)((function(e){return e})),n=new k.a({accessKey:"LuPHM_pd_YAH00c9ssorJV5fYEc0rvK9X0ST1oIFV_s",secret:"dt3IVL8Qv1F-V8J8IZqoYcqQCil1FTkBp0cjBqakaVY",callbackUrl:"https://haterzmazdai.github.io/minimalismpicsRenewed/"}),o=Object(a.useState)(!1),s=Object(i.a)(o,2),l=s[0],u=s[1],m=Object(a.useState)(!1),p=Object(i.a)(m,2),d=p[0],f=p[1],_=Object(a.useState)(1),h=Object(i.a)(_,2),E=h[0],b=h[1],w=Object(a.useState)(!1),g=Object(i.a)(w,2),C=g[0],x=g[1],N=Object(a.useState)({posts:[],score:0}),y=Object(i.a)(N,2),M=y[0],R=y[1],L=Object(a.useState)({posts:[],score:0}),T=Object(i.a)(L,2),q=T[0],A=T[1],I=Object(a.useState)({posts:[],score:0}),V=Object(i.a)(I,2),B=V[0],F=V[1];return Object(a.useEffect)((function(){var e=t,a=e?[e,E,30,"latest"]:[E,30,"lates"];l&&!d||function(){var t=Object(O.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(c=n[e?"search":"photos"])[e?"photos":"listPhotos"].apply(c,a).then((function(e){if(e.ok)return e.json();throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430")})).then((function(t){var n=e?t.results:t,a=M.score||0,c=M.posts||[],o=q.score||0,s=q.posts||[],r=B.score||0,i=B.posts||[];n.forEach((function(e){a<r&&a<o||a===r||a===o?(a+=e.height/e.width,c.push(e)):o<a&&o<r||a===r||a===o?(o+=e.height/e.width,s.push(e)):(r+=e.height/e.width,i.push(e))})),R({posts:c,score:a}),A({posts:s,score:o}),F({posts:i,score:r}),b(E+1),l||u(!0),d&&f(!1)})).catch((function(e){v.b.error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[l,d]),Object(a.useEffect)((function(){R({posts:[],score:0}),A({posts:[],score:0}),F({posts:[],score:0}),b(1),u(!1)}),[t]),Object(a.useEffect)((function(){var e=window.document.getElementsByTagName("html")[0],t=!1,n=function(){e.scrollTop+e.clientHeight>=e.scrollHeight-800&&f(!0),e.scrollTop>=100&&!t?(x(!0),t=!0):e.scrollTop<100&&t&&(x(!1),t=!1)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),c.a.createElement(c.a.Fragment,null,C?c.a.createElement(P,null):"",l?c.a.createElement("div",{className:S.a.main,onClick:function(){var e=n.auth.getAuthenticationUrl(["public","write_likes"]);window.location.assign(e)}},c.a.createElement("div",{className:S.a.column},M.posts.map((function(e,t){return c.a.createElement(H,{post:e,index:t,key:e.id+t})}))),c.a.createElement("div",{className:S.a.column__center},q.posts.map((function(e,t){return c.a.createElement(H,{post:e,index:t,key:e.id+t})}))),c.a.createElement("div",{className:S.a.column},B.posts.map((function(e,t){return c.a.createElement(H,{post:e,index:t,key:e.id+t})})))):"")},T=Object(r.b)()(L),q=function(){return c.a.createElement("div",null,"\u041f\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044f...")},A=n(68),I=function(){return c.a.createElement(A.a,null,c.a.createElement(b,null),c.a.createElement(h.a,{exact:!0,path:"/minimalismpicsRenewed/"},c.a.createElement(T,null)),c.a.createElement(h.a,{path:"/minimalismpicsRenewed/auth"},c.a.createElement(q,null)))},V=function(e,t){switch(t.type){case"HANDLE_SEARCH":return t.value;default:return e}},B=n(57),F=Object(B.b)(V,"");s.a.render(c.a.createElement(r.a,{store:F},c.a.createElement(I,null)),document.getElementById("root"))},55:function(e,t,n){e.exports={main:"Home_main__1pRfO",column:"Home_column__XRaU9",column__center:"Home_column__center__3pqzq",item:"Home_item__3mMC_"}},56:function(e,t,n){e.exports={post:"Post_post__1DL5P",postModal:"Post_postModal__2M_0z",postModal__container:"Post_postModal__container__1qxVd",postModal__img:"Post_postModal__img__2Iu0k"}},87:function(e,t,n){e.exports={header:"Header_header__257pi"}},88:function(e,t,n){e.exports={input:"Search_input__2Nj7D"}}},[[117,1,2]]]);
//# sourceMappingURL=main.428b95a2.chunk.js.map