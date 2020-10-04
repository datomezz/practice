import React, { Component } from 'react';
import './App.css';
import Car from "./Car/Car";

class App extends Component {
  state = {
    cars : [
      {name : "Jaguar", year : 2013},
      {name : "BMW", year : 2015},
      {name : "Mercedes", year : 1975}
    ],
    pageTitle : "Hi My Name is...",
    classColor : ""
  }

  buttonHandler = (carName) => {
    this.setState({
      pageTitle : carName
    })
  }

  classColorChanger = () => {
    let randArr = [];

    for(let i = 0; i < 3; i++) {
      let rand = Math.floor(Math.random() * 255);
      randArr.push(rand);
    }

    let randomRGB = `rgba(${randArr[0]}, ${randArr[1]}, ${randArr[2]})`;

    this.setState({
      classColor : randomRGB
    })
  }

  render() {
    const cars = this.state.cars;

    
    return (
      <div className={"App " + this.state.classColor} style={{background : this.state.classColor}}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.classColorChanger}>Click</button>
        <Car name={cars[0].name} year={cars[0].year} onChangeTitle={() => this.buttonHandler(cars[0].name)} />
        <Car name={cars[1].name} year={cars[1].year} onchangeTitle={this.buttonHandler.bind(this, "pzidec")} />
        <Car name={cars[2].name} year={cars[2].year} onchangeTitle={() => this.buttonHandler(cars[2].name)} />
      </div>
    );
  }
}

export default App;
