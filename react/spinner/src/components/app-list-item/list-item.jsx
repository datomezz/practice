import React from "react";

// CSS
import "./list-item.scss";

const ListItem = (props) => {
  const {item} = props;
  const {id, img, label, title, product_id} = item;
  return (
    <div className="list-item">
      <div className={"list-item__img--wrapper"}>
        <img src={img} alt={label} className={"list-item__img"} />
      </div>
    </div>
  )
}

export default ListItem;