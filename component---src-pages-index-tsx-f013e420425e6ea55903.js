(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return h});n(52),n(173),n(84);var r=n(0),a=n(157),o=n(167),i=n.n(o),c=n(168),l=n(170),p=n(169),m=n(164),s=n(165),d=n(159),u=n(163),f=Object(a.a)("@media (min-width:795px){.post-card:nth-child(6n + 1):not(.no-image){flex:1 1 100%;flex-direction:row;}.post-card:nth-child(6n + 1):not(.no-image) .post-card-image-link{position:relative;flex:1 1 auto;border-radius:5px 0 0 5px;}.post-card:nth-child(6n + 1):not(.no-image) .post-card-image{position:absolute;width:100%;height:100%;}.post-card:nth-child(6n + 1):not(.no-image) .post-card-content{flex:0 1 357px;}.post-card:nth-child(6n + 1):not(.no-image) h2{font-size:2.6rem;}.post-card:nth-child(6n + 1):not(.no-image) p{font-size:1.8rem;line-height:1.55em;}.post-card:nth-child(6n + 1):not(.no-image) .post-card-content-link{padding:30px 40px 0;}.post-card:nth-child(6n + 1):not(.no-image) .post-card-meta{padding:0 40px 30px;}}");t.default=function(e){var t=e.data.header.childImageSharp.fluid.sizes.split(", ")[1].split("px")[0],n=String(Number(t)/e.data.header.childImageSharp.fluid.aspectRatio);return r.createElement(s.a,{className:""+f},r.createElement(i.a,null,r.createElement("title",null,d.a.title),r.createElement("meta",{property:"og:site_name",content:d.a.title}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:title",content:d.a.title}),r.createElement("meta",{property:"og:description",content:d.a.description}),r.createElement("meta",{property:"og:url",content:d.a.siteUrl}),r.createElement("meta",{property:"og:image",content:e.data.header.childImageSharp.fluid.src}),r.createElement("meta",{property:"article:publisher",content:d.a.facebook}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:d.a.title}),r.createElement("meta",{name:"twitter:description",content:d.a.description}),r.createElement("meta",{name:"twitter:url",content:d.a.siteUrl}),r.createElement("meta",{name:"twitter:image",content:e.data.header.childImageSharp.fluid.src}),r.createElement("meta",{name:"twitter:site",content:"@"+d.a.twitter.split("https://twitter.com/")[0]}),r.createElement("meta",{property:"og:image:width",content:t}),r.createElement("meta",{property:"og:image:height",content:n})),r.createElement(m.a,null,r.createElement("header",{className:u.e+" "+u.k,style:{backgroundImage:"url('"+e.data.header.childImageSharp.fluid.src+"')"}},r.createElement("div",{className:""+u.j},r.createElement(u.f,null,r.createElement(u.h,null,d.a.title),r.createElement(u.d,null,d.a.description)),r.createElement(l.a,{isHome:!0}))),r.createElement("main",{id:"site-main",className:u.g+" "+u.k},r.createElement("div",{className:""+u.j},r.createElement("div",{className:u.b+" "+u.c},e.data.allMarkdownRemark.edges.map(function(e){return r.createElement(p.a,{key:e.node.fields.slug,post:e.node})})))),e.children,r.createElement(c.a,null)))};var h="4244432102"},173:function(e,t,n){"use strict";var r=n(7),a=n(28),o=n(15),i=n(182),c=n(85),l=n(18),p=n(184).f,m=n(174).f,s=n(30).f,d=n(185).trim,u=r.Number,f=u,h=u.prototype,g="Number"==o(n(55)(h)),E="trim"in String.prototype,y=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,o=(t=E?t.trim():d(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,l=t.slice(2),p=0,m=l.length;p<m;p++)if((i=l.charCodeAt(p))<48||i>a)return NaN;return parseInt(l,r)}}return+t};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof u&&(g?l(function(){h.valueOf.call(n)}):"Number"!=o(n))?i(new f(y(t)),n,u):y(t)};for(var N,w=n(19)?p(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;w.length>I;I++)a(f,N=w[I])&&!a(u,N)&&s(u,N,m(f,N));u.prototype=h,h.constructor=u,n(20)(r,"Number",u)}},174:function(e,t,n){var r=n(88),a=n(53),o=n(37),i=n(85),c=n(28),l=n(86),p=Object.getOwnPropertyDescriptor;t.f=n(19)?p:function(e,t){if(e=o(e),t=i(t,!0),l)try{return p(e,t)}catch(e){}if(c(e,t))return a(!r.f.call(e,t),e[t])}},182:function(e,t,n){var r=n(12),a=n(183).set;e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&r(o)&&a&&a(e,o),e}},183:function(e,t,n){var r=n(12),a=n(6),o=function(e,t){if(a(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(21)(Function.call,n(174).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:o}},184:function(e,t,n){var r=n(87),a=n(54).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},185:function(e,t,n){var r=n(5),a=n(29),o=n(18),i=n(186),c="["+i+"]",l=RegExp("^"+c+c+"*"),p=RegExp(c+c+"*$"),m=function(e,t,n){var a={},c=o(function(){return!!i[e]()||"​"!="​"[e]()}),l=a[e]=c?t(s):i[e];n&&(a[n]=l),r(r.P+r.F*c,"String",a)},s=m.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(p,"")),e};e.exports=m},186:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f013e420425e6ea55903.js.map