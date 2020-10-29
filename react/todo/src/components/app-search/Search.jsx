import React from "react";

// COMPONENTS
import Filter from "./Filter";

export default class Search extends React.Component {

  addingToLabel = (e) => {
    this.props.addingToLabel(e.target.value);
  }

  render() {
    return (
      <div className={"input-group mb-3"}>
        <input className={"form-control mr-2"} onChange={this.addingToLabel} type={"text"} placeholder={"Search Todo..."} />
        <Filter onFilterChange={this.props.onFilterChange} />
      </div>
    );
  }
} 