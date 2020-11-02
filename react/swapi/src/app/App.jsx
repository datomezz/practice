import React, {Component} from "react";

// COMPONENTS
import Header from "../app-header/app-header";
import Random from "../app-random/app-random";
import CategoryList from "../app-list/app-category-list";
import ItemsAttributes from "../app-attributes/app-items-attributes";


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
        <div className={"row justify-content-between m-0"}>
          <div className="col-5">
            <CategoryList />
          </div>
          <div className="col-5">
            <ItemsAttributes />
          </div>
        </div>
        <h1>Hellow</h1>
      </main>
    )
  }
}