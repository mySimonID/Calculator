(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),i=(a(12),a(1)),o=a(2),s=a(4),u=a(3),m=(a(13),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement("div",{className:"display"},c.a.createElement("div",null,this.props.value))))}}]),a}(n.Component)),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(){e.props.clickHandler(e.props.name)},e}return Object(o.a)(a,[{key:"render",value:function(){var e="calcButton ";e+=this.props.wide?"wide":"";var t="btn ";return t+=this.props.orange?"orange":"",t+=this.props.blue?"blue":"",c.a.createElement("div",{className:e},c.a.createElement("button",{className:t,onClick:this.handleClick},this.props.name))}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).clickHandler=function(t){e.props.clickHandler(t)},e}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement(d,{name:"AC",clickHandler:this.clickHandler,wide:!0}),c.a.createElement(d,{name:"+/-",clickHandler:this.clickHandler}),c.a.createElement(d,{name:"+",clickHandler:this.clickHandler,orange:!0})),c.a.createElement("div",{className:"col s12"},c.a.createElement(d,{name:"7",clickHandler:this.clickHandler}),c.a.createElement(d,{name:"8",clickHandler:this.clickHandler}),c.a.createElement(d,{name:"9",clickHandler:this.clickHandler}),c.a.createElement(d,{name:"x",clickHandler:this.clickHandler,orange:!0})),c.a.createElement("div",{className:"col s12"},c.a.createElement(d,{name:"4",clickHandler:this.clickHandler}),c.a.createElement(d,{name:"5",clickHandler:this.clickHandler}),c.a.createElement(d,{name:"6",clickHandler:this.clickHandler}),c.a.createElement(d,{name:"-",clickHandler:this.clickHandler,orange:!0})),c.a.createElement("div",{className:"col s12"},c.a.createElement(d,{name:"1",clickHandler:this.clickHandler}),c.a.createElement(d,{name:"2",clickHandler:this.clickHandler}),c.a.createElement(d,{name:"3",clickHandler:this.clickHandler}),c.a.createElement(d,{name:"/",clickHandler:this.clickHandler,orange:!0})),c.a.createElement("div",{className:"col s12"},c.a.createElement(d,{name:"0",clickHandler:this.clickHandler}),c.a.createElement(d,{name:".",clickHandler:this.clickHandler}),c.a.createElement(d,{name:"=",clickHandler:this.clickHandler,wide:!0,blue:!0})))}}]),a}(n.Component),h=function(e){var t=Number(e.total||"0"),a=Number(e.current||"0"),n=0;switch(e.action){case"+":n=t+a;break;case"-":n=t-a;break;case"x":n=t*a;break;case"/":n=a>0?t/a:"divide by zero"}return n.toString()};var v=function(e){return"0123456789".indexOf(e)>0},H=function(e,t){if("AC"===t)return{total:null,current:null,action:null};if(v(t))return"0"===t&&"0"===e.current?{state:e}:(e.action,e.current?{current:e.current+t}:{current:t});if("."===t)return e.current?e.current.includes(".")?{state:e}:{current:e.current+"."}:{current:"0."};if("+/-"!==t){if("="===t){var a=h(e);return console.log("Result:",a),{total:h(e),current:null,action:null}}if(e.action){var n=h(e);return console.log("Result:",n),{total:h(e),current:null,action:t}}return e.current?{total:e.current,current:null,action:t}:{action:t}}return e.current?e.current.startsWith("-")?{current:e.current.substr(1)}:{current:"-"+e.current}:e.total?e.total.startsWith("-")?{total:e.total.substr(1)}:{total:"-"+e.total}:void 0},E=(a(14),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={total:null,current:null,action:null},e.handleCLick=function(t){e.setState(H(e.state,t))},e}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6"},c.a.createElement("div",{className:"calcBorder"},c.a.createElement(m,{value:this.state.current||this.state.total||"0"}),c.a.createElement(k,{clickHandler:this.handleCLick})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5bfe2825.chunk.js.map