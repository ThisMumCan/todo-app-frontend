import React, { Component } from 'react';
class Textbox extends Component {

    render() {
        return (
            <div className ="textbox">
            <input type="text" class="form-control" placeholder="Add Item to the list"></input>
                            <div class="input-group-btn">
                                <button class="btn btn-default" type="submit">
                                    <i class="glyphicon glyphicon-plus"></i>
                                </button>
            </div>  
            </div>
         ) }
        }
        
export default Textbox;