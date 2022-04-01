// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).risingFactorial=e()}(this,(function(){"use strict";var r=Math.floor,e=r;var n=function(r){return e(r)===r};var t=function(r){return r!=r};var u=function(r){return Math.abs(r)},f=Number.NEGATIVE_INFINITY,i=f;var o=function(r){return 0===r&&1/r===i};var a=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var c=function(){return a&&"symbol"==typeof Symbol.toStringTag},v=Object.prototype.toString,y=v;var l=function(r){return y.call(r)},p=Object.prototype.hasOwnProperty;var N=function(r,e){return null!=r&&p.call(r,e)},b="function"==typeof Symbol?Symbol.toStringTag:"",s=N,w=b,A=v;var h=l,d=function(r){var e,n,t;if(null==r)return A.call(r);n=r[w],e=s(r,w);try{r[w]=void 0}catch(e){return A.call(r)}return t=A.call(r),e?r[w]=n:delete r[w],t},U=c()?d:h,m=U,I="function"==typeof Uint32Array;var g="function"==typeof Uint32Array?Uint32Array:null,F=function(r){return I&&r instanceof Uint32Array||"[object Uint32Array]"===m(r)},S=g;var H=function(){var r,e;if("function"!=typeof S)return!1;try{e=new S(e=[1,3.14,-3.14,4294967296,4294967297]),r=F(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var O="function"==typeof Uint32Array?Uint32Array:void 0,T=function(){throw new Error("not implemented")},j=H()?O:T,E=U,G="function"==typeof Float64Array;var M="function"==typeof Float64Array?Float64Array:null,L=function(r){return G&&r instanceof Float64Array||"[object Float64Array]"===E(r)},W=M;var x=function(){var r,e;if("function"!=typeof W)return!1;try{e=new W([1,3.14,-3.14,NaN]),r=L(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var P="function"==typeof Float64Array?Float64Array:void 0,V=function(){throw new Error("not implemented")},Y=x()?P:V,_=U,k="function"==typeof Uint8Array;var q="function"==typeof Uint8Array?Uint8Array:null,z=function(r){return k&&r instanceof Uint8Array||"[object Uint8Array]"===_(r)},B=q;var C=function(){var r,e;if("function"!=typeof B)return!1;try{e=new B(e=[1,3.14,-3.14,256,257]),r=z(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var D="function"==typeof Uint8Array?Uint8Array:void 0,J=function(){throw new Error("not implemented")},K=C()?D:J,Q=U,R="function"==typeof Uint16Array;var X="function"==typeof Uint16Array?Uint16Array:null,Z=function(r){return R&&r instanceof Uint16Array||"[object Uint16Array]"===Q(r)},$=X;var rr=function(){var r,e;if("function"!=typeof $)return!1;try{e=new $(e=[1,3.14,-3.14,65536,65537]),r=Z(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var er,nr="function"==typeof Uint16Array?Uint16Array:void 0,tr=function(){throw new Error("not implemented")},ur={uint16:rr()?nr:tr,uint8:K};(er=new ur.uint16(1))[0]=4660;var fr=52===new ur.uint8(er.buffer)[0],ir=j,or=!0===fr?1:0,ar=new Y(1),cr=new ir(ar.buffer);var vr=function(r){return ar[0]=r,cr[or]};var yr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},lr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var pr=function(r,e){var n,t,u,f;return u=(f=r*r)*f,t=f*yr(f),t+=u*u*lr(f),(u=1-(n=.5*f))+(1-u-n+(f*t-r*e))},Nr=-.16666666666666632;var br=function(r,e){var n,t,u;return n=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===e?r+t*(Nr+u*n):r-(u*(.5*e-t*n)-e-t*Nr)},sr=j,wr=!0===fr?0:1,Ar=new Y(1),hr=new sr(Ar.buffer);var dr,Ur,mr=function(r){return Ar[0]=r,hr[wr]};!0===fr?(dr=1,Ur=0):(dr=0,Ur=1);var Ir=j,gr={HIGH:dr,LOW:Ur},Fr=new Y(1),Sr=new Ir(Fr.buffer),Hr=gr.HIGH,Or=gr.LOW;var Tr=function(r,e){return Sr[Hr]=r,Sr[Or]=e,Fr[0]},jr=Tr,Er=Number.POSITIVE_INFINITY,Gr=Er,Mr=f;var Lr,Wr,xr=function(r){return r===Gr||r===Mr};!0===fr?(Lr=1,Wr=0):(Lr=0,Wr=1);var Pr=j,Vr={HIGH:Lr,LOW:Wr},Yr=new Y(1),_r=new Pr(Yr.buffer),kr=Vr.HIGH,qr=Vr.LOW;var zr=function(r,e){return Yr[0]=e,r[0]=_r[kr],r[1]=_r[qr],r};var Br=function(r,e){return 1===arguments.length?zr([0,0],r):zr(r,e)},Cr=Br,Dr=Cr,Jr=vr,Kr=jr,Qr=[0,0];var Rr=function(r,e){var n,t;return Dr(Qr,r),n=Qr[0],n&=2147483647,t=Jr(e),Kr(n|=t&=2147483648,Qr[1])},Xr=xr,Zr=t,$r=u;var re=function(r,e){return Zr(e)||Xr(e)?(r[0]=e,r[1]=0,r):0!==e&&$r(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var ee=function(r,e){return 1===arguments.length?re([0,0],r):re(r,e)},ne=vr;var te=function(r){var e=ne(r);return(e=(2146435072&e)>>>20)-1023|0},ue=Er,fe=f,ie=t,oe=xr,ae=Rr,ce=ee,ve=te,ye=Cr,le=jr,pe=[0,0],Ne=[0,0];var be=function(r,e){var n,t;return 0===e||0===r||ie(r)||oe(r)?r:(ce(pe,r),e+=pe[1],(e+=ve(r=pe[0]))<-1074?ae(0,r):e>1023?r<0?fe:ue:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ye(Ne,r),n=Ne[0],n&=2148532223,t*le(n|=e+1023<<20,Ne[1])))},se=be;var we=function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n};var Ae=r,he=se,de=function(r){return we(0,r)},Ue=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],me=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ie=16777216,ge=5.960464477539063e-8,Fe=de(20),Se=de(20),He=de(20),Oe=de(20);function Te(r,e,n,t,u,f,i,o,a){var c,v,y,l,p,N,b,s,w;for(l=f,w=t[n],s=n,p=0;s>0;p++)v=ge*w|0,Oe[p]=w-Ie*v|0,w=t[s-1]+v,s-=1;if(w=he(w,u),w-=8*Ae(.125*w),w-=b=0|w,y=0,u>0?(b+=p=Oe[n-1]>>24-u,Oe[n-1]-=p<<24-u,y=Oe[n-1]>>23-u):0===u?y=Oe[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<n;p++)s=Oe[p],0===c?0!==s&&(c=1,Oe[p]=16777216-s):Oe[p]=16777215-s;if(u>0)switch(u){case 1:Oe[n-1]&=8388607;break;case 2:Oe[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=he(1,u)))}if(0===w){for(s=0,p=n-1;p>=f;p--)s|=Oe[p];if(0===s){for(N=1;0===Oe[f-N];N++);for(p=n+1;p<=n+N;p++){for(a[o+p]=Ue[i+p],v=0,s=0;s<=o;s++)v+=r[s]*a[o+(p-s)];t[p]=v}return Te(r,e,n+=N,t,u,f,i,o,a)}}if(0===w)for(n-=1,u-=24;0===Oe[n];)n-=1,u-=24;else(w=he(w,-u))>=Ie?(v=ge*w|0,Oe[n]=w-Ie*v|0,u+=24,Oe[n+=1]=v):Oe[n]=0|w;for(v=he(1,u),p=n;p>=0;p--)t[p]=v*Oe[p],v*=ge;for(p=n;p>=0;p--){for(v=0,N=0;N<=l&&N<=n-p;N++)v+=me[N]*t[p+N];He[n-p]=v}for(v=0,p=n;p>=0;p--)v+=He[p];for(e[0]=0===y?v:-v,v=He[0]-v,p=1;p<=n;p++)v+=He[p];return e[1]=0===y?v:-v,7&b}var je=function(r,e,n,t){var u,f,i,o,a,c,v;for(4,(f=(n-3)/24|0)<0&&(f=0),o=n-24*(f+1),c=f-(i=t-1),v=i+4,a=0;a<=v;a++)Fe[a]=c<0?0:Ue[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Fe[i+(a-c)];Se[a]=u}return 4,Te(r,e,4,Se,o,4,f,i,Fe)},Ee=Math.round,Ge=vr;var Me=vr,Le=mr,We=jr,xe=je,Pe=function(r,e,n){var t,u,f,i,o;return f=r-1.5707963267341256*(t=Ee(.6366197723675814*r)),i=6077100506506192e-26*t,o=e>>20|0,n[0]=f-i,o-(Ge(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((u=f)-(f=u-(i=6077100506303966e-26*t))-i),n[0]=f-i,o-(Ge(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((u=f)-(f=u-(i=20222662487111665e-37*t))-i),n[0]=f-i)),n[1]=f-n[0]-i,t},Ve=1.5707963267341256,Ye=6077100506506192e-26,_e=2*Ye,ke=3*Ye,qe=4*Ye,ze=[0,0,0],Be=[0,0];var Ce=function(r,e){var n,t,u,f,i,o,a;if((u=2147483647&Me(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Pe(r,u,e):u<=1073928572?r>0?(a=r-Ve,e[0]=a-Ye,e[1]=a-e[0]-Ye,1):(a=r+Ve,e[0]=a+Ye,e[1]=a-e[0]+Ye,-1):r>0?(a=r-2*Ve,e[0]=a-_e,e[1]=a-e[0]-_e,2):(a=r+2*Ve,e[0]=a+_e,e[1]=a-e[0]+_e,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Pe(r,u,e):r>0?(a=r-3*Ve,e[0]=a-ke,e[1]=a-e[0]-ke,3):(a=r+3*Ve,e[0]=a+ke,e[1]=a-e[0]+ke,-3):1075388923===u?Pe(r,u,e):r>0?(a=r-4*Ve,e[0]=a-qe,e[1]=a-e[0]-qe,4):(a=r+4*Ve,e[0]=a+qe,e[1]=a-e[0]+qe,-4);if(u<1094263291)return Pe(r,u,e);if(u>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=Le(r),a=We(u-((t=(u>>20)-1046)<<20|0),n),i=0;i<2;i++)ze[i]=0|a,a=16777216*(a-ze[i]);for(ze[2]=a,f=3;0===ze[f-1];)f-=1;return o=xe(ze,Be,t,f),r<0?(e[0]=-Be[0],e[1]=-Be[1],-o):(e[0]=Be[0],e[1]=Be[1],o)},De=vr,Je=pr,Ke=br,Qe=Ce,Re=[0,0];var Xe=function(r){var e;if(e=De(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Ke(r,0);if(e>=2146435072)return NaN;switch(3&Qe(r,Re)){case 0:return Ke(Re[0],Re[1]);case 1:return Je(Re[0],Re[1]);case 2:return-Ke(Re[0],Re[1]);default:return-Je(Re[0],Re[1])}},Ze=n;var $e=function(r){return Ze(r/2)};var rn=function(r){return $e(r>0?r-1:r+1)},en=Math.sqrt,nn=j,tn=!0===fr?0:1,un=new Y(1),fn=new nn(un.buffer);var on=function(r,e){return un[0]=r,fn[tn]=e>>>0,un[0]},an=on;var cn=function(r){return 0|r},vn=rn,yn=Rr,ln=f,pn=Er;var Nn=function(r,e){return e===ln?pn:e===pn?0:e>0?vn(e)?r:0:vn(e)?yn(pn,r):pn},bn=vr;var sn=function(r,e){return(2147483647&bn(r))<=1072693247?e<0?1/0:0:e>0?1/0:0},wn=u,An=Er;var hn=function(r,e){return-1===r?(r-r)/(r-r):1===r?1:wn(r)<1==(e===An)?0:An},dn=j,Un=!0===fr?1:0,mn=new Y(1),In=new dn(mn.buffer);var gn=function(r,e){return mn[0]=r,In[Un]=e>>>0,mn[0]},Fn=gn;var Sn=vr,Hn=an,On=Fn,Tn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},jn=1048576,En=[1,1.5],Gn=[0,.5849624872207642],Mn=[0,1.350039202129749e-8];var Ln=an,Wn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var xn=vr,Pn=Fn,Vn=an,Yn=cn,_n=se,kn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},qn=2147483647,zn=1048575,Bn=1048576;var Cn=t,Dn=rn,Jn=xr,Kn=n,Qn=en,Rn=u,Xn=Cr,Zn=an,$n=cn,rt=f,et=Er,nt=Nn,tt=sn,ut=hn,ft=function(r,e,n){var t,u,f,i,o,a,c,v,y,l,p,N,b,s,w,A,h,d,U,m;return d=0,n<jn&&(d-=53,n=Sn(e*=9007199254740992)),d+=(n>>20)-1023|0,n=1072693248|(U=1048575&n|0),U<=235662?m=0:U<767610?m=1:(m=0,d+=1,n-=jn),t=524288+(n>>1|536870912),o=(h=1/((e=On(e,n))+(c=En[m])))*((A=e-c)-(i=Hn(u=A*h,0))*(a=On(0,t+=m<<18))-i*(e-(a-c))),w=(f=u*u)*f*Tn(f),a=Hn(a=3+(f=i*i)+(w+=o*(i+u)),0),b=(p=-7.028461650952758e-9*(y=Hn(y=(A=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(y-A))+Mn[m])-((N=Hn(N=(l=.9617967009544373*y)+p+(v=Gn[m])+(s=d),0))-s-v-l),r[0]=N,r[1]=b,r},it=function(r,e){var n,t,u,f,i;return n=(i=1.9259629911266175e-8*(u=e-1)-1.4426950408889634*(u*u*Wn(u)))-((t=Ln(t=(f=1.4426950216293335*u)+i,0))-f),r[0]=t,r[1]=n,r},ot=function(r,e,n){var t,u,f,i,o,a,c,v,y;return y=((v=r&qn|0)>>20)-1023|0,c=0,v>1071644672&&(u=Pn(0,((c=r+(Bn>>y+1)>>>0)&~(zn>>(y=((c&qn)>>20)-1023|0)))>>>0),c=(c&zn|Bn)>>20-y>>>0,r<0&&(c=-c),e-=u),o=(i=.6931471805599453*(n-((u=Vn(u=n+e,0))-e))+-1.904654299957768e-9*u)-((a=(f=.6931471824645996*u)+i)-f),t=a-(u=a*a)*kn(u),r=xn(a=1-(a*t/(t-2)-(o+a*o)-a)),r=Yn(r),a=(r+=c<<20>>>0)>>20<=0?_n(a,c):Pn(a,r)},at=2147483647,ct=1083179008,vt=1e300,yt=1e-300,lt=[0,0],pt=[0,0];var Nt=function r(e,n){var t,u,f,i,o,a,c,v,y,l,p,N,b,s;if(Cn(e)||Cn(n))return NaN;if(Xn(lt,n),o=lt[0],0===lt[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return Qn(e);if(-.5===n)return 1/Qn(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(Jn(n))return ut(e,n)}if(Xn(lt,e),i=lt[0],0===lt[1]){if(0===i)return nt(e,n);if(1===e)return 1;if(-1===e&&Dn(n))return-1;if(Jn(e))return e===rt?r(-0,-n):n<0?0:et}if(e<0&&!1===Kn(n))return(e-e)/(e-e);if(f=Rn(e),t=i&at|0,u=o&at|0,c=o>>>31|0,a=(a=i>>>31|0)&&Dn(n)?-1:1,u>1105199104){if(u>1139802112)return tt(e,n);if(t<1072693247)return 1===c?a*vt*vt:a*yt*yt;if(t>1072693248)return 0===c?a*vt*vt:a*yt*yt;p=it(pt,f)}else p=ft(pt,f,t);if(l=(n-(v=Zn(n,0)))*p[0]+n*p[1],y=v*p[0],Xn(lt,N=l+y),b=$n(lt[0]),s=$n(lt[1]),b>=ct){if(0!=(b-ct|s))return a*vt*vt;if(l+8008566259537294e-32>N-y)return a*vt*vt}else if((b&at)>=1083231232){if(0!=(b-3230714880|s))return a*yt*yt;if(l<=N-y)return a*yt*yt}return a*(N=ot(b,y,l))},bt=Nt,st=Math.ceil,wt=r,At=st;var ht=se,dt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Ut=t,mt=function(r){return r<0?At(r):wt(r)},It=f,gt=Er,Ft=function(r,e,n){var t,u,f;return f=(t=r-e)-(u=t*t)*dt(u),ht(1-(e-t*f/(2-f)-r),n)},St=1.4426950408889634,Ht=1/(1<<28);var Ot=function(r){var e;return Ut(r)||r===gt?r:r===It?0:r>709.782712893384?gt:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ht?1+r:(e=mt(r<0?St*r-.5:St*r+.5),Ft(r-.6931471803691238*e,1.9082149292705877e-10*e,e))};var Tt=bt,jt=Ot,Et=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var Gt=t,Mt=n,Lt=o,Wt=u,xt=r,Pt=Xe,Vt=Er,Yt=f,_t=3.141592653589793,kt=function(r){var e,n,t;return e=1+(e=1/r)*Et(e),n=jt(r),2.5066282746310007*(n=r>143.01608?(t=Tt(r,.5*r-.25))*(t/n):Tt(r,r-.5)/n)*e},qt=function(r,e){return e/((1+.5772156649015329*r)*r)},zt=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)};var Bt=function(r){var e,n,t,u;if(Mt(r)&&r<0||r===Yt||Gt(r))return NaN;if(0===r)return Lt(r)?Yt:Vt;if(r>171.61447887182297)return Vt;if(r<-170.5674972726612)return 0;if((n=Wt(r))>33)return r>=0?kt(r):(e=0==(1&(t=xt(n)))?-1:1,(u=n-t)>.5&&(u=n-(t+=1)),u=n*Pt(_t*u),e*_t/(Wt(u)*kt(n)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return qt(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return qt(r,u);u/=r,r+=1}return 2===r?u:u*zt(r-=2)},Ct=t,Dt=n,Jt=Bt,Kt=Er,Qt=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8.841761993739702e30,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,1.0333147966386145e40,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,1.3868311854568984e80,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.1978571669969892e100,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5.797126020747368e120,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,2.4227095383672734e130,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1.352001527678403e140,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,1.1462805637347084e170,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,1.7629525510902446e180,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3.393108684451898e190,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8.094298525273444e200,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,2.6904727073180504e230,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,3.80892263763057e260,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1.853271869493735e280,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1.503616514864999e300,25260757449731984e286,4269068009004705e289,7257415615307999e291];var Rt=t,Xt=vr,Zt=Fn,$t=Er,ru=f,eu=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},nu=.6931471803691238,tu=1.9082149292705877e-10;var uu=function(r){var e,n;return 0===r?1/0:((r<0?-r:r)<=1?(e=38474670393.31777+r*(36857665043.51951+r*(15889202453.72942+r*(4059208354.298835+r*(680547661.1834733+r*(78239755.00312005+r*(6246580.776401795+r*(341986.3488721347+r*(12287.194511824551+r*(261.61404416416684+2.5066282746310007*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=2.5066282746310007+(r=1/r)*(261.61404416416684+r*(12287.194511824551+r*(341986.3488721347+r*(6246580.776401795+r*(78239755.00312005+r*(680547661.1834733+r*(4059208354.298835+r*(15889202453.72942+r*(36857665043.51951+38474670393.31777*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/n)},fu=Bt,iu=function(r){var e,n,t,u,f,i,o,a,c,v;if(r<-1||Rt(r))return NaN;if(-1===r)return ru;if(r===$t)return r;if(0===r)return r;if(v=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,n=1)}return 0!==v&&(t<9007199254740992?(f=(v=((n=Xt(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),f/=c):(v=((n=Xt(c=r))>>20)-1023,f=0),(n&=1048575)<434334?c=Zt(c,1072693248|n):(v+=1,c=Zt(c,1071644672|n),n=1048576-n>>2),u=c-1),e=.5*u*u,0===n?0===u?v*nu+(f+=v*tu):v*nu-((a=e*(1-.6666666666666666*u))-(v*tu+f)-u):(a=(o=(i=u/(2+u))*i)*eu(o),0===v?u-(e-i*(e+a)):v*nu-(e-(i*(e+a)+(v*tu+f))-u))},ou=u,au=Ot,cu=bt;var vu=function r(e,n){var t,u,f;return e<2220446049250313e-31?n>170?(u=r(n,170-n),u*=e,1/(u*=4269068009004705e289)):1/(e*fu(e+n)):(f=e+10.900511-.5,e+n===e?t=ou(n)<10?au((.5-e)*iu(n/f)):1:(t=ou(n)<10?au((.5-e)*iu(n/f)):cu(f/(f+n),e-.5),t*=uu(e)/uu(e+n)),t*=cu(2.718281828459045/(f+n),n))},yu=u,lu=r,pu=Bt,Nu=function(r){return Ct(r)?NaN:Dt(r)?r<0?NaN:r<=170?Qt[r]:Kt:Jt(r+1)},bu=vu;var su=function(r,e){var n,t,u;if(r<=0||r+e<=0)return pu(r)/pu(r+e);if((t=lu(e))===e){if((u=lu(r))===r&&r<=170&&r+e<=170)return Nu(u-1)/Nu(t+u-1);if(yu(e)<20){if(0===e)return 1;if(e<0){for(n=r-=1,e+=1;0!==e;)n*=r-=1,e+=1;return n}for(n=1/r,e-=1;0!==e;)n/=r+=1,e-=1;return n}}return bu(r,e)},wu=r;var Au=function(r){return wu(r)===r&&r>=0},hu=n,du=t,Uu=su,mu=r,Iu=u,gu=Er,Fu=170;function Su(r,e){var n,t,u,f,i;return du(r)||!Au(e)?NaN:0===r?0:r<0?(1&e?-1:1)*function(r,e){var n,t;return du(r)||!hu(e)?NaN:r<0?(e<0&&(r+=e,e=-e,t=!0),n=(1&e?-1:1)*Su(-r,e),t&&(n=1/n),n):0===e?1:0===r?e<0?-Uu(r+1,-e):0:r<1&&r+e<0?(n=Uu(1-r,-e),1&e?-n:n):1/Uu(r,e)}(-r,e):0===e?1:r<.5?e>168?(f=r*Su(r-1,168),i=Su(r-Fu+1,e-Fu+1),17976931348623157e292/Iu(f)<Iu(i)?gu:f*i):r*Su(r-1,e-1):r<=e-1?(u=Iu(mu(t=r+1)))===t?0:(n=Uu(t,-u),n*=r-=u,(u+=1)<e&&(n*=Su(r-1,e-u)),n):Uu(r+1,-e)}var Hu=n,Ou=t,Tu=su,ju=Su;return function(r,e){var n,t;return Ou(r)||!Hu(e)?NaN:r<0?(e<0&&(r+=e,e=-e,t=!0),n=(1&e?-1:1)*ju(-r,e),t&&(n=1/n),n):0===e?1:0===r?e<0?-Tu(r+1,-e):0:r<1&&r+e<0?(n=Tu(1-r,-e),1&e?-n:n):1/Tu(r,e)}}));
//# sourceMappingURL=bundle.js.map