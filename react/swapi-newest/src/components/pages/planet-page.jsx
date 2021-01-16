import React from "react";
import {withRouter} from "react-router-dom"

// COMPONENTS
import {PlanetList, PlanetDetails} from "../sw-components";
import {Row} from "../containers";

const PlanetPage = ({history, match}) => {
  
  const {id} = match.params;

  return (
    <Row
      left={<PlanetList onItemSelected={id => history.push(id)} />}
      right={<PlanetDetails itemId={id} />} />
  )
}

export default withRouter(PlanetPage);