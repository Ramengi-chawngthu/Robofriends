(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n(1),c=n.n(s),a=n(4),o=n.n(a),i=(n(15),n(3)),h=n.n(i),l=n(5),b=n(6),d=n(7),j=n(9),u=n(8),x=(n(17),function(t){var e=t.name,n=t.id,s=t.email;return Object(r.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:e}),Object(r.jsx)("p",{children:s})]})]})}),p=function(t){var e=t.robots;return Object(r.jsxs)("div",{style:{padding:"50px 0"},children:[e.map((function(t,e){return Object(r.jsx)(x,{name:t.name,id:t.id,email:t.email},e)}))," "]})},f=function(t){var e=t.handleSearch;return Object(r.jsx)("div",{className:"pa2",style:{position:"sticky",top:"0",zIndex:"1"},children:Object(r.jsx)("input",{onChange:e,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",style:{outline:"none"}})})},O=function(t){return Object(r.jsx)("div",{style:{width:"80%",overflow:"scroll",height:"800px",border:"3px solid black",margin:"0 auto"},children:t.children})},m=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(t){var r;return Object(b.a)(this,n),(r=e.call(this,t)).handleSearch=function(t){var e=t.target.value;r.setState({text:e})},r.state={robots:[],text:""},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(h.a.mark((function t(){var e=this;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(t){e.setState({robots:t})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=[];return this.state.text&&(e=this.state.robots.filter((function(e){return e.name.toLowerCase().includes(t.state.text.toLowerCase())}))),0===this.state.robots.length?Object(r.jsx)("h1",{children:"Loading..."}):Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"Robofriends"}),Object(r.jsx)(f,{handleSearch:this.handleSearch}),Object(r.jsx)(O,{children:this.state.text?Object(r.jsx)(p,{robots:e}):Object(r.jsx)(p,{robots:this.state.robots})})]})})}}]),n}(c.a.Component);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f1863f24.chunk.js.map