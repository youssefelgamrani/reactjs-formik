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
        handler={formik.handleChange}
        values={formik.values.lastName}
        error={formik.errors.firstName}
      />
      <InputForm
        field="lastName"
        tye="text"
        handler={formik.handleChange}
        values={formik.values.lastName}
        error={formik.errors.lastName}
      />
      <InputForm
        field="email"
        tye="email"
        handler={formik.handleChange}
        values={formik.values.email}
        error={formik.errors.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
