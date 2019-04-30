import React, { Component, useState } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import { StyleRoot } from 'radium';
import '../containers/App.css';

const App = props => {
  let persons = null; 

  const [personsState, setPersonsState] = useState({
    persons: [
      {id:'1', name: 'SAURABH', age: 37},
      {id:'2', name: 'RUCHI', age: 33},
      {id:'3', name: 'VIHAAN', age: 4},
      {id:'4', name: 'PRISHA', age: 1.5}
    ],
    showPersons: false
  });

  const deletePersonHandler = (personIndex) => {
    //const dupPersons = personsState.persons.slice();
    const dupPersons = [...personsState.persons];
    dupPersons.splice(personIndex, 1);
    setPersonsState({
      persons: dupPersons,
      showPersons: personsState.showPersons
    })
  }

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {id:'1', name: newName, age: 37},
        {id:'2', name: 'RUCHI Chandorkar', age: 33},
        {id:'3', name: 'VIHAAN Chandorkar', age: 4},
        {id:'4', name: 'PRISHA Chandorkar', age: 1.5}
      ],
      showPersons: true
    });
  }

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(person => (person.id === id));

    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons: persons,
      showPersons: false
    });
  }

  const togglePersonsHandler = () => {
    const togglePersons = !personsState.showPersons;
    setPersonsState({
      persons: [
        {id:'1', name: 'SAURABH Chandorkar', age: 37},
        {id:'2', name: 'RUCHI Chandorkar', age: 33},
        {id:'3', name: 'VIHAAN Chandorkar', age: 4},
        {id:'4', name: 'PRISHA Chandorkar', age: 1.5}
      ],
      showPersons: togglePersons
    })
  }

  if(personsState.showPersons){
    persons = (
      <div>
        <Persons clicked={deletePersonHandler} 
                 changed={nameChangedHandler} 
                 personsState={personsState}/>
      </div>
    );
  }

  return (
    <div className="App">
      <StyleRoot>
          <Cockpit click={() => {switchNameHandler('Saurabh Chandorkar')}} btnClick={togglePersonsHandler} showPersons={personsState.showPersons}></Cockpit>
          {persons}
      </StyleRoot> 
  </div>
  );
}

export default App;
