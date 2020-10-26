import React from "react";

const Search = ({onChange, addTodo}) => {
  return (
    <div className={"input-group"}>
      <input className={"form-control mr-2"} onChange={onChange} type={"text"} placeholder={"Write Some"} />
      <button className={"btn btn-danger"} onClick={addTodo}>Add</button>
    </div>
  );
}

export default Search;