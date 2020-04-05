(this["webpackJsonpcovid-visualizer"]=this["webpackJsonpcovid-visualizer"]||[]).push([[0],{12:function(e,t,n){e.exports=n(28)},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),i=(n(17),n(18),n(11)),s=n(1),l=n.n(s),u=n(2),d=n(3),v=n(4),f=n(5),m=n(6),p=(n(20),function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=".concat(t),a={},e.prev=2,e.next=5,fetch(n,{method:"GET",headers:{"Content-Type":"application/json","x-rapidapi-host":"covid-19-coronavirus-statistics.p.rapidapi.com","x-rapidapi-key":"ca93407b12msh6207f84fb92a18ep1d6b56jsn4ab719b2e4d0"}}).then((function(e){return e.json()}));case 5:return a=e.sent,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(2),console.log(e.t0,"Error fetching data"),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()),h=(n(21),n(9)),b=n.n(h),g=(n(26),n(10)),y=n.n(g),S=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).options={layout:{hierarchical:!1,improvedLayout:e.props.ohioMode},edges:{color:"#000000"},interaction:{hoverEdges:!0},height:"800px",nodes:{color:"skyblue"}},e}return Object(v.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.nodes!==this.props.nodes}},{key:"render",value:function(){var e=this,t=this.props,n={nodes:t.nodes,edges:t.edges};return o.a.createElement("div",{className:"network"},o.a.createElement(b.a,{graph:n,options:this.options,style:y.a,vis:function(t){return e.vis=t}}))}}]),n}(a.Component),E=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:{},stateMode:!0,nationalMode:!1,selectedState:"Ohio",availableStates:[]},e.clearViz=function(t){return e.setState({stateMode:!1,nationalMode:!1,selectedState:t.currentTarget.value},(function(){e.chooseState()}))},e.chooseState=function(){e.setState({stateMode:!0})},e.toggleMode=function(){return e.state.stateMode?e.setState({stateMode:!1,nationalMode:!0}):e.setState({stateMode:!0,nationalMode:!1})},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("USA");case 2:(t=e.sent)&&200===t.statusCode&&(n=[],t.data.covid19Stats.forEach((function(e){return n.push(e.province)})),this.setState({data:t.data,availableStates:n}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,n=e.nationalMode,a=e.stateMode,c=e.selectedState,r=t&&t.covid19Stats&&t.covid19Stats.length?t.covid19Stats.filter((function(e){return e.province===c})):[],s=r.length?r.map((function(e){return{id:"".concat(e.city," city"),label:"".concat(e.city," ").concat(e.confirmed),shape:"circle",color:e.confirmed>5e3?"#964eba":e.confirmed>1e3?"#ba4e66":e.confirmed>500?"#f00":e.confirmed>100?"orange":e.confirmed>50?"#FFFF00":0===e.confirmed?"#fff":"#fcfbd9"}})).concat([{id:c,label:c}]):[],l=r.length?r.map((function(e){return{from:e.province,to:"".concat(e.city," city")}})):[],u=t&&t.covid19Stats&&t.covid19Stats.length?Object(i.a)(new Set(t.covid19Stats.map((function(e){return e.province})))):[];u.sort();var d=u.map((function(e){return{id:e,label:e}})),v=t&&t.covid19Stats&&t.covid19Stats.length?t.covid19Stats.map((function(e){return{id:"".concat(e.keyId," city"),label:"".concat(e.city," ").concat(e.confirmed),shape:"circle",color:e.confirmed>5e3?"#964eba":e.confirmed>1e3?"#ba4e66":e.confirmed>500?"#f00":e.confirmed>100?"orange":e.confirmed>50?"#FFFF00":0===e.confirmed?"#fff":"#fcfbd9"}})).concat(d):[],f=t&&t.covid19Stats&&t.covid19Stats.length?t.covid19Stats.map((function(e){return{from:e.province,to:"".concat(e.keyId," city")}})):[],m=t&&t.lastChecked?"".concat(t.lastChecked.split("T")[0],", ").concat(t.lastChecked.split("T")[1].split(".")[0]):"fetching...";return o.a.createElement("div",{className:"main"},o.a.createElement("h1",null,"Covid-19 Confirmed Cases By County"),o.a.createElement("span",null,"Updated: ",m),o.a.createElement("div",{className:"button-container"},o.a.createElement("div",{className:a?"active-button button":"inactive-button button",onClick:this.toggleMode},"State Mode"),u&&u.length?o.a.createElement("select",{className:"inactive-button",onChange:this.clearViz,value:c},u&&u.length?u.map((function(e){return o.a.createElement("option",{key:e,label:e,value:e},e)})):null):null,o.a.createElement("div",{className:n?"active-button button":"inactive-button button",onClick:this.toggleMode},"All States")),o.a.createElement("div",{className:"main-layout"},o.a.createElement("div",{className:"counties-container"},o.a.createElement("h2",null,c," Counties"),o.a.createElement("h4",null,"Confirmed Cases"),o.a.createElement("ul",{className:"county-list"},r.length?r.map((function(e){return o.a.createElement("li",{key:e.city},o.a.createElement("p",{className:"counties",style:e.confirmed>50?{color:"red",fontWeight:"bold"}:{}},e.city||e.province,": ",e.confirmed))})):null)),o.a.createElement("div",{className:"visualizer"},t&&t.covid19Stats&&t.covid19Stats.length&&a&&!n?o.a.createElement(S,{data:t,nodes:s,edges:l,ohioMode:a}):null,t&&t.covid19Stats&&t.covid19Stats.length&&n&&!a?o.a.createElement(S,{data:t,nodes:v,edges:f,ohioMode:a}):null)),o.a.createElement("footer",null,"Data source: Johns Hopkins University via RapidAPI"))}}]),n}(a.Component);var k=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.bc809c09.chunk.js.map