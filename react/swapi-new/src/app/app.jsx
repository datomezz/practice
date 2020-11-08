import React, {Component} from "react";

// STYLE
import "./app.css";

// COMPONENTS
import Aside from "../app-aside/app-aside";
import Header from "../app-header/app-header";
import Page from "../app-page/app-page";
import ErrorIndicator from "../error-indicator/error-indicator";

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


    return (
      <div className={"container"}>
        <Header navbar={this.state.navbar} />
        <Aside />
        <Page getData={this.ServiceWorker.getAllPeople} />
        {/* <Page getData={this.ServiceWorker.getAllStarships} />
        <Page getData={this.ServiceWorker.getAllPlanets} /> */}
      </div>
    )
  }
}