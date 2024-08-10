import { PropsWithChildren } from "react";
import "./Header.css";

const Header = ({ children }: PropsWithChildren) => {
  return <div className="header_main">{children}</div>;
};

export default Header;
