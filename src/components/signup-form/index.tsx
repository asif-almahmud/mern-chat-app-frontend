import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { object, string } from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = object({
  name: string().required("Please enter name").min(2, "Name too short"),
  email: string().required("Please enter email").email("Invalid email"),
  password: string()
    .required("Please enter password")
    .min(8, "Password should be minimum of 8 characters"),
});

type Props = {};

const SignupForm = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (
    values: typeof initialValues,
    formikHelpers: FormikHelpers<typeof initialValues>
  ) => {
    console.log({ values });
    formikHelpers.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            <Field
              name="name"
              type="text"
              as={TextField}
              variant="standard"
              color="primary"
              label="Name *"
              fullWidth
              error={Boolean(errors.name) && Boolean(touched.name)}
              helperText={Boolean(touched.name) && errors.name}
            />
            <Box height={14} />
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="standard"
              color="primary"
              label="Email *"
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={14} />
            <Field
              name="password"
              type={showPassword ? "text" : "password"}
              as={TextField}
              variant="standard"
              color="primary"
              label="Password *"
              fullWidth
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((prev) => !prev)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box height={24} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={!dirty || !isValid}
            >
              Signup
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
