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
    const {getData} = this.props;

    getData()
    .then(people => this.setState({people : people}))
    .catch(err => console.log("People Error", err));
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <a
          key={id}
          onClick={() => this.props.onItemSelected(id)}
          className="list-group-item list-group-item-action">
          {name}
        </a>
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