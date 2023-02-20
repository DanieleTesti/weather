import { Container } from "@mui/material";
import { containerStyle } from "./theme/customStyles";
import WeatherBox from "./pages/WeatherBox";
import { StaticCityBox } from "./components";

const App = () => {
  return (
    <>
      <Container sx={containerStyle}>
        <StaticCityBox />
        <WeatherBox />
      </Container>
    </>
  );
};

export default App;

//  Dopo questo progetto posso confermare che REACT mi fa cagare
//  ma ho sperimentato molto su alcuni metodi e librerie che non conoscevo
