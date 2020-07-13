import React from "react";
import "../SignUp/styles.css";
import { useField } from "formik";

function ErrorBloc(props) {
  return props.touched && props.error ? (
    <div className="error">{props.error}</div>
  ) : null;
}

export function InputFormText({ label, ...props }) {
  const [field, metadata] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorBloc touched={metadata.touched} error={metadata.error} />
    </>
  );
}

export function InputFormCheckBox({ children, ...props }) {
  const [field, metadata] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      <ErrorBloc touched={metadata.touched} error={metadata.error} />
    </>
  );
}

export function InputFormSelect({ label, ...props }) {
  const [field, metadata] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorBloc touched={metadata.touched} error={metadata.error} />
    </>
  );
}
