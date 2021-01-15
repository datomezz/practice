import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Header extends Component {
  render() {
    const {menu} = this.props;

    return(
      <div className={"bg-dark p-4 mb-5"}>
        <div className={"d-flex justify-content-between m-0"}>
          <ul className={"d-flex p-0"}>
            {menu.map(item => {
              return <Link to={item.label} key={item.label} className={"mr-5"}>{item.name}</Link>
            })}
          </ul>
          <button className="btn btn-lg btn-warning" onClick={this.props.showRandomPlanet}>PlanetToggle</button>
        </div>
      </div>
    )
  }
}