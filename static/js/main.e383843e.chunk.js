(this["webpackJsonpcovid-visualizer"]=this["webpackJsonpcovid-visualizer"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),i=n.n(c),r=(n(16),n(17),n(11)),s=n(1),l=n.n(s),d=n(2),u=n(3),f=n(4),m=n(6),p=n(5),h=(n(19),function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=".concat(t),a={},e.prev=2,e.next=5,fetch(n,{method:"GET",headers:{"Content-Type":"application/json","x-rapidapi-host":"covid-19-coronavirus-statistics.p.rapidapi.com","x-rapidapi-key":"ca93407b12msh6207f84fb92a18ep1d6b56jsn4ab719b2e4d0"}}).then((function(e){return e.json()}));case 5:return a=e.sent,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(2),console.log(e.t0,"Error fetching data"),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()),v=(n(20),n(9)),b=n.n(v),g=(n(25),n(10)),y=n.n(g),E=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).options={layout:{hierarchical:!1,improvedLayout:e.props.ohioMode},edges:{color:"#000000"},interaction:{hoverEdges:!0,navigationButtons:!0},height:"800px",nodes:{color:"skyblue"},physics:e.props.physics},e}return Object(f.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.nodes.length!==this.props.nodes.length}},{key:"render",value:function(){var e=this,t=this.props,n={nodes:t.nodes,edges:t.edges};return o.a.createElement("div",{className:"network"},o.a.createElement(b.a,{graph:n,options:this.options,events:this.props.events,style:y.a,vis:function(t){return e.vis=t}}))}}]),n}(a.Component),S=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:{},stateMode:!0,nationalMode:!1,selectedState:"Ohio",availableStates:[],anchored:[],updating:!1,animationEnabled:!0},e.clearViz=function(t){return e.setState({stateMode:!1,nationalMode:!1,selectedState:t.currentTarget.value},(function(){e.chooseState()}))},e.chooseState=function(){e.setState({stateMode:!0})},e.selectNode=function(t){return function(){e.state.anchored.push(t)}},e.updateVis=function(){return e.setState({updating:!0})},e.events={dragStart:function(t){var n=t.nodes,a=e.state.anchored.filter((function(e){return e.id!==n[0]}));e.setState({anchored:a})},dragEnd:function(t){var n=t.nodes,a=t.edges,o=t.pointer,c=e.state.anchored;1===n.length&&a.length>1||(c.push({id:n[0],x:o.canvas.x,y:o.canvas.y}),e.updateVis(),e.setState({anchored:c,updating:!1}))},doubleClick:function(t){var n=t.nodes,a=e.state.anchored.filter((function(e){return e.id!==n[0]}));e.updateVis(),e.setState({anchored:a,updating:!1})}},e.animationOn={barnesHut:{gravitationalConstant:-12e3,springLength:95,springConstant:.04,damping:1},minVelocity:.07},e.toggleAnimation=function(){return e.state.animationEnabled?e.setState({animationEnabled:!1}):e.setState({animationEnabled:!0})},e.toggleMode=function(){return e.state.stateMode?e.setState({stateMode:!1,nationalMode:!0}):e.setState({stateMode:!0,nationalMode:!1})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("USA");case 2:(t=e.sent)&&200===t.statusCode&&(n=[],t.data.covid19Stats.forEach((function(e){return n.push(e.province)})),this.setState({data:t.data,availableStates:n}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.nationalMode,c=t.stateMode,i=t.selectedState,s=t.anchored,l=t.updating,d=t.animationEnabled,u=n&&n.covid19Stats&&n.covid19Stats.length?n.covid19Stats.filter((function(e){return e.province===i})):[],f=u.length?u.map((function(t){return{id:"".concat(t.city," ").concat(t.province),label:"".concat(t.city||""," ").concat(t.confirmed),shape:"circle",shadow:!0,scaling:{min:0,max:100,label:{enabled:!0}},value:t.confirmed,hidden:"Unassigned"===t.city&&0===t.confirmed,fixed:s.map((function(e){return e.id})).includes("".concat(t.city," ").concat(t.province))?{x:!0,y:!0}:{x:!1,y:!1},selectNode:e.selectNode(t.id),x:s.map((function(e){return e.id})).includes("".concat(t.city," ").concat(t.province))?Math.ceil(s.filter((function(e){return e.id==="".concat(t.city," ").concat(t.province)}))[0].x):0,y:s.map((function(e){return e.id})).includes("".concat(t.city," ").concat(t.province))?Math.ceil(s.filter((function(e){return e.id==="".concat(t.city," ").concat(t.province)}))[0].y):0,color:t.confirmed>5e3?"#964eba":t.confirmed>1e3?"#ba4e66":t.confirmed>500?"#f00":t.confirmed>100?"orange":t.confirmed>50?"#FFFF00":0===t.confirmed?"#fff":"#fcfbd9"}})).concat([{id:i,label:i}]):[],m=u.length?u.map((function(e){return{from:e.province,to:"".concat(e.city," ").concat(e.province),hidden:"Unassigned"===e.city&&0===e.confirmed}})):[],p=0,h=0;u.forEach((function(e){return p+=e.confirmed})),u.forEach((function(e){return h+=e.deaths}));var v=n&&n.covid19Stats&&n.covid19Stats.length?Object(r.a)(new Set(n.covid19Stats.map((function(e){return e.province})))):[];v.sort();var b=v.map((function(e){return{id:e,label:e}})),g=n&&n.covid19Stats&&n.covid19Stats.length?n.covid19Stats.map((function(e){return{id:"".concat(e.keyId," ").concat(e.province),label:"".concat(e.city||""," ").concat(e.confirmed),shape:"circle",shadow:!0,scaling:{min:0,max:100,label:{enabled:!0}},value:e.confirmed,hidden:"Unassigned"===e.city&&0===e.confirmed,selectable:!0,color:e.confirmed>5e3?"#964eba":e.confirmed>1e3?"#ba4e66":e.confirmed>500?"#f00":e.confirmed>100?"orange":e.confirmed>50?"#FFFF00":0===e.confirmed?"#fff":"#fcfbd9"}})).concat(b):[],y=n&&n.covid19Stats&&n.covid19Stats.length?n.covid19Stats.map((function(e){return{from:e.province,to:"".concat(e.keyId," ").concat(e.province)}})):[],S=n&&n.lastChecked?"".concat(n.lastChecked.split("T")[0],", ").concat(n.lastChecked.split("T")[1].split(".")[0]):"fetching...";return o.a.createElement("div",{className:"main"},o.a.createElement("h1",null,"Covid-19 Confirmed Cases By County"),o.a.createElement("span",null,"Updated: ",S),o.a.createElement("div",{className:"button-container"},o.a.createElement("div",{className:c?"active-button button":"inactive-button button",onClick:this.toggleMode},"State Mode"),v&&v.length?o.a.createElement("select",{className:"inactive-button",onChange:this.clearViz,value:i},v&&v.length?v.map((function(e){return o.a.createElement("option",{key:e,label:e,value:e},e)})):null):null,o.a.createElement("div",{className:a?"active-button button":"inactive-button button",onClick:this.toggleMode},"All States"),!a&&c?o.a.createElement("div",{className:d?"active-button button":"inactive-button button",onClick:this.toggleAnimation},"Animation ",d?"On":"Off"):null),o.a.createElement("div",{className:"main-layout"},o.a.createElement("div",{className:"counties-container"},o.a.createElement("h2",null,i," Counties"),o.a.createElement("h4",null,"Confirmed Cases"),"Total: ",p||"Not available",o.a.createElement("br",null),"Deaths: ",h||"Not available",o.a.createElement("ul",{className:"county-list"},u.length?u.map((function(e){return o.a.createElement("li",{key:e.city},o.a.createElement("p",{className:"counties",style:{color:e.confirmed>5e3?"#964eba":e.confirmed>1e3?"#ba4e66":e.confirmed>500?"#f00":e.confirmed>100?"#bd7115":e.confirmed>50?"#ada61f":"#000",fontWeight:"bold"}},e.city||e.province,": ",e.confirmed))})):null)),o.a.createElement("div",{className:"visualizer"},n&&n.covid19Stats&&n.covid19Stats.length&&c&&!a&&!l?o.a.createElement(E,{data:n,nodes:f,edges:m,ohioMode:c,selectNode:this.selectNode,events:this.events,physics:!d||this.animationOn}):null,n&&n.covid19Stats&&n.covid19Stats.length&&a&&!c&&!l?o.a.createElement(E,{data:n,nodes:g,edges:y,ohioMode:c,selectNode:this.selectNode,physics:this.animationEnabled}):null)),o.a.createElement("footer",null,"Data source: Johns Hopkins University via RapidAPI"))}}]),n}(a.Component);var k=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.e383843e.chunk.js.map