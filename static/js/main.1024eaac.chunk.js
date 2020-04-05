(this["webpackJsonpcovid-visualizer"]=this["webpackJsonpcovid-visualizer"]||[]).push([[0],{12:function(t,e,n){t.exports=n(28)},17:function(t,e,n){},18:function(t,e,n){},21:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),i=(n(17),n(18),n(11)),s=n(1),l=n.n(s),u=n(2),d=n(3),v=n(4),p=n(5),f=n(6),m=(n(20),function(){var t=Object(u.a)(l.a.mark((function t(e){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=".concat(e),a={},t.prev=2,t.next=5,fetch(n,{method:"GET",headers:{"Content-Type":"application/json","x-rapidapi-host":"covid-19-coronavirus-statistics.p.rapidapi.com","x-rapidapi-key":"ca93407b12msh6207f84fb92a18ep1d6b56jsn4ab719b2e4d0"}}).then((function(t){return t.json()}));case 5:return a=t.sent,t.abrupt("return",a);case 9:return t.prev=9,t.t0=t.catch(2),console.log(t.t0,"Error fetching data"),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()),h=(n(21),n(9)),b=n.n(h),g=(n(26),n(10)),y=n.n(g),S=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).options={layout:{hierarchical:!1,improvedLayout:t.props.ohioMode},edges:{color:"#000000"},interaction:{hoverEdges:!0},height:"800px",nodes:{color:"skyblue"}},t}return Object(v.a)(n,[{key:"shouldComponentUpdate",value:function(t,e){return t.nodes!==this.props.nodes}},{key:"render",value:function(){var t=this,e=this.props,n={nodes:e.nodes,edges:e.edges};return o.a.createElement("div",{className:"network"},o.a.createElement(b.a,{graph:n,options:this.options,style:y.a,vis:function(e){return t.vis=e}}))}}]),n}(a.Component),E=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={data:{},stateMode:!0,nationalMode:!1,selectedState:"Ohio",availableStates:[]},t.clearViz=function(e){return t.setState({stateMode:!1,nationalMode:!1,selectedState:e.currentTarget.value},(function(){t.chooseState()}))},t.chooseState=function(){t.setState({stateMode:!0})},t.toggleMode=function(){return t.state.stateMode?t.setState({stateMode:!1,nationalMode:!0}):t.setState({stateMode:!0,nationalMode:!1})},t}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("USA");case 2:(e=t.sent)&&200===e.statusCode&&(n=[],e.data.covid19Stats.forEach((function(t){return n.push(t.province)})),this.setState({data:e.data,availableStates:n}));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.data,n=t.nationalMode,a=t.stateMode,c=t.selectedState,r=e&&e.covid19Stats&&e.covid19Stats.length?e.covid19Stats.filter((function(t){return t.province===c})):[],s=r.length?r.map((function(t){return{id:"".concat(t.city," city"),label:"".concat(t.city," ").concat(t.confirmed),shape:"circle",color:t.confirmed>5e3?"#964eba":t.confirmed>1e3?"#ba4e66":t.confirmed>500?"#f00":t.confirmed>100?"orange":t.confirmed>50?"#FFFF00":0===t.confirmed?"#fff":"#fcfbd9"}})).concat([{id:c,label:c}]):[],l=r.length?r.map((function(t){return{from:t.province,to:"".concat(t.city," city")}})):[],u=e&&e.covid19Stats&&e.covid19Stats.length?Object(i.a)(new Set(e.covid19Stats.map((function(t){return t.province})))):[];u.sort();var d=u.map((function(t){return{id:t,label:t}})),v=e&&e.covid19Stats&&e.covid19Stats.length?e.covid19Stats.map((function(t){return{id:"".concat(t.keyId," city"),label:"".concat(t.city," ").concat(t.confirmed),shape:"circle",color:t.confirmed>5e3?"#964eba":t.confirmed>1e3?"#ba4e66":t.confirmed>500?"#f00":t.confirmed>100?"orange":t.confirmed>50?"#FFFF00":0===t.confirmed?"#fff":"#fcfbd9"}})).concat(d):[],p=e&&e.covid19Stats&&e.covid19Stats.length?e.covid19Stats.map((function(t){return{from:t.province,to:"".concat(t.keyId," city")}})):[],f=e&&e.lastChecked?"".concat(e.lastChecked.split("T")[0],", ").concat(e.lastChecked.split("T")[1].split(".")[0]):"";return o.a.createElement("div",{className:"main"},o.a.createElement("h1",null,"Covid-19 Stats By County"),o.a.createElement("span",null,"Updated: ",f),o.a.createElement("div",{className:"button-container"},o.a.createElement("div",{className:a?"active-button button":"inactive-button button",onClick:this.toggleMode},"State Mode"),o.a.createElement("select",{className:"inactive-button",onChange:this.clearViz,value:c},u&&u.length?u.map((function(t){return o.a.createElement("option",{key:t,label:t,value:t},t)})):null),o.a.createElement("div",{className:n?"active-button button":"inactive-button button",onClick:this.toggleMode},"All States")),o.a.createElement("div",{className:"main-layout"},o.a.createElement("div",{className:"counties-container"},o.a.createElement("h2",null,c," Counties"),o.a.createElement("ul",{className:"county-list"},r.length?r.map((function(t){return o.a.createElement("li",{key:t.city},o.a.createElement("p",{className:"counties",style:t.confirmed>50?{color:"red",fontWeight:"bold"}:{}},t.city||t.province,": ",t.confirmed))})):null)),o.a.createElement("div",{className:"visualizer"},e&&e.covid19Stats&&e.covid19Stats.length&&a&&!n?o.a.createElement(S,{data:e,nodes:s,edges:l,ohioMode:a}):null,e&&e.covid19Stats&&e.covid19Stats.length&&n&&!a?o.a.createElement(S,{data:e,nodes:v,edges:p,ohioMode:a}):null)))}}]),n}(a.Component);var k=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.1024eaac.chunk.js.map