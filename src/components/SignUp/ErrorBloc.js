import React from "react";

export default function ErrorBloc(props) {
  const field = props.field;
  return field ? <div>{field}</div> : null;
}
