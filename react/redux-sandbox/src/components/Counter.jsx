import React, {Component} from "react";
import {connect} from "react-redux";

// MODELS
import {inc, dec, rnd} from "../actions";

const mapStateToProps = (state) => {
  return {
    counter : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inc : () => dispatch(inc()),
    dec : () => dispatch(dec()),
    rnd : () => dispatch(rnd())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(class Counter extends Component {
  render() {
    const {counter, inc, dec, rnd} = this.props;
    return (
      <div className="jumbotron bg-dark">
        <h2 className={"text-light"}>{counter}</h2>
        <button onClick={inc} className="btn btn-outline-primary mr-2">INC</button>
        <button onClick={dec} className="btn btn-outline-danger mr-2">DEC</button>
        <button onClick={rnd} className="btn btn-outline-warning mr-2">RANDOM</button>
      </div>
    )
  }
});