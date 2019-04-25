// One way to create components
/*import React from 'react';

const Person = (props) => {
 return (
    <h1> My name is { props.name } and age is { props.age }</h1>
 );
}*/

// Using classes to create components 
 import React, { Component } from 'react';

 class Person extends Component {
     render(){
         return (
            <div>            
                <p onClick={this.props.click}> My name is { this.props.name } and age is { this.props.age } </p>
                <p>{ this.props.children }</p>
                <input type='text' onChange={this.props.changed}/>
            </div>
         );
     }
 }

 export default Person;
