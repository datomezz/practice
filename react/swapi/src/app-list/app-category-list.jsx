import React, {Component} from "react";

// STYLE
import "./app-category-list.scss";

export default class CategoryList extends Component{

  render() {
    return(
      <ul className={"list-group w-100"}>
        <li key={"some"} className={"list-group-item"}>Some Item</li>
        <li key={"some1"} className={"list-group-item"}>Some Item</li>
        <li key={"some2"} className={"list-group-item"}>Some Item</li>
      </ul>
    )
  }
}