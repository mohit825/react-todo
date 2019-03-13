import React, {Component} from 'react';

class Input extends Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.whenSubmit}>
                    <input type="text" placeholder="Enter task" >
                    </input>
                    <button type="Submit">Submit    </button>
                </form>
            </div>
        )

    }
}
export default Input;