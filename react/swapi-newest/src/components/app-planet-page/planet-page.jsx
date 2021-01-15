import React, {Component} from "react";

// MODELS
import SwapiService from "../../models/swapiService";

// COMPONENTS
import List from "../app-list";
import Details from "../app-details";


export default class PlanetPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPlanet : 1
  }

  onItemSelected(id) {
    this.setState(state => {
      return {
        selectedPlanet : id
      }
    })
  }
  
  render() {
    const {selectedPlanet} = this.state;

    return(
      <div className="row justify-content-between mb-5">
        <List 
          getData={this.swapiService.getAllPlanets} 
          onItemSelected={this.onItemSelected.bind(this)} 
          >
            {({name, population, rotationPeriod, diameter}) => `Name : ${name}, Population : ${population}, Rotation period : ${rotationPeriod} days`}
          </List>
        <Details selectedPerson={selectedPlanet} />
      </div>
    )
  }
}