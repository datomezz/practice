import React from "react";

export default function(props) {
  return(
    <React.Fragment>
      {
        props.navbar.map(item => {
          return(
            <a key={item.name} className="nav-link text-light">{item.label}</a>
          )
        })
      }
    </React.Fragment>
  )
}