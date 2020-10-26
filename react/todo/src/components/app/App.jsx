import React, {Component} from "react";

// CSS
import "./app.scss";

// Components
import SearchPanel from "../app-search/Search";
import Header from "../app-header/Header";
import ListItems from "../app-list/List";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header : "Some",
      countHave : 2,
      countDone : 0,
      todoList : [
        {value : "Some", state : false}
      ]
    }
  }

  changeHeader = (e) => {
    this.setState({header : e.target.value})
  }

  addTodo = () => {
    const oldState = [...this.state.todoList];
    const newValue = this.state.header;
    oldState.push({value : newValue});

  
    this.setState({
      todoList : oldState
    });

  }

  render() {
    return (
      <div className={"app app__container"}>
        <Header haveTodo={this.state.countHave} haveDone={this.state.countDone} />
        <SearchPanel addTodo={this.addTodo} onChange={this.changeHeader} />
        <ListItems onClick={console.log("yyy")} todoList={this.state.todoList} />
      </div>
    )
  }
} 