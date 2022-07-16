import React from 'react'

import { select } from 'd3-selection'
import { scaleOrdinal, scaleLinear } from 'd3-scale'
import { axisBottom, axisLeft } from 'd3-axis'
import { max, bin } from 'd3-array'


class VoteHistogram extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            ref: React.createRef(),
        }
        this.plotHist = this.plotHist.bind(this)
    }

    componentDidMount() {
        this.props.data? this.plotHist() : console.log('no data')
    }

   componentDidUpdate() {
        this.props.data? this.plotHist() : console.log('no data')
    }

    plotHist() {
        // reference to svg
        const node = this.state.ref.current
        clean()

        const margin = {top: 10, right: 10, bottom: 10, left: 10}
        const width = this.props.width - margin.left - margin.right
        const height = this.props.height - margin.top - margin.bottom

        // color of rectangles
        const color = scaleOrdinal()
            .domain(['Netflix', 'Prime', 'Disney', null])
            .range([ "#B81D24", "#00A8E1", "#113CCF", "#69b3a2"])


        const data = this.props.data.filter(d => this.props.platform? d.platform === this.props.platform : true)
            .filter(d => this.props.type? d.type === this.props.type : true)
            .filter(d => this.props.genre? d.genre.includes(this.props.genre) : true)

        const x_max = this.props.vote === 'imdb' ? 10 : 100

        const platformVotes = this.props.vote === 'imdb' ? data.map(d => d.imdb) 
            : this.props.vote === 'rt' ? data.map(d => d.rt)
            : data.map(d => d.mc)


        //console.log(data)

        // X-axis
        var x = scaleLinear()
            .domain([0, x_max])
            .range([0, width]);

        select(node)
            .append("g")
            .attr("transform", "translate(0," + height + ")")
            .style("font-size", 18)
            .call(axisBottom(x));

        var histogram = bin()
            .domain(x.domain())
            .thresholds(x.ticks(this.props.tick))

        var bins = histogram(platformVotes.filter(d => d > 0))

        var y = scaleLinear()
            .range([height, 0])
            .domain([0, max(bins, function(d) { return d.length; })]);

        select(node)
            .append("g")
            .style("font-size", 18)
            .call(axisLeft(y));
        
        
        select(node)
            .selectAll("rect")
            .data(bins)
            .enter()
            .append("rect")
                .attr("class", "bar")
                .attr("x", 1)
                .attr("transform", function(d) {
                    return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
                .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
                .attr("height", function(d) { return height - y(d.length); })
                .style("fill", color(this.props.platform))
                

        function clean() {
            select(node)
                .selectAll("*")
                .remove()
        }
    }

render() {
    return (
        <svg ref={this.state.ref} viewBox={`-60 -10 ${this.props.width+60} ${this.props.height+20}`}/>
    );
   }
}

export default VoteHistogram;