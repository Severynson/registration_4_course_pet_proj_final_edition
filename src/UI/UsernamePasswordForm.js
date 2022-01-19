import {
  Box,
  CardMedia,
  FormControl,
  InputLabel,
  FilledInput,
  Button,
  Grid,
} from "@mui/material";
import hulk from "../Images/Hulk.jpg";
import flanders from "../Images/Flanders.jpg";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { blue } from "@mui/material/colors";
import { Formik, Form, useFormik } from "formik";
const backgroundColor = blue[200];

const UsernamePasswordForm = ({ type, sendData }) => {

  const formik = useFormik({
      initialValues: {
      username: "",
      password: "",
      passwordAgain: "", 
      },
      onSubmit: values => {
        console.log(values);
      },
  });

  const [image, setImage] = useState(hulk);


  return (
    <Box
      sx={{
        m: "0 auto",
        mt: "10%",
        display: "flex",
        bgcolor: backgroundColor,
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: "300px" }}>
        <CardMedia component="img" src={image} />
      </Box>
      <Grid
        container
        sx={{ width: "400px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Formik>
            <Form onSubmit={formik.handleSubmit}>
                <Grid container direction="column" alignItems="center">
              <Grid item>  
          <FormControl variant="filled">
            <InputLabel htmlFor="username">Username</InputLabel>
            <FilledInput
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
             </FormControl>
             </Grid>
             <Grid item>
             <FormControl variant="filled">
            <InputLabel htmlFor="password">Password</InputLabel>
            <FilledInput
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            </FormControl>
            </Grid>
            <Grid item>
            <FormControl variant="filled">
            <InputLabel htmlFor="passwordAgain">Password again</InputLabel>
            <FilledInput
              id="passwordAgain"
              name="passwordAgain"
              value={formik.values.passwordAgain}
              onChange={formik.handleChange}
            />
            </FormControl>
            </Grid>
            <Grid item>
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Submit
            </Button>
            </Grid>
          </Grid>
          </Form>
        </Formik>
      </Grid>
    </Box>
  );
};

export default UsernamePasswordForm;
