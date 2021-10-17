import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input
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
