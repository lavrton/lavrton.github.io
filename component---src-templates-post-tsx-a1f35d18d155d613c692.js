(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(e,t,a){"use strict";a.r(t);a(168),a(79);var r=a(152),n=a(170),i=a.n(n),o=a(157),l=a(153),m=a(0),c=a(150),d=a(162),g=(a(158),a(151)),s=a(156),p=Object(c.b)("section",{target:"e157wiz10"})("display:flex;"),A=Object(c.b)("h4",{target:"e157wiz11"})("margin:8px 0 2px 0;padding:0;font-size:2rem;a{color:",g.a.darkgrey,";font-weight:700;}a:hover{text-decoration:none;}"),f=Object(c.b)("section",{target:"e157wiz12"})("p{margin:0;color:",g.a.midgrey,";line-height:1.3em;}"),h=function(e){var t=e.author;return m.createElement(p,null,m.createElement("img",{className:""+s.a,src:t.avatar.children[0].fixed.src,alt:t.id}),m.createElement(f,null,m.createElement(A,null,m.createElement(r.Link,{to:"/author/"+o.kebabCase(t.id)+"/"},t.id)),t.bio?m.createElement("p",null,t.bio):m.createElement("p",null,"Read ",m.createElement(r.Link,{to:"/author/"+o.kebabCase(t.id)+"/"},"more posts")," by this author.")))},b=a(163),u=a(165),x=a(161),w=a(171),E=Object(c.b)("footer",{target:"e7emgmi0"})("display:flex;justify-content:space-between;align-items:center;margin:0 auto;padding:3vw 0 6vw 0;max-width:840px;"),y=function(e){return m.createElement(E,null,e.children)},k=Object(c.b)("div",{target:"e1k5zwkz0"})("flex-shrink:0;margin-left:20px;"),v=Object(c.a)("display:block;padding:9px 16px;border:",Object(l.c)("0.2",g.a.midgrey)," 1px solid;color:",g.a.midgrey,";font-size:1.2rem;line-height:1;font-weight:500;border-radius:20px;transition:all ease 0.2s;:hover{border-color:",g.a.blue,";color:",g.a.blue,";text-decoration:none;}"),j=function(e){return m.createElement(k,null,m.createElement(r.Link,{className:""+v,to:"/author/"+o.kebabCase(e.authorId)+"/"},"Read More"))},z=(a(48),a(182)),O=function(){return m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},m.createElement("path",{d:"M13 14.5s2 3 5 3 5.5-2.463 5.5-5.5S21 6.5 18 6.5c-5 0-7 11-12 11C2.962 17.5.5 15.037.5 12S3 6.5 6 6.5s4.5 3.5 4.5 3.5"}))},B=a(154),N=Object(c.b)("article",{target:"em2u7rs0"})(function(e){return"\n  position: relative;\n  flex: 1 1 300px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  margin: 0 20px 40px;\n  padding: 25px;\n  color: #fff;\n  background: "+g.a.darkgrey+' center center;\n  background-size: cover;\n  border-radius: 5px;\n  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;\n  background-image: url("'+e.coverImage+'");\n\n  :before {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: block;\n    background: linear-gradient(135deg, rgba(0,40,60,0.8) 0%,rgba(0,20,40,0.7) 100%);\n    border-radius: 5px;\n    backdrop-filter: blur(2px);\n  }\n'}),Q=Object(c.b)("header",{target:"em2u7rs1"})("position:relative;z-index:50;padding-top:20px;text-align:center;"),C=Object(c.b)("small",{target:"em2u7rs2"})("display:block;font-size:1.3rem;line-height:1.3em;opacity:0.8;"),S=Object(c.b)("h3",{target:"em2u7rs3"})("margin:0;padding:0 20px;color:#fff;font-size:3rem;line-height:1.2em;letter-spacing:1px;a{color:#fff;font-weight:300;text-decoration:none;}a:hover{text-decoration:none;}"),P=Object(c.b)("div",{target:"em2u7rs4"})("position:relative;display:flex;justify-content:center;height:80px;svg{width:40px;fill:transparent;stroke:#fff;stroke-width:0.5px;stroke-opacity:0.65;}"),I=Object(c.b)("div",{target:"em2u7rs5"})("position:relative;z-index:50;flex-grow:1;display:flex;font-size:1.7rem;ul{display:flex;flex-direction:column;margin:0 auto;padding:0;text-align:center;list-style:none;}li{margin:0;padding:0;font-size:1.6rem;line-height:1.25em;font-weight:200;letter-spacing:-0.5px;}li a{display:block;padding:20px 0;border-bottom:rgba(255,255,255,0.3) 1px solid;color:#fff;font-weight:500;vertical-align:top;transition:opacity 0.3s ease;}li:first-of-type a{padding-top:10px;}li a:hover{opacity:1;}"),Y=Object(c.b)("footer",{target:"em2u7rs6"})("position:relative;margin:15px 0 3px 0;text-align:center;a{color:#fff;}"),R=function(e){return m.createElement(r.StaticQuery,{query:"1676377518",render:function(t){var a=t.header;return m.createElement(N,{coverImage:a.childImageSharp.fluid.src},m.createElement(Q,null,m.createElement(C,null,"— ",B.a.title," —"),m.createElement(S,null,m.createElement(r.Link,{to:"/tags/"+o.kebabCase(e.tags[0])+"/"},e.tags[0]))),m.createElement(P,null,m.createElement(O,null)),m.createElement(I,null,m.createElement("ul",null,e.relatedPosts.edges.map(function(e){return m.createElement("li",{key:e.node.frontmatter.title},m.createElement(r.Link,{to:e.node.fields.slug},e.node.frontmatter.title))}))),m.createElement(Y,null,m.createElement(r.Link,{to:"/tags/"+o.kebabCase(e.tags[0])+"/"},e.relatedPosts.totalCount>1&&"See all "+e.relatedPosts.totalCount+" posts",1===e.relatedPosts.totalCount&&"1 post",0===e.relatedPosts.totalCount&&"No posts"," →")))},data:z})},D=a(179),F=Object(c.b)("section",{target:"e1vzronv0"})("margin:1.5em 0;padding:6.5vw 7vw 7vw;border:",Object(l.c)("0.02",g.a.whitegrey)," 1px solid;text-align:center;background:",Object(l.c)("0.04",g.a.whitegrey),";border-radius:7px;p{margin-bottom:1em;color:",g.a.midgrey,";font-size:2.2rem;line-height:1.55em;letter-spacing:0.2px;}form{display:flex;justify-content:center;align-items:center;margin:0 auto;max-width:420px;}.form-group{flex-grow:1;}@media (max-width:650px){p{font-size:1.6rem;}}"),G=Object(c.a)("margin:0 0 3px 0;padding:0;color:",g.a.darkgrey,";font-size:3.5rem;line-height:1;font-weight:700;@media (max-width:650px){font-size:2.4rem;}"),L=function(e){return m.createElement(F,null,m.createElement("h3",{className:""+G},"Subscribe to ",e.title),m.createElement("p",null,"Get the latest posts delivered right to your inbox"),m.createElement(D.a,null))},M=a(159),H=a(160);a.d(t,"PostFull",function(){return T}),a.d(t,"NoImage",function(){return q}),a.d(t,"PostFullHeader",function(){return W}),a.d(t,"PostFullTitle",function(){return Z}),a.d(t,"query",function(){return K});var U=Object(c.a)(".site-main{background #fff;padding-bottom:4vw;}"),T=Object(c.a)("position:relative;z-index:50;"),q=Object(c.a)(".post-full-content{padding-top:0;}.post-full-content:before,.post-full-content:after{display:none;}"),W=Object(c.b)("header",{target:"ewnyor50"})("margin:0 auto;padding:6vw 3vw 3vw;max-width:1040px;text-align:center;@media (max-width:500px){padding:14vw 3vw 10vw;}"),_=Object(c.b)("section",{target:"ewnyor51"})("display:flex;justify-content:center;align-items:center;color:",g.a.midgrey,";font-size:1.4rem;font-weight:600;text-transform:uppercase;@media (max-width:500px){font-size:1.2rem;line-height:1.3em;}"),J=Object(c.b)("time",{target:"ewnyor52"})("color:",g.a.blue,";"),Z=Object(c.b)("h1",{target:"ewnyor53"})("margin:0;color:",Object(l.e)("0.05",g.a.darkgrey),";@media (max-width:500px){font-size:2.9rem;}"),V=Object(c.b)("figure",{target:"ewnyor54"})("margin:0 -10vw -165px;height:800px;background:",g.a.lightgrey," center center;background-size:cover;border-radius:5px;@media (max-width:1170px){margin:0 -4vw -100px;height:600px;border-radius:0;}@media (max-width:800px){height:400px;}@media (max-width:500px){margin-bottom:4vw;height:350px;}"),X=Object(c.b)("span",{target:"ewnyor55"})("display:inline-block;margin:0 6px 1px;"),$=Object(c.b)("div",{target:"ewnyor56"})("display:flex;flex-wrap:wrap;margin:0 -20px;padding:40px 0 0 0;"),K=(t.default=function(e){var t=e.data.markdownRemark,a="",n="";return t.frontmatter.image&&(a=t.frontmatter.image.childImageSharp.fluid.sizes.split(", ")[1].split("px")[0],n=String(Number(a)/t.frontmatter.image.childImageSharp.fluid.aspectRatio)),m.createElement(H.a,{className:"post-template"},m.createElement(d.Helmet,null,m.createElement("title",null,t.frontmatter.title),m.createElement("meta",{property:"og:site_name",content:B.a.title}),m.createElement("meta",{property:"og:type",content:"article"}),m.createElement("meta",{property:"og:title",content:t.frontmatter.title}),m.createElement("meta",{property:"og:description",content:t.excerpt}),m.createElement("meta",{property:"og:url",content:B.a.siteUrl+e.pathContext.slug}),t.frontmatter.image&&m.createElement("meta",{property:"og:image",content:t.frontmatter.image.childImageSharp.fluid.src}),m.createElement("meta",{property:"article:published_time",content:t.frontmatter.date}),t.frontmatter.tags&&m.createElement("meta",{property:"article:tag",content:t.frontmatter.tags[0]}),m.createElement("meta",{property:"article:publisher",content:B.a.facebook}),m.createElement("meta",{property:"article:author",content:B.a.facebook}),m.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),m.createElement("meta",{name:"twitter:title",content:t.frontmatter.title}),m.createElement("meta",{name:"twitter:description",content:t.excerpt}),m.createElement("meta",{name:"twitter:url",content:B.a.siteUrl+e.pathContext.slug}),t.frontmatter.image&&m.createElement("meta",{name:"twitter:image",content:t.frontmatter.image.childImageSharp.fluid.src}),m.createElement("meta",{name:"twitter:label1",content:"Written by"}),m.createElement("meta",{name:"twitter:data1",content:t.frontmatter.author.id}),m.createElement("meta",{name:"twitter:label2",content:"Filed under"}),t.frontmatter.tags&&m.createElement("meta",{name:"twitter:data2",content:t.frontmatter.tags[0]}),m.createElement("meta",{name:"twitter:site",content:"@"+B.a.twitter.split("https://twitter.com/")[0]}),m.createElement("meta",{name:"twitter:creator",content:"@"+B.a.twitter.split("https://twitter.com/")[0]}),a&&m.createElement("meta",{property:"og:image:width",content:a}),n&&m.createElement("meta",{property:"og:image:height",content:n})),m.createElement(M.a,{className:""+U},m.createElement("header",{className:s.e+" "+s.k},m.createElement("div",{className:""+s.j},m.createElement(u.a,null))),m.createElement("main",{id:"site-main",className:"site-main "+s.g+" "+s.k},m.createElement("div",{className:""+s.j},m.createElement("article",{className:T+" "+(t.frontmatter.image?"":q)},m.createElement(W,null,m.createElement(_,null,m.createElement(J,{dateTime:t.frontmatter.date},t.frontmatter.userDate),t.frontmatter.tags&&t.frontmatter.tags.length>0&&m.createElement(m.Fragment,null,m.createElement(X,null,"/"),m.createElement(r.Link,{to:"/tags/"+o.kebabCase(t.frontmatter.tags[0])+"/"},t.frontmatter.tags[0]))),m.createElement(Z,null,t.frontmatter.title)),t.frontmatter.image&&m.createElement(V,null,m.createElement(i.a,{style:{height:"100%"},fluid:t.frontmatter.image.childImageSharp.fluid})),m.createElement(w.b,{htmlAst:t.htmlAst}),B.a.showSubscribe&&m.createElement(L,{title:B.a.title}),m.createElement(y,null,m.createElement(h,{author:t.frontmatter.author}),m.createElement(j,{authorId:t.frontmatter.author.id}))))),m.createElement("aside",{className:"read-next "+s.k},m.createElement("div",{className:""+s.j},m.createElement($,null,e.data.relatedPosts&&m.createElement(R,{tags:t.frontmatter.tags,relatedPosts:e.data.relatedPosts}),e.pageContext.prev&&m.createElement(x.a,{post:e.pageContext.prev}),e.pageContext.next&&m.createElement(x.a,{post:e.pageContext.next})))),m.createElement(b.a,null)))},"4204474640")},171:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var r=a(169),n=a.n(r),i=a(153),o=a(0),l=a(150),m=a(187),c=a.n(m),d=a(151),g=Object(l.b)("section",{target:"e14ijd7g0"})("position:relative;margin:0 auto;padding:70px 100px 0;min-height:230px;font-family:Georgia,serif;font-size:2.2rem;line-height:1.6em;background:#fff;@media (max-width:1170px){padding:5vw 7vw 0;}@media (max-width:800px){font-size:1.9rem;}:before{content:'';position:absolute;top:15px;left:-5px;z-index:-1;display:block;width:20px;height:200px;background:rgba(39,44,49,0.15);filter:blur(5px);transform:rotate(-5deg);}:after{content:'';position:absolute;top:15px;right:-5px;z-index:-1;display:block;width:20px;height:200px;background:rgba(39,44,49,0.15);filter:blur(5px);transform:rotate(5deg);}h1,h2,h3,h4,h5,h6,p,ul,ol,dl,pre,blockquote,.post-full-comments,.footnotes{min-width:100%;}li{word-break:break-word;}li p{margin:0;}a{color:#000;word-break:break-word;box-shadow:",d.a.blue," 0 -1px 0 inset;}a:hover{color:",d.a.blue,";text-decoration:none;}strong,em{color:",Object(i.a)("0.05",d.a.darkgrey),";}small{display:inline-block;line-height:1.6em;}li:first-child{margin-top:0;}img,video{display:block;margin:1.5em auto;max-width:1040px;height:auto;}@media (max-width:1040px){img,video{width:100%;}}img[src$='#full']{max-width:none;width:100vw;}img + br + small{display:block;margin-top:-3em;margin-bottom:1.5em;text-align:center;}iframe{margin:0 auto !important;}blockquote{margin:0 0 1.5em;padding:0 1.5em;border-left:#3eb0ef 3px solid;}blockquote p{margin:0 0 1em 0;color:inherit;font-size:inherit;line-height:inherit;font-style:italic;}blockquote p:last-child{margin-bottom:0;}code{padding:0 5px 2px;font-size:0.8em;line-height:1em;font-weight:400 !important;background:",d.a.whitegrey,";border-radius:3px;}p code{word-break:break-all;}pre{overflow-x:auto;margin:1.5em 0 3em;padding:20px;max-width:100%;border:",Object(i.a)("0.01",d.a.darkgrey)," 1px solid;color:",d.a.whitegrey,";font-size:1.4rem;line-height:1.5em;background:",Object(i.a)("0.03",d.a.darkgrey),";border-radius:5px;}pre code{padding:0;font-size:inherit;line-height:inherit;background:transparent;}pre code:not(span){color:inherit;}.gatsby-resp-iframe-wrapper{margin:1.5em 0 3em;}hr{margin:4vw 0;}hr:after{content:'';position:absolute;top:-15px;left:50%;display:block;margin-left:-10px;width:1px;height:30px;background:",Object(i.c)("0.1",d.a.lightgrey),";box-shadow:#fff 0 0 0 5px;transform:rotate(45deg);}h1,h2,h3,h4,h5,h6{color:",Object(i.e)("0.05",d.a.darkgrey),";font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}h1{margin:0.5em 0 0.2em 0;font-size:4.6rem;font-weight:700;}@media (max-width:500px){h1{font-size:2.8rem;}}h2{margin:0.5em 0 0.2em 0;font-size:3.6rem;font-weight:700;}@media (max-width:500px){h2{font-size:2.6rem;}}h3{margin:0.5em 0 0.2em 0;font-size:2.8rem;font-weight:700;}@media (max-width:500px){h3{font-size:2.2rem;}}h4{margin:0.5em 0 0.2em 0;font-size:2.8rem;font-weight:700;}@media (max-width:500px){h4{font-size:2.2rem;}}h5{display:block;margin:0.5em 0;padding:1em 0 1.5em;border:0;color:",d.a.blue,";font-family:Georgia,serif;font-size:3.2rem;line-height:1.35em;text-align:center;}@media (min-width:1180px){h5{max-width:1060px;}}@media (max-width:500px){h5{padding:0 0 0.5em;font-size:2.2rem;}}h6{margin:0.5em 0 0.2em 0;font-size:2.3rem;font-weight:700;}@media (max-width:500px){h6{font-size:2rem;}}table{display:inline-block;overflow-x:auto;margin:0.5em 0 2.5em;max-width:100%;width:auto;border-spacing:0;border-collapse:collapse;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-size:1.6rem;white-space:nowrap;vertical-align:top;}table{-webkit-overflow-scrolling:touch;background:radial-gradient(ellipse at left,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 75%) 0 center,radial-gradient(ellipse at right,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 75%) 100% center;background-attachment:scroll,scroll;background-size:10px 100%,10px 100%;background-repeat:no-repeat;}table td:first-child{background-image:linear-gradient( to right,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100% );background-size:20px 100%;background-repeat:no-repeat;}table td:last-child{background-image:linear-gradient( to left,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100% );background-position:100% 0;background-size:20px 100%;background-repeat:no-repeat;}table th{color:",d.a.darkgrey,";font-size:1.2rem;font-weight:700;letter-spacing:0.2px;text-align:left;text-transform:uppercase;background-color:",Object(i.c)("0.04",d.a.whitegrey),";}table th,table td{padding:6px 12px;border:",Object(i.f)("0.05",Object(i.a)("0.01",d.a.whitegrey))," 1px solid;}@media (max-width:500px){padding:0;:before{display:none;}:after{display:none;}}"),s=new c.a({createElement:o.createElement,components:{}}).Compiler,p=function(e){var t=e.ast,a=n()(e,["ast"]);return t.properties=a,s(t)};t.b=function(e){var t=e.htmlAst;return o.createElement(g,{className:"post-full-content"},o.createElement(p,{className:"post-content",ast:t}))}},182:function(e){e.exports={data:{header:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAcOiQL//xAAWEAADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQEAAQUCIv/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABcQAQADAAAAAAAAAAAAAAAAAAEAEBH/2gAIAQEAAT8hI4r/2gAMAwEAAgADAAAAEPwP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAFhABAQEAAAAAAAAAAAAAAAAAAREQ/9oACAEBAAE/EBWbP//Z",aspectRatio:3.003003003003003,src:"/static/blog-cover-f55e924eff608d71da37e57b398c587d-f4589.jpg",srcSet:"/static/blog-cover-f55e924eff608d71da37e57b398c587d-5911c.jpg 500w,\n/static/blog-cover-f55e924eff608d71da37e57b398c587d-a2da7.jpg 1000w,\n/static/blog-cover-f55e924eff608d71da37e57b398c587d-f4589.jpg 2000w",sizes:"(max-width: 2000px) 100vw, 2000px"}}}}}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-a1f35d18d155d613c692.js.map