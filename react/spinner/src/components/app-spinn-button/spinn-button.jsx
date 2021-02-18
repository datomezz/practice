import React, {Component} from "react";

// CSS
import "./spinner-button.scss";

// HOCE
import "../hoc";

// COMPONENTS
import Loader from "../loader";
import { withSpinnerService } from "../hoc";

class SpinnButton extends Component {
  
  state = {
    loader : true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(state=> {
        return {
          loader : false
        }
      })
    }, 1000);
  }

  getWinnerGiftId = () => {
    this.props.spinnerService
    .getWinnerGiftId()
    .then(id => {
      this.props.onSpinnerClick(id);
      this.setState({loader : false});
    })
    .catch(err => console.log(err))
  }

  onButtonClick = () => {
    this.setState({loader : true});
    this.getWinnerGiftId();
    console.log(this.props);
  }

  render() {
    if(this.state.loader) {
      return <Loader />
    }

    return <button onClick={this.onButtonClick} className="spinner-button">დაატრიალე</button>

  }
}

export default withSpinnerService(SpinnButton);