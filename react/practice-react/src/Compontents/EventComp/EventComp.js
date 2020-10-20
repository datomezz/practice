import React from "react";

class EventComp extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      background : "#fff",
      pageTitle : "hellow"
    }
  }

  changeSomething = (value) => {
    this.setState({
      pageTitle : value
    })
  }

  changeHandler = (e) => {
    this.setState({
      pageTitle : e.target.value
    })
    console.log("changed");
  }

  render () {

    return(
      <div>
        <input type="text" onChange={this.changeHandler} />
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.changeSomething.bind(this, "BMW")}>ClickMe</button>
      </div>
    )
  }
}

export default EventComp;