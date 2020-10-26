import React, {Component}  from "react";

// CSS
import "./list.scss";

export default class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      styleState : false
    }
  }

  changeStyle = () => {
    this.setState({styleState : !this.state.styleState})
  }

  render() {
    const {styleState} = this.state;

    const style = {
      color : styleState ? "tomato" : "black",
      fontWeight : styleState ? "bold" : "normal"
    }

    return <span className={"app__list--item"} style={style} onClick={this.changeStyle}>{this.props.value}</span>
  }
} 