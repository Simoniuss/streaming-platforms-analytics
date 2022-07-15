import React from 'react'

import { select } from 'd3-selection'
import { treemap, hierarchy } from 'd3-hierarchy'
import { rollup } from 'd3-array'
import { scaleOrdinal, scaleLinear } from 'd3-scale'



class Treemap extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            ref: React.createRef(),
        }
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
        const node = this.state.ref.current
        clean()

        const x = scaleLinear().rangeRound([0, this.props.width])
        const y = scaleLinear().rangeRound([0, this.props.height])

        // color of boxes
        var color = scaleOrdinal()
            .domain(['Netflix', 'Prime', 'Disney'])
            .range([ "#B81D24", "#00A8E1", "#113CCF"])

        var txtColor = scaleOrdinal()
            .domain(['Netflix', 'Prime', 'Disney'])
            .range([ "white", "black", "white"])


        // group by platform, type, and the first genre
        var groups = rollup(this.props.data,
                            v => v.length,
                            d => d.platform,
                            d => d.type,
                            function(d) { return d.genre[0]; }
                            )
        
        // root hierarchy 
        var root = hierarchy(groups);
        root.sum(function(d) { return d[1];})
            .sort((a, b) => b.height - a.height || b.value - a.value);

        // treemap layout
        treemap()
            .size([this.props.width, this.props.height])
            .paddingTop(20)
            .paddingRight(1)
            .paddingLeft(1)
            .paddingBottom(2)
            .paddingInner(0)
        (root)
        
        //console.log(this.props.data[1])
        //console.log(root.leaves())

        // find the node to show of the hierarchy
        // genre and type are the same for all nodes because to group by genre I save only the first genre of the list
        this.props.genre?
            render(root.find(d => d.data[0] === this.props.platform)
                .find(d => d.data[0] === this.props.type))
            : this.props.type?
                render(root.find(d => d.data[0] === this.props.platform)
                    .find(d => d.data[0] === this.props.type))
            : this.props.platform?
                render(root.find(d => d.data[0] === this.props.platform))
            : render(root)

        // render the treemap given the svg node and the root from which draw rectangles
        function render(root) {
            // used to make responsive the treemap
            x.domain([root.x0, root.x1])
            y.domain([root.y0, root.y1])

            // draw the rectangles
            select(node)
                .selectAll("rect")
                .data(root.descendants())
                .enter()
                .append("rect")
                    .attr('x', function (d) { return x(d.x0); })
                    .attr('y', function (d) { return y(d.y0); })
                    .attr('width', function (d) { return x(d.x1) - x(d.x0); })
                    .attr('height', function (d) { return y(d.y1) - y(d.y0); })
                    .style("stroke", "white")
                    .style("fill", function(d) {
                        return d.depth === 1 ? color(d.data[0]) 
                        : d.depth === 2 ? color(d.parent.data[0])
                        : d.depth === 3 ? color(d.parent.parent.data[0])
                        : '#282626'
                    })
            
            // set text of treemap
            select(node)
                .selectAll("text")
                .data(root.descendants())
                .enter()
                .append("text")
                    .attr("x", function(d){ return x(d.x0)+5})
                    .attr("y", function(d){ return y(d.y0)+15})
                    .text(function(d){ 
                        return d.depth === 0? "All"
                        : x(d.x1)-x(d.x0) > 40 && y(d.y1)-y(d.y0) > 20? d.data[0]
                        : "..."
                    })
                    .attr("font-size", function(d) {
                        return x(d.x1)-x(d.x0) > 100 && y(d.y1)-y(d.y0) > 20? "1.2em"
                        : x(d.x1)-x(d.x0) > 60 && y(d.y1)-y(d.y0) > 20? "0.8em"
                        : x(d.x1)-x(d.x0) > 30 && y(d.y1)-y(d.y0) > 20? "0.6em"
                        : "0.4em"})
                    .attr('font-weight', 'bold')
                    .attr("fill", function(d) {
                        return d.depth === 1 ? txtColor(d.data[0]) 
                        : d.depth === 2 ? txtColor(d.parent.data[0])
                        : d.depth === 3 ? txtColor(d.parent.parent.data[0])
                        : 'white'
                    })
        }

        function clean() {
            select(node)
                .selectAll("*")
                .remove()
        }
    }

render() {
    return (
        <svg ref={this.state.ref} viewBox={`-5 -20 ${this.props.width+30} ${this.props.height+20}`}/>
    );
   }
}

export default Treemap;