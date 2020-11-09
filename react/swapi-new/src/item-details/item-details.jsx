import React, {Component} from "react";

// MODELS
import ServiceWorker from "../models/ServiceWorker";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class itemDetails extends Component {

  ServiceWorker = new ServiceWorker();

  state = {
    item : null,
    image : null,
    error : false
  }

  componentDidMount() {
    this._updateItem();
  }

  componentDidUpdate(prevProps) {
    if(this.props.selectedItem !== prevProps.selectedItem) {
      this._updateItem();
    }
  }

  _updateItem() {
    const { selectedItem, getData, getImage } = this.props;

    getData(selectedItem)
    .then(data => {
      console.log(data);
      this.setState({item : data, image : getImage(selectedItem)});
      
    })
    .catch(err => {
      console.error("ITEM_DETAILS_ERROR", err);
      this.setState({error : true});
    });
  }

  render() {

    if(this.state.error) {
      return <ErrorIndicator />
    }

    if(!this.state.item) {
      return <Spinner />
    }
    
    const {id, name, height, mass, gender } = this.state.item;
    const keysArr = Object.keys(this.state.item);

    console.log(this.props.getImage);

    return (
      <div className="card">
        <img src={this.state.image} className="card-img-top" alt={name} style={{height : "15rem", width : "10rem", margin : "0 auto"}} />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{keysArr[1]} {name}</li>
          <li className="list-group-item">{keysArr[2]} {height} cm</li>
          <li className="list-group-item">{keysArr[3]} {mass} kg</li>
          <li className="list-group-item">{keysArr[4]} {gender}</li>
        </ul>
      </div>
    )
  }
}