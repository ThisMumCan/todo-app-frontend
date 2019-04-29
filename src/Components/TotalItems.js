import React, { Component } from 'react';
class TotalItems extends Component {

    render() {
        return (
            <div>
                <div className="col-6">
                    <h2>Things to Buy:<span className="badge">{this.props.itemCount}</span></h2>
                </div>
            </div>
        )
    }
}

export default TotalItems;



