(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[0],{105:function(e,t,A){"use strict";A.d(t,"b",(function(){return o}));var n=A(34),r=A(5),a="dialogs/SEND_MESSAGE",c={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it?"},{id:3,message:"Goodbye"},{id:4,message:"Yo"},{id:5,message:"Yo"}]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if(t.type===a){var A={id:6,message:t.newMessageBody};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(n.a)(e.messages),[A])})}return e};var o=function(e){return{type:a,newMessageBody:e}}},106:function(e,t,A){"use strict";A.d(t,"d",(function(){return B})),A.d(t,"c",(function(){return w})),A.d(t,"b",(function(){return Q})),A.d(t,"e",(function(){return k}));var n=A(13),r=A(34),a=A(5),c=A(9),o=A.n(c),i=A(16),s="users/FOLLOW",u="users/UNFOLLOW",l="users/SET_STATE",d="users/SET_CURRENT_PAGE",g="users/SET_TOTAL_USERS_COUNT",j="users/TOGGLE_IS_FETCHING",h="users/TOGGLE_IS_FOLLOWING_PROGRESS",b={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},p=function(e){return{type:s,userID:e}},f=function(e){return{type:u,userID:e}},m=function(e){return{type:l,users:e}},O=function(e){return{type:d,page:e}},C=function(e){return{type:j,isFetching:e}},E=function(e,t){return{type:h,isFetching:e,userID:t}},B=function(e,t){return function(){var A=Object(n.a)(o.a.mark((function A(n){var r;return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n(C(!0)),n(O(e)),A.next=4,i.d.getUsers(e,t);case 4:r=A.sent,n(C(!1)),n(m(r.items)),n((a=r.totalCount,{type:g,TotalUsersCount:a}));case 8:case"end":return A.stop()}var a}),A)})));return function(e){return A.apply(this,arguments)}}()},w=function(e,t){return function(){var A=Object(n.a)(o.a.mark((function A(n){var r;return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n(C(!0)),n(O(e)),A.next=4,i.d.getUsers2(e,t);case 4:r=A.sent,n(C(!1)),n(m(r.items)),n(O(e));case 8:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},x=function(){var e=Object(n.a)(o.a.mark((function e(t,A,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,r)),e.next=3,A(r);case 3:0===e.sent.resultCode&&t(n(r)),t(E(!1,r));case 6:case"end":return e.stop()}}),e)})));return function(t,A,n,r){return e.apply(this,arguments)}}(),Q=function(e){return function(){var t=Object(n.a)(o.a.mark((function t(A){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(A,i.b.follow,p,e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(n.a)(o.a.mark((function t(A){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(A,i.b.unfollow,f,e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(a.a)(Object(a.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(a.a)(Object(a.a)({},e),{},{followed:!0}):e}))});case u:return Object(a.a)(Object(a.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(a.a)(Object(a.a)({},e),{},{followed:!1}):e}))});case l:return Object(a.a)(Object(a.a)({},e),{},{users:Object(r.a)(t.users)});case d:return Object(a.a)(Object(a.a)({},e),{},{currentPage:t.page});case g:return Object(a.a)(Object(a.a)({},e),{},{totalUsersCount:t.TotalUsersCount});case j:return Object(a.a)(Object(a.a)({},e),{},{isFetching:t.isFetching});case h:return Object(a.a)(Object(a.a)({},e),{},{followingInProgress:e.isFetching?[].concat(Object(r.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e===t.userID}))});default:return e}}},131:function(e,t,A){e.exports={img:"Preloader_img__3RUQ1"}},137:function(e,t,A){e.exports={commonButton:"CommonButton_commonButton__3LnAC"}},14:function(e,t,A){e.exports={nav:"Navbar_nav__1Clwx",item:"Navbar_item__3eHEn",active:"Navbar_active__1RlDe"}},16:function(e,t,A){"use strict";A.d(t,"d",(function(){return a})),A.d(t,"b",(function(){return c})),A.d(t,"a",(function(){return o})),A.d(t,"c",(function(){return i}));var n=A(133),r=A.n(n).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"44d03ca4-768d-467d-8495-5db696fe39cb"}}),a={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getUsers2:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},c={follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},o={getAuthUserData:function(){return r.get("auth/me")},login:function(e){var t=e.email,A=e.password,n=e.rememberMe;return r.post("auth/login",{email:t,password:A,rememberMe:n})},logout:function(){return r.delete("auth/login")}},i={getProfileData:function(e){return r.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))},updatePhoto:function(e){return r.put("profile/photo",{image:e}).then((function(e){return e.data}))}}},167:function(e,t,A){},292:function(e,t,A){"use strict";A.r(t);var n=A(0),r=A.n(n),a=(A(95),function(e){e&&e instanceof Function&&A.e(6).then(A.bind(null,302)).then((function(t){var A=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;A(e),n(e),r(e),a(e),c(e)}))}),c=A(65),o=A.n(c),i=A(51),s=A(52),u=A(53),l=A(63),d=(A(167),A(30)),g=A(19),j=A(1),h=function(e){return Object(j.jsx)("div",{children:"News"})},b=function(e){return Object(j.jsx)("div",{children:"Settings"})},p=function(e){return Object(j.jsx)("div",{children:"Music"})},f=A(64),m=A(21),O=A(10),C=A(13),E=A(5),B=A(9),w=A.n(B),x=A(16),Q=A(40),k="auth/SET_USER_DATA",I={id:2,email:"",login:"",isAuth:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type===k?Object(E.a)(Object(E.a)({},e),t.payload):e},S=function(e,t,A,n){return{type:k,payload:{id:e,email:t,login:A,isAuth:n}}},D="app/INITIALIZED_SUCCESS",R={initialized:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return t.type===D?Object(E.a)(Object(E.a)({},e),{},{initialized:!0}):e},U=A(93),F=A(105),J={friends:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"}]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;return e},y=A(106),K=A(135),N=A(130),L=Object(O.c)({profilePage:U.b,dialogsPage:F.a,sidebar:M,users:y.a,auth:v,form:N.a,app:G}),T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||O.d,H=Object(O.e)(L,T(Object(O.a)(K.a))),Y=A(23),P=A(128),W=A(129),z=A(86),q=A(87),V=A(49),Z=A.n(V),_=["loginTC","isAuth","id","login"],X=r.a.memo((function(e){var t=e.loginTC,A=e.isAuth,n=e.id,r=e.login;Object(Y.a)(e,_);return console.log(A),console.log(n),console.log(r),A&&n&&2!==n&&r?Object(j.jsx)(d.a,{to:"/profile"}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Login"}),Object(j.jsx)(ee,{onSubmit:function(e){t(e)}})]})})),$=r.a.memo((function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsx)("div",{children:Object(j.jsx)(P.a,{component:z.a,placeholder:"Email",name:"email",validate:[q.b]})}),Object(j.jsx)("div",{children:Object(j.jsx)(P.a,{component:z.a,name:"password",placeholder:"Password",type:"password",validate:[q.b]})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(P.a,{component:"input",name:"rememberMe",type:"checkbox"}),"remember me"]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Login"})}),e.error&&Object(j.jsx)("div",{className:Z.a.formSummaryError,children:e.error})]})})),ee=Object(W.a)({form:"login"})($),te=Object(m.b)((function(e){return{isAuth:e.auth.isAuth,id:e.auth.id,login:e.auth.login}}),{loginTC:function(e){var t=e.email,A=e.password,n=e.rememberMe;return function(){var e=Object(C.a)(w.a.mark((function e(r){var a,c,o,i,s,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.login({email:t,password:A,rememberMe:n});case 2:0===(a=e.sent).data.resultCode?(c=a.data.data,o=c.id,i=c.email,s=c.login,console.log(a.data.data),r(S(o,i,s,!0))):(u=a.data.messages.length>0?a.data.messages[0]:"Some error",r(Object(Q.a)("login",{_error:u})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(X),Ae=A(14),ne=A.n(Ae);function re(e){return Object(j.jsxs)("nav",{className:ne.a.nav,children:[Object(j.jsx)("div",{className:ne.a.item,children:Object(j.jsx)(g.b,{to:"/profile",activeClassName:ne.a.active,children:"Profile"})}),Object(j.jsx)("div",{className:"".concat(ne.a.item),children:Object(j.jsx)(g.b,{to:"/dialogs",activeClassName:ne.a.active,children:"Messages"})}),Object(j.jsx)("div",{className:ne.a.item,children:Object(j.jsx)(g.b,{to:"/news",activeClassName:ne.a.active,children:"News"})}),Object(j.jsx)("div",{className:ne.a.item,children:Object(j.jsx)(g.b,{to:"/music",activeClassName:ne.a.active,children:"Music"})}),Object(j.jsx)("div",{className:ne.a.item,children:Object(j.jsx)(g.b,{to:"/settings",activeClassName:ne.a.active,children:"Settings"})}),Object(j.jsx)("div",{className:ne.a.item,children:Object(j.jsx)(g.b,{className:ne.a.item,to:"/users",activeClassName:ne.a.active,children:"Users"})})]})}var ae=r.a.memo(re),ce=function(e){return function(t){return Object(j.jsx)(r.a.Suspense,{fallback:Object(j.jsx)(f.a,{}),children:Object(j.jsx)(e,Object(E.a)({},t))})}},oe=A(35),ie=A.n(oe),se=A(137),ue=A.n(se),le=["onClick","onBlur","className","text"],de=function(e){var t=e.onClick,A=e.onBlur,n=e.className,r=e.text,a=(Object(Y.a)(e,le),"".concat(n," ").concat(ue.a.commonButton));return Object(j.jsx)("button",{onClick:function(e){t&&t(e)},onBlur:A,className:a,children:r})},ge=A.p+"static/media/cat-black-face-svgrepo-com.f7b5c12d.svg",je=["logoutTC","login","isAuth"],he=r.a.memo((function(e){var t=e.logoutTC,A=e.login,n=e.isAuth;Object(Y.a)(e,je);return console.log({login:A,isAuth:n}),Object(j.jsxs)("header",{className:ie.a.header,children:[Object(j.jsxs)("span",{className:ie.a.logo,children:[Object(j.jsx)("img",{className:ie.a.img,src:ge}),"wor",Object(j.jsx)("span",{children:"k"})]}),Object(j.jsx)("div",{className:ie.a.loginBlock,children:n?Object(j.jsxs)("div",{className:ie.a.blockWithLogout,children:[Object(j.jsxs)("span",{children:["@",A]}),Object(j.jsx)(de,{onClick:t,text:"Log out"})]}):Object(j.jsx)(g.b,{className:ie.a.blockWithLogin,to:"/login",children:"Login"})})]})})),be=(r.a.Component,Object(m.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logoutTC:function(){return function(){var e=Object(C.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.logout();case 2:0===e.sent.data.resultCode&&t(S(0,"null","null",!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(he)),pe=r.a.lazy((function(){return A.e(5).then(A.bind(null,305))})),fe=r.a.lazy((function(){return A.e(4).then(A.bind(null,303))})),me=r.a.lazy((function(){return A.e(3).then(A.bind(null,304))})),Oe=function(e){Object(u.a)(A,e);var t=Object(l.a)(A);function A(){return Object(i.a)(this,A),t.apply(this,arguments)}return Object(s.a)(A,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(be,{}),Object(j.jsx)(ae,{}),Object(j.jsxs)("div",{className:"app-wrapper-content",children:[Object(j.jsx)(d.b,{exact:!0,path:"/profile/:userId",render:ce(me)}),Object(j.jsx)(d.b,{exact:!0,path:"/profile",render:ce(me)}),Object(j.jsx)(d.b,{path:"/dialogs",render:ce(pe)}),Object(j.jsx)(d.b,{path:"/news",render:function(){return Object(j.jsx)(h,{})}}),Object(j.jsx)(d.b,{path:"/music",render:function(){return Object(j.jsx)(p,{})}}),Object(j.jsx)(d.b,{path:"/settings",render:function(){return Object(j.jsx)(b,{})}}),Object(j.jsx)(d.b,{path:"/users",render:ce(fe)}),Object(j.jsx)(d.b,{path:"/login",render:function(){return Object(j.jsx)(te,{})}})]}),Object(j.jsx)("div",{className:"rigth-content"})]}):Object(j.jsx)(f.a,{})}}]),A}(r.a.Component),Ce=Object(O.d)(d.f,Object(m.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(C.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(function(){var e=Object(C.a)(w.a.mark((function e(t){var A,n,r,a,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.getAuthUserData();case 2:0===(A=e.sent).data.resultCode&&(n=A.data.data,r=n.id,a=n.email,c=n.login,console.log(A.data.data),t(S(r,a,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:t({type:D});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Oe),Ee=function(){return Object(j.jsx)(g.a,{children:Object(j.jsx)(m.a,{store:H,children:Object(j.jsx)(Ce,{})})})};o.a.render(Object(j.jsx)(Ee,{}),document.getElementById("root")),a()},35:function(e,t,A){e.exports={commonButton:"Header_commonButton__8CtAN",header:"Header_header__1oJvp",loginBlock:"Header_loginBlock__3g51X",blockWithLogin:"Header_blockWithLogin__xe60A",logo:"Header_logo__1VX_2",img:"Header_img__3r0bt",blockWithLogout:"Header_blockWithLogout__2HUYd"}},49:function(e,t,A){e.exports={formControl:"FormsControls_formControl__3Sf2u",error:"FormsControls_error__2aT-O",formSummaryError:"FormsControls_formSummaryError__3VZXA"}},64:function(e,t,A){"use strict";A(0);var n=A(131),r=A.n(n),a=A(1);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:r.a.img,src:"data:image/gif;base64,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"})})}},86:function(e,t,A){"use strict";A.d(t,"b",(function(){return d})),A.d(t,"a",(function(){return g}));var n=A(5),r=A(23),a=(A(0),A(49)),c=A.n(a),o=A(1),i=["input","meta","children"],s=["input","meta","children"],u=["input","meta","children"],l=function(e){e.input;var t=e.meta,A=e.children,n=(Object(r.a)(e,i),t.error&&t.touched);return Object(o.jsxs)("div",{className:c.a.formControl+" "+(n?c.a.error:" "),children:[Object(o.jsx)("div",{children:A}),n&&Object(o.jsx)("span",{children:t.error})]})},d=function(e){var t=e.input,A=(e.meta,e.children,Object(r.a)(e,s));return Object(o.jsx)(l,Object(n.a)(Object(n.a)({},e),{},{children:Object(o.jsx)("textarea",Object(n.a)(Object(n.a)({},t),A))}))},g=function(e){var t=e.input,A=(e.meta,e.children,Object(r.a)(e,u));return Object(o.jsx)(l,Object(n.a)(Object(n.a)({},e),{},{children:Object(o.jsx)("input",Object(n.a)(Object(n.a)({},t),A))}))}},87:function(e,t,A){"use strict";A.d(t,"b",(function(){return n})),A.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},93:function(e,t,A){"use strict";A.d(t,"a",(function(){return g})),A.d(t,"e",(function(){return j})),A.d(t,"c",(function(){return b})),A.d(t,"d",(function(){return p})),A.d(t,"f",(function(){return f}));var n=A(13),r=A(34),a=A(5),c=A(9),o=A.n(c),i=A(16),s="profile/ADD-POST",u="profile/SET_USER_PROFILE",l="profile/SET_PROFILE_STATUS",d={posts:[{id:1,message:"Hi, how are you?",likeCount:3},{id:2,message:"It's my first post",likeCount:6},{id:3,message:"doooo",likeCount:11},{id:4,message:"mythings",likeCount:5}],profile:null,status:""};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var A={id:5,message:t.newPostBody,likeCount:0};return Object(a.a)(Object(a.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[A])});case u:return Object(a.a)(Object(a.a)({},e),{},{profile:t.profile});case l:return Object(a.a)(Object(a.a)({},e),{},{status:t.status});default:return e}};var g=function(e){return{type:s,newPostBody:e}},j=function(e){return{type:u,profile:e}},h=function(e){return{type:l,status:e}},b=function(e){return function(){var t=Object(n.a)(o.a.mark((function t(A){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfileData(e);case 2:n=t.sent,A(j(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(n.a)(o.a.mark((function t(A){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getStatus(e);case 2:n=t.sent,A(h(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(n.a)(o.a.mark((function t(A){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.updateStatus(e);case 2:0===t.sent.resultCode&&A(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},95:function(e,t,A){}},[[292,1,2]]]);
//# sourceMappingURL=main.25ec9d5c.chunk.js.map