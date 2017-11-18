webpackJsonp([26],{539:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=r(o),i=n(81),c=r(i),s=n(866),u=r(s);n(870);var l=n(232),f=n(237);t.default={namespace:"form",state:{step:{},regularFormSubmitting:!1,stepFormSubmitting:!1,advancedFormSubmitting:!1},effects:{submitRegularForm:c.default.mark(function e(t,n){var r=t.payload,o=n.call,a=n.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({type:"changeRegularFormSubmitting",payload:!0});case 2:return e.next=4,o(f.fakeSubmitForm,r);case 4:return e.next=6,a({type:"changeRegularFormSubmitting",payload:!1});case 6:u.default.success("\u63d0\u4ea4\u6210\u529f");case 7:case"end":return e.stop()}},e,this)}),submitStepForm:c.default.mark(function e(t,n){var r=t.payload,o=n.call,a=n.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({type:"changeStepFormSubmitting",payload:!0});case 2:return e.next=4,o(f.fakeSubmitForm,r);case 4:return e.next=6,a({type:"saveStepFormData",payload:r});case 6:return e.next=8,a({type:"changeStepFormSubmitting",payload:!1});case 8:return e.next=10,a(l.routerRedux.push("/form/step-form/result"));case 10:case"end":return e.stop()}},e,this)}),submitAdvancedForm:c.default.mark(function e(t,n){var r=t.payload,o=n.call,a=n.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({type:"changeAdvancedFormSubmitting",payload:!0});case 2:return e.next=4,o(f.fakeSubmitForm,r);case 4:return e.next=6,a({type:"changeAdvancedFormSubmitting",payload:!1});case 6:u.default.success("\u63d0\u4ea4\u6210\u529f");case 7:case"end":return e.stop()}},e,this)})},reducers:{saveStepFormData:function(e,t){var n=t.payload;return(0,a.default)({},e,{step:(0,a.default)({},e.step,n)})},changeRegularFormSubmitting:function(e,t){var n=t.payload;return(0,a.default)({},e,{regularFormSubmitting:n})},changeStepFormSubmitting:function(e,t){var n=t.payload;return(0,a.default)({},e,{stepFormSubmitting:n})},changeAdvancedFormSubmitting:function(e,t){var n=t.payload;return(0,a.default)({},e,{advancedFormSubmitting:n})}}},e.exports=t.default},580:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},581:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=n.n(r),a=n(123),i=n.n(a),c=n(0),s=(n.n(c),n(227)),u=n.n(s),l=n(229),f=function(e){var t=e.type,n=e.className,r=void 0===n?"":n,a=e.spin,s=u()(i()({anticon:!0,"anticon-spin":!!a||"loading"===t},"anticon-"+t,!0),r);return c.createElement("i",o()({},Object(l.a)(e,["type","spin"]),{className:s}))};t.default=f},797:function(e,t,n){"use strict";function r(){var e=[].slice.call(arguments,0);return 1===e.length?e[0]:function(){for(var t=0;t<e.length;t++)e[t]&&e[t].apply&&e[t].apply(this,arguments)}}t.a=r},866:function(e,t,n){"use strict";function r(e){if(l)return void e(l);i.a.newInstance({prefixCls:m,transitionName:"move-up",style:{top:u},getContainer:p},function(t){l=t,e(t)})}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,n=arguments[2],o=arguments[3],i={info:"info-circle",success:"check-circle",error:"cross-circle",warning:"exclamation-circle",loading:"loading"}[n];return"function"==typeof t&&(o=t,t=s),r(function(r){r.notice({key:f,duration:t,style:{},content:a.createElement("div",{className:m+"-custom-content "+m+"-"+n},a.createElement(c.default,{type:i}),a.createElement("span",null,e)),onClose:o})}),function(){var e=f++;return function(){l&&l.removeNotice(e)}}()}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=(n.n(a),n(867)),c=n(581),s=3,u=void 0,l=void 0,f=1,m="ant-message",p=void 0;t.default={info:function(e,t,n){return o(e,t,"info",n)},success:function(e,t,n){return o(e,t,"success",n)},error:function(e,t,n){return o(e,t,"error",n)},warn:function(e,t,n){return o(e,t,"warning",n)},warning:function(e,t,n){return o(e,t,"warning",n)},loading:function(e,t,n){return o(e,t,"loading",n)},config:function(e){void 0!==e.top&&(u=e.top,l=null),void 0!==e.duration&&(s=e.duration),void 0!==e.prefixCls&&(m=e.prefixCls),void 0!==e.getContainer&&(p=e.getContainer)},destroy:function(){l&&(l.destroy(),l=null)}}},867:function(e,t,n){"use strict";var r=n(868);t.a=r.a},868:function(e,t,n){"use strict";function r(){return"rcNotification_"+O+"_"+E++}var o=n(580),a=n.n(o),i=n(123),c=n.n(i),s=n(5),u=n.n(s),l=n(28),f=n.n(l),m=n(29),p=n.n(m),d=n(39),v=n.n(d),y=n(40),g=n.n(y),h=n(0),b=n.n(h),x=n(2),C=n.n(x),S=n(124),F=n.n(S),N=n(230),_=n(797),k=n(227),T=n.n(k),w=n(869),E=0,O=Date.now(),j=function(e){function t(){var e,n,o,a;f()(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return n=o=v()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={notices:[]},o.add=function(e){var t=e.key=e.key||r();console.log("add",e,t),o.setState(function(n){var r=n.notices;if(!r.filter(function(e){return e.key===t}).length)return{notices:r.concat(e)}})},o.remove=function(e){console.log("xxxxxx",e),o.setState(function(t){return console.log(t.notices),{notices:t.notices.filter(function(t){return t.key!==e})}})},a=n,v()(o,a)}return g()(t,e),p()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,r=this.state.notices.map(function(e){var r=Object(_.a)(t.remove.bind(t,e.key),e.onClose);return b.a.createElement(w.a,u()({prefixCls:n.prefixCls},e,{onClose:r}),e.content)}),o=(e={},c()(e,n.prefixCls,1),c()(e,n.className,!!n.className),e);return b.a.createElement("div",{className:T()(o),style:n.style},b.a.createElement(N.a,{transitionName:this.getTransitionName()},r))}}]),t}(h.Component);j.propTypes={prefixCls:C.a.string,transitionName:C.a.string,animation:C.a.oneOfType([C.a.string,C.a.object]),style:C.a.object},j.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},j.newInstance=function(e,t){function n(e){s||(s=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){console.log("remove",t),e.remove(t)},component:e,destroy:function(){F.a.unmountComponentAtNode(c),o||document.body.removeChild(c)}}))}var r=e||{},o=r.getContainer,i=a()(r,["getContainer"]),c=void 0;o?c=o():(c=document.createElement("div"),document.body.appendChild(c));var s=!1;F.a.render(b.a.createElement(j,u()({},i,{ref:n})),c)},t.a=j},869:function(e,t,n){"use strict";var r=n(123),o=n.n(r),a=n(28),i=n.n(a),c=n(29),s=n.n(c),u=n(39),l=n.n(u),f=n(40),m=n.n(f),p=n(0),d=n.n(p),v=n(227),y=n.n(v),g=n(2),h=n.n(g),b=function(e){function t(){var e,n,r,o;i()(this,t);for(var a=arguments.length,c=Array(a),s=0;s<a;s++)c[s]=arguments[s];return n=r=l()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.close=function(){r.clearCloseTimer(),r.props.onClose()},r.startCloseTimer=function(){r.props.duration&&(r.closeTimer=setTimeout(function(){r.close()},1e3*r.props.duration))},r.clearCloseTimer=function(){r.closeTimer&&(clearTimeout(r.closeTimer),r.closeTimer=null)},o=n,l()(r,o)}return m()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",r=(e={},o()(e,""+n,1),o()(e,n+"-closable",t.closable),o()(e,t.className,!!t.className),e);return d.a.createElement("div",{className:y()(r),style:t.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer},d.a.createElement("div",{className:n+"-content"},t.children),t.closable?d.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},d.a.createElement("span",{className:n+"-close-x"})):null)}}]),t}(p.Component);b.propTypes={duration:h.a.number,onClose:h.a.func,children:h.a.any},b.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}},t.a=b},870:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(228),o=(n.n(r),n(871));n.n(o)},871:function(e,t){}});