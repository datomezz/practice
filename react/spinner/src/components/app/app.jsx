import React, {Component, Fragment} from "react";

// CSS
import "./app.scss";

// HOC
import {withSpinnerService} from "../hoc";

// COMPONENTS
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";
import List from "../app-list";
import {SpinnerWrapper, SpinnerWrapperButton} from "../app-containers";
import SpinnerButton from "../app-spinn-button";

class App extends Component {

  state = {
    loader : true,
    hasError : false,
    list : [],
    winnerGiftId : null
  }

  componentDidMount() {
    const {spinnerService} = this.props;

    spinnerService.getNonce()
    .then(nonce => {
      const obj = {
        nonce
      }
      spinnerService.getResources(obj)
      .then(list => {
        this.setState(state => {
          return {
            loader : false,
            list
          }
        })
      })
      .catch(err => {
        this.setState(state => {
          return {
            hasError : true
          }
        })
      })
    })
    .catch(err => {
      this.setState(state => {
        return {
          hasError : true
        }
      })
    })
  }

  onSpinnerClick = (winnerGiftId) => {
    console.log("Click");

    this.setState(() => {return {winnerGiftId}})
  }

  render() {
    const {hasError, loader, list} = this.state;

    if(hasError) {
      return <ErrorIndicator />
    }

    if(loader) {
      return <Loader />
    }

    console.log(this.state);

    return(
      <Fragment>
        <SpinnerWrapper giftId={this.state.winnerGiftId} SpinnerList={List} list={list} />
        <SpinnerWrapperButton onSpinnerClick={this.onSpinnerClick} Button={SpinnerButton} />
      </Fragment>
    )
  }
}

export default withSpinnerService(App);