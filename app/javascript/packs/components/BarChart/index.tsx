import * as React from 'react';
import * as d3 from 'd3';

interface Props {
  visible?: boolean;
}

class BarChart extends React.Component<Props> {

  // tslint:disable-next-line:no-any
  svgRef: React.RefObject<any>;

  constructor(props: Props) {
    super(props);
    this.svgRef = React.createRef();
  }

  componentDidMount() {
    const dataset: { name: string, value: number }[] = [
      { name: 'Option1', value: 10 },
      { name: 'Option2', value: 15 },
      { name: 'Option3', value: 50 },
      { name: 'Option4', value: 30 },
      { name: 'Option5', value: 15 },
    ];

    const svgWidth = 800, svgHeight = 400, barPadding = 5, margin = 20;
    const barWidth = (svgWidth / dataset.length);

    const svg = d3
      .select(this.svgRef.current)
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    const xScale = d3
      .scaleBand()
      .domain(dataset.map(d => d.name))
      .rangeRound([0, svgWidth - barPadding])
      .padding(barPadding / svgWidth);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset.map(d => d.value)) || 0])
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
      .attr('fill', (d) => color(d.name))
      .attr('y', (d) => {
          return svgHeight - yScale(d.value) - margin;
      })
      .attr('height', (d) => {
        return yScale(d.value);
      })
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
      .text((d) => {
        return `${d.value}`;
      })
      .attr('y', (d) => {
        return svgHeight - margin;
      })
      .attr('x', (d, i) => {
          return barWidth * i + (barWidth / 2.3);
      })
      .attr('fill', '#FFF');
  }

  render() {
    if (!this.props.visible) {
      return <span />;
    }
    return (
      <svg ref={this.svgRef} />
    );
  }

}

export default BarChart;
