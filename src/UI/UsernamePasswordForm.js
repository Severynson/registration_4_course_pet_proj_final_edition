import {
  Box,
  CardMedia,
  FormControl,
  InputLabel,
  FilledInput,
  Button,
  Grid,
  Typography,
  FormHelperText,
} from "@mui/material";
import hulk from "../Images/Hulk.jpg";
import flanders from "../Images/Flanders.jpg";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import { blue, red } from "@mui/material/colors";
import { Formik, Form, useFormik, useField } from "formik";
import * as Yup from "yup";
const backgroundColor = blue[200];

const hulkData = [hulk, "After course"];
const flandersData = [flanders, "Before course"];



const UsernamePasswordForm = ({ type, sendData }) => {

    const [animation, setAnimation] = useState(hulkData);
    const [bulinForAnimation, setBulinForAnimation] = useState(true);
    
  
    useEffect(() => {
      if (bulinForAnimation) {
        setAnimation(() => flandersData);
      } else if (!bulinForAnimation) {
        setAnimation(() => hulkData);
      }
      stateChangingFunc();
    }, [bulinForAnimation]);
  
    const stateChangingFunc = () => {
      setTimeout(() => {
        setBulinForAnimation((prevState) => !prevState);
      }, 7000);
    };

    const validationSchema = (data) => {
        console.log(data);
    };

    const validate = values => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Required';
        } else if (values.username.length < 5) {
          errors.username = 'Must be 5 characters or more';
        }
      
        if (!values.password) {
          errors.password = 'Required';
        } else if (values.password.length < 6 ||  !/\d/.test(values.password)) {
          errors.password = 'Too short or without numbers';
        }
      
        if (!values.passwordAgain) {
          errors.passwordAgain = 'Required';
        } else if (values.password !== values.passwordAgain) {
          errors.passwordAgain = 'Passwords are not matching';
        }
      
        return errors;
      };

  

  const {handleSubmit, handleChange, values, touched, errors} = useFormik({
      initialValues: {
      login: "",
      password: "",
      passwordAgain: "",
      },
      validationSchema: Yup.object({
          login: Yup.string().min(5, "Must be 5 characters or more").required("Required"),
          password: Yup.string().min(5, "efre").required("Required"),
          passwordAgain: Yup.string().oneOf([Yup.ref("password")], "Passwords are not matching")
      }),
      onSubmit: (values, formikHelpers) => {
        sendData(values);
        formikHelpers.resetForm();
      },
  });

// const [field, meta] = useField(formik.values);
// console.log(formik)

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
      <Box sx={{ width: "300px", position: "relative" }}>
        <CardMedia component="img" src={animation[0]} />
        <Typography sx={{position: "absolute", bottom: "10px", color: "#fff", lineHeight: "0.75", textAlign: "center"}} variant="h2">{animation[1]}</Typography>
      </Box>
      <Grid
        container
        sx={{ width: "400px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Formik>
            <Form onSubmit={handleSubmit}>
                <Grid container direction="column" alignItems="center" width="300px">
              <Grid item>
          <FormControl variant="filled">
            <InputLabel htmlFor="login">Login</InputLabel>
            <FilledInput
              id="login"
              name="login"
              value={values.login}
              onChange={handleChange}
              aria-describedby="component-error-text"
            />
            {touched.login && errors.login && <FormHelperText sx={{color: red[500]}} id="component-error-text">{errors.login}</FormHelperText>}
             </FormControl>
             </Grid>
             <Grid item>
             <FormControl variant="filled">
            <InputLabel htmlFor="password">Password</InputLabel>
            <FilledInput
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              aria-describedby="component-error-text"
            />
            {touched.password && errors.password && <FormHelperText sx={{color: red[500]}} id="component-error-text">{errors.password}</FormHelperText>}
            </FormControl>
            </Grid>
            <Grid item>
            <FormControl variant="filled">
            <InputLabel htmlFor="passwordAgain">Password again</InputLabel>
            <FilledInput
              id="passwordAgain"
              name="passwordAgain"
              value={values.passwordAgain}
              onChange={handleChange}
              aria-describedby="component-error-text"
            />
            {touched.passwordAgain && errors.passwordAgain && <FormHelperText sx={{color: red[500]}} id="component-error-text">{errors.passwordAgain}</FormHelperText>}
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
