"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[574],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return s}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(r),s=a,k=m["".concat(c,".").concat(s)]||m[s]||d[s]||o;return r?n.createElement(k,i(i({ref:e},u),{},{components:r})):n.createElement(k,i({ref:e},u))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5395:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Overview",sidebar_position:0},c=void 0,p={unversionedId:"architecture/orchestrator/overview",id:"architecture/orchestrator/overview",isDocsHomePage:!1,title:"Overview",description:"Orchestrator \u67b6\u6784\u8bbe\u8ba1",source:"@site/docs/architecture/orchestrator/overview.md",sourceDirName:"architecture/orchestrator",slug:"/architecture/orchestrator/overview",permalink:"/docs/next/architecture/orchestrator/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/docusaurus/docs/architecture/orchestrator/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Gateway Design",permalink:"/docs/next/architecture/microservice_governance_services/gateway"},next:{title:"computation_orchestrator_architecture",permalink:"/docs/next/architecture/orchestrator/computation_orchestrator_architecture"}},u=[{value:"Orchestrator \u67b6\u6784\u8bbe\u8ba1",id:"orchestrator-\u67b6\u6784\u8bbe\u8ba1",children:[]}],d={toc:u};function m(t){var e=t.components,l=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"orchestrator-\u67b6\u6784\u8bbe\u8ba1"},"Orchestrator \u67b6\u6784\u8bbe\u8ba1"),(0,o.kt)("p",null,"Linkis\u7684\u8ba1\u7b97\u7f16\u6392\u6a21\u5757\uff0c\u63d0\u4f9b\u4e86\u5168\u6808\u5f15\u64ce\u548c\u4e30\u5bcc\u7684\u8ba1\u7b97\u7b56\u7565\u7684\u652f\u6301\uff0c\u901a\u8fc7\u7f16\u6392\u65b9\u5f0f\u5b9e\u73b0\u5bf9\u53cc\u8bfb\u3001\u53cc\u5199\u3001AB\u7b49\u7b56\u7565\u7684\u652f\u6301\uff1b\u5e76\u4e14\u901a\u8fc7\u4e0e\u6807\u7b7e\u7cfb\u7edf\u6574\u5408\u5b9e\u73b0\u5bf9\u591a\u79cd\u4f5c\u4e1a\u573a\u666f\uff0c\u4f8b\u4ea4\u4e92\u5f0f\u8ba1\u7b97\u4f5c\u4e1a\u3001\u5e38\u9a7b\u5f0f\u4f5c\u4e1a\u4ee5\u53ca\u5b58\u50a8\u5f0f\u4f5c\u4e1a\u7b49\u573a\u666f\u7684\u652f\u6301\u3002"),(0,o.kt)("h4",{id:"\u67b6\u6784\u793a\u610f\u56fe"},"\u67b6\u6784\u793a\u610f\u56fe"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Orchestrator\u67b6\u6784\u56fe",src:r(25).Z}),"  "),(0,o.kt)("h4",{id:"\u6a21\u5757\u4ecb\u7ecd"},"\u6a21\u5757\u4ecb\u7ecd"),(0,o.kt)("h5",{id:"1-orchestrator-core"},"1. Orchestrator-Core"),(0,o.kt)("p",null,"\u6838\u5fc3\u6a21\u5757\uff0c\u5c06\u4efb\u52a1\u7f16\u6392\u62c6\u5206\u4e86\u7ea6\u4e03\u4e2a\u6b65\u9aa4\uff0c\u5206\u522b\u5bf9\u5e94\u7684\u63a5\u53e3\u4e3aConverter(\u8f6c\u6362), Parser(\u89e3\u6790)\uff0c Validator(\u6821\u9a8c)\uff0c Planner(\u8ba1\u5212), Optimizer(\u4f18\u5316)\uff0cExecution(\u6267\u884c), Reheater(\u518d\u70ed/\u91cd\u8bd5)\uff0c\u4e4b\u95f4\u7684\u5b9e\u4f53\u6d41\u8f6c\u56fe\u89c1\u5982\u4e0b\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"Orchestrator\u5b9e\u4f53\u6d41\u8f6c",src:r(3148).Z})),(0,o.kt)("p",null,"\u6838\u5fc3\u7684\u63a5\u53e3\u5b9a\u4e49\u5982\u4e0b:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u9876\u5c42\u63a5\u53e3/\u7c7b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ConverterTransform")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u5bf9\u7528\u6237\u63d0\u4ea4\u7684req\u8bf7\u6c42\u8f6c\u6362\u4e3a\u7f16\u6392\u7684Job\uff0c\u540c\u65f6\u4f1a\u5bf9\u8bf7\u6c42\u505a\u53c2\u6570\u68c0\u67e5\u548c\u4fe1\u606f\u8865\u5145")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ParserTransform")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u5bf9Job\u7684\u89e3\u6790\u548c\u62c6\u5206\uff0c\u62c6\u5206\u6210\u591a\u4e2aStage\u9636\u6bb5\u4fe1\u606f\uff0c\u6784\u6210AST\u6811")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ValidatorTransform")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5bf9Job\u548cStage\u7684\u4fe1\u606f\u6821\u9a8c\uff0c\u4f8b\u5982\u5bf9\u9644\u5e26\u7684Label\u4fe1\u606f\u7684\u6821\u9a8c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PlannerTransform")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5c06AST\u9636\u6bb5\u7684Job\u548cStage\u8f6c\u6362\u6210\u903b\u8f91\u8ba1\u5212\uff0c\u751f\u6210Logical\u6811\uff0c\u5176\u4e2dJob\u548cStage\u5206\u522b\u8f6c\u6362\u4e3aLogicalTask")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"OptimizerTransform")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210Logical Tree\u5230 Physical Tree\u7684\u8f6c\u6362\uff0c\u65e2\u7269\u7406\u8ba1\u5212\u8f6c\u6362, \u8f6c\u6362\u524d\u8fd8\u4f1a\u5bf9AST\u6811\u505a\u4f18\u5316\u5904\u7406")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Execution")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8c03\u5ea6\u6267\u884c\u7269\u7406\u8ba1\u5212\u7684Physical Tree\uff0c\u5904\u7406\u6267\u884c\u5b50\u4f5c\u4e1a\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReheaterTransform")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5bf9Execution\u6267\u884c\u8fc7\u7a0b\u4e2d\u53ef\u91cd\u8bd5\u7684\u5931\u8d25\u4f5c\u4e1a\u7684\u91cd\u65b0\u8c03\u5ea6\u6267\u884c")))),(0,o.kt)("h5",{id:"2-computation-orchestrator"},"2. Computation-Orchestrator"),(0,o.kt)("p",null,"\u662f\u9488\u5bf9\u4ea4\u4e92\u5f0f\u8ba1\u7b97\u573a\u666f\u4e0bOrchestrator\u7684\u6807\u51c6\u5b9e\u73b0\uff0c\u5bf9\u62bd\u8c61\u63a5\u53e3\u90fd\u505a\u4e86\u9ed8\u8ba4\u5b9e\u73b0\uff0c\u5176\u4e2d\u5305\u542b\u4f8b\u5982\u5bf9SQL\u7b49\u8bed\u8a00\u4ee3\u7801\u7684\u8f6c\u6362\u89c4\u5219\u96c6\u5408\uff0c\u4ee5\u53ca\u8bf7\u6c42\u6267\u884c\u4ea4\u4e92\u5f0f\u4f5c\u4e1a\u7684\u5177\u4f53\u903b\u8f91\u3002\n\u5178\u578b\u7684\u7c7b\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u9876\u5c42\u63a5\u53e3/\u7c7b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CodeConverterTransform")),(0,o.kt)("td",{parentName:"tr",align:null},"\u9488\u5bf9\u8bf7\u6c42\u4e2d\u9644\u5e26\u7684\u4ee3\u7801\u4fe1\u606f\u7684\u89e3\u6790\u8f6c\u6362\uff0c \u4f8b\u5982 Spark Sql, Hive Sql, Shell \u548c Python")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CodeStageParserTransform")),(0,o.kt)("td",{parentName:"tr",align:null},"\u89e3\u6790\u62c6\u5206Job\uff0c\u9488\u5bf9CodeJob\uff0c\u65e2\u9644\u5e26\u4ee3\u7801\u4fe1\u606f\u7684Job")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"EnrichLabelParserTransform")),(0,o.kt)("td",{parentName:"tr",align:null},"\u89e3\u6790\u62c6\u5206Job\u7684\u540c\u65f6\u586b\u5165\u6807\u7b7e\u4fe1\u606f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TaskPlannerTransform")),(0,o.kt)("td",{parentName:"tr",align:null},"\u4ea4\u4e92\u5f0f\u8ba1\u7b97\u573a\u666f\u4e0b\uff0c\u5c06Job\u62c6\u5206\u6210\u7684Stage\u4fe1\u606f\u8f6c\u5316\u4e3a\u903b\u8f91\u8ba1\u5212\uff0c\u5373Logical Tree")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CacheTaskOptimizer")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5bf9\u903b\u8f91\u8ba1\u5212\u4e2d\u7684AST\u6811\u589e\u52a0\u7f13\u5b58\u8282\u70b9\uff0c\u4f18\u5316\u540e\u7eed\u7684\u6267\u884c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ComputePhysicalTransform")),(0,o.kt)("td",{parentName:"tr",align:null},"\u4ea4\u4e92\u5f0f\u8ba1\u7b97\u573a\u666f\u4e0b\uff0c\u5c06\u903b\u8f91\u8ba1\u5212\u8f6c\u5316\u4e3a\u7269\u7406\u8ba1\u5212")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CodeLogicalUnitExecTask")),(0,o.kt)("td",{parentName:"tr",align:null},"\u4ea4\u4e92\u5f0f\u8ba1\u7b97\u573a\u666f\u4e0b\uff0c\u7269\u7406\u8ba1\u5212\u4e2d\u7684\u6700\u5c0f\u6267\u884c\u5355\u5143")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ComputationTaskExecutionReceiver")),(0,o.kt)("td",{parentName:"tr",align:null},"Task\u6267\u884c\u7684RPC\u56de\u8c03\u7c7b\uff0c\u63a5\u6536\u4efb\u52a1\u7684\u72b6\u6001\u3001\u8fdb\u5ea6\u7b49\u56de\u8c03\u4fe1\u606f")))),(0,o.kt)("h5",{id:"3-code-orchestrator"},"3. Code-Orchestrator"),(0,o.kt)("p",null,"\u662f\u9488\u5bf9\u5e38\u9a7b\u578b\u548c\u5b58\u50a8\u578b\u4f5c\u4e1a\u573a\u666f\u4e0bOrchestrator\u7684\u6807\u51c6\u5b9e\u73b0"),(0,o.kt)("h5",{id:"4-pluginsorchestrator-ecm-plugin"},"4. Plugins/Orchestrator-ECM-Plugin"),(0,o.kt)("p",null,"\u63d0\u4f9b\u4e86Orchestrator\u5bf9\u63a5LinkisManager \u548c EngineConn\u6240\u9700\u8981\u7684\u63a5\u53e3\u65b9\u6cd5\uff0c\u7b80\u8ff0\u5982\u4e0b\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u9876\u5c42\u63a5\u53e3/\u7c7b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"EngineConnManager")),(0,o.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86\u8bf7\u6c42EngineConn\u8d44\u6e90\uff0c\u5411EngineConn\u63d0\u4ea4\u6267\u884c\u8bf7\u6c42\u7684\u65b9\u6cd5\uff0c\u5e76\u4e3b\u52a8\u7f13\u5b58\u4e86\u53ef\u7528\u7684EngineConn")))))}m.isMDXComponent=!0},25:function(t,e,r){e.Z=r.p+"assets/images/linkis_orchestrator_architecture-05dad373c22897e1228daaedc681d0e9.png"},3148:function(t,e,r){e.Z=r.p+"assets/images/orchestrator_entity-294b09234a50e7bc385b280f4c95c2ce.png"}}]);