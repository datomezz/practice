import React, {Component} from "react";

// COMPONENTS
import Header from "../app-header/app-header";
import Random from "../app-random/app-random";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      navbar : [
        {name : "home", label : "Home"},
        {name : "people", label : "People"},
        {name : "planets", label : "Planets"}
      ]
    }
  }
  render() {
    return (
      <main className={"container"}>
        <Header navbar={this.state.navbar} />
        <Random />
        <h1>Hellow</h1>
      </main>
    )
  }
}