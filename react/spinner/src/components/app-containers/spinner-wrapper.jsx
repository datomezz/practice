import React from "react";

// CSS
import "./spinner-wrapper.scss";

const SpinnerWrapper = ({SpinnerList, list, giftId}) => {
  return(
    <div className={"spinner-container container-fluid p-0"}>
      <SpinnerList giftId={giftId} list={list} />
    </div>
  )
}

export {SpinnerWrapper}