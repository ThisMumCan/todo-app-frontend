import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import AddTask from './Components/AddItem';
import ListedItems from './Components/ListedItems';
import PageTitle from './Components/PageTitle';
import TotalItems from './Components/TotalItems';

class App extends Component {


  render() {

    return (
      <div classname="container">
        <div classname="row">
          <div classname="col-12">
            <Header />
          </div>
        </div>

        <div classname="row">
          <div classname="col-12">
            <PageTitle />
          </div>
        </div>
        
        <div classname="row">
          <div classname="col-6">
            <AddTask />
          </div>
        </div>

        <div className="w-100"></div>
        <div classname="row">
          <div classname="col-6">
            <TotalItems />
          </div>
        </div>

        <div classname="row">
          <div classname="col-12">
          </div>
          <ListedItems />
        </div>

      </div>

    );
  }
}

export default App;
