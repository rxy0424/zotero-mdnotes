(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(94)),i={},s={unversionedId:"limitations",id:"limitations",isDocsHomePage:!1,title:"Notes and Known Limitations",description:"- I assume the exported metadata and Zotero note files are replaceable.",source:"@site/docs/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/zotero-mdnotes/docs/limitations",editUrl:"https://github.com/argenos/zotero-mdnotes/edit/develop/docs/docs/limitations.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Formatting",permalink:"/zotero-mdnotes/docs/advanced/formatting"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"I assume the exported metadata and Zotero note files are ",Object(o.b)("em",{parentName:"p"},"replaceable"),"."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Why?")," Items in your Zotero library may need to be updated or new annotations/highlights can be made to the PDF.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Batch export will overwrite the metadata and Zotero note files ",Object(o.b)("strong",{parentName:"p"},"without asking"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The only file ",Object(o.b)("strong",{parentName:"p"},"not")," overwritten during batch export is the Notes file which I assume ",Object(o.b)("strong",{parentName:"p"},"you")," modify and don't want them overwritten! You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"Create Notes file")," menu to do so.")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The format used to export Zotero notes is somewhat hardcoded and relies on Zotfile's default format. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/argenos/zotero-mdnotes/issues/new"},"Let me know")," if this doesn't work for you."),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"v0.0.3")," - Since forbidden characters for Windows file names can get quite complex, and I can't test in Windows nor invest much time in this, I've made a few assumptions about the title of your notes. If those assumptions are not met, the file with the extracted notes won't be created and batch export won't work. Check if your note:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"uses anything other than the default Zotfile format, or if the note title contains more than one parenthesis this might fail")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"has any other special character in the first line (which is used as part of the file name), it will also fail. The only cases I'm checking are forward slashes ",Object(o.b)("inlineCode",{parentName:"p"},"/")," and colons ",Object(o.b)("inlineCode",{parentName:"p"},":"),"."))),Object(o.b)("p",{parentName:"li"},"Pull requests are welcome to handle this in a smarter way.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Zotero note exports reformat the date in the title:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"v0.0.3:")," Zotfile-extracted annotations include characters that are invalid for Windows file names. For that reason, the date is changed to follow an ISO format and stripping time, i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"yyyy-mm-dd"),". This might not always work correctly depending on your time zone, and it might be better to fix it directly in Zotfile (see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jlegewie/zotfile/issues/480"},"this issue"),").")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you move or rename your markdown files, the links in Zotero will be outdated. The only solution is to manually locate them.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"I can only work on this on my spare time, so it might take me a while to fix your issue. That being said, I'll try to point you in the right direction if you ",Object(o.b)("a",{parentName:"p",href:"https://github.com/argenos/zotero-mdnotes/issues/new"},"open an issue"),". ",Object(o.b)("a",{parentName:"p",href:"https://github.com/argenos/zotero-mdnotes/pulls"},"Pull requests")," are most definitely welcome if you can spare some time.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you have questions, please use the Q&A category in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/argenos/zotero-mdnotes/discussions/new"},"GitHub Discussions"),"."))))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,d=m["".concat(i,".").concat(u)]||m[u]||b[u]||o;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);