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
import { object, ref, string } from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = object({
  name: string().required("Please enter name").min(2, "Name too short"),
  email: string().required("Please enter email").email("Invalid email"),
  password: string()
    .required("Please enter password")
    .min(6, "Password should be minimum of 6 characters"),
  confirmPassword: string()
    .required("Please enter password")
    .min(6, "Password should be minimum of 6 characters")
    .oneOf([ref("password"), null], "Password didn't match"),
});

type Props = {};

const Signup = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (
    values: typeof initialValues,
    formikHelpers: FormikHelpers<typeof initialValues>
  ) => {
    console.log({ values });
    formikHelpers.resetForm();
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, isValid, touched, dirty, values, validateField }) => (
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
            <Box height={14} />
            <Field
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              as={TextField}
              variant="standard"
              color="primary"
              label="Confirm Password *"
              fullWidth
              error={
                Boolean(errors.confirmPassword) &&
                Boolean(touched.confirmPassword)
              }
              helperText={
                Boolean(touched.confirmPassword) && errors.confirmPassword
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
              disabled={
                Boolean(errors.name) ||
                Boolean(errors.email) ||
                Boolean(errors.password) ||
                values.confirmPassword.length === 0 ||
                !(values.confirmPassword.length >= values.password.length)
              }
            >
              Signup
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
