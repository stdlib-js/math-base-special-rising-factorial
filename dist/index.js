"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=s(function(m,u){
var v=require('@stdlib/math-base-assert-is-integer/dist'),l=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-gamma-delta-ratio/dist'),o=require('@stdlib/math-base-special-falling-factorial/dist');function c(e,r){var i,a;return l(e)||!v(r)?NaN:e<0?(r<0&&(e+=r,r=-r,a=!0),i=(r&1?-1:1)*o(-e,r),a&&(i=1/i),i):r===0?1:e===0?r<0?-t(e+1,-r):0:e<1&&e+r<0?(i=t(1-e,-r),r&1?-i:i):1/t(e,r)}u.exports=c
});var q=f();module.exports=q;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
