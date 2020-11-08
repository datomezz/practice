import React, {Component} from "react";

// COMPONENTS
import ListItems from "../app-list/app-list";
import PersonDetails from "../person-details/person-details";
import ErrorBoundry from "../error-boundry/error-boundry";
import Row from "../app-row/app-row";

export default class Page extends Component {

  state = {
    selectedPerson : 1,
  }

  onItemSelected = (id) => this.setState({selectedPerson : id});

  render() {
    const listItems = (
      <ListItems getData={this.props.getData} onItemSelected={this.onItemSelected} />
    );

    const personDetails = (
      <PersonDetails selectedPerson={this.state.selectedPerson} />
    );

    return (
      <Row left={listItems} right={personDetails} />
    )
  }
}