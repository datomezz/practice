import React from "react";

const TotalTodos = (props) => {
  return(
    <div className={"app__total--container"}>
      <span>{props.haveToDo} more to do, {props.doneTodo} done</span>
    </div>
  )
}

export default (props) => {
  return (
    <div className={"app__header--container"}>
      <h1>{props.header}</h1>
      <TotalTodos haveTodo={props.countHave} doneTodo={props.countDone} />
    </div>
  )
}