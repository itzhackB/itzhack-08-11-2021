(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{119:function(e,t,c){},120:function(e,t,c){},147:function(e,t,c){},156:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(35),a=c.n(r),i=(c(119),c(120),c(16)),s=c(14),o=c(25),l=c.n(o),u=c(44),j="GET_CURRENT_CITY",d="CURRENT_CITY_WEEK_WEATHER",b="SET_LOCATION",h="ADD_FAVORITE",O="DELETE_FAVORITE",v="SET_THEME",x="CONVERT_TEMP",p=c(47),f=c.n(p),y="SMWoYBgzohr64Y8FpGTAu6TBnmN8Eg7W",m=function(e){return function(){var t=Object(u.a)(l.a.mark((function t(c){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=").concat(y,"&q=").concat(e));case 2:return n=t.sent,t.next=5,c({type:b,payload:{city:null===n||void 0===n?void 0:n.data[0].LocalizedName,cityKey:n.data[0].Key}});case 5:return r=n.data[0].Key,t.next=8,c(g(r));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(u.a)(l.a.mark((function t(c){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(w(e));case 2:return t.next=4,c(T(e));case 4:return t.next=6,c({type:"SET_LOADING"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(u.a)(l.a.mark((function t(c){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat("https://dataservice.accuweather.com/currentconditions/v1/").concat(e,"?apikey=").concat(y));case 2:return n=t.sent,t.next=5,c({type:j,payload:n.data[0]});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(u.a)(l.a.mark((function t(c){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat("https://dataservice.accuweather.com/forecasts/v1/daily/5day/").concat(e,"?apikey=").concat(y));case 2:return n=t.sent,t.next=5,c({type:d,payload:n.data.DailyForecasts});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=c(1),E=c(145),k=function(e){var t=e.day,c=Object(s.c)((function(e){return e.weather.current})),n=Object(s.c)((function(e){return e.temp})),r=new Date,a=1e3*t.Date;r.setTime(a);var i,o=c.IsDayTime?"Day":"Night";return Object(N.jsx)("div",{className:"col-sm-2",children:Object(N.jsxs)("div",{className:"card",children:[Object(N.jsx)("p",{className:"card-title",children:Object(N.jsx)("i",{className:"wi icon-accu".concat(t[o].Icon)})}),Object(N.jsx)("p",{className:"text-muted",children:E(t.Date).format("ddd")}),n?Object(N.jsxs)("h2",{children:[Math.round(t.Temperature.Minimum.Value)," \xb0F"]}):Object(N.jsxs)("h2",{children:[(i=Math.round(t.Temperature.Minimum.Value),Math.round(5/9*(i-32)))," \xb0C"]}),Object(N.jsx)("div",{className:"card-body",children:Object(N.jsx)("p",{className:"card-text",children:t[o].IconPhrase})})]})})},_=function(e){return{type:O,payload:e}},C=c(201),S=(c(147),function(){return Object(N.jsxs)("div",{class:"wrapper",children:[Object(N.jsx)("div",{class:"sun"}),Object(N.jsxs)("div",{class:"cloud",children:[Object(N.jsx)("div",{class:"cloud1",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{})]})}),Object(N.jsx)("div",{class:"cloud1 c_shadow",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{})]})})]}),Object(N.jsxs)("div",{class:"cloud_s",children:[Object(N.jsx)("div",{class:"cloud1",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{})]})}),Object(N.jsx)("div",{class:"cloud1 c_shadow",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{})]})})]}),Object(N.jsxs)("div",{class:"cloud_vs",children:[Object(N.jsx)("div",{class:"cloud1",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{})]})}),Object(N.jsx)("div",{class:"cloud1 c_shadow",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{})]})})]}),Object(N.jsx)("div",{class:"haze"}),Object(N.jsx)("div",{class:"haze_stripe"}),Object(N.jsx)("div",{class:"haze_stripe"}),Object(N.jsx)("div",{class:"haze_stripe"}),Object(N.jsx)("div",{class:"thunder"}),Object(N.jsx)("div",{class:"rain",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{})]})}),Object(N.jsx)("div",{class:"sleet",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{}),Object(N.jsx)("li",{}),Object(N.jsx)("li",{})]})}),Object(N.jsx)("div",{class:"text",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:"Mostly Sunny"}),Object(N.jsx)("li",{children:"Partly Sunny"}),Object(N.jsx)("li",{children:"Partly Cloudy"}),Object(N.jsx)("li",{children:"Mostly Cloudy"}),Object(N.jsx)("li",{children:"Cloudy"}),Object(N.jsx)("li",{children:"Hazy"}),Object(N.jsx)("li",{children:"Thunderstorm"}),Object(N.jsx)("li",{children:"Rain"}),Object(N.jsx)("li",{children:"Sleet"})]})})]})}),z=function(){var e,t,c,n,r=Object(s.b)(),a=Object(s.c)((function(e){return e.weather.weekly})),i=Object(s.c)((function(e){return e.location})),o=Object(s.c)((function(e){return e.weather.current})),l=Object(s.c)((function(e){return e.favorites})),u=Object(s.c)((function(e){return e.temp}));return Object(N.jsx)(N.Fragment,{children:o.Temperature?Object(N.jsxs)("div",{className:"container",children:[u?Object(N.jsxs)("h1",{className:"mainCard",children:[null===o||void 0===o||null===(e=o.Temperature)||void 0===e||null===(t=e.Imperial)||void 0===t?void 0:t.Value," \xb0F"]}):Object(N.jsxs)("h1",{className:"mainCard",children:[null===o||void 0===o||null===(c=o.Temperature)||void 0===c||null===(n=c.Metric)||void 0===n?void 0:n.Value," \xb0C"]}),Object(N.jsx)("h2",{className:"mainCard",children:i.city}),Object(N.jsx)("h3",{className:"mainCard",children:o.WeatherText}),l.some((function(e){return e.id===i.cityKey}))?Object(N.jsx)(C.a,{className:"mainCard",style:{marginBottom:"2%",position:"relative",left:"47%"},variant:"contained",onClick:function(){return r(_(i.cityKey))},children:"Unsubscribe"}):Object(N.jsx)(C.a,{className:"mainCard",style:{marginBottom:"2%",position:"relative",left:"47%"},variant:"contained",onClick:function(){return r((e=i.cityKey,t=i.city,{type:h,payload:{id:e,name:t}}));var e,t},children:"Subscribe"}),Object(N.jsx)("div",{className:"daysForecastWrapper",children:Object(N.jsx)("h1",{className:"daysForecast",children:"5-Day Forecast."})}),Object(N.jsx)("div",{className:"cardsWrapper",children:a.map((function(e,t){return Object(N.jsx)(k,{day:e,index:t},e.id)}))})]}):""})},F=c(34),I=c(12),D=c(198),A=c(197),M=c(200),R=function(e){var t=Object(s.b)(),c=Object(n.useState)([]),r=Object(I.a)(c,2),a=r[0],i=r[1],o=Object(n.useState)(!0),l=Object(I.a)(o,2),u=l[0],j=l[1],d=Object(n.useState)(!1),b=Object(I.a)(d,2),h=b[0],O=b[1],v=function(e){var t=e.target.value;/[^A-Za-z]/gi.test(t)?j(!1):(j(!0),fetch("".concat("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=").concat("SMWoYBgzohr64Y8FpGTAu6TBnmN8Eg7W","&q=").concat(t)).then((function(e){return e.json()})).then((function(e){e.Message?(O(!0),i([])):(O(!1),i(e))})))};return Object(N.jsxs)("div",{className:"autoComplete",children:[u?"":Object(N.jsx)(M.a,{severity:"error",children:"English letters only."}),h?Object(N.jsx)(M.a,{severity:"error",children:"API ERROR. Try Later"}):"",Object(N.jsx)(A.a,{id:"free-solo-demo",size:"medium",color:"white",sx:{width:500},options:a?a.map((function(e){return e.LocalizedName})):"hi",onChange:function(e,c){return t(m(c))},renderInput:function(e){return Object(n.createElement)(D.a,Object(F.a)(Object(F.a)({onChange:v},e),{},{label:"Search city",key:e.Key,style:{background:"white"}}))}})]})},W=function(){var e=Object(s.b)();Object(s.c)((function(e){return e.theme}));return Object(n.useEffect)((function(){e(m("Tel aviv"))}),[e]),Object(N.jsxs)("div",{style:{background:"linear-gradient(45deg,#469FFF,#A39AF9)"},children:[Object(N.jsx)(R,{}),Object(N.jsx)(z,{})]})};function L(e){var t,c,n,r=2;for("undefined"!==typeof Symbol&&(c=Symbol.asyncIterator,n=Symbol.iterator);r--;){if(c&&null!=(t=e[c]))return t.call(e);if(n&&null!=(t=e[n]))return new P(t.call(e));c="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function P(e){function t(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:t}}))}return P=function(e){this.s=e,this.n=e.next},P.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var c=this.s.return;return void 0===c?Promise.resolve({value:e,done:!0}):t(c.apply(this.s,arguments))},throw:function(e){var c=this.s.return;return void 0===c?Promise.reject(e):t(c.apply(this.s,arguments))}},new P(e)}var V=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.favorites})),c=Object(n.useState)([]),r=Object(I.a)(c,2),a=r[0],i=r[1],o=[];return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var c,n,r,s,u,j,d,b,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c="https://dataservice.accuweather.com/currentconditions/v1/",n="SMWoYBgzohr64Y8FpGTAu6TBnmN8Eg7W",r=!1,s=!1,e.prev=4,j=L(t);case 6:return e.next=8,j.next();case 8:if(!(r=!(d=e.sent).done)){e.next=17;break}return b=d.value,e.next=12,f.a.get("".concat(c).concat(b.id,"?apikey=").concat(n));case 12:h=e.sent,o[b.id]=h.data[0];case 14:r=!1,e.next=6;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(4),s=!0,u=e.t0;case 23:if(e.prev=23,e.prev=24,!r||null==j.return){e.next=28;break}return e.next=28,j.return();case 28:if(e.prev=28,!s){e.next=31;break}throw u;case 31:return e.finish(28);case 32:return e.finish(23);case 33:i(o),console.log(a);case 35:case"end":return e.stop()}}),e,null,[[4,19,23,33],[24,,28,32]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:"Favorites"}),Object(N.jsx)("div",{className:"favoritesContainer",children:t.map((function(t,c){var n,r;return Object(N.jsxs)("div",{className:"favoritesItem",children:[Object(N.jsx)("p",{children:t.name}),Object(N.jsx)("p",{children:null===(n=a[t.id])||void 0===n?void 0:n.WeatherText}),Object(N.jsx)("p",{children:null===(r=a[t.id])||void 0===r?void 0:r.Temperature.Metric.Value}),Object(N.jsx)("button",{onClick:function(){return e(_(t.id))},children:"Remove Favorite"})]},c)}))})]})},K=c(53),B=c.n(K),Y=!B.a.env.NODE_ENV||"development"===B.a.env.NODE_ENV;function G(){return Y}var U=function(){return Object(N.jsxs)(i.c,{children:[G()?Object(N.jsx)(i.a,{path:"/itzhack-08-11-2021",exact:!0,component:W}):Object(N.jsx)(i.a,{path:"https://itzhackb.github.io/itzhack-08-11-2021/#/",exact:!0,component:W}),G()?Object(N.jsx)(i.a,{path:"/itzhack-08-11-2021/favorites",component:V}):Object(N.jsx)(i.a,{path:"https://itzhackb.github.io/itzhack-08-11-2021/#/favorites",component:V})]})},X=c(43),q=c(82),H=c(83),J=function(){var e=Object(s.c)((function(e){return e.favorites})),t=Object(s.c)((function(e){return e.temp})),c=Object(s.b)();return Object(N.jsxs)("div",{className:"headerContainer",children:[G()?Object(N.jsx)(X.b,{to:"/itzhack-08-11-2021",children:Object(N.jsx)("h1",{className:"weatherTitle",style:{color:"white"},children:"Weather App"})}):Object(N.jsx)(X.b,{to:"https://itzhackb.github.io/itzhack-08-11-2021/#/",children:Object(N.jsx)("h1",{className:"weatherTitle",style:{color:"white"},children:"Weather App"})}),Object(N.jsxs)("div",{style:{display:"flex"},children:[G()?Object(N.jsxs)(X.b,{to:"/itzhack-08-11-2021/favorites",children:[Object(N.jsx)(q.a,{icon:H.a,style:{color:"white",fontSize:"1em"}}),Object(N.jsx)("div",{style:{color:"white",fontSize:"1em",position:"relative",bottom:"10%",left:"25%"},children:e.length})]}):Object(N.jsxs)(X.b,{to:"https://itzhackb.github.io/itzhack-08-11-2021/#/favorites",children:[Object(N.jsx)(q.a,{icon:H.a,style:{color:"red",fontSize:"1em"}}),Object(N.jsx)("div",{style:{color:"white",fontSize:"1em",position:"relative",bottom:"10%",left:"25%"},children:e.length})]}),Object(N.jsx)("button",{style:{backgroundColor:"transparent",borderWidth:"0",padding:0,position:"relative",bottom:"40%",left:"25%"},onClick:function(){return c({type:x})},children:Object(N.jsx)("div",{children:t?"\xb0C":"\xb0F"})})]})]})},Z=c(51);var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{current:{},weekly:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(F.a)(Object(F.a)({},e),{},{current:t.payload});case d:return Object(F.a)(Object(F.a)({},e),{},{weekly:t.payload});default:return e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===b?t.payload:e},ee=c(19),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return[].concat(Object(ee.a)(e),[t.payload]);case O:return e.filter((function(e){return e.id!==t.payload}));default:return e}},ce=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"SET_LOADING"!==t.type&&e},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type===v?!e:e},re=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type===x?!e:e},ae=Object(Z.b)({weather:Q,location:$,favorites:te,isLoading:ce,theme:ne,temp:re}),ie=[c(100).a],se=Object(Z.d)(ae,{},Object(Z.c)(Z.a.apply(void 0,ie),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var oe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.isLoading})),c=Object(s.c)((function(e){return e.theme}));return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){return e((c=t.coords.latitude,n=t.coords.longitude,function(){var e=Object(u.a)(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?","apikey=").concat(y,"&q=").concat(c,",").concat(n));case 2:return r=e.sent,e.next=5,t({type:b,payload:{city:r.data.LocalizedName,cityKey:r.data.Key}});case 5:return a=r.data.Key,e.next=8,t(g(a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var c,n}),(function(t){e(m("Tel Aviv"))})),function(e){try{var t=JSON.stringify(e);localStorage.setItem("favorites",t)}catch(c){throw c}}(se.getState.favorites)}),[e]),Object(N.jsxs)("div",{className:c?"App":"dark",children:[t?Object(N.jsx)(S,{}):"",Object(N.jsx)(J,{}),Object(N.jsx)(U,{})]})},le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,204)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};a.a.render(Object(N.jsx)(s.a,{store:se,children:Object(N.jsx)(X.a,{children:Object(N.jsx)(oe,{})})}),document.getElementById("root")),le()}},[[156,1,2]]]);
//# sourceMappingURL=main.9274ae7f.chunk.js.map