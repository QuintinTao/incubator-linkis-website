"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[2072],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},436:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Release List",c={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Release List",description:"Download links",source:"@site/download/index.md",sourceDirName:".",slug:"/index",permalink:"/download/index",editUrl:"https://github.com/apache/incubator-linkis-website/edit/docusaurus/download/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Linkis Release-1.0.2",permalink:"/download/release-1.0.2"}},u=[{value:"Download links",id:"download-links",children:[],level:2},{value:"1.0.2 release",id:"102-release",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-list"},"Release List"),(0,i.kt)("h2",{id:"download-links"},"Download links"),(0,i.kt)("p",null,"  Use the links below to download the Apache Linkis Releases, the latest release is 1.0.2."),(0,i.kt)("h2",{id:"102-release"},"1.0.2 release"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Released: June 6th, 2020")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/download/release-1.0.2"},"Release Notes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/archive/refs/tags/1.0.2.tar.gz"},"linkis-1.0.2-src.tar.gz"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bin: ",(0,i.kt)("a",{parentName:"p",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/1.0.2/wedatasphere-linkis-1.0.2-combined-package-dist.tar.gz"},"linkis-1.0.2-bin.tar.gz")),(0,i.kt)("h2",{parentName:"li",id:"release-integrity"},"Release Integrity"),(0,i.kt)("p",{parentName:"li"},"   You must ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/info/verification.html"},"verify")," the integrity of the downloaded files. We provide OpenPGP signatures for every release file. This signature should be matched against the ",(0,i.kt)("a",{parentName:"p",href:"https://downloads.apache.org/incubator/linkis/KEYS"},"KEYS")," file which contains the OpenPGP keys of Linkis's Release Managers. We also provide ",(0,i.kt)("code",null,"SHA-512")," checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours."))))}d.isMDXComponent=!0}}]);