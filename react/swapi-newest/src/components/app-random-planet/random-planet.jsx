import React, {Component} from "react";

// STYLES
import "./random-planet.scss";

// MODELS
import "../../models/swapiService";
import SwapiService from "../../models/swapiService";

// COMPONENTS
import Spinner from "../spinner";
import Planet from "./_planet";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";
import ErrorBoundry from "../error-boundry";

export default class RandomPlanet extends Component {

  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
    
    this.state = {
      planet : {},
      loader : true,
      error : false,
    }
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet.bind(this) , 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  _onPlanetLoaded(planet) {
    this.setState({planet, loader : false})
  }

  _onError(err) {
    this.setState({error : true})
  }

  updatePlanet() {
    const rand = ~~(Math.random() * 9) + 2;
    this.swapiService.getPlanet(rand)
    .then(this._onPlanetLoaded.bind(this))
    .catch(this._onError.bind(this));

  }

  render() {
    const {planet, loader, error} = this.state;

    const spinner = loader && !error? <Spinner /> : null;
    const content = !loader ? <Planet planet={planet} /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <div className={"w-100 bg-secondary my-5"}>
          {errorMessage}
          {spinner}
          {content}
          <ErrorButton />
        </div>
      </ErrorBoundry>
    )
  }
}