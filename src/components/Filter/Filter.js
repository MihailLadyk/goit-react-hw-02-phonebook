import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Filter extends Component {
  render() {
    return (
      <div>
        <h2>Filter</h2>
        <input type="input" onChange={this.props.Filter} />
      </div>
    );
  }
  static propTypes = {
    Filter: PropTypes.func,
  };
}
