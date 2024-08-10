import Chart from "./Chart/Chart";
import Header from "./Header/Header";
import StyleWrapper from "./StyleWrapper/StyleWrapper";
function App() {
  return (
    <StyleWrapper>
      <Header>График жизенных показателей User</Header>
      <Chart />
    </StyleWrapper>
  );
}

export default App;
