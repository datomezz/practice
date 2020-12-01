import React from "react";

// STYLES
import "./header.scss";

export default class Header extends React.Component {

  render() {
    const {title} = this.props;

    const headerTitle = title ? title : "THERE IS NO TITLE";

    return (
      <div className={"d-flex justify-content-between bg-warning p-2"}>
        <h3 className={""}>{headerTitle}</h3>
        <span className={""}>3 todos, 1 done</span>
      </div>
    )
  }
}