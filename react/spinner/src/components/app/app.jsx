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
    .then((info) => {
      spinnerService.getResources(info)
      .then(data => {
        this.setState(state => {
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
    this.setState(() => {return {winnerGiftId}})

    setTimeout(() => {
      this.setState(() => {
        const  {list} = this.state;
        return {
          giftInfo : list[winnerGiftId]
        }
      })
    }, 11000)
  }

  closeModal = () => {
    this.setState({giftInfo : null})
  }

  render() {
    const {hasError, loader, list} = this.state;
    console.log(this.state);
    if(hasError) {
      return <ErrorIndicator />
    }

    if(loader) {
      return <Loader />
    }

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