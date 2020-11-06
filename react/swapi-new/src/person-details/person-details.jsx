import React, {Component} from "react";

// MODELS
import ServiceWorker from "../models/ServiceWorker";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class PersonDetails extends Component {

  ServiceWorker = new ServiceWorker();

  state = {
    person : null,
    error : false
  }

  componentDidMount() {
    this._updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.selectedPerson !== prevProps.selectedPerson) {
      this._updatePerson();
    }
  }

  _updatePerson() {
    this.ServiceWorker.getPerson(this.props.selectedPerson)
    .then(data => {
      console.log('data', data);
      this.setState({person : data});
      
    })
    .catch(err => {
      console.error("PERSON_DETAILS_ERROR", err);
      this.setState({error : true});
    });
  }

  render() {

    if(this.state.error) {
      return <ErrorIndicator />
    }

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