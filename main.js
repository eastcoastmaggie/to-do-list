(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/* end of reset */\nbody{\n    min-height: 100vh;\n    margin: 0px;\n    padding: 0px;\n    display: grid;\n    grid-template-columns: minmax(150px, 26%) 2fr;\n    grid-template-rows: 100px 1fr 36px;\n}\n#header{\n    grid-row: 1;\n    grid-column: 1 / 3;\n    display:flex;\n    background-color: rgb(36, 36, 36);\n} \nh1{\n    color: white;\n    font-size: 2rem;\n    margin: 20px;\n    align-self: center;\n\n}\n#content{\n    background-color: #c0cab5;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    padding: 20px 10px;\n    gap: 8px;\n    align-items: flex-start;\n\n}\n.card button {\n    font-size: 1rem;\n    border: 1px solid #444;\n    border-radius: 4px;\n    padding:5px 6px;\n\n}\n.due{color:rgb(138, 31, 49);}\nbutton:hover{\n    background-color: rgb(221, 233, 255);\n}\n#sidebar{\n    padding: 40px 10px;\n}\n#sidebar > div > button{\n    border: none;\n    background: none;\n    font-size: 1.2rem;\n    padding: 20px 0px;\n    text-align: left;\n    color: rgb(34, 34, 34);\n}\n#sidebar > div > button:hover{\n    border: none;\n    background: none;\n    font-size: 1.2rem;\n    padding: 20px 0px;\n    text-align: left;\n    color: #bfb;\n}\n.row{\n    width: 90%;\n    min-width: 300px;\n    height: 65px;\n    margin: 8px 16px;\n    background-color: #fff;\n    display: grid;\n    grid-template-columns: 8px 1fr 20px;\n    grid-template-rows: 10px 1fr;\n    border-radius: 6px;\n    overflow: hidden;\n    transition: transform 1s;\n}\n.close-button{\n    display: none;\n    padding: auto;\n    margin: -20px 0 0 -5px;\n    width: 36px;\n    height: 36px;\n    grid-row: 1;\n    grid-column: 3;\n    background-color: rgba(255,255,255,1);\n    border-radius: 20px 20px;\n    border: 4px #bbc9b0 solid;\n    font-size: 1.3rem;\n    text-align: center;\n    overflow: visible;\n}\n.expanded > .close-button{\n    display: block;\n    overflow: visible;\n}\n\n\n.priority{\n    grid-row: 1 / 4;\n    grid-column: 1;\n    width:90%; \n    height: 100%;\n    border-radius: 6px 0 0 6px;\n}\n.low{\n    background: green;\n}\n.medium{\n    background-color: goldenrod;\n}\n.high{\n    background-color: rgb(211, 7, 7);\n}\n.card{\n    grid-row: 2;\n    margin: 8px 16px 8px 8px;\n    display:grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;\n    column-gap: 16px;\n    row-gap: 8px;\n    align-items: center;\n\n}\n.status{\n    grid-row: 1 ;\n    grid-column: 1;   \n}\n.expanded > div > .status{\n    grid-row: 1 / 4;\n}\n.title{\n    grid-row: 1;\n    grid-column: 2;\n    font-size: 1.4rem;\n}\n.detail-button{\n    grid-row: 1 / 2;\n    grid-column: 3;\n    max-width: 90px;\n}\n.expanded > div > .detail-button{\n    display: none;\n}\n.details{\n    display: none;\n    grid-row: 2;\n    grid-column: 2 / 4;\n}\n.expanded > div > .details{\n\n    display: flex;\n}\n\n.delete-button{\n    display: none;\n    grid-row: 3;\n}\n\n.expanded > div >.delete-button{\n    display: inline;    \n}\n\n.due{\n    grid-row: 1;\n    grid-column: 4;\n}\n.save-button{\n    grid-column: 4 / 5;\n    grid-row: 3;\n    max-width: 80px;\n    display: none;\n}\n.expanded > div > .save-button{\n    display: inline;\n}\n.project{\n    grid-column: 4;\n    grid-row: 2;\n    display: none;\n}\n.expanded > div > .project{\n    display: block;\n}\n.expanded{\n    min-height: 200px;\n    width: 90%;\n    overflow: visible;\n}\n.done > div{\n    text-decoration:line-through;\n}\n#sidebar{\n    background-color: #6f7a7a;\n    grid-row: 2 / 3;\n    grid-column: 1;\n}\n#footer{\n    background-color: rgb(36, 36, 36);\n    grid-row: 3;\n    grid-column: 1 / 3;\n}\n.add-project, .add-todo{\n    border: none;\n    background-color: #3d3d3d;\n    border-radius: 18px;\n    font-size: 1.3rem;\n    font-weight: bold;\n    color: #bfb;\n    padding: 0 40px;\n    margin: 0 auto;\n}\n.radio-toolbar {\n  display: none;\n  flex-direction: row;\n  grid-row: 3;\n  gap: 8px;\n}\n.expanded > div > .radio-toolbar{\n    display: flex;\n}\n.radio-toolbar input[type="radio"] {\n  opacity: 0;\n  position: fixed;\n  width: 0;\n}\n.radio-toolbar label {\n    display: inline-block;\n    background-color: #ddd;\n    padding: 8px 10px;\n    font-family: sans-serif, Arial;\n    font-size: 1rem;\n    border: 2px solid #444;\n    border-radius: 4px;\n}\n.radio-toolbar label:hover {\n  background-color: rgb(221, 233, 255);\n}\n.radio-toolbar input[type="radio"]:focus + label {\n    border: 2px dashed #444;\n}\n.radio-toolbar input[value="low"]:checked + label {\n    background-color: #bfb;\n    border-color: green;\n}\n.radio-toolbar input[value="medium"]:checked + label {\n    background-color: rgb(250, 237, 204);\n    border-color: goldenrod;\n}\n.radio-toolbar input[value="high"]:checked + label {\n    background-color: rgb(243, 179, 179);\n    border-color: rgb(211, 7, 7);\n}',""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var l=e[d],c=r.base?l[0]+r.base:l[0],s=a[c]||0,u="".concat(c," ").concat(s);a[c]=s+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=o(m,r);r.byIndex=d,t.splice(d,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var l=r(e,o),c=0;c<a.length;c++){var s=n(a[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),d=n(565),l=n.n(d),c=n(216),s=n.n(c),u=n(589),p=n.n(u),m=n(426),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=s(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const b={getName(){return this.name}},f=e=>Object.create(b,{name:{value:e}}),h={getName(){return this.name},getDueDate(){return new Date(this.dueDate)},getDescription(){return this.description},getProject(){return this.project},getPriority(){return this.priority},getStatus(){return this.status},setStatus(e){this.status=e},setDueDate(e){this.dueDate=e},setName(e){this.name=e},setDescription(e){this.description=e},setPriority(e){this.priority=e},setProject(e){this.project=e}},v=(e,t,n,r,o)=>{let a=["low","medium","high"];return r=0<r&&r<=a.length?a[r-1]:"normal",Object.create(h,{name:{writable:!0,configurable:!0,value:e},description:{writable:!0,configurable:!0,value:t},dueDate:{writable:!0,configurable:!0,value:o},project:{writable:!0,configurable:!0,value:n},priority:{writable:!0,configurable:!0,value:r},status:{writable:!0,configurable:!0,value:"open"}})},x=function(e,t,n){let r=document.createElement("div"),o=document.createElement("button");return o.textContent=e.getName(),o.addEventListener("click",(function(){n(e,t)})),r.appendChild(o),r},y=function(e,t,n,r="load"){if(function(e){let t;try{t=window.localStorage;let e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()){const o=Object.getPrototypeOf(t[0]);localStorage.getItem(e)&&"set"!=r||w(e,t,n);let a=E(e);t.length=0;for(let e in a)t.push(Object.setPrototypeOf(a[e],o))}else console.log("no localStorage available")},w=function(e,t,n=null){localStorage.setItem(e,JSON.stringify(t,n,t.length))},E=function(e){return JSON.parse(localStorage.getItem(e))},k=["name","description","dueDate","project","priority","status"],C=function(e,t,n){let r=e[t],o=["low","medium","high"],a=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),l=document.createElement("button"),c=document.createElement("div"),s=document.createElement("input"),u=document.createElement("div"),p=document.createElement("div"),m=document.createElement("select"),g=document.createElement("button"),b=document.createElement("button"),f=document.createElement("div"),h=document.createElement("button");for(let e in o){let t=document.createElement("input"),n=document.createElement("label");t.setAttribute("type","radio"),t.setAttribute("name",`priorities-${r.getName().replace(" ","-")}`),t.setAttribute("id",`${r.getName().replace(" ","-")}-${o[e]}`),t.setAttribute("value",`${o[e]}`),n.textContent=o[e],n.setAttribute("for",`${r.getName().replace(" ","-")}-${o[e]}`),o[e]==r.getPriority()&&(t.checked=!0),f.appendChild(t),f.appendChild(n)}a.classList.add("card"),i.classList.add("row"),d.classList.add("title"),c.classList.add("due"),l.classList.add("detail-button"),g.classList.add("save-button"),b.classList.add("close-button"),s.classList.add("status"),p.classList.add("details"),m.classList.add("project"),h.classList.add("delete-button"),a.dataset.todo=r.getName().replace(" ","-"),s.setAttribute("type","checkbox"),"done"==r.getStatus()?s.checked=!0:s.checked=!1,d.textContent=r.getName(),l.textContent="Details",c.textContent=r.getDueDate().toLocaleDateString("en-ca",{month:"short",day:"numeric"}),g.textContent="Save",b.textContent="x",h.textContent="delete",p.textContent=r.getDescription();for(let e in n){const t=document.createElement("option"),o=document.createTextNode(n[e].getName());t.appendChild(o),t.setAttribute("value",n[e].getName()),r.getProject()==n[e].getName()&&(t.selected=!0),m.appendChild(t)}return u.classList.add(r.getPriority()),u.classList.add("priority"),f.classList.add("radio-toolbar"),l.addEventListener("click",(function(){L(l.parentElement.parentElement,t,e)})),s.addEventListener("click",(function(){D(r,s),y("todos",e,k,"set")})),b.addEventListener("click",(function(){N(b.parentElement)})),h.addEventListener("click",(function(){e.splice(t,1),h.parentElement.parentElement.remove(),y("todos",e,k,"set")})),i.appendChild(u),a.appendChild(s),a.appendChild(d),a.appendChild(l),a.appendChild(c),a.appendChild(p),a.appendChild(m),a.appendChild(f),a.appendChild(g),a.appendChild(h),i.appendChild(a),i.appendChild(b),D(r,s),i},L=function(e,t,n){n[t];const r=e.querySelector(".title"),o=e.querySelector(".details"),a=e.querySelector(".due"),i=e.querySelector(".save-button");e.classList.add("expanded"),r.addEventListener("click",(function(e){S(e,"text")})),o.addEventListener("click",(function(e){S(e,"text")})),a.addEventListener("click",(function(e){S(e,"date")})),i.addEventListener("click",(function(){j(e,t,n),y("todos",n,k,"set")}))},S=function(e,t){const n=e.currentTarget,r=n.classList;let o=document.createElement("input");switch(o.classList.add(r),t){case"text":o.setAttribute("type","text"),o.setAttribute("value",n.textContent),o.addEventListener("keypress",(function(e){q(e,r,t)})),o.addEventListener("focusout",(function(e){q(e,r,t)})),setTimeout((function(){o.selectionStart=o.selectionEnd=1e4}),0);break;case"date":{let e=new Date(n.textContent+" "+(new Date).getFullYear()).toLocaleDateString("en-CA");o.setAttribute("type","date"),o.setAttribute("value",e),o.setAttribute("id","due"),o.addEventListener("keypress",(function(e){q(e,r,t)})),o.addEventListener("focusout",(function(e){q(e,r,t)}))}break;case"dropdown":o=document.createElement("input");break;default:console.log("done")}n.parentElement.replaceChild(o,n),o.focus()},D=function(e,t){let n=t.checked,r=t.parentElement,o=r.querySelector(".detail-button");n?(e.setStatus("done"),r.classList.add("done"),o.disabled=!0):(e.setStatus("open"),r.classList.remove("done"),o.disabled=!1)},N=function(e){e.classList.remove("expanded"),e.querySelector(".title").removeEventListener("click",S)},q=function(e,t,n){let r=e.currentTarget;if("Enter"===e.key)r.blur();else if("focusout"===e.type){let e=document.createElement("div");switch(n){case"text":e.textContent=r.value;break;case"date":{let t=new Date(r.value);t.setDate(t.getUTCDate()),e.textContent=t.toLocaleDateString("en-ca",{month:"short",day:"numeric"});break}default:console.log("error")}e.classList.add(t),e.addEventListener("click",(function(e){S(e,n)})),r.parentElement.replaceChild(e,r)}},j=function(e,t,n){let r=n[t],o=["low","medium","high"],a=r.getName().replace(" ","-");r.setName(e.querySelector("div > .title").textContent),r.setDescription(e.querySelector("div > .details").textContent),r.setDueDate(new Date(e.querySelector(".due").textContent).setFullYear((new Date).getFullYear()));const i=e.querySelector(".card");i.dataset.todo=r.getName().replace(" ","-"),!0===e.querySelector("div > .status").checked?r.setStatus("done"):r.setStatus("open");const d=e.querySelector(`[name = priorities-${a.replace(" ","-")}]:checked`);r.setPriority(d.value);const l=e.querySelector(".project");r.setProject(l[l.selectedIndex].value),e.classList.remove("expanded");const c=i.querySelector(".radio-toolbar");for(;c.firstChild;)c.removeChild(c.lastChild);for(let e in o){let t=document.createElement("input"),n=document.createElement("label");t.setAttribute("type","radio"),t.setAttribute("name",`priorities-${r.getName().replace(" ","-")}`),t.setAttribute("id",`${r.getName().replace(" ","-")}-${o[e]}`),t.setAttribute("value",`${o[e]}`),n.textContent=o[e],n.setAttribute("for",`${r.getName().replace(" ","-")}-${o[e]}`),o[e]==r.getPriority()&&(t.checked=!0),c.appendChild(t),c.appendChild(n)}};(()=>{let e=[],t=[];const n=["name"];e.push(f("Due Today")),e.push(f("Everything")),e.push(f("Work")),e.push(f("Home")),e.push(f("The Odin Project")),t.push(v("test","Test the thing",e[2],2,Date())),t.push(v("laundry","Another",e[3],1,Date())),t.push(v("taxes","Do taxes",e[3],3,new Date("2022-04-30"))),y("projects",e,n),y("todos",t,["name","description","dueDate","project","priority","status"]);let r="";const o=document.querySelector("body"),a=o.querySelector("#content"),i=o.querySelector("#sidebar"),d=o.querySelector("#header"),l=(o.querySelector("#footer"),document.createElement("h1"));l.textContent="To Do List",d.appendChild(l);const c=(e,t)=>{t.appendChild(e)},s=e=>{for(;e.firstChild;)e.removeChild(e.lastChild)},u=()=>{const n=document.createElement("button");n.classList.add("add-todo"),n.textContent="+",n.addEventListener("click",(function(){var n;n=Date(),t.push(v("New Item","New Description",e[2],2,n));let r=C(t,t.length-1,e.slice(2,e.length));c(r,a),r.querySelector(".detail-button").click(),this.remove(),u()})),c(n,a)},p=function(n,o){let i=o;r=n.getName(),i="Everything"==n.getName()?o:"Due Today"==n.getName()?o.filter((e=>e.getDueDate().setHours(0,0,0,0)==(new Date).setHours(0,0,0,0))):o.filter((e=>e.getProject()==n.getName())),s(a);for(let n in i)c(C(t,t.indexOf(i[n]),e.slice(2,e.length)),a);u()},m=()=>{s(i);for(let n in e)c(x(e[n],t,p),i);!function(){const t=document.createElement("button");t.classList.add("add-project"),t.textContent="+",t.addEventListener("click",(function(){const t=document.createElement("input");t.setAttribute("type","text"),t.addEventListener("keypress",(function(e){"Enter"===e.key&&e.currentTarget.blur()})),t.addEventListener("focusout",(function(t){var r;""!=t.currentTarget.value&&(r=t.currentTarget.value,e.push(f(r)),y("projects",e,n,"set")),this.remove(),m()})),c(t,i),this.remove(),t.focus()})),c(t,i)}()};m(),i.firstChild.firstChild.click()})()})()})();