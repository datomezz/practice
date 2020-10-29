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
    const {isDone} = this.props;

    const className = isDone ? "text-denger" : "text-light";

    return <span className={`app__list--item ` + className} onClick={this.changeStyle}>{this.props.value}</span>
  }
} 