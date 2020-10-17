(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{216:function(e,a,t){e.exports=t(461)},221:function(e,a,t){},43:function(e,a,t){e.exports={DOMAIN:""}},461:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(31),c=t.n(l),o=(t(221),t(35)),i=t(60),u=t(464),s=t(74),m=(t(222),t(52)),d=t(54),E=t(465),p=t(42),f=t.n(p),g=t(43);var h=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],c=t[1],o=[{title:"Titulo",dataIndex:"titulo",key:"titulo"},{title:"URL",dataIndex:"url",key:"url",render:function(e,a,t){return r.a.createElement("a",{href:e},"Ir")}},{title:"precio",dataIndex:"precio",key:"precio",sortDirections:["ascend","descend"],sorter:function(e,a){return Number(e.precio)>Number(a.precio)},render:function(e,a,t){return e}},{title:"Cilindrada",dataIndex:"cilindrada",key:"cilindrada",sortDirections:["ascend","descend"],sorter:function(e,a){return Number(e.cilindrada)>Number(a.cilindrada)}},{title:"A\xf1o",dataIndex:"year",key:"year"},{title:"Kilometraje",dataIndex:"kilometraje",key:"kilometraje"},{title:"Ciudad",dataIndex:"ciudad",key:"ciudad"},{title:"Fecha",dataIndex:"fecha",key:"fecha"},{title:"Descripci\xf2n",dataIndex:"descripcion",key:"descripcion"}];return Object(n.useEffect)((function(){console.log("useEffect");var e="".concat(g.DOMAIN,"/api/yapomotos");f.a.get(e).then((function(e){var a=e.data;console.log(a),c(a)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{type:"primary",onClick:function(){console.log("onBtnScrape");var e="".concat(g.DOMAIN,"/scrapers/motos");f.a.get(e).then((function(e){var a=e.data.motos;console.log(a),c(a)}))}},"Scrape"),r.a.createElement(E.a,{dataSource:l,columns:o}))},k=t(469);var b=function(e){return r.a.createElement(s.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},r.a.createElement(s.a.SubMenu,{key:"sub1",icon:r.a.createElement(k.a,null),title:"Datos"},r.a.createElement(s.a.Item,{key:"1"},"Inicio")))},y=t(462),I=t(463),v=t(466),F=t(467),w=t(468),x=[{title:"Titulo",dataIndex:"titulo",key:"titulo"},{title:"URL",dataIndex:"url",key:"url",render:function(e,a,t){return r.a.createElement("a",{href:e},"Ir")}},{title:"Fecha publicaci\xf3n",dataIndex:"fecha_publicacion",key:"fecha_publicacion"},{title:"Precio",dataIndex:"precio",key:"precio"},{title:"Propuestas",dataIndex:"propuestas",key:"propuestas"},{title:"Descripci\xf3n",dataIndex:"descripcion",key:"descripcion"},{title:"Deadline",dataIndex:"deadline",key:"deadline"},{title:"Action",key:"action",render:function(e,a){return r.a.createElement(w.b,{size:"middle"},r.a.createElement(d.a,{onClick:function(){console.log("click");var e="".concat(g.DOMAIN,"/api/workana/").concat(a._id);f.a.delete(e).then((function(e){console.log(e)}))}},"Delete"),r.a.createElement(d.a,{onClick:function(){console.log("click");var e="".concat(g.DOMAIN,"/api/workana/").concat(a._id);f.a.put(e,{deshabilitado:!0}).then((function(e){console.log(e)}))}},"Deshabilitar"))}}],O={labelCol:{span:8},wrapperCol:{span:16}},C={wrapperCol:{offset:8,span:16}};var S=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title"},"Workana"),r.a.createElement(y.a,null,r.a.createElement(I.a,null,r.a.createElement(v.a,Object.assign({},O,{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("onBtnScrape"),console.log(e);var a=e.pages,t="".concat(g.DOMAIN,"/scrapers/workana").concat(a?"?pages="+a:"");f.a.get(t).then((function(e){var a=e.data.workana_jobs;console.log(a),c(a)}))},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(v.a.Item,{label:"Pages to scrap",name:"pages"},r.a.createElement(F.a,null)),r.a.createElement(v.a.Item,C,r.a.createElement(d.a,{type:"primary",htmlType:"submit"},"Submit"))))),r.a.createElement(E.a,{dataSource:l,columns:x}))},D=t(470);var j=function(e){return r.a.createElement(s.a,{mode:"inline",style:{height:"100%",borderRight:0}},r.a.createElement(s.a.SubMenu,{key:"sub1",icon:r.a.createElement(k.a,null),title:"Scrape"},r.a.createElement(s.a.Item,{key:"1"},r.a.createElement(i.b,{to:"/workana"},"Scraping")),r.a.createElement(s.a.Item,{key:"2"},r.a.createElement(i.b,{to:"/workana/mongo"},"Visualizar Mongo"))),r.a.createElement(s.a.SubMenu,{key:"sub2",icon:r.a.createElement(D.a,null),title:"Graficos"},r.a.createElement(s.a.Item,{key:"3"},r.a.createElement(i.b,{to:"/workana/grafs"},"Graficos"))))};var N=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)((function(){console.log("useEffect");var e="".concat(g.DOMAIN,"/api/workana/filtrar_scraper");f.a.get(e).then((function(e){console.log(e);var a=e.data;console.log(a),c(a)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title"},"Workana Mongo"),r.a.createElement(E.a,{dataSource:l,columns:x}))},A=t(147),M=t.n(A),B=t(209),R=[{title:"detalles",dataIndex:"url",key:"0",render:function(e,a,t){var n="https://www.infosubvenciones.es/bdnstrans/GE/es/convocatoria/".concat(a[7]);return r.a.createElement("a",{href:n},n)}},{title:"Administracion",dataIndex:"1",key:"1"},{title:"Departamento",dataIndex:"2",key:"2"},{title:"\xd3rgano",dataIndex:"3",key:"3"},{title:"Fecha de Registro",dataIndex:"4",key:"4"},{title:"T\xedtulo de la convocatoria",dataIndex:"5",key:"5"},{title:"BB Reguladoras",dataIndex:"6",key:"6"},{title:"ID BDNS",dataIndex:"7",key:"7"}],_={labelCol:{span:8},wrapperCol:{span:16}},T={wrapperCol:{offset:8,span:16}};var W=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],c=t[1];function o(){return(o=Object(B.a)(M.a.mark((function e(a){var t,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("click"),t=a.pages,n="".concat(g.DOMAIN,"/scrapers/extra").concat(t?"?pages="+t:""),f.a.get(n).then((function(e){var a=e.data.rows;console.log(a),c(a)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title"},"Extra"),r.a.createElement(y.a,null,r.a.createElement(I.a,null,r.a.createElement(v.a,Object.assign({},_,{name:"basic",initialValues:{remember:!0},onFinish:function(e){return o.apply(this,arguments)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(v.a.Item,{label:"Pages to scrap",name:"pages"},r.a.createElement(F.a,null)),r.a.createElement(v.a.Item,T,r.a.createElement(d.a,{type:"primary",htmlType:"submit"},"Submit"))))),r.a.createElement(y.a,null,r.a.createElement(E.a,{dataSource:l,columns:R})))},G=t(210);var K=function(e){var a=Object(n.useState)({labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]}),t=Object(m.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)((function(){console.log("useEffect");var e="".concat(g.DOMAIN,"/api/workana/grafs_data");f.a.get(e).then((function(e){var a=e.data,t=a.filter((function(e){return e.titulo.match(/commerce/gi)})).length,n=a.filter((function(e){return e.titulo.match(/scrap/gi)})).length,r=a.filter((function(e){return e.titulo.match(/laravel/gi)})).length,l=a.filter((function(e){return e.titulo.match(/python/gi)})).length,o=a.filter((function(e){return e.titulo.match(/rails/gi)})).length;c({labels:["commerce","scrap","laravel","python","rails"],datasets:[{data:[t,n,r,l,o],backgroundColor:["#FF6384","#36A2EB","#FFCE56","#8463FF","#56CEFF"],hoverBackgroundColor:["#DF6384","#06A2CB","#DFCE56","#6463FF","#36CEFF"]}]})}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title"},"Cuentas"),r.a.createElement(G.Doughnut,{data:l}))},P=u.a.Footer,z=u.a.Content,V=u.a.Header,J=u.a.Sider;var L=function(){return console.log(o.f.pathname),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(V,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(s.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[]},r.a.createElement(s.a.Item,{key:"1"},r.a.createElement(i.b,{to:"/"},"Motos")),r.a.createElement(s.a.Item,{key:"2"},r.a.createElement(i.b,{to:"/workana"},"Workana")),r.a.createElement(s.a.Item,{key:"3"},r.a.createElement(i.b,{to:"/extra"},"Extra")))),r.a.createElement(u.a,null,r.a.createElement(J,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/workana"},r.a.createElement(j,null)),r.a.createElement(o.a,{path:"/extra"},r.a.createElement("h1",null,"Nada")),r.a.createElement(o.a,{path:"/"},r.a.createElement(b,null)))),r.a.createElement(z,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/workana/grafs"},r.a.createElement(K,null)),r.a.createElement(o.a,{path:"/workana/mongo"},r.a.createElement(N,null)),r.a.createElement(o.a,{path:"/extra"},r.a.createElement(W,null)),r.a.createElement(o.a,{path:"/workana"},r.a.createElement(S,null)),r.a.createElement(o.a,{path:"/"},r.a.createElement(h,null))))),r.a.createElement(P,null,"Footer")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[216,1,2]]]);
//# sourceMappingURL=main.310e3a4f.chunk.js.map