import React, {Component} from "react";
import {withRouter} from "react-router-dom";

// COMPONENTS
import {PeopleList} from "../sw-components";

const PeoplePage = ({history}) => {

  return (
    <React.Fragment>
      <PeopleList onItemSelected={(itemId) => {
        console.log(itemId);
        history.push(`/people/${itemId}`);
      }} />
      <button className={"btn btn-danger"} onClick={() => {
        history.push("/planets/5");
      }}>click</button>
    </React.Fragment>
  )
}

export default withRouter(PeoplePage);