(this["webpackJsonpparts-and-service"]=this["webpackJsonpparts-and-service"]||[]).push([[5],{108:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},109:function(e,t,n){var a=n(110),r=n(126),l=n(127),o=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?r(e):l(e)}},110:function(e,t,n){var a=n(124).Symbol;e.exports=a},116:function(e,t,n){e.exports={acco:"styles_acco__27fZ5","acco--white":"styles_acco--white__153BG",accoActive:"styles_accoActive__2RBj7",head:"styles_head__2Zmf7",top:"styles_top__15z3B",title:"styles_title__2DOSy",toggle:"styles_toggle__1x4US",toggleActive:"styles_toggleActive__1PtG5",arrow:"styles_arrow__K6D_x",label:"styles_label__2EM79",right:"styles_right__2GApb",body:"styles_body__2Scaz"}},117:function(e,t,n){e.exports={root:"styles_root__20VOb",row:"styles_row__1Dcm1",col:"styles_col__1LYRs"}},118:function(e,t,n){var a=n(119),r=n(120),l=n(130),o=Math.ceil,s=Math.max;e.exports=function(e,t,n){t=(n?r(e,t,n):void 0===t)?1:s(l(t),0);var c=null==e?0:e.length;if(!c||t<1)return[];for(var i=0,u=0,m=Array(o(c/t));i<c;)m[u++]=a(e,i,i+=t);return m}},119:function(e,t){e.exports=function(e,t,n){var a=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(n=n>r?r:n)<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var l=Array(r);++a<r;)l[a]=e[a+t];return l}},120:function(e,t,n){var a=n(121),r=n(122),l=n(129),o=n(108);e.exports=function(e,t,n){if(!o(n))return!1;var s=typeof t;return!!("number"==s?r(n)&&l(t,n.length):"string"==s&&t in n)&&a(n[t],e)}},121:function(e,t){e.exports=function(e,t){return e===t||e!==e&&t!==t}},122:function(e,t,n){var a=n(123),r=n(128);e.exports=function(e){return null!=e&&r(e.length)&&!a(e)}},123:function(e,t,n){var a=n(109),r=n(108);e.exports=function(e){if(!r(e))return!1;var t=a(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},124:function(e,t,n){var a=n(125),r="object"==typeof self&&self&&self.Object===Object&&self,l=a||r||Function("return this")();e.exports=l},125:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(56))},126:function(e,t,n){var a=n(110),r=Object.prototype,l=r.hasOwnProperty,o=r.toString,s=a?a.toStringTag:void 0;e.exports=function(e){var t=l.call(e,s),n=e[s];try{e[s]=void 0;var a=!0}catch(c){}var r=o.call(e);return a&&(t?e[s]=n:delete e[s]),r}},127:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},128:function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},129:function(e,t){var n=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var a=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==a||"symbol"!=a&&n.test(e))&&e>-1&&e%1==0&&e<t}},130:function(e,t,n){var a=n(131);e.exports=function(e){var t=a(e),n=t%1;return t===t?n?t-n:t:0}},131:function(e,t,n){var a=n(132);e.exports=function(e){return e?(e=a(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}},132:function(e,t,n){var a=n(108),r=n(133),l=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,i=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=s.test(e);return n||c.test(e)?i(e.slice(2),n?2:8):o.test(e)?NaN:+e}},133:function(e,t,n){var a=n(109),r=n(134);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==a(e)}},134:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},135:function(e,t,n){e.exports={hint:"styles_hint__1ji5w",icon:"styles_icon__2SH36",body:"styles_body__2dWhY",head:"styles_head__32Lyg","body--left":"styles_body--left__paCx2",content:"styles_content__2IwCG","body--right":"styles_body--right__3dKhk"}},136:function(e,t,n){e.exports={row:"styles_row__21U3Q",col:"styles_col__1Aku8",section:"styles_section__3qHuB",item:"styles_item__2o7vp",hint:"styles_hint__Kblt0",name:"styles_name__3Kv9i",value:"styles_value__3vWYs",persent:"styles_persent__3gLxt","persent--down":"styles_persent--down__34gRX",arrow:"styles_arrow__1pK1V","persent--up":"styles_persent--up__3726d","persent--default":"styles_persent--default__10SdB"}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"Statistic",(function(){return F}));var a=n(0),r=n.n(a),l=n(18),o=n(2),s=n(27),c=n(7),i=n.n(c),u=n(57),m=n(116),f=n.n(m),d=function(e){var t=e.title,n=e.rightPart,l=e.initialState,c=void 0===l||l,m=e.label,d=e.skin,v=e.content,p=Object(a.useState)(c),_=Object(s.a)(p,2),b=_[0],y=_[1];return r.a.createElement("div",{className:i()(f.a.acco,f.a["acco--".concat(d)],Object(o.a)({},f.a.accoActive,b))},r.a.createElement("div",{className:f.a.head},r.a.createElement("div",{className:f.a.left},r.a.createElement("div",{className:f.a.top},r.a.createElement("div",{className:f.a.title},t),r.a.createElement("div",{onClick:function(){y(!b)},className:i()(f.a.toggle,Object(o.a)({},f.a.toggleActive,b))},b?"hide":"show",r.a.createElement(u.a,{className:f.a.arrow}))),m&&r.a.createElement("div",{className:f.a.label},m)),n&&b&&r.a.createElement("div",{className:f.a.right},n)),b&&r.a.createElement("div",{className:f.a.body},v))},v=Object(a.memo)(d),p=n(43),_=n(58),b=n(117),y=n.n(b),h=function(){return r.a.createElement("div",{className:y.a.root},r.a.createElement("div",{className:y.a.row},r.a.createElement("div",{className:y.a.col},r.a.createElement(_.a,{name:"Data Range",value:"",onChange:function(e){},label:"Data Range",placeholder:"Enter the preset name"})),r.a.createElement("div",{className:y.a.col},r.a.createElement(_.a,{name:"Geo",value:"",onChange:function(e){},label:"Geo",placeholder:"Enter the preset name"})),r.a.createElement("div",{className:y.a.col},r.a.createElement(_.a,{name:"Brands",value:"",onChange:function(e){},label:"Brands",placeholder:"Enter the preset name"}))))},E=Object(a.memo)(h),g=n(118),w=n.n(g);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.00007 16.6522C13.2263 16.6522 16.6522 13.2263 16.6522 9.00007C16.6522 4.7739 13.2263 1.3479 9.00007 1.3479C4.7739 1.3479 1.3479 4.7739 1.3479 9.00007C1.3479 13.2263 4.7739 16.6522 9.00007 16.6522Z",strokeLinecap:"round",strokeLinejoin:"round"}),k=r.a.createElement("path",{d:"M8.9715 8.30444V12.4784",strokeLinecap:"round",strokeLinejoin:"round"}),x=r.a.createElement("path",{d:"M8.97141 6.21748C9.35561 6.21748 9.66706 5.90602 9.66706 5.52182C9.66706 5.13763 9.35561 4.82617 8.97141 4.82617C8.58721 4.82617 8.27576 5.13763 8.27576 5.52182C8.27576 5.90602 8.58721 6.21748 8.97141 6.21748Z"}),S=function(e){var t=e.svgRef,n=e.title,a=N(e,["svgRef","title"]);return r.a.createElement("svg",j({width:18,height:18,viewBox:"0 0 18 18",fill:"none",ref:t},a),n?r.a.createElement("title",null,n):null,O,k,x)},C=r.a.forwardRef((function(e,t){return r.a.createElement(S,j({svgRef:t},e))})),A=(n.p,n(135)),L=n.n(A),R=function(e){var t,n=e.content,a=e.isRight,l=e.isLeft;return r.a.createElement("div",{className:L.a.hint},r.a.createElement("div",{className:L.a.head},r.a.createElement(C,{className:L.a.icon})),r.a.createElement("div",{className:i()(L.a.body,(t={},Object(o.a)(t,L.a["body--left"],l),Object(o.a)(t,L.a["body--right"],a),t))},r.a.createElement("div",{className:L.a.content,dangerouslySetInnerHTML:{__html:n}})))},M=Object(a.memo)(R),P=n(136),D=n.n(P),T=[{key:"clicks",name:"Clicks",value:2140,persent:4.821,state:"down",info:"<b>Impressions</b> - Number of times the ad was presented to the users. Clicks - Number of times the ad was clicked on by the user. The trend is the difference between the time frame currently displayed and the equivalent preceding time frame."},{key:"leads",name:"Leads",value:937420,persent:2.1,state:"up"},{key:"epc",name:"EPC",value:368e4,persent:77,state:"up"},{key:"epl",name:"EPL",value:20148,persent:102,state:"up",info:"<b>Impressions</b> - Number of times the ad was presented to the users. Clicks - Number of times the ad was clicked on by the user. The trend is the difference between the time frame currently displayed and the equivalent preceding time frame."},{key:"approved_leads",name:"Approved leads",value:2140,persent:69,state:"down"},{key:"revenue",name:"Revenue",value:937420,persent:120,info:"<b>Impressions</b> - Number of times the ad was presented to the users. Clicks - Number of times the ad was clicked on by the user. The trend is the difference between the time frame currently displayed and the equivalent preceding time frame."}],B=function(){var e=Object(a.useCallback)((function(e,t){return e?e.map((function(e,n){var a=e.key,l=e.name,o=e.value,s=(e.persent,e.state,e.info),c=0===t&&0===n,i=2===t&&1===n;return r.a.createElement("div",{className:D.a.item,key:a},s&&r.a.createElement("div",{className:D.a.hint},r.a.createElement(M,{content:s,isRight:i,isLeft:c})),r.a.createElement("div",{className:D.a.name},l),r.a.createElement("div",{className:D.a.value},function(e){if(e>1e6){var t,n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}];for(t=n.length-1;t>0&&!(e>=n[t].value);t--);return(e/n[t].value).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n[t].symbol}return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}(o)))})):null}),[]),t=Object(a.useMemo)((function(){return w()(T,2).map((function(t,n){return t?r.a.createElement("div",{className:D.a.col,key:n},r.a.createElement("div",{className:D.a.section},e(t,n))):null}))}),[e]);return T?r.a.createElement("div",{className:D.a.common},r.a.createElement("div",{className:D.a.row},t)):null},G=Object(a.memo)(B),$=n(8),I=n(23),F=function(){var e=Object($.a)({showModal:I.d.showModal,authUser:I.b.authUser,login:I.b.login}),t=function(e){var t=e.presetName;console.log("onClickDelete Statistic",t)},n=function(e){var t=e.value;console.log("onClickSave Statistic",t)};return r.a.createElement(a.Fragment,null,r.a.createElement(E,null),r.a.createElement(v,{title:"Compressed metrics \u2014 table",initialState:!0,content:r.a.createElement(G,null)}),r.a.createElement(v,{title:"Compressed metrics \u2014 graphic",skin:"white"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{text:"DELETE_PRESET_MODAL",skin:"yellow",disabled:!1,onClick:function(){e.showModal(l.b.DELETE_PRESET_MODAL,{presetName:123132,onClickDelete:t})}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{text:"SAVE_PRESET_MODAL",skin:"red",disabled:!1,onClick:function(){e.showModal(l.b.SAVE_PRESET_MODAL,{onClickSave:n})}}))};t.default=Object(a.memo)(F)}}]);
//# sourceMappingURL=5.6e71f870.chunk.js.map