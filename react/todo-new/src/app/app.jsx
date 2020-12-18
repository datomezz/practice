import React from "react";

// STLYES
import "./app.scss";

// COMPONENTS
import Header from "../app-header";
import Body from "../app-body";
import Footer from "../app-footer";
import Filters from "../app-filters";


export default class App extends React.Component {
  constructor() {
    super();
    this.maxId = 100;
    this.state = {
      title : "TODO LIST",
      list : [{id : 1,  value : "null", isDone : false}],
      term : ""
    }
  }

  addNewTodo(todo) {
    const newItem = {
      id : this.maxId++,
      value : todo,
      isDone : false
    }
    
    this.setState(({list}) => {
      const newArr = [...list, newItem];
      return {
        list : newArr
      }
    })
  }

  removeItem = (id) => {
    let arr = [...this.state.list];
    const idx = arr.findIndex((item) => item.id === id);
    arr.splice(idx, 1);
    this.setState({list : arr});
  }

  changeImportantStatus = (id) => {
    console.log('changed', id);
    let arr = [...this.state.list];
    const idx = arr.findIndex((item) => item.id === id);
    
    if(idx >= 0) {
      arr[idx].isDone = !arr[idx].isDone;
      this.setState(({list}) => {
        return {
          list : arr
        }
      });
    }
  }

  onSearchChange = (e) => {
    const term = e.target.value.length > 0 ? e.target.value : "";
    this.setState({term});
  }

  search(arr, term) {
    if(term.length === 0) {
      return arr;
    }

    return arr.filter((item) => {
      return item.value.indexOf(term) > -1;
    })
  }

  render() {
    const {list, term} = this.state;
    const visibleItems = this.search(list, term);

    return (
      <div className={"container"}>
        <div className={"app mx-auto"}>
          <Header title={this.state.title} list={this.state.list} />
          <Filters onSearchChange={this.onSearchChange} />
          <Body list={visibleItems} changeImportantStatus={this.changeImportantStatus} removeItem={this.removeItem} />
          <Footer addNewTodo={this.addNewTodo.bind(this)} />
        </div>
      </div>
    )
  }
}