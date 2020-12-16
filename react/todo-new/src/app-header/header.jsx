import React from "react";

// STYLES
import "./header.scss";

export default class Header extends React.Component {

  render() {
    const {title} = this.props;

    const headerTitle = title ? title : "THERE IS NO TITLE";

    const {list} = this.props;

    const isDone = list.filter(item => item.isDone).length;
    const isntDone = list.length - isDone;

    return (
      <div className={"d-flex justify-content-between bg-warning p-2"}>
        <h3 className={""}>{headerTitle}</h3>
        <span className={""}>{isntDone} todos, {isDone} done</span>
      </div>
    )
  }
}