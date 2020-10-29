import React from "react";

// MODELS
import SwapService from "../models/swapService";

export default class RandomList extends React.Component {

  render() {
    const { person } = this.props;

    return (
      <React.Fragment>
        <p className="card-title m-0">Name : {person.name}</p>
        <p className="card-text m-0">Gender : {person.gender}</p>
        <p className="card-text m-0">Height : {person.height}</p>
      </React.Fragment>
    )
  }
}