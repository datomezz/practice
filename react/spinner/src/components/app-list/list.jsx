import React from "react";

// COMPONENTS
import ListItem from "../app-list-item";

const List = (props) => {
  const {list} = props;
  return(
    <ul className="row">
      {
        list.map((item, idx) => {
          return <li key={idx} className={"list-group-item col-3"}><ListItem item={item} /></li>
        })
      }

    </ul>
  )
}

export default List;