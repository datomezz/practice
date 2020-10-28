import React from "react";

const Search = ({onChange, addTodo}) => {
  return (
    <div className={"input-group mb-3"}>
      <input className={"form-control mr-2"} onChange={onChange} type={"text"} placeholder={"Write Some"} />
      <button className={"btn btn-warning"} onClick={addTodo}>Add</button>
    </div>
  );
}

export default Search;