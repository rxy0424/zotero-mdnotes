"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[623],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},890:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],d={title:"Hidden Preferences"},s=void 0,c={unversionedId:"advanced/hidden-prefs",id:"advanced/hidden-prefs",title:"Hidden Preferences",description:"In addition to the ability to add custom placeholders and customize placeholder formatting, there are a few hidden preferences for editor-specific syntax.",source:"@site/docs/advanced/hidden-prefs.md",sourceDirName:"advanced",slug:"/advanced/hidden-prefs",permalink:"/zotero-mdnotes/docs/next/advanced/hidden-prefs",editUrl:"https://github.com/argenos/zotero-mdnotes/edit/develop/docs/docs/advanced/hidden-prefs.md",tags:[],version:"current",frontMatter:{title:"Hidden Preferences"},sidebar:"tutorialSidebar",previous:{title:"Custom Formatting",permalink:"/zotero-mdnotes/docs/next/advanced/formatting"},next:{title:"Notes and Known Limitations",permalink:"/zotero-mdnotes/docs/next/limitations"}},l={},p=[{value:"Obsidian",id:"obsidian",level:2},{value:"Block IDs",id:"block-ids",level:3},{value:"Obsidian URI",id:"obsidian-uri",level:3}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In addition to the ability to add ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/next/advanced/placeholders#custom-placeholders"},"custom placeholders")," and ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/next/advanced/formatting#placeholders"},"customize placeholder formatting"),", there are a few hidden preferences for editor-specific syntax."),(0,r.kt)("h2",{id:"obsidian"},"Obsidian"),(0,r.kt)("p",null,"A few preferences to use exported files with ",(0,r.kt)("a",{parentName:"p",href:"https://obsidian.md/"},"Obsidian")," are described below."),(0,r.kt)("h3",{id:"block-ids"},"Block IDs"),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"extensions.mdnotes.obsidian.blocks")," to true will append a block ID to all non-header text blocks of exported Zotero notes, i.e. to each highlight and annotation extracted by Zotfile."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The block ID is using a hash of the block contents, i.e. if you change your format the block won't match any more. I know this is brittle, and I'm not entirely happy with it, so I'm open to suggestions if you have a better idea to make the exported blocks reusable."))),(0,r.kt)("h3",{id:"obsidian-uri"},"Obsidian URI"),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"extensions.mdnotes.obsidian.attach_obsidian_uri")," to true will add a link to the Obsidian notes as an attachment to their items, just like with ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/next/getting-started/configuration#add-the-created-files-as-linked-files-to-zotero"},"attach linked file")," preference."),(0,r.kt)("p",null,"You must specify your vault name in ",(0,r.kt)("inlineCode",{parentName:"p"},"extensions.mdnotes.obsidian.vault"),". The Obsidian link is then ",(0,r.kt)("inlineCode",{parentName:"p"},"obsidian://open?vault=<vault>&file=<file name>"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This assumes you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"Shortest path")," for your link format so all file names are unique."))))}u.isMDXComponent=!0}}]);