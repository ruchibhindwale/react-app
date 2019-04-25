import React, { Component } from 'react';
import Validation from './Validation-Lists/Validation';
import CharComponent from './CharComponent-Lists/CharComponent';

class AppList extends Component {
    state = {
        inputVal : ''
    }

    removeCharacterHandler = (event, index) => {
        let currentString = this.state.inputVal;
        let updatedString = currentString.slice(0, index) + currentString.slice(index+1, currentString.length)
        
        this.setState({
            inputVal: updatedString
        })   
    }

    inputChangedHandler = (event) => {
        let inputVal = event.target.value;
        this.setState({
            inputVal : inputVal
        })        
    }

    render(){
        const  charComponents = (
            <div>
                {
                    this.state.inputVal.split('').map((char, index)=>{
                        return (
                            <CharComponent 
                            char={char} 
                            click={(event) => this.removeCharacterHandler(event, index)}
                            key={index}></CharComponent>
                        )
                    })
                }
            </div>
        );
        return(
            <div>
                <input type='text' onChange={this.inputChangedHandler} value={this.state.inputVal}/>
                <p>Length : {this.state.inputVal.length}</p>
                <Validation length={this.state.inputVal.length}></Validation>
                {charComponents}
            </div>
        );
    }
}

export default AppList