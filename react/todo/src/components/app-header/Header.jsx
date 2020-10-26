import React from "react";

const TotalTodos = (props) => {
  return(
    <div className={"app__total--container"}>
      <span>{props.haveTodo} more to do, {props.haveDone} done</span>
    </div>
  )
}

export default TotalTodos;