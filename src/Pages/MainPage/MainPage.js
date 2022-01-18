import AfterHeader from "./AfterHeader/AfterHeader";
import FeatureCards from "./FeatureCards/FeatureCards";
import { Container } from "@mui/material";
import Articles from "./Articles/Articles";

const MainPage = () => {
  return (
    <main>
      <Container >
        <AfterHeader />
        <FeatureCards />
        <Articles />
      </Container>
    </main>
  );
};

export default MainPage;
