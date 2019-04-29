import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ListedItems from './Components/ListedItems';
import PageTitle from './Components/PageTitle';
import TotalItems from './Components/TotalItems';
import AddItem from './Components/AddItem';

class App extends Component {

  State = {
    items: []
  }

  addItem = (itemDescription) => {
    let currentItems = this.state.items;

    currentItems.push(itemDescription);

    this.setState({
      items: currentItems
    })
  }

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
            <AddItem addItemFunction={this.addItem} />
            {
              this.state.items.map(function (item, index) {
                return <AddItem itemDescription={item} key={index} />
              })
            }
          </div>
        </div>

        <div className="w-100"></div>
        <div classname="row">
          <div classname="col-6">
            <TotalItems itemCount={this.state.items.length} />
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
