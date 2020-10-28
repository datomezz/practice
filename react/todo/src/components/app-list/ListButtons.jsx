import React, {Component} from "react";

export default class ListButtons extends Component {

  render() {
    return (
      <div className="buttons__container d-flex align-items-center">
        <button onClick={this.props.onDelete} className="btn btn-danger mr-2"><i className="uil uil-trash"></i></button>
        <button onClick={this.props.onDone} className="btn btn-success"><i className="uil uil-check"></i></button>
      </div>
    )
  }
} 