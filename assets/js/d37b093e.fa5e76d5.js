"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[212],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2039:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Single-File Templates",sidebar_position:3},s=void 0,d={unversionedId:"advanced/templates/single-file",id:"version-0.1.3/advanced/templates/single-file",title:"Single-File Templates",description:"Single-file exports might require a few changes to the default configuration, depending on your needs, as described in the single-file configuration.",source:"@site/versioned_docs/version-0.1.3/advanced/templates/single-file.md",sourceDirName:"advanced/templates",slug:"/advanced/templates/single-file",permalink:"/zotero-mdnotes/docs/advanced/templates/single-file",editUrl:"https://github.com/argenos/zotero-mdnotes/edit/develop/docs/versioned_docs/version-0.1.3/advanced/templates/single-file.md",tags:[],version:"0.1.3",sidebarPosition:3,frontMatter:{title:"Single-File Templates",sidebar_position:3},sidebar:"version-0.1.3/tutorialSidebar",previous:{title:"Multi-File Templates",permalink:"/zotero-mdnotes/docs/advanced/templates/multi-file"},next:{title:"Placeholders and wildcards",permalink:"/zotero-mdnotes/docs/advanced/placeholders"}},p={},c=[{value:"Templates used in single-file exports",id:"templates-used-in-single-file-exports",level:2},{value:"Mdnotes Default Template",id:"mdnotes-default-template",level:3},{value:"Zotero Note Template",id:"zotero-note-template",level:3}],m={toc:c};function u(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Single-file exports might require a few changes to the default configuration, depending on your needs, as described in the ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/getting-started/file-organization/single-file"},"single-file configuration"),".\nYou can read more about ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/advanced/placeholders#item-placeholders"},"item")," and ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/advanced/placeholders#note-placeholders"},"note")," placeholders in the next section."),(0,r.kt)("h2",{id:"templates-used-in-single-file-exports"},"Templates used in single-file exports"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Which menu?"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Create full export note")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"What to select?"),": A Zotero item.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Single-file menu",src:n(5811).Z,width:"844",height:"114"})),(0,r.kt)("h3",{id:"mdnotes-default-template"},"Mdnotes Default Template"),(0,r.kt)("p",null,"For example, you might want to update the template to include an item's metadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"{{title}}\n\n## Zotero links\n\n{{localLibrary}}\n{{cloudLibrary}}\n\n## Metadata\n\n{{itemType}}\n{{author}}\n{{proceedingsTitle}}\n{{date}}\n{{dateAdded}}\n{{url}}\n{{DOI}}\n{{citekey}}\n{{collections}}\n{{related}}\n{{tags}}, #zotero, #literature-notes, #reference\n{{pdfAttachments}}\n\n{{abstractNote}}\n\n{{notes}}\n\n## My notes\n\n-\n")),(0,r.kt)("h3",{id:"zotero-note-template"},"Zotero Note Template"),(0,r.kt)("p",null,"If you include the ",(0,r.kt)("inlineCode",{parentName:"p"},"{{notes}}")," placeholder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mdnotes Default Template"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mdnotes")," will loop through the Zotero Notes of the selected items and add them one by one using this template."),(0,r.kt)("p",null,"For single-file exports, you might want to edit your template to look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"{{tags}}\n{{related}}\n\n{{title}}\n\n{{noteContent}}\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This template is also used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Export to markdown")," menu when you select a Zotero note. If you ever want to export, the changes you make will affect both menus."))))}u.isMDXComponent=!0},5811:function(e,t,n){t.Z=n.p+"assets/images/single-file-menu-81e592c2d9c7ed34109589f164be6b3b.png"}}]);