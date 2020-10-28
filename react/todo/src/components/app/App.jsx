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
      header : "",
      todoList : []
    }
  }

  addTodo = () => {
    const oldState = [...this.state.todoList];
    let newValue = "";

    this.state.header === ""
    ? newValue = "Empty"
    : newValue = this.state.header;
    
    oldState.push({value : newValue, done : false});

  
    this.setState({
      todoList : oldState,
    });

  }

  onDelete = (id) => {
    const oldState = [...this.state.todoList];
    oldState.splice(id, 1);

    this.setState({
      todoList : oldState,
    });
  }

  onDone = (id) => {
    this.setState(({todoList}) => {
      const oldState = [...todoList];

      oldState[id].done = !oldState[id].done;

      return {
        todoList : oldState,
      }
    });
  }

  render() {
    return (
      <div className={"app app__container bg-primary rounded p-4"}>
        <Header todoList={this.state.todoList} />
        <SearchPanel onChange={(e) => this.setState({header : e.target.value})} addTodo={this.addTodo} />
        <ListItems onDelete={this.onDelete} onDone={this.onDone} todoList={this.state.todoList} />
      </div>
    )
  }
} 