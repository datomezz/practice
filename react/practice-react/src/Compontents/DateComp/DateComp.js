import React from "react";

class DateComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : new Date()
    }
  }

  // Why?
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date : new Date()
    })
  }

  render() {
    return (
      <div>
        <h2>Hellow World</h2>
        <h3>Now is {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    )
  }
}

export default DateComp;