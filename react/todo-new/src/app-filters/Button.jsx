import React, {Component} from "react";

export default class Button extends Component {
  
  render() {

    const {name, isActive, onActiveChange} = this.props;

    const activeClass = isActive ? "active" : null;

    return (
      <button 
        type="button" 
        className={`btn btn-outline-primary ${activeClass}`}
        onClick={onActiveChange}
        >{name}</button>
    )
  }
}