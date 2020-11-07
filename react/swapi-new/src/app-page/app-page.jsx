import React, {Component} from "react";

// COMPONENTS
import ListItems from "../app-list/app-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class Page extends Component {

  state = {
    selectedPerson : 1,
    error : false
  }

  componentDidCatch() {
    this.setState({error : true});
  }

  onItemSelected = (id) => this.setState({selectedPerson : id});

  render() {

    if(this.state.error) {
      return <ErrorIndicator />
    }

    return (
      <div className={"row justify-content-between my-5"}>
        <div className={"col-5"}>
          <ListItems getData={this.props.getData} onItemSelected={this.onItemSelected} />
        </div>
        <div className={"col-5"}>
          <PersonDetails selectedPerson={this.state.selectedPerson} />
        </div>
      </div>
    )
  }
}