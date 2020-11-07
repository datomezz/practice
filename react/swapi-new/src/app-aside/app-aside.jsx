import React, {Component} from "react";

// STYLE
import "./app-aside.css";

// MODELS
import ServiceWorker from "../models/ServiceWorker";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class Aside extends Component {

  constructor() {
    super();
    this.state = {
      planet : {},
      loader : true,
      error : false
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.updatePlanet, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  ServiceWorker = new ServiceWorker();

  updatePlanet = () => {
    const rand = Math.floor(Math.random() * 15) + 2;

    this.ServiceWorker
      .getPlanet(rand)
      .then(data => {
        this.setState({planet : data, loader : false})
      })
      .catch(err => {
        console.log("Planet Error", err);
        this.setState({error : true, loader : false});
      });
  }

  render() {
    const {planet, loader, error} = this.state;

    const reqStatus = !(error || loader);

    const errorMessege = error ? <ErrorIndicator /> : null;
    const spinner = loader ? <Spinner /> : null;
    const content = reqStatus ? <PlanetAside planet={planet} /> : null;


    return (
      <div className="card rounded my-5">
        {errorMessege}
        {spinner}
        {content}
      </div>
    )
  }
}


const PlanetAside = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return(
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
  )
}