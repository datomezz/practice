import React from "react";

const List = (props) => {
  const {data, onItemSelected} = props;
  
  const content = data.map(item => {
    const {id} = item;
    const label = props.children(item);

    return (
      <li key={id} onClick={() => onItemSelected(id)} className="list-group-item btn btn-secondary mb-2">{label}</li>
    )
  });
  

  return (
    <div className={"col-5"}>
      <ul className="list-group">
        {content}
      </ul>
    </div>
  )
}

export default List;