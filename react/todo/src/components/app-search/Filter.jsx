import React, {Component} from "react";

export default class Filter extends Component {

  render() {

    const filterArr = [
      {type : "all", label : "All"},
      {type : "have", label : "Have"},
      {type : "done", label : "Done"}
    ]

    return(
      <div className={"btn-group"}>
        {
          filterArr.map(item => {
            return(
              <button onClick={() => this.props.onFilterChange(item.type)} key={item.label} type={"button"} className={"btn btn-secondary"} filtertype={item.type}>{item.label}</button>
            )
          })
        }
      </div>
    )
  }
}