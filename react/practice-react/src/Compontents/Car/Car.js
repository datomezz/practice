import React from "react";
import "./car.css";

class Car extends React.Component {
  
  render() {
    return (
      <div className={"car__container"}>
        <h3>{this.props.name}</h3>
        <h3>{this.props.year}</h3>
        <button onClick={this.props.onChangeTitle}>Click</button>
        <input onChange={this.props.onChangeHandler} value={this.props.name} />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

export default Car;