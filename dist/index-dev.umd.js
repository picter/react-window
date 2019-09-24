!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","react","react-dom"],t):t((e=e||self).ReactWindow={},e.React,e.ReactDOM)}(this,function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=function(e,t){return e.length===t.length&&e.every(function(e,n){return r=e,o=t[n],r===o;var r,o})};function l(e,t){var n;void 0===t&&(t=a);var r,o=[],i=!1;return function(){for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return i&&n===this&&t(l,o)?r:(r=e.apply(this,l),i=!0,n=this,o=l,r)}}var s="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function c(e){cancelAnimationFrame(e.id)}function u(e,t){var n=s();var r={id:requestAnimationFrame(function o(){s()-n>=t?e.call(null):r.id=requestAnimationFrame(o)})};return r}var d=-1;var f=null;function h(e){if(void 0===e&&(e=!1),null===f||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var r=document.createElement("div"),o=r.style;return o.width="100px",o.height="100px",t.appendChild(r),document.body.appendChild(t),t.scrollLeft>0?f="positive-descending":(t.scrollLeft=1,f=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),f}return f}var p=150,m=function(e,t){return e},v=null,g=null;function S(e){var n,a,s=e.getItemOffset,d=e.getEstimatedTotalSize,f=e.getItemSize,v=e.getOffsetForIndexAndAlignment,g=e.getStartIndexForOffset,S=e.getStopIndexForStartIndex,I=e.initInstanceProps,M=e.shouldResetStyleCacheOnItemSizeChange,y=e.validateProps;return a=n=function(e){function n(t){var n;return(n=e.call(this,t)||this)._instanceProps=I(n.props,i(i(n))),n._outerRef=void 0,n._resetIsScrollingTimeoutId=null,n.state={instance:i(i(n)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=l(function(e,t,r,o){return n.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:r,visibleStopIndex:o})}),n._callOnScroll=void 0,n._callOnScroll=l(function(e,t,r){return n.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:r})}),n._getItemStyle=void 0,n._getItemStyle=function(e){var t,r=n.props,o=r.direction,i=r.itemSize,a=r.layout,l=n._getItemStyleCache(M&&i,M&&a,M&&o);if(l.hasOwnProperty(e))t=l[e];else{var c,u=s(n.props,e,n._instanceProps),d=f(n.props,e,n._instanceProps),h="horizontal"===o||"horizontal"===a;l[e]=((c={position:"absolute"})["rtl"===o?"right":"left"]=h?u:0,c.top=h?0:u,c.height=h?"100%":d,c.width=h?d:"100%",t=c)}return t},n._itemStyleCache=void 0,n._getItemStyleCache=void 0,n._getItemStyleCache=l(function(e,t,r){return n._itemStyleCache={},n._itemStyleCache}),n._onScrollHorizontal=function(e){var t=e.currentTarget,r=t.clientWidth,o=t.scrollLeft,i=t.scrollWidth;n.setState(function(e){if(e.scrollOffset===o)return null;var t=n.props.direction,a=o;if("rtl"===t)switch(h()){case"negative":a=-o;break;case"positive-descending":a=i-r-o}return a=Math.max(0,Math.min(a,i-r)),{isScrolling:!0,scrollDirection:e.scrollOffset<o?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}},n._resetIsScrollingDebounced)},n._onScrollVertical=function(e){var t=e.currentTarget,r=t.clientHeight,o=t.scrollHeight,i=t.scrollTop;n.setState(function(e){if(e.scrollOffset===i)return null;var t=Math.max(0,Math.min(i,o-r));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}},n._resetIsScrollingDebounced)},n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&c(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=u(n._resetIsScrolling,p)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},function(){n._getItemStyleCache(-1,null)})},n._instanceProps=I(n.props,i(i(n))),n}o(n,e),n.getDerivedStateFromProps=function(e,t){return w(e,t),y(e),null};var a=n.prototype;return a.scrollTo=function(e){e=Math.max(0,e),this.setState(function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},a.scrollToItem=function(e,t){void 0===t&&(t="auto");var n=this.props.itemCount,r=this.state.scrollOffset;e=Math.max(0,Math.min(e,n-1)),this.scrollTo(v(this.props,e,t,r,this._instanceProps))},a.componentDidMount=function(){var e=this.props,t=e.direction,n=e.initialScrollOffset,r=e.layout;if("number"==typeof n&&null!=this._outerRef){var o=this._outerRef;"horizontal"===t||"horizontal"===r?o.scrollLeft=n:o.scrollTop=n}this._callPropsCallbacks(),this._commitHook()},a.componentDidUpdate=function(){var e=this.props,t=e.direction,n=e.layout,r=this.state,o=r.scrollOffset;if(r.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===t||"horizontal"===n)if("rtl"===t)switch(h()){case"negative":i.scrollLeft=-o;break;case"positive-ascending":i.scrollLeft=o;break;default:var a=i.clientWidth,l=i.scrollWidth;i.scrollLeft=l-a-o}else i.scrollLeft=o;else i.scrollTop=o}this._callPropsCallbacks(),this._commitHook()},a.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&c(this._resetIsScrollingTimeoutId),this._unmountHook()},a.render=function(){var e=this.props,n=e.className,o=e.direction,i=e.height,a=e.innerRef,l=e.innerElementType,s=e.innerTagName,c=e.layout,u=e.outerElementType,f=e.outerTagName,h=e.style,p=e.width,m=this.state.isScrolling,v="horizontal"===o||"horizontal"===c,g=v?this._onScrollHorizontal:this._onScrollVertical,S=this._renderItems(),w=d(this.props,this._instanceProps);return t.createElement(u||f||"div",{className:n,onScroll:g,ref:this._outerRefSetter,style:r({height:i,width:p,overflow:"auto",position:"relative",WebkitOverflowScrolling:"touch",willChange:"transform",direction:o},h)},t.createElement(l||s||"div",{children:S,ref:a,style:{height:v?"100%":w,pointerEvents:m?"none":void 0,width:v?w:"100%"}}))},a._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],n=e[1],r=e[2],o=e[3];this._callOnItemsRendered(t,n,r,o)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,l=i.scrollOffset,s=i.scrollUpdateWasRequested;this._callOnScroll(a,l,s)}},a._commitHook=function(){},a._unmountHook=function(){},a._getRangeToRender=function(){var e=this.props,t=e.itemCount,n=e.overscanCount,r=this.state,o=r.isScrolling,i=r.scrollDirection,a=r.scrollOffset;if(0===t)return[0,0,0,0];var l=g(this.props,a,this._instanceProps),s=S(this.props,l,a,this._instanceProps),c=o&&"backward"!==i?1:Math.max(1,n),u=o&&"forward"!==i?1:Math.max(1,n);return[Math.max(0,l-c),Math.max(0,Math.min(t-1,s+u)),l,s]},a._renderItems=function(){var e=this.props,n=e.children,r=e.itemCount,o=e.itemData,i=e.itemKey,a=void 0===i?m:i,l=e.useIsScrolling,s=this.state.isScrolling,c=this._getRangeToRender(),u=c[0],d=c[1],f=[];if(r>0)for(var h=u;h<=d;h++)f.push(t.createElement(n,{data:o,key:a(h,o),index:h,isScrolling:l?s:void 0,style:this._getItemStyle(h)}));return f},n}(t.PureComponent),n.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},a}"undefined"!=typeof window&&void 0!==window.WeakSet&&(v=new WeakSet,g=new WeakSet);var w=function(e,t){var n=e.children,r=e.direction,o=e.height,i=e.layout,a=e.innerTagName,l=e.outerTagName,s=e.width,c=t.instance;null==a&&null==l||g&&!g.has(c)&&(g.add(c),console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));var u="horizontal"===r||"horizontal"===i;switch(r){case"horizontal":case"vertical":v&&!v.has(c)&&(v.add(c),console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));break;case"ltr":case"rtl":break;default:throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". "'+r+'" was specified.')}switch(i){case"horizontal":case"vertical":break;default:throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". "'+i+'" was specified.')}if(null==n)throw Error('An invalid "children" prop has been specified. Value should be a React component. "'+(null===n?"null":typeof n)+'" was specified.');if(u&&"number"!=typeof s)throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. "'+(null===s?"null":typeof s)+'" was specified.');if(!u&&"number"!=typeof o)throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. "'+(null===o?"null":typeof o)+'" was specified.')},I=null;I=new Set;var M=function(e){function r(){for(var t,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this)._didProvideValidRef=!1,t._node=null,t._resizeObserver=null,t._measureItem=function(e,n){var r=t.props,o=r.direction,i=r.layout,a=r.handleNewMeasurements,l=r.index,s=r.size,c=t._node;if(c&&c.ownerDocument&&c.ownerDocument.defaultView&&c instanceof c.ownerDocument.defaultView.HTMLElement){var u="horizontal"===o||"horizontal"===i?Math.ceil(c.offsetWidth):Math.ceil(c.offsetHeight);(s!==u||n)&&a(l,u,e)}},t._refSetter=function(e){null!==t._resizeObserver&&null!==t._node&&t._resizeObserver.unobserve(t._node),e instanceof HTMLElement?(t._didProvideValidRef=!0,t._node=e):t._node=e?n.findDOMNode(e):null,null!==t._resizeObserver&&null!==t._node&&t._resizeObserver.observe(t._node)},t._onResize=function(){t._measureItem(!1,!1)},t}o(r,e);var i=r.prototype;return i.componentDidMount=function(){if(!this._didProvideValidRef){var e=this.props.item,t=e&&e.type&&(e.type.displayName||e.type.name)||"(unknown)";I.has(t)||(I.add(t),console.warn('DynamicSizeList item renderers should attach a ref to the topmost HTMLElement they render. The item renderer "'+t+'" did not attach a ref to a valid HTMLElement. findDOMNode() will be used as a fallback, but is slower and more error prone than using a ref.\n\nLearn more about ref forwarding: https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components'))}this._measureItem(!0,!0),"undefined"!=typeof ResizeObserver&&(this._resizeObserver=new ResizeObserver(this._onResize),null!==this._node&&this._resizeObserver.observe(this._node))},i.componentWillUnmount=function(){null!==this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)},i.render=function(){return t.cloneElement(this.props.item,{ref:this._refSetter})},r}(t.Component),y=function(e,t,n){var r=n.estimatedItemSize,o=n.instance,i=n.itemOffsetMap,a=n.itemSizeMap,l=n.lastMeasuredIndex,s=n.lastPositionedIndex;if(t>l)return{offset:0,size:r};if(t>s){s<0&&(i[0]=0);for(var c=Math.max(1,s+1);c<=t;c++){var u=i[c-1],d=a[c-1]||0;i[c]=u+d,delete o._itemStyleCache[c]}n.lastPositionedIndex=t}return{offset:i[t],size:a[t]}},_=function(e,t){var n=e.itemCount,r=(t.itemSizeMap,t.estimatedItemSize),o=t.lastMeasuredIndex;return t.totalMeasuredSize+(n-o-1)*r},x=S({getItemOffset:function(e,t,n){return y(0,t,n).offset},getItemSize:function(e,t,n){},getEstimatedTotalSize:_,getOffsetForIndexAndAlignment:function(e,t,n,r,o){var i=e.direction,a=e.layout,l=e.height,s=e.width,c=o.lastMeasuredIndex;t>c&&console.warn("DynamicSizeList does not support scrolling to items that yave not yet measured. scrollToItem() was called with index "+t+" but the last measured item was "+c+".");var u="horizontal"===i||"horizontal"===a?s:l,d=y(0,t,o),f=_(e,o),h=Math.min(f-u,d.offset),p=Math.max(0,d.offset-u+d.size);switch(n){case"start":return h;case"end":return p;case"center":return Math.round(p+(h-p)/2);case"auto":default:return r>=p&&r<=h?r:r-p<h-r?p:h}},getStartIndexForOffset:function(e,t,n){var r=n.lastMeasuredIndex;return t<=n.totalMeasuredSize?function(e,t,n,r,o){for(;r<=n;){var i=r+Math.floor((n-r)/2),a=y(0,i,t).offset;if(a===o)return i;a<o?r=i+1:a>o&&(n=i-1)}return r>0?r-1:0}(0,n,r,0,t):r+1},getStopIndexForStartIndex:function(e,t,n,r){for(var o=e.direction,i=e.layout,a=e.height,l=e.itemCount,s=e.width,c="horizontal"===o||"horizontal"===i?s:a,u=y(0,t,r),d=n+c,f=u.offset+u.size,h=t;h<l-1&&f<d;)f+=y(0,++h,r).size;return h},initInstanceProps:function(e,n){var r={estimatedItemSize:e.estimatedItemSize||50,instance:n,itemOffsetMap:{},itemSizeMap:{},lastMeasuredIndex:-1,lastPositionedIndex:-1,totalMeasuredSize:0},o=null;n._unmountHook=function(){null!==o&&(clearTimeout(o),o=null)};var i=!1,a=0;n._commitHook=function(){if(i){if(i=!1,0===a)return void n.forceUpdate();var e,t=a;n.setState(function(n){return"backward"!==n.scrollDirection||n.scrollUpdateWasRequested?(e=!0,null):{scrollOffset:n.scrollOffset+t}},function(){if(e)n.forceUpdate();else{var r=n.state.scrollOffset,o=n.props,i=o.direction,l=o.layout,s=n._outerRef;"function"==typeof s.scrollBy?s.scrollBy("horizontal"===i||"horizontal"===l?t:0,"horizontal"===i||"horizontal"===l?0:t):"horizontal"===i||"horizontal"===l?s.scrollLeft=r:s.scrollTop=r}a-=t})}};var l=function(e,t,l){var s=r.itemSizeMap,c=r.lastMeasuredIndex,u=r.lastPositionedIndex,d=s[e]||0;if(e<u&&(r.lastPositionedIndex=e),e<=c){if(d===t)return;r.totalMeasuredSize+=t-d,l&&(a+=t-d)}else r.lastMeasuredIndex=e,r.totalMeasuredSize+=t;s[e]=t,l?i=!0:null===o&&(o=setTimeout(function(){o=null,n.forceUpdate()},1))};return n._handleNewMeasurements=l,n._renderItems=function(){var e=n.props,o=e.children,i=e.direction,a=e.layout,s=e.itemCount,c=e.itemData,u=e.itemKey,d=void 0===u?m:u,f=e.useIsScrolling,h=n.state.isScrolling,p=n._getRangeToRender(),v=p[0],g=p[1],S=[];if(s>0)for(var w=v;w<=g;w++){var I=y(n.props,w,r).size,_=n._getItemStyle(w),x=t.createElement(o,{data:c,index:w,isScrolling:f?h:void 0,style:_});S.push(t.createElement(M,{direction:i,layout:a,handleNewMeasurements:l,index:w,item:x,key:d(w,c),size:I}))}return S},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){if(void 0!==e.itemSize)throw Error('An unexpected "itemSize" prop has been provided.')}}),b=150,z=function(e){var t=e.columnIndex;e.data;return e.rowIndex+":"+t},C=null,R=null,T=null;function O(e){var n,a,s=e.getColumnOffset,f=e.getColumnStartIndexForOffset,p=e.getColumnStopIndexForStartIndex,m=e.getColumnWidth,v=e.getEstimatedTotalHeight,g=e.getEstimatedTotalWidth,S=e.getOffsetForColumnAndAlignment,w=e.getOffsetForRowAndAlignment,I=e.getRowHeight,M=e.getRowOffset,y=e.getRowStartIndexForOffset,_=e.getRowStopIndexForStartIndex,x=e.initInstanceProps,C=e.shouldResetStyleCacheOnItemSizeChange,R=e.validateProps;return a=n=function(e){function n(t){var n;return(n=e.call(this,t)||this)._instanceProps=x(n.props,i(i(n))),n._resetIsScrollingTimeoutId=null,n._outerRef=void 0,n.state={instance:i(i(n)),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:"number"==typeof n.props.initialScrollLeft?n.props.initialScrollLeft:0,scrollTop:"number"==typeof n.props.initialScrollTop?n.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},n._callOnItemsRendered=void 0,n._callOnItemsRendered=l(function(e,t,r,o,i,a,l,s){return n.props.onItemsRendered({overscanColumnStartIndex:e,overscanColumnStopIndex:t,overscanRowStartIndex:r,overscanRowStopIndex:o,visibleColumnStartIndex:i,visibleColumnStopIndex:a,visibleRowStartIndex:l,visibleRowStopIndex:s})}),n._callOnScroll=void 0,n._callOnScroll=l(function(e,t,r,o,i){return n.props.onScroll({horizontalScrollDirection:r,scrollLeft:e,scrollTop:t,verticalScrollDirection:o,scrollUpdateWasRequested:i})}),n._getItemStyle=void 0,n._getItemStyle=function(e,t){var r,o,i=n.props,a=i.columnWidth,l=i.direction,c=i.rowHeight,u=n._getItemStyleCache(C&&a,C&&l,C&&c),d=e+":"+t;u.hasOwnProperty(d)?r=u[d]:u[d]=((o={position:"absolute"})["rtl"===l?"right":"left"]=s(n.props,t,n._instanceProps),o.top=M(n.props,e,n._instanceProps),o.height=I(n.props,e,n._instanceProps),o.width=m(n.props,t,n._instanceProps),r=o);return r},n._getItemStyleCache=void 0,n._getItemStyleCache=l(function(e,t,n){return{}}),n._onScroll=function(e){var t=e.currentTarget,r=t.clientHeight,o=t.clientWidth,i=t.scrollLeft,a=t.scrollTop,l=t.scrollHeight,s=t.scrollWidth;n.setState(function(e){if(e.scrollLeft===i&&e.scrollTop===a)return null;var t=n.props.direction,c=i;if("rtl"===t)switch(h()){case"negative":c=-i;break;case"positive-descending":c=s-o-i}c=Math.max(0,Math.min(c,s-o));var u=Math.max(0,Math.min(a,l-r));return{isScrolling:!0,horizontalScrollDirection:e.scrollLeft<i?"forward":"backward",scrollLeft:c,scrollTop:u,verticalScrollDirection:e.scrollTop<a?"forward":"backward",scrollUpdateWasRequested:!1}},n._resetIsScrollingDebounced)},n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&c(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=u(n._resetIsScrolling,b)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},function(){n._getItemStyleCache(-1)})},n}o(n,e),n.getDerivedStateFromProps=function(e,t){return P(e,t),R(e),null};var a=n.prototype;return a.scrollTo=function(e){var t=e.scrollLeft,n=e.scrollTop;void 0!==t&&(t=Math.max(0,t)),void 0!==n&&(n=Math.max(0,n)),this.setState(function(e){return void 0===t&&(t=e.scrollLeft),void 0===n&&(n=e.scrollTop),e.scrollLeft===t&&e.scrollTop===n?null:{horizontalScrollDirection:e.scrollLeft<t?"forward":"backward",scrollLeft:t,scrollTop:n,scrollUpdateWasRequested:!0,verticalScrollDirection:e.scrollTop<n?"forward":"backward"}},this._resetIsScrollingDebounced)},a.scrollToItem=function(e){var t=e.align,n=void 0===t?"auto":t,r=e.columnIndex,o=e.rowIndex,i=this.props,a=i.columnCount,l=i.height,s=i.rowCount,c=i.width,u=this.state,f=u.scrollLeft,h=u.scrollTop,p=function(e){if(void 0===e&&(e=!1),-1===d||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",document.body.appendChild(t),d=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return d}();void 0!==r&&(r=Math.max(0,Math.min(r,a-1))),void 0!==o&&(o=Math.max(0,Math.min(o,s-1)));var m=v(this.props,this._instanceProps),I=g(this.props,this._instanceProps)>c?p:0,M=m>l?p:0;this.scrollTo({scrollLeft:void 0!==r?S(this.props,r,n,f,this._instanceProps,M):f,scrollTop:void 0!==o?w(this.props,o,n,h,this._instanceProps,I):h})},a.componentDidMount=function(){var e=this.props,t=e.initialScrollLeft,n=e.initialScrollTop;if(null!=this._outerRef){var r=this._outerRef;"number"==typeof t&&(r.scrollLeft=t),"number"==typeof n&&(r.scrollTop=n)}this._callPropsCallbacks()},a.componentDidUpdate=function(){var e=this.props.direction,t=this.state,n=t.scrollLeft,r=t.scrollTop;if(t.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("rtl"===e)switch(h()){case"negative":o.scrollLeft=-n;break;case"positive-ascending":o.scrollLeft=n;break;default:var i=o.clientWidth,a=o.scrollWidth;o.scrollLeft=a-i-n}else o.scrollLeft=Math.max(0,n);o.scrollTop=Math.max(0,r)}this._callPropsCallbacks()},a.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&c(this._resetIsScrollingTimeoutId)},a.render=function(){var e=this.props,n=e.children,o=e.className,i=e.columnCount,a=e.direction,l=e.height,s=e.innerRef,c=e.innerElementType,u=e.innerTagName,d=e.itemData,f=e.itemKey,h=void 0===f?z:f,p=e.outerElementType,m=e.outerTagName,S=e.rowCount,w=e.style,I=e.useIsScrolling,M=e.width,y=this.state.isScrolling,_=this._getHorizontalRangeToRender(),x=_[0],b=_[1],C=this._getVerticalRangeToRender(),R=C[0],T=C[1],O=[];if(i>0&&S)for(var P=R;P<=T;P++)for(var W=x;W<=b;W++)O.push(t.createElement(n,{columnIndex:W,data:d,isScrolling:I?y:void 0,key:h({columnIndex:W,data:d,rowIndex:P}),rowIndex:P,style:this._getItemStyle(P,W)}));var E=v(this.props,this._instanceProps),k=g(this.props,this._instanceProps);return t.createElement(p||m||"div",{className:o,onScroll:this._onScroll,ref:this._outerRefSetter,style:r({position:"relative",height:l,width:M,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},w)},t.createElement(c||u||"div",{children:O,ref:s,style:{height:E,pointerEvents:y?"none":void 0,width:k}}))},a._callPropsCallbacks=function(){var e=this.props,t=e.columnCount,n=e.onItemsRendered,r=e.onScroll,o=e.rowCount;if("function"==typeof n&&t>0&&o>0){var i=this._getHorizontalRangeToRender(),a=i[0],l=i[1],s=i[2],c=i[3],u=this._getVerticalRangeToRender(),d=u[0],f=u[1],h=u[2],p=u[3];this._callOnItemsRendered(a,l,d,f,s,c,h,p)}if("function"==typeof r){var m=this.state,v=m.horizontalScrollDirection,g=m.scrollLeft,S=m.scrollTop,w=m.scrollUpdateWasRequested,I=m.verticalScrollDirection;this._callOnScroll(g,S,v,I,w)}},a._getHorizontalRangeToRender=function(){var e=this.props,t=e.columnCount,n=e.overscanColumnCount,r=e.overscanColumnsCount,o=e.overscanCount,i=e.rowCount,a=this.state,l=a.horizontalScrollDirection,s=a.isScrolling,c=a.scrollLeft,u=n||r||o||1;if(0===t||0===i)return[0,0,0,0];var d=f(this.props,c,this._instanceProps),h=p(this.props,d,c,this._instanceProps),m=s&&"backward"!==l?1:Math.max(1,u),v=s&&"forward"!==l?1:Math.max(1,u);return[Math.max(0,d-m),Math.max(0,Math.min(t-1,h+v)),d,h]},a._getVerticalRangeToRender=function(){var e=this.props,t=e.columnCount,n=e.overscanCount,r=e.overscanRowCount,o=e.overscanRowsCount,i=e.rowCount,a=this.state,l=a.isScrolling,s=a.verticalScrollDirection,c=a.scrollTop,u=r||o||n||1;if(0===t||0===i)return[0,0,0,0];var d=y(this.props,c,this._instanceProps),f=_(this.props,d,c,this._instanceProps),h=l&&"backward"!==s?1:Math.max(1,u),p=l&&"forward"!==s?1:Math.max(1,u);return[Math.max(0,d-h),Math.max(0,Math.min(i-1,f+p)),d,f]},n}(t.PureComponent),n.defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},a}"undefined"!=typeof window&&void 0!==window.WeakSet&&(C=new WeakSet,R=new WeakSet,T=new WeakSet);var P=function(e,t){var n=e.children,r=e.direction,o=e.height,i=e.innerTagName,a=e.outerTagName,l=e.overscanColumnsCount,s=e.overscanCount,c=e.overscanRowsCount,u=e.width,d=t.instance;if("number"==typeof s&&C&&!C.has(d)&&(C.add(d),console.warn("The overscanCount prop has been deprecated. Please use the overscanColumnCount and overscanRowCount props instead.")),"number"!=typeof l&&"number"!=typeof c||R&&!R.has(d)&&(R.add(d),console.warn("The overscanColumnsCount and overscanRowsCount props have been deprecated. Please use the overscanColumnCount and overscanRowCount props instead.")),null==i&&null==a||T&&!T.has(d)&&(T.add(d),console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead.")),null==n)throw Error('An invalid "children" prop has been specified. Value should be a React component. "'+(null===n?"null":typeof n)+'" was specified.');switch(r){case"ltr":case"rtl":break;default:throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". "'+r+'" was specified.')}if("number"!=typeof u)throw Error('An invalid "width" prop has been specified. Grids must specify a number for width. "'+(null===u?"null":typeof u)+'" was specified.');if("number"!=typeof o)throw Error('An invalid "height" prop has been specified. Grids must specify a number for height. "'+(null===o?"null":typeof o)+'" was specified.')},W=O({getColumnOffset:function(e,t){return t*e.columnWidth},getColumnWidth:function(e,t){return e.columnWidth},getRowOffset:function(e,t){return t*e.rowHeight},getRowHeight:function(e,t){return e.rowHeight},getEstimatedTotalHeight:function(e){var t=e.rowCount;return e.rowHeight*t},getEstimatedTotalWidth:function(e){var t=e.columnCount;return e.columnWidth*t},getOffsetForColumnAndAlignment:function(e,t,n,r,o,i){var a=e.columnCount,l=e.columnWidth,s=e.width,c=Math.max(0,a*l-s),u=Math.min(c,t*l),d=Math.max(0,t*l-s+i+l);switch("smart"===n&&(n=r>=d-s&&r<=u+s?"auto":"center"),n){case"start":return u;case"end":return d;case"center":var f=Math.round(d+(u-d)/2);return f<Math.ceil(s/2)?0:f>c+Math.floor(s/2)?c:f;case"auto":default:return r>=d&&r<=u?r:d>u?d:r<d?d:u}},getOffsetForRowAndAlignment:function(e,t,n,r,o,i){var a=e.rowHeight,l=e.height,s=e.rowCount,c=Math.max(0,s*a-l),u=Math.min(c,t*a),d=Math.max(0,t*a-l+i+a);switch("smart"===n&&(n=r>=d-l&&r<=u+l?"auto":"center"),n){case"start":return u;case"end":return d;case"center":var f=Math.round(d+(u-d)/2);return f<Math.ceil(l/2)?0:f>c+Math.floor(l/2)?c:f;case"auto":default:return r>=d&&r<=u?r:d>u?d:r<d?d:u}},getColumnStartIndexForOffset:function(e,t){var n=e.columnWidth,r=e.columnCount;return Math.max(0,Math.min(r-1,Math.floor(t/n)))},getColumnStopIndexForStartIndex:function(e,t,n){var r=e.columnWidth,o=e.columnCount,i=e.width,a=t*r,l=Math.ceil((i+n-a)/r);return Math.max(0,Math.min(o-1,t+l-1))},getRowStartIndexForOffset:function(e,t){var n=e.rowHeight,r=e.rowCount;return Math.max(0,Math.min(r-1,Math.floor(t/n)))},getRowStopIndexForStartIndex:function(e,t,n){var r=e.rowHeight,o=e.rowCount,i=e.height,a=t*r,l=Math.ceil((i+n-a)/r);return Math.max(0,Math.min(o-1,t+l-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){var t=e.columnWidth,n=e.rowHeight;if("number"!=typeof t)throw Error('An invalid "columnWidth" prop has been specified. Value should be a number. "'+(null===t?"null":typeof t)+'" was specified.');if("number"!=typeof n)throw Error('An invalid "rowHeight" prop has been specified. Value should be a number. "'+(null===n?"null":typeof n)+'" was specified.')}}),E=S({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,n,r){var o=e.direction,i=e.height,a=e.itemCount,l=e.itemSize,s=e.layout,c=e.width,u="horizontal"===o||"horizontal"===s?c:i,d=Math.max(0,a*l-u),f=Math.min(d,t*l),h=Math.max(0,t*l-u+l);switch("smart"===n&&(n=r>=h-u&&r<=f+u?"auto":"center"),n){case"start":return f;case"end":return h;case"center":var p=Math.round(h+(f-h)/2);return p<Math.ceil(u/2)?0:p>d+Math.floor(u/2)?d:p;case"auto":default:return r>=h&&r<=f?r:r<h?h:f}},getStartIndexForOffset:function(e,t){var n=e.itemCount,r=e.itemSize;return Math.max(0,Math.min(n-1,Math.floor(t/r)))},getStopIndexForStartIndex:function(e,t,n){var r=e.direction,o=e.height,i=e.itemCount,a=e.itemSize,l=e.layout,s=e.width,c=t*a,u="horizontal"===r||"horizontal"===l?s:o,d=Math.ceil((u+n-c)/a);return Math.max(0,Math.min(i-1,t+d-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){var t=e.itemSize;if("number"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a number. "'+(null===t?"null":typeof t)+'" was specified.')}}),k=function(e,t){var n=e.rowCount,r=t.rowMetadataMap,o=t.estimatedRowHeight,i=t.lastMeasuredRowIndex,a=0;if(i>=n&&(i=n-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(n-i-1)*o},D=function(e,t){var n=e.columnCount,r=t.columnMetadataMap,o=t.estimatedColumnWidth,i=t.lastMeasuredColumnIndex,a=0;if(i>=n&&(i=n-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(n-i-1)*o},A=function(e,t,n,r){var o,i,a;if("column"===e?(o=r.columnMetadataMap,i=t.columnWidth,a=r.lastMeasuredColumnIndex):(o=r.rowMetadataMap,i=t.rowHeight,a=r.lastMeasuredRowIndex),n>a){var l=0;if(a>=0){var s=o[a];l=s.offset+s.size}for(var c=a+1;c<=n;c++){var u=i(c);o[c]={offset:l,size:u},l+=u}"column"===e?r.lastMeasuredColumnIndex=n:r.lastMeasuredRowIndex=n}return o[n]},L=function(e,t,n,r){var o,i;return"column"===e?(o=n.columnMetadataMap,i=n.lastMeasuredColumnIndex):(o=n.rowMetadataMap,i=n.lastMeasuredRowIndex),(i>0?o[i].offset:0)>=r?H(e,t,n,i,0,r):F(e,t,n,Math.max(0,i),r)},H=function(e,t,n,r,o,i){for(;o<=r;){var a=o+Math.floor((r-o)/2),l=A(e,t,a,n).offset;if(l===i)return a;l<i?o=a+1:l>i&&(r=a-1)}return o>0?o-1:0},F=function(e,t,n,r,o){for(var i="column"===e?t.columnCount:t.rowCount,a=1;r<i&&A(e,t,r,n).offset<o;)r+=a,a*=2;return H(e,t,n,Math.min(r,i-1),Math.floor(r/2),o)},U=function(e,t,n,r,o,i,a){var l="column"===e?t.width:t.height,s=A(e,t,n,i),c="column"===e?D(t,i):k(t,i),u=Math.max(0,Math.min(c-l,s.offset)),d=Math.max(0,s.offset-l+a+s.size);switch("smart"===r&&(r=o>=d-l&&o<=u+l?"auto":"center"),r){case"start":return u;case"end":return d;case"center":return Math.round(d+(u-d)/2);case"auto":default:return o>=d&&o<=u?o:d>u?d:o<d?d:u}},V=O({getColumnOffset:function(e,t,n){return A("column",e,t,n).offset},getColumnStartIndexForOffset:function(e,t,n){return L("column",e,n,t)},getColumnStopIndexForStartIndex:function(e,t,n,r){for(var o=e.columnCount,i=e.width,a=A("column",e,t,r),l=n+i,s=a.offset+a.size,c=t;c<o-1&&s<l;)s+=A("column",e,++c,r).size;return c},getColumnWidth:function(e,t,n){return n.columnMetadataMap[t].size},getEstimatedTotalHeight:k,getEstimatedTotalWidth:D,getOffsetForColumnAndAlignment:function(e,t,n,r,o,i){return U("column",e,t,n,r,o,i)},getOffsetForRowAndAlignment:function(e,t,n,r,o,i){return U("row",e,t,n,r,o,i)},getRowOffset:function(e,t,n){return A("row",e,t,n).offset},getRowHeight:function(e,t,n){return n.rowMetadataMap[t].size},getRowStartIndexForOffset:function(e,t,n){return L("row",e,n,t)},getRowStopIndexForStartIndex:function(e,t,n,r){for(var o=e.rowCount,i=e.height,a=A("row",e,t,r),l=n+i,s=a.offset+a.size,c=t;c<o-1&&s<l;)s+=A("row",e,++c,r).size;return c},initInstanceProps:function(e,t){var n=e,r={columnMetadataMap:{},estimatedColumnWidth:n.estimatedColumnWidth||50,estimatedRowHeight:n.estimatedRowHeight||50,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return t.resetAfterColumnIndex=function(e,n){void 0===n&&(n=!0),t.resetAfterIndices({columnIndex:e,shouldForceUpdate:n})},t.resetAfterRowIndex=function(e,n){void 0===n&&(n=!0),t.resetAfterIndices({rowIndex:e,shouldForceUpdate:n})},t.resetAfterIndices=function(e){var n=e.columnIndex,o=e.rowIndex,i=e.shouldForceUpdate,a=void 0===i||i;"number"==typeof n&&(r.lastMeasuredColumnIndex=Math.min(r.lastMeasuredColumnIndex,n-1)),"number"==typeof o&&(r.lastMeasuredRowIndex=Math.min(r.lastMeasuredRowIndex,o-1)),t._getItemStyleCache(-1),a&&t.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){var t=e.columnWidth,n=e.rowHeight;if("function"!=typeof t)throw Error('An invalid "columnWidth" prop has been specified. Value should be a function. "'+(null===t?"null":typeof t)+'" was specified.');if("function"!=typeof n)throw Error('An invalid "rowHeight" prop has been specified. Value should be a function. "'+(null===n?"null":typeof n)+'" was specified.')}}),N=function(e,t,n){var r=e.itemSize,o=n.itemMetadataMap,i=n.lastMeasuredIndex;if(t>i){var a=0;if(i>=0){var l=o[i];a=l.offset+l.size}for(var s=i+1;s<=t;s++){var c=r(s);o[s]={offset:a,size:c},a+=c}n.lastMeasuredIndex=t}return o[t]},q=function(e,t,n,r,o){for(;r<=n;){var i=r+Math.floor((n-r)/2),a=N(e,i,t).offset;if(a===o)return i;a<o?r=i+1:a>o&&(n=i-1)}return r>0?r-1:0},j=function(e,t,n,r){for(var o=e.itemCount,i=1;n<o&&N(e,n,t).offset<r;)n+=i,i*=2;return q(e,t,Math.min(n,o-1),Math.floor(n/2),r)},G=function(e,t){var n=e.itemCount,r=t.itemMetadataMap,o=t.estimatedItemSize,i=t.lastMeasuredIndex,a=0;if(i>=n&&(i=n-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(n-i-1)*o},K=S({getItemOffset:function(e,t,n){return N(e,t,n).offset},getItemSize:function(e,t,n){return n.itemMetadataMap[t].size},getEstimatedTotalSize:G,getOffsetForIndexAndAlignment:function(e,t,n,r,o){var i=e.direction,a=e.height,l=e.layout,s=e.width,c="horizontal"===i||"horizontal"===l?s:a,u=N(e,t,o),d=G(e,o),f=Math.max(0,Math.min(d-c,u.offset)),h=Math.max(0,u.offset-c+u.size);switch("smart"===n&&(n=r>=h-c&&r<=f+c?"auto":"center"),n){case"start":return f;case"end":return h;case"center":return Math.round(h+(f-h)/2);case"auto":default:return r>=h&&r<=f?r:r<h?h:f}},getStartIndexForOffset:function(e,t,n){return function(e,t,n){var r=t.itemMetadataMap,o=t.lastMeasuredIndex;return(o>0?r[o].offset:0)>=n?q(e,t,o,0,n):j(e,t,Math.max(0,o),n)}(e,n,t)},getStopIndexForStartIndex:function(e,t,n,r){for(var o=e.direction,i=e.height,a=e.itemCount,l=e.layout,s=e.width,c="horizontal"===o||"horizontal"===l?s:i,u=N(e,t,r),d=n+c,f=u.offset+u.size,h=t;h<a-1&&f<d;)f+=N(e,++h,r).size;return h},initInstanceProps:function(e,t){var n={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,r){void 0===r&&(r=!0),n.lastMeasuredIndex=Math.min(n.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),r&&t.forceUpdate()},n},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){var t=e.itemSize;if("function"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a function. "'+(null===t?"null":typeof t)+'" was specified.')}});function B(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function J(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}function Q(e,t){var n=e.style,r=B(e,["style"]),o=t.style,i=B(t,["style"]);return!J(n,o)&&!J(r,i)}e.DynamicSizeList=x,e.FixedSizeGrid=W,e.FixedSizeList=E,e.VariableSizeGrid=V,e.VariableSizeList=K,e.areEqual=Q,e.shouldComponentUpdate=function(e,t){return!Q(this.props,e)||J(this.state,t)},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index-dev.umd.js.map
