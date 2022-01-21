import { Grid, Box, Typography, IconButton } from "@mui/material";
import { Fragment } from "react";
import { blue, teal, red } from "@mui/material/colors";
import {CheckBox, DeleteForever} from '@mui/icons-material';
import React from "react";
const  itemsBgColor = blue[200];
const checkBoxColor = teal[500];
const deniedColor = red[500];

const DUMMY_USERLIST = [
    {
        name: "Severyn", surname: "Kurach", aboutYourself: "Hi, I'm Severyn! Want to study a lot! Please, let me in..."
    },
    {
        name: "Roman", surname: "Nihto", aboutYourself: "Hi, I'm boring! Don't want to study at all! Let me in if you want))"
    },
    {
        name: "Syava", surname: "Krasava", aboutYourself: "Hi, I'm very cool guy, but lazy! Want to study a lot! Please, let me in..."
    },
];

const Admin = () => {
    return ( <Box sx={{margin: "0 auto"}}>
        <Grid container sx={{width: "800px" ,m: "0 auto" ,marginTop: "9%"}} columns={4} >
        <Grid item sx={{ bgcolor: itemsBgColor}}>
                  <Box display="flex" sx={{width: "800px"}}>
            <Box border="2px solid black" width="100px" p="10px">
                <Typography variant="h6" fontWeight="bold">Name</Typography>
            </Box>
            <Box border="2px solid black" width="100px" p="10px">
                <Typography variant="h6" fontWeight="bold">Surname</Typography>
            </Box>
            <Box border="2px solid black" width="400px" p="10px"> 
                <Typography variant="h6" fontWeight="bold">About</Typography>
            </Box>
            <Box border="2px solid black" width="200px" p="10px">
            <Typography variant="h6" fontWeight="bold">Accept / Denie</Typography>
            </Box>
            </Box>
             </Grid>
          {DUMMY_USERLIST.map((item, i) => (
              <Grid item key={i} sx={{ bgcolor: itemsBgColor}}>
                  <Box display="flex" sx={{width: "800px" ,m: "0 auto"}}>
            <Box border="2px solid black" width="100px" p="10px">
                {item.name}
            </Box>
            <Box border="2px solid black" width="100px" p="10px">
                {item.surname}
            </Box>
            <Box border="2px solid black" width="400px" p="10px">
                {item.aboutYourself}
            </Box>
            <Box border="2px solid black" width="200px" p="10px">
            <IconButton sx={{bgcolor: checkBoxColor, mr: "20%"}}><CheckBox /></IconButton>
            <IconButton sx={{bgcolor: deniedColor}}><DeleteForever /></IconButton>
            </Box>
            </Box>
             </Grid>
          ))}
        </Grid>
      </Box>);
};

export default Admin;