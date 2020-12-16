import React, {Component} from "react";

// COMPONENTS
import Item from "./item";

export default class Body extends Component {

  render() {
    const {list} = this.props;

    const todoList = list.length > 0 ? list : [{id : 0, value : "no value", isDone : false}];

    return (
      <ul className={"list-group"}>
        {
          todoList.map((item, index) => {
            return <Item key={item.id} value={item.value} isDone={todoList[index].isDone} changeImportantStatus={() => this.props.changeImportantStatus(item.id)} removeItem={() => this.props.removeItem(item.id)}/>
          })
        }
      </ul>
    )
  }
}