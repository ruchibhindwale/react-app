import React, { Component } from 'react'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class AppComponents extends Component{
    state = {
        userName: 'Ruchi Bhindwale'
    };

    updateUserNameHandler = (event) => {
        this.setState({
            userName: event.target.value
        });
    }

    render(){
        return(
            <div>
                <UserInput changed={this.updateUserNameHandler} name={this.state.userName}/>
                <UserOutput name={this.state.userName}/>
                <UserOutput name={this.state.userName}/>
             </div>
        );
    }
}

export default AppComponents