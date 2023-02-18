import { Container, CssBaseline } from "@mui/material";
import { containerStyle } from "./theme/customStyles";
import WeatherBox from "./pages/WeatherBox";
import { StaticCityBox } from "./components";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container sx={containerStyle}>
        <StaticCityBox />
        <WeatherBox />
      </Container>
    </>
  );
};

export default App;

//  Dopo questo progetto posso confermare che REACT mi fa cagare
