import React, { Component, Fragment } from "react";

// STYLE
import "./spinner.scss";

export default class Spinner extends Component {

  render() {
    return (
      <Fragment>
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Fragment>
    )
  }
}