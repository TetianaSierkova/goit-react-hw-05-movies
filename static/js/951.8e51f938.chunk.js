"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[951],{3339:function(n,e,t){t.d(e,{o:function(){return u}});var r,c=t(168),o=(t(2791),t(3081)),i=t(184);e.Z=function(n){var e=n.onClick;return(0,i.jsx)(u,{type:"click",onClick:e,children:"Go back"})};var u=o.Z.button(r||(r=(0,c.Z)(["\n    display: block;\n    margin-bottom: ",";\n    padding: "," ",";\n    border: none;\n    outline: none;\n    border-radius: ",";\n    cursor: pointer;\n    font-size: ",";\n    font-weight: 700;\n    background-color: ",";\n    color: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}))},9951:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,c,o,i,u=t(885),a=t(2791),s=t(501),l=t(6871),f=t(5705),h=t(6488),p=t(5832),d=t(168),g=t(3081),m=t(3339),v=(0,g.Z)(m.o)(r||(r=(0,d.Z)(["\n    display: inline;\n    margin-left: ",";\n"])),(function(n){return n.theme.spacing(1)})),y=(0,g.Z)(f.gN)(c||(c=(0,d.Z)(["\n    width: 50%;\n    font-size: ",";\n    outline: none;\n    padding-left: ",";\n    padding-right: ",";\n    ::placeholder {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3.5)})),k=g.Z.li(o||(o=(0,d.Z)(["\n    list-style: none;\n    :not(:last-child) {\n        ",";\n    }\n"])),(function(n){return n.theme.spacing(1)})),Z=(0,g.Z)(s.OL)(i||(i=(0,d.Z)(["\n    font-family: Raleway, sans-serif;\n    font-weight: 500;\n    font-size: ",";\n    line-height: 1.2;\n    color: ",";\n    text-decoration: none;\n    :hover,\n    :focus {\n        color: ",";\n    }\n"])),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.focusColor})),b=t(184),x=function(){var n=(0,a.useState)(null),e=(0,u.Z)(n,2),t=e[0],r=e[1],c=(0,a.useState)(!1),o=(0,u.Z)(c,2),i=o[0],d=o[1],g=(0,l.TH)(),m=(0,l.s0)(),x=(0,s.lr)(),_=(0,u.Z)(x,1)[0].get("query"),w=function(n){d(!0),h.XT(n).then((function(n){n&&(r(n.data.results),d(!1))}))};(0,a.useEffect)((function(){_&&w(_)}),[_]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.J9,{initialValues:{query:""},onSubmit:function(n,e){var t=e.resetForm;w(n.query),m({search:"?query=".concat(n.query)}),t()},children:(0,b.jsxs)(f.l0,{children:[(0,b.jsx)(y,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,b.jsx)(v,{type:"submit",children:"Search"})]})}),i&&(0,b.jsx)(p.$,{}),t&&(0,b.jsx)("ul",{children:t.map((function(n){return(0,b.jsx)(k,{children:(0,b.jsxs)(Z,{to:"/movies/".concat(n.id),state:{from:g,search:_},children:[n.title," (",n.release_date.slice(0,4),")"]})},n.id)}))})]})}},6488:function(n,e,t){t.d(e,{IQ:function(){return m},TP:function(){return p},XT:function(){return g},Jh:function(){return h},e2:function(){return d}});var r=t(5861),c=t(7757),o=t.n(c),i=t(4569),u=t.n(i),a=t(8479),s="https://api.themoviedb.org/",l="515cd027603607ee4f27d09c5fb79ec3",f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get(e);case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),a.ZP.error("Sorry, We don`t have this film`s information");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(n){var e="".concat(s,"3/movie/").concat(n,"/reviews?api_key=").concat(l,"&language=en-US&page=1");return f(e)},p=function(n){var e="".concat(s,"3/movie/").concat(n,"?api_key=").concat(l,"&language=en-US&page=1");return f(e)},d=function(){var n="".concat(s,"3/trending/all/day?api_key=").concat(l);return f(n)},g=function(n){var e="".concat(s,"3/search/movie?api_key=").concat(l,"&query=").concat(n,"&language=en-US&page=1&include_adult=false");return f(e)},m=function(n){var e="".concat(s,"3/movie/").concat(n,"/credits?api_key=").concat(l,"&language=en-US");return f(e)}}}]);
//# sourceMappingURL=951.8e51f938.chunk.js.map