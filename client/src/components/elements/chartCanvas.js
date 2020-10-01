import React, {useContext, useRef, useEffect} from 'react';
import {UploadContext} from '../../contexts/uploadContext';
import * as d3 from 'd3';

interface IProps {
	data?: numbers[]
}

//SAMPLE data
const width = 1044;
const height = 500;
const hMargin = 50;
const fhMargin = hMargin*2;
const vMargin = 50;
const fvMargin = vMargin*2;

export const ChartCanvas = (props: IProps) => {

	const formatTime = d3.timeParse("%Y-%m-%d");
	const d3Container = useRef(null);
	const {dataURL, setDataURL} = useContext(UploadContext);

	useEffect(() => {
		d3.selectAll('svg *').remove();

		if (dataURL && d3Container.current) {
			const svg = d3.select(d3Container.current);

			d3.csv(dataURL, function(d) {
				// Format data
				return { date: formatTime(d.date), value: d.value };
			}).then(function(data) {

				// Define the div for the tooltip
				var div = d3.select("#ChartWrap").append("div")
						.attr("class", "tooltip")
						.style("opacity", 0);

				//add xaxis
				var x = d3.scaleTime()
					.domain(d3.extent(data, function(d) { return d.date; }))
					.range([ 0, width-fhMargin]);

				svg.append('g')
					.attr('transform', 'translate('+hMargin+',' + (height - vMargin) + ')')
					.call(d3.axisBottom(x));

				//add yaxis
				var y = d3.scaleLinear()
					.domain([0, d3.max(data, function(d) {return +d.value;})])
					.range([ height-fvMargin, 0 ]);

				svg.append('g')
					.attr('transform', 'translate(' + (hMargin) +', '+ vMargin +')')
					.call(d3.axisLeft(y));

				svg.append('path')
					.datum(data)
					.attr('fill', 'none')
					.attr('stroke', 'steelblue')
					.attr('stroke-width', 1.5)
					.attr('fill', 'none')
					.attr('transform', 'translate(' + (hMargin) +', '+ vMargin +')')
					.attr('d', d3.line()
							.x(function(d) { return x(d.date); })
							.y(function(d) { return y(d.value); })
						);

				// Add the scatterplot
				svg.selectAll("dot")
						.data(data)
				.enter().append("circle")
						.attr('r', 5)
						.attr("cx", function(d) { return x(d.date); })
						.attr("cy", function(d) { return y(d.value); })
						.attr("data-x", function(d) { return d3.timeFormat('%x')(d.date); })
						.attr("data-y", function(d) { return d.value; })
						.attr('transform', 'translate(' + (hMargin) +', '+ vMargin +')')
						.attr('opacity', '0')
						.on("mouseover", function(evt) {
								let target = evt.target;
								d3.select(this)
									.transition()
									.duration(200)
									.attr('opacity', '1');

								div.transition()
										.duration(200)
										.style("opacity", .9);
								div.html(target.dataset.x + "<br/>"  + target.dataset.y)
										.style("left", (evt.pageX + 20) + "px")
										.style("top", (evt.pageY - 50) + "px");
								})
						.on("mouseout", function(evt) {
								d3.select(this)
									.transition()
									.duration(100)
									.attr('opacity', '0');

								div.transition()
										.duration(500)
										.style("opacity", 0);
						});
			});
		} else {
		}
	}, [dataURL, d3Container.current]);

	return (
	<svg
	 className='d3-component'
	 width={width}
	 height={height}
	 ref={d3Container}
	 id='ChartCanvas'>
	</svg>
	);
}

export default ChartCanvas;
