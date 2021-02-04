/*! For license information please see module.js.LICENSE.txt */
define(["lodash","jquery","@grafana/runtime","app/plugins/sdk","app/core/app_events","moment"],(function(e,t,n,r,i,s){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=10)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=i},function(e,t){e.exports=s},function(e,t,n){var r=n(7),i=n(8);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1},o=(r(i,s),i.locals?i.locals:{});e.exports=o},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],i=0;i<e.length;i++){var s=e[i],l=t.base?s[0]+t.base:s[0],p=n[l]||0,c="".concat(l," ").concat(p);n[l]=p+1;var h=a(c),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==h?(o[h].references++,o[h].updater(u)):o.push({identifier:c,updater:g(u,t),references:1}),r.push(c)}return r}function p(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=s(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,h=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function d(e,t,n){var r=n.css,i=n.media,s=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function g(e,t){var n,r,i;if(t.singleton){var s=f++;n=m||(m=p(t)),r=u.bind(null,n,s,!1),i=u.bind(null,n,s,!0)}else n=p(t),r=d.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var s=l(e,t),p=0;p<n.length;p++){var c=a(n[p]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}n=s}}}},function(e,t,n){(t=n(9)(!0)).push([e.i,".small-link a{text-decoration:none;color:#33b5e5}.small-link a:hover{text-decoration:underline}.small-link .label-tag{background-color:#757575;border-color:#9b9b9b;margin-right:5px;cursor:context-menu}.imgwrap img{width:100%;height:100%}.imgwrap img:hover{border:3px solid #33b5e5;cursor:pointer}.center-popup{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;cursor:pointer}.ngtemplate{height:100%}\n","",{version:3,sources:["style.css"],names:[],mappings:"AAAA,cAAc,oBAAoB,CAAC,aAAa,CAAC,oBAAoB,yBAAyB,CAAC,uBAAuB,wBAAwB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,mBAAmB,CAAC,aAAa,UAAU,CAAC,WAAW,CAAC,mBAAmB,wBAAwB,CAAC,cAAc,CAAC,cAAc,iBAAiB,CAAC,OAAO,CAAC,QAAQ,CAAC,+BAA+B,CAAC,YAAY,CAAC,cAAc,CAAC,YAAY,WAAW",file:"style.css",sourcesContent:[".small-link a{text-decoration:none;color:#33b5e5}.small-link a:hover{text-decoration:underline}.small-link .label-tag{background-color:#757575;border-color:#9b9b9b;margin-right:5px;cursor:context-menu}.imgwrap img{width:100%;height:100%}.imgwrap img:hover{border:3px solid #33b5e5;cursor:pointer}.center-popup{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;cursor:pointer}.ngtemplate{height:100%}\n"]}]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),s=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([i]).join("\n")}var o,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(i[o]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var s,o=n(3),a=n(1),l=n.n(a),p=n(0),c=n.n(p),h=n(4),u=n.n(h),d=(n(6),function(e){this.isProxy=!1,this.withCredentials=!1,this.name=e.name,e.url?this.baseURL=e.url:e.urls&&(this.baseURL=e.urls[0]),this.baseURL||(this.baseURL=""),this.isProxy=this.baseURL.startsWith("/api/"),this.withCredentials=e.withCredentials,this.basicAuth=e.basicAuth});!function(e){e.html="html",e.text="text",e.pre="pre",e.image="image",e.json="json",e.template="template"}(s||(s={}));var m=[{name:"Simple",text:"loads static content from github",config:{request:"http",method:"GET",mode:s.html,template:"",url:"https://raw.githubusercontent.com/ryantxu/ajax-panel/master/static/example.txt",params_js:"{\n from:ctrl.range.from.format('x'),  // x is unix ms timestamp\n to:ctrl.range.to.format('x'), \n height:ctrl.height,\n now:Date.now(),\n interval: ctrl.template('$__interval'),\n sample: 'Not escaped: $__interval',\n since:ctrl.lastRequestTime\n}",header_js:"{}",responseType:"text",withCredentials:!1,skipSameURL:!0,showErrors:!0,showTime:!1,showTimePrefix:null,showTimeFormat:"LTS",showTimeValue:"request",templateResponse:!0}},{name:"Echo Service",text:"Responds with the request attributes",config:{method:"GET",mode:s.json,responseType:"json",url:"https://httpbin.org/anything?templateInURL=$__interval",header_js:"{\n  Accept: 'text/plain'\n}",showTime:!0}},{name:"Echo Service with Template",text:"Format the response with an angular template",editorTabIndex:2,config:{method:"GET",mode:s.template,responseType:"json",template:"<h5>Origin: {{ response.origin }}</h5>\n\n<pre>{{ response | json }}</pre>",url:"https://httpbin.org/anything?templateInURL=$__interval",header_js:"{\n  Accept: 'text/plain'\n}",showTime:!0}},{name:"Webcamera in Thailand",text:"Load an image dynamically",config:{method:"GET",url:"http://tat.touch-ics.com/CCTV/cam.php?cam=31&datatype=image&langISO=EN&t=current&reloadtime=1",params_js:"{\n __now:Date.now(),\n}",responseType:"arraybuffer",showTime:!0}},{name:"Image",text:'Sending "Accept" header',config:{method:"GET",url:"https://httpbin.org/image",params_js:"{}",header_js:"{\n  Accept: 'image/jpeg'\n}",responseType:"blob",showTime:!0,showTimeValue:"recieve"}},{name:"Image in IFrame",text:"load an image in an iframe",config:{method:"iframe",url:"https://dummyimage.com/600x300/4286f4/000&text=GRAFANA",params_js:"{}"}},{name:"Results from Grafana API",text:"grafana settings api w/ template",config:{mode:s.template,responseType:"json",template:'<h2>Instance: {{ response.DEFAULT.instance_name }}</h2>\n\n<div ng-repeat="(key, value) in response">\n\n        <h5>{{key}}</h5>\n\n        <pre>{{ value | json }}</pre>\n\n      </div>',url:"/api/admin/settings",params_js:"{}"}},{name:"Results from Grafana API",text:"formatted as JSON",config:{mode:s.json,url:"/api/admin/stats",responseType:"json",params_js:"{}"}},{name:"Basic Auth (success)",text:"send correct basic auth",config:{url:"https://httpbin.org/basic-auth/user/pass",withCredentials:!0,responseType:"json",params_js:"{}",header_js:"{\n   Authorization: 'Basic ' + btoa('user' + ':' + 'pass')\n// Authorization: 'Basic dXNlcjpwYXNz'\n}"}},{name:"Basic Auth (fail)",text:"send correct basic auth",config:{url:"https://httpbin.org/basic-auth/userx/passx",withCredentials:!0,responseType:"json",params_js:"{}",header_js:"{\n Authorization: 'Basic ...bad..'\n}"}}],f=n(2),g=n(5),b=n.n(g);n.d(t,"AjaxCtrl",(function(){return v})),n.d(t,"PanelCtrl",(function(){return v}));var v=function(e){function t(t,n,r,i,s,o,a){var l=e.call(this,t,n)||this;return l.$rootScope=r,l.$q=i,l.$timeout=s,l.$sce=o,l.$compile=a,l.isIframe=!1,l.objectURL=null,l.scopedVars=null,l.requestCount=0,l.lastRequestTime=-1,l.panel.useDatasource&&(l.panel.request="datasource",delete l.panel.useDatasource),c.a.defaults(l.panel,m[0].config),t.$on("$destroy",(function(){l.objectURL&&URL.revokeObjectURL(l.objectURL)})),l.events.on("data-received",l.onDataReceived.bind(l)),l.events.on("data-snapshot-load",l.onDataSnapshotLoad.bind(l)),l.events.on("data-error",l.onDataError.bind(l)),l.events.on("init-edit-mode",l.onInitEditMode.bind(l)),l.events.on("panel-initialized",l.onPanelInitalized.bind(l)),l.events.on("render",l.notifyWhenRenderingCompleted.bind(l)),l}return t.$inject=["$scope","$injector","$rootScope","$q","$timeout","$sce","$compile"],function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.onDataSnapshotLoad=function(e){this.onDataReceived(e)},t.prototype.onDataError=function(e){console.log("onDataError",e)},t.prototype.onDataReceived=function(e){this.process(e),this.loading=!1},t.prototype.notifyWhenRenderingCompleted=function(){var e=this;if(this.timer&&this.$timeout.cancel(this.timer),this.requestCount>0){var t=this.requestCount;this.timer=this.$timeout((function(){e.timer=void 0,e.requestCount===t&&(e.loading?e.notifyWhenRenderingCompleted():e.renderingCompleted())}),100)}},t.prototype.getStaticExamples=function(){return m},t.prototype.isUsingMetricQuery=function(){return this.panel.request.startsWith("query")},t.prototype.loadExample=function(e,t){var n=this;t&&(t.stopPropagation(),t.preventDefault()),console.log("Loading example",e);var r=m[0].config;c.a.forEach(c.a.keys(r),(function(e){delete n.panel[e]})),c.a.defaults(this.panel,e.config),c.a.defaults(this.panel,r),l()(window).scrollTop(0),u.a.emit("dash-scroll",{animate:!1,evt:0}),this.$rootScope.appEvent("alert-success",["Loaded Example Configuraiton",e.name]),e.editorTabIndex?this.editorTabIndex=e.editorTabIndex:this.editorTabIndex=1,this.$scope.response=void 0,this.updateFN(),this.updateTemplate(),this.refresh()},t.prototype.getCurrentParams=function(e){var t={};return this.paramsFn&&(t=this.paramsFn(this)),t},t.prototype.template=function(e){return e?Object(f.getTemplateSrv)().replace(e,this.scopedVars):null},t.prototype.getHeaders=function(e){if(this.headerFn)return this.headerFn(this)},t.prototype._getURL=function(e){var t=Object(f.getTemplateSrv)().replace(this.panel.url,e),n=this.getCurrentParams();if(n){var r=l.a.param(n);if(r){var i=t.indexOf("?")>0;t=t+(i?"&":"?")+r}}return"datasource"===this.panel.request&&this.dsInfo?this.dsInfo.baseURL+t:t},t.prototype.updateTimeRange=function(t){var n=this.timeInfo,r=e.prototype.updateTimeRange.call(this);return this.panel.showTime&&n&&(this.timeInfo=n),r},t.prototype.issueQueries=function(t){var n=this;if(this.isUsingMetricQuery())return e.prototype.issueQueries.call(this,t);var r=Object(f.getTemplateSrv)();if(this.datasource=t,this.fnError)return this.loading=!1,this.error=this.fnError,null;var s=this.scopedVars=Object.assign({},this.panel.scopedVars,{__interval:{text:this.interval,value:this.interval},__interval_ms:{text:this.intervalMs,value:this.intervalMs}});this.debugParams&&(this.debugParams={},c.a.each(s,(function(e,t){n.debugParams[t]=e.text})),c.a.each(r.getVariables(),(function(e){n.debugParams[e.name]=e.getValueForUrl()})));var o=this._getURL(s);if(this.panel.skipSameURL&&o===this.lastURL)return this.loading=!1,null;this.lastURL=o,this.error=null;var a=Date.now();if(this.isIframe)return this.$scope.url=this.$sce.trustAsResourceUrl(o),this.objectURL&&(this.img.css("display","none"),URL.revokeObjectURL(this.objectURL),this.objectURL=null),void this.$scope.$apply();var l=Object(f.getTemplateSrv)().replace(this.panel.url,s),p=this.getCurrentParams(),h={method:this.panel.method,url:l,params:p,headers:this.getHeaders(),withCredentials:this.panel.withCredentials};h.headers=h.headers||{},this.panel.responseType&&(h.responseType=this.panel.responseType);var u=Promise.resolve({});if("datasource"===this.panel.request)u=Object(f.getDataSourceSrv)().get(this.panel.datasource).then((function(e){console.log("DDDD",e,n),e?(n.dsInfo=new d(e),(n.dsInfo.basicAuth||n.dsInfo.withCredentials)&&(h.withCredentials=!0),n.dsInfo.basicAuth&&(h.headers=i(i({},h.headers),{Authorization:n.dsInfo.basicAuth})),h.url=n.dsInfo.baseURL+l):n.dsInfo=null}));else{if(!h.url)return this.error="Missing URL",void this.showError(this.error,null);if(h.url.indexOf("://")<0&&h.url.indexOf("api/")<0)return this.error="Invalid URL: "+h.url,void this.showError(this.error,p)}return this.requestCount++,this.loading=!0,u.then((function(){Object(f.getBackendSrv)().fetch(h).subscribe({next:function(e){n.lastRequestTime=a,n.process(e),n.loading=!1},error:function(e){console.log("ERR",e),n.lastRequestTime=a,n.loading=!1,n.error=e,n.inspector={error:e},n.showError("Request Error",e)}})})),null},t.prototype.handleQueryResult=function(t){if(this.loading=!1,t&&this.isUsingMetricQuery())return e.prototype.handleQueryResult.call(this,t);this.render()},t.prototype.onPanelInitalized=function(){var e=this;this.updateFN(),this.updateTemplate(),l()(window).on("resize",c.a.debounce((function(t){e.refresh()}),250))},t.prototype.onConfigChanged=function(){this.lastURL=void 0,this.refresh()},t.prototype.onInitEditMode=function(){this.debugParams={},this.addEditorTab("Request","public/plugins/"+this.pluginId+"/partials/editor.request.html",2),this.addEditorTab("Display","public/plugins/"+this.pluginId+"/partials/editor.display.html",3),this.addEditorTab("Examples","public/plugins/"+this.pluginId+"/partials/editor.examples.html",5),this.editorTabIndex=2,this.updateFN()},t.prototype.updateFN=function(){if(this.fnError=null,this.paramsFn=void 0,this.panel.params_js)try{this.paramsFn=new Function("ctrl","return "+this.panel.params_js)}catch(e){console.warn("error parsing params_js",this.panel.params_js,e),this.paramsFn=void 0,this.fnError=e}if(this.panel.header_js)try{this.headerFn=new Function("ctrl","return "+this.panel.header_js)}catch(e){console.warn("error parsing header_js",this.panel.header_js,e),this.headerFn=void 0,this.fnError=e}this.onConfigChanged()},t.prototype.updateTemplate=function(){var e="";if(this.isIframe="iframe"===this.panel.method,this.panel.mode===s.template)this.panel.template||(this.panel.template="<pre>{{ response }}</pre>"),e=this.panel.template;else if(delete this.panel.template,this.isIframe)e='<iframe           frameborder="0"           width="100%"            height="100%"           ng-src="{{ url }}"           ng-if="ctrl.panel.method === \'iframe\'"></iframe>';else{this.panel.mode||(this.panel.mode=s.html);var t=this.panel.mode;switch(t===s.html&&this.isUsingMetricQuery()&&(t=s.pre),t){case s.html:e='<div ng-bind-html="response"></div>';break;case s.text:e="{{ response }}";break;case s.pre:e="<pre>{{ response }}</pre>";break;case s.json:e='<json-tree root-name="sub" object="response" start-expanded="true"></json-tree>';break;case s.image:e="";break;default:console.warn("Unsupported render mode:",this.panel.mode)}}e?(this.ngtemplate.html(e),this.ngtemplate.css("display","block"),this.$compile(this.ngtemplate.contents())(this.$scope)):this.ngtemplate.css("display","none"),this.$scope.response&&this.render()},t.prototype.showError=function(e,t){this.timeInfo=null,this.objectURL&&(this.img.css("display","none"),URL.revokeObjectURL(this.objectURL),this.objectURL=null);var n="<h1>"+e+"</h1>";t&&this.panel.showErrors?n+="<pre>"+JSON.stringify(t)+"</pre>":n+="<pre>Something went wrong while executing your request.</pre>",this.ngtemplate.html(n),this.$compile(this.ngtemplate.contents())(this.$scope),this.$scope.response&&this.render()},t.prototype.process=function(e){if(this.panel.showTime){var t=this.panel.showTimePrefix?this.panel.showTimePrefix:"";if(this.panel.showTimeValue){var n=void 0;"request"===this.panel.showTimeValue?n=this.lastRequestTime:"recieve"===this.panel.showTimeValue&&(n=Date.now()),t+=n?b()(n).format(this.panel.showTimeFormat):"missing: "+this.panel.showTimeValue}this.timeInfo=t}else this.timeInfo=null;if(e){var r=e.headers.get("Content-Type");if(r&&r.startsWith("image/")){var i=new Blob([e.data],{type:r}),o=this.objectURL;return this.objectURL=URL.createObjectURL(i),this.img.attr("src",this.objectURL),o&&URL.revokeObjectURL(o),this.img.css("display","block"),void(this.panel.mode!==s.image&&(this.panel.mode=s.image,this.updateTemplate()))}this.$scope.response=e.data,console.log("GOT",e),this.objectURL&&(this.img.css("display","none"),URL.revokeObjectURL(this.objectURL),this.objectURL=null),this.panel.mode===s.json&&this.updateTemplate(),this.$scope.$apply()}},t.prototype.openFullscreen=function(){var e=this;this.overlay.find("img").attr("src",this.objectURL),l()(".grafana-app").append(this.overlay),this.overlay.on("click",(function(){e.overlay.remove()}))},t.prototype.link=function(e,t,n,r){this.img=l()(t.find("img")[0]),this.ngtemplate=l()(t.find(".ngtemplate")[0]),this.overlay=l()(t.find(".ajaxmodal")[0]),this.overlay.remove(),this.overlay.css("display","block"),this.img.css("display","none")},t.templateUrl="partials/module.html",t.scrollable=!0,t}(o.MetricsPanelCtrl)}])}));
//# sourceMappingURL=module.js.map