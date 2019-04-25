import React, {Component} from 'react';

class Validation extends Component {
    render(){
        return (
            this.props.length <= 5 ?
            <p> Text too short </p> :
            <p> Text long enough </p>
        );
    }
}

export default Validation;