(this.webpackJsonpone=this.webpackJsonpone||[]).push([[0],{140:function(e,t,a){e.exports=a(425)},144:function(e,t,a){},38:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),s=(a(144),a(22)),i=a.n(s),l=a(35),u=a(56),m=a(57),d=a(62),v=a(59),p=(a(38),{width:"500px"}),h=function(e){var t=e.data;return console.log("no way",t),r.a.createElement("div",{className:p},r.a.createElement("div",null,t.title),r.a.createElement("div",null,t.rated),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},f=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).openMovie=function(){e.setState({imdbID:e.props},(function(){e.fetchId()}))},e.fetchId=Object(l.a)(i.a.mark((function t(){var a,n,r,c,o,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.imdbID,r=a.movie,console.log("imdbID  asdasd",n.id),c="https://www.omdbapi.com/?i=".concat(n.id,"&plot=full&apikey=cb289192"),t.next=5,fetch(c);case 5:return o=t.sent,t.next=8,o.json();case 8:s=t.sent,e.setState({movie:s}),console.log("movie",r);case 11:case"end":return t.stop()}}),t)}))),e.state={imdbID:"",movie:[]},e}return Object(m.a)(a,[{key:"render",value:function(){this.state.movie;if(console.log("asdasdasdasda"),0===this.state.imdbID.length)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:this.openMovie,className:"open"},">  "),r.a.createElement(h,{data:this.state.movie}),r.a.createElement("div",null,"asdasdasdasd"))}}]),a}(r.a.Component);var g=function(e){var t=e.data.Search;return 0!==e.data.length?r.a.createElement("div",{className:"main-poster"},t.map((function(e,t){return r.a.createElement("div",{key:t,className:"movie"},r.a.createElement("img",{src:e.Poster}),r.a.createElement("div",null,"Title: ",e.Title),r.a.createElement("div",null,"Year: ",e.Year),r.a.createElement("div",null,"Type: ",e.Type),r.a.createElement(f,{id:e.imdbID}))}))):r.a.createElement("div",null,"Search for movies")},b=a(60),w=(a(145),a(442)),E=a(444),j=Object(w.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(2)}}}})),P=function(e){var t=e.page,a=t.data,n=(t.whatPage,e.saveCurrentPage);console.log("this is props from pagination",e);var c=a.totalResults&&Math.ceil(a.totalResults/10),o=j(),s=r.a.useState(1),i=Object(b.a)(s,2),l=i[0],u=i[1];return r.a.createElement("div",{className:o.root},r.a.createElement(E.a,{count:c,page:l,onChange:function(e,t){u(t),n(t)}}))},S=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),c=a[0],o=a[1],s=e.saveToState,u=e.currentPage,m=e.saveCurrentPage,d=e.page,v=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://www.omdbapi.com/?s=".concat(c,"&page=").concat(u,"&apikey=cb289192"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,s(r,c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:v,className:"navBar"},r.a.createElement("div",{className:"inner-search"},r.a.createElement("input",{type:"text",value:c,onChange:function(e){o(e.target.value)},className:"nav-input",placeholder:"Search for movies..."}),r.a.createElement("button",{type:"submit",className:"nav-button"},"Search")),r.a.createElement(P,{className:"form-paging",saveCurrentPage:m,page:d}))},y=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).saveToState=function(t,a){e.setState({data:t}),e.setState({searchedWord:a})},e.saveCurrentPage=function(t){e.setState({whatPage:t},(function(){e.handlePage()}))},e.handlePage=function(){var t=Object(l.a)(i.a.mark((function t(a){var n,r,c,o,s,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,r=n.whatPage,c=n.searchedWord,console.log("whatPage",r),o="https://www.omdbapi.com/?s=".concat(c,"&page=").concat(r,"&apikey=cb289192"),t.next=5,fetch(o);case 5:return s=t.sent,t.next=8,s.json();case 8:l=t.sent,e.setState({data:l});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={data:[],whatPage:1,searchedWord:""},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(S,{currentPage:this.state.whatPage,saveToState:this.saveToState,page:this.state,saveCurrentPage:this.saveCurrentPage}),r.a.createElement(g,{data:this.state.data,selectMovie:this.selectMovie}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[140,1,2]]]);
//# sourceMappingURL=main.1348d3e2.chunk.js.map