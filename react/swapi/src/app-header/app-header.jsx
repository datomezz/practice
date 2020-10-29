import React, {Component} from "react";

// COMPONENTS
import Navbar from "./navbar";

export default class Header extends Component {
  

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand"><h1 className={"text-warning"}>SWAPI</h1></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <Navbar navbar={this.props.navbar} />
        </div>
      </nav>
    )
  }
}