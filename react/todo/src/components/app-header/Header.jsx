import React from "react";

const TotalTodos = (props) => {
  return(
    <div className={"app__total--container d-flex justify-content-between align-items-center"}>
      <span className="h2 text-light">TODO APP</span>
      <span className="h6 text-light">{props.haveTodo} more to do, {props.haveDone} done</span>
    </div>
  )
}

export default TotalTodos;