import React, { Component } from 'react';
class AddItem extends Component {

    state = {
        itemDescription: ""
    }

    inputBoxChanged = (event) => {
        console.log(event.target.value);
        this.setState(
            {
                itemDescription: event.target.value
            }
        );
    }


    addItemClicked = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.itemDescription);
    }

    render() {
        return (
            <div className="Row AddItem">
                <div className="row align-items-center">
                    <div className="col-5 inputbox">
                        <form>
                            <input type="text" className="form-control" placeholder="Add an item to the list" onChange={this.inputBoxChanged}></input>
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="glyphicon glyphicon-plus" onClick={this.addItemClicked}></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

export default AddItem;





