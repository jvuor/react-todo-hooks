(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),u=n(4),l=n(1);var i=function(){return c.a.createElement("h1",null,"To-Do app with hooks")};var d=function(e){return c.a.createElement("div",{className:e.item.done?"checked":"item"},c.a.createElement("input",{type:"checkbox",value:e.item.done,onChange:function(){e.click()},defaultChecked:e.item.done}),c.a.createElement("p",null,e.item.text))};var m=function(e){return c.a.createElement("div",null,e.list.map(function(t){return c.a.createElement(d,{item:t,click:function(){return e.handler(t.text)}})}))};var f=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),o=n[0],r=n[1];return c.a.createElement("div",{className:"add-todo"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),o&&(e.add(o),r(""))}},c.a.createElement("input",{value:o,onChange:function(e){var t=e.target.value;r(t)}}),c.a.createElement("button",null,"Add")))};var s=function(){var e=Object(a.useState)([{text:"Do a React app with hooks",done:!0},{text:"Add more To Do-items",done:!1}]),t=Object(l.a)(e,2),n=t[0],o=t[1];return c.a.createElement("div",{className:"inbox"},c.a.createElement(i,null),c.a.createElement(m,{list:n,handler:function(e){o(n.map(function(t){return t.text!==e?t:{text:t.text,done:!t.done}}))}}),c.a.createElement(f,{add:function(e){o(Object(u.a)(n).concat([{text:e,done:!1}]))}}))};n(10);r.a.render(c.a.createElement(s,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(12)}},[[5,2,1]]]);
//# sourceMappingURL=main.dc296f04.chunk.js.map