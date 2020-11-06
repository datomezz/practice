import React, {Component} from "react";

// MODELS
import ServiceWorker from "../models/ServiceWorker";
import Spinner from "../spinner/spinner";

export default class PersonDetails extends Component {

  ServiceWorker = new ServiceWorker();

  state = {
    person : null
  }

  componentDidMount() {
    this._updatePerson();
  }

  _updatePerson() {
    this.ServiceWorker.getPerson(3)
    .then(data => {
      console.log('data', data);
      this.setState({person : data});
      
    })
    .catch(err => console.log("PERSON_DETAILS_ERROR", err));
  }

  render() {

    if(!this.state.person) {
      return <Spinner />
    }

    const {id, name, height, mass, gender } = this.state.person;

    return (
      <div className="card">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt={name} style={{height : "15rem", width : "10rem", margin : "0 auto"}} />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name : {name}</li>
          <li className="list-group-item">Height : {height}</li>
          <li className="list-group-item">Mass : {mass}</li>
          <li className="list-group-item">Gender : {gender}</li>
        </ul>
      </div>
    )
  }
}