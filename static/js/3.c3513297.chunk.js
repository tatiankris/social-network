(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[3],{332:function(e,n,t){e.exports={userPhoto:"Users_userPhoto__2SrGb"}},333:function(e,n,t){e.exports={paginator:"Paginator_paginator__UGTbl",pageNumber:"Paginator_pageNumber__2qZWG",selectedPage:"Paginator_selectedPage__13WTy"}},335:function(e,n,t){"use strict";t.r(n);var r=t(77),o=t(78),i=t(82),u=t(81),s=t(0),c=t.n(s),a=t(12),l=t(22),f=t(30),p=t(17),g=t.p+"static/media/user.8bb3b1b3.png",h=t(332),d=t.n(h),b=t(1),j=["user"],v=function(e){var n=e.user,t=Object(f.a)(e,j);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(p.b,{to:"/profile/".concat(n.id),children:Object(b.jsx)("img",{src:n.photos.small?n.photos.small:g,className:d.a.userPhoto})})}),Object(b.jsx)("div",{children:n.followed?Object(b.jsx)("button",{disabled:t.followingInProgress.some((function(e){return e===n.id})),onClick:function(){t.unfollowTC(n.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:t.followingInProgress.some((function(e){return e===n.id})),onClick:function(){t.followTC(n.id)},children:"Follow"})})]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:n.name}),Object(b.jsx)("div",{children:n.status})]}),Object(b.jsxs)("span",{children:[Object(b.jsxs)("div",{children:["u.location.country",","]}),Object(b.jsx)("div",{children:"u.location.city"})]})]},n.id)},O=t(59),C=t(333),w=t.n(C),m=["totalItemsCount","pageSize","currentPage","onPageChanged","portionSize"],P=function(e){for(var n=e.totalItemsCount,t=e.pageSize,r=e.currentPage,o=void 0===r?1:r,i=e.onPageChanged,u=e.portionSize,c=void 0===u?10:u,a=(Object(l.a)(e,m),Math.ceil(n/t)),f=[],p=1;p<=a;p++)f.push(p);var g=Math.ceil(a/c),h=Object(s.useState)(1),d=Object(O.a)(h,2),j=d[0],v=d[1],C=(j-1)*c+1,P=j*c;return Object(b.jsxs)("div",{className:w.a.paginator,children:[j>1&&Object(b.jsx)("button",{onClick:function(){return v(--j)},children:"previous"}),f.filter((function(e){return e>=C&&e<=P})).map((function(e){return Object(b.jsxs)("span",{className:"".concat(o===e?w.a.selectedPage:""," + ").concat(w.a.pageNumber),onClick:function(){return i(e)},children:[" ",e]},e)})),j<g&&Object(b.jsx)("button",{onClick:function(){return v(++j)},children:"next"})]})},y=t(36),x=t.n(y),k=["users","followingInProgress","followTC","unfollowTC"];function S(e){var n=e.users,t=e.followingInProgress,r=e.followTC,o=e.unfollowTC,i=Object(l.a)(e,k);return Object(b.jsxs)("div",{className:x.a.block,children:[Object(b.jsx)(P,{totalItemsCount:i.totalUsersCount,pageSize:i.pageSize,currentPage:i.currentPage,onPageChanged:i.onPageChanged,portionSize:10}),n&&n.map((function(e){return Object(b.jsx)(v,{user:e,followingInProgress:t,followTC:r,unfollowTC:o},e.id)}))]})}var z=c.a.memo(S),T=t(127),I=t(47),U=t(9),_=t(114),N="NOT_FOUND";var F=function(e,n){return e===n};function A(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,o=void 0===r?F:r,i=t.maxSize,u=void 0===i?1:i,s=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}}(o),a=1===u?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:N},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return N}return{get:r,put:function(n,o){r(n)===N&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,c);function l(){var n=a.get(arguments);if(n===N){if(n=e.apply(null,arguments),s){var t=a.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}a.put(arguments,n)}return n}return l.clearCache=function(){return a.clear()},l}function E(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function q(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i,u=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var a=s,l=a.memoizeOptions,f=void 0===l?t:l,p=Array.isArray(f)?f:[f],g=E(r),h=e.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(p)),d=e((function(){for(var e=[],n=g.length,t=0;t<n;t++)e.push(g[t].apply(null,arguments));return i=h.apply(null,e)}));return Object.assign(d,{resultFunc:c,memoizedResultFunc:h,dependencies:g,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),d};return o}var G=q(A),M=G((function(e){return e.users.users}),(function(e){return e})),R=function(e){return e.users.pageSize},D=function(e){return e.users.totalUsersCount},J=function(e){return e.users.currentPage},W=function(e){return e.users.isFetching},Z=function(e){return e.users.followingInProgress},B=function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(r.a)(this,t),n.call(this,e)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"onPageChanged",value:function(e){this.props.getUsers2(e,this.props.pageSize)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(I.a,{}):null,Object(b.jsx)(z,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged.bind(this),followingInProgress:this.props.followingInProgress,followTC:this.props.followTC,unfollowTC:this.props.unfollowTC})]})}}]),t}(c.a.Component);n.default=Object(U.d)(_.a,Object(a.b)((function(e){return{users:M(e),pageSize:R(e),totalUsersCount:D(e),currentPage:J(e),isFetching:W(e),followingInProgress:Z(e)}}),{getUsers:T.d,getUsers2:T.c,followTC:T.b,unfollowTC:T.e}))(B)}}]);
//# sourceMappingURL=3.c3513297.chunk.js.map