import React, { Component } from 'react';
class ListedItems extends Component {

    render() {
        return (
            <div>
            <div className="row items">
            <div className="col item">
                <p>Crisps</p>
            </div>
            <div class="col icons">
                <span className="glyphicon glyphicon-thumbs-up"></span>
                &nbsp; &nbsp;
                <span className="glyphicon glyphicon-thumbs-down"></span>
                &nbsp; &nbsp;
                <span className="glyphicon glyphicon-pencil"></span>
                &nbsp; &nbsp;
                <span className="glyphicon glyphicon-trash"></span>
            </div>

            <div className="w-100"></div>

            <div className="col item">
                <p>Cakes </p>
            </div>
            <div className="col icons">
                <span className="glyphicon glyphicon-thumbs-up"></span>
                &nbsp; &nbsp;
                <span className="glyphicon glyphicon-thumbs-down"></span>
                &nbsp; &nbsp;
                <span className="glyphicon glyphicon-pencil"></span>
                &nbsp; &nbsp;
                <span className="glyphicon glyphicon-trash"></span>
            </div>

            <div className="w-100"></div>

            <div className="col item">
                <p>Biscuits</p>
            </div>
            <div className="col icons">
                <span className="glyphicon glyphicon-thumbs-up"></span>
                &nbsp; &nbsp;
                <span className="glyphicon glyphicon-thumbs-down"></span>
                &nbsp; &nbsp;
                <span className="glyphicon glyphicon-pencil"></span>
                &nbsp; &nbsp;
                <span className="glyphicon glyphicon-trash"></span>
            </div>
            </div> 
            </div> 
         ) }
        }
        
export default ListedItems;