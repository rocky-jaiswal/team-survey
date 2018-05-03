import * as React from 'react';
import * as d3 from 'd3';
import { AggregateResponseDataType } from '../../constants/types';

interface Props {
  hide?: boolean;
  responseData: AggregateResponseDataType[];
}

class BarChart extends React.Component<Props> {

  // tslint:disable-next-line:no-any
  svgRef: React.RefObject<any>;

  constructor(props: Props) {
    super(props);
    this.svgRef = React.createRef();
  }

  componentDidMount() {
    const dataset = this.props.responseData;

    const svgWidth = 600, svgHeight = 400, barPadding = 5, margin = 20;
    const barWidth = (svgWidth / dataset.length);

    const svg = d3
      .select(this.svgRef.current)
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    const xScale = d3
      .scaleBand()
      .domain(dataset.map(d => d.option))
      .rangeRound([0, svgWidth - barPadding])
      .padding(barPadding / svgWidth);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset.map(d => d.count)) || 0])
      .range([0, svgHeight - margin]);

    svg
      .append('g')
      .attr('transform', `translate(0, ${svgHeight - margin})`)
      .call(d3.axisBottom(xScale));

    const color = d3.scaleOrdinal(d3.schemePastel1);

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('fill', (d) => color(d.option))
      .attr('y', (d) => svgHeight - yScale(d.count) - margin)
      .attr('height', (d) => yScale(d.count))
      .attr('width', barWidth - barPadding)
      .transition()
      .duration(500)
      .attr('transform', (_d: {}, i: number) => {
          const translate = [barWidth * i, 0];
          return `translate(${translate[0]}, ${translate[1]})`;
      });

    svg.selectAll('text.labels')
      .data(dataset)
      .enter()
      .append('text')
      .text((d) => `${d.count}`)
      .attr('y', (d) => svgHeight - margin)
      .attr('x', (d, i) => barWidth * i + (barWidth / 2.3))
      .attr('stroke', '#000');
  }

  render() {
    if (this.props.hide) {
      return <span />;
    }
    return (
      <svg ref={this.svgRef} />
    );
  }

}

export default BarChart;
