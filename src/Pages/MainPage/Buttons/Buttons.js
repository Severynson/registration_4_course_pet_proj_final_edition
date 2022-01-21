import { Button, Box } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();
  const maxW390 = useMediaQuery("(max-width: 390px)");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
        flexDirection: maxW390 ? "column" : "row",
      }}
    >
      <Button
        size="large"
        variant="outlined"
        endIcon={<PermIdentityIcon />}
        sx={{ m: 2 }}
        onClick={() => navigate("/login")}
      >
        Log In
      </Button>
      <Button
        size="large"
        variant="contained"
        endIcon={<PersonAddIcon />}
        sx={{ m: 2 }}
        onClick={() => navigate("/registration")}
      >
        Registration
      </Button>
    </Box>
  );
};

export default Buttons;
