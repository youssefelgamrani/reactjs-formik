import React from "react";

export default function TableRow(props) {
  return (
    <tr>
      <td>{props.obj.id}</td>
      <td>{props.obj.name}</td>
    </tr>
  );
}
