import React, { Component } from "react";

// COMPONENTS
import RandomList from "./random-list";
import Spinner from "../spinner/spinner";

// MODELS
import SwapService from "../models/swapService";

export default class Random extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      person: [],
      loader : true
    }

    setTimeout(this.updatePerson(), 1000);
  }

  SwapService = new SwapService();

  async updatePeople() {
    await this.SwapService.getPeople()
      .then(data => {
        this.setState({ people: data })
    })
  }

  async updatePerson() {
    const rand = Math.floor(Math.random() * 25) + 2;
    await this.SwapService.getPerson(rand)
      .then(data => {
        const arr = [{
          url: `https://starwars-visualguide.com/assets/img/characters/${rand}.jpg`,
          name: data.name,
          gender: data.gender,
          height: data.height
        }];

        this.setState({ person: arr, loader : false })
      })
  }

  render() {
    const RandomComponent = () => {
      return (
        <div className={"row"}>
          <div className={"col-4"}>
            <img src={this.state.person[0].url} className="card-img-top" alt="..."></img>
          </div>
          <div className={"col-8"}>
            <div className="card-body">
              <RandomList person={this.state.person[0]} />
            </div>
          </div>
        </div>
      )
    }

    const spinner = this.state.loader ? <Spinner /> : null;
    const content = !this.state.loader ? <RandomComponent /> : null;

    return(
      <div className="card mx-auto my-5">
        <div className={"row justify-content-between p-3 m-0"}>
          <div className={"bg-warning rounded"}>
            {spinner} {content}
          </div>
        </div>
      </div>
    )

  }
}