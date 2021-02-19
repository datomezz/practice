import React from "react";

// CSS
import "./spinner-count.scss";

const SpinnerCount = ({spinsCount}) => {
  const count = spinsCount ? spinsCount : 0;
  return(
    <div className={"spinner-count__spins--container"}>
      <p className={"spinner-count__spins--info"}>დატრიალების ოდენობა :</p>
      <span className={"spinner-count__spins--count"}>{count}</span>
    </div>
  )
}

export default SpinnerCount;