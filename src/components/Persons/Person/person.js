// One way to create components
/*import React from 'react';

const Person = (props) => {
 return (
    <h1> My name is { props.name } and age is { props.age }</h1>
 );
}*/

// Using classes to create components 
 import React, { Component } from 'react';
 import Radium from 'radium';

 class Person extends Component {
    styles = {
        '@media (min-width: 500px)' :{
            width: '450px',
            color: 'salmon'
        }
    }

     render(){
         return (
            <div style={this.styles}>            
                <p onClick={this.props.click}> My name is { this.props.name } and age is { this.props.age } </p>
                <p>{ this.props.children }</p>
                <input type='text' onChange={this.props.changed}/>
            </div>
         );
     }
 }

 export default Radium(Person);
