import { Grid } from "@mui/material";
import Gallery from "./Gallery/Gallery";
import reactImg from "../../../Images/react.png"
import { Typography, Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";


const AfterHeader = () => {
  const minW545 = useMediaQuery("(min-width: 545px)");
  const maxW544 = useMediaQuery("(max-width: 544px)");
  const maxW480 = useMediaQuery("(max-width: 480px)");
  let typographyVariant;
  if (minW545) {
    typographyVariant = "h2"
  } else if (maxW544) {
    typographyVariant = "h3"
  } else if (maxW480) {
    typographyVariant = "body1"
  }

  return (
    <Grid
      container
      spacing={3}
      justifyContent="space-around"
      alignItems="center"
      sx={{marginBottom: "20px"}}
    >
      <Grid item md={6}>
        <Box sx={{ maxWidth: "500px", padding: "50px" }}>
          <Typography variant={typographyVariant}>
            Become true professional in React{" "}
            <img height="50px" src={reactImg} alt="React icon" /> with us
          </Typography>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Gallery />
      </Grid>
    </Grid>
  );
};

export default AfterHeader;
