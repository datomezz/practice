import React, {Component} from "react";

// STYLE
import "./app.css";

// COMPONENTS
import Aside from "../app-aside/app-aside";
import Header from "../app-header/app-header";
import Page from "../app-page/app-page";
import ErrorIndicator from "../error-indicator/error-indicator";

import Row from "../app-row/app-row";
import ItemDetails from "../item-details/item-details";

// MODELS
import ServiceWorker from "../models/ServiceWorker";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      navbar : [
        {name : "people"},
        {name : "planets"},
        {name : "starships"}
      ],
      error : false
    }
  }

  ServiceWorker = new ServiceWorker();

  componentDidCatch() {
    this.setState({error : true})
  }
  

  render() {

    if(this.state.error) {
      return <ErrorIndicator />
    }

    const {getPerson, getPlanet, getPersonImage, getPlanetImage} = this.ServiceWorker;

    const personDetails = (
      <ItemDetails 
      selectedItem={2} 
      getData={getPerson}
      getImage={getPersonImage} />
    );

    const planetDetails =(
      <ItemDetails 
      selectedItem={4} 
      getData={getPlanet}
      getImage={getPlanetImage} />
    )

    return (
      <div className={"container"}>
        <Header navbar={this.state.navbar} />
        <Row left={personDetails} right={planetDetails} />
        {/* <Aside />
        <Page getData={this.ServiceWorker.getAllPeople} />
        <Page getData={this.ServiceWorker.getAllStarships} />
        <Page getData={this.ServiceWorker.getAllPlanets} /> */}
      </div>
    )
  }
}