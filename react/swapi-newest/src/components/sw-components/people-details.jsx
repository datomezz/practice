import React from "react";

// COMPONENT
import Details, {Record} from "../app-details";

// HOC
import {withSwapiService} from "../hoc-helpers";

const PeopleDetails = ({itemId, swapiService}) => {
  const {getPerson, getPersonImage} = swapiService;

  return (
    
    <Details 
      getData={getPerson} 
      selectedItem={itemId}
      getItemImage={getPersonImage}  
    >
      <Record field="name" label="Name" />
      <Record field="gender" label="Gender" />
    </Details>
  )
}

export default withSwapiService(PeopleDetails);