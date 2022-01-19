import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
const navTextColor = grey[50];

const navStyle = () => ({isActive}) => ({color: isActive ? "#1565c0" : "#fafafa", backgroundColor: isActive ? "#fafafa" : "", textDecoration: "none", transition: "all 0.5s", transform: isActive ? "translateY(10%)" : ""});

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: navTextColor }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: navTextColor }}>
            It-incubator
          </Typography>
          <NavLink to="admin" style={navStyle()}>
            <Button color="inherit" >Admin</Button>
          </NavLink>
          <NavLink to="registration" style={navStyle()}>
            <Button color="inherit" >Registration</Button>
          </NavLink>
          <NavLink to="login" style={navStyle()}>
            <Button color="inherit" >Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
