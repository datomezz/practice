import React, {Component} from "react";

// MODELS
import SwapiService from "../../models/swapiService";

// COMPONENTS
import List from "../app-list";
import Details from "../app-details";

export default class StarshipPage extends Component {
  SwapiService = new SwapiService();

  state = {
    selectedStarship : 1
  }

  onItemSelected(id) {
    this.setState(state => {
      return {
        selectedStarship : id
      }
    })
  }

  render() {
    const {selectedStarship} = this.state;

    return (
      <div className="row justify-content-between mb-5">
        <List 
          getData={this.SwapiService.getAllStarships} 
          onItemSelected={this.onItemSelected.bind(this)} 
          >
          {({name, model, length, crew}) => `Name : ${name}, Model : ${model}, Length : ${length}m, Crew : ${crew}`}  
        </List>
        <Details selectedPerson={selectedStarship} />
      </div>
    )
  }
}