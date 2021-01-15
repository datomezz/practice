import React from "react";

import Details, {Record} from "../app-details";

import {withSwapiService} from "../hoc-helpers";

const StarshipDetails = ({itemId, swapiService}) => {
  const {getStarship, getStarshipImage} = swapiService;

  return (
    <Details 
      getData={getStarship} 
      selectedItem={itemId}
      getItemImage={getStarshipImage}  
    >
      <Record field="name" label="Name" />
      <Record field="model" label="Model" />
    </Details>
  )
}

export default withSwapiService(StarshipDetails);