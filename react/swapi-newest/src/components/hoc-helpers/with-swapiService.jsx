import React from "react";
import {Consumer} from "../swapi-service-context";

const withSwapiService = (Wrapper) => {
  return (props) => {
    return (
      <Consumer>
        {
          (swapiService) => {
            return <Wrapper {...props} swapiService={swapiService} />
          }
        }
      </Consumer>
    )
  }
}

export default withSwapiService;