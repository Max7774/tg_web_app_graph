import { PureComponent } from "react";

export class CustomizedLabel extends PureComponent {
  render() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { x, y, stroke, value } = this.props as any;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}
