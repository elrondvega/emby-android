define(["browser"],function(e){function t(){return e.tv?!1:e.safari?!1:!0}function n(e){if(!e.cancel){m();var t=E,n=-1==t?null:q[t],r=t+1;r>=P&&(r=0);var a=o(e),u=a.elem,l="string"==typeof u?null:u.getAttribute("data-require");l=l?l.split(","):[];var d=-1!=e.url.toLowerCase().indexOf("/configurationpage?");return d&&(l.push("jqmpopup"),l.push("jqmcollapsible"),l.push("jqmcheckbox"),l.push("legacy/dashboard"),l.push("legacy/selectmenu"),l.push("jqmcontrolgroup"),l.push("jqmlistview")),(d||u.classList&&u.classList.contains("type-interior"))&&(l.push("scripts/notifications"),l.push("css!css/notifications.css"),l.push("dashboardcss")),new Promise(function(o){require(l,function(){var d=q[r];d&&w(d);var m=u;"string"==typeof m&&(m=document.createElement("div"),m.innerHTML=u),m.classList.add("mainAnimatedPage"),d?a.hasScript&&window.$?(m=$(m).appendTo(b)[0],b.removeChild(d)):b.replaceChild(m,d):a.hasScript&&window.$?m=$(m).appendTo(b)[0]:b.appendChild(m),"string"!=typeof u&&i(l,m),e.type&&m.setAttribute("data-type",e.type);var p=m;q[r]=m,y&&y(m,!1,e),s(q,r,t),f(p,n,e.transition,e.isBack).then(function(){E=r,L[r]=e.url,!e.cancel&&n&&c(q,r),document.dispatchEvent(new CustomEvent("scroll",{})),window.$&&($.mobile=$.mobile||{},$.mobile.activePage=m),o(m)})})})}}function i(e,t){for(var n=!1,i=0,r=e.length;r>i;i++)if(0==e[i].indexOf("jqm")){n=!0;break}n&&window.$&&$(t).trigger("create")}function r(e,t,n){return e.split(t).join(n)}function a(e,t){t&&(e=r(e,"<!--<script","<script"),e=r(e,"</script>-->","</script>"));var n=document.createElement("div");return n.innerHTML=e,n.querySelector('div[data-role="page"]')}function o(e){if(-1==e.view.indexOf('data-role="page"'))return e.view;var t=-1!=e.view.indexOf("<script"),n=a(e.view,t);return t&&(t=null!=n.querySelector("script")),{elem:n,hasScript:t}}function s(e,t,n){for(var i=0,r=e.length;r>i;i++)t==i||n==i||e[i].classList.add("hide")}function c(e,t){for(var n=0,i=e.length;i>n;n++)t==n||e[n].classList.add("hide")}function f(e,n,i,r){if(i=i||"fade",t()&&n&&e.animate){if("slide"==i)return u(e,n,i,r);if("slidedown"==i)return l(e,n,i,r);if("fade"==i)return d(e,n,i,r)}return Promise.resolve()}function u(t,n,i,r){return new Promise(function(i){var a={duration:450,iterations:1,easing:"ease-out"};e.chrome||(a.fill="both");var o=[];if(n){var s=r?"100%":"-100%";o.push(n.animate([{transform:"none",offset:0},{transform:"translate3d("+s+", 0, 0)",offset:1}],a))}var c=r?"-100%":"100%";o.push(t.animate([{transform:"translate3d("+c+", 0, 0)",offset:0},{transform:"none",offset:1}],a)),j=o,o[o.length-1].onfinish=i})}function l(t,n,i,r){return new Promise(function(i){var a={duration:450,iterations:1,easing:"ease-out"};e.chrome||(a.fill="both");var o=[];if(n){var s=r?"100%":"-100%";o.push(n.animate([{transform:"none",offset:0},{transform:"translate3d("+s+", 0, 0)",offset:1}],a))}var c=r?"100%":"-100%";o.push(t.animate([{transform:"translate3d(0, "+c+", 0)",offset:0},{transform:"none",offset:1}],a)),j=o,o[o.length-1].onfinish=i})}function d(t,n){return new Promise(function(i){var r={duration:160,iterations:1,easing:"ease-out"};e.chrome||(r.fill="both");var a=[];n&&a.push(n.animate([{opacity:1,offset:0},{opacity:0,offset:1}],r)),a.push(t.animate([{opacity:0,offset:0},{opacity:1,offset:1}],r)),j=a,a[a.length-1].onfinish=i})}function m(){for(var e=j,t=0,n=e.length;n>t;t++)p(e[t])}function p(e){try{e.cancel()}catch(t){}}function h(e){y=e}function v(e){var t=e.url,n=L.indexOf(t);if(-1!=n){var i=q[n],r=i;if(r){if(e.cancel)return;m();var a=E,o=-1==a?null:q[a];return y&&y(r,!0,e),s(q,n,a),i.classList.remove("hide"),f(i,o,e.transition,e.isBack).then(function(){return E=n,!e.cancel&&o&&c(q,n),document.dispatchEvent(new CustomEvent("scroll",{})),window.$&&($.mobile=$.mobile||{},$.mobile.activePage=r),r})}}return Promise.reject()}function w(e){e.dispatchEvent(new CustomEvent("viewdestroy",{}))}function g(){q=[],L=[],b.innerHTML="",E=-1}var y,b=document.querySelector(".mainAnimatedPages"),q=[],L=[],P=3,E=-1,j=[];return t()&&!document.documentElement.animate&&require(["webAnimations"]),g(),b.classList.remove("hide"),{loadView:n,tryRestoreView:v,reset:g,setOnBeforeChange:h}});