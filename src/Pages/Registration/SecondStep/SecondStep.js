import { Box, Grid, Button, TextField } from "@mui/material";
import { AccountCircle, Collections, Instagram, MarkEmailRead, Phone } from "@mui/icons-material";
import { blue, red, teal } from "@mui/material/colors";
import { useMediaQuery } from "@mui/material";
const backgroundColor = blue[200];
const imgButtonBgColor = red[300];
const submitButtonBgColor = teal[500];

const SecondStep = () => {
  const maxW700 = useMediaQuery("(max-width: 699px)");

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
        maxWidth: maxW700 ? "300px" : `600px`,
        p: 3
      }}
    >
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} >
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2, mr: 1 }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Name" variant="standard" />
      </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Surname" variant="standard" />
      </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2, mr: 1 }}>
        <Phone sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Phone" variant="standard" />
      </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
        <Instagram sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Instagram" variant="standard" />
      </Box>
      </Grid>
      </Grid>

      <TextField id="input-with-sx" multiline rows={5} placeholder="A litle bit about yourself. Why do you want to learn?" variant="outlined" sx={{mb: 2}} />

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
          sx={{ bgcolor: imgButtonBgColor, mb: 2, width: "100%" }}
          component="span"
          startIcon={<Collections />}
        >
          Uppload avatar image
        </Button>
       </label>
        <Button
          variant="raised"
          sx={{ bgcolor: submitButtonBgColor}}
          component="span"
          startIcon={< MarkEmailRead />}
        >
          Finish registration
        </Button>
    </Box>
  );
};

export default SecondStep;
