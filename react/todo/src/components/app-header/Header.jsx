import React from "react";

const TotalTodos = ({todoList}) => {
  const newArr = todoList;

  const _haveTodo = newArr.length;
  const _haveDone = newArr.reduce((sum, item) => {
    sum += item.done;
    return sum;
  }, 0);


  return(
    <div className={"app__total--container d-flex justify-content-between align-items-center"}>
      <span className="h2 text-light">TODO APP</span>
      <span className="h6 text-light">{_haveTodo} more to do, {_haveDone} done</span>
    </div>
  )
}

export default TotalTodos;