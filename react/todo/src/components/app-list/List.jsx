import React from "react";

export default ({todoList}) => {
  return (
    <ol>
      {
        todoList.map((item, index) => {
          return(
            <li key={index}>{item.value}</li>
          )
        })
      }
    </ol>
  );
}