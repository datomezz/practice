import React, {Component} from "react";

// COMPONENTS
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";
import List from "../app-list";

// SERVICES
import SpinnerService from "../../services/SpinnerService.js";

export default class App extends Component {
  spinnerService = new SpinnerService();
  
  state = {
    loader : true,
    hasError : false,
    list : []
  }

  componentDidMount() {
    this.spinnerService.getNonce()
    .then(nonce => {
      const obj = {
        nonce
      }
      this.spinnerService.getResources(obj)
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
      <div className={"container"}>
        <div className={"row"}>
          <List list={list} />
        </div>
      </div>
    )
  }
}