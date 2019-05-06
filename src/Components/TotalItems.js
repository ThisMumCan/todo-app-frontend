import React, { Component } from 'react';
class TotalItems extends Component {

    render() {
        return (
            <div>
                <div className="col-6">
                    <h2>Things to Buy:{this.props.itemCount}</h2>
                </div>
            </div>
        )
    }
}

export default TotalItems;



