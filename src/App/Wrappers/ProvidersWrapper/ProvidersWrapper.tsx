import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";

const ProvidersWrapper = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProvidersWrapper;
