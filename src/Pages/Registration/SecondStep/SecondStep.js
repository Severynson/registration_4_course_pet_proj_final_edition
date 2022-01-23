import { Box, Grid, Button, TextField, FormHelperText } from "@mui/material";
import { AccountCircle, Collections, Instagram, MarkEmailRead, Phone } from "@mui/icons-material";
import { blue, red, teal } from "@mui/material/colors";
import { useMediaQuery } from "@mui/material";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
const backgroundColor = blue[200];
const imgButtonBgColor = red[300];
const submitButtonBgColor = teal[500];

const SecondStep = ({sendData}) => {
  const maxW700 = useMediaQuery("(max-width: 699px)");

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      instagram: "",
      phone: "",
      aboutYourself: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Minimum 2 characters")
        .required("Required"),
      surname: Yup.string()
        .min(3, "Minimum 3 characters")
        .required("Required"),
      phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('A phone number is required'),
    }),
    onSubmit: (values, formikHelpers) => {
      sendData({...values, acceptionStatus: "unwatched yet"
    });
    },
  });

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
        <Formik>
        <Form onSubmit={handleSubmit}>
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} >
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2, mr: 1 }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField  id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange} label="Name" variant="standard" />
        
      </Box>
      {(
          touched.name && errors.name &&
                    <FormHelperText
                      sx={{ color: red[500] }}
                      id="component-error-text"
                    >
                      {errors.name}
                    </FormHelperText>
                  )}
      </Grid>
      <Grid item xs={12} sm={6}>
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField  id="surname"
                      name="surname"
                      value={values.surname}
                      onChange={handleChange} label="Surname" variant="standard" />
      </Box>
      {(
          touched.surname && errors.surname &&
                    <FormHelperText
                      sx={{ color: red[500] }}
                      id="component-error-text"
                    >
                      {errors.surname}
                    </FormHelperText>
                  )}
      </Grid>
      <Grid item xs={12} sm={6}>
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2, mr: 1 }}>
        <Phone sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField  id="phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange} label="Phone" variant="standard" />
      </Box>
      {(
          touched.phone && errors.phone &&
                    <FormHelperText
                      sx={{ color: red[500] }}
                      id="component-error-text"
                    >
                      {errors.phone}
                    </FormHelperText>
                  )}
      </Grid>
      <Grid item xs={12} sm={6}>
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
        <Instagram sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField  id="instagram"
                      name="instagram"
                      value={values.instagram}
                      onChange={handleChange} label="Instagram" variant="standard" />
      </Box>
      </Grid>
      </Grid>

      <TextField  id="aboutYourself"
                      name="aboutYourself"
                      value={values.aboutYourself}
                      onChange={handleChange} multiline rows={5} placeholder="A litle bit about yourself. Why do you want to learn?" variant="outlined" sx={{mb: 2, width: "100%"}} />

      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        name="raised-button-file"
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
          sx={{ bgcolor: submitButtonBgColor, width: "100%"}}
          component="button"
          startIcon={< MarkEmailRead />}
          type="submit"
        >
          Finish registration
        </Button>
        </Form>
        </Formik>
    </Box>
  );
};

export default SecondStep;
