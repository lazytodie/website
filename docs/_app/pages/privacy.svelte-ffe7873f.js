import{S as M,i as S,s as C,e as y,k as g,c as m,a as _,n as w,d,b,f as p,H as v,K as k,j as $,l as I,m as T,o as x,x as P,u as L,v as H,t as j,g as N,h as G,I as O}from"../chunks/vendor-a4d942a5.js";import{H as K,M as V}from"../chunks/HeroText-0b395c12.js";import"../chunks/stores-3bda58c4.js";function W(s,e,i){const t=s.slice();return t[2]=e[i].hed,t[3]=e[i].id,t}function z(s,e,i){const t=s.slice();return t[6]=e[i],t}function Y(s,e,i){const t=s.slice();return t[6]=e[i].value,t}function D(s){let e,i=s[0].title+"",t,o,n,r=s[0].dek+"";return{c(){e=y("h1"),t=j(i),o=g(),n=y("p")},l(l){e=m(l,"H1",{});var a=_(e);t=N(a,i),a.forEach(d),o=w(l),n=m(l,"P",{});var u=_(n);u.forEach(d)},m(l,a){p(l,e,a),v(e,t),p(l,o,a),p(l,n,a),n.innerHTML=r},p(l,a){a&1&&i!==(i=l[0].title+"")&&G(t,i),a&1&&r!==(r=l[0].dek+"")&&(n.innerHTML=r)},d(l){l&&d(e),l&&d(o),l&&d(n)}}}function J(s){let e,i=s[2]+"",t;return{c(){e=y("h2"),t=j(i)},l(o){e=m(o,"H2",{});var n=_(e);t=N(n,i),n.forEach(d)},m(o,n){p(o,e,n),v(e,t)},p:O,d(o){o&&d(e)}}}function q(s){let e,i=s[6]+"";return{c(){e=y("p")},l(t){e=m(t,"P",{});var o=_(e);o.forEach(d)},m(t,o){p(t,e,o),e.innerHTML=i},p(t,o){o&1&&i!==(i=t[6]+"")&&(e.innerHTML=i)},d(t){t&&d(e)}}}function B(s){let e,i=s[0][`${s[3]}List`],t=[];for(let o=0;o<i.length;o+=1)t[o]=F(z(s,i,o));return{c(){e=y("ul");for(let o=0;o<t.length;o+=1)t[o].c()},l(o){e=m(o,"UL",{});var n=_(e);for(let r=0;r<t.length;r+=1)t[r].l(n);n.forEach(d)},m(o,n){p(o,e,n);for(let r=0;r<t.length;r+=1)t[r].m(e,null)},p(o,n){if(n&3){i=o[0][`${o[3]}List`];let r;for(r=0;r<i.length;r+=1){const l=z(o,i,r);t[r]?t[r].p(l,n):(t[r]=F(l),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=i.length}},d(o){o&&d(e),k(t,o)}}}function F(s){let e,i=s[6]+"";return{c(){e=y("li")},l(t){e=m(t,"LI",{});var o=_(e);o.forEach(d)},m(t,o){p(t,e,o),e.innerHTML=i},p(t,o){o&1&&i!==(i=t[6]+"")&&(e.innerHTML=i)},d(t){t&&d(e)}}}function U(s){let e,i,t,o,n,r=s[2]&&J(s),l=s[0][s[3]],a=[];for(let c=0;c<l.length;c+=1)a[c]=q(Y(s,l,c));let u=s[0][`${s[3]}List`]&&B(s);return{c(){e=y("section"),r&&r.c(),i=g();for(let c=0;c<a.length;c+=1)a[c].c();t=g(),u&&u.c(),o=g(),this.h()},l(c){e=m(c,"SECTION",{id:!0,class:!0});var h=_(e);r&&r.l(h),i=w(h);for(let f=0;f<a.length;f+=1)a[f].l(h);t=w(h),u&&u.l(h),o=w(h),h.forEach(d),this.h()},h(){b(e,"id",n=s[3]),b(e,"class","column-regular")},m(c,h){p(c,e,h),r&&r.m(e,null),v(e,i);for(let f=0;f<a.length;f+=1)a[f].m(e,null);v(e,t),u&&u.m(e,null),v(e,o)},p(c,h){if(c[2]&&r.p(c,h),h&3){l=c[0][c[3]];let f;for(f=0;f<l.length;f+=1){const E=Y(c,l,f);a[f]?a[f].p(E,h):(a[f]=q(E),a[f].c(),a[f].m(e,t))}for(;f<a.length;f+=1)a[f].d(1);a.length=l.length}c[0][`${c[3]}List`]?u?u.p(c,h):(u=B(c),u.c(),u.m(e,o)):u&&(u.d(1),u=null)},d(c){c&&d(e),r&&r.d(),k(a,c),u&&u.d()}}}function Q(s){let e,i,t,o,n;i=new K({props:{$$slots:{default:[D]},$$scope:{ctx:s}}});let r=s[1],l=[];for(let a=0;a<r.length;a+=1)l[a]=U(W(s,r,a));return{c(){e=y("section"),$(i.$$.fragment),t=g();for(let a=0;a<l.length;a+=1)l[a].c();o=I(),this.h()},l(a){e=m(a,"SECTION",{id:!0,class:!0});var u=_(e);T(i.$$.fragment,u),u.forEach(d),t=w(a);for(let c=0;c<l.length;c+=1)l[c].l(a);o=I(),this.h()},h(){b(e,"id","intro"),b(e,"class","column-wide")},m(a,u){p(a,e,u),x(i,e,null),p(a,t,u);for(let c=0;c<l.length;c+=1)l[c].m(a,u);p(a,o,u),n=!0},p(a,[u]){const c={};if(u&2049&&(c.$$scope={dirty:u,ctx:a}),i.$set(c),u&3){r=a[1];let h;for(h=0;h<r.length;h+=1){const f=W(a,r,h);l[h]?l[h].p(f,u):(l[h]=U(f),l[h].c(),l[h].m(o.parentNode,o))}for(;h<l.length;h+=1)l[h].d(1);l.length=r.length}},i(a){n||(P(i.$$.fragment,a),n=!0)},o(a){L(i.$$.fragment,a),n=!1},d(a){a&&d(e),H(i),a&&d(t),k(l,a),a&&d(o)}}}function R(s,e,i){let{copy:t}=e;const{sections:o}=t;return s.$$set=n=>{"copy"in n&&i(0,t=n.copy)},[t,o]}class X extends M{constructor(e){super();S(this,e,R,Q,C,{copy:0})}}const Z="Privacy Policy",ee="How The Pudding uses personal data.",te="This privacy policy will explain how The Pudding uses the anonymized personal data we collect from you when you use our website. The Pudding does not keep personally identifiable data.",oe=[{id:"what",hed:"What data do we collect?"},{id:"indirect"},{id:"use",hed:"How will we use your data?"},{id:"cookies",hed:"Cookies"},{id:"other",hed:"Privacy policies of other websites"},{id:"changes",hed:"Changes to our privacy policy"},{id:"contact",hed:"How to contact us"}],ae=[{type:"text",value:"You directly provide The Pudding with most of the data we collect. We collect data and process data when you:"}],ie=["Sign up for our <a rel=external href=https://poly-graph.us11.list-manage.com/subscribe/post>email list</a>","Voluntarily provide your input that becomes part of a story\u2019s experience (ex: <a rel=external href=https://pudding.cool/2019/02/gyllenhaal/>The Gyllenhaal Experiment</a>, <a rel=external href=https://pudding.cool/2018/04/birthday-paradox/>The Birthday Paradox Experiment</a>). This is never personally identifiable."],ne=[{type:"text",value:"The Pudding may also receive your data indirectly from the following sources:"}],re=["Your browser\u2019s cookies when you use or view our website","Third-party partners including <a rel=external href=https://www.facebook.com/policy.php>Facebook</a> and <a rel=external href=https://twitter.com/en/privacy>Twitter</a>","Spotify, for our AI music project. No spotify data is stored, and you can remove ties between your Spotify account and the project by clicking remove access for \u201CBad Music\u201D on Spotify\u2019s 3rd Party app page  <a rel=external href=https://www.spotify.com/account/apps/>here</a>.","Location information when we provide localized content (ex: <a rel=external href=https://pudding.cool/2018/10/city_3d/>Human Terrain</a>, <a rel=external href=https://pudding.cool/2017/04/beer/>What City is the Microbrew Capital of the US?</a>). Location data is no more granular than a reader\u2019s city and is not tied to any other personal information."],le=[{type:"text",value:"The Pudding collects your data so that we can personalize stories an create content for stories from reader-generated inputs."}],se=[{type:"text",value:"When you visit a website, the website logs information to the browser, creating a text file called a cookie. Cookies collect standard internet and visitor behavior information, such as whether you are logged in, what you\u2019ve placed in your shopping cart, or what preferences you have set. The Pudding may collect analytics information from you automatically through cookies or similar technology."},{type:"text",value:"For further information, visit <a rel=external href=https://www.allaboutcookies.org/>allaboutcookies.org</a>. You can set your browser not to accept cookies, and the previously linked site tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function if you remove or disable cookies."}],ce=[{type:"text",value:"The Pudding website contains links to other websites. Our privacy policy only applies to our website. If you click on a link and get directed to another website, please read their privacy policy."}],ue=[{type:"text",value:"The Pudding keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on October 1, 2021."}],he=[{type:"text",value:"If you have any questions about The Pudding\u2019s privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us."},{type:"text",value:"Email us at sup@pudding.cool"}];var A={title:Z,description:ee,dek:te,sections:oe,what:ae,whatList:ie,indirect:ne,indirectList:re,use:le,cookies:se,other:ce,changes:ue,contact:he};function fe(s){let e,i,t,o;return e=new V({props:{copy:A}}),t=new X({props:{copy:A}}),{c(){$(e.$$.fragment),i=g(),$(t.$$.fragment)},l(n){T(e.$$.fragment,n),i=w(n),T(t.$$.fragment,n)},m(n,r){x(e,n,r),p(n,i,r),x(t,n,r),o=!0},p:O,i(n){o||(P(e.$$.fragment,n),P(t.$$.fragment,n),o=!0)},o(n){L(e.$$.fragment,n),L(t.$$.fragment,n),o=!1},d(n){H(e,n),n&&d(i),H(t,n)}}}class me extends M{constructor(e){super();S(this,e,null,fe,C,{})}}export{me as default};
