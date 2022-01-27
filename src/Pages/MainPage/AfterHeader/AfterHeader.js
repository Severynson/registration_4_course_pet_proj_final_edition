import { Grid } from "@mui/material";
import Gallery from "./Gallery/Gallery";
import reactImg from "../../../Images/react.png";
import { Typography, Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const AfterHeader = () => {
  const minW555 = useMediaQuery("(min-width: 555px)");
  const maxW554 = useMediaQuery("(max-width: 554px)");
  const maxW493 = useMediaQuery("(max-width: 493px)");

  return (
    <Grid
      container
      spacing={3}
      justifyContent="space-around"
      alignItems="center"
      sx={{ marginBottom: "20px" }}
    >
      <Grid item md={6}>
        <Box sx={{ maxWidth: "500px", padding: "50px" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: `${
                (minW555 && "60px") ||
                (maxW493 && "40px") ||
                (maxW554 && "50px")
              }`,
            }}
          >
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
