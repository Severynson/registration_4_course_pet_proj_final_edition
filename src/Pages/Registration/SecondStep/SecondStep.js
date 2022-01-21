import { Box, Grid, Button, TextField } from "@mui/material";
import { AccountCircle, Collections, Instagram, Phone } from "@mui/icons-material";
import { blue, red, teal } from "@mui/material/colors";
const backgroundColor = blue[200];
const imgButtonBgColor = red[300];
const submitButtonBgColor = teal[500];

const SecondStep = () => {
  return (
    <Box
      sx={{
        m: "0 auto",
        justifyContent: "center",
        mt: "10%",
        display: "grid",
        flexDirection: "column",
        bgcolor: backgroundColor,
        borderRadius: "30px",
        overflow: "hidden",
        p: 3
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Name" variant="standard" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Surname" variant="standard" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
        <Phone sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Phone" variant="standard" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
        <Instagram sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Instagram" variant="standard" />
      </Box>

      <TextField id="input-with-sx" multiline rows={2} rowsMax={10} placeholder="A litle bit about yourself. Why do you want to learn?" variant="outlined" sx={{mb: 2}} />

      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button
          variant="raised"
          sx={{ bgcolor: imgButtonBgColor, mb: 2 }}
          component="span"
          startIcon={<Collections />}
        >
          Uppload avatar image
        </Button>
       </label> 
        <Button
          variant="raised"
          sx={{ bgcolor: submitButtonBgColor }}
          component="span"
          startIcon={<Collections />}
        >
          Uppload avatar image
        </Button>
    </Box>
  );
};

export default SecondStep;
