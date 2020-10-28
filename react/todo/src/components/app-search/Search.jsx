import React from "react";

export default class Search extends React.Component {

  addingToLabel = (e) => {
    this.props.addingToLabel(e.target.value);
  }

  render() {
    return (
      <div className={"input-group mb-3"}>
        <input className={"form-control mr-2"} onChange={this.addingToLabel} type={"text"} placeholder={"Search Todo..."} />
        <button className={"btn btn-dark"} onClick={this.addTodo}>Search</button>
      </div>
    );
  }
} 