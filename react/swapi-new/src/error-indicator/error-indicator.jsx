import React, {Fragment} from "react";

const ErrorIndicator = () => {
  return(
    <Fragment>
      <p className="alert alert-danger m-0" role="alert"><i className="fas fa-exclamation-triangle mr-2"></i>Something went wrong</p>
    </Fragment>
  )
}

export default ErrorIndicator;