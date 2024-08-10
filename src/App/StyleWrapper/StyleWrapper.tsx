import { PropsWithChildren } from "react";
import "./StyleWrapper.css";

const StyleWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="container_1">
      <div className="container_2">{children}</div>
    </div>
  );
};

export default StyleWrapper;
