import React from "react";

// CSS
import "./header.scss";

// COMPONENTS
import SpinnerCount from "../app-spinner-count";

const HeaderResult = () => {
  return (
    <div className={"spinner-header__result col-md-4 col-12 offset-md-4 offset-0"}>
      <h3 className={"spinner-header__title"}>დასპინე და მოიგე</h3>
      <span onClick={() => window.location.reload()} className={"spinner-header__again"}>სცადე თავიდან</span>
    </div>
  )
}

const Header = ({spinsCount}) => {
  return(
    <div className={"spinner-header__container container-fluid p-0"}>
      <div className={"row m-0"}>
        <HeaderResult />
        <div className={"d-md-block d-none col-4"}>
          <SpinnerCount spinsCount={spinsCount}/>
        </div>
      </div>
    </div>
  )
}

export default Header;