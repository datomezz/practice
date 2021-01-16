import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

// STYLE
import "./app.scss";

// COMPONENTS
import Header from "../app-header";
import RandomPlanet from "../app-random-planet";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";

import {PeoplePage, PlanetPage, StarshipPage} from "../pages";

import {Provider} from "../swapi-service-context";

import {PeopleDetails} from "../sw-components";

// MODELS
import SwapiService from "../../models/swapiService"; 


export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    headerMenu : [
      {name : "Home", label : "home"},
      {name : "People", label : "people"},
      {name : "Planets", label : "planets"},
      {name : "Starships", label : "starships"}
    ],
    showRandomPlanet : true,
  }

  showRandomPlanet() {
    this.setState((state) => {
      const {showRandomPlanet} = state;
      return {
        showRandomPlanet : !showRandomPlanet
      }
    })
  }

  render() {
    const {headerMenu, showRandomPlanet, hasError} = this.state;
    const planet = showRandomPlanet ? <RandomPlanet /> : null;
    
    if(hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <Provider value={this.swapiService}>
          <Router>
            <div className={"container"}>
              <Header showRandomPlanet={this.showRandomPlanet.bind(this)} menu={headerMenu} />
              {planet}
              <Route path="/" render={() => <h1>Welcome to the /</h1>} exact />
              <Route path="/home" render={() => <h1>Welcome to the party</h1>} />
              <Route path="/people" exact component={PeoplePage} />
              <Route path="/people/:id" render={
                ({match}) => {
                  const {id} = match.params;
                  return <PeopleDetails itemId={id} />
                }
              } />
              <Route path="/planets/:id?" component={PlanetPage} />
              <Route path="/starships" component={StarshipPage} />
            </div>
          </Router>
        </Provider>
      </ErrorBoundry>
    )
  }
}