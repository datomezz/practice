import React, {Component} from "react";

// STYLES
import "./details.scss";

// MODELS
import "../../models/swapiService";
import SwapiService from "../../models/swapiService";

// COMPONENTS
import Spinner from "../spinner";
import ErrorButton from "../error-button";
import ErrorBoundry from "../error-boundry";

const Record = ({object, field, label}) => {
  return (
    <li className="details-card__item">{label} {object[field]}</li>
  )
}

export {Record};

export default class Details extends Component {

  swapiService = new SwapiService();

  state = {
    item : null,
    loader : true,
    image : null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if(this.props.selectedItem !== prevProps.selectedItem) {
      this.updateItem();
    }
  }

  updateItem() {
    const {selectedItem, getData, getItemImage} = this.props;

    if(!selectedItem) {
      return;
    }

    
    getData(selectedItem)
    .then((item) => {
        const image = getItemImage(item);
        this.setState({item, loader : false, image})
      })
  }

  mainElements(object) {
    const _url = this.state.image;

    return (
      <ErrorBoundry>
        <div className="details-card bg-danger p-4">
          <img src={_url} alt="details" className="details-card__img" />
          <ul className="details-card__body">
            {
              React.Children.map(this.props.children, (child, idx) => {
                return React.cloneElement(child, {object})
              })
            }
          </ul>

          <ErrorButton />
        </div>
      </ErrorBoundry>
    )
  }

  render() {
    const {item} = this.state;

    const loader = this.state.loader ? <Spinner /> : null;
    const content = item ? this.mainElements(item) : null;
    
    return (
      <div className={"col-6"}>
        {loader}
        {content}
      </div>
    )
  }
}