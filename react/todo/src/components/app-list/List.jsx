import React from "react";

// Components
import ListItem from "./ListItem";
import ListButtons from "./ListButtons";

export default class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styleState : false
    }
  }

  render() {
    const {todoList, onDelete, onDone} = this.props; 
    
    return (
      <ol>
        {
          todoList.map((item, index) => {
            return(
              <li className="app__list d-flex justify-content-between align-items-center border p-2 my-3" key={index}>
                <ListItem isDone={item.done} value={item.value} />
                <ListButtons onDone={() => onDone(index)} onDelete={() => onDelete(index)} />
              </li>
            )
          })
        }
      </ol>
    );
  }

}