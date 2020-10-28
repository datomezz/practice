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
      todoList : [
        {value : "Some", state : false}
      ],
      countHave : 1,
      countDone : 0
    }
  }

  addTodo = () => {
    const oldState = [...this.state.todoList];
    const newValue = this.state.header;
    oldState.push({value : newValue});

  
    this.setState({
      todoList : oldState,
      countHave : oldState.length
    });

  }

  onDelete = (id) => {
    const oldState = [...this.state.todoList];
    oldState.splice(id, 1);

    this.setState({todoList : oldState});
  }

  render() {
    return (
      <div className={"app app__container bg-primary rounded p-4"}>
        <Header haveTodo={this.state.countHave} haveDone={this.state.countDone} />
        <SearchPanel onChange={(e) => this.setState({header : e.target.value})} addTodo={this.addTodo} />
        <ListItems onDelete={this.onDelete} todoList={this.state.todoList} />
      </div>
    )
  }
} 