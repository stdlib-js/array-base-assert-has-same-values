"use strict";var h=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var p=h(function(P,g){
var n=require('@stdlib/array-base-assert-is-complex128array/dist'),o=require('@stdlib/array-base-assert-is-complex64array/dist'),c=require('@stdlib/array-base-arraylike2object/dist'),v=require('@stdlib/strided-base-reinterpret-complex128/dist'),f=require('@stdlib/strided-base-reinterpret-complex64/dist'),q=require('@stdlib/assert-is-same-value/dist');function l(a,r){var e;for(e=0;e<a.length;e++)if(!q(a[e],r[e]))return!1;return!0}function m(a,r){var e,i,s,u,t;for(e=a.data,i=r.data,s=a.accessors[0],u=r.accessors[0],t=0;t<e.length;t++)if(!q(s(e,t),u(i,t)))return!1;return!0}function d(a,r){var e,i,s,u,t;return a.length!==r.length?!1:(i=c(a),s=c(r),i.accessorProtocol||s.accessorProtocol?(e=2,n(a)?(u=v(a,0),e-=1):o(a)&&(u=f(a,0),e-=1),n(r)?(t=v(r,0),e-=1):o(r)&&(t=f(r,0),e-=1),e===0?l(u,t):m(i,s)):l(a,r))}g.exports=d
});var A=p();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
