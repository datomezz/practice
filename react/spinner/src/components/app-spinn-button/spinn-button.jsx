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
    loader : true,
    isClicked : false,
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
    const {spinnerService, onSpinnerClick} = this.props;

    spinnerService
    .getNonce()
    .then(info => {
      spinnerService
      .getWinnerGiftId(info)
      .then(id => {
        onSpinnerClick(id);
        this.setState({loader : false});
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.err(err))
  }

  onButtonClick = () => {
    if(!this.state.isClciked && this.props.spinsCount > 0) {
      this.setState({loader : true, isClciked : true});
      this.getWinnerGiftId();
    }
  }

  render() {
    if(this.state.loader) {
      return <Loader />
    }

    const clickedClass = this.state.isClicked ? "inActive" : null;

    return <button onClick={this.onButtonClick} className={`spinner-button ${clickedClass}`}>დაატრიალე</button>

  }
}

export default withSpinnerService(SpinnButton);