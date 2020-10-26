import React from "react";

// Components
import ListItem from "./ListItem";

export default class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styleState : false
    }
  }

  render() {
    const {todoList} = this.props; 
    
    return (
      <ol>
        {
          todoList.map((item, index) => {
            return(
              <li key={index}>
                <ListItem value={item.value} />
              </li>
            )
          })
        }
      </ol>
    );
  }

}