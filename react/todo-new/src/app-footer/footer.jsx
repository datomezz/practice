import React, {Component} from "react";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      value : ""
    }
  }

  changeTitle = (e) => {
    this.setState({value : e.target.value});
  }

  submitingForm = (e) =>{
    e.preventDefault();
    if(this.state.value.length !== 0) {
      this.props.addNewTodo(this.state.value)
      this.setState((state) => {
        return {
          value : ""
        }
      })
    };
  }

  render() {

    return (
      <form className={"input-group my-2"} onSubmit={this.submitingForm}>
        <input type="text" className={"form-control"} onChange={this.changeTitle} placeholder="my doto..." value={this.state.value}/>
        <button type="submit" className={"btn btn-primary ml-2"}>ADD</button>
      </form>
    )
  }
}