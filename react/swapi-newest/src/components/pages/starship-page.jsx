import React, {Component} from "react";

// COMPONENTS
import {Row} from "../containers";
import {StarshipList, StarshipDetails} from "../sw-components";


export default class StarshipPage extends Component {
  state = {
    selectedItem : 5
  }

  onItemSelected = (selectedItem) => {
    this.setState(state => {
      return {
        selectedItem
      }
    })
  }

  render() {
    const {selectedItem} = this.state;

    return(
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />} />
    )
  }
}