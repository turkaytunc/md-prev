(this["webpackJsonpmd-prev"]=this["webpackJsonpmd-prev"]||[]).push([[0],{24:function(e,n,t){e.exports=t(308)},29:function(e,n,t){},30:function(e,n,t){},308:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),i=t(21),o=t.n(i),c=(t(29),t(6)),p=(t(30),t(31),function(e){var n=e.setAppCompInput,t=e.getAppInput;return a.a.createElement("textarea",{value:t,onChange:function(e){return function(e){n(e.target.value)}(e)},className:"editor",placeholder:"# Type markdown here! \n"})}),u=t(22),m=t.n(u),s=(t(42),function(e){var n=e.md,t=m()(n);return a.a.createElement("div",{className:"preview"},t)}),l=t(23),d=t.n(l),h=t(5),g=t.n(h),v="# h1 Heading\n## h2 Heading \n\n## Horizontal Rules\n___\n---\n***\n\n## Emphasis and Bold\n\n**This is bold text**\n_This is italic text_\n~~Strikethrough~~\n\n## Lists\n\nUnordered\n- Create a list by starting a line with `+`\n+ or `-`\n* or `*`\n\nOrdered\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n\n## Code\n\n``` js\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.scss';\nimport App from './App';\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n```\n\n## Links\n[link text](https://github.com/turkaytunc/md-prev)\n\n## Images\n![logo](https://github.com/turkaytunc/md-prev/blob/main/public/tr.png?raw=true)  \n![logo](https://github.com/turkaytunc/md-prev/blob/main/public/logo192.png?raw=true)    ";var f=function(){var e=new d.a({breaks:!0,html:!0,highlight:function(e,n){if(n&&g.a.getLanguage(n))try{return g.a.highlight(n,e).value}catch(t){}return""}}),n=a.a.useState(v),t=Object(c.a)(n,2),r=t[0],i=t[1],o=a.a.useState(""),u=Object(c.a)(o,2),m=u[0],l=u[1],h=function(e,n){return n.render(e)};return""===m&&l(h(v,e)),a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"app-header"},"Markdown Previewer"),a.a.createElement("div",{className:"md-io-wrapper"},a.a.createElement(p,{setAppCompInput:function(n){i(n),l(h(n,e))},getAppInput:r}),a.a.createElement(s,{md:m})))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root"))},31:function(e,n,t){},42:function(e,n,t){}},[[24,1,2]]]);
//# sourceMappingURL=main.b6026ef4.chunk.js.map