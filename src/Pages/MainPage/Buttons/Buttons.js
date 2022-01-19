import { Grid, Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <Grid container spacing={2} sx={{ width: "390px", margin: "20px auto" }}>
      <Grid item xs={6}>
        <Link
          to="/registration"
          style={{ textDecoration: "none", color: "#fafafa" }}
        >
          <Button size="large" variant="contained" endIcon={<PersonAddIcon />}>
            Registration
          </Button>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/login" style={{ textDecoration: "none", color: "#1976d2" }}>
          <Button
            size="large"
            variant="outlined"
            endIcon={<PermIdentityIcon />}
          >
            Log In
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Buttons;
