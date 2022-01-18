import { Box, Typography, Grid, CardMedia, styled } from "@mui/material";
import severyn from "../../../Images/Severyn.jpg";
import ponasenkov from "../../../Images/Ponasenkov.jpg";
import baumeister from "../../../Images/Baumeister.jpg";
import heidegger from "../../../Images/Heidegger.jpg";
import plato from "../../../Images/Plato.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";

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
  const [sliderScale, setSliderScale] = useState(1);
  const [offset, setOffset] = useState(0);
  const [showArrowBack, setShowArrowBack] = useState(true);
  const [showArrowForward, setShowArrowForward] = useState(true);
  const quantityOfSlides = carouselPages.length;
  const [sliderPosition, setSliderPosition] = useState(1);
  const [sliderZPosition, setSliderZPosition] = useState(0);
  const [sliderYPosition, setSliderYPosition] = useState(0);

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
  }, [sliderPosition]);

  useEffect(() => {
    const width = window.screen.width;
    if (width < 950 && width >= 850) {
      setSliderScale(0.9);
      console.log("111111111");
    } else if (width < 850 && width >= 750) {
      setSliderScale(0.8);
      console.log("2222222222");
    } else if (width < 750 && width >= 650) {
      setSliderScale(0.75);
      console.log("33333333");
    } else if (width < 650 && width >= 550) {
      setSliderScale(0.6);
      console.log("44444444444");
    } else if (width < 550 && width >= 450) {
      setSliderScale(0.5);
      console.log("5555555555");
    } else if (width < 450 && width >= 350) {
        setSliderScale(0.4)
    }

    if (width >= 350 && width < 450) {
      console.log("111111111");
      setSliderZPosition(75);
      setSliderYPosition(75)
    } else if (width >=450 && width < 500) {
        setSliderZPosition(47.5);
        setSliderYPosition(40)
     } else if (width >=500 && width <550) {
        setSliderZPosition(41);
        setSliderYPosition(50);
    } else if (width >=550 && width < 650) {
        setSliderZPosition(30);
        setSliderYPosition(30);
    } else if (width >=650 && width < 750) {
        setSliderZPosition(16.5);
        setSliderYPosition(20);
    } else if (width >=750 && width <= 850) {
        setSliderZPosition(7.5);
        setSliderYPosition(10);
    }

    console.log(window.screen.width);
  }, []);

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
        transform: `scale(${sliderScale}) translate(-${sliderZPosition}%, -${sliderYPosition}%)`,
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
