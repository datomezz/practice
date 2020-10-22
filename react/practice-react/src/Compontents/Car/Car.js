import React from "react";
import "./car.scss";

class Car extends React.Component {
  
  render() {
    const inputArr = ["input"];

    this.props.name !== "" ? inputArr.push("red") : inputArr.push("green");

    return (
      <div className={"car__container"}>
        <h3>{this.props.name}</h3>
        <h3>{this.props.year}</h3>
        <button onClick={this.props.onChangeTitle}>Click</button>
        <input className={inputArr.join(" ")} onChange={this.props.onChangeHandler} value={this.props.name} />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

export default Car;