"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[797],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=c(n),d=i,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||a;return n?r.createElement(f,o(o({ref:e},m),{},{components:n})):r.createElement(f,o({ref:e},m))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2829:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"\u629b\u51fa\u5f02\u5e38\u89c4\u8303",sidebar_position:4},p=void 0,c={unversionedId:"development/development_specification/exception_throws",id:"development/development_specification/exception_throws",isDocsHomePage:!1,title:"\u629b\u51fa\u5f02\u5e38\u89c4\u8303",description:"\u5982\u4f55\u5b9a\u4e49\u65b0\u5f02\u5e38\uff1f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/development_specification/exception_throws.md",sourceDirName:"development/development_specification",slug:"/development/development_specification/exception_throws",permalink:"/zh-CN/docs/next/development/development_specification/exception_throws",editUrl:"https://github.com/apache/incubator-linkis-website/edit/docusaurus/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/development_specification/exception_throws.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u629b\u51fa\u5f02\u5e38\u89c4\u8303",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5f02\u5e38\u5904\u7406\u89c4\u8303",permalink:"/zh-CN/docs/next/development/development_specification/exception_catch"},next:{title:"\u65e5\u5fd7\u7ea6\u675f\u89c4\u8303",permalink:"/zh-CN/docs/next/development/development_specification/log"}},m=[{value:"\u5982\u4f55\u5b9a\u4e49\u65b0\u5f02\u5e38\uff1f",id:"\u5982\u4f55\u5b9a\u4e49\u65b0\u5f02\u5e38",children:[]},{value:"\u6a21\u5757\u5f02\u5e38\u89c4\u8303",id:"\u6a21\u5757\u5f02\u5e38\u89c4\u8303",children:[]}],s={toc:m};function u(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5982\u4f55\u5b9a\u4e49\u65b0\u5f02\u5e38"},"\u5982\u4f55\u5b9a\u4e49\u65b0\u5f02\u5e38\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u7684\u5f02\u5e38\u90fd\u5fc5\u987b\u7ee7\u627f\u81eaLinkisRetryException\u3001WarnException\u3001ErrorException\u6216FatalException\u4e4b\u4e00")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u7684\u5f02\u5e38\u5fc5\u987b\u5305\u542b\u9519\u8bef\u7801\u548c\u9519\u8bef\u63cf\u8ff0\uff0c\u5982\u6709\u5fc5\u8981\uff0c\u4e5f\u53ef\u5c06\u53d1\u751f\u5f02\u5e38\u7684ip\u5730\u5740\u548c\u8fdb\u7a0b\u7aef\u53e3\u5c01\u88c5\u5230\u5f02\u5e38\u5f53\u4e2d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u614e\u7528WarnException\uff01WarnException\u629b\u51fa\u6765\u7684\u5f02\u5e38\uff0c\u5982\u679c\u5728Restful\u548cRPC\u7684Receiver\u7aef\u88ab\u6355\u83b7\uff0c\u4e0d\u4f1a\u7ed9\u524d\u7aef\u6216sender\u7aef\u629b\u51fa\u6267\u884c\u5931\u8d25\uff0c\u800c\u662f\u53ea\u8fd4\u56de\u4e00\u6761\u8b66\u544a\u4fe1\u606f\uff01")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WARNException\u7684\u5f02\u5e38\u7ea7\u522b\u4e3a1\uff0cErrorException\u7684\u5f02\u5e38\u7ea7\u522b\u4e3a2\uff0cFatalException\u7684\u5f02\u5e38\u7ea7\u522b\u4e3a3\uff0cLinkisRetryException\u7684\u5f02\u5e38\u7ea7\u522b\u4e3a4"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5f02\u5e38\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6240\u5728\u670d\u52a1"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9519\u8bef\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"LinkisException"),(0,a.kt)("td",{parentName:"tr",align:"left"},"common"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9876\u7ea7\u7236\u7c7b\uff0c\u7ee7\u627f\u81eaException,\u4e0d\u5141\u8bb8\u76f4\u63a5\u7ee7\u627f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"LinkisRuntimeException"),(0,a.kt)("td",{parentName:"tr",align:"left"},"common"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9876\u7ea7\u7236\u7c7b\uff0c\u7ee7\u627f\u81eaRuntimeException,\u4e0d\u5141\u8bb8\u76f4\u63a5\u7ee7\u627f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"WarnException"),(0,a.kt)("td",{parentName:"tr",align:"left"},"common"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6b21\u7ea7\u7236\u7c7b\uff0c\u7ee7\u627f\u81eaLinkisRuntimeException\u3002\u63d0\u793a\u7ea7\u7684\u5f02\u5e38\uff0c\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f\u8be5\u7c7b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ErrorException"),(0,a.kt)("td",{parentName:"tr",align:"left"},"common"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6b21\u7ea7\u7236\u7c7b\uff0c\u7ee7\u627f\u81eaLinkisException\u3002\u9519\u8bef\u7ea7\u7684\u5f02\u5e38\uff0c\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f\u8be5\u7c7b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"FatalException"),(0,a.kt)("td",{parentName:"tr",align:"left"},"common"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6b21\u7ea7\u7236\u7c7b\uff0c\u7ee7\u627f\u81eaLinkisException\u3002\u81f4\u547d\u7ea7\u7684\u5f02\u5e38\uff0c\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f\u8be5\u7c7b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"LinkisRetryException"),(0,a.kt)("td",{parentName:"tr",align:"left"},"common"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6b21\u7ea7\u7236\u7c7b\uff0c\u7ee7\u627f\u81eaLinkisException\u3002\u91cd\u8bd5\u7ea7\u7684\u5f02\u5e38\uff0c\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f\u8be5\u7c7b")))),(0,a.kt)("h2",{id:"\u6a21\u5757\u5f02\u5e38\u89c4\u8303"},"\u6a21\u5757\u5f02\u5e38\u89c4\u8303"),(0,a.kt)("p",null,"linkis-commons:10000-11000\nlinkis-computattion-governace:11000-12000\nlinkis-engineconn-plugins:12000-13000\nlinkis-orchestrator:13000-14000\nlinkis-public-enghancements:14000-15000\nlinkis-spring-cloud-service:15100-15500\nlinkis-extensions:15500-16000\nlinkis-tuning:16100-16200\nlinkis-user-control:16200-16300"))}u.isMDXComponent=!0}}]);