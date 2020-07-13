import React from "react";
import "./styles.css";
import ErrorBloc from "./ErrorBloc";

export default function InputForm(props) {
  return (
    <>
      <input
        id={props.field}
        name={props.field}
        type={props.type}
        onChange={props.changeHandler}
        onBlur={props.blurHandler}
        value={props.field.values}
      />
      <ErrorBloc field={props.error} fieldTouched={props.inputTouched} />
    </>
  );
}
