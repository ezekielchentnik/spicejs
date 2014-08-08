(function(e){"use strict";e.controller=function(){var e={};function n(n,r){e[n]=r}n.all=e;return n}();e.control=function(){var n=e.controller.all;function r(e,r,u){t(n[e],r,u);return r}function t(e,n,r){if(!e||u(e,n))return;e._elements.push(n);e(n,r)}function u(e,n){e._elements=e._elements||[];return e._elements.indexOf(n)!==-1}return r}();e.observable=function(e){var n={},r=[].slice;e.on=function(r,t){if(typeof t==="function"){r.replace(/\S+/g,function(e,r){(n[e]=n[e]||[]).push(t);t.typed=r>0})}return e};e.off=function(r,t){if(!r||r==="*"){n={}}else if(t){var u=n[r];for(var o=0,c;c=u&&u[o];++o){if(c===t)u.splice(o,1)}}else{r.replace(/\S+/g,function(e){n[e]=[]})}return e};e.one=function(n,r){if(r)r.one=true;return e.on(n,r)};e.trigger=function(t){var u=r.call(arguments,1),o=n[t]||[];for(var c=0,i;i=o[c];++c){if(!i.busy){i.busy=true;i.apply(e,i.typed?[t].concat(u):u);if(i.one){o.splice(c,1);c--}i.busy=false}}return e};return e};e.render=function(){var e={},n={"\\":"\\\\","\n":"\\n","\r":"\\r","'":"\\'"},r={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};function t(r,t,o){r=r||"";o=o===true?u:o;return(e[r]=e[r]||new Function("_","e","return '"+r.replace(/[\\\n\r']/g,function(e){return n[e]}).replace(/{\s*([\w\.]+)\s*}/g,"' + (e?e(_.$1,'$1'):_.$1||(_.$1==null?'':_.$1)) + '")+"'"))(t,o)}function u(e,n){return e==null?"":(e+"").replace(/[&\"<>]/g,function(e){return r[e]})}return t}();e.route=function(){var n=[],r;function t(e,n){var r;if(typeof e==="function"){t("*",e)}else if(n){u(e,n)}else if(typeof e==="object"){for(r in e)e.hasOwnProperty(r)&&u(r,e[r])}else o(e);return t}function u(e,r){var t=["path"],u,o;u="^#?!?"+e.replace(/[\/\=\?\$\^]/g,"\\$&").replace(/\*/g,".*").replace(/\{(\w+)\}/g,function(e,n){t.push(n);return"(\\w+)"})+"$";n.push({regex:new RegExp(u),keys:t,callback:r})}function o(e,u){var o=n.length,i;if(r===e)return;for(i=0;i<o;i++)c(e,n[i]);if(u===false)return;r=e;t.trigger("visit",e)}function c(e,n){var r=e.match(n.regex),t=n.callback;if(!r||!t)return;typeof t==="function"?t(i(e,n.keys,r)):o(t,false)}function i(e,n,r){var t={},u=n.length,o;for(o=0;o<u;o++)t[n[o]]=r[o];return t}function f(e){switch(e[0]){case"?":return r.replace(/\?.*/g,"")+e;case"&":return r.replace(/\&.*/g,"")+e;case"#":return r.replace(/\#.*/g,"")+e}}t.clear=function(){n=[];t.trigger("clear");return t};t.load=function(){t.trigger("load");return t};t.update=function(e,n){e=f(e);n===false?t.trigger("visit",e):o(e)};t.map=n;return e.observable(t)}()})(typeof window!=="undefined"?window.E={}:exports);