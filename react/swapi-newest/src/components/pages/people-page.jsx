import React, {Component} from "react";
import {withRouter} from "react-router-dom";

// COMPONENTS
import {PeopleList} from "../sw-components";

const PeoplePage = ({history}) => {

  return (
    <React.Fragment>
      <PeopleList onItemSelected={id=> history.push(id)} />
      <button className={"btn btn-danger"} onClick={() => {
        history.push("/planets/5");
      }}>click</button>
    </React.Fragment>
  )
}

export default withRouter(PeoplePage);