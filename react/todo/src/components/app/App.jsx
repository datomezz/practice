import React, {Component} from "react";

// CSS
import "./app.scss";

// Components
import AddingForm from "../app-add/Add";
import Header from "../app-header/Header";
import ListItems from "../app-list/List";
import Search from "../app-search/Search";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoList : [],
      term : ""
    }
  }

  addedText = (text) => {
    const oldState = [...this.state.todoList];
    let newValue = "";

    this.state.header === ""
    ? newValue = "Empty"
    : newValue = text;
    
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

  search(arr, term) {
    if(term.length === 0) {
      return arr;
    } else {
      return arr.filter(item => {
        return item.value.indexOf(term) > -1;
      });
    }
  }

  addingToLabel = (term) => {
    this.setState({term : term});    
  }

  render() {

    const visibleItems = this.search(this.state.todoList, this.state.term);

    return (
      <div className={"app app__container bg-primary rounded p-4"}>
        <Header todoList={this.state.todoList} />
        <AddingForm addedText={this.addedText} />
        <ListItems onDelete={this.onDelete} onDone={this.onDone} todoList={visibleItems} />
        <Search addingToLabel={this.addingToLabel} />
      </div>
    )
  }
} 