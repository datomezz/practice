import React, {Component} from "react";

// COMPONENTS
import Spinner from "../spinner";

// MODELS
import SwapiService from "../../models/swapiService";

const hocDetails = (View) => {
  return class extends Component {
    swapiService = new SwapiService();

    state = {
      item : null,
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
        this.setState({item, image})
      })
    }

    render() {
      const {item} = this.state;

      if(!item) {
        return <Spinner />
      }

      return <View {...this.props} data={item} />
    }
  }
}

export default hocDetails;