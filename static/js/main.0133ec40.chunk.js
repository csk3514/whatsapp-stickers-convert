(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){"use strict";(function(e){var n=a(37),r=a(11),s=a.n(r),i=a(40),c=a(15),l=a(16),o=a(18),u=a(17),m=a(19),h=a(14),p=a(0),f=a.n(p),d=a(5),g=a.n(d),b=a(12),y=a.n(b),E=a(10),k=a.n(E),w=a(38),v=a.n(w),C=a(54),x=a(55);function I(e){return console.log("png size"+btoa(e).length),new Promise(function(t,a){if(null==e)return a();var n=document.createElement("canvas"),r=n.getContext("2d"),s=new Image;s.addEventListener("load",function(){n.width=s.width,n.height=s.height,r.drawImage(s,0,0,n.width,n.height),t(n.toDataURL("image/webp"))},!1),s.src=e})}function j(e,t,a){return O.apply(this,arguments)}function O(){return(O=Object(h.a)(s.a.mark(function e(t,a,n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.read(t).then(function(e){return n?e.contain(a,a).getBase64Async(C.MIME_PNG).then(I):e.contain(a,a).getBase64Async(C.MIME_PNG)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function F(e,t){return _.apply(this,arguments)}function _(){return(_=Object(h.a)(s.a.mark(function e(t,a){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){var r=new FileReader;r.onloadend=Object(h.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("buffer size:"+r.result.byteLength),t.prev=1,"tray"!==a){t.next=10;break}return t.t0=e,t.next=6,j(r.result,96,!1);case 6:t.t1=t.sent,(0,t.t0)(t.t1),t.next=16;break;case 10:if("stickers"!==a){t.next=16;break}return t.t2=e,t.next=14,j(r.result,512,!0);case 14:t.t3=t.sent,(0,t.t2)(t.t3);case 16:t.next=21;break;case 18:t.prev=18,t.t4=t.catch(1),n(t.t4);case 21:case"end":return t.stop()}},t,this,[[1,18]])})),r.readAsArrayBuffer(t)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var N=function(t){function a(t){var r;return Object(c.a)(this,a),(r=Object(o.a)(this,Object(u.a)(a).call(this,t)))._handleSubmit=function(t){t.preventDefault(),Object(h.a)(s.a.mark(function t(){var a,n,c,l,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(r.state.trayFile,"tray");case 2:n=t.sent,c=[],l=0;case 5:if(!(l<r.state.stickersFiles.length)){t.next=14;break}return t.t0=c,t.next=9,F(r.state.stickersFiles[l],"stickers");case 9:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 11:l++,t.next=5;break;case 14:o={identifier:r.state.identifier,name:r.state.name,publisher:r.state.publisher,tray_image:n.replace("data:image/png;base64,",""),stickers:[]},(a=o.stickers).push.apply(a,Object(i.a)(c.map(function(e){return console.log("webp size"+btoa(e).length),{image_data:e.replace("data:image/webp;base64,","")}}))),x("data:application/json;base64,"+new e(JSON.stringify(o)).toString("base64"),"".concat(r.state.identifier,".json"),"application/json"),console.log(JSON.stringify(o));case 18:case"end":return t.stop()}},t,this)}))()},r._handleImageChange=function(e,t){e.preventDefault(),"tray"===t?r.setState({trayFile:e.target.files[0]}):"stickers"===t&&r.setState({stickersFiles:e.target.files})},r._handleInputChange=function(e){r.setState(Object(n.a)({},e.target.id,e.target.value))},r.state={identifier:"",name:"",publisher:"",trayFile:null,stickersFiles:null},r}return Object(m.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){var e=this;return f.a.createElement(g.a,{onSubmit:function(t){return e._handleSubmit(t)}},f.a.createElement(g.a.Group,{as:y.a,controlId:"identifier"},f.a.createElement(g.a.Label,{column:!0,sm:4},"Identifier"),f.a.createElement(k.a,{sm:6},f.a.createElement(g.a.Control,{type:"text",required:!0,onChange:this._handleInputChange,isInvalid:!/^[A-Za-z0-9-_.\s]*$/.test(this.state.identifier)}),f.a.createElement(g.a.Control.Feedback,{type:"invalid"},'Alphanumeric characters with ".", "_", "-" or " " only '))),f.a.createElement(g.a.Group,{as:y.a,controlId:"name"},f.a.createElement(g.a.Label,{column:!0,sm:4},"Pack Name"),f.a.createElement(k.a,{sm:6},f.a.createElement(g.a.Control,{type:"text",required:!0,onChange:this._handleInputChange}))),f.a.createElement(g.a.Group,{as:y.a,controlId:"publisher"},f.a.createElement(g.a.Label,{column:!0,sm:4},"Publisher"),f.a.createElement(k.a,{sm:6},f.a.createElement(g.a.Control,{type:"text",required:!0,onChange:this._handleInputChange}))),f.a.createElement(g.a.Group,{as:y.a,controlId:"formTrayFile"},f.a.createElement(g.a.Label,{column:!0,sm:4},"Tray Icon"),f.a.createElement(k.a,{sm:8},f.a.createElement("div",{className:"custom-file"},f.a.createElement(g.a.Control,{className:"custom-file-input",type:"file",required:!0,onChange:function(t){return e._handleImageChange(t,"tray")}}),f.a.createElement(g.a.Label,{className:"custom-file-label"},this.state.trayFile?this.state.trayFile.name:"Choose file (PNG, any resolution)")))),f.a.createElement(g.a.Group,{as:y.a,controlId:"formStickersFiles"},f.a.createElement(g.a.Label,{column:!0,sm:4},"Stickers (3 - 30 images)"),f.a.createElement(k.a,{sm:8},f.a.createElement("div",{className:"custom-file"},f.a.createElement(g.a.Control,{className:"custom-file-input",type:"file",required:!0,multiple:!0,onChange:function(t){return e._handleImageChange(t,"stickers")}}),f.a.createElement(g.a.Label,{className:"custom-file-label"},this.state.stickersFiles?"".concat(this.state.stickersFiles.length," file(s) selected"):"Choose file (PNG, any resolution)")))),f.a.createElement(v.a,{type:"submit"},"Convert Images"))}}]),a}(f.a.Component);t.a=N}).call(this,a(48).Buffer)},41:function(e,t,a){e.exports=a(92)},46:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),i=a.n(s),c=(a(46),a(15)),l=a(16),o=a(18),u=a(17),m=a(19),h=a(36),p=a(39),f=a.n(p),d=a(12),g=a.n(d),b=a(10),y=a.n(b),E=a(22),k=a.n(E),w=(a(71),function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{style:{marginTop:"20px"}},r.a.createElement(k.a,{bg:"light",expand:"lg",style:{marginBottom:"20px"}},r.a.createElement(k.a.Brand,null,"WhatsApp Sticker Converter")),r.a.createElement(g.a,{className:"justify-content-md-center"},r.a.createElement(y.a,{lg:8},r.a.createElement(h.a,null))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.0133ec40.chunk.js.map