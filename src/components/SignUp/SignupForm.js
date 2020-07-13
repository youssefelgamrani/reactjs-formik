import React from "react";
import { useFormik } from "formik";
import { validate } from "./SignupFormValidation";
import InputForm from "./InputForm";
import "./styles.css";

export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <InputForm
        field="firstName"
        tye="text"
        changeHandler={formik.handleChange}
        blurHander={formik.handleBlur}
        values={formik.values.lastName}
        error={formik.errors.firstName}
        inputTouched={formik.touched.firstName}
      />
      <br />
      <InputForm
        field="lastName"
        tye="text"
        changeHandler={formik.handleChange}
        blurHander={formik.handleBlur}
        values={formik.values.lastName}
        error={formik.errors.lastName}
        inputTouched={formik.touched.lastName}
      />
      <br />
      <InputForm
        field="email"
        tye="email"
        changeHandler={formik.handleChange}
        blurHander={formik.handleBlur}
        values={formik.values.email}
        error={formik.errors.email}
        inputTouched={formik.touched.email}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
