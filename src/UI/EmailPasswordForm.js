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
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
const backgroundColor = blue[200];
const hulkData = [hulk, "After course"];
const flandersData = [flanders, "Before course"];

const EmailPasswordForm = ({ type, sendData }) => {
  const [isRegistration] = useState(
    type === "registration" ? true : false
  );
  const [animation, setAnimation] = useState(hulkData);
  const [bulinForAnimation, setBulinForAnimation] = useState(true);

  useEffect(() => {
    if (bulinForAnimation) {
      setAnimation(() => flandersData);
    } else if (!bulinForAnimation) {
      setAnimation(() => hulkData);
    }
    setTimeout(() => {
      setBulinForAnimation((prevState) => !prevState);
    }, 7000);
  }, [bulinForAnimation]);

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordAgain: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Uncorrect email")
        .required("Required"),
      password: Yup.string()
        .min(6)
        .matches(/\d/, "Has to include a number")
        .required("Required"),
      passwordAgain:
        isRegistration &&
        Yup.string().oneOf([Yup.ref("password")], "Passwords are not matching").required("Required"),
    }),
    onSubmit: (values, formikHelpers) => {
      const {email, password} = values;
      const dataToSend = {email, password};
      sendData(dataToSend);
      formikHelpers.resetForm();
    },
  });

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
      <Grid container>
      <Grid item xs={12} md={6} xl={6} sx={{ width: "300px", height: "300px", position: "relative" }}>
        <CardMedia component="img" src={animation[0]} height="300px" width= "300px" />
        <Typography
          sx={{
            position: "absolute",
            bottom: "10px",
            color: "#fff",
            lineHeight: "0.75",
            textAlign: "center",
          }}
          variant="h2"
        >
          {animation[1]}
        </Typography>
      </Grid>
      <Grid item  xs={12} md={6} xl={6} justifyContent="center" alignItems="center">
      <Grid
        sx={{marginTop: "17%", marginBottom: "45px"}}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Formik>
          <Form onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              alignItems="center"
              width="300px"
            >
              <Grid item>
                <FormControl variant="filled">
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <FilledInput
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-describedby="component-error-text"
                  />
                  {touched.email && errors.email && (
                    <FormHelperText
                      sx={{ color: red[500] }}
                      id="component-error-text"
                    >
                      {errors.email}
                    </FormHelperText>
                  )}
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
                  {touched.password && errors.password && (
                    <FormHelperText
                      sx={{ color: red[500] }}
                      id="component-error-text"
                    >
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              {isRegistration && (
                <Grid item>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="passwordAgain">
                      Password again
                    </InputLabel>
                    <FilledInput
                      id="passwordAgain"
                      name="passwordAgain"
                      value={values.passwordAgain}
                      onChange={handleChange}
                      aria-describedby="component-error-text"
                    />
                    {touched.passwordAgain && errors.passwordAgain && (
                      <FormHelperText
                        sx={{ color: red[500] }}
                        id="component-error-text"
                      >
                        {errors.passwordAgain}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              )}

              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
      </Grid>
      </Grid>
    </Box>
  );
};

export default EmailPasswordForm;
