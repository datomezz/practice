import React from "react";

// CSS
import "./spinner-wrapper.scss";

const SpinnerWrapperButton = ({Button, onSpinnerClick}) => {
  return (
    <div className={"spinner-wrapper__button"}>
      <Button onSpinnerClick={onSpinnerClick} />
    </div>
  )
}

export {SpinnerWrapperButton}