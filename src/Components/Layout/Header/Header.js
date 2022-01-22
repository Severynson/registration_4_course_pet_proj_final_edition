import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
const navTextColor = grey[50];

const navStyle = () => ({isActive}) => ({color: isActive ? "#1565c0" : "#fafafa", backgroundColor: isActive ? "#fafafa" : "", textDecoration: "none", transition: "all 0.5s", transform: isActive ? "translateY(10%)" : ""});

const Header = () => {
  const maxW700 = useMediaQuery("(max-width: 700px)");
  const [navBar, setNavBar] = useState(false);


  return (
    <Box>
      {/* <Box sx={{position: "fixed", top: "50%", left: "50%", width: "100vh", height: "100vh", bgcolor: "#1565c0", opacity: "0", transition: "all 1s", transform: "translate(-50%, -50%)"}}>Home</Box> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: navTextColor }}
            onClick={() => setNavBar((prevState => !prevState))}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: navTextColor }}>
            It-incubator
          </Typography>
          {!maxW700 && <><NavLink to="admin" style={navStyle()}>
            <Button color="inherit" >Admin</Button>
          </NavLink>
          <NavLink to="registration" style={navStyle()}>
            <Button color="inherit" >Registration</Button>
          </NavLink>
          <NavLink to="login" style={navStyle()}>
            <Button color="inherit" >Login</Button>
          </NavLink></>}
          <NavLink to="mainpage" style={navStyle()}>
            <Button color="inherit" ><HomeIcon /></Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
