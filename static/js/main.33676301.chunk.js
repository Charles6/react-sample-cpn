(this["webpackJsonpreact-sample-cpn"]=this["webpackJsonpreact-sample-cpn"]||[]).push([[0],{17:function(e,t,r){e.exports=r(43)},22:function(e,t,r){},23:function(e,t,r){},24:function(e,t,r){},43:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(16),c=r.n(o),l=(r(22),r(23),r(3)),i=r.n(l),s=r(2);r(24);var u=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),r=t[0],o=t[1],c=Object(n.useState)(),l=Object(s.a)(c,2),u=l[0],m=l[1],p=Object(n.useState)(),f=Object(s.a)(p,2),h=f[0],b=f[1],d=["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"],v=["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u6708"];return setInterval((function(){var e=new Date,t=e.getMinutes().toString().padStart(2,"0"),r=e.getHours().toString().padStart(2,"0");o(d[e.getDay()]),m(e.getDate()+" "+v[e.getMonth()]+" "+e.getFullYear()),b(r+":"+t)}),1e3),a.a.createElement("div",{className:i()("box","date-time-box")},a.a.createElement("div",{id:"day"},r,a.a.createElement("br",null),"\u66dc",a.a.createElement("br",null),"\u65e5"),a.a.createElement("div",{id:"date"},u),a.a.createElement("div",{id:"time"},h))};var m=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),r=t[0],o=t[1],c=Object(n.useState)(),l=Object(s.a)(c,2),u=l[0],m=l[1],p=Object(n.useState)(),f=Object(s.a)(p,2),h=f[0],b=f[1],d=Object(n.useState)(),v=Object(s.a)(d,2),g=v[0],E=v[1];return fetch("https://api.openweathermap.org/data/2.5/weather?zip=90046,us&APPID=33d0a0d0219bef1e831ca05c509cff49").then((function(e){return e.json()})).then((function(e){var t=(e.main.temp-273.15).toFixed(1);o(t),m(e.weather[0].description),b((e.main.temp_min-273.15).toFixed(1)),E((e.main.temp_max-273.15).toFixed(1))})),a.a.createElement("div",{className:i()("box","weather-box")},u,a.a.createElement("div",{className:"temp"},r," \xb0C"),"low: ",h," \xb0C | high: ",g," \xb0C")},p=r(4),f=r.n(p),h=r(5),b=r(6),d=r.n(b),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,r=e.by,n=e.url,a=e.time,o=e.title;return{id:t,by:r,url:n,time:a,title:o}},g="https://hacker-news.firebaseio.com/v0/",E="".concat(g,"newstories.json"),w="".concat(g,"item/"),j=function(){var e=Object(h.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat(w+t,".json")).then((function(e){var t=e.data;return t&&v(t)}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(E).then((function(e){return e.data}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var S=function(e){var t=e.storyId,r=Object(n.useState)({}),o=Object(s.a)(r,2),c=o[0],l=o[1];return Object(n.useEffect)((function(){j(t).then((function(e){return e&&e.url&&l(e)}))}),[]),c&&c.url?a.a.createElement("div",{className:i()("story")},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:c.url},c.title),function(e){var t=(new Date).getHours(),r=new Date(1e3*e),n=r.getUTCDate(),a=r.getUTCMonth(),o=r.getUTCFullYear(),c=r.getUTCHours(),l=r.getUTCMinutes();return n+"/"+a+"/"+o+" - "+(c-(c-t)).toString().padStart(2,"0")+":"+l.toString().padStart(2,"0")}(c.time)," - ",c.by):""};var x=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){O().then((function(e){return o(e)}))}),[]),a.a.createElement("div",{className:i()("box","news-box")},a.a.createElement("h3",null,a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://news.ycombinator.com/"},"\u30cf\u30c3\u30ab\u30fc\u30cb\u30e5\u30fc\u30b9")),a.a.createElement("div",{className:"new-stories"},r.map((function(e){return a.a.createElement(S,{key:e,storyId:e})}))))};var k=function(){return a.a.createElement("div",{className:i()("box","link-box")},a.a.createElement("h3",null,"\u4fbf\u5229\u306a\u30ea\u30f3\u30af"),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Charles6"},"Github"),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://developer.mozilla.org/en-US/"},"MDN web docs"),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://applibslist.xyz/"},"App Libs List"),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/"},"CodePen"),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.epochconverter.com/"},"Epoch Converter"),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://cssfx.dev/"},"CSS FX"),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://htmlcolorcodes.com/"},"HTML color codes"))};var y=function(){return a.a.createElement("div",{className:i()("App")},a.a.createElement(u,null),a.a.createElement(m,null),a.a.createElement(x,null),a.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.33676301.chunk.js.map