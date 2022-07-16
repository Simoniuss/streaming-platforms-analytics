import React from 'react'

import { select } from 'd3-selection'
import { scaleOrdinal, scaleLinear, scaleBand } from 'd3-scale'
import { axisBottom, axisLeft } from 'd3-axis'
import { line } from 'd3-shape'
import { max } from 'd3-array'


class RevenuesLinePlot extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            ref: React.createRef(),
        }
        this.plotRevenues = this.plotRevenues.bind(this)
    }

    componentDidMount() {
        this.props.rev? this.plotRevenues() : console.log('no data')
    }

   componentDidUpdate() {
        this.props.rev? this.plotRevenues() : console.log('no data')
    }

    plotRevenues() {
        // reference to svg
        const node = this.state.ref.current
        clean()

        const margin = {top: 10, right: 10, bottom: 10, left: 10}
        const width = this.props.width - margin.left - margin.right
        const height = this.props.height - margin.top - margin.bottom

        // color of lines
        const color = scaleOrdinal()
            .domain(['Netflix', 'Prime', 'Disney'])
            .range([ "#B81D24", "#00A8E1", "#113CCF"])

        const scale = 1000000

        const platform = this.props.platform? [this.props.platform] : ['Netflix', 'Prime', 'Disney']

        const data = this.props.platform? this.props.rev.filter(d => d.platform === this.props.platform)
            : this.props.rev

        const x_values = [...new Set(data.map(d => d.quarter))].sort()

        const y_max = max(data, d => d.revenue)/scale

        // return data as a list of objects with the name of platform and the pair (quarter, revenue)
        // with multiple platforms return a list of list of objects
        const dataReady = platform.map( function(plat) {
            return {
                name: plat,
                values: data.filter(d => d.platform === plat)
                    .map( function(d) {
                        return {quarter: d.quarter, revenue: d.revenue/scale} })
            }
        })

        //console.log(dataReady)

        // X-axis
        var x = scaleBand()
            .domain(x_values)
            .range([0, width])
            .padding(0.3)

        select(node)
            .append("g")
            .attr("transform", "translate(0," + height + ")")
            .style("font-size", 14)
            .call(axisBottom(x).tickSize(10))
        
        select(node)
            .append("text")
            .attr("class", "x label")
            .style("text-anchor", "middle")
            .style("fill", "white")
            .attr("x", width / 2 )
            .attr("y",  height + 60)
            .style("font-size", 22)
            .text("Yearly quarters")


        // Y-axis
        var y = scaleLinear()
            .domain([0, y_max])
            .range([height, 0])
        
        select(node)
            .append("g")
            .style("font-size", 14)
            .call(axisLeft(y))

        select(node)
            .append("text")
            .attr("transform", "rotate(-90)")
            .style("text-anchor", "middle")
            .attr("fill", "white")
            .attr("y", -70)
            .attr("x",0 - (height / 2))
            .style("font-size", 22)
            .text("Revenues (in millions $)")


        // add lines    
        var l = line()
            .x(function(d) { return x(d.quarter) })
            .y(function(d) { return y(d.revenue) })

        select(node)
            .selectAll("myLines")
            .data(dataReady)
            .enter()
            .append("path")
                .attr("d", function(d){ return l(d.values) } )
                .attr("stroke", function(d){ return color(d.name) })
                .style("stroke-width", 4)
                .style("fill", "none")
   

        // Add the circle to each point
        select(node)
            .selectAll("myDots")
            .data(dataReady)
            .enter()
                .append('g')
                    .style("fill", function(d){ return color(d.name) })
            .selectAll("myPoints")
                .data(function(d){ return d.values })
                .enter()
                .append("circle")
                    .attr("cx", function(d) { return x(d.quarter) } )
                    .attr("cy", function(d) { return y(d.revenue) } )
                    .attr("r", 6)
                    .attr("stroke", "none")
                  
        
        // Add a legend at the end of each line
        select(node)
            .selectAll("myLabels")
            .data(dataReady)
            .enter()
                .append('g')
                .append("text")
                    .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
                    .attr("transform", function(d) { return "translate(" + x(d.value.quarter) + "," + y(d.value.revenue) + ")"; })
                    .attr("x", 15) // shift the text a bit more right
                    .text(function(d) { return d.name; })
                    .style("fill", function(d){ return color(d.name) })
                    .style("font-size", 20)
                    .style("font-weight", "bold")
        

        function clean() {
            select(node)
                .selectAll("*")
                .remove()
        }
    }

render() {
    return (
        <svg ref={this.state.ref} viewBox={`-90 -20 ${this.props.width+110} ${this.props.height+70}`}/>
    );
   }
}

export default RevenuesLinePlot;