import React, { Component } from 'react';
class ListedItems extends Component {

    thumbsUpClicked = () => {
    alert("Thumbsup")
    }

    thumbsDownClicked = () => {
    alert("ThumbsDown")
    }

    editIconClicked = () => {
    alert("Edit")
    }

    DeleteIconClicked = () => {
    alert("delete")
    }


    render() {
        return (
            <div>
            <div className="row items centred">
            <div className="col item">
                <p>{this.props.itemDescription}</p>
            </div>
            <div class="col icons">
                <span className="glyphicon glyphicon-thumbs-up" onClick={this.state.thumbsUpClicked}></span>
                &nbsp; &nbsp;
                <span className="glyphicon glyphicon-thumbs-down"onClick={this.state.thumbsDownClicked}></span>
                &nbsp; &nbsp;
                <span className="glyphicon glyphicon-pencil"onClick={this.state.editIconClicked}></span>
                &nbsp; &nbsp;
                <span className="glyphicon glyphicon-trash"onClick={this.state.DeleteIconClicked}></span>
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