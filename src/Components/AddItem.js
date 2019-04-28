import React, { Component } from 'react';
class AddItem extends Component {

    render() {
        return (
            <div className="Row AddItem">
                {/* <div class="row align-items-center"> */}
                    <div className="col-5 inputbox">
                        <form>
                            <input type="text" class="form-control" placeholder="Add item to the list"></input>
                            <div class="input-group-btn">
                                <button className="btn btn-default col-1" type="submit">
                                    <i className="glyphicon glyphicon-plus"></i>
                                </button>
                            </div>
                        </form>
                        <div className="w-100"></div>
                        <div className="col-6">
                            <h2>Things to Buy:<span className="badge">3</span></h2>
                        </div>

                    </div>
                </div>
            // </div >
        )
    }
}

export default AddItem;





