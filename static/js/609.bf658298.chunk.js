"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[609],{3339:function(n,e,t){t.d(e,{o:function(){return a}});var r,o=t(168),i=(t(2791),t(3081)),c=t(184);e.Z=function(n){var e=n.onClick;return(0,c.jsx)(a,{type:"click",onClick:e,children:"Go back"})};var a=i.Z.button(r||(r=(0,o.Z)(["\n    display: block;\n    margin-bottom: ",";\n    padding: "," ",";\n    border: none;\n    outline: none;\n    border-radius: ",";\n    cursor: pointer;\n    font-size: ",";\n    font-weight: 700;\n    background-color: ",";\n    color: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}))},6609:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,o,i,c,a,u,s,l=t(885),f=t(2791),h=t(6488),d=t(168),g=t(3081),m=t(501),p=g.Z.p(r||(r=(0,d.Z)(["\n    font-family: Raleway, sans-serif;\n    font-weight: 500;\n    font-size: ",";\n    line-height: 1.2;\n    color: ",";\n    margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.spacing(2)})),v=g.Z.h3(o||(o=(0,d.Z)(["\n    font-family: Raleway, sans-serif;\n    font-weight: 700;\n    font-size: ",";\n    line-height: 1.2;\n    color: ",";\n    margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.titleColor}),(function(n){return n.theme.spacing(1)})),x=g.Z.img(i||(i=(0,d.Z)(["\n    width: ",";\n"])),(function(n){return n.theme.spacing(64)})),j=g.Z.span(c||(c=(0,d.Z)(["\n    :not(:last-child) {\n        padding-right: ",";\n    }\n"])),(function(n){return n.theme.spacing(2)})),Z=g.Z.div(a||(a=(0,d.Z)(["\n    display: flex;\n    margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(3)})),w=g.Z.div(u||(u=(0,d.Z)(["\n    padding: ",";\n"])),(function(n){return n.theme.spacing(4)})),y=(0,g.Z)(m.OL)(s||(s=(0,d.Z)(["\n    display: block;\n    font-family: Raleway, sans-serif;\n    font-weight: 500;\n    font-size: ",";\n    line-height: 1.2;\n    text-decoration: none;\n    color: ",";\n    :hover,\n    :focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.focusColor})),b=t(5832),k=t(6871),_=t(3339),C=t(184),S=function(){var n=(0,k.UO)().movieId,e=(0,f.useState)(null),t=(0,l.Z)(e,2),r=t[0],o=t[1],i=(0,k.s0)(),c=(0,k.TH)();return(0,f.useEffect)((function(){h.TP(n).then((function(n){n?o(n.data):setTimeout((function(){i("/")}),3e3)}))}),[c,n,i]),(0,C.jsxs)(C.Fragment,{children:[r?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(_.Z,{onClick:function(){var n,e;i(null!==(n=null===c||void 0===c||null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")}}),(0,C.jsxs)(Z,{children:[(0,C.jsx)(x,{src:"https://image.tmdb.org/t/p/original".concat(r.poster_path),alt:r.title}),(0,C.jsxs)(w,{children:[(0,C.jsxs)("h2",{children:[r.title," (",r.release_date.slice(0,4),")"]}),(0,C.jsxs)(p,{children:["User score ",r.vote_average]}),(0,C.jsx)(v,{children:"Overview"}),(0,C.jsx)(p,{children:r.overview}),(0,C.jsx)(v,{children:"Genres"}),(0,C.jsx)(p,{children:r.genres.map((function(n){return(0,C.jsx)(j,{children:n.name},n.id)}))})]})]}),(0,C.jsx)(p,{children:"Additional information"}),(0,C.jsxs)("ul",{children:[(0,C.jsx)(y,{to:"/movies/".concat(n,"/cast"),children:"Cast"}),(0,C.jsx)(y,{to:"/movies/".concat(n,"/reviews"),children:"Reviews"})]})]}):(0,C.jsx)(b.$,{}),(0,C.jsx)(k.j3,{})]})},U=function(){return(0,C.jsx)("div",{children:(0,C.jsx)(S,{})})}},6488:function(n,e,t){t.d(e,{IQ:function(){return p},TP:function(){return d},XT:function(){return m},Jh:function(){return h},e2:function(){return g}});var r=t(5861),o=t(7757),i=t.n(o),c=t(4569),a=t.n(c),u=t(8479),s="https://api.themoviedb.org/",l="515cd027603607ee4f27d09c5fb79ec3",f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a().get(e);case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),u.ZP.error("Sorry, We don`t have this film`s information");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(n){var e="".concat(s,"3/movie/").concat(n,"/reviews?api_key=").concat(l,"&language=en-US&page=1");return f(e)},d=function(n){var e="".concat(s,"3/movie/").concat(n,"?api_key=").concat(l,"&language=en-US&page=1");return f(e)},g=function(){var n="".concat(s,"3/trending/all/day?api_key=").concat(l);return f(n)},m=function(n){var e="".concat(s,"3/search/movie?api_key=").concat(l,"&query=").concat(n,"&language=en-US&page=1&include_adult=false");return f(e)},p=function(n){var e="".concat(s,"3/movie/").concat(n,"/credits?api_key=").concat(l,"&language=en-US");return f(e)}}}]);
//# sourceMappingURL=609.bf658298.chunk.js.map