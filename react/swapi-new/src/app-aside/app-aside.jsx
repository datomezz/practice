import React, {Component} from "react";

// STYLE
import "./app-aside.css";

// MODELS
import ServiceWorker from "../models/ServiceWorker";

export default class Aside extends Component {

  constructor() {
    super();

    this.updatePlanet();
  }
  
  ServiceWorker = new ServiceWorker();

  state = {
    id : null,
    name : null,
    population : null,
    rotationPeriod : null,
    diameter : null
  }

  updatePlanet() {
    const rand = Math.floor(Math.random() * 15) + 2;

    this.ServiceWorker
      .getPlanet(rand)
      .then(data => this.setState({
        id : rand,
        name : data.name,
        population : data.population,
        rotationPeriod : data.rotation_period,
        diameter : data.diameter
      }))
      .catch(err => console.log("Planet Error", err));
  }

  render() {
    const {id, name, population, rotationPeriod, diameter} = this.state;

    return (
      <div className="card rounded my-5">
        <div className="row no-gutters">
          <div className={"col-2"}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="img-fluid" />
          </div>
          <div className="col-md-8">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name : {name}</li>
            <li className="list-group-item">Population : {population}</li>
            <li className="list-group-item">Rotation Period : {rotationPeriod}</li>
            <li className="list-group-item">Diametr : {diameter}</li>
          </ul>
          </div>
        </div>
      </div>
    )
  }
}