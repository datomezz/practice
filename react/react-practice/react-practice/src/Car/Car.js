import React from "react";

function Car(props) {
  return (
    <div className="car">
      <h1>Name : {props.name}</h1>
      <h4>Year : {props.year}</h4>
      {props.children}
      <button onClick={props.onChangeTitle}>Click</button>
    </div>
  );
}

export default Car;