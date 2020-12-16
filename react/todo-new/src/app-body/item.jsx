import React, {Component} from "react";

// STYLES
import "./item.scss";

export default class Item extends Component {
  state = {
    done : false,
    important : false
  }

  changeDoneStatus = () => {
    this.setState((state) => {
      return {
        done : !state.done
      }
    });
  }
  
  changeImportantStatus = () => {
    this.setState((state) => {
      return {
        important : !state.important
      }
    });
  }
  
  render() {
    let itemClass = "todo-list__title";

    let activeClass = this.state.done ? `${itemClass} todo-list__title--active` : itemClass;

    this.state.important 
    ? activeClass += ` todo-list__title--important` 
    : activeClass = activeClass;

    const {isDone} = this.props;

    let isDoneClass = "";
    isDone ? isDoneClass = "btn-success text-light" : isDoneClass = "";

    return (
      <li 
        className={`list-group-item todo-list__container d-flex flex-row justify-content-between`}>
        <span className={`todo-list__title ${activeClass}`} onClick={this.changeDoneStatus} >
          {this.props.value}
        </span>
        <div className={"todo-button__container"}>
          <button className={`btn btn-outline-success ${isDoneClass}`} onClick={this.props.changeImportantStatus}>!</button>
          <button className={"btn btn-outline-primary ml-2"} onClick={this.props.removeItem}>X</button>
        </div>
      </li>
    )
  }
}