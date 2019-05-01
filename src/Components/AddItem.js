import React, { Component } from 'react';
class AddItem extends Component {

    state = {
        itemDescription: ""
    }

    inputBoxChanged = (event) => {
        this.setState(
            {
                itemDescription: event.target.value
            }
        );
    }


    addItemClicked = () => {
        this.props.addItemFunction(this.state.itemDescription);
    }

    render() {
        return (
            <div className="Row AddItem">
                <div class="row align-items-center">
                    <div className="col-5 inputbox">
                        <form>
                            <input type="text" class="form-control" placeholder="Add item to the list" onChange={this.inputBoxChanged}></input>
                            <div class="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="glyphicon glyphicon-plus" onSubmit={this.state.addItemClicked}></i>
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





