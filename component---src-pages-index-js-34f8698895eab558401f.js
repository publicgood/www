(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+hPa":function(e,t,n){e.exports=n.p+"static/bg03-96965f1345ad626c180c0cb3d66324c0.jpg"},"2o5t":function(e,t,n){e.exports=n.p+"static/bg01-f219fa7113dd258d658d0a6ed99a57f5.jpg"},KssD:function(e,t,n){e.exports=n.p+"static/bg02-869af6d522ce9f72d82622850316ccec.jpg"},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),s=n.n(a),i=n("7oih"),o=n("obyI"),r=n.n(o);function c(){return s.a.createElement("footer",{id:"footer"},s.a.createElement("ul",{className:"icons"},r.a.socialLinks.map((function(e){e.icon;var t=e.name,n=e.url;return s.a.createElement("li",null,s.a.createElement("a",{href:n},s.a.createElement("span",{className:"label"},t)))}))))}function l(){return s.a.createElement("header",{id:"header"},s.a.createElement("h1",null,r.a.heading),s.a.createElement("p",null,r.a.subHeading))}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=n("dI71"),m=function(e){function t(){var t;return(t=e.call(this)||this).state={message:""},t.onSubmit=t.onSubmit.bind(u(t)),t}Object(p.a)(t,e);var n=t.prototype;return n.onSubmit=function(e){var t=this;e.preventDefault(),e.stopPropagation();var n=e.target,a=new FormData(n),s=new XMLHttpRequest;s.open(n.method,n.action),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?(n.reset(),t.setState({status:"SUCCESS",message:"Thank you!"}),setTimeout((function(){t.setState({message:""})}),3e3)):t.setState({status:"ERROR"}))},s.send(a)},n.render=function(){var e=this.state.message;return s.a.createElement("form",{id:"signup-form",onSubmit:this.onSubmit,method:"POST",action:"https://formspree.io/f/xgepzyje"},s.a.createElement("input",{type:"text",name:"_replyto",placeholder:"Stay tunned with your email"}),s.a.createElement("input",{type:"submit",value:"Sign Up"}),s.a.createElement("span",{className:(e?"visible success":"")+" message"},e))},t}(a.Component),d=function(e){function t(){var t;return(t=e.call(this)||this).state={pos:0,lastPos:0},t.rotateSlide=t.rotateSlide.bind(u(t)),t}Object(p.a)(t,e);var n=t.prototype;return n.rotateSlide=function(){var e=this,t=this.props.settings;setInterval((function(){var n=e.state,a=n.pos,s=n.lastPos;s=a,++a>=t.images.length&&(a=0),setTimeout((function(){s=a,e.setState({lastPos:s})}),t.delay/2),e.setState({lastPos:s,pos:a})}),t.delay)},n.componentDidMount=function(){this.rotateSlide()},n.render=function(){var e=this.state,t=e.pos,n=e.lastPos,a=this.props.settings;return s.a.createElement("div",{id:"bg"},a.images.map((function(e,a){return s.a.createElement("div",{key:e.url,style:{backgroundPosition:e.position,backgroundImage:'url("'+e.url+'")'},className:a===t?"visible top":a===n?"visible":""})})),";")},t}(a.PureComponent),f={images:[{url:n("2o5t"),position:"center"},{url:n("KssD"),position:"center"},{url:n("+hPa"),position:"center"}],delay:6e3};t.default=function(){return s.a.createElement(i.a,null,s.a.createElement(l,null),s.a.createElement(m,null),s.a.createElement(c,null),s.a.createElement(d,{settings:f}))}},obyI:function(e,t){e.exports={siteTitle:"PublicGood Foundation",manifestName:"PublicGood Foundation",manifestShortName:"PGF",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"www/",heading:"PublicGood Foundation",subHeading:"... enabling causes and accelerating startups delivering public good.",socialLinks:[{icon:"fa-hands-helping",name:"VolunteerMatch",url:"https://www.volunteermatch.org/search/org1187560.jsp"},{icon:"fa-github",name:"Github",url:"https://github.com/publicgood"},{icon:"fa-money-bill-wave",name:"GoFundMe",url:"https://github.com/publicgood"}]}}}]);
//# sourceMappingURL=component---src-pages-index-js-34f8698895eab558401f.js.map