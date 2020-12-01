import React, {Component} from "react";

// COMPONENTS
import Item from "./item";

export default class Body extends Component {

  render() {
    const {list} = this.props;

    const todoList = list.length > 0 ? list : [{id : 0, value : "no value"}];

    return (
      <ul className={"list-group"}>
        {
          todoList.map(item => {
            return <Item key={item.id} value={item.value} removeItem={() => this.props.removeItem(item.id)}/>
          })
        }
      </ul>
    )
  }
}