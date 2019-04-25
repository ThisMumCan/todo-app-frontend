import React, { Component } from 'react';
class AddItem extends Component {

    render() {
        return (
            <div className="AddItem">
                <div className="col-md-6 inputbox">
                    <input type="text" class="form-control" placeholder="Add Item to the list"></input>
                    <div class="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <i className="glyphicon glyphicon-plus"></i>
                        </button></div>
                        
                    <div className="w-100"></div>
                    <div className="col-6">
                        <h2>Things to Buy:<span className="badge">3</span></h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddItem;