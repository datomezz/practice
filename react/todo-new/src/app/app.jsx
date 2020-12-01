import React from "react";

// STLYES
import "./app.scss";

// COMPONENTS
import Header from "../app-header";
import Body from "../app-body";
import Footer from "../app-footer";


export default class App extends React.Component {
  constructor() {
    super();
    this.maxId = 100;
    this.state = {
      title : "TODO LIST",
      list : [{id : 1,  value : "null"}]
    }

  }

  addNewTodo = (todo) => {
    const newItem = {
      id : this.maxId++,
      value : todo
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


  render() {
    return (
      <div className={"container"}>
        <div className={"app mx-auto"}>
          <Header title={this.state.title} />
          <Body list={this.state.list} removeItem={this.removeItem} />
          <Footer addNewTodo={this.addNewTodo} />
        </div>
      </div>
    )
  }
}