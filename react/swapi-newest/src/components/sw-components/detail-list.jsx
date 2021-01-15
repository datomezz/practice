import React from "react";

// COMPONENTS
import Details, {Record} from "../app-details";
import {Consumer} from "../swapi-service-context";

const PeopleDetails = ({itemId}) => {
  return (
    <Consumer>
      {
        ({getPerson, getPersonImage}) => {
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
      }
    </Consumer>
  )
}

const PlanetDetails = ({itemId}) => {
  return (
    <Consumer>
      {
        ({getPlanet, getPlanetImage}) => {
          return (
            <Details 
              getData={getPlanet} 
              selectedItem={itemId}
              getItemImage={getPlanetImage}  
            >
              <Record field="name" label="Name" />
              <Record field="population" label="Population" />
            </Details>
          )
        }
      }
    </Consumer>
  )
}

const StarshipDetails = ({itemId}) => {
  return (
    <Consumer>
      {
        ({getStarship, getStarshipImage}) => {
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
      }
    </Consumer>
  )
}

export {
  PlanetDetails,
  StarshipDetails
}