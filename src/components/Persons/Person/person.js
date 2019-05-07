// One way to create components
/*import React from 'react';

const Person = (props) => {
 return (
    <h1> My name is { props.name } and age is { props.age }</h1>
 );
}*/

// Using classes to create components 
 import React, { Component, Fragment } from 'react';
 import Radium from 'radium';
 import Aux from '../../../hoc/Aux';
 import wrapClass from '../../../hoc/wrapClass';
 import PropTypes from 'prop-types';
 import AuthContext from '../../../context/auth-context';

 class Person extends Component {
     constructor(props){
        super(props);
        console.log('[Person.js] Constructor');
        this.inputElementRef = React.createRef();
     }

    static contextType = AuthContext;

    styles = {
        '@media (min-width: 500px)' :{
            width: '450px',
            color: 'salmon'
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log('[Person.js] GetDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(props, state){
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    render(){
        console.log('Is Authenticated', this.props.isAuthenticated);
        // return <React.Fragment> - Can also use React.Fragment instead of Fragment
        return <Fragment>
            {this.context.isAuthenticated ? <p>Logged In</p> : <p>Please login in</p>}
            <p onClick={this.props.click}> My name is { this.props.name } and age is { this.props.age } </p>
            <p>{ this.props.children }</p>
            <input type='text' 
                   onChange={this.props.changed}
                   //ref={(inputEl) => {this.inputElement = inputEl}}
                  ref={this.inputElementRef}
            />
        </Fragment>
     }

     getSnapshotBeforeUpdate(newProps, newState){
        console.log('[Person.js] getSnahpshotBeforeUpdate');
        return newState;
     }

     componentDidUpdate(prevProps, prevState, snapshot){
         console.log('[Person.js] componentDidUpdate');
     }

     componentDidMount(){
         console.log('[Person.js] ComponentDidMount');
         //this.inputElement.focus();
         console.log(this.context.isAuthenticated);
         this.inputElementRef.current.focus(); 
     }
 }

 Person.propTypes = {
     click: PropTypes.func,
     name: PropTypes.string,
     age: PropTypes.number,
     changed: PropTypes.func
 }

 export default wrapClass(Radium(Person), "Person");
