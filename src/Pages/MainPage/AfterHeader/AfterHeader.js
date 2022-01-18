import { Grid } from "@mui/material";
import Gallery from "./Gallery/Gallery";
import reactImg from "../../../Images/react.png"
import { Typography, Box } from "@mui/material";

const AfterHeader = () => {
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
          <Typography variant="h2">
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
