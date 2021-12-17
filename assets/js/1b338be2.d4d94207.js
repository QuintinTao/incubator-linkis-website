"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[957],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=o,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return t?i.createElement(g,r(r({ref:n},c),{},{components:t})):i.createElement(g,r({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4747:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=t(7462),o=t(3366),a=(t(7294),t(3905)),r=["components"],l={title:"Hive Engine Usage",sidebar_position:2},s="Hive engine usage documentation",u={unversionedId:"engine_usage/hive",id:"version-1.0.2/engine_usage/hive",isDocsHomePage:!1,title:"Hive Engine Usage",description:"This article mainly introduces the configuration, deployment and use of Hive engine in Linkis1.0.",source:"@site/versioned_docs/version-1.0.2/engine_usage/hive.md",sourceDirName:"engine_usage",slug:"/engine_usage/hive",permalink:"/docs/latest/engine_usage/hive",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/engine_usage/hive.md",tags:[],version:"1.0.2",sidebarPosition:2,frontMatter:{title:"Hive Engine Usage",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/latest/engine_usage/overview"},next:{title:"JDBC Engine Usage",permalink:"/docs/latest/engine_usage/jdbc"}},c=[{value:"1. Environment configuration before Hive engine use",id:"1-environment-configuration-before-hive-engine-use",children:[]},{value:"2. Hive engine configuration and deployment",id:"2-hive-engine-configuration-and-deployment",children:[{value:"2.1 Hive version selection and compilation",id:"21-hive-version-selection-and-compilation",children:[]},{value:"2.2 hive engineConn deployment and loading",id:"22-hive-engineconn-deployment-and-loading",children:[]},{value:"2.3 Hive engine tags",id:"23-hive-engine-tags",children:[]}]},{value:"3. Use of hive engine",id:"3-use-of-hive-engine",children:[{value:"Preparation for operation, queue setting",id:"preparation-for-operation-queue-setting",children:[]},{value:"3.1 How to use Scriptis",id:"31-how-to-use-scriptis",children:[]},{value:"3.2 How to use workflow",id:"32-how-to-use-workflow",children:[]},{value:"3.3 How to use Linkis Client",id:"33-how-to-use-linkis-client",children:[]}]},{value:"4. Hive engine user settings",id:"4-hive-engine-user-settings",children:[]}],d={toc:c};function p(e){var n=e.components,l=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hive-engine-usage-documentation"},"Hive engine usage documentation"),(0,a.kt)("p",null,"This article mainly introduces the configuration, deployment and use of Hive engine in Linkis1.0."),(0,a.kt)("h2",{id:"1-environment-configuration-before-hive-engine-use"},"1. Environment configuration before Hive engine use"),(0,a.kt)("p",null,"If you want to use the hive engine on your server, you need to ensure that the following environment variables have been set correctly and that the user who started the engine has these environment variables."),(0,a.kt)("p",null,"It is strongly recommended that you check these environment variables of the executing user before executing hive tasks."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,a.kt)("th",{parentName:"tr",align:null},"Environment variable content"),(0,a.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"JDK installation path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop installation path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop configuration path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HIVE_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Hive configuration path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("p",null,"Table 1-1 Environmental configuration list"),(0,a.kt)("h2",{id:"2-hive-engine-configuration-and-deployment"},"2. Hive engine configuration and deployment"),(0,a.kt)("h3",{id:"21-hive-version-selection-and-compilation"},"2.1 Hive version selection and compilation"),(0,a.kt)("p",null,"The version of Hive supports hive1.x and hive2.x, the default is to support hive on MapReduce, if you want to change to Hive\non Tez, you need to make some changes in accordance with this pr."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/pull/541"},"https://github.com/apache/incubator-linkis/pull/541")),(0,a.kt)("p",null,"The hive version supported by default is 1.2.1. If you want to modify the hive version, such as 2.3.3, you can find the linkis-engineplugin-hive module and change the \\<hive.version",">"," tag to 2.3 .3, then compile this module separately"),(0,a.kt)("h3",{id:"22-hive-engineconn-deployment-and-loading"},"2.2 hive engineConn deployment and loading"),(0,a.kt)("p",null,"If you have already compiled your hive engine plug-in has been compiled, then you need to put the new plug-in in the specified location to load, you can refer to the following article for details"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/latest/deployment/engine_conn_plugin_installation"},"EngineConnPlugin Installation")," "),(0,a.kt)("h3",{id:"23-hive-engine-tags"},"2.3 Hive engine tags"),(0,a.kt)("p",null,"Linkis1.0 is done through tags, so we need to insert data in our database, the way of inserting is shown below."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/wiki/EngineConnPlugin%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3#22-%E7%AE%A1%E7%90%86%E5%8F%B0configuration%E9%85%8D%E7%BD%AE%E4%BF%AE%E6%94%B9%E5%8F%AF%E9%80%89"},"https://github.com/apache/incubator-linkis/wiki/EngineConnPlugin%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3#22-%E7%AE%A1%E7%90%86%E5%8F%B0configuration%E9%85%8D%E7%BD%AE%E4%BF%AE%E6%94%B9%E5%8F%AF%E9%80%89")),(0,a.kt)("h2",{id:"3-use-of-hive-engine"},"3. Use of hive engine"),(0,a.kt)("h3",{id:"preparation-for-operation-queue-setting"},"Preparation for operation, queue setting"),(0,a.kt)("p",null,"Hive's MapReduce task requires yarn resources, so you need to set up the queue at the beginning"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(7117).Z})),(0,a.kt)("p",null,"Figure 3-1 Queue settings"),(0,a.kt)("h3",{id:"31-how-to-use-scriptis"},"3.1 How to use Scriptis"),(0,a.kt)("p",null,"The use of Scriptis is the simplest. You can directly enter Scriptis, right-click the directory and create a new hive script and write hivesql code."),(0,a.kt)("p",null,"The implementation of the hive engine is by instantiating the driver instance of hive, and then the driver submits the task, and obtains the result set and displays it."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(4883).Z})),(0,a.kt)("p",null,"Figure 3-2 Screenshot of the execution effect of hivesql"),(0,a.kt)("h3",{id:"32-how-to-use-workflow"},"3.2 How to use workflow"),(0,a.kt)("p",null,"DSS workflow also has a hive node, you can drag in the workflow node, then double-click to enter and edit the code, and then execute it in the form of a workflow."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1884).Z})),(0,a.kt)("p",null,"Figure 3-5 The node where the workflow executes hive"),(0,a.kt)("h3",{id:"33-how-to-use-linkis-client"},"3.3 How to use Linkis Client"),(0,a.kt)("p",null,"Linkis also provides a client method to call hive tasks. The call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/user_guide/sdk_manual"},"JAVA SDK Manual"),"."),(0,a.kt)("h2",{id:"4-hive-engine-user-settings"},"4. Hive engine user settings"),(0,a.kt)("p",null,"In addition to the above engine configuration, users can also make custom settings, including the memory size of the hive Driver process, etc."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1348).Z})),(0,a.kt)("p",null,"Figure 4-1 User-defined configuration management console of hive"))}p.isMDXComponent=!0},1348:function(e,n,t){n.Z=t.p+"assets/images/hive-config-b82eab380e4f319781576e43a4337b78.png"},4883:function(e,n,t){n.Z=t.p+"assets/images/hive-run-8b2ae5eed34104e76acc380bad57fe24.png"},7117:function(e,n,t){n.Z=t.p+"assets/images/queue-set-e97a179515f871064f97ad6a28747f0c.png"},1884:function(e,n,t){n.Z=t.p+"assets/images/workflow-10d4a1090b39c00c25a2b62f1c25ca60.png"}}]);