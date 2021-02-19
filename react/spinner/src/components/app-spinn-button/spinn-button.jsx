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
    ref : React.createRef()
  }

  componentDidMount() {
    console.log(this.state.ref);
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
    if(!this.state.isClciked && this.props.spinsCount > 0) {
      this.setState({loader : true, isClciked : true});
      this.getWinnerGiftId();
      console.log(this.props);
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