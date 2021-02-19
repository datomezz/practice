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
import Header from "../app-header";
import Modal from "../modal";


class App extends Component {

  state = {
    loader : true,
    hasError : false,
    list : [],
    winnerGiftId : null,
    spinsCount : null,
    lastSpinDay : null,
    giftInfo : null
  }

  componentDidMount() {
    const {spinnerService} = this.props;

    spinnerService.getNonce()
    .then(nonce => {
      const obj = {
        nonce
      }
      spinnerService.getResources(obj)
      .then(data => {
        this.setState(state => {
          console.log(data);
          return {
            loader : false,
            list : data.data,
            spinsCount : data.spinsCount,
            lastSpinDay : data.lastSpinDay
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

    setTimeout(() => {
      this.setState(() => {
        const  {list} = this.state;
        return {
          giftInfo : list[winnerGiftId]
        }
      })
    }, 12000)
  }

  closeModal = () => {
    this.setState({giftInfo : null})
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
        <Header spinsCount={this.state.spinsCount} />
        <SpinnerWrapper ref={this.state.myRef} giftId={this.state.winnerGiftId} SpinnerList={List} list={list} />
        <SpinnerWrapperButton spinsCount={this.state.spinsCount} onSpinnerClick={this.onSpinnerClick} Button={SpinnerButton} />
        <Modal redirectToCart={this.redirectToCart} closeModal={this.closeModal} giftInfo={this.state.giftInfo} />
      </Fragment>
    )
  }
}

export default withSpinnerService(App);