"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[3955],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return v}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),p=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=p(t),v=r,d=h["".concat(o,".").concat(v)]||h[v]||s[v]||a;return t?i.createElement(d,l(l({ref:n},c),{},{components:t})):i.createElement(d,l({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=h;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3599:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),l=["components"],u={title:"Hive \u5f15\u64ce",sidebar_position:2},o=void 0,p={unversionedId:"engine_usage/hive",id:"version-1.0.2/engine_usage/hive",isDocsHomePage:!1,title:"Hive \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.0\u4e2d\uff0cHive\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2/engine_usage/hive.md",sourceDirName:"engine_usage",slug:"/engine_usage/hive",permalink:"/zh-CN/docs/latest/engine_usage/hive",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2/engine_usage/hive.md",tags:[],version:"1.0.2",sidebarPosition:2,frontMatter:{title:"Hive \u5f15\u64ce",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Spark \u5f15\u64ce",permalink:"/zh-CN/docs/latest/engine_usage/spark"},next:{title:"Python \u5f15\u64ce",permalink:"/zh-CN/docs/latest/engine_usage/python"}},c=[{value:"1.Hive\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",id:"1hive\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",children:[]},{value:"2.Hive\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",id:"2hive\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",children:[{value:"2.1 Hive\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-hive\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",children:[]},{value:"2.2 hive engineConn\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-hive-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]},{value:"2.3 hive\u5f15\u64ce\u7684\u6807\u7b7e",id:"23-hive\u5f15\u64ce\u7684\u6807\u7b7e",children:[]}]},{value:"3.hive\u5f15\u64ce\u7684\u4f7f\u7528",id:"3hive\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"\u51c6\u5907\u64cd\u4f5c\uff0c\u961f\u5217\u8bbe\u7f6e",id:"\u51c6\u5907\u64cd\u4f5c\u961f\u5217\u8bbe\u7f6e",children:[]},{value:"3.1 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",id:"31-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"3.2\u5de5\u4f5c\u6d41\u7684\u4f7f\u7528\u65b9\u5f0f",id:"32\u5de5\u4f5c\u6d41\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"3.3 Linkis Client\u7684\u4f7f\u7528\u65b9\u5f0f",id:"33-linkis-client\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]}]},{value:"4.Hive\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",id:"4hive\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",children:[]}],s={toc:c};function h(e){var n=e.components,u=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},s,u,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.0\u4e2d\uff0cHive\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"1hive\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"},"1.Hive\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528hive\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u4ee5\u4e0b\u7684\u73af\u5883\u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u6b63\u786e\u5e76\u4e14\u5f15\u64ce\u7684\u542f\u52a8\u7528\u6237\u662f\u6709\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u7684\u3002"),(0,a.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728\u6267\u884chive\u4efb\u52a1\u4e4b\u524d\uff0c\u68c0\u67e5\u4e0b\u6267\u884c\u7528\u6237\u7684\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"JDK\u5b89\u88c5\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop\u5b89\u88c5\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HIVE_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Hive\u914d\u7f6e\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")))),(0,a.kt)("p",null,"\u88681-1 \u73af\u5883\u914d\u7f6e\u6e05\u5355"),(0,a.kt)("h2",{id:"2hive\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"},"2.Hive\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"),(0,a.kt)("h3",{id:"21-hive\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 Hive\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,a.kt)("p",null,"Hive\u7684\u7248\u672c\u662f\u652f\u6301hive1.x\u548chive2.x\uff0c\u9ed8\u8ba4\u662f\u652f\u6301hive on MapReduce\uff0c\u5982\u679c\u60a8\u60f3\u6539\u6210Hive\non Tez\uff0c\u9700\u8981\u60a8\u6309\u7167\u6b64pr\u8fdb\u884c\u4e00\u4e0b\u4fee\u6539\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/pull/541"},"https://github.com/apache/incubator-linkis/pull/541")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u652f\u6301\u7684hive\u7248\u672c\u662f1.2.1,\u5982\u679c\u60a8\u60f3\u4fee\u6539hive\u7684\u7248\u672c\uff0c\u6bd4\u5982\u60f3\u8981\u4fee\u6539\u62102.3.3\uff0c\u60a8\u53ef\u4ee5\u627e\u5230linkis-engineplugin-hive\u6a21\u5757\uff0c\u5c06\\<hive.version",">","\u6807\u7b7e\u8fdb\u884c\u6539\u62102.3.3\uff0c\u7136\u540e\u5355\u72ec\u7f16\u8bd1\u6b64\u6a21\u5757\u5373\u53ef"),(0,a.kt)("h3",{id:"22-hive-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 hive engineConn\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u7f16\u8bd1\u5b8c\u4e86\u60a8\u7684hive\u5f15\u64ce\u7684\u63d2\u4ef6\u5df2\u7ecf\u7f16\u8bd1\u5b8c\u6210\uff0c\u90a3\u4e48\u60a8\u9700\u8981\u5c06\u65b0\u7684\u63d2\u4ef6\u653e\u7f6e\u5230\u6307\u5b9a\u7684\u4f4d\u7f6e\u4e2d\u624d\u80fd\u52a0\u8f7d\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u8fd9\u7bc7\u6587\u7ae0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/deployment/engine_conn_plugin_installation"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")," "),(0,a.kt)("h3",{id:"23-hive\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 hive\u5f15\u64ce\u7684\u6807\u7b7e"),(0,a.kt)("p",null,"Linkis1.0\u662f\u901a\u8fc7\u6807\u7b7e\u6765\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u9700\u8981\u5728\u6211\u4eec\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u63d2\u5165\u7684\u65b9\u5f0f\u5982\u4e0b\u6587\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/wiki/EngineConnPlugin%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3#22-%E7%AE%A1%E7%90%86%E5%8F%B0configuration%E9%85%8D%E7%BD%AE%E4%BF%AE%E6%94%B9%E5%8F%AF%E9%80%89"},"https://github.com/apache/incubator-linkis/wiki/EngineConnPlugin%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3#22-%E7%AE%A1%E7%90%86%E5%8F%B0configuration%E9%85%8D%E7%BD%AE%E4%BF%AE%E6%94%B9%E5%8F%AF%E9%80%89")),(0,a.kt)("h2",{id:"3hive\u5f15\u64ce\u7684\u4f7f\u7528"},"3.hive\u5f15\u64ce\u7684\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c\u961f\u5217\u8bbe\u7f6e"},"\u51c6\u5907\u64cd\u4f5c\uff0c\u961f\u5217\u8bbe\u7f6e"),(0,a.kt)("p",null,"hive\u7684MapReduce\u4efb\u52a1\u662f\u9700\u8981\u7528\u5230yarn\u7684\u8d44\u6e90\uff0c\u6240\u4ee5\u9700\u8981\u60a8\u5728\u4e00\u5f00\u59cb\u5c31\u8bbe\u7f6e\u961f\u5217"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(388).Z})),(0,a.kt)("p",null,"\u56fe3-1 \u961f\u5217\u8bbe\u7f6e"),(0,a.kt)("h3",{id:"31-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.1 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("p",null,"Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165Scriptis\uff0c\u53f3\u952e\u76ee\u5f55\u7136\u540e\u65b0\u5efahive\u811a\u672c\u5e76\u7f16\u5199hivesql\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"hive\u5f15\u64ce\u7684\u5b9e\u73b0\u65b9\u5f0f\u901a\u8fc7\u5b9e\u4f8b\u5316hive\u7684Driver\u5b9e\u4f8b\uff0c\u7136\u540e\u7531Driver\u6765\u63d0\u4ea4\u4efb\u52a1\uff0c\u5e76\u83b7\u53d6\u7ed3\u679c\u96c6\u5e76\u5c55\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(5890).Z})),(0,a.kt)("p",null,"\u56fe3-2 hivesql\u7684\u6267\u884c\u6548\u679c\u622a\u56fe"),(0,a.kt)("h3",{id:"32\u5de5\u4f5c\u6d41\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.2\u5de5\u4f5c\u6d41\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("p",null,"DSS\u5de5\u4f5c\u6d41\u4e5f\u6709hive\u7684\u8282\u70b9\uff0c\u60a8\u53ef\u4ee5\u62d6\u5165\u5de5\u4f5c\u6d41\u8282\u70b9\uff0c\u7136\u540e\u53cc\u51fb\u8fdb\u5165\u7136\u540e\u8fdb\u884c\u7f16\u8f91\u4ee3\u7801\uff0c\u7136\u540e\u4ee5\u5de5\u4f5c\u6d41\u7684\u5f62\u5f0f\u8fdb\u884c\u6267\u884c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(5102).Z})),(0,a.kt)("p",null,"\u56fe3-5 \u5de5\u4f5c\u6d41\u6267\u884chive\u7684\u8282\u70b9"),(0,a.kt)("h3",{id:"33-linkis-client\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.3 Linkis Client\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("p",null,"Linkis\u4e5f\u63d0\u4f9b\u4e86client\u7684\u65b9\u5f0f\u8fdb\u884c\u8c03\u7528hive\u7684\u4efb\u52a1\uff0c\u8c03\u7528\u7684\u65b9\u5f0f\u662f\u901a\u8fc7LinkisClient\u63d0\u4f9b\u7684SDK\u7684\u65b9\u5f0f\u3002\u6211\u4eec\u63d0\u4f9b\u4e86java\u548cscala\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u8c03\u7528\uff0c\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/wiki/Linkis1.0%E7%94%A8%E6%88%B7%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3"},"https://github.com/apache/incubator-linkis/wiki/Linkis1.0%E7%94%A8%E6%88%B7%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3"),"\u3002"),(0,a.kt)("h2",{id:"4hive\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"},"4.Hive\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u5f15\u64ce\u914d\u7f6e\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u8bbe\u7f6e\uff0c\u5305\u62echive Driver\u8fdb\u7a0b\u7684\u5185\u5b58\u5927\u5c0f\u7b49\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6320).Z})),(0,a.kt)("p",null,"\u56fe4-1 hive\u7684\u7528\u6237\u81ea\u5b9a\u4e49\u914d\u7f6e\u7ba1\u7406\u53f0"))}h.isMDXComponent=!0},6320:function(e,n,t){n.Z=t.p+"assets/images/hive-config-7406dea43d4e689367d4915efa3e2b5d.png"},5890:function(e,n,t){n.Z=t.p+"assets/images/hive-run-8b2ae5eed34104e76acc380bad57fe24.png"},388:function(e,n,t){n.Z=t.p+"assets/images/queue-set-e89c51e5b7d25d78a78580b122e4e64c.png"},5102:function(e,n,t){n.Z=t.p+"assets/images/workflow-10d4a1090b39c00c25a2b62f1c25ca60.png"}}]);