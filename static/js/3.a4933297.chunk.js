(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[3],{332:function(e,n,t){e.exports={userPhoto:"Users_userPhoto__2SrGb"}},333:function(e,n,t){"use strict";function r(e){if(Array.isArray(e))return e}t.d(n,"a",(function(){return r}))},334:function(e,n,t){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(n,"a",(function(){return r}))},335:function(e,n,t){e.exports={paginator:"Paginator_paginator__UGTbl",pageNumber:"Paginator_pageNumber__2qZWG",selectedPage:"Paginator_selectedPage__13WTy"}},336:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(333);var o=t(126),i=t(334);function u(e,n){return Object(r.a)(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,s=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(c){s=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(s)throw o}}return i}}(e,n)||Object(o.a)(e,n)||Object(i.a)()}},338:function(e,n,t){"use strict";t.r(n);var r=t(76),o=t(77),i=t(81),u=t(80),s=t(0),c=t.n(s),a=t(11),l=t(17),f=t(18),p=t.p+"static/media/user.8bb3b1b3.png",g=t(332),d=t.n(g),h=t(1),b=["user"],j=function(e){var n=e.user,t=Object(l.a)(e,b);return Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{children:Object(h.jsx)(f.b,{to:"/profile/".concat(n.id),children:Object(h.jsx)("img",{src:n.photos.small?n.photos.small:p,className:d.a.userPhoto})})}),Object(h.jsx)("div",{children:n.followed?Object(h.jsx)("button",{disabled:t.followingInProgress.some((function(e){return e===n.id})),onClick:function(){t.unfollowTC(n.id)},children:"Unfollow"}):Object(h.jsx)("button",{disabled:t.followingInProgress.some((function(e){return e===n.id})),onClick:function(){t.followTC(n.id)},children:"Follow"})})]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{children:n.name}),Object(h.jsx)("div",{children:n.status})]}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("div",{children:["u.location.country",","]}),Object(h.jsx)("div",{children:"u.location.city"})]})]},n.id)},v=t(336),y=t(335),O=t.n(y),m=["totalItemsCount","pageSize","currentPage","onPageChanged","portionSize"],w=function(e){for(var n=e.totalItemsCount,t=e.pageSize,r=e.currentPage,o=void 0===r?1:r,i=e.onPageChanged,u=e.portionSize,c=void 0===u?10:u,a=(Object(l.a)(e,m),Math.ceil(n/t)),f=[],p=1;p<=a;p++)f.push(p);var g=Math.ceil(a/c),d=Object(s.useState)(1),b=Object(v.a)(d,2),j=b[0],y=b[1],w=(j-1)*c+1,C=j*c;return Object(h.jsxs)("div",{className:O.a.paginator,children:[j>1&&Object(h.jsx)("button",{onClick:function(){return y(--j)},children:"previous"}),f.filter((function(e){return e>=w&&e<=C})).map((function(e){return Object(h.jsxs)("span",{className:"".concat(o===e?O.a.selectedPage:""," + ").concat(O.a.pageNumber),onClick:function(){return i(e)},children:[" ",e]})})),j<g&&Object(h.jsx)("button",{onClick:function(){return y(++j)},children:"next"})]})},C=["users","followingInProgress","followTC","unfollowTC"];function P(e){var n=e.users,t=e.followingInProgress,r=e.followTC,o=e.unfollowTC,i=Object(l.a)(e,C);return Object(h.jsxs)("div",{children:[Object(h.jsx)(w,{totalItemsCount:i.totalUsersCount,pageSize:i.pageSize,currentPage:i.currentPage,onPageChanged:i.onPageChanged,portionSize:10}),n&&n.map((function(e){return Object(h.jsx)(j,{user:e,followingInProgress:t,followTC:r,unfollowTC:o},e.id)}))]})}var x=c.a.memo(P),S=t(127),k=t(46),T=t(8),z=t(113),I="NOT_FOUND";var U=function(e,n){return e===n};function _(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,o=void 0===r?U:r,i=t.maxSize,u=void 0===i?1:i,s=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}}(o),a=1===u?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:I},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return I}return{get:r,put:function(n,o){r(n)===I&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,c);function l(){var n=a.get(arguments);if(n===I){if(n=e.apply(null,arguments),s){var t=a.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}a.put(arguments,n)}return n}return l.clearCache=function(){return a.clear()},l}function A(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function F(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i,u=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var a=s,l=a.memoizeOptions,f=void 0===l?t:l,p=Array.isArray(f)?f:[f],g=A(r),d=e.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=g.length,t=0;t<n;t++)e.push(g[t].apply(null,arguments));return i=d.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:d,dependencies:g,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return o}var N=F(_),E=N((function(e){return e.users.users}),(function(e){return e})),q=function(e){return e.users.pageSize},G=function(e){return e.users.totalUsersCount},M=function(e){return e.users.currentPage},R=function(e){return e.users.isFetching},D=function(e){return e.users.followingInProgress},J=function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(r.a)(this,t),n.call(this,e)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"onPageChanged",value:function(e){this.props.getUsers2(e,this.props.pageSize)}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.props.isFetching?Object(h.jsx)(k.a,{}):null,Object(h.jsx)(x,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged.bind(this),followingInProgress:this.props.followingInProgress,followTC:this.props.followTC,unfollowTC:this.props.unfollowTC})]})}}]),t}(c.a.Component);n.default=Object(T.d)(z.a,Object(a.b)((function(e){return{users:E(e),pageSize:q(e),totalUsersCount:G(e),currentPage:M(e),isFetching:R(e),followingInProgress:D(e)}}),{getUsers:S.d,getUsers2:S.c,followTC:S.b,unfollowTC:S.e}))(J)}}]);
//# sourceMappingURL=3.a4933297.chunk.js.map