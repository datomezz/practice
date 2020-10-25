import React from "react";

export default ({onChange, addTodo}) => {
  return (
    <div className={"input-group"}>
      <input className={"form-control mr-2"} onChange={onChange} type={"text"} placeholder={"Write Some"} />
      <button className={"btn btn-danger"} onClick={addTodo}>Add</button>
    </div>
  );
}