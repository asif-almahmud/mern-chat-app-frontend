import { Box, Button, TextField } from "@mui/material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const handleSubmit = (
  values: typeof initialValues,
  formikHelpers: FormikHelpers<typeof initialValues>
) => {
  console.log({ values });
};

type Props = {};

const SignupForm = (props: Props) => {
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Field
              name="name"
              type="text"
              as={TextField}
              variant="standard"
              color="primary"
              label="Name"
              fullWidth
            />
            <Box height={14} />
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="standard"
              color="primary"
              label="Email"
              fullWidth
            />
            <Box height={14} />
            <Field
              name="password"
              type="password"
              as={TextField}
              variant="standard"
              color="primary"
              label="Password"
              fullWidth
            />
            <Box height={16} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
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
