(this.webpackJsonpminimalismpics_renewed=this.webpackJsonpminimalismpics_renewed||[]).push([[0],{108:function(e,t,n){e.exports=n(178)},113:function(e,t,n){},161:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(6),s=n.n(c),r=(n(113),n(31)),l=n(78),i=n.n(l),u=n(17),m=n(79),p=n.n(m),f=n(181),_=n(183),d=function(e){var t=Object(o.useState)(""),n=Object(u.a)(t,2),c=n[0],s=n[1];return a.a.createElement(f.a,{className:p.a.input,onPressEnter:function(t){e.onChange(c),console.log(1231231)},onChange:function(e){s(e.target.value)},allowClear:!0,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u043b\u043e\u0432\u0443",suffix:a.a.createElement(_.a,{onClick:function(t){e.onChange(c)}})})},h=function(e){return a.a.createElement("header",{className:i.a.header},a.a.createElement("div",null,"minimalispics."),a.a.createElement(d,{onChange:function(t){e.onSearch(t)},delay:1e3}))},E=Object(r.b)(null,(function(e){return{onSearch:function(t){return e(function(e){return{type:"HANDLE_SEARCH",value:e}}(t))}}}))(h),b=n(64),g=n.n(b),v=n(89),j=n(182),O=n(90),w=n.n(O),N=n(49),S=n.n(N),k=n(50),x=n.n(k),C=(n(161),n(180)),y=function(e){var t=Object(o.useState)(!1),n=Object(u.a)(t,2),c=n[0],s=n[1],r=e.post;return Object(o.useEffect)((function(){var e=new Image,t=new Image;e.src=r.urls.thumb,t.src=r.urls.regular}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{key:r.id+e.index,src:r.urls.thumb,className:x.a.post,onClick:function(){s(!0)}}),a.a.createElement(C.a,{visible:c,className:x.a.postModal+" modal",centered:!0,width:820,closable:!1,onCancel:function(){s(!1)},footer:!1},a.a.createElement("div",{onClick:function(){s(!1)},className:x.a.postModal__container},a.a.createElement("img",{onClick:function(t){t.stopPropagation(),console.log(e.post)},key:r.id+e.index,src:r.urls.regular,className:x.a.postModal__img}))))},H=n(98),M=n.n(H),P=function(e){return a.a.createElement("div",{className:M.a.icon,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})},L=function(e){var t=Object(r.c)((function(e){return e})),n=new w.a({accessKey:"LuPHM_pd_YAH00c9ssorJV5fYEc0rvK9X0ST1oIFV_s"}),c=Object(o.useState)(!1),s=Object(u.a)(c,2),l=s[0],i=s[1],m=Object(o.useState)(!1),p=Object(u.a)(m,2),f=p[0],_=p[1],d=Object(o.useState)(1),h=Object(u.a)(d,2),E=h[0],b=h[1],O=Object(o.useState)(!1),N=Object(u.a)(O,2),k=N[0],x=N[1],C=Object(o.useState)({posts:[],horizontal:0,vertical:0,score:0}),H=Object(u.a)(C,2),M=H[0],L=H[1],T=Object(o.useState)({posts:[],horizontal:0,vertical:0,score:0}),z=Object(u.a)(T,2),A=z[0],I=z[1],D=Object(o.useState)({posts:[],horizontal:0,vertical:0,score:0}),F=Object(u.a)(D,2),R=F[0],q=F[1];return Object(o.useEffect)((function(){var e=t,o=e?[e,E,30,"latest"]:[E,30,"lates"];l&&!f||function(){var t=Object(v.a)(g.a.mark((function t(){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(a=n[e?"search":"photos"])[e?"photos":"listPhotos"].apply(a,o).then((function(e){if(console.log(e),e.ok)return e.json();throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430")})).then((function(t){console.log(t,"3123123");var n=e?t.results:t,o=M.score?M.score:0,a=M.posts?M.posts:[],c=A.score?A.score:0,s=A.posts?A.posts:[],r=R.score?R.score:0,u=R.posts?R.posts:[];n.forEach((function(e){o<r&&o<c||o===r||o===c?(o+=e.height/e.width,a.push(e)):c<o&&c<r||o===r||o===c?(c+=e.height/e.width,s.push(e)):(r+=e.height/e.width,u.push(e))})),L({posts:a,score:o}),I({posts:s,score:c}),q({posts:u,score:r}),b(E+1),l||i(!0),f&&_(!1)})).catch((function(e){j.b.error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[l,f]),Object(o.useEffect)((function(){L({posts:[],score:0}),I({posts:[],score:0}),q({posts:[],score:0}),b(1),i(!1)}),[t]),Object(o.useEffect)((function(){var e=window.document.getElementsByTagName("html")[0],t=!1;return window.addEventListener("scroll",(function(){e.scrollTop+e.clientHeight>=e.scrollHeight-800&&_(!0),e.scrollTop>=100&&!t?(x(!0),t=!0):e.scrollTop<100&&t&&(x(!1),t=!1)})),function(){window.removeEventListener("scroll")}}),[]),a.a.createElement(a.a.Fragment,null,k?a.a.createElement(P,null):"",l?a.a.createElement("div",{className:S.a.main},a.a.createElement("div",{className:S.a.column},M.posts.map((function(e,t){return a.a.createElement(y,{post:e,index:t,key:e.id+t})}))),a.a.createElement("div",{className:S.a.column__center},A.posts.map((function(e,t){return a.a.createElement(y,{post:e,index:t,key:e.id+t})}))),a.a.createElement("div",{className:S.a.column},R.posts.map((function(e,t){return a.a.createElement(y,{post:e,index:t,key:e.id+t})})))):"")},T=Object(r.b)()(L),z=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,null),a.a.createElement(T,null))},A=function(e,t){switch(t.type){case"HANDLE_SEARCH":return t.value;default:return e}},I=n(51),D=Object(I.b)(A,"");s.a.render(a.a.createElement(r.a,{store:D},a.a.createElement(z,null)),document.getElementById("root"))},49:function(e,t,n){e.exports={main:"Home_main__1pRfO",column:"Home_column__XRaU9",column__center:"Home_column__center__3pqzq",item:"Home_item__3mMC_"}},50:function(e,t,n){e.exports={post:"Post_post__1DL5P",postModal:"Post_postModal__2M_0z",postModal__container:"Post_postModal__container__1qxVd",postModal__img:"Post_postModal__img__2Iu0k"}},78:function(e,t,n){e.exports={header:"Header_header__257pi"}},79:function(e,t,n){e.exports={input:"Search_input__2Nj7D"}},98:function(e,t,n){e.exports={icon:"ScrollButton_icon__24axN"}}},[[108,1,2]]]);
//# sourceMappingURL=main.6562296e.chunk.js.map