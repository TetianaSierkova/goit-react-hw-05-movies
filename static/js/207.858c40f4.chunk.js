(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[207],{1207:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return _}});var r,o,a,c=t(885),i=t(2791),u=t(6871),s=t(2007),p=t.n(s),f=t(6488),l=t(168),h=t(3081),g=h.Z.p(r||(r=(0,l.Z)(["\n    font-family: Raleway, sans-serif;\n    font-weight: 500;\n    font-size: ",";\n    line-height: 1.2;\n    color: ",";\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.textColor})),d=h.Z.h2(o||(o=(0,l.Z)(["\n    font-family: Raleway, sans-serif;\n    font-weight: 700;\n    font-size: ",";\n    line-height: 1.2;\n    color: ",";\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.colors.titleColor})),m=h.Z.li(a||(a=(0,l.Z)(["\n    list-style: none;\n    text-indent: ",";\n    padding: ",";\n    border-radius: ",";\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    :not(:last-child) {\n        margin-bottom: ",";\n    }\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)})),v=t(184),y=function(n){var e=n.author,t=n.content;return(0,v.jsxs)(m,{children:[(0,v.jsx)(d,{children:e}),(0,v.jsx)(g,{children:t})]})},x=t(5832);y.propTypes={author:p().string.isRequired,content:p().string.isRequired};var _=function(){var n=(0,i.useState)(null),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,i.useState)(!1),a=(0,c.Z)(o,2),s=a[0],p=a[1],l=(0,u.UO)().movieId;return(0,i.useEffect)((function(){f.Jh(l).then((function(n){n&&(r(n.data.results),0===n.data.results.length&&p(!0))}))}),[l]),(0,v.jsxs)(v.Fragment,{children:[t?(0,v.jsx)("ul",{children:t.map((function(n){return(0,v.jsx)(y,{author:n.author,content:n.content},n.id)}))}):(0,v.jsx)(x.$,{}),s&&(0,v.jsx)(g,{children:"Sorry, we don't have any reviews for this movie"})]})}},6488:function(n,e,t){"use strict";t.d(e,{IQ:function(){return m},TP:function(){return h},XT:function(){return d},Jh:function(){return l},e2:function(){return g}});var r=t(5861),o=t(7757),a=t.n(o),c=t(4569),i=t.n(c),u=t(8479),s="https://api.themoviedb.org/",p="515cd027603607ee4f27d09c5fb79ec3",f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get(e);case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),u.ZP.error("Sorry, We don`t have this film`s information");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(n){var e="".concat(s,"3/movie/").concat(n,"/reviews?api_key=").concat(p,"&language=en-US&page=1");return f(e)},h=function(n){var e="".concat(s,"3/movie/").concat(n,"?api_key=").concat(p,"&language=en-US&page=1");return f(e)},g=function(){var n="".concat(s,"3/trending/all/day?api_key=").concat(p);return f(n)},d=function(n){var e="".concat(s,"3/search/movie?api_key=").concat(p,"&query=").concat(n,"&language=en-US&page=1&include_adult=false");return f(e)},m=function(n){var e="".concat(s,"3/movie/").concat(n,"/credits?api_key=").concat(p,"&language=en-US");return f(e)}},888:function(n,e,t){"use strict";var r=t(9047);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,a,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=207.858c40f4.chunk.js.map