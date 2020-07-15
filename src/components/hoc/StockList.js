import React, { Component } from "react";
import TableRow from "../shared/TableRow";

export default class StockList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [
        {
          id: 1,
          name: "TCS",
        },
        {
          id: 2,
          name: "Infosys",
        },
        {
          id: 3,
          name: "Reliance",
        },
      ],
    };
  }

  tabRow() {
    const stocks = this.state.stocks;
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
              <td>Stock Name</td>
              <td>Stock Price</td>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
