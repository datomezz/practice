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
    this.setState((state) => {
      return {
        styleState : !state.styleState
      }
    });
  }

  render() {
    const {styleState} = this.state;

    const className = styleState ? "text-denger" : "text-light";
    console.log(this.props.value, "value");

    return <span className={`app__list--item ` + className} onClick={this.changeStyle}>{this.props.value}</span>
  }
} 