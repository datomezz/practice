import React, {Component} from "react";

// COMPONENTS
import Button from "./Button";

export default class Filter extends Component {
  maxId = 999;

  state = {
    filters : [
      {id : this.maxId++, name : "All", isActive : false},
      {id : this.maxId++, name : "Active", isActive : false},
      {id : this.maxId++, name : "Done", isActive : false}
    ]
  }

  onActiveChange = () => {
    console.log("zdarova");
  }

  _changeTerm = (e) => {
    this.props.onSearchChange(e);
  }


  render() {
    return (
      <div className="d-flex flex-row my-2">
        <input type="text" className="form-control" placeholder="filter" onChange={this._changeTerm} />

        <div className="btn-group ml-2" role="group" aria-label="Basic outlined example">
          {
            this.state.filters.map(item => {
              return <Button key={item.id} name={item.name} isActive={item.isActive} onActiveChange={this.onActiveChange} />
            })
          }
        </div>
        
      </div>
    )
  }
}