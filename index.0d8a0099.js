!function(){function a(a){return a&&a.__esModule?a.default:a}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire7a95;null==n&&((n=function(a){if(a in t)return t[a].exports;if(a in o){var e=o[a];delete o[a];var n={id:a,exports:{}};return t[a]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+a+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(a,e){o[a]=e},e.parcelRequire7a95=n);var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(a){return a&&a.constructor===Symbol?"symbol":typeof a},function(e,t){void 0===t&&r("Pagination requires jQuery.");var o="__pagination-";t.fn.pagination&&r('plugin conflicted, the name "pagination" has been taken by another jQuery plugin.'),t.fn.pagination=function(a){if(void 0===a)return this;var i=t(this),u=t.extend({},t.fn.pagination.defaults,a),g={initialize:function(){var a=this;if(i.data("pagination")||i.data("pagination",{}),!1!==a.callHook("beforeInit")){i.data("pagination").initialized&&t(".paginationjs",i).remove(),a.disabled=!!u.disabled;var e=a.model={pageRange:u.pageRange,pageSize:u.pageSize};a.parseDataSource(u.dataSource,(function(t){a.isAsync=n.isString(t),n.isArray(t)&&(e.totalNumber=u.totalNumber=t.length),a.isDynamicTotalNumber=a.isAsync&&u.totalNumberLocator;var o=a.render(!0);u.className&&o.addClass(u.className),e.el=o,i["bottom"===u.position?"append":"prepend"](o),a.observer(),i.data("pagination").initialized=!0,a.callHook("afterInit",o)}))}},render:function(a){var e=this,o=e.model,n=o.el||t('<div class="paginationjs"></div>'),i=!0!==a;e.callHook("beforeRender",i);var r=o.pageNumber||u.pageNumber,c=u.pageRange||0,s=e.getTotalPage(),l=r-c,g=r+c;return g>s&&(g=s,l=(l=s-2*c)<1?1:l),l<=1&&(l=1,g=Math.min(2*c+1,s)),n.html(e.generateHTML({currentPage:r,pageRange:c,rangeStart:l,rangeEnd:g})),u.hideOnlyOnePage&&n[s<=1?"hide":"show"](),e.callHook("afterRender",i),n},getPageLinkTag:function(a){var e=u.pageLink;return e?'<a href="'.concat(e,'">').concat(a,"</a>"):"<a>".concat(a,"</a>")},generatePageNumbersHTML:function(a){var e,t=a.currentPage,o=this.getTotalPage(),n=this.getPageLinkTag,i=a.rangeStart,r=a.rangeEnd,c="",s=u.ellipsisText,l=u.classPrefix,g=u.pageClassName||"",p=u.activeClassName||"",f=u.disableClassName||"";if(null===u.pageRange){for(e=1;e<=o;e++)c+=e==t?'<li class="'.concat(l,"-page J-paginationjs-page ").concat(g," ").concat(p,'" data-num="').concat(e,'"><a>').concat(e,"</a></li>"):'<li class="'.concat(l,"-page J-paginationjs-page ").concat(g,'" data-num="').concat(e,'">').concat(n(e),"</li>");return c}if(i<=3)for(e=1;e<i;e++)c+=e==t?'<li class="'.concat(l,"-page J-paginationjs-page ").concat(g," ").concat(p,'" data-num="').concat(e,'"><a>').concat(e,"</a></li>"):'<li class="'.concat(l,"-page J-paginationjs-page ").concat(g,'" data-num="').concat(e,'">').concat(n(e),"</li>");else u.hideFirstOnEllipsisShow||(c+='<li class="'.concat(l,"-page ").concat(l,"-first J-paginationjs-page ").concat(g,'" data-num="1">').concat(n(1),"</li>")),c+='<li class="'.concat(l,"-ellipsis ").concat(f,'"><a>').concat(s,"</a></li>");for(e=i;e<=r;e++)c+=e==t?'<li class="'.concat(l,"-page J-paginationjs-page ").concat(g," ").concat(p,'" data-num="').concat(e,'"><a>').concat(e,"</a></li>"):'<li class="'.concat(l,"-page J-paginationjs-page ").concat(g,'" data-num="').concat(e,'">').concat(n(e),"</li>");if(r>=o-2)for(e=r+1;e<=o;e++)c+='<li class="'.concat(l,"-page J-paginationjs-page ").concat(g,'" data-num="').concat(e,'">').concat(n(e),"</li>");else c+='<li class="'.concat(l,"-ellipsis ").concat(f,'"><a>').concat(s,"</a></li>"),u.hideLastOnEllipsisShow||(c+='<li class="'.concat(l,"-page ").concat(l,"-last J-paginationjs-page ").concat(g,'" data-num="').concat(o,'">').concat(n(o),"</li>"));return c},generateHTML:function(a){var e,t=this,o=a.currentPage,i=t.getTotalPage(),r=t.getPageLinkTag,c=t.getTotalNumber(),s=u.pageSize,l=u.showPrevious,g=u.showNext,p=u.showPageNumbers,f=u.showNavigator,d=u.showSizeChanger,m=u.sizeChangerOptions,h=u.showGoInput,b=u.showGoButton,v=u.prevText,y=u.nextText,N=u.goButtonText,k=u.classPrefix,P=u.disableClassName||"",x=u.ulClassName||"",S=u.prevClassName||"",j=u.nextClassName||"",T="",w='<select class="J-paginationjs-size-select">',C='<input type="text" class="J-paginationjs-go-pagenumber">',H='<input type="button" class="J-paginationjs-go-button" value="'.concat(N,'">'),O="function"==typeof u.formatSizeChanger?u.formatSizeChanger(o,i,c):u.formatSizeChanger,z="function"==typeof u.formatNavigator?u.formatNavigator(o,i,c):u.formatNavigator,L="function"==typeof u.formatGoInput?u.formatGoInput(C,o,i,c):u.formatGoInput,E="function"==typeof u.formatGoButton?u.formatGoButton(H,o,i,c):u.formatGoButton,D="function"==typeof u.autoHidePrevious?u.autoHidePrevious():u.autoHidePrevious,J="function"==typeof u.autoHideNext?u.autoHideNext():u.autoHideNext,R="function"==typeof u.header?u.header(o,i,c):u.header,I="function"==typeof u.footer?u.footer(o,i,c):u.footer;if(R&&(T+=e=t.replaceVariables(R,{currentPage:o,totalPage:i,totalNumber:c})),f&&z&&(e=t.replaceVariables(z,{currentPage:o,totalPage:i,totalNumber:c,rangeStart:(o-1)*s+1,rangeEnd:Math.min(o*s,c)}),T+='<div class="'.concat(k,'-nav J-paginationjs-nav">').concat(e,"</div>")),(l||p||g)&&(T+='<div class="paginationjs-pages">',T+=x?'<ul class="'.concat(x,'">'):"<ul>",l&&(o<=1?D||(T+='<li class="'.concat(k,"-prev ").concat(P," ").concat(S,'"><a>').concat(v,"</a></li>")):T+='<li class="'.concat(k,"-prev J-paginationjs-previous ").concat(S,'" data-num="').concat(o-1,'" title="Previous page">').concat(r(v),"</li>")),p&&(T+=t.generatePageNumbersHTML(a)),g&&(o>=i?J||(T+='<li class="'.concat(k,"-next ").concat(P," ").concat(j,'"><a>').concat(y,"</a></li>")):T+='<li class="'.concat(k,"-next J-paginationjs-next ").concat(j,'" data-num="').concat(o+1,'" title="Next page">').concat(r(y),"</li>")),T+="</ul></div>"),d&&n.isArray(m)){-1===m.indexOf(s)&&(m.unshift(s),m.sort((function(a,e){return a-e})));for(var A=0;A<m.length;A++)w+='<option value="'.concat(m[A],'"').concat(m[A]===s?" selected":"",">").concat(m[A]," / page</option>");e=w+="</select>",O&&(e=t.replaceVariables(O,{length:w,total:c})),T+='<div class="paginationjs-size-changer">'.concat(e,"</div>")}return h&&L&&(e=t.replaceVariables(L,{currentPage:o,totalPage:i,totalNumber:c,input:C}),T+='<div class="'.concat(k,'-go-input">').concat(e,"</div>")),b&&E&&(e=t.replaceVariables(E,{currentPage:o,totalPage:i,totalNumber:c,button:H}),T+='<div class="'.concat(k,'-go-button">').concat(e,"</div>")),I&&(T+=e=t.replaceVariables(I,{currentPage:o,totalPage:i,totalNumber:c})),T},findTotalNumberFromRemoteResponse:function(a){this.model.totalNumber=u.totalNumberLocator(a)},go:function(a,e){var o=this,r=o.model;if(!o.disabled){var c=a;if((c=parseInt(c))&&!(c<1)){var s=u.pageSize,l=o.getTotalNumber(),g=o.getTotalPage();if(!(l>0&&c>g))if(o.isAsync){var p={},f=u.alias||{},d=f.pageSize?f.pageSize:"pageSize",m=f.pageNumber?f.pageNumber:"pageNumber";p[d]=s,p[m]=c;var h="function"==typeof u.ajax?u.ajax():u.ajax;h&&h.pageNumberStartWithZero&&(p[m]=c-1);var b={type:"get",cache:!1,data:{},contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"json",async:!0};t.extend(!0,b,h),t.extend(b.data,p),b.url=u.dataSource,b.success=function(a){try{o.model.originalResponse=a,o.isDynamicTotalNumber?o.findTotalNumberFromRemoteResponse(a):o.model.totalNumber=u.totalNumber,v(o.filterDataWithLocator(a))}catch(a){if("function"!=typeof u.onError)throw a;u.onError(a,"ajaxSuccessHandlerError")}},b.error=function(a,e,t){u.formatAjaxError&&u.formatAjaxError(a,e,t),o.enable()},o.disable(),u.ajaxFunction?u.ajaxFunction(b):t.ajax(b)}else v(o.getPagingData(c))}}function v(a){if(!1===o.callHook("beforePaging",c))return!1;if(r.direction=void 0===r.pageNumber?0:c>r.pageNumber?1:-1,r.pageNumber=c,o.render(),o.disabled&&o.isAsync&&o.enable(),i.data("pagination").model=r,u.formatResult){var s=t.extend(!0,[],a);n.isArray(a=u.formatResult(s))||(a=s)}i.data("pagination").currentPageData=a,o.doCallback(a,e),o.callHook("afterPaging",c),1==c?o.callHook("afterIsFirstPage"):c==o.getTotalPage()&&o.callHook("afterIsLastPage")}},doCallback:function(a,e){var t=this.model;"function"==typeof e?e(a,t):"function"==typeof u.callback&&u.callback(a,t)},destroy:function(){!1!==this.callHook("beforeDestroy")&&(this.model.el.remove(),i.off(),t("#paginationjs-style").remove(),this.callHook("afterDestroy"))},previous:function(a){this.go(this.model.pageNumber-1,a)},next:function(a){this.go(this.model.pageNumber+1,a)},disable:function(){var a=this,e=a.isAsync?"async":"sync";!1!==a.callHook("beforeDisable",e)&&(a.disabled=!0,a.model.disabled=!0,a.callHook("afterDisable",e))},enable:function(){var a=this,e=a.isAsync?"async":"sync";!1!==a.callHook("beforeEnable",e)&&(a.disabled=!1,a.model.disabled=!1,a.callHook("afterEnable",e))},refresh:function(a){this.go(this.model.pageNumber,a)},show:function(){this.model.el.is(":visible")||this.model.el.show()},hide:function(){this.model.el.is(":visible")&&this.model.el.hide()},replaceVariables:function(a,e){var t;for(var o in e){var n=e[o],i=new RegExp("<%=\\s*"+o+"\\s*%>","img");t=(t||a).replace(i,n)}return t},getPagingData:function(a){var e=u.pageSize,t=u.dataSource,o=this.getTotalNumber(),n=e*(a-1)+1,i=Math.min(a*e,o);return t.slice(n-1,i)},getTotalNumber:function(){return this.model.totalNumber||u.totalNumber||0},getTotalPage:function(){return Math.ceil(this.getTotalNumber()/u.pageSize)},getLocator:function(a){var e;return"string"==typeof a?e=a:"function"==typeof a?e=a():r('"locator" is incorrect. Expect string or function type.'),e},filterDataWithLocator:function(a){var e,o=this.getLocator(u.locator);if(n.isObject(a)){try{t.each(o.split("."),(function(t,o){e=(e||a)[o]}))}catch(a){}e?n.isArray(e)||r("dataSource."+o+" should be an Array."):r("dataSource."+o+" is undefined.")}return e||a},parseDataSource:function(a,e){var t=this;n.isObject(a)?e(u.dataSource=t.filterDataWithLocator(a)):n.isArray(a)?e(u.dataSource=a):"function"==typeof a?u.dataSource((function(a){n.isArray(a)||r('The parameter of "done" Function should be an Array.'),t.parseDataSource.call(t,a,e)})):"string"==typeof a?(/^https?|file:/.test(a)&&(u.ajaxDataType="jsonp"),e(a)):r("Unexpected dataSource type")},callHook:function(a){var o,n=i.data("pagination")||{},r=Array.prototype.slice.apply(arguments);return r.shift(),u[a]&&"function"==typeof u[a]&&!1===u[a].apply(e,r)&&(o=!1),n.hooks&&n.hooks[a]&&t.each(n.hooks[a],(function(a,t){!1===t.apply(e,r)&&(o=!1)})),!1!==o},observer:function(){var a=this,e=a.model.el;i.on(o+"go",(function(e,t,o){"string"==typeof t&&(t=parseInt(t.trim())),t&&("number"!=typeof t&&r('"pageNumber" is incorrect. (Number)'),a.go(t,o))})),e.on("click",".J-paginationjs-page",(function(e){var o=t(e.currentTarget),n=o.attr("data-num").trim();if(n&&!o.hasClass(u.disableClassName)&&!o.hasClass(u.activeClassName))return!1!==a.callHook("beforePageOnClick",e,n)&&(a.go(n),a.callHook("afterPageOnClick",e,n),!!u.pageLink&&void 0)})),e.on("click",".J-paginationjs-previous",(function(e){var o=t(e.currentTarget),n=o.attr("data-num").trim();if(n&&!o.hasClass(u.disableClassName))return!1!==a.callHook("beforePreviousOnClick",e,n)&&(a.go(n),a.callHook("afterPreviousOnClick",e,n),!!u.pageLink&&void 0)})),e.on("click",".J-paginationjs-next",(function(e){var o=t(e.currentTarget),n=o.attr("data-num").trim();if(n&&!o.hasClass(u.disableClassName))return!1!==a.callHook("beforeNextOnClick",e,n)&&(a.go(n),a.callHook("afterNextOnClick",e,n),!!u.pageLink&&void 0)})),e.on("click",".J-paginationjs-go-button",(function(n){var r=t(".J-paginationjs-go-pagenumber",e).val();if(!1===a.callHook("beforeGoButtonOnClick",n,r))return!1;i.trigger(o+"go",r),a.callHook("afterGoButtonOnClick",n,r)})),e.on("keyup",".J-paginationjs-go-pagenumber",(function(n){if(13===n.which){var r=t(n.currentTarget).val();if(!1===a.callHook("beforeGoInputOnEnter",n,r))return!1;i.trigger(o+"go",r),t(".J-paginationjs-go-pagenumber",e).focus(),a.callHook("afterGoInputOnEnter",n,r)}})),e.on("change",".J-paginationjs-size-select",(function(e){var o=t(e.currentTarget),n=parseInt(o.val()),i=a.model.pageNumber||u.pageNumber;if("number"==typeof n)return!1!==a.callHook("beforeSizeSelectorChange",e,n)&&(u.pageSize=n,a.model.pageSize=n,a.model.totalPage=a.getTotalPage(),i>a.model.totalPage&&(i=a.model.totalPage),a.go(i),a.callHook("afterSizeSelectorChange",e,n),!!u.pageLink&&void 0)})),i.on(o+"previous",(function(e,t){a.previous(t)})),i.on(o+"next",(function(e,t){a.next(t)})),i.on(o+"disable",(function(){a.disable()})),i.on(o+"enable",(function(){a.enable()})),i.on(o+"refresh",(function(e,t){a.refresh(t)})),i.on(o+"show",(function(){a.show()})),i.on(o+"hide",(function(){a.hide()})),i.on(o+"destroy",(function(){a.destroy()}));var n=Math.max(a.getTotalPage(),1),c=u.pageNumber;a.isDynamicTotalNumber&&u.resetPageNumberOnInit&&(c=1),u.triggerPagingOnInit&&i.trigger(o+"go",Math.min(c,n))}};if(i.data("pagination")&&!0===i.data("pagination").initialized){if(l(a))return i.trigger.call(this,o+"go",a,arguments[1]),this;if("string"==typeof a){var p=Array.prototype.slice.apply(arguments);switch(p[0]=o+p[0],a){case"previous":case"next":case"go":case"disable":case"enable":case"refresh":case"show":case"hide":case"destroy":i.trigger.apply(this,p);break;case"getSelectedPageNum":case"getCurrentPageNum":return i.data("pagination").model?i.data("pagination").model.pageNumber:i.data("pagination").attributes.pageNumber;case"getTotalPage":return Math.ceil(i.data("pagination").model.totalNumber/i.data("pagination").model.pageSize);case"getSelectedPageData":case"getCurrentPageData":return i.data("pagination").currentPageData;case"isDisabled":return!0===i.data("pagination").model.disabled;default:r("Unknown action: "+a)}return this}s(i)}else n.isObject(a)||r("Illegal options");return c(u),g.initialize(),this},t.fn.pagination.defaults={totalNumber:0,pageNumber:1,pageSize:10,pageRange:2,showPrevious:!0,showNext:!0,showPageNumbers:!0,showNavigator:!1,showGoInput:!1,showGoButton:!1,showSizeChanger:!1,sizeChangerOptions:[10,20,50,100],pageLink:"",prevText:"&lsaquo;",nextText:"&rsaquo;",ellipsisText:"...",goButtonText:"Go",classPrefix:"paginationjs",activeClassName:"active",disableClassName:"disabled",formatNavigator:"Total <%= totalNumber %> items",formatGoInput:"<%= input %>",formatGoButton:"<%= button %>",position:"bottom",autoHidePrevious:!1,autoHideNext:!1,triggerPagingOnInit:!0,resetPageNumberOnInit:!0,hideOnlyOnePage:!1,hideFirstOnEllipsisShow:!1,hideLastOnEllipsisShow:!1,callback:function(){}},t.fn.addHook=function(a,e){arguments.length<2&&r("Expect 2 arguments at least."),"function"!=typeof e&&r("callback should be a function.");var o=t(this),n=o.data("pagination");n||(o.data("pagination",{}),n=o.data("pagination")),!n.hooks&&(n.hooks={}),n.hooks[a]=n.hooks[a]||[],n.hooks[a].push(e)},t.pagination=function(a,e){var o;if(arguments.length<2&&r("Requires two parameters."),(o="string"!=typeof a&&a instanceof jQuery?a:t(a)).length)return o.pagination(e),o};var n={};function r(a){throw new Error("Pagination: "+a)}function c(a){a.dataSource||r('"dataSource" is required.'),"string"==typeof a.dataSource?void 0===a.totalNumberLocator?void 0===a.totalNumber?r('"totalNumber" is required.'):l(a.totalNumber)||r('"totalNumber" is incorrect. Expect numberic type'):"function"!=typeof a.totalNumberLocator&&r('"totalNumberLocator" should be a Function.'):n.isObject(a.dataSource)&&(void 0===a.locator?r('"dataSource" is an Object, please specify a "locator".'):"string"!=typeof a.locator&&"function"!=typeof a.locator&&r(a.locator+" is incorrect. Expect string or function type")),void 0!==a.formatResult&&"function"!=typeof a.formatResult&&r('"formatResult" should be a Function.'),void 0!==a.onError&&"function"!=typeof a.onError&&r('"onError" should be a Function.')}function s(a){t.each(["go","previous","next","disable","enable","refresh","show","hide","destroy"],(function(e,t){a.off(o+t)})),a.data("pagination",{}),t(".paginationjs",a).remove()}function l(a){return!isNaN(parseFloat(a))&&isFinite(a)}t.each(["Object","Array","String"],(function(e,t){n["is"+t]=function(e){return function(e,t){return("object"==(t=void 0===e?"undefined":a(i)(e))?null==e?"null":Object.prototype.toString.call(e).slice(8,-1):t).toLowerCase()}(e)===t.toLowerCase()}})),"function"==typeof define&&define.amd&&define((function(){return t}))}(void 0,window.jQuery);var r=n("7CFNy"),c=document.querySelector(".table-body"),s={dataSource:function(){for(var a=[],e=0;e<r.data.length;e++)a.push(e);return a}(),pageSize:8,callback:function(a,e){var t=[];r.data.map((function(e,o){var n=e.customerName,i=e.company,r=e.phoneNumber,s=e.email,l=e.country,u=e.status;a.includes(o)&&(t.push("\n          <tr>\n            <th>".concat(n,"</th>\n            <th>").concat(i,"</th>\n            <th>").concat(r,"</th>\n            <th>").concat(s,"</th>\n            <th>").concat(l,"</th>\n            <th>").concat(u,"</th>\n          </tr>\n        ")),c.innerHTML=t.join(""))}))}};$("#pagination-container").pagination(s)}();
//# sourceMappingURL=index.0d8a0099.js.map
