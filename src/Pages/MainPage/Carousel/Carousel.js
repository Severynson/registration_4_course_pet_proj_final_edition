import { Box } from "@mui/material";
import severyn from "../../../Images/Severyn.jpg";
import ponasenkov from "../../../Images/Ponasenkov.jpg";
import baumeister from "../../../Images/Baumeister.jpg"
import heidegger from "../../../Images/Heideggert.jpg"
import plato from "../../../Images/Plato.jpg"

const carouselPages = [
  {
    image: severyn,
    name: "Severyn Kurach",
    feedbackText: `Thank you for watching my pet project. It is the fiirst one on React. I hope you would like it! If to be honest I can give feedback just about Maximillian Shwarzmuller's course. It was very  good. I learned a lot from it. I can advice it form 100%!`,
  },
  {
    image: ponasenkov,
    name: "Evgeniy Ponasenkov (Just Maestro)",
    feedbackText: `Maestro gives hist best compliment's! I get learned to make the beast sites. Now I like site estetic much more than art! I lost my mind with so cool framework like React.`, 
  },
  {
    image: baumeister,
    name: "Andriy Baumeister",
    feedbackText: `Why I started to visiting React courses!? Philosophy is hard of course, but React... React is like a hell of Dante!!! AAAAaaaAAaaa!!!`, 
  },
  {
    image: heidegger,
    name: "Martin Heidegger",
    feedbackText: `Dasein? DaSeiiiin!! On this course I had written my first component function, it is: const Dasein = ({dasein}) => {return <p>Hello {dasein}!</p>)};`, 
  },
  {
    image: plato,
    name: "Plato",
    feedbackText: `What I'm doing here??? Am I not dead for 2360+ years already? Severyn, sorry... BUT I CAN'T WRITE A FEEDBACK FOR YOUR PET PROJECT! LIVE ME ALONE!!!`, 
  },

];

const Carousel = () => {
  return (
    <>
      <Box>
        <Box>
        </Box>
      </Box>
    </>
  );
};

export default Carousel;
