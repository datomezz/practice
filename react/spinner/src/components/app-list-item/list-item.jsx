import React from "react";

const ListItem = (props) => {
  const {item} = props;
  const {id, img, label, title, product_id} = item;
  return (
    <div className="card">
      <img src={img} alt={label} className={"card-img-top"} />
      <div className="card-body">
        <h5 className={"card-title"}>Title :{title}</h5>
        <b>PRODUCT ID : {product_id}</b>
        <b>ID : {id}</b>
      </div>
    </div>
  )
}

export default ListItem;