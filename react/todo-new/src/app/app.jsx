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
      list : [{id : 1,  value : "null", isDone : false}]
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
    arr[idx].isDone = !arr[idx].isDone;
    this.setState(({list}) => {
      return {
        list : arr
      }
    });
  }


  render() {

    return (
      <div className={"container"}>
        <div className={"app mx-auto"}>
          <Header title={this.state.title} list={this.state.list} />
          <Body list={this.state.list} changeImportantStatus={this.changeImportantStatus} removeItem={this.removeItem} />
          <Footer addNewTodo={this.addNewTodo.bind(this)} />
        </div>
      </div>
    )
  }
}