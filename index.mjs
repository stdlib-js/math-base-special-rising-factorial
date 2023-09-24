// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-delta-ratio@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-falling-factorial@esm/index.mjs";function a(a,m){var r,n;return t(a)||!s(m)?NaN:a<0?(m<0&&(a+=m,m=-m,n=!0),r=(1&m?-1:1)*i(-a,m),n&&(r=1/r),r):0===m?1:0===a?m<0?-e(a+1,-m):0:a<1&&a+m<0?(r=e(1-a,-m),1&m?-r:r):1/e(a,m)}export{a as default};
//# sourceMappingURL=index.mjs.map
