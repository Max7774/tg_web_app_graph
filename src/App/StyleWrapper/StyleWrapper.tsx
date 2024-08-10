import { PropsWithChildren } from "react";
// import "./StyleWrapper.css";

const StyleWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default StyleWrapper;
