import React from "react";

export default class Add extends React.Component {

  state = {
    label : ""
  }

  addingToLabel = (e) => {
    this.setState({label : e.target.value});
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.addedText(this.state.label);
  }

  render() {
    const {addTodo} = this.props;

    return (
      <form className={"input-group mb-3"} onSubmit={this.submitForm}>
        <input className={"form-control mr-2"} onChange={this.addingToLabel} type={"text"} placeholder={"Write Some"} />
        <button className={"btn btn-warning"} onClick={addTodo}>Add</button>
      </form>
    );
  }
} 