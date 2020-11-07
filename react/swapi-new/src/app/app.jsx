import React, {Component} from "react";

// STYLE
import "./app.css";

// COMPONENTS
import Aside from "../app-aside/app-aside";
import Header from "../app-header/app-header";
import ListItems from "../app-list/app-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      navbar : [
        {name : "people"},
        {name : "planets"},
        {name : "starships"}
      ],
      selectedPerson : 1,
      error : false
    }
  }

  onItemSelected = (id) => this.setState({selectedPerson : id});

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