(this.webpackJsonpradency=this.webpackJsonpradency||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),s=n(8),c=n.n(s),i=n(2),l=n(3),o=n(5),u=n(4),j=n(9),h=n.n(j),p=(n(18),n(19),n(0));function d(t){var e=t.id;return Object(p.jsx)("td",{children:e})}function b(t){var e=t.name;return Object(p.jsx)("td",{children:e})}var O=n(10),y=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={style:null,text:null},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.phone.split(""),e=t[0],n=t[1],r=[];t.length>=12&&"+"!==e&&"1"!==n||11===t.length&&"1"!==e||t.length<10?this.setState({style:"error",text:t.join("")}):10===t.length&&"+"!==e&&this.setState({text:r.concat.apply(r,["+1"].concat(Object(O.a)(t))).join("")})}},{key:"render",value:function(){return Object(p.jsx)("td",{className:this.state.style,children:this.state.text})}}]),n}(r.Component);function x(t){var e=t.email;return Object(p.jsx)("td",{children:e})}var f=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={style:null},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){!(parseInt(this.props.age)<21)&&this.props.age>0||this.setState({style:"error"})}},{key:"render",value:function(){return Object(p.jsx)("td",{className:this.state.style,children:Number(parseInt(this.props.age))})}}]),n}(r.Component),v=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={style:null},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){parseInt(this.props.experience)>=0&&parseInt(this.props.experience)<parseInt(this.props.age)||this.setState({style:"error"})}},{key:"render",value:function(){return Object(p.jsx)("td",{className:this.state.style,children:Number(this.props.experience)})}}]),n}(r.Component),m=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={style:null,text:null},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=parseInt(100*this.props.yearlyIncome)/100,e=String(t).length;this.setState({text:t}),(e>=7||this.props.yearlyIncome<=0)&&this.setState({style:"error"})}},{key:"render",value:function(){return Object(p.jsx)("td",{className:this.state.style,children:this.state.text})}}]),n}(r.Component),g=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={style:null,text:"true"},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.children;""===t?this.setState({text:"false"}):"true"!==t&&"false"!==t&&this.setState({style:"error",text:t})}},{key:"render",value:function(){return Object(p.jsx)("td",{className:this.state.style,children:this.state.text})}}]),n}(r.Component),S=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={style:null,text:null},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.licenseStates.map((function(t){return t.split("").slice(0,2).join("").toUpperCase()}));this.setState({text:t})}},{key:"render",value:function(){return Object(p.jsx)("td",{children:this.state.text})}}]),n}(r.Component),k=n(6),D=n.n(k),N=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={style:null},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.expirationDate,e=D()(t).format("YYYY-MM-DD")===t,n=D()(t).format("MM/DD/YYYY")===t,r=D()().format("YYYY-MM-DD"),a=D()().format("MM/DD/YYYY");e||n?(D()(t).isBefore(r)||D()(t).isBefore(a)||t<=0)&&this.setState({style:"error"}):(this.setState({style:"error"}),console.log("in valid"))}},{key:"render",value:function(){return Object(p.jsx)("td",{className:this.state.style,children:this.props.expirationDate})}}]),n}(r.Component),M=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={style:null},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.licenseNumber;6!==t.length?this.setState({style:"error"}):/^\w*$/.test(t)?t<=0&&this.setState({style:"error"}):this.setState({style:"error"})}},{key:"render",value:function(){return Object(p.jsx)("td",{className:this.state.style,children:this.props.licenseNumber})}}]),n}(r.Component),Y=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("td",{})}}]),n}(r.Component);function w(t){var e=t.data,n=t.id,r=[],a=[],s=[],c=[],i=[],l=[],o=[],u=[],j=[],h=[];for(var O in e)"full_name"===O&&r.push(e[O]),"phone"===O&&a.push(e[O]),"email"===O&&s.push(e[O]),"age"===O&&c.push(e[O]),"experience"===O&&i.push(e[O]),"yearly_income"===O&&l.push(e[O]),"has_children"===O&&o.push(e[O]),"license_states"===O&&u.push(e[O]),"expiration_date"===O&&j.push(e[O]),"license_number"===O&&h.push(e[O]);return Object(p.jsxs)("tr",{children:[Object(p.jsx)(d,{id:n}),Object(p.jsx)(b,{name:r}),Object(p.jsx)(y,{phone:String(a)}),Object(p.jsx)(x,{email:s}),Object(p.jsx)(f,{age:String(c)}),Object(p.jsx)(v,{experience:String(i),age:String(c)}),Object(p.jsx)(m,{yearlyIncome:Number(l)}),Object(p.jsx)(g,{children:String(o)}),Object(p.jsx)(S,{licenseStates:u}),Object(p.jsx)(N,{expirationDate:String(j)}),Object(p.jsx)(M,{licenseNumber:String(h)}),Object(p.jsx)(Y,{})]})}var C=n.p+"static/media/error.249e8d4d.png";function I(t){var e=t.data,n=null===e[0].email||null===e[0].phone||null===e[0].full_name;return Object(p.jsx)("div",{children:n?Object(p.jsxs)("div",{className:"div",children:[Object(p.jsx)("img",{src:C,alt:"",className:"errorrr"}),Object(p.jsx)("h1",{children:"File is not correction"})]}):Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"ID"}),Object(p.jsx)("td",{children:"Full Name"}),Object(p.jsx)("td",{children:"Phone"}),Object(p.jsx)("td",{children:"Email"}),Object(p.jsx)("td",{children:"Age"}),Object(p.jsx)("td",{children:"Experience"}),Object(p.jsx)("td",{children:"Yearly Income"}),Object(p.jsx)("td",{children:"Has children"}),Object(p.jsx)("td",{children:"License states"}),Object(p.jsx)("td",{children:"Expiration date"}),Object(p.jsx)("td",{children:"License number"}),Object(p.jsx)("td",{children:"Duplicate with"})]})}),Object(p.jsx)("tbody",{children:e.map((function(t,e){return Object(p.jsx)(w,{data:t,id:e+1},e)}))})]})})}n(22);var A=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={data:null},t.handleForce=function(e){return t.setState({data:e})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(h.a,{className:"react-csv-input",label:"\u0414\u043e\u0431\u0430\u0432\u0442\u044c\u0435 \u0441\u0432\u043e\u0439 \u0444\u0430\u0439\u043b \u0444\u043e\u0440\u043c\u0430\u0442\u0430 CSV",onFileLoaded:this.handleForce,parserOptions:{header:!0,dynamicTyping:!0,skipEmptyLines:!0,transformHeader:function(t){return t.toLowerCase().replace(/\W/g,"_")}}}),this.state.data&&Object(p.jsx)(I,{data:this.state.data})]})}}]),n}(r.Component);var _=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(A,{})})};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ba50e108.chunk.js.map