import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Textbox from './Components/TextInputBox'
class App extends Component {


  render() {

    return (
      <div classname="container">
     <Header/>
     <Textbox/>
     </div>
    );
  }
}

export default App;
