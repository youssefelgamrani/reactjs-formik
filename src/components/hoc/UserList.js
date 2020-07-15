import React, { Component } from "react";
import TableRow from "../shared/TableRow";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Krunal",
        },
        {
          id: 2,
          name: "Ankit",
        },
        {
          id: 3,
          name: "Rushabh",
        },
      ],
    };
  }

  tabRow() {
    const stocks = this.state.users;
    if (stocks instanceof Array) {
      return stocks.map((obj, i) => {
        return <TableRow obj={obj} key={i} />;
      });
    }
  }
  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
