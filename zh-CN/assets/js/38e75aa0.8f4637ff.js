"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[27],{3905:function(n,t,e){e.d(t,{Zo:function(){return u},kt:function(){return d}});var r=e(7294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function p(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var s=r.createContext({}),k=function(n){var t=r.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},u=function(n){var t=k(n.components);return r.createElement(s.Provider,{value:t},n.children)},o={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(n,t){var e=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,u=p(n,["components","mdxType","originalType","parentName"]),c=k(e),d=a,g=c["".concat(s,".").concat(d)]||c[d]||o[d]||i;return e?r.createElement(g,l(l({ref:t},u),{},{components:e})):r.createElement(g,l({ref:t},u))}));function d(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var i=e.length,l=new Array(i);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=n,p.mdxType="string"==typeof n?n:a,l[1]=p;for(var k=2;k<i;k++)l[k]=e[k];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}c.displayName="MDXCreateElement"},6546:function(n,t,e){e.r(t),e.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return k},toc:function(){return u},default:function(){return c}});var r=e(7462),a=e(3366),i=(e(7294),e(3905)),l=["components"],p={title:"Spark \u5f15\u64ce",sidebar_position:1},s=void 0,k={unversionedId:"engine_usage/spark",id:"engine_usage/spark",isDocsHomePage:!1,title:"Spark \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.0\u4e2d\uff0cspark\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine_usage/spark.md",sourceDirName:"engine_usage",slug:"/engine_usage/spark",permalink:"/zh-CN/docs/next/engine_usage/spark",editUrl:"https://github.com/apache/incubator-linkis-website/edit/docusaurus/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine_usage/spark.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Spark \u5f15\u64ce",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/engine_usage/overview"},next:{title:"Hive \u5f15\u64ce",permalink:"/zh-CN/docs/next/engine_usage/hive"}},u=[{value:"1.Spark\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",id:"1spark\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",children:[]},{value:"2.Spark\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",id:"2spark\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",children:[{value:"2.1 spark\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-spark\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",children:[]},{value:"2.2 spark engineConn\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-spark-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]},{value:"2.3 spark\u5f15\u64ce\u7684\u6807\u7b7e",id:"23-spark\u5f15\u64ce\u7684\u6807\u7b7e",children:[]}]},{value:"3.spark\u5f15\u64ce\u7684\u4f7f\u7528",id:"3spark\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"\u51c6\u5907\u64cd\u4f5c\uff0c\u961f\u5217\u8bbe\u7f6e",id:"\u51c6\u5907\u64cd\u4f5c\u961f\u5217\u8bbe\u7f6e",children:[]},{value:"3.1 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",id:"31-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"3.2\u5de5\u4f5c\u6d41\u7684\u4f7f\u7528\u65b9\u5f0f",id:"32\u5de5\u4f5c\u6d41\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"3.3 Linkis Client\u7684\u4f7f\u7528\u65b9\u5f0f",id:"33-linkis-client\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]}]},{value:"4.spark\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",id:"4spark\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",children:[]}],o={toc:u};function c(n){var t=n.components,p=(0,a.Z)(n,l);return(0,i.kt)("wrapper",(0,r.Z)({},o,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.0\u4e2d\uff0cspark\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"1spark\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"},"1.Spark\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528spark\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u4ee5\u4e0b\u7684\u73af\u5883\u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u6b63\u786e\u5e76\u4e14\u5f15\u64ce\u7684\u542f\u52a8\u7528\u6237\u662f\u6709\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u7684\u3002"),(0,i.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728\u6267\u884cspark\u4efb\u52a1\u4e4b\u524d\uff0c\u68c0\u67e5\u4e0b\u6267\u884c\u7528\u6237\u7684\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"JDK\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"Hadoop\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HIVE","_","CONF_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Hive\u914d\u7f6e\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SPARK_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SPARK_CONF_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark\u914d\u7f6e\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"python"),(0,i.kt)("td",{parentName:"tr",align:null},"python"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5efa\u8bae\u4f7f\u7528anaconda\u7684python\u4f5c\u4e3a\u9ed8\u8ba4python")))),(0,i.kt)("p",null,"\u88681-1 \u73af\u5883\u914d\u7f6e\u6e05\u5355"),(0,i.kt)("h2",{id:"2spark\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"},"2.Spark\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"),(0,i.kt)("h3",{id:"21-spark\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 spark\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,i.kt)("p",null,"\u7406\u8bba\u4e0aLinkis1.0\u652f\u6301\u7684spark2.x\u4ee5\u4e0a\u7684\u6240\u6709\u7248\u672c\u3002\u9ed8\u8ba4\u652f\u6301\u7684\u7248\u672cSpark2.4.3\u3002\u5982\u679c\u60a8\u60f3\u4f7f\u7528\u60a8\u7684spark\u7248\u672c\uff0c\u5982spark2.1.0\uff0c\u5219\u60a8\u4ec5\u4ec5\u9700\u8981\u5c06\u63d2\u4ef6spark\u7684\u7248\u672c\u8fdb\u884c\u4fee\u6539\uff0c\u7136\u540e\u8fdb\u884c\u7f16\u8bd1\u5373\u53ef\u3002\u5177\u4f53\u7684\uff0c\u60a8\u53ef\u4ee5\u627e\u5230linkis-engineplugin-spark\u6a21\u5757\uff0c\u5c06\\<spark.version",">","\u6807\u7b7e\u8fdb\u884c\u6539\u62102.1.0\uff0c\u7136\u540e\u5355\u72ec\u7f16\u8bd1\u6b64\u6a21\u5757\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"22-spark-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 spark engineConn\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u7f16\u8bd1\u5b8c\u4e86\u60a8\u7684spark\u5f15\u64ce\u7684\u63d2\u4ef6\u5df2\u7ecf\u7f16\u8bd1\u5b8c\u6210\uff0c\u90a3\u4e48\u60a8\u9700\u8981\u5c06\u65b0\u7684\u63d2\u4ef6\u653e\u7f6e\u5230\u6307\u5b9a\u7684\u4f4d\u7f6e\u4e2d\u624d\u80fd\u52a0\u8f7d\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u8fd9\u7bc7\u6587\u7ae0"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Linkis/wiki/EngineConnPlugin%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3"},"https://github.com/WeBankFinTech/Linkis/wiki/EngineConnPlugin%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3")),(0,i.kt)("h3",{id:"23-spark\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 spark\u5f15\u64ce\u7684\u6807\u7b7e"),(0,i.kt)("p",null,"Linkis1.0\u662f\u901a\u8fc7\u6807\u7b7e\u6765\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u9700\u8981\u5728\u6211\u4eec\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u63d2\u5165\u7684\u65b9\u5f0f\u5982\u4e0b\u6587\u6240\u793a\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Linkis/wiki/EngineConnPlugin%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3%5C#22-%E7%AE%A1%E7%90%86%E5%8F%B0configuration%E9%85%8D%E7%BD%AE%E4%BF%AE%E6%94%B9%E5%8F%AF%E9%80%89"},"https://github.com/WeBankFinTech/Linkis/wiki/EngineConnPlugin%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E6%96%87%E6%A1%A3\\#22-%E7%AE%A1%E7%90%86%E5%8F%B0configuration%E9%85%8D%E7%BD%AE%E4%BF%AE%E6%94%B9%E5%8F%AF%E9%80%89")),(0,i.kt)("h2",{id:"3spark\u5f15\u64ce\u7684\u4f7f\u7528"},"3.spark\u5f15\u64ce\u7684\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c\u961f\u5217\u8bbe\u7f6e"},"\u51c6\u5907\u64cd\u4f5c\uff0c\u961f\u5217\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u56e0\u4e3aspark\u7684\u6267\u884c\u662f\u9700\u8981\u961f\u5217\u7684\u8d44\u6e90\uff0c\u6240\u4ee5\u7528\u6237\u5728\u6267\u884c\u4e4b\u524d\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e\u81ea\u5df1\u80fd\u591f\u6267\u884c\u7684\u961f\u5217\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(388).Z})),(0,i.kt)("p",null,"\u56fe3-1 \u961f\u5217\u8bbe\u7f6e"),(0,i.kt)("h3",{id:"31-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.1 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("p",null,"Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165Scriptis\uff0c\u65b0\u5efasql\u3001scala\u6216\u8005pyspark\u811a\u672c\u8fdb\u884c\u6267\u884c\u3002"),(0,i.kt)("p",null,"sql\u7684\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u65b0\u5efasql\u811a\u672c\u7136\u540e\u7f16\u5199\u8fdb\u884c\u6267\u884c\uff0c\u6267\u884c\u7684\u65f6\u5019\uff0c\u4f1a\u6709\u8fdb\u5ea6\u7684\u663e\u793a\u3002\u5982\u679c\u4e00\u5f00\u59cb\u7528\u6237\u662f\u6ca1\u6709spark\u5f15\u64ce\u7684\u8bdd\uff0csql\u7684\u6267\u884c\u4f1a\u542f\u52a8\u4e00\u4e2aspark\u4f1a\u8bdd(\u8fd9\u91cc\u53ef\u80fd\u4f1a\u82b1\u4e00\u4e9b\u65f6\u95f4)\uff0c\nSparkSession\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u6267\u884csql\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(7236).Z})),(0,i.kt)("p",null,"\u56fe3-2 sparksql\u7684\u6267\u884c\u6548\u679c\u622a\u56fe"),(0,i.kt)("p",null,"spark-scala\u7684\u4efb\u52a1\uff0c\u6211\u4eec\u5df2\u7ecf\u521d\u59cb\u5316\u597d\u4e86sqlContext\u7b49\u53d8\u91cf\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2asqlContext\u8fdb\u884csql\u7684\u6267\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(8881).Z})),(0,i.kt)("p",null,"\u56fe3-3 spark-scala\u7684\u6267\u884c\u6548\u679c\u56fe"),(0,i.kt)("p",null,"\u7c7b\u4f3c\u7684\uff0cpyspark\u7684\u65b9\u5f0f\u4e2d\uff0c\u6211\u4eec\u4e5f\u5df2\u7ecf\u521d\u59cb\u5316\u597d\u4e86SparkSession\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528spark.sql\u7684\u65b9\u5f0f\u8fdb\u884c\u6267\u884csql\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(6999).Z}),"\n\u56fe3-4 pyspark\u7684\u6267\u884c\u65b9\u5f0f"),(0,i.kt)("h3",{id:"32\u5de5\u4f5c\u6d41\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.2\u5de5\u4f5c\u6d41\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("p",null,"DSS\u5de5\u4f5c\u6d41\u4e5f\u662f\u6709spark\u7684\u4e09\u4e2a\u8282\u70b9\uff0c\u60a8\u53ef\u4ee5\u62d6\u5165\u5de5\u4f5c\u6d41\u8282\u70b9\uff0c\u5982sql\u3001scala\u6216\u8005pyspark\u8282\u70b9\uff0c\u7136\u540e\u53cc\u51fb\u8fdb\u5165\u7136\u540e\u8fdb\u884c\u7f16\u8f91\u4ee3\u7801\uff0c\u7136\u540e\u4ee5\u5de5\u4f5c\u6d41\u7684\u5f62\u5f0f\u8fdb\u884c\u6267\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(5102).Z})),(0,i.kt)("p",null,"\u56fe3-5 \u5de5\u4f5c\u6d41\u6267\u884cspark\u7684\u8282\u70b9"),(0,i.kt)("h3",{id:"33-linkis-client\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.3 Linkis Client\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("p",null,"Linkis\u4e5f\u63d0\u4f9b\u4e86client\u7684\u65b9\u5f0f\u8fdb\u884c\u8c03\u7528spark\u7684\u4efb\u52a1\uff0c\u8c03\u7528\u7684\u65b9\u5f0f\u662f\u901a\u8fc7LinkisClient\u63d0\u4f9b\u7684SDK\u7684\u65b9\u5f0f\u3002\u6211\u4eec\u63d0\u4f9b\u4e86java\u548cscala\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u8c03\u7528\uff0c\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Linkis/wiki/Linkis1.0%E7%94%A8%E6%88%B7%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3"},"https://github.com/WeBankFinTech/Linkis/wiki/Linkis1.0%E7%94%A8%E6%88%B7%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3"),"\u3002"),(0,i.kt)("h2",{id:"4spark\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"},"4.spark\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u5f15\u64ce\u914d\u7f6e\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u8bbe\u7f6e\uff0c\u6bd4\u5982spark\u4f1a\u8bddexecutor\u4e2a\u6570\u548cexecutor\u7684\u5185\u5b58\u3002\u8fd9\u4e9b\u53c2\u6570\u662f\u4e3a\u4e86\u7528\u6237\u80fd\u591f\u66f4\u52a0\u81ea\u7531\u5730\u8bbe\u7f6e\u81ea\u5df1\u7684spark\u7684\u53c2\u6570\uff0c\u53e6\u5916spark\u5176\u4ed6\u53c2\u6570\u4e5f\u53ef\u4ee5\u8fdb\u884c\u4fee\u6539\uff0c\u6bd4\u5982\u7684pyspark\u7684python\u7248\u672c\u7b49\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(2746).Z})),(0,i.kt)("p",null,"\u56fe4-1 spark\u7684\u7528\u6237\u81ea\u5b9a\u4e49\u914d\u7f6e\u7ba1\u7406\u53f0"))}c.isMDXComponent=!0},6999:function(n,t,e){t.Z=e.p+"assets/images/pyspakr-run-39cd0bbe6c61d2fc7ad933db99c33d06.png"},388:function(n,t,e){t.Z=e.p+"assets/images/queue-set-e89c51e5b7d25d78a78580b122e4e64c.png"},8881:function(n,t,e){t.Z=e.p+"assets/images/scala-run-77cd49935a85082d9346d28f3ecf44e3.png"},2746:function(n,t,e){t.Z=e.p+"assets/images/spark-conf-2b013d6df48bcafd6b6b672f44039eab.png"},7236:function(n,t,e){t.Z=e.p+"assets/images/sparksql-run-d748d4fab0548fa92a6e91f42c911466.png"},5102:function(n,t,e){t.Z=e.p+"assets/images/workflow-10d4a1090b39c00c25a2b62f1c25ca60.png"}}]);