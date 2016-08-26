define(["layoutManager","browser","css!./emby-textarea","registerElement"],function(){function e(e,t){function a(){e.rows=1,r=i.getOffset(e),i.rows=e.rows||1,i.lineHeight=e.scrollHeight/i.rows-r/i.rows,i.maxAllowedHeight=i.lineHeight*t-r}function s(){if((!i.lineHeight||i.lineHeight<=0)&&a(),i.lineHeight<=0)return e.style.overflowY="scroll",e.style.height="auto",void(e.rows=3);var t=0,s=!1;e.scrollHeight-r>i.maxAllowedHeight?(e.style.overflowY="scroll",t=i.maxAllowedHeight):(e.style.overflowY="hidden",e.style.height="auto",t=e.scrollHeight,s=!0),e.style.height=t+"px"}var i=this;void 0===t&&(t=999),i.getOffset=function(e){for(var t=window.getComputedStyle(e,null),a=["paddingTop","paddingBottom"],s=0,i=0;i<a.length;i++)s+=parseInt(t[a[i]]);return s};var r;e.addEventListener("input",s),e.addEventListener("focus",s),e.addEventListener("valueset",s),s()}var t=Object.create(HTMLTextAreaElement.prototype),a=0,s=!1;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var i=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value");if(i&&i.configurable){var r=i.set;i.set=function(e){r.call(this,e),this.dispatchEvent(new CustomEvent("valueset",{bubbles:!1,cancelable:!1}))},Object.defineProperty(HTMLTextAreaElement.prototype,"value",i),s=!0}}t.createdCallback=function(){this.id||(this.id="embytextarea"+a,a++)},t.attachedCallback=function(){if(!this.classList.contains("emby-textarea")){this.rows=1,this.classList.add("emby-textarea");var t=this.parentNode,a=this.ownerDocument.createElement("label");a.innerHTML=this.getAttribute("label")||"",a.classList.add("textareaLabel"),s&&"date"!=this.type||a.classList.add("nofloat"),a.htmlFor=this.id,t.insertBefore(a,this);var i=document.createElement("div");i.classList.add("emby-textarea-selectionbar"),t.insertBefore(i,this.nextSibling),this.addEventListener("focus",function(){a.classList.add("textareaLabelFocused"),a.classList.remove("textareaLabelUnfocused")}),this.addEventListener("blur",function(){a.classList.remove("textareaLabelFocused"),a.classList.add("textareaLabelUnfocused")}),this.label=function(e){a.innerHTML=e},new e(this)}},document.registerElement("emby-textarea",{prototype:t,"extends":"textarea"})});