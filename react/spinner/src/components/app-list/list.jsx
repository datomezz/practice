import React from "react";

// CSS
import "./list.scss";

// COMPONENTS
import ListItem from "../app-list-item";

const List = (props) => {
  const {list} = props;
  return(
    <ul className="spinner-wrapper">
      {
        list.map((item, idx) => {
          return <li key={idx} className={"spinner-wrapper__item"}><ListItem item={item} /></li>
        })
      }

    </ul>
  )
}

export default List;