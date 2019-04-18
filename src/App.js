import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

class App extends Component {


  render() {

    const headers = ["Todoapp", "One", "Two", "Three", "Four"];



    return (
      <div className="container">
        {
          headers.map(function (header, index) {
            return <Header headerText={header} Key={index} />;
          })
        }

      </div>
    );
  }
}

export default App;
