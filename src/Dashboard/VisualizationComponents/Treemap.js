import React from 'react'

import { select } from 'd3-selection'
import { treemap, hierarchy } from 'd3-hierarchy'
import { rollup } from 'd3-array'
import { scaleOrdinal, scale } from 'd3-scale'
import { schemeCategory10 } from 'd3-scale-chromatic'


class Treemap extends React.Component {

    constructor(props){
        super(props)
        this.ref = React.createRef()
        this.createTreemap = this.createTreemap.bind(this)
    }

    componentDidMount() {
        this.props.data? this.createTreemap() : console.log('no data')
    }

   componentDidUpdate() {
        this.props.data? this.createTreemap() : console.log('no data')
    }

    createTreemap() {
        // refrence to svg
        const node = this.ref.current

        var color = scaleOrdinal()
            .domain(['Netflix', 'Prime', 'Disney'])
            .range([ "#B81D24", "#00A8E1", "#113CCF"])
            //.unknown("#fff")

        // group by platform, type, and the first genre
        var groups = rollup(this.props.data,
                            v => v.length,
                            d => d.platform,
                            d => d.type,
                            function(d) { return d.genre[0]; }
                            );
        // root hierarchy 
        var root = hierarchy(groups);
        root.sum(function(d) { return d[1];});

        // treemap layout
        treemap()
            .size([this.props.width, this.props.height])
            .paddingOuter(15)
            .paddingInner(3)
        (root)
        
        console.log(this.props.data[1])
        console.log(root.leaves())

        // set rectangle of treemap
        select(node)
            .selectAll("rect")
            .data(root.descendants())
            .enter()
            .append("rect")
                .attr('x', function (d) { return d.x0; })
                .attr('y', function (d) { return d.y0; })
                .attr('width', function (d) { return d.x1 - d.x0; })
                .attr('height', function (d) { return d.y1 - d.y0; })
                .style("stroke", "white")
                .style("fill", function(d) {
                    return d.height === 2 ? color(d)
                    : d.height === 1 ? color(d.parent)
                    : d.height === 0 ? color(d.parent.parent) 
                    : 'transparent'
                });

        // set text of treemap
        select(node)
            .selectAll("text")
            .data(root.descendants())
            .enter()
            .append("text")
                .attr("x", function(d){ return d.x0})
                .attr("y", function(d){ return d.y0})
                .text(function(d){ return d.data[0]})
                .attr("font-size", "10px")
                .attr('font-weight', 'bold')
                .attr("fill", "black")
    }

render() {
      return (
        <svg ref={this.ref} viewBox={`0 0 ${this.props.width} ${this.props.height}`} />
      );
   }
}

export default Treemap;