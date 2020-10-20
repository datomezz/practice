import React from 'react';
import './App.css';

// import Comment from "./Comment/Comment";
// import DateComp from "./Compontents/DateComp/DateComp";
// import EventComp from "./Compontents/EventComp/EventComp";
import Car from "./Compontents/Car/Car";

// const json = {
//   info : {
//     date: new Date().toLocaleDateString(),
//     text: 'I hope you enjoy learning React!',
//   },
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };


export default class App extends React.Component {

  state = {
    cars : [
      {name : "Bugati", year : "2015"},
      {name : "Bugati", year : "2015"},
      {name : "BMW", year : "2015"}
    ],
    pageTitle : "Zdarova",
    toggleState : false
  }

  changingTitle = value => {
    this.setState({
      pageTitle : value
    })
  }

  toggleCars = () => {
    this.setState({
      toggleState : !this.state.toggleState
    });
  }

  toggleSome = () => {
    this.setState({
      toggleState : !this.state.toggleState
    })
  }

  changingCar = (value, index) => {
    const cars = this.state.cars.concat();

    cars[index].name = value;
    
    this.setState({
      cars : cars
    })

  }

  deleteCar = (index) => {
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({cars});
  }

  render() {
    const cars = this.state.cars;

    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCars}>Toggle</button>
        <button onClick={this.toggleSome}>Toggle Second</button>
        {
          this.state.toggleState ?
            <div className="cars">
              {cars.map((item, index) => {
                return (
                  <Car
                    key={index} 
                    name={item.name} 
                    year={item.year} 
                    onChangeTitle={this.changingTitle.bind(this, item.name)}
                    onChangeHandler={e => {this.changingCar(e.target.value, index)}}
                    onDelete={e => {this.deleteCar(index)}}
                  />
                )
              })}
            </div>
          : null
        }
      </div>
    )
  }
}
