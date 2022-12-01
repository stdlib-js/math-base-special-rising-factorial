// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor;function r(r){return e(r)===r}function n(e){return e!=e}function t(e){return Math.abs(e)}var u,i=Number.NEGATIVE_INFINITY,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,a=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol.toStringTag:"",l=f&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,t,u,i;if(null==e)return o.call(e);n=e[c],i=c,r=null!=(u=e)&&a.call(u,i);try{e[c]=void 0}catch(r){return o.call(e)}return t=o.call(e),r?e[c]=n:delete e[c],t}:function(e){return o.call(e)},y="function"==typeof Uint32Array,v="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var e,r,n;if("function"!=typeof v)return!1;try{r=new v(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(y&&n instanceof Uint32Array||"[object Uint32Array]"===l(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?p:function(){throw new Error("not implemented")};var s,b=u,w="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,A="function"==typeof Float64Array?Float64Array:void 0;s=function(){var e,r,n;if("function"!=typeof d)return!1;try{r=new d([1,3.14,-3.14,NaN]),n=r,e=(w&&n instanceof Float64Array||"[object Float64Array]"===l(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?A:function(){throw new Error("not implemented")};var N,_=s,m="function"==typeof Uint8Array,h="function"==typeof Uint8Array?Uint8Array:null,g="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var e,r,n;if("function"!=typeof h)return!1;try{r=new h(r=[1,3.14,-3.14,256,257]),n=r,e=(m&&n instanceof Uint8Array||"[object Uint8Array]"===l(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?g:function(){throw new Error("not implemented")};var U,j=N,I="function"==typeof Uint16Array,O="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var e,r,n;if("function"!=typeof O)return!1;try{r=new O(r=[1,3.14,-3.14,65536,65537]),n=r,e=(I&&n instanceof Uint16Array||"[object Uint16Array]"===l(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?S:function(){throw new Error("not implemented")};var F,E={uint16:U,uint8:j};(F=new E.uint16(1))[0]=4660;var T=52===new E.uint8(F.buffer)[0],H=!0===T?1:0,G=new _(1),P=new b(G.buffer);function M(e){return G[0]=e,P[H]}function x(e,r){var n,t,u,i;return u=(i=e*e)*i,t=i*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(i),t+=u*u*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(i),(u=1-(n=.5*i))+(1-u-n+(i*t-e*r))}var L=-.16666666666666632;function V(e,r){var n,t,u;return n=.00833333333332249+(u=e*e)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*e,0===r?e+t*(L+u*n):e-(u*(.5*r-t*n)-r-t*L)}var W,k,Y=!0===T?0:1,q=new _(1),C=new b(q.buffer);!0===T?(W=1,k=0):(W=0,k=1);var z={HIGH:W,LOW:k},B=new _(1),D=new b(B.buffer),J=z.HIGH,K=z.LOW;function Q(e,r){return D[J]=e,D[K]=r,B[0]}var R=Number.POSITIVE_INFINITY,X=1023;function Z(e){return e===R||e===i}var $,ee,re=2147483647,ne="function"==typeof Object.defineProperty?Object.defineProperty:null,te=Object.defineProperty,ue=Object.prototype,ie=ue.toString,fe=ue.__defineGetter__,oe=ue.__defineSetter__,ae=ue.__lookupGetter__,ce=ue.__lookupSetter__,le=function(){try{return ne({},"x",{}),!0}catch(e){return!1}}()?te:function(e,r,n){var t,u,i,f;if("object"!=typeof e||null===e||"[object Array]"===ie.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof n||null===n||"[object Array]"===ie.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((u="value"in n)&&(ae.call(e,r)||ce.call(e,r)?(t=e.__proto__,e.__proto__=ue,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),i="get"in n,f="set"in n,u&&(i||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&fe&&fe.call(e,r,n.get),f&&oe&&oe.call(e,r,n.set),e};function ye(e,r,n){le(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===T?($=1,ee=0):($=0,ee=1);var ve={HIGH:$,LOW:ee},pe=new _(1),se=new b(pe.buffer),be=ve.HIGH,we=ve.LOW;function de(e,r,n,t){return pe[0]=e,r[t]=se[be],r[t+n]=se[we],r}function Ae(e){return de(e,[0,0],1,0)}ye(Ae,"assign",de);var Ne=[0,0];function _e(e,r){var n,t;return Ae.assign(e,Ne,1,0),n=Ne[0],n&=re,t=M(r),Q(n|=t&=2147483648,Ne[1])}function me(e,r,u,i){return n(e)||Z(e)?(r[i]=e,r[i+u]=0,r):0!==e&&t(e)<22250738585072014e-324?(r[i]=4503599627370496*e,r[i+u]=-52,r):(r[i]=e,r[i+u]=0,r)}ye((function(e){return me(e,[0,0],1,0)}),"assign",me);var he=[0,0],ge=[0,0];function Ue(e,r){var t,u;return 0===r||0===e||n(e)||Z(e)?e:(me(e,he,1,0),r+=he[1],r+=function(e){var r=M(e);return(r=(2146435072&r)>>>20)-X|0}(e=he[0]),r<-1074?_e(0,e):r>1023?e<0?i:R:(r<=-1023?(r+=52,u=2220446049250313e-31):u=1,Ae.assign(e,ge,1,0),t=ge[0],t&=2148532223,u*Q(t|=r+X<<20,ge[1])))}function je(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var Ie=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Oe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Se=16777216,Fe=5.960464477539063e-8,Ee=je(20),Te=je(20),He=je(20),Ge=je(20);function Pe(r,n,t,u,i,f,o,a,c){var l,y,v,p,s,b,w,d,A;for(p=f,A=u[t],d=t,s=0;d>0;s++)y=Fe*A|0,Ge[s]=A-Se*y|0,A=u[d-1]+y,d-=1;if(A=Ue(A,i),A-=8*e(.125*A),A-=w=0|A,v=0,i>0?(w+=s=Ge[t-1]>>24-i,Ge[t-1]-=s<<24-i,v=Ge[t-1]>>23-i):0===i?v=Ge[t-1]>>23:A>=.5&&(v=2),v>0){for(w+=1,l=0,s=0;s<t;s++)d=Ge[s],0===l?0!==d&&(l=1,Ge[s]=16777216-d):Ge[s]=16777215-d;if(i>0)switch(i){case 1:Ge[t-1]&=8388607;break;case 2:Ge[t-1]&=4194303}2===v&&(A=1-A,0!==l&&(A-=Ue(1,i)))}if(0===A){for(d=0,s=t-1;s>=f;s--)d|=Ge[s];if(0===d){for(b=1;0===Ge[f-b];b++);for(s=t+1;s<=t+b;s++){for(c[a+s]=Ie[o+s],y=0,d=0;d<=a;d++)y+=r[d]*c[a+(s-d)];u[s]=y}return Pe(r,n,t+=b,u,i,f,o,a,c)}}if(0===A)for(t-=1,i-=24;0===Ge[t];)t-=1,i-=24;else(A=Ue(A,-i))>=Se?(y=Fe*A|0,Ge[t]=A-Se*y|0,i+=24,Ge[t+=1]=y):Ge[t]=0|A;for(y=Ue(1,i),s=t;s>=0;s--)u[s]=y*Ge[s],y*=Fe;for(s=t;s>=0;s--){for(y=0,b=0;b<=p&&b<=t-s;b++)y+=Oe[b]*u[s+b];He[t-s]=y}for(y=0,s=t;s>=0;s--)y+=He[s];for(n[0]=0===v?y:-y,y=He[0]-y,s=1;s<=t;s++)y+=He[s];return n[1]=0===v?y:-y,7&w}function Me(e,r,n,t){var u,i,f,o,a,c,l;for((i=(n-3)/24|0)<0&&(i=0),o=n-24*(i+1),c=i-(f=t-1),l=f+4,a=0;a<=l;a++)Ee[a]=c<0?0:Ie[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=e[c]*Ee[f+(a-c)];Te[a]=u}return Pe(e,r,4,Te,o,4,i,f,Ee)}var xe=Math.round;function Le(e,r,n){var t,u,i,f,o;return i=e-1.5707963267341256*(t=xe(.6366197723675814*e)),f=6077100506506192e-26*t,o=r>>20|0,n[0]=i-f,o-(M(n[0])>>20&2047)>16&&(f=20222662487959506e-37*t-((u=i)-(i=u-(f=6077100506303966e-26*t))-f),n[0]=i-f,o-(M(n[0])>>20&2047)>49&&(f=84784276603689e-45*t-((u=i)-(i=u-(f=20222662487111665e-37*t))-f),n[0]=i-f)),n[1]=i-n[0]-f,t}var Ve=1.5707963267341256,We=6077100506506192e-26,ke=2*We,Ye=3*We,qe=4*We,Ce=[0,0,0],ze=[0,0];function Be(e,r){var n,t,u,i,f,o,a;if((u=2147483647&M(e)|0)<=1072243195)return r[0]=e,r[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Le(e,u,r):u<=1073928572?e>0?(a=e-Ve,r[0]=a-We,r[1]=a-r[0]-We,1):(a=e+Ve,r[0]=a+We,r[1]=a-r[0]+We,-1):e>0?(a=e-2*Ve,r[0]=a-ke,r[1]=a-r[0]-ke,2):(a=e+2*Ve,r[0]=a+ke,r[1]=a-r[0]+ke,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Le(e,u,r):e>0?(a=e-3*Ve,r[0]=a-Ye,r[1]=a-r[0]-Ye,3):(a=e+3*Ve,r[0]=a+Ye,r[1]=a-r[0]+Ye,-3):1075388923===u?Le(e,u,r):e>0?(a=e-4*Ve,r[0]=a-qe,r[1]=a-r[0]-qe,4):(a=e+4*Ve,r[0]=a+qe,r[1]=a-r[0]+qe,-4);if(u<1094263291)return Le(e,u,r);if(u>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return q[0]=e,C[Y]}(e),a=Q(u-((t=(u>>20)-1046)<<20|0),n),f=0;f<2;f++)Ce[f]=0|a,a=16777216*(a-Ce[f]);for(Ce[2]=a,i=3;0===Ce[i-1];)i-=1;return o=Me(Ce,ze,t,i),e<0?(r[0]=-ze[0],r[1]=-ze[1],-o):(r[0]=ze[0],r[1]=ze[1],o)}var De=[0,0],Je=3.141592653589793;function Ke(e){return r(e/2)}function Qe(e){return Ke(e>0?e-1:e+1)}var Re=Math.sqrt,Xe=!0===T?0:1,Ze=new _(1),$e=new b(Ze.buffer);function er(e,r){return Ze[0]=e,$e[Xe]=r>>>0,Ze[0]}function rr(e){return 0|e}var nr=!0===T?1:0,tr=new _(1),ur=new b(tr.buffer);function ir(e,r){return tr[0]=e,ur[nr]=r>>>0,tr[0]}var fr=1048576,or=[1,1.5],ar=[0,.5849624872207642],cr=[0,1.350039202129749e-8],lr=1048575,yr=1048576,vr=1083179008,pr=1e300,sr=1e-300,br=[0,0],wr=[0,0];function dr(e,u){var f,o,a,c,l,y,v,p,s,b,w,d,A,N;if(n(e)||n(u))return NaN;if(Ae.assign(u,br,1,0),l=br[0],0===br[1]){if(0===u)return 1;if(1===u)return e;if(-1===u)return 1/e;if(.5===u)return Re(e);if(-.5===u)return 1/Re(e);if(2===u)return e*e;if(3===u)return e*e*e;if(4===u)return(e*=e)*e;if(Z(u))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:t(e)<1==(r===R)?0:R}(e,u)}if(Ae.assign(e,br,1,0),c=br[0],0===br[1]){if(0===c)return function(e,r){return r===i?R:r===R?0:r>0?Qe(r)?e:0:Qe(r)?_e(R,e):R}(e,u);if(1===e)return 1;if(-1===e&&Qe(u))return-1;if(Z(e))return e===i?dr(-0,-u):u<0?0:R}if(e<0&&!1===r(u))return(e-e)/(e-e);if(a=t(e),f=c&re|0,o=l&re|0,v=l>>>31|0,y=(y=c>>>31|0)&&Qe(u)?-1:1,o>1105199104){if(o>1139802112)return function(e,r){return(M(e)&re)<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,u);if(f<1072693247)return 1===v?y*pr*pr:y*sr*sr;if(f>1072693248)return 0===v?y*pr*pr:y*sr*sr;w=function(e,r){var n,t,u,i,f,o;return n=(f=1.9259629911266175e-8*(u=r-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=er(t=(i=1.4426950216293335*u)+f,0))-i),e[0]=t,e[1]=n,e}(wr,a)}else w=function(e,r,n){var t,u,i,f,o,a,c,l,y,v,p,s,b,w,d,A,N,_,m,h,g;return _=0,n<fr&&(_-=53,n=M(r*=9007199254740992)),_+=(n>>20)-X|0,n=1072693248|(m=1048575&n|0),m<=235662?h=0:m<767610?h=1:(h=0,_+=1,n-=fr),f=er(u=(A=(r=ir(r,n))-(c=or[h]))*(N=1/(r+c)),0),t=524288+(n>>1|536870912),a=ir(0,t+=h<<18),d=(i=u*u)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=er(a=3+(i=f*f)+(d+=(o=N*(A-f*a-f*(r-(a-c))))*(f+u)),0),b=(p=-7.028461650952758e-9*(y=er(y=(A=f*a)+(N=o*a+(d-(a-3-i))*u),0))+.9617966939259756*(N-(y-A))+cr[h])-((s=er(s=(v=.9617967009544373*y)+p+(l=ar[h])+(w=_),0))-w-l-v),e[0]=s,e[1]=b,e}(wr,a,f);if(d=(b=(u-(p=er(u,0)))*w[0]+u*w[1])+(s=p*w[0]),Ae.assign(d,br,1,0),A=rr(br[0]),N=rr(br[1]),A>=vr){if(0!=(A-vr|N))return y*pr*pr;if(b+8008566259537294e-32>d-s)return y*pr*pr}else if((A&re)>=1083231232){if(0!=(A-3230714880|N))return y*sr*sr;if(b<=d-s)return y*sr*sr}return d=function(e,r,n){var t,u,i,f,o,a,c,l,y,v;return y=((l=e&re|0)>>20)-X|0,c=0,l>1071644672&&(u=ir(0,((c=e+(yr>>y+1)>>>0)&~(lr>>(y=((c&re)>>20)-X|0)))>>>0),c=(c&lr|yr)>>20-y>>>0,e<0&&(c=-c),r-=u),e=rr(e=M(a=1-((a=(i=.6931471824645996*(u=er(u=n+r,0)))+(f=.6931471805599453*(n-(u-r))+-1.904654299957768e-9*u))*(t=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=f-(a-i))+a*o)-a))),(e+=c<<20>>>0)>>20<=0?Ue(a,c):ir(a,e)}(A,s,b),y*d}var Ar=Math.ceil;function Nr(r){return r<0?Ar(r):e(r)}var _r=1.4426950408889634,mr=1/(1<<28);function hr(e){var r;return n(e)||e===R?e:e===i?0:e>709.782712893384?R:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<mr?1+e:function(e,r,n){var t,u,i,f;return Ue(1-(r-(t=e-r)*(i=t-(u=t*t)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-e),n)}(e-.6931471803691238*(r=Nr(e<0?_r*e-.5:_r*e+.5)),1.9082149292705877e-10*r,r)}function gr(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=hr(e),2.5066282746310007*(n=e>143.01608?(t=dr(e,.5*e-.25))*(t/n):dr(e,e-.5)/n)*r}function Ur(e,r){return r/((1+.5772156649015329*e)*e)}function jr(u){var f,o,a,c;if(r(u)&&u<0||u===i||n(u))return NaN;if(0===u)return function(e){return 0===e&&1/e===i}(u)?i:R;if(u>171.61447887182297)return R;if(u<-170.5674972726612)return 0;if((o=t(u))>33)return u>=0?gr(u):(f=0==(1&(a=e(o)))?-1:1,(c=o-a)>.5&&(c=o-(a+=1)),c=o*function(e){var r;if(r=M(e),(r&=2147483647)<=1072243195)return r<1045430272?e:V(e,0);if(r>=2146435072)return NaN;switch(3&Be(e,De)){case 0:return V(De[0],De[1]);case 1:return x(De[0],De[1]);case 2:return-V(De[0],De[1]);default:return-x(De[0],De[1])}}(Je*c),f*Je/(t(c)*gr(o)));for(c=1;u>=3;)c*=u-=1;for(;u<0;){if(u>-1e-9)return Ur(u,c);c/=u,u+=1}for(;u<2;){if(u<1e-9)return Ur(u,c);c/=u,u+=1}return 2===u?c:c*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(u-=2)}var Ir=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8.841761993739702e30,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,1.0333147966386145e40,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,1.3868311854568984e80,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.1978571669969892e100,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5.797126020747368e120,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,2.4227095383672734e130,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1.352001527678403e140,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,1.1462805637347084e170,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,1.7629525510902446e180,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3.393108684451898e190,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8.094298525273444e200,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,2.6904727073180504e230,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,3.80892263763057e260,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1.853271869493735e280,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1.503616514864999e300,25260757449731984e286,4269068009004705e289,7257415615307999e291];function Or(e){return n(e)?NaN:r(e)?e<0?NaN:e<=170?Ir[e]:R:jr(e+1)}function Sr(e){var r,n;return 0===e?1/0:((e<0?-e:e)<=1?(r=38474670393.31777+e*(36857665043.51951+e*(15889202453.72942+e*(4059208354.298835+e*(680547661.1834733+e*(78239755.00312005+e*(6246580.776401795+e*(341986.3488721347+e*(12287.194511824551+e*(261.61404416416684+2.5066282746310007*e))))))))),n=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+1*e)))))))))):(r=2.5066282746310007+(e=1/e)*(261.61404416416684+e*(12287.194511824551+e*(341986.3488721347+e*(6246580.776401795+e*(78239755.00312005+e*(680547661.1834733+e*(4059208354.298835+e*(15889202453.72942+e*(36857665043.51951+38474670393.31777*e))))))))),n=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+0*e)))))))))),r/n)}var Fr=.6931471803691238,Er=1.9082149292705877e-10;function Tr(e){var r,t,u,f,o,a,c,l,y,v;if(e<-1||n(e))return NaN;if(-1===e)return i;if(e===R)return e;if(0===e)return e;if(v=1,(u=e<0?-e:e)<.41421356237309503){if(u<1.862645149230957e-9)return u<5551115123125783e-32?e:e-e*e*.5;e>-.2928932188134525&&(v=0,f=e,t=1)}return 0!==v&&(u<9007199254740992?(o=(v=((t=M(y=1+e))>>20)-X)>0?1-(y-e):e-(y-1),o/=y):(v=((t=M(y=e))>>20)-X,o=0),(t&=1048575)<434334?y=ir(y,1072693248|t):(v+=1,y=ir(y,1071644672|t),t=1048576-t>>2),f=y-1),r=.5*f*f,0===t?0===f?v*Fr+(o+=v*Er):v*Fr-((l=r*(1-.6666666666666666*f))-(v*Er+o)-f):(l=(c=(a=f/(2+f))*a)*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+.14798198605116586*e)))))}(c),0===v?f-(r-a*(r+l)):v*Fr-(r-(a*(r+l)+(v*Er+o))-f))}function Hr(e,r){var n,u,i;return e<2220446049250313e-31?r>170?(u=Hr(r,170-r),u*=e,1/(u*=4269068009004705e289)):1/(e*jr(e+r)):(i=e+10.900511-.5,e+r===e?n=t(r)<10?hr((.5-e)*Tr(r/i)):1:(n=t(r)<10?hr((.5-e)*Tr(r/i)):dr(i/(i+r),e-.5),n*=Sr(e)/Sr(e+r)),n*=dr(2.718281828459045/(i+r),r))}function Gr(r,n){var u,i,f;if(r<=0||r+n<=0)return jr(r)/jr(r+n);if((i=e(n))===n){if((f=e(r))===r&&r<=170&&r+n<=170)return Or(f-1)/Or(i+f-1);if(t(n)<20){if(0===n)return 1;if(n<0){for(u=r-=1,n+=1;0!==n;)u*=r-=1,n+=1;return u}for(u=1/r,n-=1;0!==n;)u/=r+=1,n-=1;return u}}return Hr(r,n)}var Pr=170;function Mr(u,i){var f,o,a,c,l;return n(u)||!function(r){return e(r)===r&&r>=0}(i)?NaN:0===u?0:u<0?(1&i?-1:1)*function(e,t){var u,i;return n(e)||!r(t)?NaN:e<0?(t<0&&(e+=t,t=-t,i=!0),u=(1&t?-1:1)*Mr(-e,t),i&&(u=1/u),u):0===t?1:0===e?t<0?-Gr(e+1,-t):0:e<1&&e+t<0?(u=Gr(1-e,-t),1&t?-u:u):1/Gr(e,t)}(-u,i):0===i?1:u<.5?i>168?(c=u*Mr(u-1,168),l=Mr(u-Pr+1,i-Pr+1),17976931348623157e292/t(c)<t(l)?R:c*l):u*Mr(u-1,i-1):u<=i-1?(a=t(e(o=u+1)))===o?0:(f=Gr(o,-a),f*=u-=a,(a+=1)<i&&(f*=Mr(u-1,i-a)),f):Gr(u+1,-i)}return function(e,t){var u,i;return n(e)||!r(t)?NaN:e<0?(t<0&&(e+=t,t=-t,i=!0),u=(1&t?-1:1)*Mr(-e,t),i&&(u=1/u),u):0===t?1:0===e?t<0?-Gr(e+1,-t):0:e<1&&e+t<0?(u=Gr(1-e,-t),1&t?-u:u):1/Gr(e,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).risingFactorial=r();
//# sourceMappingURL=index.js.map
