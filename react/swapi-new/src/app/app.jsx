import React, {Component} from "react";

// STYLE
import "./app.css";

// COMPONENTS
import Aside from "../app-aside/app-aside";
import Header from "../app-header/app-header";
import ListItems from "../app-list/app-list";
import PersonDetails from "../person-details/person-details";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      navbar : [
        {name : "people"},
        {name : "planets"},
        {name : "starships"}
      ],
      selectedPerson : null
    }
  }

  onItemSelected = (id) => {
    this.setState({selectedPerson : id})
  }

  render() {
    return (
      <div className={"container"}>
        <Header navbar={this.state.navbar} />
        <Aside />
        <div className={"row justify-content-between my-5"}>
          <div className={"col-5"}>
            <ListItems onItemSelected={this.onItemSelected} />
          </div>
          <div className={"col-5"}>
            <PersonDetails selectedPerson={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    )
  }
}