define(["dom"],function(t){function e(t){x.push(t)}function n(){x.length&&(x.length-=1)}function i(t,e,n){var i;return n!==!1&&(i=t.querySelector("*[autofocus]"))?(o(i),i):e!==!1&&(i=s(t,1)[0])?(o(i),i):null}function o(t){try{t.focus()}catch(e){}}function r(t){return-1!=L.indexOf(t.tagName)?!0:t.classList&&t.classList.contains("focusable")?!0:!1}function a(t){for(;!r(t);)if(t=t.parentNode,!t)return null;return t}function u(t){return null===t.offsetParent?!1:!0}function c(t){if(t.disabled)return!1;if("-1"==t.getAttribute("tabindex"))return!1;if("INPUT"==t.tagName){var e=t.type;if("range"==e)return!1}return u(t)}function f(){return x[0]||document.body}function s(t,e){for(var n=(t||f()).querySelectorAll(y),i=[],o=0,r=n.length;r>o;o++){var a=n[o];if(u(a)&&(i.push(a),e&&i.length>=e))break}return i}function l(t,e){if(-1!=N.indexOf(t.tagName))return!0;if(t.classList.contains("focuscontainer"))return!0;if(2>e){if(t.classList.contains("focuscontainer-x"))return!0}else if(3==e&&t.classList.contains("focuscontainer-down"))return!0;return!1}function h(t,e){for(;!l(t,e);)if(t=t.parentNode,!t)return f();return t}function d(t,e){return{clientTop:e.clientTop,clientLeft:e.clientLeft}}function p(t,e){var n;return n=t.getBoundingClientRect?t.getBoundingClientRect():{top:0,left:0,width:0,height:0},{top:n.top-e.clientTop,left:n.left-e.clientLeft,width:n.width,height:n.height}}function b(t,e){var n=p(t,e),i=n.top,o=n.left,r=n.width,a=n.height;return{left:o,top:i,width:r,height:a,right:o+r,bottom:i+a}}function g(e,n){e=e||document.activeElement,e&&(e=a(e));var r=e?h(e,n):f();if(!e)return void i(r,!0,!1);for(var u=t.parentWithClass(e,"focusable"),c=e.ownerDocument,s=d(c.defaultView,c.documentElement),l=b(e,s),p=[],g=r.querySelectorAll(y),m=0,v=g.length;v>m;m++){var M=g[m];if(M!=e&&M!=u){var T=b(M,s);if(T.width||T.height){switch(n){case 0:if(T.left>=l.left)continue;if(T.right==l.right)continue;break;case 1:if(T.right<=l.right)continue;if(T.left==l.left)continue;break;case 2:if(T.top>=l.top)continue;if(T.bottom>=l.bottom)continue;break;case 3:if(T.bottom<=l.bottom)continue;if(T.top<=l.top)continue}p.push({element:M,clientRect:T})}}}var x=w(p,l,n);if(x.length){var L=x[0].node,N=t.parentWithClass(L,"focusable");N&&N!=L&&e&&t.parentWithClass(e,"focusable")!=N&&(L=N),o(L)}}function m(t,e,n,i){return n>=t&&e>=n||i>=t&&e>=i}function v(t,e,n,i){return m(t,e,n,i)||m(n,i,t,e)}function w(t,e,n){for(var i=[],o=parseFloat(e.left)||0,r=parseFloat(e.top)||0,a=parseFloat(o+e.width-1)||o,u=parseFloat(r+e.height-1)||r,c=(Math.min,Math.max,e.left+e.width/2),f=e.top+e.height/2,s=0,l=t.length;l>s;s++){var h,d,p=t[s],b=p.element,g=p.clientRect,m=g.left,w=g.top,T=m+g.width-1,x=w+g.height-1,L=v(o,a,m,T),N=v(r,u,w,x),y=g.left+g.width/2,E=g.top+g.height/2;switch(n){case 0:h=Math.abs(o-Math.min(o,T)),d=N?0:Math.abs(f-E);break;case 1:h=Math.abs(a-Math.max(a,m)),d=N?0:Math.abs(f-E);break;case 2:d=Math.abs(r-Math.min(r,x)),h=L?0:Math.abs(c-y);break;case 3:d=Math.abs(u-Math.max(u,w)),h=L?0:Math.abs(c-y)}var k=Math.sqrt(h*h+d*d);i.push({node:b,distX:h,distY:d,distT:k,index:s})}return i.sort(M),i}function M(t,e){var n=t.distT-e.distT;return 0!=n?n:(n=t.index-e.index,0!=n?n:0)}function T(t){var e=document.activeElement;e.value=t}var x=[],L=["INPUT","TEXTAREA","SELECT","BUTTON","A"],N=["BODY","DIALOG"],y=L.map(function(t){return"INPUT"==t&&(t+=':not([type="range"])'),t+':not([tabindex="-1"]):not(:disabled)'}).join(",")+",.focusable";return{autoFocus:i,focus:o,focusableParent:a,getFocusableElements:s,moveLeft:function(t){g(t,0)},moveRight:function(t){g(t,1)},moveUp:function(t){g(t,2)},moveDown:function(t){g(t,3)},sendText:T,isCurrentlyFocusable:c,pushScope:e,popScope:n}});