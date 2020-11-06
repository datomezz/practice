import React, {Component} from "react";

// STYLE
import "./app.css";

// COMPONENTS
import Aside from "../app-aside/app-aside";
import Header from "../app-header/app-header";
import ListItems from "../app-list/app-list";

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
        <div className={"row"}>
          <div className={"col-5"}>
            <ListItems />
          </div>
        </div>
      </div>
    )
  }
}