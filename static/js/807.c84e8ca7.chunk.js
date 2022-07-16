"use strict";(self.webpackChunkstreaming_platforms_analytics=self.webpackChunkstreaming_platforms_analytics||[]).push([[807],{4807:function(t,n,r){r.r(n);var e=r(2982),i=r(5671),o=r(3144),a=r(7326),u=r(136),s=r(7277),l=r(2791),c=r(4625),f=r(3928),h=r(4700),p=r(4286),d=r(6426),y=r(6143),_=r(6556),m=r(184),v=function(t){(0,u.Z)(r,t);var n=(0,s.Z)(r);function r(t){var e;return(0,i.Z)(this,r),(e=n.call(this,t)).state={ref:l.createRef()},e.plotSubscriptions=e.plotSubscriptions.bind((0,a.Z)(e)),e}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.props.subs?this.plotSubscriptions():console.log("no data")}},{key:"componentDidUpdate",value:function(){this.props.subs?this.plotSubscriptions():console.log("no data")}},{key:"plotSubscriptions",value:function(){var t=this,n=this.state.ref.current;(0,c.Z)(n).selectAll("*").remove();var r=10,i=10,o=10,a=10,u=this.props.width-a-i,s=this.props.height-r-o,l=(0,f.Z)().domain(["Netflix","Prime","Disney"]).range(["#B81D24","#00A8E1","#113CCF"]),m=1e6,v=this.props.platform?[this.props.platform]:["Netflix","Prime","Disney"],g=this.props.platform?this.props.subs.filter((function(n){return n.platform===t.props.platform})):this.props.subs,x=(0,e.Z)(new Set(g.map((function(t){return t.quarter})))).sort(),M=(0,_.Z)(g,(function(t){return t.subs}))/m,b=v.map((function(t){return{name:t,values:g.filter((function(n){return n.platform===t})).map((function(t){return{quarter:t.quarter,subs:t.subs/m}}))}})),k=(0,h.Z)().domain(x).range([0,u]).padding(.3);(0,c.Z)(n).append("g").attr("transform","translate(0,"+s+")").style("font-size",14).call((0,d.LL)(k).tickSize(10)),(0,c.Z)(n).append("text").attr("class","x label").style("text-anchor","middle").style("fill","white").attr("x",u/2).attr("y",s+60).style("font-size",22).text("Yearly quarters");var Z=(0,p.Z)().domain([0,M]).range([s,0]);(0,c.Z)(n).append("g").style("font-size",14).call((0,d.y4)(Z)),(0,c.Z)(n).append("text").attr("transform","rotate(-90)").style("text-anchor","middle").attr("fill","white").attr("y",-70).attr("x",0-s/2).style("font-size",22).text("Subscriptions (in millions)");var w=(0,y.Z)().x((function(t){return k(t.quarter)})).y((function(t){return Z(t.subs)}));(0,c.Z)(n).selectAll("myLines").data(b).enter().append("path").attr("d",(function(t){return w(t.values)})).attr("stroke",(function(t){return l(t.name)})).style("stroke-width",4).style("fill","none"),(0,c.Z)(n).selectAll("myDots").data(b).enter().append("g").style("fill",(function(t){return l(t.name)})).selectAll("myPoints").data((function(t){return t.values})).enter().append("circle").attr("cx",(function(t){return k(t.quarter)})).attr("cy",(function(t){return Z(t.subs)})).attr("r",6).attr("stroke","none"),(0,c.Z)(n).selectAll("myLabels").data(b).enter().append("g").append("text").datum((function(t){return{name:t.name,value:t.values[t.values.length-1]}})).attr("transform",(function(t){return"translate("+k(t.value.quarter)+","+Z(t.value.subs)+")"})).attr("x",15).text((function(t){return t.name})).style("fill",(function(t){return l(t.name)})).style("font-size",20).style("font-weight","bold")}},{key:"render",value:function(){return(0,m.jsx)("svg",{ref:this.state.ref,viewBox:"-90 -20 ".concat(this.props.width+110," ").concat(this.props.height+70)})}}]),r}(l.Component);n.default=v},6556:function(t,n,r){r.d(n,{Z:function(){return i}});var e=r(7762);function i(t,n){var r;if(void 0===n){var i,o=(0,e.Z)(t);try{for(o.s();!(i=o.n()).done;){var a=i.value;null!=a&&(r<a||void 0===r&&a>=a)&&(r=a)}}catch(f){o.e(f)}finally{o.f()}}else{var u,s=-1,l=(0,e.Z)(t);try{for(l.s();!(u=l.n()).done;){var c=u.value;null!=(c=n(c,++s,t))&&(r<c||void 0===r&&c>=c)&&(r=c)}}catch(f){l.e(f)}finally{l.f()}}return r}},6426:function(t,n,r){function e(t){return t}r.d(n,{LL:function(){return f},y4:function(){return h}});var i=1e-6;function o(t){return"translate("+t+",0)"}function a(t){return"translate(0,"+t+")"}function u(t){return function(n){return+t(n)}}function s(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),function(r){return+t(r)+n}}function l(){return!this.__axis}function c(t,n){var r=[],c=null,f=null,h=6,p=6,d=3,y="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,_=1===t||4===t?-1:1,m=4===t||2===t?"x":"y",v=1===t||3===t?o:a;function g(o){var a=null==c?n.ticks?n.ticks.apply(n,r):n.domain():c,g=null==f?n.tickFormat?n.tickFormat.apply(n,r):e:f,x=Math.max(h,0)+d,M=n.range(),b=+M[0]+y,k=+M[M.length-1]+y,Z=(n.bandwidth?s:u)(n.copy(),y),w=o.selection?o.selection():o,A=w.selectAll(".domain").data([null]),S=w.selectAll(".tick").data(a,n).order(),z=S.exit(),C=S.enter().append("g").attr("class","tick"),q=S.select("line"),L=S.select("text");A=A.merge(A.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),S=S.merge(C),q=q.merge(C.append("line").attr("stroke","currentColor").attr(m+"2",_*h)),L=L.merge(C.append("text").attr("fill","currentColor").attr(m,_*x).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),o!==w&&(A=A.transition(o),S=S.transition(o),q=q.transition(o),L=L.transition(o),z=z.transition(o).attr("opacity",i).attr("transform",(function(t){return isFinite(t=Z(t))?v(t+y):this.getAttribute("transform")})),C.attr("opacity",i).attr("transform",(function(t){var n=this.parentNode.__axis;return v((n&&isFinite(n=n(t))?n:Z(t))+y)}))),z.remove(),A.attr("d",4===t||2===t?p?"M"+_*p+","+b+"H"+y+"V"+k+"H"+_*p:"M"+y+","+b+"V"+k:p?"M"+b+","+_*p+"V"+y+"H"+k+"V"+_*p:"M"+b+","+y+"H"+k),S.attr("opacity",1).attr("transform",(function(t){return v(Z(t)+y)})),q.attr(m+"2",_*h),L.attr(m,_*x).text(g),w.filter(l).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),w.each((function(){this.__axis=Z}))}return g.scale=function(t){return arguments.length?(n=t,g):n},g.ticks=function(){return r=Array.from(arguments),g},g.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),g):r.slice()},g.tickValues=function(t){return arguments.length?(c=null==t?null:Array.from(t),g):c&&c.slice()},g.tickFormat=function(t){return arguments.length?(f=t,g):f},g.tickSize=function(t){return arguments.length?(h=p=+t,g):h},g.tickSizeInner=function(t){return arguments.length?(h=+t,g):h},g.tickSizeOuter=function(t){return arguments.length?(p=+t,g):p},g.tickPadding=function(t){return arguments.length?(d=+t,g):d},g.offset=function(t){return arguments.length?(y=+t,g):y},g}function f(t){return c(3,t)}function h(t){return c(4,t)}},4700:function(t,n,r){r.d(n,{Z:function(){return u}});var e=r(885);function i(t,n,r){t=+t,n=+n,r=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+r;for(var e=-1,i=0|Math.max(0,Math.ceil((n-t)/r)),o=new Array(i);++e<i;)o[e]=t+e*r;return o}var o=r(507),a=r(3928);function u(){var t,n,r=(0,a.Z)().unknown(void 0),s=r.domain,l=r.range,c=0,f=1,h=!1,p=0,d=0,y=.5;function _(){var r=s().length,e=f<c,o=e?f:c,a=e?c:f;t=(a-o)/Math.max(1,r-p+2*d),h&&(t=Math.floor(t)),o+=(a-o-t*(r-p))*y,n=t*(1-p),h&&(o=Math.round(o),n=Math.round(n));var u=i(r).map((function(n){return o+t*n}));return l(e?u.reverse():u)}return delete r.unknown,r.domain=function(t){return arguments.length?(s(t),_()):s()},r.range=function(t){var n;return arguments.length?(n=(0,e.Z)(t,2),c=n[0],f=n[1],c=+c,f=+f,_()):[c,f]},r.rangeRound=function(t){var n;return n=(0,e.Z)(t,2),c=n[0],f=n[1],c=+c,f=+f,h=!0,_()},r.bandwidth=function(){return n},r.step=function(){return t},r.round=function(t){return arguments.length?(h=!!t,_()):h},r.padding=function(t){return arguments.length?(p=Math.min(1,d=+t),_()):p},r.paddingInner=function(t){return arguments.length?(p=Math.min(1,t),_()):p},r.paddingOuter=function(t){return arguments.length?(d=+t,_()):d},r.align=function(t){return arguments.length?(y=Math.max(0,Math.min(1,t)),_()):y},r.copy=function(){return u(s(),[c,f]).round(h).paddingInner(p).paddingOuter(d).align(y)},o.o.apply(_(),arguments)}},6143:function(t,n,r){r.d(n,{Z:function(){return y}});var e=Math.PI,i=2*e,o=1e-6,a=i-o;function u(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new u}u.prototype=s.prototype={constructor:u,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,r,e){this._+="Q"+ +t+","+ +n+","+(this._x1=+r)+","+(this._y1=+e)},bezierCurveTo:function(t,n,r,e,i,o){this._+="C"+ +t+","+ +n+","+ +r+","+ +e+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,r,i,a){t=+t,n=+n,r=+r,i=+i,a=+a;var u=this._x1,s=this._y1,l=r-t,c=i-n,f=u-t,h=s-n,p=f*f+h*h;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(p>o)if(Math.abs(h*l-c*f)>o&&a){var d=r-u,y=i-s,_=l*l+c*c,m=d*d+y*y,v=Math.sqrt(_),g=Math.sqrt(p),x=a*Math.tan((e-Math.acos((_+p-m)/(2*v*g)))/2),M=x/g,b=x/v;Math.abs(M-1)>o&&(this._+="L"+(t+M*f)+","+(n+M*h)),this._+="A"+a+","+a+",0,0,"+ +(h*d>f*y)+","+(this._x1=t+b*l)+","+(this._y1=n+b*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,r,u,s,l){t=+t,n=+n,l=!!l;var c=(r=+r)*Math.cos(u),f=r*Math.sin(u),h=t+c,p=n+f,d=1^l,y=l?u-s:s-u;if(r<0)throw new Error("negative radius: "+r);null===this._x1?this._+="M"+h+","+p:(Math.abs(this._x1-h)>o||Math.abs(this._y1-p)>o)&&(this._+="L"+h+","+p),r&&(y<0&&(y=y%i+i),y>a?this._+="A"+r+","+r+",0,1,"+d+","+(t-c)+","+(n-f)+"A"+r+","+r+",0,1,"+d+","+(this._x1=h)+","+(this._y1=p):y>o&&(this._+="A"+r+","+r+",0,"+ +(y>=e)+","+d+","+(this._x1=t+r*Math.cos(s))+","+(this._y1=n+r*Math.sin(s))))},rect:function(t,n,r,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +r+"v"+ +e+"h"+-r+"Z"},toString:function(){return this._}};var l=s;Array.prototype.slice;function c(t){return function(){return t}}function f(t){this._context=t}function h(t){return new f(t)}function p(t){return t[0]}function d(t){return t[1]}function y(t,n){var r=c(!0),e=null,i=h,o=null;function a(a){var u,s,c,f=(a=function(t){return"object"===typeof t&&"length"in t?t:Array.from(t)}(a)).length,h=!1;for(null==e&&(o=i(c=l())),u=0;u<=f;++u)!(u<f&&r(s=a[u],u,a))===h&&((h=!h)?o.lineStart():o.lineEnd()),h&&o.point(+t(s,u,a),+n(s,u,a));if(c)return o=null,c+""||null}return t="function"===typeof t?t:void 0===t?p:c(t),n="function"===typeof n?n:void 0===n?d:c(n),a.x=function(n){return arguments.length?(t="function"===typeof n?n:c(+n),a):t},a.y=function(t){return arguments.length?(n="function"===typeof t?t:c(+t),a):n},a.defined=function(t){return arguments.length?(r="function"===typeof t?t:c(!!t),a):r},a.curve=function(t){return arguments.length?(i=t,null!=e&&(o=i(e)),a):i},a.context=function(t){return arguments.length?(null==t?e=o=null:o=i(e=t),a):e},a}f.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}}}}]);
//# sourceMappingURL=807.c84e8ca7.chunk.js.map