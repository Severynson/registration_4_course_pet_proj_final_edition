import itIncubator from "../../../Images/ItIncubator.png";
import * as React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  CardMedia,
  Box,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { blue } from "@mui/material/colors";

const Footer = () => {
  return (
    <footer style={{
          marginTop: "auto"
        }}
        >
               <BottomNavigation
        showLabels
        
      >
        <BottomNavigationAction  label="Instagram" icon={<InstagramIcon sx={{fill: blue[700]}}/>} />
        <BottomNavigationAction label="Twitter" icon={<FacebookIcon  sx={{fill: blue[700]}}/>} />
        <BottomNavigationAction label="Facebook" icon={<TwitterIcon  sx={{fill: blue[700]}}/>} />
      </BottomNavigation>
       <CardMedia component="img" src={itIncubator} sx={{ width: "30%", margin: "0 auto" }} />  
    </footer>
  );
};

export default Footer;
