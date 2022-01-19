import AfterHeader from "./AfterHeader/AfterHeader";
import FeatureCards from "./FeatureCards/FeatureCards";
import { Container } from "@mui/material";
import Articles from "./Articles/Articles";
import Carousel from "./Carousel/Carousel";
import Buttons from "./Buttons/Buttons";

const MainPage = () => {
  return (
    <main>
      <Container sx={{ overflow: "hidden" }}>
        <AfterHeader />
        <FeatureCards />
        <Articles />
        <Carousel />
      </Container>
      <Buttons />
    </main>
  );
};

export default MainPage;
