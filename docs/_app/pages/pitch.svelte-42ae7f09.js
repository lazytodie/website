import{S as L,i as T,s as W,e as m,k as w,c as _,a as g,n as v,d as f,b as G,f as p,H as y,V as K,W as R,K as k,t as H,l as P,g as E,h as Y,I as b,j as M,m as I,o as j,x as S,u as C,v as N}from"../chunks/vendor-c3419a43.js";import{M as z}from"../chunks/Meta-ed19023c.js";import"../chunks/paths-28a87002.js";function x(r,e,a){const t=r.slice();return t[2]=e[a].hed,t[3]=e[a].id,t}function q(r,e,a){const t=r.slice();return t[6]=e[a].lead,t[7]=e[a].description,t}function A(r,e,a){const t=r.slice();return t[10]=e[a].value,t}function B(r){let e,a=r[2]+"",t;return{c(){e=m("h2"),t=H(a)},l(n){e=_(n,"H2",{});var i=g(e);t=E(i,a),i.forEach(f)},m(n,i){p(n,e,i),y(e,t)},p:b,d(n){n&&f(e)}}}function D(r){let e,a=r[10]+"";return{c(){e=m("p")},l(t){e=_(t,"P",{});var n=g(e);n.forEach(f)},m(t,n){p(t,e,n),e.innerHTML=a},p(t,n){n&1&&a!==(a=t[10]+"")&&(e.innerHTML=a)},d(t){t&&f(e)}}}function O(r){let e,a=r[0][`${r[3]}List`],t=[];for(let n=0;n<a.length;n+=1)t[n]=U(q(r,a,n));return{c(){e=m("ul");for(let n=0;n<t.length;n+=1)t[n].c()},l(n){e=_(n,"UL",{});var i=g(e);for(let s=0;s<t.length;s+=1)t[s].l(i);i.forEach(f)},m(n,i){p(n,e,i);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(n,i){if(i&3){a=n[0][`${n[3]}List`];let s;for(s=0;s<a.length;s+=1){const c=q(n,a,s);t[s]?t[s].p(c,i):(t[s]=U(c),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=a.length}},d(n){n&&f(e),k(t,n)}}}function U(r){let e,a,t=r[6]+"",n,i,s=r[7]+"";return{c(){e=m("li"),a=m("strong"),n=w(),i=new K,this.h()},l(c){e=_(c,"LI",{});var o=g(e);a=_(o,"STRONG",{});var h=g(a);h.forEach(f),n=v(o),i=R(o),o.forEach(f),this.h()},h(){i.a=null},m(c,o){p(c,e,o),y(e,a),a.innerHTML=t,y(e,n),i.m(s,e)},p(c,o){o&1&&t!==(t=c[6]+"")&&(a.innerHTML=t),o&1&&s!==(s=c[7]+"")&&i.p(s)},d(c){c&&f(e)}}}function V(r){let e,a,t,n,i,s=r[2]&&B(r),c=r[0][r[3]],o=[];for(let l=0;l<c.length;l+=1)o[l]=D(A(r,c,l));let h=r[0][`${r[3]}List`]&&O(r);return{c(){e=m("section"),s&&s.c(),a=w();for(let l=0;l<o.length;l+=1)o[l].c();t=w(),h&&h.c(),n=w(),this.h()},l(l){e=_(l,"SECTION",{id:!0});var u=g(e);s&&s.l(u),a=v(u);for(let d=0;d<o.length;d+=1)o[d].l(u);t=v(u),h&&h.l(u),n=v(u),u.forEach(f),this.h()},h(){G(e,"id",i=r[3])},m(l,u){p(l,e,u),s&&s.m(e,null),y(e,a);for(let d=0;d<o.length;d+=1)o[d].m(e,null);y(e,t),h&&h.m(e,null),y(e,n)},p(l,u){if(l[2]&&s.p(l,u),u&3){c=l[0][l[3]];let d;for(d=0;d<c.length;d+=1){const $=A(l,c,d);o[d]?o[d].p($,u):(o[d]=D($),o[d].c(),o[d].m(e,t))}for(;d<o.length;d+=1)o[d].d(1);o.length=c.length}l[0][`${l[3]}List`]?h?h.p(l,u):(h=O(l),h.c(),h.m(e,n)):h&&(h.d(1),h=null)},d(l){l&&f(e),s&&s.d(),k(o,l),h&&h.d()}}}function J(r){let e,a=r[0].title+"",t,n,i,s=r[1],c=[];for(let o=0;o<s.length;o+=1)c[o]=V(x(r,s,o));return{c(){e=m("h1"),t=H(a),n=w();for(let o=0;o<c.length;o+=1)c[o].c();i=P()},l(o){e=_(o,"H1",{});var h=g(e);t=E(h,a),h.forEach(f),n=v(o);for(let l=0;l<c.length;l+=1)c[l].l(o);i=P()},m(o,h){p(o,e,h),y(e,t),p(o,n,h);for(let l=0;l<c.length;l+=1)c[l].m(o,h);p(o,i,h)},p(o,[h]){if(h&1&&a!==(a=o[0].title+"")&&Y(t,a),h&3){s=o[1];let l;for(l=0;l<s.length;l+=1){const u=x(o,s,l);c[l]?c[l].p(u,h):(c[l]=V(u),c[l].c(),c[l].m(i.parentNode,i))}for(;l<c.length;l+=1)c[l].d(1);c.length=s.length}},i:b,o:b,d(o){o&&f(e),o&&f(n),k(c,o),o&&f(i)}}}function Q(r,e,a){let{copy:t}=e;const{sections:n}=t;return r.$$set=i=>{"copy"in i&&a(0,t=i.copy)},[t,n]}class X extends L{constructor(e){super();T(this,e,Q,J,W,{copy:0})}}const Z="Pitch a story",ee=[{id:"intro"},{id:"principles"},{id:"send",hed:"What to Send Us"},{id:"misc"},{id:"compensation",hed:"Compensation"},{id:"time",hed:"Time Commitment"}],te=[{type:"text",value:"While we may not have full-time positions open at the moment, we are always looking to collaborate with freelancers on visual stories they are excited to tell. Each quarter, we commission a couple of essays (compensation details below), but we accept story pitches year-round. (Please note that The Pudding does not publish guest posts or sponsored links on our site.)"}],oe=[],ne=[{lead:"The idea is worthy of public discourse.",description:"Would people debate the premise of the idea for 20 minutes? What assumptions does it challenge?"},{lead:"There\u2019s a deeper truth",description:"What does the story reveal (even if it\u2019s buried deep in the essay)? Does the reader leave the essay feeling differently?"},{lead:"You\u2019re showing, not telling.",description:"Visuals make your argument more accessible and less complex than a thousand-word essay."}],ie=[{type:"text",value:"If you have a story in mind that you're excited about that meets our criteria, send us a message at pitches@pudding.cool and tell us about it. Please include the following information:"}],ae=[{lead:"Headline",description:"The hook, describes what this story is about in a few words"},{lead:"Summary",description:"The elevator pitch, a few sentences explaining the idea and why you're excited about it"},{lead:"Proof",description:"Are data available to help answer your question or tell your story? If so, have you done any analysis yet? Preliminary data analysis, storyboards, or prototypes are very helpful for us to see."},{lead:"Assistance",description:"What piece(s) might you need help with from us? While some of our freelance contributors are capable of completing a visual story from end-to-end on their own, we often collaborate with our contributors. Would you need help with data analysis, writing, design, front-end code, or some other piece needed to tell this story? No matter the division of labor, The Pudding always assigns an editor to each freelance pitch we take on, so that there is always someone to bounce ideas off of and problem solve with you."},{lead:"Links",description:"Do you have a portfolio, blog, or any other relevant work that you'd like to share with us?"}],se=[{type:"text",value:"We have a standing meeting on Mondays to review pitches and we try to provide feedback, regardless of whether or not we pursue the pitch, within a week."},{type:"text",value:"Want to know more? In this behind-the-scenes <a rel=external href=https://pudding.cool/process/pitching-gendered-descriptions/>blog post</a>, a contributor writes about the journey of turning her idea into a pitch and a published article."},{type:"text",value:"Need some inspiration? Check out our <a rel=external href=https://pudding.cool/backlog>team idea backlog</a> to find story ideas we've kicked around but haven't started yet. Feel free to take them and make them your own."}],le=[{type:"text",value:"We pay $7,000 for end-to-end work on an essay. If we collaborate by providing some assistance in a non-editor capacity (e.g., we do the design), we will lower the compensation accordingly."}],re=[{type:"text",value:"This varies greatly from contributor to contributor. Many of the people we collaborate with are working full-time elsewhere and have limited time per week to spend on a story. At that rate, projects often take several months to complete. If a contributor has more time available per week to contribute, we do our best to help move stories along at a faster pace."}];var F={title:Z,sections:ee,intro:te,principles:oe,principlesList:ne,send:ie,sendList:ae,misc:se,compensation:le,time:re};function ce(r){let e,a,t,n;return e=new z({props:{copy:F}}),t=new X({props:{copy:F}}),{c(){M(e.$$.fragment),a=w(),M(t.$$.fragment)},l(i){I(e.$$.fragment,i),a=v(i),I(t.$$.fragment,i)},m(i,s){j(e,i,s),p(i,a,s),j(t,i,s),n=!0},p:b,i(i){n||(S(e.$$.fragment,i),S(t.$$.fragment,i),n=!0)},o(i){C(e.$$.fragment,i),C(t.$$.fragment,i),n=!1},d(i){N(e,i),i&&f(a),N(t,i)}}}class fe extends L{constructor(e){super();T(this,e,null,ce,W,{})}}export{fe as default};