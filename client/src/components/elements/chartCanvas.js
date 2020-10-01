import React, {useRef, useEffect} from 'react';
import * as d3 from 'd3';

interface IProps {
	data?: numbers[]
}
//SAMPLE data
const DATA = 'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv';
const width = 1044;
const height = 500;
const hMargin = 50;
const fhMargin = hMargin*2;
const vMargin = 50;
const fvMargin = vMargin*2;




export const ChartCanvas = (props: IProps) => {

	const d3Container = useRef(null);

	useEffect(() => {
		if (props.data && d3Container.current) {
			const svg = d3.select(d3Container.current);

			d3.csv(DATA, function(d) {
				// Format data
				return { date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value };
			}).then(function(data) {

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
					
			});
		}
	}, [props.data, d3Container.current]);

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
