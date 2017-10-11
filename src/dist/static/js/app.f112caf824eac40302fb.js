webpackJsonp([1],{"20Zl":function(t,s){},"56EM":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"showcase-page"},[t._m(0),t._v(" "),e("hr"),t._v(" "),e("h2",[t._v("Showcase: See it in action")]),t._v(" "),t._m(1),t._v(" "),e("section",{staticClass:"showcase"},[e("section",{staticClass:"showcase__entry -try-live"},[e("h3",{staticClass:"showcase__header"},[t._v("Try it live")]),t._v(" "),t._m(2),t._v(" "),e("section",{staticClass:"showcase__actions"},[e("ul",{staticClass:"showcase__actions-item msg-buttons"},[e("li",{staticClass:"msg-buttons__list-item"},[e("button",{staticClass:"msg-buttons__btn -success",attrs:{type:"button"},on:{click:function(s){t.showSuccessMsg()}}},[t._v("Success")])]),t._v(" "),e("li",{staticClass:"msg-buttons__list-item"},[e("button",{staticClass:"msg-buttons__btn -info",attrs:{type:"button"},on:{click:function(s){t.showInfoMsg()}}},[t._v("Info")])]),t._v(" "),e("li",{staticClass:"msg-buttons__list-item"},[e("button",{staticClass:"msg-buttons__btn -warn",attrs:{type:"button"},on:{click:function(s){t.showWarnMsg()}}},[t._v("Warning")])]),t._v(" "),e("li",{staticClass:"msg-buttons__list-item"},[e("button",{staticClass:"msg-buttons__btn -error",attrs:{type:"button"},on:{click:function(s){t.showErrorMsg()}}},[t._v("Error")])])]),t._v(" "),e("ul",{staticClass:"showcase__actions-item showcase-lib"},t._l(t.libs,function(s,i){return e("li",{staticClass:"showcase-lib__items",on:{change:function(s){t.setCurrentLib(i)}}},[e("label",[e("input",{attrs:{type:"radio",name:"lib"},domProps:{checked:t.currentLib===s,value:i}}),t._v(" "),e("span",{domProps:{textContent:t._s(s)}}),t._v(" "),e("span",{staticClass:"showcase-lib__third-party-home-ling"},[e("a",{attrs:{href:t.ExampleSetup[i].home,title:"go to "+s+" home",target:"_blank"}},[e("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])])])])}))]),t._v(" "),t._m(3)]),t._v(" "),e("section",{staticClass:"showcase__entry -setup"},[e("h3",{staticClass:"showcase__header"},[t._v("Config VueNotifications")]),t._v(" "),e("div",{staticClass:"code-samples__sample -func"},[e("pre",{attrs:{id:"toast_func"}},[t._v("          "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.ExampleSetup[t.currentLib].code)}}),t._v("\n        ")])])]),t._v(" "),e("section",{staticClass:"showcase__entry -definition"},[e("h3",{staticClass:"showcase__header"},[t._v("Define your notifications")]),t._v(" "),e("pre",[t._v("        "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.ExampleConfig.config)}}),t._v("\n      ")])])]),t._v(" "),e("hr"),t._v(" "),e("section",{staticClass:"getting-started"},[e("h1",[t._v("Getting started")]),t._v(" "),e("ol",[t._m(4),t._v(" "),e("li",[e("h3",[t._v("Setup & config")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("It's gonna be something like this:")]),t._v(" "),e("pre",[t._v("          "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.ExampleSetup.miniToastr.code)}}),t._v("\n        ")])]),t._v(" "),e("li",[e("h3",[t._v("Add actual notifications to any component:")]),t._v(" "),e("pre",[t._v("          "),e("code",{staticClass:"javascript",domProps:{textContent:t._s(t.ExampleConfig.config)}}),t._v("\n        ")]),t._v(" "),t._m(6),t._v(" "),t._m(7)])])]),t._v(" "),e("hr"),t._v(" "),t._m(8)])},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"overview"},[i("img",{attrs:{src:e("7Otq")}}),t._v(" "),i("h2",[i("a",{attrs:{href:"https://vuejs.org"}},[t._v("vue.js")]),t._v(" agnostic library for non-blocking notifications")]),t._v(" "),i("p",[i("span",{staticClass:"highlighted-text"},[t._v("VueNotifications")]),t._v(" connects your app with notification UI library. "),i("br"),t._v("\n      That's also means you can have any look and feel of notifications you want to! "),i("br"),t._v("\n      And it would be easy to replace it =)\n    ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("span",[t._v("You have to do 3 things")]),t._v(" "),e("ol",[e("li",[t._v("Config "),e("span",{staticClass:"highlighted-text"},[t._v("VueNotifications")]),t._v(" to work with third-party lib you want (you may\n        try this one: "),e("a",{attrs:{href:"https://github.com/se-panfilov/mini-toastr"}},[t._v("mini-toastr")]),t._v(")\n      ")]),t._v(" "),e("li",[t._v("Add notifications to any component at your choice")]),t._v(" "),e("li",[t._v("Enjoy!")])]),t._v(" "),e("span",[t._v("Examples below")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("We have 4 predefined types of messages:\n        "),e("span",{staticClass:"highlighted-text"},[t._v("error")]),t._v(",\n        "),e("span",{staticClass:"highlighted-text"},[t._v("success")]),t._v(",\n        "),e("span",{staticClass:"highlighted-text"},[t._v("warn")]),t._v(" and\n        "),e("span",{staticClass:"highlighted-text"},[t._v("info")]),t._v(",\n        but you can specify your owns")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("You can easily replace any "),e("span",{staticClass:"highlighted-text"},[t._v("UI third-party")]),t._v(" that draws notifications for\n        you. And here you can switch between\n        any of them easily.\n        "),e("br"),e("br"),t._v(" "),e("strong",[t._v("P.S.")]),t._v(" Pay attention: Initial config will be changed."),e("br"),t._v("\n        But Notification definition will be the same.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("h3",[t._v("Install")]),t._v(" "),e("pre",[t._v("          "),e("code",{staticClass:"shell"},[t._v("npm i vue-notifications --save")]),t._v("\n        ")]),t._v(" "),e("p",[t._v("check the documentation for other options:\n          "),e("a",{attrs:{href:"https://se-panfilov.github.io/vue-notifications/docs/html/installation.html"}},[t._v("Installation")])]),t._v(" "),e("p",[t._v("\n          And install UI third-party library, for example "),e("a",{attrs:{href:"https://github.com/se-panfilov/mini-toastr"}},[t._v("miniToastr")]),t._v("\n          ("),e("span",{staticClass:"highlighted-text"},[t._v("npm i mini-toastr --save")]),t._v(").\n        ")]),t._v(" "),e("p",[t._v("But you are free to use any other, like the libs above (VueToasted, iziToast, etc).")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v('Check the one of examples above (in "Showcase" section), or check the docs:\n          '),e("a",{attrs:{href:"https://se-panfilov.github.io/vue-notifications/docs/html/getting-started.html"}},[t._v("Getting Started")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Now you can call any of this configs like a common vue method: via "),e("span",{staticClass:"highlighted-text"},[t._v("this")]),t._v(", like\n          "),e("span",{staticClass:"highlighted-text"},[t._v("this.showSuccessMsg()")]),t._v(", "),e("span",{staticClass:"highlighted-text"},[t._v("this.showInfoMsg()")]),t._v("\n          and etc.\n          Don't forget that you can override them, like "),e("span",{staticClass:"highlighted-text"},[t._v("this.showWarnMsg({message:\n            'Brand new message'})")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Check the docs for more info: "),e("a",{attrs:{href:"https://se-panfilov.github.io/vue-notifications/docs/html/usage.html"}},[t._v("Usage")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"misc"},[e("a",{staticClass:"misc__item",attrs:{href:"https://github.com/se-panfilov/vue-notifications"}},[e("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),t._v("\n      Source code\n    ")]),t._v(" |\n    "),e("a",{staticClass:"misc__item",attrs:{href:"https://se-panfilov.github.io/vue-notifications/docs/html/index.html"}},[e("i",{staticClass:"fa fa-book",attrs:{"aria-hidden":"true"}}),t._v("\n      Docs\n    ")]),t._v(" |\n    "),e("a",{staticClass:"misc__item",attrs:{href:"https://github.com/se-panfilov/vue-notifications/tree/master/examples"}},[e("i",{staticClass:"fa fa-free-code-camp",attrs:{"aria-hidden":"true"}}),t._v("\n      Examples\n    ")]),t._v(" |\n    "),e("a",{staticClass:"misc__item",attrs:{href:"https://github.com/se-panfilov/vue-notifications/blob/master/LICENSE"}},[e("i",{staticClass:"fa fa-balance-scale",attrs:{"aria-hidden":"true"}}),t._v("\n      MIT Licence\n    ")]),t._v(" "),e("br"),t._v(" "),e("a",{staticClass:"misc__item",attrs:{href:"https://github.com/se-panfilov/vue-notifications/releases"}},[e("i",{staticClass:"fa fa-rocket",attrs:{"aria-hidden":"true"}}),t._v("\n      Release notes\n    ")]),t._v(" |\n    "),e("a",{staticClass:"misc__item",attrs:{href:"https://se-panfilov.github.io/vue-notifications/docs/html/browsers-support.html"}},[e("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}}),t._v("\n      Browsers support\n    ")]),t._v(" |\n    "),e("a",{staticClass:"misc__item",attrs:{href:"https://se-panfilov.github.io/vue-notifications/docs/html/vuejs-versions-support.html"}},[t._v("Vue.js versions\n      support")]),t._v(" |\n    "),e("a",{staticClass:"misc__item",attrs:{href:"https://github.com/se-panfilov/vue-notifications/issues"}},[e("i",{staticClass:"fa fa-bolt",attrs:{"aria-hidden":"true"}}),t._v("\n      Issues\n    ")]),t._v(" "),e("br"),t._v("\n    Author: "),e("a",{attrs:{href:"https://se-panfilov.github.io/"}},[e("i",{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}}),t._v("\n    Sergei Panfilov")]),t._v(" |\n    Email: "),e("a",{attrs:{href:"mailto:se-panfilov@ya.ru"}},[e("i",{staticClass:"fa fa-envelope-o",attrs:{"aria-hidden":"true"}}),t._v(" se-panfilov@ya.ru\n  ")])])}],a={render:i,staticRenderFns:n};s.a=a},"7Otq":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},ETpy:function(t,s,e){"use strict";var i,n=e("bOdI"),a=e.n(n),o=e("7+uW"),r=e("GB2M"),c=e.n(r),u=e("70Rd"),l=e.n(u),h=e("IZDm"),f=e.n(h),m=e("tx0o"),p=(e.n(m),e("KZST")),v=e.n(p),g=e("YMwn"),d=e.n(g),y=e("UV/M"),b=e.n(y),w=e("8aq0"),_=e.n(w),C=e("IZMb"),V=e.n(C),I=e("7t+N"),N=(e.n(I),e("vQJi")),E=e.n(N),k=e("OQhB"),x=(e.n(k),e("YxSy")),R=e.n(x),W=e("20Zl"),T=(e.n(W),e("y/MS")),Z=e.n(T),M=e("hsNo"),z=(e.n(M),e("thjQ")),Q=e.n(z);l.a.registerLanguage("javascript",f.a),l.a.initHighlightingOnLoad(),o.default.config.productionTip=!1,_.a.init();var B={miniToastr:"miniToastr",VueToasted:"VueToasted",VueEasyToast:"VueEasyToast",toastr:"toastr",iziToast:"iziToast",Noty:"Noty",swal:"swal"},G=(i={},a()(i,B.miniToastr,function(t){var s=t.title,e=t.message,i=t.type,n=t.timeout,a=t.cb;return _.a[i](e,s,n,a)}),a()(i,B.VueToasted,function(t){var s=(t.title,t.message),e=t.type,i=t.timeout;t.cb;return e===c.a.types.warn&&(e="show"),o.default.toasted[e](s,{duration:i})}),a()(i,B.VueEasyToast,function(t){var s=(t.title,t.message),e=t.type,i=t.timeout,n=(t.cb,"et-info");return e===c.a.types.warn?n="et-warn":e===c.a.types.error&&(n="et-alert"),o.default.toast(s,{duration:i,className:n})}),a()(i,B.toastr,function(t){var s=t.title,e=t.message,i=t.type,n=t.timeout;t.cb;return i===c.a.types.warn&&(i="warning"),E.a[i](e,s,{timeOut:n})}),a()(i,B.iziToast,function(t){var s=t.title,e=t.message,i=t.type,n=t.timeout;t.cb;return i===c.a.types.warn&&(i="warning"),R.a[i]({title:s,message:e,timeout:n})}),a()(i,B.Noty,function(t){var s=(t.title,t.message),e=t.type,i=t.timeout;t.cb;return e===c.a.types.warn&&(e="warning"),new Z.a({text:s,timeout:i,type:e}).show()}),a()(i,B.swal,function(t){var s=t.title,e=t.message,i=t.type;t.timeout,t.cb;return i===c.a.types.warn&&(i="warning"),Q()(s,e,i)}),i);o.default.use(b.a),o.default.use(V.a),s.a={name:"showcase",data:function(){return{ExampleSetup:v.a,ExampleConfig:d.a,libs:B,currentLib:B.miniToastr,checked:""}},notifications:{showSuccessMsg:{type:c.a.types.success,title:"Hello there",message:"That's the success!"},showInfoMsg:{type:c.a.types.info,title:"Hey you",message:"Here is some info for you"},showWarnMsg:{type:c.a.types.warn,title:"Wow, man",message:"That's the kind of warning"},showErrorMsg:{type:c.a.types.error,title:"Wow-wow",message:"That's the error"}},methods:{setCurrentLib:function(t){this.currentLib=t,this.checked=t;var s={success:G[this.currentLib],error:G[this.currentLib],info:G[this.currentLib],warn:G[this.currentLib]};l.a.highlightBlock(document.getElementById("toast_func")),c.a.setPluginOptions(s)}}}},KZST:function(t,s){t.exports={miniToastr:{code:"import VueNotifications from 'vue-notifications'\nimport miniToastr from 'mini-toastr'// https://github.com/se-panfilov/mini-toastr\n\nminiToastr.init()\n\nfunction toast ({title, message, type, timeout, cb}) {\n  return miniToastr[type](message, title, timeout, cb)\n}\n\nconst options = {\n  success: toast,\n  error: toast,\n  info: toast,\n  warn: toast\n}\n\nVue.use(VueNotifications, options)",home:"https://github.com/se-panfilov/mini-toastr"},VueToasted:{code:"import VueNotifications from 'vue-notifications'\nimport VueToasted from 'vue-toasted'// https://github.com/shakee93/vue-toasted\n\nfunction toast ({title, message, type, timeout, cb}) {\n  if (type === VueNotifications.types.warn) type = 'show'\n  return Vue.toasted[type](message, {duration: timeout})\n}\n\nVue.use(VueToasted)\n\nconst options = {\n  success: toast,\n  error: toast,\n  info: toast,\n  warn: toast\n}\n\nVue.use(VueNotifications, options)",home:"https://github.com/shakee93/vue-toasted"},VueEasyToast:{code:"import VueNotifications from 'vue-notifications'\nimport VueEasyToast from 'vue-easy-toast' // https://github.com/noru/vue-easy-toast\n\nfunction toast ({title, message, type, timeout, cb}) {\n  let className = 'et-info'\n  if (type === VueNotifications.types.warn) className = 'et-warn'\n  else if (type === VueNotifications.types.error) className = 'et-alert'\n\n  return Vue.toast(message, {duration: timeout, className})\n}\n\nVue.use(VueEasyToast)\n\nconst options = {\n  success: toast,\n  error: toast,\n  info: toast,\n  warn: toast\n}\n\nVue.use(VueNotifications, options)",home:"https://github.com/noru/vue-easy-toast"},toastr:{code:"import VueNotifications from 'vue-notifications'\nimport 'jquery'\nimport toastr from 'toastr'// https://github.com/CodeSeven/toastr\nimport 'toastr/build/toastr.min.css'\n\nfunction toast ({title, message, type, timeout, cb}) {\n  if (type === VueNotifications.types.warn) type = 'warning'\n  return toastr[type](message, title, {timeOut: timeout})\n}\n\nconst options = {\n  success: toast,\n  error: toast,\n  info: toast,\n  warn: toast\n}\n\nVue.use(VueNotifications, options)",home:"https://github.com/CodeSeven/toastr"},iziToast:{code:"import VueNotifications from 'vue-notifications'\nimport iziToast from 'izitoast'// https://github.com/dolce/iziToast\nimport 'izitoast/dist/css/iziToast.min.css'\n\nfunction toast ({title, message, type, timeout, cb}) {\n  if (type === VueNotifications.types.warn) type = 'warning'\n  return iziToast[type]({title, message, timeout})\n}\n\nconst options = {\n  success: toast,\n  error: toast,\n  info: toast,\n  warn: toast\n}\n\nVue.use(VueNotifications, options)",home:"https://github.com/dolce/iziToast"},Noty:{code:"import VueNotifications from 'vue-notifications'\nimport Noty from 'noty'// https://github.com/needim/noty\nimport 'noty/lib/noty.css'\n\nfunction toast ({title, message, type, timeout, cb}) {\n  if (type === VueNotifications.types.warn) type = 'warning'\n  return new Noty({text: message, timeout, type}).show()\n}\n\nconst options = {\n  success: toast,\n  error: toast,\n  info: toast,\n  warn: toast\n}\n\nVue.use(VueNotifications, options)",home:"https://github.com/needim/noty"},swal:{code:"import VueNotifications from 'vue-notifications'\nimport swal from 'sweetalert'// https://github.com/t4t5/sweetalert\n\nfunction toast ({title, message, type, timeout, cb}) {\n  if (type === VueNotifications.types.warn) type = 'warning'\n  return swal(title, message, type)\n}\n\nconst options = {\n  success: toast,\n  error: toast,\n  info: toast,\n  warn: toast\n}\n\nVue.use(VueNotifications, options)",home:"https://github.com/t4t5/sweetalert"}}},M93x:function(t,s,e){"use strict";function i(t){e("XYUs")}var n=e("xJD8"),a=e("X8QV"),o=e("VU/8"),r=i,c=o(n.a,a.a,r,null,null);s.a=c.exports},NHnr:function(t,s,e){"use strict";function i(t){var s=t.title,e=t.message,i=t.type,n=t.timeout,a=t.cb,o=t.debugMsg;return o&&console[i](o),l.a[i](e,s,n,a)}Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),a=e("M93x"),o=e("YaEn"),r=e("GB2M"),c=e.n(r),u=e("8aq0"),l=e.n(u);n.default.config.productionTip=!1,l.a.init();var h={success:i,error:i,info:i,warn:i};n.default.use(c.a,h),new n.default({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})},OQhB:function(t,s){},Ojsu:function(t,s,e){"use strict";function i(t){e("VgZo")}var n=e("ETpy"),a=e("56EM"),o=e("VU/8"),r=i,c=o(n.a,a.a,r,"data-v-1691a292",null);s.a=c.exports},VgZo:function(t,s){},X8QV:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("header-menu"),t._v(" "),e("router-view")],1)},n=[],a={render:i,staticRenderFns:n};s.a=a},XYUs:function(t,s){},YMwn:function(t,s){t.exports={config:"export default {\n  name: 'MyComponent',\n  data () {\n    return {}\n  },\n  notifications: {\n    showSuccessMsg: {\n      type: VueNotifications.types.success,\n      title: 'Hello there',\n      message: 'That\\'s the success!'\n    },\n    showInfoMsg: {\n      type: VueNotifications.types.info,\n      title: 'Hey you',\n      message: 'Here is some info for you'\n    },\n    showWarnMsg: {\n      type: VueNotifications.types.warn,\n      title: 'Wow, man',\n      message: 'That\\'s the kind of warning'\n    },\n    showErrorMsg: {\n      type: VueNotifications.types.error,\n      title: 'Wow-wow',\n      message: 'That\\'s the error'\n    }\n  }\n}"}},YaEn:function(t,s,e){"use strict";var i=e("7+uW"),n=e("/ocq"),a=e("Ojsu");i.default.use(n.a),s.a=new n.a({routes:[{path:"/",name:"showcase",component:a.a}]})},hsNo:function(t,s){},l8Yj:function(t,s,e){"use strict";s.a={name:"header",data:function(){return{}}}},nhXY:function(t,s,e){"use strict";function i(t){e("oE6O")}var n=e("l8Yj"),a=e("tL8P"),o=e("VU/8"),r=i,c=o(n.a,a.a,r,"data-v-46f2b5d1",null);s.a=c.exports},oE6O:function(t,s){},tL8P:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"header"},[i("a",{staticClass:"header__logo",attrs:{href:"https://se-panfilov.github.io/vue-notifications/"}},[i("img",{attrs:{src:e("7Otq")}}),t._v(" "),i("span",[t._v("VueNotifications")])]),t._v(" "),i("ul",{staticClass:"nav"},[i("li",{staticClass:"nav__item"},[i("a",{attrs:{href:"https://se-panfilov.github.io/vue-notifications/docs/html/index.html",title:"Docs"}},[i("i",{staticClass:"fa fa-book",attrs:{"aria-hidden":"true"}}),t._v("\n        Documentation\n      ")])]),t._v(" "),i("li",{staticClass:"nav__item"},[i("a",{attrs:{href:"https://github.com/se-panfilov/vue-notifications",title:"source code"}},[i("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),t._v("\n        GitHub\n      ")])])])])}],a={render:i,staticRenderFns:n};s.a=a},tx0o:function(t,s){},xJD8:function(t,s,e){"use strict";var i=e("nhXY");s.a={name:"app",components:{HeaderMenu:i.a}}}},["NHnr"]);
//# sourceMappingURL=app.f112caf824eac40302fb.js.map