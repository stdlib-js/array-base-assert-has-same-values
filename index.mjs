// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex128array@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex64array@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-booleanarray@v0.0.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-boolean@v0.0.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-same-value@v0.2.2-esm/index.mjs";function o(s,e){var r;for(r=0;r<s.length;r++)if(!d(s[r],e[r]))return!1;return!0}function m(s,e){var r,t,i,a,n;for(r=s.data,t=e.data,i=s.accessors[0],a=e.accessors[0],n=0;n<r.length;n++)if(!d(i(r,n),a(t,n)))return!1;return!0}function l(d,l){var c,j,p,h,v;return d.length===l.length&&(j=t(d),p=t(l),j.accessorProtocol||p.accessorProtocol?(c=2,r(d)?r(l)?o(n(d,0),n(l,0)):m(j,p):(s(d)?(h=i(d,0),c-=1):e(d)&&(h=a(d,0),c-=1),s(l)?(v=i(l,0),c-=1):e(l)&&(v=a(l,0),c-=1),0===c?o(h,v):m(j,p))):o(d,l))}export{l as default};
//# sourceMappingURL=index.mjs.map
