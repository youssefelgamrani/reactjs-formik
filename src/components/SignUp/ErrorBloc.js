import React from "react";

export default function ErrorBloc(props) {
  const field = props.field;
  const fieldTouched = props.fieldTouched;
  return field && fieldTouched ? <div>{field}</div> : null;
}
