import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  InputFormText,
  InputFormSelect,
  InputFormCheckBox,
} from "../shared/InputForm";
import "./styles.css";
import * as Yup from "yup";

const yupValidation = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  acceptedTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions."),
  jobType: Yup.string()
    .oneOf(["designer", "development", "product", "other"], "Invalid Job Type")
    .required("Required"),
});

export default function SignupForm() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        acceptedTerms: false,
        jobType: "",
      }}
      validationSchema={yupValidation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <InputFormText
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Yo"
        />
        <InputFormText
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Eg"
        />
        <InputFormText
          label="Email Address"
          name="email"
          type="email"
          placeholder="yoeg@gmail.com"
        />
        <InputFormSelect label="Job Type" name="jobType">
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="development">Developer</option>
          <option value="product">Product Manager</option>
          <option value="other">Other</option>
        </InputFormSelect>
        <InputFormCheckBox name="acceptedTerms">
          I accept the terms and conditions
        </InputFormCheckBox>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
