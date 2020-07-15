import React, { Component } from "react";

export default function ListHoc(HocComponent, data) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
      };
    }

    render() {
      return <HocComponent data={this.state.data} {...this.props} />;
    }
  };
}
