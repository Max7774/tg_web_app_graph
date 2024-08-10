import Chart from "./Chart/Chart";
import FetchChartWrapper from "./Wrappers/FetchChartWrapper/FetchChartWrapper";
import ProvidersWrapper from "./Wrappers/ProvidersWrapper/ProvidersWrapper";
import StyleWrapper from "./Wrappers/StyleWrapper/StyleWrapper";

import "./App.css";

function App() {
  return (
    <ProvidersWrapper>
      <StyleWrapper>
        <FetchChartWrapper>
          <Chart />
        </FetchChartWrapper>
      </StyleWrapper>
    </ProvidersWrapper>
  );
}

export default App;
