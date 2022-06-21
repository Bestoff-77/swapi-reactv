import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Button, FormControl, InputLabel, FormHelperText, Input } from '@mui/material';
import { useFormik } from 'formik';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      date_of_birth: ""
    },
    validate: (values) => {
      let errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.first_name) {
        errors.first_name = "First name is required";
      }
      if (!values.last_name) {
        errors.last_name = "Last name is required";
      }
      if (!values.date_of_birth) {
        errors.date_of_birth = "Date of Birth is required";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log("values: ", values);
    },
  });

  return (
    <div className="main">
      <Header/>
      <form className="mt-4" onSubmit={formik.handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="first_name">First Name:</InputLabel>
          <Input id="first_name" aria-describedby="my-helper-text" value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
          <FormHelperText id="my-helper-text">
            {formik.errors.first_name && formik.touched.first_name && (<span>{formik.errors.first_name}</span>)}
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="last_name">Last Name:</InputLabel>
          <Input id="last_name" aria-describedby="my-helper-text" value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
          <FormHelperText id="my-helper-text">
            {formik.errors.last_name && formik.touched.last_name && (<span>{formik.errors.last_name}</span>)}
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="date_of_birth">Date of Birth:</InputLabel>
          <Input id="date_of_birth" aria-describedby="my-helper-text" value={formik.values.date_of_birth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
          <FormHelperText id="my-helper-text">
            {formik.errors.date_of_birth && formik.touched.date_of_birth && (<span>{formik.errors.date_of_birth}</span>)}
          </FormHelperText>
        </FormControl>

        <Button variant="primary" type="submit" className="w-100" disabled={formik.isSubmitting}>
          Sign in
        </Button>
      </form>
      <Footer />
    </div>
  );
}
