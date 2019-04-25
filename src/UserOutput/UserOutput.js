import React, { Component } from 'react';

class UserOutput extends Component{
    render(){
        return(
            <div>
                <p>Random Text - {this.props.name}</p>
                <p>Loren Ipsum</p>
            </div>
        );
    }
}

export default UserOutput;