"use strict";(self.webpackChunkwebpack5_app=self.webpackChunkwebpack5_app||[]).push([[179],{5667:function(e,t,r){var n=r(7294),a=r(9060),o=r(1570),u=(r(1249),r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(8309),r(1038),r(4916),r(1382)),c=r(1466),i=r(8889),l=(r(8674),r(5666),r(1532),r(72),r(9137),r(1957),r(6306),r(103),r(4592),r(8276),r(5082),r(2813),r(8222),r(8563),r(336),r(7512),r(9600),r(9601),r(9669)),s=r.n(l),f=s().CancelToken,p=new Map;function m(e){var t=e.url,r=e.method,n=e.params,a=e.data;return"string"==typeof a&&(a=JSON.parse(a)),[t,r,JSON.stringify(n),JSON.stringify(a)].join("&")}function y(e){var t=m(e);p.has(t)&&(p.get(t)(t),p.delete(t))}var v=function(e,t){var r=Object.assign({repeat_request_cancel:!0},t),n=s().create({baseURL:"",timeout:3e4});return n.interceptors.request.use((function(e){return y(e),r.repeat_request_cancel&&function(e){var t=m(e);e.cancelToken=e.cancelToken||new f((function(e){p.has(t)||p.set(t,e)}))}(e),e}),(function(e){return Promise.reject(e)})),n.interceptors.response.use((function(e){return y(e.config),e.data}),(function(e){return s().isCancel(e)&&console.warn("取消重复请求了",e.message),e.config&&y(e.config),Promise.reject(e)})),n(e)};function h(e,t,r,n,a,o,u){try{var c=e[o](u),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,a)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],u=!0,c=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{u||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],u=!0,c=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{u||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e){var t=e.data,r=e.loading,a=e.Error;return n.createElement("div",null,n.createElement(u.Z,{tip:"加载中...",spinning:r},a&&n.createElement("p",null,"出错了!"),n.createElement("ul",null,t&&t.map((function(e,t){return n.createElement("li",{key:e.objectID},n.createElement("a",{href:e.url},t+1,"：",e.title))})))))}var S=function(){var e=b((0,n.useState)("react"),2),t=e[0],r=e[1],a=b(function(){var e=d((0,n.useState)([]),2),t=e[0],r=e[1],a=d((0,n.useState)(!0),2),o=a[0],u=a[1],c=d((0,n.useState)("https://hn.algolia.com/api/v1/search?query=react"),2),i=c[0],l=c[1],s=d((0,n.useState)(!1),2),f=s[0],p=s[1];return(0,n.useEffect)((function(){var e=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!1),u(!0),e.prev=2,e.next=5,v(i);case 5:t=e.sent,r(t.hits),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.warn(e.t0),p(!0);case 13:u(!1);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){h(o,n,a,u,c,"next",e)}function c(e){h(o,n,a,u,c,"throw",e)}u(void 0)}))});return function(){return t.apply(this,arguments)}}();e()}),[i]),[{data:t,loading:o,Error:f},l]}(),2),o=a[0],u=o.data,l=o.loading,s=o.Error,f=a[1];return n.createElement("div",null,n.createElement(c.Z,{value:t,style:{width:240},onChange:function(e){return r(e.target.value)}}),n.createElement(i.Z,{style:{marginLeft:20},type:"primary",onClick:function(){return f("https://hn.algolia.com/api/v1/search?query=".concat(t))}},"Search"),n.createElement(E,{data:u,loading:l,Error:s}))},k=(0,o.w)((function(e){return n.createElement("div",null,n.createElement(S,null))}));r(7660),a.render(n.createElement(k,null),document.getElementById("app"))}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[216],(function(){return t(3658),t(5667)})),e.O()}]);