(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a(201)},106:function(e,t,a){},116:function(e,t){},118:function(e,t){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(51),s=a.n(i),c=(a(106),a(32)),o=a(33),l=a(37),u=a(34),m=a(38),p=a(100),h=a.n(p),d=a(14),f=a.n(d),g=a(13),b=a.n(g),v=a(52),w=a.n(v),y=a(94),E=a(99),k=a.n(E),x=(a(183),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).isMobile=function(){var e=new k.a(window.navigator).getOS();return e&&e.name&&(e.name.startsWith("Android")||e.name.startsWith("iOS"))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{style:{marginTop:"20px"}},r.a.createElement(f.a,{className:"justify-content-md-center"},r.a.createElement(b.a,{lg:10},r.a.createElement(w.a,{bg:"light",expand:"lg",style:{marginBottom:"20px"}},r.a.createElement(w.a.Brand,null,"WhatsApp Stickers Converter")))),r.a.createElement(f.a,{className:"justify-content-md-center"},r.a.createElement(b.a,{lg:10},r.a.createElement(y.a,{isMobile:this.isMobile()}))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},26:function(e,t,a){"use strict";a.d(t,"a",function(){return u}),a.d(t,"b",function(){return h}),a.d(t,"c",function(){return f});var n=a(10),r=a.n(n),i=a(15),s=a(112),c=a(113),o={};function l(e,t){return new Promise(function(a,n){if(null==e)return n();var r=document.createElement("canvas"),i=r.getContext("2d"),s=new Image;s.addEventListener("load",function(){r.width=s.width,r.height=s.height,i.drawImage(s,0,0,r.width,r.height);var e=i.getImageData(0,0,r.width,r.height);a(function(e,t){var a=o.create_buffer(e.width,e.height);Module.HEAP8.set(e.data,a),o.encode(a,e.width,e.height,t);var n=o.get_result_pointer(),r=o.get_result_size(),i=new Uint8Array(Module.HEAP8.buffer,n,r),s=new Uint8Array(i);return o.free_result(n),o.destroy_buffer(a),btoa(s.reduce(function(e,t){return e+String.fromCharCode(t)},""))}(e,Math.ceil(100*t)))},!1),s.src=e})}function u(e,t){return new Promise(function(a,n){if(null==e)return n();var r=document.createElement("canvas"),i=r.getContext("2d"),s=new Image;s.addEventListener("load",function(){r.width=s.width,r.height=s.height,i.drawImage(s,0,0,r.width,r.height),i.save(),i.beginPath(),i.arc(r.width-0-16,r.height-0-16,16,0,2*Math.PI),i.fillStyle="rgba(53, 67, 90, 0.85)",i.fill(),i.restore(),i.font="30px helvetica",i.textAlign="center",i.fillStyle="#f7f7f7",i.lineWidth=2,i.fillText("".concat(t),r.width-0-16,r.height-0-6),a(r.toDataURL("image/png"))},!1),s.src=e})}function m(e,t,a){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(r.a.mark(function e(t,a,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.read(t).then(function(e){return n?e.contain(a,a).getBase64Async(s.MIME_PNG).then(function(e){return l(e,1).then(function(){var t=Object(i.a)(r.a.mark(function t(a){var n,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=a,i=1;case 2:if(!(btoa(n).length>99999&&i>.2)){t.next=10;break}return i-=.08,console.error("WebP size ".concat(Math.ceil(btoa(n).length/1024),"kb exceeded 100kb, resizing with quality ").concat(i)),t.next=7,l(e,i);case 7:n=t.sent,t.next=2;break;case 10:return t.abrupt("return",n);case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}):e.contain(a,a).getBase64Async(s.MIME_PNG)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function h(e,t){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(r.a.mark(function e(t,a){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){var s=new FileReader;s.onloadend=Object(i.a)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"tray"!==a){t.next=9;break}return t.t0=e,t.next=5,m(s.result,96,!1);case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=15;break;case 9:if("stickers"!==a){t.next=15;break}return t.t2=e,t.next=13,m(s.result,512,!0);case 13:t.t3=t.sent,(0,t.t2)(t.t3);case 15:t.next=20;break;case 17:t.prev=17,t.t4=t.catch(0),n(t.t4);case 20:case"end":return t.stop()}},t,this,[[0,17]])})),s.readAsArrayBuffer(t)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.loadAsync(t).then(function(){var e=Object(i.a)(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],t.forEach(function(e){e.startsWith("__MACOSX")||!e.endsWith(".png")&&!e.endsWith(".jpg")||a.push(e)}),!(a.length<3)){e.next=4;break}throw new Error("Less than 3 images are found!");case 4:return e.next=6,t.file(a[0]).async("blob");case 6:return e.t0=e.sent,e.next=9,Promise.all(a.map(function(e){return t.file(e).async("blob")}));case 9:return e.t1=e.sent,e.abrupt("return",{trayFile:e.t0,stickersFiles:e.t1});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}Module.onRuntimeInitialized=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o={version:Module.cwrap("version","number",[]),create_buffer:Module.cwrap("create_buffer","number",["number","number"]),destroy_buffer:Module.cwrap("destroy_buffer","",["number"]),encode:Module.cwrap("encode","",["number","number","number","number"]),free_result:Module.cwrap("free_result","",["number"]),get_result_pointer:Module.cwrap("get_result_pointer","number",[]),get_result_size:Module.cwrap("get_result_size","number",[])},console.log("libwebp loaded, api version: ".concat(o.version()));case 2:case"end":return e.stop()}},e,this)}))},94:function(e,t,a){"use strict";(function(e){var n=a(95),r=a(10),i=a.n(r),s=a(39),c=a(15),o=a(32),l=a(33),u=a(37),m=a(34),p=a(38),h=a(0),d=a.n(h),f=a(5),g=a.n(f),b=a(14),v=a.n(b),w=a(13),y=a.n(w),E=a(36),k=a.n(E),x=a(98),F=a.n(x),C=a(97),j=a.n(C),M=a(35),S=a.n(M),I=a(96),O=a.n(I),_=a(26),z=a(164),P=function(t){function a(t){var r;return Object(o.a)(this,a),(r=Object(u.a)(this,Object(m.a)(a).call(this,t))).handleSubmit=function(e){e.preventDefault(),r.setState({progress:0,errorMsg:"",isSubmitting:!0,convertedPacks:[]});var t=r.state,a=t.identifier,n=t.name,o=t.publisher,l=t.zipFile,u=t.uploadType,m=r.state,p=m.trayFile,h=m.stickersFiles;Object(c.a)(i.a.mark(function e(){var t,c,m,d,f,g,b,v;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("zip"!==u){e.next=6;break}return e.next=3,Object(_.c)(l);case 3:t=e.sent,p=t.trayFile,h=t.stickersFiles;case 6:return e.next=8,Object(_.b)(p,"tray");case 8:c=e.sent,m=[],d=Math.ceil(h.length/30),f=[],g=0;case 13:if(!(g<d)){e.next=28;break}if(m.push([]),e.t0=f,1!==d){e.next=20;break}e.t1=c,e.next=23;break;case 20:return e.next=22,Object(_.a)(c,"".concat(g+1));case 22:e.t1=e.sent;case 23:e.t2=e.t1,e.t0.push.call(e.t0,e.t2);case 25:g++,e.next=13;break;case 28:b=0;case 29:if(!(b<h.length)){e.next=38;break}return e.next=32,Object(_.b)(h[b],"stickers");case 32:v=e.sent,r.setState({progress:(b+1)/h.length*100}),m[Math.floor(b/30)].push(v);case 35:b++,e.next=29;break;case 38:d>1&&m[d-1].length<3&&(m[d-1]=Object(s.a)(m[d-2].splice(-(3-m[d-1].length))).concat(Object(s.a)(m[d-1]))),m.map(function(e,t){return{identifier:a+(0===t?"":"_".concat(t+1)),name:n+(0===t?"":" (".concat(t+1,")")),publisher:o,tray_image:f[t].replace("data:image/png;base64,",""),stickers:e.map(function(e){return{image_data:e.replace("data:image/webp;base64,","")}})}}).forEach(function(e){r.setState(function(t){return{convertedPacks:Object(s.a)(t.convertedPacks).concat([e])}}),r.props.isMobile||r.handleDownload(e)}),r.setState({isSubmitting:!1});case 41:case"end":return e.stop()}},e,this)}))().catch(function(t){console.error(t),r.setState({errorMsg:t.message||e.toString(),isSubmitting:!1})})},r.handleFileChange=function(e,t){e.preventDefault(),"tray"===t?r.setState({trayFile:e.target.files[0]}):"stickers"===t?r.setState({stickersFiles:e.target.files}):"zip"===t&&r.setState({zipFile:e.target.files[0]})},r.handleInputChange=function(e){r.setState(Object(n.a)({},e.target.id,e.target.value))},r.handleDownload=function(t){var a=JSON.stringify(t);if(r.props.isMobile){var n="twemoji://json?data=".concat(encodeURIComponent(a));window.open(n)}else{var i="data:application/json;base64,".concat(e.from(a).toString("base64"));z(i,"".concat(t.identifier,".json"),"application/json")}},r.isFormValid=function(){return r.isIdentifierValid()&&r.state.identifier&&r.state.name&&r.state.publisher&&("image"===r.state.uploadType&&null!=r.state.trayFile&&r.state.stickersFiles&&r.state.stickersFiles.length>=3||"zip"===r.state.uploadType&&null!=r.state.zipFile)},r.isSubmittable=function(){return r.isFormValid()&&!r.state.isSubmitting},r.isIdentifierValid=function(){return/^[A-Za-z0-9-_.\s]*$/.test(r.state.identifier)},r.state={identifier:"",name:"",publisher:"",trayFile:null,stickersFiles:null,zipFile:null,isSubmitting:!1,progress:0,errorMsg:"",convertedPacks:[],uploadType:"image"},r}return Object(p.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){var e=this;return d.a.createElement(g.a,{onSubmit:function(t){return e.handleSubmit(t)}},d.a.createElement(g.a.Group,{as:v.a,controlId:"identifier"},d.a.createElement(g.a.Label,{column:!0,sm:4},"Identifier"),d.a.createElement(y.a,{sm:6},d.a.createElement(g.a.Control,{type:"text",required:!0,onChange:this.handleInputChange,isInvalid:!this.isIdentifierValid()}),d.a.createElement(g.a.Control.Feedback,{type:"invalid"},'Alphanumeric characters with ".", "_", "-" or " " only '))),d.a.createElement(g.a.Group,{as:v.a,controlId:"name"},d.a.createElement(g.a.Label,{column:!0,sm:4},"Pack Name"),d.a.createElement(y.a,{sm:6},d.a.createElement(g.a.Control,{type:"text",required:!0,onChange:this.handleInputChange}))),d.a.createElement(g.a.Group,{as:v.a,controlId:"publisher"},d.a.createElement(g.a.Label,{column:!0,sm:4},"Publisher"),d.a.createElement(y.a,{sm:6},d.a.createElement(g.a.Control,{type:"text",required:!0,onChange:this.handleInputChange}))),d.a.createElement(g.a.Group,{as:v.a,controlId:"uploadType"},d.a.createElement(g.a.Label,{column:!0,sm:4},"Upload Type"),d.a.createElement(y.a,{sm:8},d.a.createElement(O.a,null,d.a.createElement(j.a,{type:"radio",name:"options",value:this.state.uploadType,onChange:function(t){return e.handleInputChange({target:{id:"uploadType",value:t}})}},d.a.createElement(S.a,{value:"image"},"Image Files"),d.a.createElement(S.a,{value:"zip"},"Zip File"))))),"image"===this.state.uploadType?d.a.createElement("div",null,d.a.createElement(g.a.Group,{as:v.a,controlId:"formTrayFile"},d.a.createElement(g.a.Label,{column:!0,sm:4},"Tray Icon"),d.a.createElement(y.a,{sm:8},d.a.createElement("div",{className:"custom-file"},d.a.createElement(g.a.Control,{className:"custom-file-input",type:"file",required:!0,isValid:!1,onChange:function(t){return e.handleFileChange(t,"tray")},accept:"image/png, image/jpeg"}),d.a.createElement(g.a.Label,{className:"custom-file-label"},this.state.trayFile?this.state.trayFile.name:"Choose file (any resolution)")))),d.a.createElement(g.a.Group,{as:v.a,controlId:"formStickersFiles"},d.a.createElement(g.a.Label,{column:!0,sm:4},"Stickers (3 or more images)"),d.a.createElement(y.a,{sm:8},d.a.createElement("div",{className:"custom-file"},d.a.createElement(g.a.Control,{className:"custom-file-input",type:"file",required:!0,multiple:!0,onChange:function(t){return e.handleFileChange(t,"stickers")},accept:"image/png"}),d.a.createElement(g.a.Label,{className:"custom-file-label"},this.state.stickersFiles&&this.state.stickersFiles.length>0?"".concat(this.state.stickersFiles.length," file(s) selected"):"Choose file (any resolution)"))))):"zip"===this.state.uploadType?d.a.createElement(g.a.Group,{as:v.a,controlId:"formZipFile"},d.a.createElement(g.a.Label,{column:!0,sm:4},"Zip file"),d.a.createElement(y.a,{sm:8},d.a.createElement("div",{className:"custom-file"},d.a.createElement(g.a.Control,{className:"custom-file-input",type:"file",required:!0,multiple:!0,onChange:function(t){return e.handleFileChange(t,"zip")},accept:".zip"}),d.a.createElement(g.a.Label,{className:"custom-file-label"},this.state.zipFile?this.state.zipFile.name:"Choose file")))):null,d.a.createElement(k.a,{type:"submit",disabled:!this.isSubmittable()},"Convert Images"),d.a.createElement(F.a,{style:{transition:"none",marginTop:"15px"},now:this.state.progress,hidden:!this.state.isSubmitting&&!this.state.errorMsg,variant:this.state.errorMsg?"danger":""}),d.a.createElement("p",{className:this.state.errorMsg?"text-danger":"text-success",hidden:!this.state.errorMsg&&100!==this.state.progress},this.state.errorMsg||"Images converted!"),this.state.convertedPacks.map(function(t,a){return d.a.createElement("div",{style:{marginTop:"3px",marginBottom:"3px"}},d.a.createElement(k.a,{onClick:function(){return e.handleDownload(t)}},"JSON File ",a+1))}))}}]),a}(d.a.Component);t.a=P}).call(this,a(20).Buffer)}},[[101,2,1]]]);
//# sourceMappingURL=main.6e49dbbf.chunk.js.map