import React, { Component } from 'react';
class ListedItems extends Component {

    constructor(props) {
        super(props)
        this.state = { clicked: false };

    }



    thumbsUpClicked = (e) => {
        e.preventDefault();
        alert("Thumbsup removes item or crosses it out")
        this.setState.thumbsUpClicked({ iconColor: "Green" })
    }


    editIconClicked = () => {
        alert("Edit allows user change whats been added")
    }


    // Could add an undo component

    render() {
        return (
            <div>
                <div className="row items centred">
                    <div className="col item">
                        <p>{this.props.item.itemDescription}</p>
                    </div>
                    <div class="col icons">
                        <button className="btn btn-default" type="submit">
                            <i className="glyphicon glyphicon-thumbs-up" onClick={this.state.thumbsUpClicked}></i>
                        </button>
                        &nbsp; &nbsp;
                <span className="glyphicon glyphicon-pencil" onClick={this.state.editIconClicked}></span>
                        &nbsp; &nbsp;
                        <button className="btn btn-default" type="submit">
                            <i className="glyphicon glyphicon-trash" onClick={() => { this.props.deleteItem(this.props.index) }}></i>
                        </button>
                    </div>



                    <div className="w-100"></div>

                </div>
            </div>
        )
    }
}

export default ListedItems;