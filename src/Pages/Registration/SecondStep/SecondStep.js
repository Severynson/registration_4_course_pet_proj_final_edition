import { Box, Grid, Button, TextField } from "@mui/material";
import { AccountCircle, Collections } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
const backgroundColor = blue[200];


const SecondStep = () => {

    return <Box sx={{
        m: "0 auto",
        mt: "10%",
        display: "flex",
        bgcolor: backgroundColor,
        borderRadius: "30px",
        overflow: "hidden",
      }}>
        <Grid container width={"20px"} sx={{p: "20px"}}>
            <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="With sx" variant="standard" />
      </Box>
            </Grid>
            <Grid item></Grid>
            <Grid item>
            <input
  accept="image/*"

  style={{ display: 'none' }}
  id="raised-button-file"
  multiple
  type="file"
/>
<label htmlFor="raised-button-file">
  <Button variant="raised" component="span" startIcon={<Collections />}>
    Uppload image
  </Button>
</label>
            </Grid>
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
        </Grid>
    </Box>
};

export default SecondStep;