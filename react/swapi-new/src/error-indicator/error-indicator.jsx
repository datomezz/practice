import React, {Fragment} from "react";

const ErrorIndicator = () => {
  return(
    <Fragment>
      <p className="alert alert-danger m-0" role="alert"><i class="fas fa-exclamation-triangle mr-2"></i>Something goes wrong</p>
    </Fragment>
  )
}

export default ErrorIndicator;