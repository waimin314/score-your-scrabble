(this["webpackJsonpscore-your-scrabble"]=this["webpackJsonpscore-your-scrabble"]||[]).push([[0],{14:function(e,t,a){e.exports=a(37)},19:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),l=a.n(o),c=(a(19),a(2)),s=a(13),m=a.n(s),d=["A","E","I","O","U","L","N","S","T","R"],i=["D","G"],u=["B","C","M","P"],b=["F","H","V","W","Y"],f=["K"],x=["J","X"],g=["Q","Z"],h=function(e){var t=-1;return d.indexOf(e)>-1&&(t=1),i.indexOf(e)>-1&&(t=2),u.indexOf(e)>-1&&(t=3),b.indexOf(e)>-1&&(t=4),f.indexOf(e)>-1&&(t=5),x.indexOf(e)>-1&&(t=8),g.indexOf(e)>-1&&(t=10),t};function p(e){var t=e.letter,a=e.point;return n.a.createElement("div",{className:"flex flex-col w-12 h-16 m-3 items-center rounded-md shadow-2xl border-t-2 border-r-4 border-b-4 border-yellow-500 bg-gradient-to-br from-yellow-400 to-yellow-300 md:w-20 md:h-24 md:rounded-md md:border-t-4 md:border-b-8 md:border-r-8"},n.a.createElement("h1",{className:"m-auto text-3xl font-serif font-semibold md:text-5xl"},t,n.a.createElement("sub",{className:"text-sm font-sans md:text-xl"},a)))}function E(){return n.a.createElement("div",{className:"flex flex-col w-12 h-16  border-gray-800 border-dashed bg-gray-500 m-3 rounded-md shadow-2xl border-2 md:w-20 md:h-24 md:border-4"})}function v(e){var t=e.alertType,a=e.message,r="Success"===t?"bg-green-100 border-green-400 text-green-700":"bg-red-100 border-red-400 text-red-700";return n.a.createElement("div",{className:"border ".concat(r," px-4 py-3 rounded relative mt-3")},n.a.createElement("strong",{className:"font-bold"},t,"! "),n.a.createElement("span",{className:"block sm:inline"}," ",a))}var w=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(r.useState)(0),s=Object(c.a)(l,2),d=s[0],i=s[1],u=Object(r.useState)([]),b=Object(c.a)(u,2),f=b[0],x=b[1],g=Object(r.useState)("invisible"),w=Object(c.a)(g,2),y=w[0],N=w[1],O=Object(r.useState)({type:"",message:""}),S=Object(c.a)(O,2),j=S[0],k=S[1],C=m.a.create({baseURL:"http://localhost:5000/"}),T=function(e){if(e.target.value.length<=10){var t=e.target.value.toUpperCase();o(t),i(function(e){var t=0;return e.split("").forEach((function(e){var a=h(e);-1!==a&&(t+=a)})),t}(t))}else J("Error","Max letter length reached")},J=function(e,t){k({type:e,message:t}),N("visible"),setTimeout((function(){return N("invisible")}),3e3)};return n.a.createElement("div",{className:"flex flex-col items-center"},n.a.createElement("div",{className:"".concat(y," h-5 md:h-10")},n.a.createElement(v,{alertType:j.type,message:j.message})),n.a.createElement("h1",{className:"text-4xl mt-3 font-medium md:mt-5"},"Score your scrabble"),n.a.createElement("div",{className:"flex flex-wrap flex-row h-auto  my-5 justify-center max-w-sm md:my-10 md:max-w-xl lg:max-w-full lg:flex-no-wrap"},a.split("").map((function(e){return n.a.createElement(p,{letter:e,point:h(e)})})),function(){for(var e=[],t=10-a.length,r=0;r<t;r++)e.push(n.a.createElement(E,null));return e}()),n.a.createElement("form",null,n.a.createElement("input",{className:"my-3 p-2 border border-gray-800 rounded-sm",type:"text",value:a,autoFocus:!0,onChange:function(e){return T(e)}})),n.a.createElement("h1",{className:"text-2xl my-5"},"Score : ",d),n.a.createElement("div",{className:"flex space-x-5"},n.a.createElement("button",{className:"w-20 h-8 rounded-md bg-pink-700 text-white",onClick:function(){o(""),i(0)}},"Clear"),n.a.createElement("button",{className:"w-20 h-8 rounded-md bg-indigo-700 text-white",onClick:function(){C.post("entries",{word:a,score:d}).then((function(e){console.log(e),console.log(e.data),J("Success",'Entry "'.concat(a,'" saved successfully.'))})).catch((function(e){e.response?J("Error",e.response.data):J("Error",e.toString())}))}},"Save"),n.a.createElement("button",{className:"w-20 h-8 rounded-md bg-indigo-700 text-white",onClick:function(){C.get("entries").then((function(e,t){console.log(e.data),x(e.data)}))}},"View All")),n.a.createElement("div",{className:"block mx-auto mt-5"},f.map((function(e){return console.log("".concat(e.word," : ").concat(e.score)),n.a.createElement("li",null,e.word," : ",e.score)}))))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7f3da5a2.chunk.js.map