import React from "react";

// CSS
import "./list.scss";

// COMPONENTS
import ListItem from "../app-list-item";

const List = (props) => {
  const {list, giftId} = props;

  const transformToGift = giftId ? {transform : `translate3d(-${giftId * 10}rem, 0, 0)`} : null;

  return(
    <ul className="spinner-wrapper" style={transformToGift}>
      {
        list.map((item, idx) => {
          return <li key={idx} className={"spinner-wrapper__item"}><ListItem item={item} /></li>
        })
      }

    </ul>
  )
}

export default List;