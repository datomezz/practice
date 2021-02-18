import React from "react";

// CSS
import "./spinner-wrapper.scss";

const SpinnerWrapper = (props) => {
  const {SpinnerList, list} = props;

  return(
    <div className={"spinner-container container-fluid p-0"}>
      <SpinnerList list={list} />
    </div>
  )
}

export {SpinnerWrapper}