import React, {Component, Fragment} from "react";

export default class Navbar extends Component {

  render() {
    const {navbar} = this.props;

    function toUppercaseFirstLetter(string) {
      const arr = string.split("");
      arr[0] = arr[0].toUpperCase();
      const newString = arr.join("");
      return newString;
    }

    return(
      <Fragment>
        {navbar.map(item => {
          return (
            <li key={item.name} className={"nav-item"}>
              <a href="" className={"nav-link text-light"}>{toUppercaseFirstLetter(item.name)}</a>
            </li>
          )
        })}
      </Fragment>
    )
  }
}