import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div>
        <h2>Filter</h2>
        <input type="input" onChange={this.props.Filter} />
      </div>
    );
  }
}
