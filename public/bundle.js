(()=>{"use strict";let e=null;function t(t){e=t.value}function n(t){let n=Array.from(JSON.parse(localStorage.getItem("tasks")));if(""===t.value)return alert("Задание не написано"),void(t.value=e);n.forEach((n=>{n.task===e&&(n.task=t.value)})),localStorage.setItem("tasks",JSON.stringify(n))}let a="",s="";function r(e){a=e.value}function l(e){s=e.value}function o(e){let t=Array.from(JSON.parse(localStorage.getItem("tasks")));if(e.value<10&&"00"!==e.value&&(e.value="0"+e.value),""===e.value||"0"===e.value||e.value>=24||e.value.length>=3)return alert("Напишите количество часов, 2 символа"),void(e.value=a);t.forEach((t=>{t.taskTimeHours===a&&(t.taskTimeHours=e.value)})),localStorage.setItem("tasks",JSON.stringify(t))}function u(e){let t=Array.from(JSON.parse(localStorage.getItem("tasks")));if(e.value<10&&"00"!==e.value&&(e.value="0"+e.value),""===e.value||"0"===e.value||e.value>59||e.value.length>=3)return alert("Напишите количество минут, 2 символа"),void(e.value=s);t.forEach((t=>{t.taskTimeMinutes===s&&(t.taskTimeMinutes=e.value)})),localStorage.setItem("tasks",JSON.stringify(t))}const i=function(e){let t=Array.from(JSON.parse(localStorage.getItem("tasks")));t.forEach((t=>{t.task===e.parentNode.children[0].value&&(t.completed=!t.completed,t.completedWithoutDecoration=!t.completedWithoutDecoration)})),localStorage.setItem("tasks",JSON.stringify(t)),e.parentNode.children[0].classList.toggle("completed"),e.parentNode.children[1].classList.toggle("completed-without-decoration"),e.parentNode.children[3].classList.toggle("completed-without-decoration")},c=function(e){let t=document.querySelector(".btn__delete-all-tasks"),n=Array.from(JSON.parse(localStorage.getItem("tasks")));n.forEach((t=>{t.task===e.parentNode.children[0].value&&n.splice(n.indexOf(t),1)})),localStorage.setItem("tasks",JSON.stringify(n)),e.parentElement.parentElement.remove(),n.length<1&&t.remove()},d=document.querySelector(".container"),m=function(){let e=document.createElement("button");e.classList.add("btn__delete-all-tasks"),e.setAttribute("type","submit"),e.innerHTML="&minus;",d.appendChild(e),e.addEventListener("click",(()=>{localStorage.clear(),location.reload()}))},v=document.querySelector(".task__text-input"),p=document.querySelector(".task__time-input--hours"),f=document.querySelector(".task__time-input--minutes"),g=document.querySelector("ol");let k=document.querySelector("form");const h=function(){k.addEventListener("submit",(e=>{e.preventDefault(),function(){if(""===v.value||v.value.length<5)return void alert("Напишите задание (не меньше 5 символов)");if(""===p.value||"0"===p.value||p.value>=24||p.value.length>=3||p.value.length<2)return void alert("Напишите количество часов, 2 символа");if(""===f.value||"0"===f.value||f.value>59||f.value.length>=3||f.value.length<2)return void alert("Напишите количество минут, 2 символа");if(document.querySelector(`input[value="${v.value}"]`))return void alert("Такое задание уже существует");localStorage.setItem("tasks",JSON.stringify([...JSON.parse(localStorage.getItem("tasks")||"[]"),{task:v.value,taskTimeHours:p.value,taskTimeMinutes:f.value,completed:!1,completedWithoutDecoration:!1}]));const e=document.createElement("li");e.classList.add("li");const a=document.createElement("div");a.classList.add("task"),a.innerHTML=`<textarea class="task-current__text-input" maxlength="60">${v.value}</textarea>\n    <input class="task-current__time-input--hours" type="number" min="00" max="23" value="${p.value}">\n    <span>:</span>\n    <input class="task-current__time-input--minutes" type="number" min="00" max="59" value="${f.value}">\n    <button class="btn__task-done"><img src="assets/img/check.png"/></button>\n    <button class="btn__task-delete"><img src="assets/img/delete.png"/></button>`,g.insertBefore(e,g.children[0]),e.insertBefore(a,e.children[0]);const s=document.querySelector(".btn__task-done"),d=document.querySelector(".btn__task-delete"),k=document.querySelector(".task-current__text-input"),h=document.querySelector(".task-current__time-input--hours"),_=document.querySelector(".task-current__time-input--minutes");s.addEventListener("click",(function(){s.classList.toggle("completed"),i(this)})),d.addEventListener("click",(function(){c(this)})),k.addEventListener("focus",(function(){t(this)})),k.addEventListener("blur",(function(){n(this)})),h.addEventListener("focus",(function(){r(this)})),h.addEventListener("blur",(function(){o(this)})),_.addEventListener("focus",(function(){l(this)})),_.addEventListener("blur",(function(){u(this)})),v.value="",p.value="",f.value="",1===Array.from(JSON.parse(localStorage.getItem("tasks"))).length&&m()}()}))};window.addEventListener("DOMContentLoaded",(()=>{(function(){if(null===localStorage.getItem("tasks"))return;let e=Array.from(JSON.parse(localStorage.getItem("tasks")));e.length>=1&&(m(),e.forEach((e=>{const a=document.querySelector("ol"),s=document.createElement("li");s.classList.add("li");const d=document.createElement("div");d.classList.add("task"),d.innerHTML=`<textarea class="task-current__text-input ${e.completed?"completed":""}" maxlength="60">${e.task}</textarea>\n        <input class="task-current__time-input--hours ${e.completedWithoutDecoration?"completed-without-decoration":""}" type="number" min="01" max="24" value="${e.taskTimeHours}">\n        <span>:</span>\n        <input class="task-current__time-input--minutes ${e.completedWithoutDecoration?"completed-without-decoration":""}" type="number" min="00" max="59" value="${e.taskTimeMinutes}">\n        <button class="btn__task-done ${e.completed?"completed":""}"><img src="assets/img/check.png"/></button>\n        <button class="btn__task-delete"><img src="assets/img/delete.png"/></button>`,a.insertBefore(s,a.children[0]),s.insertBefore(d,s.children[0]);const m=document.querySelector(".btn__task-done"),v=document.querySelector(".btn__task-delete"),p=document.querySelector(".task-current__text-input"),f=document.querySelector(".task-current__time-input--hours"),g=document.querySelector(".task-current__time-input--minutes");m.addEventListener("click",(function(){m.classList.toggle("completed"),i(this)})),v.addEventListener("click",(function(){c(this)})),p.addEventListener("focus",(function(){t(this)})),p.addEventListener("blur",(function(){n(this)})),f.addEventListener("focus",(function(){r(this)})),f.addEventListener("blur",(function(){o(this)})),g.addEventListener("focus",(function(){l(this)})),g.addEventListener("blur",(function(){u(this)}))})))})(),h()}))})();