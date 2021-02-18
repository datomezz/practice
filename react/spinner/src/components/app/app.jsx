import React, {Component} from "react";

// CSS
import "./app.scss";

// HOC
import {withSpinnerService} from "../hoc";

// COMPONENTS
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";
import List from "../app-list";
import {SpinnerWrapper} from "../app-containers";

class App extends Component {

  state = {
    loader : true,
    hasError : false,
    list : []
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
      <SpinnerWrapper SpinnerList={List} list={list} />
    )
  }
}

export default withSpinnerService(App);