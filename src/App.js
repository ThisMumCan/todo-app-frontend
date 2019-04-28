import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import AddTask from './Components/AddItem';
import ListedItems from './Components/ListedItems';
import PageTitle from './Components/PageTitle';

class App extends Component {


  render() {

    return (
      <div classname="container">
     <Header/>
     <PageTitle/>
     <AddTask/>
     
     <ListedItems/>
     
     </div>
    );
  }
}

export default App;
