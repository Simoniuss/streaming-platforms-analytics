"use strict";(self.webpackChunkstreaming_platforms_analytics=self.webpackChunkstreaming_platforms_analytics||[]).push([[990],{1990:function(t,e,n){n.r(e);var r=n(5671),a=n(3144),i=n(7326),o=n(136),s=n(7277),c=n(2791),u=n(4625),p=n(7532),l=n(9942),f=n(9507),h=n(5274),d=n(184),g=function(t){(0,o.Z)(n,t);var e=(0,s.Z)(n);function n(t){var a;return(0,r.Z)(this,n),(a=e.call(this,t)).ref=c.createRef(),a.createTreemap=a.createTreemap.bind((0,i.Z)(a)),a}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){this.props.data?this.createTreemap():console.log("no data")}},{key:"componentDidUpdate",value:function(){this.props.data?this.createTreemap():console.log("no data")}},{key:"createTreemap",value:function(){var t=this.ref.current,e=(0,h.Z)().domain(["Netflix","Prime","Disney"]).range(["#B81D24","#00A8E1","#113CCF"]),n=(0,f.jJ)(this.props.data,(function(t){return t.length}),(function(t){return t.platform}),(function(t){return t.type}),(function(t){return t.genre[0]})),r=(0,p.ZP)(n);r.sum((function(t){return t[1]})),(0,l.Z)().size([this.props.width,this.props.height]).paddingOuter(15).paddingInner(3)(r),console.log(this.props.data[1]),console.log(r.leaves()),(0,u.Z)(t).selectAll("rect").data(r.descendants()).enter().append("rect").attr("x",(function(t){return t.x0})).attr("y",(function(t){return t.y0})).attr("width",(function(t){return t.x1-t.x0})).attr("height",(function(t){return t.y1-t.y0})).style("stroke","white").style("fill",(function(t){return 2===t.height?e(t):1===t.height?e(t.parent):0===t.height?e(t.parent.parent):"transparent"})),(0,u.Z)(t).selectAll("text").data(r.descendants()).enter().append("text").attr("x",(function(t){return t.x0})).attr("y",(function(t){return t.y0})).text((function(t){return t.data[0]})).attr("font-size","10px").attr("font-weight","bold").attr("fill","black")}},{key:"render",value:function(){return(0,d.jsx)("svg",{ref:this.ref,viewBox:"0 0 ".concat(this.props.width," ").concat(this.props.height)})}}]),n}(c.Component);e.default=g}}]);
//# sourceMappingURL=990.0bcfc229.chunk.js.map