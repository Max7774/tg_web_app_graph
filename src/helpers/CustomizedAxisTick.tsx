import { PureComponent } from "react";

export class CustomizedAxisTick extends PureComponent {
  render() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { x, y, payload } = this.props as any;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}
