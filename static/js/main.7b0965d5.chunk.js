(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(7),c=a.n(r),i=a(9),s=a(2),o=a(3),h=a(5),j=a(4),u=a(0),l=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={data:[]},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then((function(t){return t.json()})).then((function(e){t.setState({data:e})}))}},{key:"render",value:function(){var t=this.state.data.map((function(t,e){return Object(u.jsx)("li",{children:t},e)}));return Object(u.jsx)("ul",{children:t})}}]),a}(n.Component),b=a(8),O=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).initialState={name:"",job:""},t.state=t.initialState,t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(b.a)({},n,r))},t.submitForm=function(){t.props.handleSubmit(t.state),t.setState(t.initialState)},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.job;return Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{type:"text",name:"name",id:"name",value:e,onChange:this.handleChange}),Object(u.jsx)("label",{htmlFor:"job",children:"Job"}),Object(u.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(u.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),a}(n.Component),d=function(){return Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Job"})]})})},m=function(t){var e=t.charactersData,a=t.removeCharacter,n=e.map((function(t,e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:t.job}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){return a(e)},children:"Delete"})})]},e)}));return Object(u.jsx)("tbody",{children:n})},p=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props,e=t.charactersData,a=t.removeCharacter;return Object(u.jsxs)("table",{children:[Object(u.jsx)(d,{}),Object(u.jsx)(m,{charactersData:e,removeCharacter:a})]})}}]),a}(n.Component),v=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={characters:[]},t.handleSubmit=function(e){t.setState({characters:[].concat(Object(i.a)(t.state.characters),[e])})},t.removeCharacter=function(e){var a=t.state.characters;t.setState({characters:a.filter((function(t,a){return a!==e}))})},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state.characters;return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h1",{children:" Hello Raviteja, Welcome to React."}),Object(u.jsx)(p,{charactersData:t,removeCharacter:this.removeCharacter}),Object(u.jsx)(O,{handleSubmit:this.handleSubmit}),Object(u.jsx)("hr",{}),Object(u.jsx)(l,{})]})}}]),a}(n.Component);a(15);c.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7b0965d5.chunk.js.map