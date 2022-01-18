import AfterHeader from "./AfterHeader/AfterHeader";
import FeatureCards from "./FeatureCards/FeatureCards";
import { Container } from "@mui/material";
import Articles from "./Articles/Articles";
import Carousel from "./Carousel/Carousel";

const MainPage = () => {
  return (
    <main>
      <Container sx={{overflow: "hidden"}}>
        <AfterHeader />
        <FeatureCards />
        <Articles />
        <Carousel />
      </Container>
    </main>
  );
};

export default MainPage;
