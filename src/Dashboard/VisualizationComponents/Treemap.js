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

        const x = scaleLinear().rangeRound([0, this.props.width])
        const y = scaleLinear().rangeRound([0, this.props.height])

        var platform = this.props.platform
        var type = this.props.type
        var genre = this.props.genre

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

        // render the treemap given the svg node and the root from which draw rectangles
        function render(root) {
            var depth = root.depth+1

            // used to make responsive the treemap
            x.domain([root.x0, root.x1])
            y.domain([root.y0, root.y1])

            select(node)
                .selectAll("rect")
                .data(root.descendants())
                .enter()

                // view only two levels of the hierarchy at the same time 
                .filter(d => d.depth === depth || d.depth === depth-1)
                //.filter(d => d.data[0] === platform)
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
                    .attr('cursor', 'pointer')
                    //.on('click', (event, d) => d === root? console.log('root') : console.log(d.data[0]));
                    .on('click', function(event, d) { 
                        if (d === root) {
                            zoomout(root);
                        }
                        else { 
                            zoomin(d);
                        }})
            
            // set text of treemap
            select(node)
                .selectAll("text")
                .data(root.descendants())
                .enter()
                .filter(d => d.depth === depth || d.depth === depth-1)
                .append("text")
                    .attr("x", function(d){ return x(d.x0)+5})
                    .attr("y", function(d){ return y(d.y0)+15})
                    .text(function(d){ 
                        return d.depth === 0? "All: " + d.value
                        : x(d.x1)-x(d.x0) > 100? d.data[0] + ": " + d.value
                        : x(d.x1)-x(d.x0) > 50? d.data[0]
                        : "..."
                    })
                    .attr("font-size", function(d) {
                        return x(d.x1)-x(d.x0) > 100 && y(d.y1)-y(d.y0) > 20? "1em"
                        : x(d.x1)-x(d.x0) > 50 && y(d.y1)-y(d.y0) > 10? "0.8em"
                        : "0.3em"})
                    .attr('font-weight', 'bold')
                    .attr("fill", function(d) {
                        return d.depth === 1 ? txtColor(d.data[0]) 
                        : d.depth === 2 ? txtColor(d.parent.data[0])
                        : d.depth === 3 ? txtColor(d.parent.parent.data[0])
                        : 'white'
                    })
        }

        function zoomin(root) {
            if (root.parent) {
                console.log(platform)
                select(node)
                    .selectAll('*')
                    .remove()
                render(root)
            }
        }

        function zoomout(root) {
            if (root.parent) { 
                select(node)
                    .selectAll("*")
                    .remove()
                render(root.parent)
            }
        }

        render(root)
    }

render() {
    return (
        <svg ref={this.state.ref} viewBox={`-5 -20 ${this.props.width+20} ${this.props.height+20}`}/>
    );
   }
}

export default Treemap;