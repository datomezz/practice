import React from "react";

// CONTEXT
import {Consumer} from "../app-context";

const withSpinnerService = (Wrapper) => {
  return (props) => {
    return (
      <Consumer>
        {
          (spinnerService) => {
            return <Wrapper {...props} spinnerService={spinnerService} />
          }
        }
      </Consumer>
    )
  }
}

export {withSpinnerService}