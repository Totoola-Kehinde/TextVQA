(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e){e.exports={a:[{name:"Amanpreet Singh",organization:"Facebook AI Research",website:"https://apsdehal.in",img_url:"https://visualqa.org/static/img/aman.jpg"},{name:"Vivek Natarajan",organization:"",website:"",img_url:"https://visualqa.org/static/img/vivek.jpg"},{name:"Meet Shah",organization:"Facebook AI Research",website:"https://meetshah1995.github.io",img_url:"https://visualqa.org/static/img/meet.jpg"},{name:"Tina Jiang",organization:"Facebook AI Research",website:"",img_url:"https://avatars3.githubusercontent.com/u/7904758?s=460&v=4"},{name:"Xinlei Chen",organization:"Facebook AI Research",website:"https://xinlei.xyz",img_url:"https://visualqa.org/static/img/xinlei.jpg"},{name:"Dhruv Batra",organization:"Facebook AI Research, Georgia Tech",website:"https://www.cc.gatech.edu/~dbatra/",img_url:"https://visualqa.org/static/img/dhruv.jpg"},{name:"Devi Parikh",organization:"Facebook AI Research, Georgia Tech",website:"https://www.cc.gatech.edu/~parikh/",img_url:"https://visualqa.org/static/img/devi.jpg"},{name:"Marcus Rohrbach",organization:"Facebook AI Research",website:"rohrbach.vision",img_url:"https://visualqa.org/static/img/marcus.jpg"}]}},264:function(e,t,a){e.exports=a(449)},269:function(e,t,a){},44:function(e){e.exports={b:"https://wv0rowsql4.execute-api.us-east-1.amazonaws.com/dev",a:"textvqa"}},445:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},446:function(e,t,a){},449:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),i=a.n(o),s=(a(269),a(28)),c=a(29),l=a(31),h=a(30),u=a(32),m=a(17),d=a(452),p=a(453),g=a(61),w=a.n(g),f=a(62),v=a.n(f),b=a(20),y=a.n(b),E=a(27),x=a.n(E),k=a(451),C=Object(m.createMuiTheme)({palette:{primary:{light:"#9ccc65",main:"#7cb342",dark:"#33691e",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}}),j={root:{width:"100%",flexGrow:1},grow:{flexGrow:1},buttonLink:{color:C.palette.primary.contrastText,textDecoration:"none"}};var O=Object(m.withStyles)(j)(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(w.a,{position:"static",color:"primary"},r.a.createElement(v.a,null,r.a.createElement(y.a,{variant:"h6",color:"inherit",align:"left",className:t.grow},r.a.createElement(k.a,{className:t.buttonLink,to:"/"},"TextVQA")),r.a.createElement(k.a,{className:t.buttonLink,to:"/explore"},r.a.createElement(x.a,{color:"inherit"},"Explore")))))}),A=a(70),S=a(43),_=a.n(S),I=a(42),R=a.n(I),M=a(66),q=a.n(M),B=a(41),N=a.n(B),z=a(24),F=a(11),T=a.n(F),Q=a(44),V=a(52),W=a(63),J=a.n(W),D=a(64),G=a.n(D),L=a(50),P=a.n(L),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).colors=["#e6194B","#3cb44b","#ffe119","#4363d8","#42d4f4","#f032e6","#469990","#9A6324","#800000","#aaffc3","#000075","#000000","#911eb4"],a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getColor",value:function(e){var t=e.charCodeAt(0)%this.colors.length;return this.colors[t]}},{key:"fitToContainer",value:function(e){e.style.width="100%",e.width=e.offsetWidth}},{key:"componentDidMount",value:function(){var e=this,t=this.refs.canvas;this.fitToContainer(t);var a=t.getContext("2d"),n=new Image;n.src=this.props.imageUrl,n.onload=function(){var t=e.drawImageScaled(n,a);if(a.globalAlpha=1,e.props.showBoxes){var r=t.centerShiftX,o=t.centerShiftY,i=t.newWidth,s=t.newHeight;for(var c in a.font="12px Lato",e.props.boxes){var l=e.props.boxes[c];l.coords[0]*=i,l.coords[1]*=s,l.coords[2]*=i,l.coords[3]*=s,l.coords[0]+=r,l.coords[1]+=o,a.fillStyle=e.getColor(l.word),a.strokeStyle=a.fillStyle,a.rotate(l.rotation*Math.pi/180),a.strokeRect.apply(a,Object(V.a)(l.coords)),a.fillText(l.word,l.coords[0],l.coords[1])}}}}},{key:"drawImageScaled",value:function(e,t){var a=t.canvas,n=a.width/e.width,r=n*e.height;a.style.height=r,a.height=r;var o=a.height/e.height,i=Math.min(n,o),s=(a.width-e.width*i)/2,c=(a.height-e.height*i)/2;return t.clearRect(0,0,a.width,a.height),t.drawImage(e,0,0,e.width,e.height,s,c,e.width*i,e.height*i),this.props.showBoxes&&(t.fillStyle="rgba(0, 0, 0, 0.2)",t.fillRect(s,c,e.width*i,e.height*i)),{centerShiftX:s,centerShiftY:c,newWidth:e.width*i,newHeight:e.height*i}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{ref:"canvas"}))}}]),t}(n.Component),X=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).seed=Math.round(1e4*Math.random()),a.getWidthForColumn=function(){var e={xs:"100",sm:"50",md:"33",lg:"20"},t="100";return Object.keys(e).forEach(function(n){Object(L.isWidthUp)(n,a.props.width)&&(t=e[n])}),t},a.chunkArray=function(e,t){for(var a=[],n=Math.ceil(e.length/t),r=0;r<e.length;r+=n)a.push(e.slice(r,r+n));return a},a.renderCardComponents=function(e){if(0===e.length)return"";var t=[].concat(Object(V.a)(e.results),Object(V.a)(e.streamResults)).map(function(e){return a.renderCardComponent(e)}),n=a.getWidthForColumn(),o=Math.floor(100/n),i=a.chunkArray(t,o).map(function(e){return r.a.createElement("div",{key:Math.random(),style:{width:n+"%",float:"left"}},e)});return r.a.createElement("div",null,i)},a.getMaxAnswer=function(e){var t={};if(!e)return"";var a=e[0],n=1;for(var r in e){var o=e[r];t[o]?t[o]+=1:t[o]=1,t[o]>n&&(n=t[o],a=o)}return a},a.renderCardComponent=function(e){var t=Math.random(),n=[];for(var o in e.ocr_info){var i=e.ocr_info[o],s={coords:[i.bounding_box.top_left_x,i.bounding_box.top_left_y,i.bounding_box.width,i.bounding_box.height],rotation:i.bounding_box.rotation,word:i.word};n.push(s)}var c=a.getMaxAnswer(e.answers);return r.a.createElement("div",{key:t,className:a.props.classes.gridItem},r.a.createElement(J.a,{key:t,className:a.props.classes.card},r.a.createElement(U,{showBoxes:a.props.showOCRBoxes,imageUrl:e.flickr_300k_url,boxes:n}),r.a.createElement(G.a,{className:a.props.classes.cardContent},a.props.showQuestions?r.a.createElement(y.a,{variant:"subtitle1"},e.question):"",a.props.showAnswers&&c.length>0?r.a.createElement(y.a,{variant:"caption"},c):"")))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(z.d,{componentId:"result",dataField:"question",title:"Results",from:0,size:this.props.size||25,pagination:this.props.pagination||!1,showResultStats:this.props.showResultStats,loader:this.props.loader,react:this.props.reactValues,renderAllData:this.renderCardComponents,style:this.props.style||{}}))}}]),t}(n.Component),H=P()()(Object(m.withStyles)(function(e){return{gridItem:{padding:.5*e.spacing.unit,position:"relative",width:"100%",display:"inline-block"},cardContent:{paddingBottom:"4px !important"},card:{padding:2*e.spacing.unit,textAlign:"center"}}})(X)),Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).seed=Math.round(1e4*Math.random()),a.state={showOCRBoxes:!0,showQuestions:!0,showAnswers:!0,anchorEl:null},a.reactValues={and:["searchbox","set_name","image_classes","ocr_tokens","answers"]},a.updateQuery=function(e){var t=e.body;t=t.split("\n");var n=JSON.parse(t[1]);return n.query={function_score:{query:n.query,random_score:{seed:a.seed}}},t[1]=JSON.stringify(n),e.body=t.join("\n"),e},a.handleCheckboxChange=function(e){return function(t){a.setState(Object(A.a)({},e,t.target.checked))}},a.handleMenuButtonClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleMenuClose=function(){a.setState({anchorEl:null})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(z.c,{app:Q.a,url:Q.b,transformRequest:this.updateQuery},r.a.createElement(T.a,{container:!0,direction:"row",className:this.props.classes.root,justify:"center",alignItems:"center"},r.a.createElement(T.a,{item:!0,xs:12,md:6,lg:4},r.a.createElement(z.a,{componentId:"searchbox",dataField:"question",categoryField:"question",placeholder:"Search for questions",style:{padding:"5px"}})),r.a.createElement(T.a,{item:!0,xs:12,md:2,lg:1},r.a.createElement(z.b,{componentId:"set_name",dataField:"set_name",placeholder:"Choose set",showSearch:!1})),r.a.createElement(T.a,{item:!0,xs:12,md:2,lg:2},r.a.createElement(z.b,{componentId:"image_classes",dataField:"image_classes",placeholder:"Choose classes",showSearch:!1})),r.a.createElement(T.a,{item:!0,xs:12,md:2,lg:1},r.a.createElement(x.a,{variant:"contained",color:"primary",className:this.props.classes.optionsMenuButton,"aria-owns":this.state.anchorEl?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleMenuButtonClick},"Options"),r.a.createElement(q.a,{anchorEl:this.state.anchorEl,open:Boolean(this.state.anchorEl),onClose:this.handleMenuClose},r.a.createElement(N.a,null,r.a.createElement(R.a,{control:r.a.createElement(_.a,{checked:this.state.showOCRBoxes,onChange:this.handleCheckboxChange("showOCRBoxes"),value:"showOCRBoxes"}),label:"Show OCR boxes"})),r.a.createElement(N.a,null,r.a.createElement(R.a,{control:r.a.createElement(_.a,{checked:this.state.showQuestions,onChange:this.handleCheckboxChange("showQuestions"),value:"showQuestions"}),label:"Show questions"})),r.a.createElement(N.a,null,r.a.createElement(R.a,{control:r.a.createElement(_.a,{checked:this.state.showAnswers,onChange:this.handleCheckboxChange("showAnswers"),value:"showAnswers"}),label:"Show answers"})))),r.a.createElement(T.a,{item:!0,xs:12,md:6,lg:2},r.a.createElement(z.a,{componentId:"ocr_tokens",dataField:"ocr_tokens",categoryField:"ocr_tokens",placeholder:"Search for OCR tokens",style:{padding:"5px"}})),r.a.createElement(T.a,{item:!0,xs:12,md:6,lg:2},r.a.createElement(z.a,{componentId:"answers",dataField:"answers",categoryField:"answers",placeholder:"Search for Answers",style:{padding:"5px"}})),r.a.createElement(H,{showOCRBoxes:this.state.showOCRBoxes,showAnswers:this.state.showAnswers,showQuestions:this.state.showQuestions,reactValues:this.reactValues,showResultStats:!0,pagination:!1,size:25,style:{width:"90%",textAlign:"center"}})))}}]),t}(n.Component),$=Object(m.withStyles)(function(e){return{root:{flexGrow:1},optionsMenuButton:{width:"100%"}}})(Y),K=a(156),Z=a(36),ee=a.n(Z),te=a(67),ae=a.n(te),ne=a(51),re=a(157),oe=a(68),ie=a.n(oe),se=Object(m.withStyles)(function(e){return{avatar:{width:100,height:100,margin:"0 auto"},gridItem:{padding:2*e.spacing.unit}}})(function(e){var t=re.a.map(function(t){var a=Math.random();return r.a.createElement(T.a,{item:!0,key:a,xs:12,md:3,lg:2},r.a.createElement(ae.a,{href:t.website},r.a.createElement(ie.a,{className:e.classes.avatar,src:t.img_url})),r.a.createElement(ne.a,{variant:"subtitle1"},t.name),r.a.createElement(ne.a,{variant:"caption"},t.organization))});return r.a.createElement(T.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:16},t)}),ce=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={checked:!1},a.updateQuery=function(e){var t=e.body;t=t.split("\n");var n=JSON.parse(t[1]);return n.query={function_score:{query:n.query,random_score:{seed:a.seed}}},t[1]=JSON.stringify(n),e.body=t.join("\n"),e},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(T.a,{container:!0,className:e.mainContainer,direction:"row",justify:"center",alignItems:"center",style:{position:"relative"}},r.a.createElement("div",{style:{height:"50vh",backgroundColor:"rgba(0, 0, 0, 0.4)",width:"100%",zIndex:-10,position:"absolute"}}),r.a.createElement(z.c,{app:Q.a,url:Q.b,transformRequest:this.updateQuery,style:{height:"50vh",overflow:"auto",position:"relative"}},r.a.createElement(H,{showOCRBoxes:!0,showAnswers:!0,showResultStats:!1,showQuestions:!0,reactValues:{},pagination:!0,loader:"",size:15,style:{height:"50vh",zIndex:-20,size:10,position:"absolute",top:0,overflow:"hidden"}})),r.a.createElement(T.a,{container:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},justify:"center",alignItems:"center"},r.a.createElement(T.a,{item:!0,xs:12,md:8,lg:6,style:{position:"relative"}},r.a.createElement(ee.a,{className:e.paper,elevation:1},r.a.createElement(y.a,{variant:"h2"},"TextVQA"),r.a.createElement(y.a,{variant:"subtitle1"},"A dataset to benchmark visual reasoning based on text in images."),r.a.createElement(T.a,{style:{marginTop:"10px"},container:!0,direction:"row",justify:"center",alignItems:"center",spacing:16},r.a.createElement(T.a,{item:!0,xs:12,md:6},r.a.createElement(x.a,{variant:"contained",color:"primary"},"Explore")),r.a.createElement(T.a,{item:!0,xs:12,md:6},r.a.createElement(x.a,{variant:"contained",color:"primary"},"Download"))))))),r.a.createElement("div",{className:this.props.classes.people},r.a.createElement(y.a,{variant:"title",component:"h2",gutterBottom:!0,align:"left"},"People"),r.a.createElement(se,null)))}}]),t}(r.a.Component),le=Object(m.withStyles)(function(e){return{paper:Object(K.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),mainContainer:{backgroundImage:"radial-gradient( "+e.palette.primary.light+" 20% ,"+e.palette.primary.dark+" 100%)",opacity:.9,height:"50vh"},people:{width:"80%",margin:"0 auto"},root:{},divider:{color:"#888",width:"100%"},container:{padding:2*e.spacing.unit}}})(ce),he=(a(445),a(446),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.MuiThemeProvider,{theme:C},r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(O,null)),r.a.createElement("div",null,r.a.createElement(p.a,{path:"/",exact:!0,component:le}),r.a.createElement(p.a,{path:"/explore",component:$})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[264,2,1]]]);
//# sourceMappingURL=main.48d5d589.chunk.js.map