"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[708],{552:function(r,t,e){e.r(t),e.d(t,{default:function(){return m}});var n=e(433),a=e(861),c=e(439),u=e(757),s=e.n(u),i=e.p+"static/media/no-picture-available-icon-20.63063464ad12ac2eb45f.jpg",o=e(689),p="Cast_Image__CgJXQ",f="Cast_List__AZLS7",d="Cast_Character__A1Qr5",l=e(791),v=e(129),h=e(184),m=function(){var r=(0,l.useState)([]),t=(0,c.Z)(r,2),e=t[0],u=t[1],m=(0,o.UO)().movieId;return(0,l.useEffect)((function(){if(m){var r=function(){var r=(0,a.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,v.M1)(m);case 3:t=r.sent,u((0,n.Z)(t)),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}}),[m]),(0,h.jsx)(h.Fragment,{children:e.length>0?(0,h.jsx)("ul",{className:f,children:e.map((function(r){var t=r.profile_path,e=r.character,n=r.original_name,a=r.id;return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{className:p,src:t?"https://image.tmdb.org/t/p/w500".concat(t):i,alt:n}),(0,h.jsx)("p",{children:n}),(0,h.jsxs)("p",{className:d,children:['"',e,'"']})]},a)}))}):(0,h.jsx)("p",{children:"Sorry, there is no information"})})}},129:function(r,t,e){e.d(t,{Df:function(){return s},M1:function(){return p},Pg:function(){return o},UN:function(){return i},tx:function(){return f}});var n=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"9ae8fd93ae6d092b9ce69048ddd475c5"};var s=function(){var r=(0,n.Z)(c().mark((function r(){var t,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("trending/movie/day",{params:{page:1}});case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("search/movie",{params:{query:t,page:1}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(t));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(t,"/credits"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(t,"/reviews"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=708.5bea9147.chunk.js.map