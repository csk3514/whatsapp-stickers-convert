(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){"use strict";(function(e){var a=n(13),r=n(1),i=n.n(r),c=n(14),s=n(4),u=n(5),l=n(8),o=n(6),p=n(7),h=n(3),m=n(0),f=n.n(m),d=n(28),b=n(29);function g(e){return new Promise(function(t,n){if(null==e)return n();var a=document.createElement("canvas"),r=a.getContext("2d"),i=new Image;i.addEventListener("load",function(){a.width=i.width,a.height=i.height,r.drawImage(i,0,0,a.width,a.height),t(a.toDataURL("image/webp",1))},!1),i.src=e})}function v(e,t,n){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(i.a.mark(function e(t,n,a){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.read(t).then(function(e){return a?e.contain(n,n).getBase64Async(d.MIME_PNG).then(g):e.contain(n,n).getBase64Async(d.MIME_PNG)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function k(e,t){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(i.a.mark(function e(t,n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,a){var r=new FileReader;r.onloadend=Object(h.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"tray"!==n){t.next=9;break}return t.t0=e,t.next=5,v(r.result,96,!1);case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=15;break;case 9:if("stickers"!==n){t.next=15;break}return t.t2=e,t.next=13,v(r.result,512,!0);case 13:t.t3=t.sent,(0,t.t2)(t.t3);case 15:t.next=20;break;case 17:t.prev=17,t.t4=t.catch(0),a(t.t4);case 20:case"end":return t.stop()}},t,this,[[0,17]])})),r.readAsArrayBuffer(t)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var E=function(t){function n(t){var r;return Object(s.a)(this,n),(r=Object(l.a)(this,Object(o.a)(n).call(this,t)))._handleSubmit=function(t){t.preventDefault(),Object(h.a)(i.a.mark(function t(){var n,a,s,u,l;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(r.state.trayFile,"tray");case 2:a=t.sent,s=[],u=0;case 5:if(!(u<r.state.stickersFiles.length)){t.next=14;break}return t.t0=s,t.next=9,k(r.state.stickersFiles[u],"stickers");case 9:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 11:u++,t.next=5;break;case 14:l={identifier:r.state.identifier,name:r.state.name,publisher:r.state.publisher,tray_image:a.replace("data:image/png;base64,",""),stickers:[]},(n=l.stickers).push.apply(n,Object(c.a)(s.map(function(e){return{image_data:e.replace("data:image/webp;base64,","")}}))),b("data:application/json;base64,"+new e(JSON.stringify(l)).toString("base64"),"".concat(r.state.identifier,".json"),"application/json"),console.log(JSON.stringify(l));case 18:case"end":return t.stop()}},t,this)}))()},r._handleImageChange=function(e,t){e.preventDefault(),"tray"===t?r.setState({trayValue:e.target.value,trayFile:e.target.files[0]}):"stickers"===t&&r.setState({stickersValue:e.target.value,stickersFiles:e.target.files})},r._handleInputChange=function(e,t){r.setState(Object(a.a)({},t,e.target.value))},r.state={},r}return Object(p.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.imagePreviewUrl;return t?f.a.createElement("img",{src:t}):f.a.createElement("div",{className:"previewText"},"Please select an Image for Preview"),f.a.createElement("div",{className:"previewComponent"},f.a.createElement("form",{onSubmit:function(t){return e._handleSubmit(t)}},f.a.createElement("div",null,f.a.createElement("label",null,"Identifier:",f.a.createElement("input",{type:"text",onChange:function(t){return e._handleInputChange(t,"identifier")}}))),f.a.createElement("div",null,f.a.createElement("label",null,"Pack Name:",f.a.createElement("input",{type:"text",onChange:function(t){return e._handleInputChange(t,"name")}}))),f.a.createElement("div",null,f.a.createElement("label",null,"Publisher:",f.a.createElement("input",{type:"text",onChange:function(t){return e._handleInputChange(t,"publisher")}}))),f.a.createElement("div",null,f.a.createElement("label",null,"Tray Icon PNG:",f.a.createElement("input",{type:"file",onChange:function(t){return e._handleImageChange(t,"tray")}}))),f.a.createElement("div",null,f.a.createElement("label",null,"Stickers PNGs (3 - 30 images):",f.a.createElement("input",{type:"file",multiple:!0,onChange:function(t){return e._handleImageChange(t,"stickers")}}))),f.a.createElement("hr",null),f.a.createElement("button",{className:"submitButton",type:"submit",onClick:function(t){return e._handleSubmit(t)}},"Convert Images")))}}]),n}(f.a.Component);t.a=E}).call(this,n(22).Buffer)},15:function(e,t,n){e.exports=n(32)},20:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),c=n.n(i),s=(n(20),n(4)),u=n(5),l=n(8),o=n(6),p=n(7),h=n(2),m=n(12),f=(n(30),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={pictures:[]},n.onDrop=n.onDrop.bind(Object(h.a)(Object(h.a)(n))),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onDrop",value:function(e){this.setState({pictures:this.state.pictures.concat(e)})}},{key:"render",value:function(){return r.a.createElement(m.a,null)}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.fb2b7dc2.chunk.js.map