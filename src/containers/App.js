import React, { Component, useState } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import wrapClass from '../hoc/wrapClass';
import { StyleRoot } from 'radium';
import '../containers/App.css';

class App extends Component {

  constructor(props){
    super(props);
    console.log("[App.js] Constructor");
    this.state = {
      persons: [
        {id:'1', name: 'SAURABH', age: 37},
        {id:'2', name: 'RUCHI', age: 33},
        {id:'3', name: 'VIHAAN', age: 4},
        {id:'4', name: 'PRISHA', age: 1.5}
      ],
      showPersons: false,
      showCockpit: true,
      changeCounter: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] GetDerivedStateFromProps");
    return state;
  }

  deletePersonHandler = (personIndex) => {
    //const dupPersons = personsState.persons.slice();
    const dupPersons = [...this.state.persons];
    dupPersons.splice(personIndex, 1);
    this.setState({
      persons: dupPersons,
      showPersons: this.state.showPersons
    })
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {id:'1', name: newName, age: 37},
        {id:'2', name: 'RUCHI Chandorkar', age: 33},
        {id:'3', name: 'VIHAAN Chandorkar', age: 4},
        {id:'4', name: 'PRISHA Chandorkar', age: 1.5}
      ],
      showPersons: true
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => (person.id === id));

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        showPersons: false,
        changeCounter : prevState.changeCounter + 1
      }
    });
  }

  togglePersonsHandler = () => {
    const togglePersons = !this.state.showPersons;
    this.setState({
      showPersons: togglePersons
    })
  }

  render() {
    console.log("[App.js] Render");
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons clicked={this.deletePersonHandler} 
                   changed={this.nameChangedHandler} 
                   personsState={this.state}/>
        </div>
      );
    }

    return (
        <StyleRoot>
            <button onClick={() => {this.setState({showCockpit:false});}}>Remove Cockpit</button>
            {this.state.showCockpit ? 
            <Cockpit click={() => {this.switchNameHandler('Saurabh Chandorkar')}} 
                     btnClick={this.togglePersonsHandler} 
                     showPersons={this.state.showPersons} 
                     persons={this.state.persons}>
           </Cockpit>  : null }
            {persons}
        </StyleRoot> 
    );
  }

  componentDidMount(){
    console.log("[App.js] ComponentDidMount");
  }

}

export default wrapClass(App, 'App');
