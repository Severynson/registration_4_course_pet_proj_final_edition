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
        // alert(JSON.stringify(values, null, 2));
        console.log(values);
      },
  });

  const [image, setImage] = useState(hulk);
//   const [username, setUsername] = useState("Composed TextField");
//   const handleChange = (event) => {
//     setUsername(event.target.value);
//   };

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
        sx={{ width: "500px" }}
        justifyContent="center"
        alignItems="center"
      >
        {/* <form onSubmit={(e) => {
              e.preventDefault();
              sendData([1, "works"])}}>
              <input />
              <input />
              <button>Submit</button>
          </form> */}

        <Formik>
            <Form onSubmit={formik.handleSubmit}>
          <FormControl variant="filled">
            <InputLabel htmlFor="username">Username</InputLabel>
            <FilledInput
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
             </FormControl>
             <FormControl variant="filled">
            <InputLabel htmlFor="password">Password</InputLabel>
            <FilledInput
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            </FormControl>
            <FormControl variant="filled">
            <InputLabel htmlFor="passwordAgain">Password again</InputLabel>
            <FilledInput
              id="passwordAgain"
              name="passwordAgain"
              value={formik.values.passwordAgain}
              onChange={formik.handleChange}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Submit
            </Button>
          </FormControl>
          </Form>
        </Formik>
      </Grid>
    </Box>
  );
};

export default UsernamePasswordForm;
