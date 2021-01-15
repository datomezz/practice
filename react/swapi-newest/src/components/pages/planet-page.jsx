import React, {Component} from "react";

// COMPONENTS
import {PlanetList, PlanetDetails} from "../sw-components";
import {Row} from "../containers";

export default class PlanetPage extends Component {
  
  state = {
    selectedItem : 1
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

    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />} />
    )
  }
}