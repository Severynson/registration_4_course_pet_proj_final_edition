import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Home, Menu, Person, PersonAdd, AdminPanelSettings } from '@mui/icons-material';
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { NavLink, useNavigate } from "react-router-dom";
import reactDom from "react-dom";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
const navTextColor = grey[50];

const navStyle = () => ({isActive}) => ({color: isActive ? "#1565c0" : "#fafafa", backgroundColor: isActive ? "#fafafa" : "", textDecoration: "none", transition: "all 0.5s", transform: isActive ? "translateY(10%)" : ""});

const Header = () => {
  const navigate = useNavigate();
  const maxW700 = useMediaQuery("(max-width: 700px)");
  const [navBar, setNavBar] = useState(false);


  if (!navBar) return (
     <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: navTextColor }}
            onClick={() => setNavBar((prevState => !prevState))}
          >
            <Menu />
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
            <Button color="inherit" ><Home /></Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );

  if (navBar) return reactDom.createPortal(
  <Box sx={{position: "fixed", top: "50%", left: "50%", width: "100%", height: "100vh", bgcolor: "#1565c0", transition: "all 1s", transform: "translate(-50%, -50%)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "100"}}>
    <Box sx={{ display: "flex" ,flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
    <Button
        size="large"
        variant="outlined"
        endIcon={<Home />}
        sx={{ m: 2, bgcolor: "#fff", width: "300px" }}
        onClick={() => {
          navigate("/mainpage")
          setNavBar(prevState => !prevState)
        }}
      >
        Homepage
      </Button>
    <Button
        size="large"
        variant="outlined"
        endIcon={<Person />}
        sx={{ m: 2, bgcolor: "#fff", width: "300px" }}
        onClick={() => {
          navigate("/login")
          setNavBar(prevState => !prevState)
        }}
      >
        Log In
      </Button>
    <Button
        size="large"
        variant="outlined"
        endIcon={<PersonAdd />}
        sx={{ m: 2, bgcolor: "#fff", width: "300px" }}
        onClick={() => {
          navigate("/registration")
          setNavBar(prevState => !prevState)
        }}
      >
        Registration
      </Button>
    <Button
        size="large"
        variant="outlined"
        endIcon={<AdminPanelSettings />}
        sx={{ m: 2, bgcolor: "#fff", width: "300px" }}
        onClick={() => {
          navigate("/admin")
          setNavBar(prevState => !prevState)
        }}
      >
        Admin mod
      </Button>
    </Box>
  </Box>, document.getElementById('portal'));
}

export default Header;
