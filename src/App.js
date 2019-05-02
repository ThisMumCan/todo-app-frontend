import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ListedItems from './Components/ListedItems';
import PageTitle from './Components/PageTitle';
import TotalItems from './Components/TotalItems';
import AddItem from './Components/AddItem';
import uuidv1 from 'uuid/v1';

class App extends Component {

  state = {
    items: [
      { itemDescription: 'cakes' },
      { itemDescription: 'crisps' },
      { itemDescription: 'Biscuits' }
    ]
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <PageTitle />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <AddItem addItem={this.addItem} />
            {/* {
              this.state.items.map(function (item, index) {
                return <AddItem itemDescription={item} key={index} />
              })
            } */}
          </div>
        </div>

        <div className="w-100"></div>
        <div className="row">
          <div className="col-6">
            <TotalItems itemCount={this.state.items.length} />
          </div>
        </div>

        <div classname="row">
          <div classname="col-12">
          </div>
          {this.state.items.map((item, index) => { return <ListedItems item={item} /> })}
        </div>




      </div>

    );
  }
}

export default App;
