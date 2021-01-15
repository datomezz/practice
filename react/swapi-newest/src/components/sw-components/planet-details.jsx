import React from "react";

import Details, {Record} from "../app-details";

import {withSwapiService} from "../hoc-helpers";

const PlanetDetails = ({itemId, swapiService}) => {
  const {getPlanet, getPlanetImage} = swapiService;

  return (
    <Details 
      getData={getPlanet} 
      selectedItem={itemId}
      getItemImage={getPlanetImage}  
    >
      <Record field="name" label="Name" />
      <Record field="rotationPeriod" label="Rotation Period" />
    </Details>
  )
}

export default withSwapiService(PlanetDetails);