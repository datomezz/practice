import React, {Component} from "react";

// MODELS
import ServiceWorker from "../models/ServiceWorker";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {

  ServiceWorker = new ServiceWorker();

  state = {
    people : null
  }
  
  componentDidMount() {
    this.ServiceWorker.getAllPeople()
      .then(people => this.setState({people : people}))
      .catch(err => console.log("People Error", err));
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li key={id} className="list-group-item">{name}</li>
      );
    });
  }

  render() {
    const {people} = this.state;
    
    if(!people) {
      return <Spinner />
    }
    
    const content = this.renderItems(people);
    
    return(
      <ul className="list-group">
        {content}
      </ul>
    )
  }
}