import React, {Component} from "react";

// MODELS
import ServiceWorker from "../models/ServiceWorker";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {

  ServiceWorker = new ServiceWorker();

  state = {
    listItem : null
  }
  
  componentDidMount() {
    const {getData} = this.props;

    getData()
    .then(listItem => this.setState({listItem}))
    .catch(err => console.log("listItem Error", err));
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
    const {listItem} = this.state;
    
    if(!listItem) {
      return <Spinner />
    }
    
    const content = this.renderItems(listItem);
    
    return(
      <ul className="list-group">
        {content}
      </ul>
    )
  }
}