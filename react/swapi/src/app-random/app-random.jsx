import React, {Component} from "react";

// COMPONENTS
import RandomList from "./random-list";

// MODELS
import SwapService from "../models/swapService";

export default class Random extends Component {
  constructor() {
    super();

    this.state = {
      people: [
        {
          name: null,
          gender: null,
          height: null,
        }
      ],
      person : [
        {
          name: "alaxi",
          gender: null,
          height: null,
        }
      ]
    }

    this.updatePerson(3);
  }

  SwapService = new SwapService();

  async updatePeople() {
    await this.SwapService.getPeople()
      .then(data => {
        this.setState({ people: data })
      })
  }

  async updatePerson(id) {
    await this.SwapService.getPerson(id)
    .then(data => {
      const arr = [{
        url : `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
        name : data.name,
        gender : data.gender,
        height : data.height
      }];

      this.setState({person : arr})
    })
  }

  render() {

    return (
      <div className="card w-75 mx-auto my-5">
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
      </div>
    )
  }
}