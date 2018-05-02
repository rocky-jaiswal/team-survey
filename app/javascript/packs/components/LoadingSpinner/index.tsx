import * as React from 'react';
import * as d3 from 'd3';

interface Props {
  visible: boolean;
}

interface StateProps {
  x: number;
  timer: number;
}

class LoadingSpinner extends React.Component<Props> {

  // tslint:disable-next-line:no-any
  svgRef: React.RefObject<any>;
  state: StateProps;

  constructor(props: Props) {
    super(props);
    this.svgRef = React.createRef();
    this.state = {
      x: 1,
      timer: window.setInterval(() => props.visible && this.updateState(), 100)
    };
  }

  updateState() {
    this.setState({
      x: this.state.x <= 6 ? this.state.x + 1 : 1
    });

    d3.select(this.svgRef.current)
      .select('#loading-spinner-rotator path')
      .transition()
      .duration(100)
      .attr('transform', 'translate(100, 100)')
      .attr('transform', `rotate(${45 * this.state.x})`);
  }

  componentDidMount() {
    const svgWidth = 35, svgHeight = 35;

    const svg = d3
      .select(this.svgRef.current)
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    const arcBase = d3.arc()
      .innerRadius(10)
      .outerRadius(15)
      .startAngle(0)
      .endAngle(2 * Math.PI);

    const arcRotator = d3.arc()
      .innerRadius(10)
      .outerRadius(15)
      .startAngle(0)
      .endAngle(0.25 * 2 * Math.PI);

    svg
      .append('g')
      .attr('transform', 'translate(20, 20)')
      .append('path')
      .attr('d', arcBase)
      .attr('fill', '#EEE');

    svg
      .append('g')
      .attr('id', 'loading-spinner-rotator')
      .attr('transform', 'translate(20, 20)')
      .append('path')
      .attr('d', arcRotator)
      .attr('fill', '#F76560');
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    if (!this.props.visible) {
      return <span />;
    }
    return (
      <svg id="loading-spinner" ref={this.svgRef} />
    );
  }

}

export default LoadingSpinner;
