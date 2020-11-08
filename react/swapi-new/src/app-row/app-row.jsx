import React from "react";

export default ({left, right}) => {
  return(
    <div className={"row justify-content-between my-5"}>
      <div className={"col-5"}>
        {left}
      </div>
      <div className={"col-5"}>
        {right}
      </div>
    </div>
  )
}