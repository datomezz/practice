import React, {Component} from "react";

// COMPONENTS
import Details, {Record} from "../app-details";
import List from "../app-list";
import ErrorBoundry from "../error-boundry";

// HOC
import {withData} from "../hoc-helpers";

// MODELS
import SwapiService from "../../models/swapiService";

const Row = ({left, right}) => {
  return (
    <div className="row justify-content-between mb-5">
      {left}
      {right}
    </div>
  )
}

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson : 1
  }

  onItemSelected(id) {
    this.setState(state => { 
      return {
        selectedPerson : id
      }
    })
  }

  render() {
    const {getPerson, getPersonImage} = this.swapiService;
    const {selectedPerson} = this.state;

    const details = (
      <Details 
        selectedItem={selectedPerson}
        getData={getPerson}
        getItemImage={getPersonImage}
      >
        <Record field="name" label="Name" />
        <Record field="gender" label="Gender" />
        <Record field="height" label="Height" />
      </Details>
    );

    return (
      <ErrorBoundry>
        <Row left={withData(<List selectedItem={selectedPerson} getItemImage={getPersonImage}  />, getPerson)} right={details} />
      </ErrorBoundry>
    )
  }
}