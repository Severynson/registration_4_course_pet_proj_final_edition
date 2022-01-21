import { Box, Typography, Grid, CardMedia } from "@mui/material";
import severyn from "../../../Images/Severyn.jpg";
import ponasenkov from "../../../Images/Ponasenkov.jpg";
import baumeister from "../../../Images/Baumeister.jpg";
import heidegger from "../../../Images/Heidegger.jpg";
import plato from "../../../Images/Plato.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Translate } from "@mui/icons-material";

const carouselPages = [
  {
    image: severyn,
    name: "Severyn Kurach",
    feedbackText: `Thank you for watching my pet project. It is the fiirst one on React. I hope you would like it! If to be honest I can give feedback just about Maximillian Shwarzmuller's course. It was very  good. I learned a lot from it. I can advice it for 100%!`,
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

  const [offset, setOffset] = useState(0);
  const [showArrowBack, setShowArrowBack] = useState(true);
  const [showArrowForward, setShowArrowForward] = useState(true);
  const quantityOfSlides = carouselPages.length;
  const [sliderPosition, setSliderPosition] = useState(1);


  const [scaleValue, setScaleValue] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const maxW300 = useMediaQuery("(max-width: 299px)");
  const maxW350 = useMediaQuery("(max-width: 349px)");
  const maxW400 = useMediaQuery("(max-width: 399px)");
  const maxW450 = useMediaQuery("(max-width: 449px)");
  const maxW500 = useMediaQuery("(max-width: 499px)");
  const maxW550 = useMediaQuery("(max-width: 549px)");
  const maxW600 = useMediaQuery("(max-width: 599px)");
  const maxW650 = useMediaQuery("(max-width: 649px)");
  const maxW700 = useMediaQuery("(max-width: 699px)");
  const maxW750 = useMediaQuery("(max-width: 749px)");
  const maxW800 = useMediaQuery("(max-width: 799px)");
  const maxW850 = useMediaQuery("(max-width: 849px)");
  const maxW900 = useMediaQuery("(max-width: 899px)");

  useEffect(() => {
    if (sliderPosition === 1) {
      setShowArrowBack(false);
    } else {
      setShowArrowBack(true);
    }

    if (sliderPosition === quantityOfSlides) {
      setShowArrowForward(false);
    } else {
      setShowArrowForward(true);
    }
  }, [sliderPosition, quantityOfSlides]);

  useEffect(() => {
   if (maxW350) {
    setScaleValue(0.35);
    setTranslateX(95);
    setTranslateY(95);
   } else if (maxW400) {
    setScaleValue(0.4);
    setTranslateX(75);
    setTranslateY(80);
   } else if (maxW450) {
    setScaleValue(0.45);
    setTranslateX(59);
    setTranslateY(68);
   } else if (maxW500) {
    setScaleValue(0.5);
    setTranslateX(47);
    setTranslateY(55);
   } else if (maxW550) {
    setScaleValue(0.55);
    setTranslateX(36);
    setTranslateY(43);
   } else if (maxW600) {
    setScaleValue(0.6);
    setTranslateX(27.5);
    setTranslateY(35);
   } else if (maxW650) {
    setScaleValue(0.7);
    setTranslateX(21);
    setTranslateY(25);
   } else if (maxW700) {
    setScaleValue(0.75);
    setTranslateX(15);
    setTranslateY(16);
   } else if (maxW750) {
    setScaleValue(0.8);
    setTranslateX(11);
    setTranslateY(13);
   } else if (maxW800) {
    setScaleValue(0.85);
    setTranslateX(5);
    setTranslateY(8);
   } else if (maxW850) {
    setScaleValue(0.9);
    setTranslateX(2.5);
    setTranslateY(3);
   } else if (maxW900) {
    setScaleValue(1);
    setTranslateX(0);
    setTranslateY(0);
   }
   

  }, [maxW300, maxW350, maxW400, maxW450, maxW500, maxW550, maxW600, maxW650, maxW700, maxW750, maxW800, maxW850]);

  const slideBack = () => {
    const newPosition = offset + 800;
    setOffset(newPosition);
    setSliderPosition((curentValue) => curentValue - 1);
  };

  const slideForward = () => {
    const newPosition = offset - 800;
    setOffset(newPosition);
    setSliderPosition((curentValue) => curentValue + 1);
  };

  return (
    <Box
      sx={{
        width: "800px",
        margin: "0 auto",
        position: "relative",
        transform: `scale(${scaleValue}) translate(-${translateX}%, -${translateY}%)`,
      }}
    >
      {showArrowBack && (
        <ArrowBackIcon
          sx={{
            position: "absolute",
            fontSize: "40px",
            left: 0,
            top: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#868e96",
            borderRadius: "50%",
            zIndex: "100",
          }}
          onClick={slideBack}
        />
      )}
      {showArrowForward && (
        <ArrowForwardIcon
          sx={{
            position: "absolute",
            fontSize: "40px",
            right: 0,
            top: "50%",
            transform: "translate(50%, -50%)",
            backgroundColor: "#868e96",
            borderRadius: "50%",
            zIndex: "100",
          }}
          onClick={slideForward}
        />
      )}
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          borderRadius: "30px",
          bgcolor: "#90caf9",
        }}
      >
        {carouselPages.map(({ image, name, feedbackText }, i) => {
          return (
            <Box
              key={i}
              sx={{
                transform: `translateX(${offset}px)`,
                transition: "all 1s",
              }}
            >
              <Grid container sx={{ width: "800px" }}>
                <Grid item xs={4}>
                  <Box>
                    <CardMedia
                      sx={{
                        width: "100%",
                        height: "auto",
                      }}
                      component="img"
                      image={image}
                      title={name}
                      loading="lazy"
                    />
                  </Box>
                </Grid>
                <Grid item xs={8} sx={{ p: "20px" }}>
                  <Typography variant="h3" sx={{ marginBottom: "6%" }}>
                    {name}
                  </Typography>
                  <Typography variant="body1">{feedbackText}</Typography>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Carousel;