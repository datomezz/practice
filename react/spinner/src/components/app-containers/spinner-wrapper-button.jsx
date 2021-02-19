import React from "react";

// CSS
import "./spinner-wrapper.scss";

const SpinnerWrapperButton = ({Button, onSpinnerClick, spinsCount}) => {
  return (
    <div className={"spinner-wrapper__button"}>
      <Button spinsCount={spinsCount} onSpinnerClick={onSpinnerClick} />
    </div>
  )
}

export {SpinnerWrapperButton}