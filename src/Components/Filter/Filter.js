import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  render() {
    return (
      <>
        <h3 className="Filter__title">Find contacts by name</h3>
        <input
          className="Filter__input"
          type="text"
          name="filter"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </>
    );
  }
}

export default Filter;
