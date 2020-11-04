import React, {Component} from "react";

// MODELS
import ServiceWorker from "../models/ServiceWorker";

// STYLE
import "./app.css";

// COMPONENTS
import Aside from "../app-aside/app-aside";
import Header from "../app-header/app-header";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      navbar : [
        {name : "people"},
        {name : "planets"},
        {name : "starships"}
      ]
    }
  }

  render() {
    return (
      <div className={"container"}>
        <Header navbar={this.state.navbar} />
        <Aside />
      </div>
    )
  }
}