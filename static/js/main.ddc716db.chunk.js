(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,t,r){e.exports=r(17)},15:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(5),i=r.n(o),s=(r(15),r(1)),c=r.n(s),u=r(3),l=r(2),d=r(6),m=r(7),p=r(9),f=r(8),v=a.a.createContext(),h=a.a.createContext(),b=a.a.createContext(),g=function(){return a.a.createElement(v.Consumer,null,(function(e){var t=e.time,r=e.timerMethods,n=r.addMinute,o=r.subtractMinute,i=Math.floor(t/60),s=t%60;return document.title=s<10?"Panos Timer (".concat(i,":0").concat(s,")"):0===i&&0===s?"Panos Timer: Time's Up!":"Panos Timer (".concat(i,":").concat(s,")"),a.a.createElement("section",{id:"timer-container"},a.a.createElement("div",{className:"button minute-button",onClick:o},a.a.createElement("span",{id:"subtract-minute"},"-")),a.a.createElement("h1",{id:"timer"},s<10?"".concat(i,":0").concat(s):"".concat(i,":").concat(s)),a.a.createElement("div",{className:"button minute-button",onClick:n},a.a.createElement("span",{id:"add-minute"},"+")))}))},E=function(){return a.a.createElement(v.Consumer,null,(function(e){var t=e.timerMethods.switchTimers,r=e.started;return a.a.createElement("section",{id:"top-buttons",onClick:function(e){if(/button$/.test(e.target.id)&&!r){for(var n=document.getElementsByClassName("button"),a=0;a<n.length;a++){var o=n[a];(!/^start/.test(o.id)||/^stop/.test(o.id)||/^reset/.test(o.id))&&n[a].classList.remove("selected-button")}e.target.classList.add("selected-button");var i=e.target.id.split("-");t(i.filter((function(e,t){return t!==i.length-1})).join("-"))}}},a.a.createElement("div",{id:"pomodoro-button",className:"button selected-button"},"Pomodoro"),a.a.createElement("div",{id:"short-break-button",className:"button"},"Short Break"),a.a.createElement("div",{id:"long-break-button",className:"button"},"Long Break"))}))},y=function(){return a.a.createElement(v.Consumer,null,(function(e){var t=e.timerMethods,r=t.startTimer,n=t.stopTimer,o=t.resetTimer;return a.a.createElement("section",{id:"buttons",onClick:function(e){switch(e.target.id){case"start-button":return void r();case"stop-button":return void n();case"reset-button":return void o();default:return}}},a.a.createElement("div",{id:"start-button",className:"button"},"Start"),a.a.createElement("div",{id:"stop-button",className:"button"},"Stop"),a.a.createElement("div",{id:"reset-button",className:"button"},"Reset"))}))},k=function(){return a.a.createElement(h.Consumer,null,(function(e){e.file;var t=e.updateAudio;window.addEventListener("drop",(function(e){e.preventDefault()})),window.addEventListener("dragover",(function(e){e.preventDefault()}));return a.a.createElement("section",{id:"audio-upload",onDragEnter:function(e){e.stopPropagation(),e.preventDefault();var t=document.querySelector("#audio-upload");t.setAttribute("class","dragHover");var r=document.querySelector("label");r.classList.add("no-events"),t.addEventListener("dragleave",(function(e){e.stopPropagation(),e.preventDefault(),t.classList.remove("dragHover"),r.classList.remove("no-events")}))},onDrop:function(e){e.stopPropagation(),e.preventDefault(),document.querySelector("#audio-upload").classList.remove("dragHover"),document.querySelector("label").classList.remove("no-events");var r=e.dataTransfer.files[0];t(r),document.querySelector("label").innerText="Chosen file: ".concat(r.name)}},a.a.createElement("h3",{id:"upload-header",className:"no-events"},"Choose or drag and drop an audio file to play when the timer expires"),a.a.createElement("input",{type:"file",id:"audio-file",accept:"audio/*",className:"hidden no-events",onChange:function(e){var r=document.querySelector("#audio-file").files[0];t(r),document.querySelector("label").innerText="Chosen file: ".concat(r.name)}}),a.a.createElement("label",{htmlFor:"audio-file"},"Choose a file"))}))},T="user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-read-collaborative",w=function(){var e="https://accounts.spotify.com/authorize?response_type=code&client_id=9187cfe978434e1598f38549e635759a&scope="+encodeURIComponent(T)+"&show_dialog="+encodeURIComponent(!0)+"&redirect_uri="+encodeURIComponent("https://panosphl.github.io/spotify-react-pomodoro-timer"),t=function(){window.location=e};return a.a.createElement(b.Consumer,null,(function(e){return a.a.createElement("button",{id:"spotify-log-in",onClick:t,className:e?"no-events":"button"},a.a.createElement("img",{id:"spotify-logo",src:"https://1000logos.net/wp-content/uploads/2017/08/Spotify-Logo.png",alt:"Spotify logo"}),e?a.a.createElement("span",{id:"spotify-text"},"Logged In"):a.a.createElement("span",{id:"spotify-text"},"Log In to Spotify"))}))},S=a.a.createContext(),x=function(){return a.a.createElement(S.Consumer,null,(function(e){return e.length?a.a.createElement("div",{id:"error-container"},a.a.createElement("ul",null,e.map((function(e,t){return a.a.createElement("li",{key:"error-".concat(t+1)},e)})))):a.a.createElement("div",{id:"error-container",className:"hidden"})}))};var C=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{id:"top-container"},a.a.createElement(k,null),a.a.createElement(x,null),a.a.createElement(w,null)),a.a.createElement("div",{id:"center-screen"},a.a.createElement(E,null),a.a.createElement(g,null),a.a.createElement(y,null)))},L=function(e){Object(p.a)(r,e);var t=Object(f.a)(r);function r(){var e;return Object(d.a)(this,r),(e=t.call(this)).startTimer=Object(l.a)(c.a.mark((function t(){var r,n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.getErrLength(),!e.state.started){t.next=3;break}return t.abrupt("return");case 3:if(!e.state.token){t.next=18;break}return t.prev=4,t.next=7,fetch("https://api.spotify.com/v1/me/player/play",{method:"PUT",headers:{Authorization:"Bearer ".concat(e.state.token)}});case 7:if((n=t.sent).ok){t.next=12;break}return t.next=11,n.json();case 11:throw t.sent;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(4),console.log(t.t0),e.setState({errors:[].concat(Object(u.a)(e.state.errors),[t.t0.error.message])});case 18:a=e.state.errors.length>r?e.state.errors:[],e.setState({started:!0,errors:a},(function(){e.decrementTimer()}));case 20:case"end":return t.stop()}}),t,null,[[4,14]])}))),e.stopTimer=Object(l.a)(c.a.mark((function t(){var r,n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.getErrLength(),!e.state.token){t.next=15;break}return t.prev=2,t.next=5,fetch("https://api.spotify.com/v1/me/player/pause",{method:"PUT",headers:{Authorization:"Bearer ".concat(e.state.token)}});case 5:if((n=t.sent).ok){t.next=10;break}return t.next=9,n.json();case 9:throw t.sent;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),e.setState({errors:[].concat(Object(u.a)(e.state.errors),[t.t0.error.message])});case 15:a=e.state.errors.length>r?e.state.errors:[],e.setState({started:!1,errors:a},(function(){e.clearTimer()}));case 17:case"end":return t.stop()}}),t,null,[[2,12]])}))),e.addMinute=function(){e.setState({time:e.state.time+60})},e.subtractMinute=function(){e.state.time<60?e.setState({time:0}):e.setState({time:e.state.time-60})},e.resetTimer=function(){var t=[];if(!e.state.started)switch(e.state.timerType){case"pomodoro":return void e.setState({time:1500,errors:t});case"short-break":return void e.setState({time:300,errors:t});case"long-break":return void e.setState({time:600,errors:t});default:return}},e.decrementTimer=function(){e.state.started&&(e.interval=setInterval((function(){if(0===e.state.time)try{return e.state.audio.file.play(),void e.stopTimer()}catch(t){alert("There was an issue playing your audio file! Please provide one.")}e.setState({time:e.state.time-1})}),1e3))},e.clearTimer=function(){clearInterval(e.interval),e.interval=null},e.switchTimers=function(t){if(!e.state.started)switch(t){case"pomodoro":return void e.setState({timerType:t,time:1500});case"short-break":return void e.setState({timerType:t,time:300});case"long-break":return void e.setState({timerType:t,time:600});default:return}},e.updateAudio=function(t){var r=URL.createObjectURL(t),n=new Audio(r);e.setState({audio:{file:n,updateAudio:e.updateAudio}})},e.state={started:!1,timerType:"pomodoro",time:1500,timerMethods:{startTimer:e.startTimer,stopTimer:e.stopTimer,resetTimer:e.resetTimer,decrementTimer:e.decrementTimer,switchTimers:e.switchTimers,addMinute:e.addMinute,subtractMinute:e.subtractMinute},audio:{file:null,updateAudio:e.updateAudio},token:null,errors:[]},e}return Object(m.a)(r,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,r,n,a,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.token){e.next=2;break}return e.abrupt("return");case 2:if(!(t=window.location.toString()).includes("?code=")){e.next=24;break}for(a in r={grant_type:"authorization_code",code:t.split("?code=")[1],redirect_uri:"https://panosphl.github.io/spotify-react-pomodoro-timer",client_id:"9187cfe978434e1598f38549e635759a",client_secret:"347ae3daa1a44191965239420c55963c"},n=[],r)n.push("".concat(a,"=").concat(encodeURIComponent(r[a])));return e.prev=7,console.log(n),e.next=11,fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n.join("&")});case 11:return o=e.sent,e.next=14,o.json();case 14:if(i=e.sent,o.ok){e.next=17;break}throw i;case 17:this.setState({token:i.access_token}),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(7),console.log("https://panosphl.github.io/spotify-react-pomodoro-timer"),console.log(e.t0);case 24:case"end":return e.stop()}}),e,this,[[7,20]])})));return function(){return e.apply(this,arguments)}}()},{key:"getErrLength",value:function(){return this.state.errors.length}},{key:"render",value:function(){var e=Object.assign({},this.state);return delete e.audio,a.a.createElement(S.Provider,{value:this.state.errors},a.a.createElement(v.Provider,{value:e},a.a.createElement(h.Provider,{value:this.state.audio},a.a.createElement(b.Provider,{value:this.state.token},a.a.createElement(C,null)))))}}]),r}(a.a.Component);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ddc716db.chunk.js.map