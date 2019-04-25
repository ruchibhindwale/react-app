import React, { Component, useState } from 'react';
import Person from './Person/person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

/*class App extends Component {
  state = {
    persons: [
      {name: 'SAURABH', age: 37},
      {name: 'RUCHI', age: 33},
      {name: 'VIHAAN', age: 4},
      {name: 'PRISHA', age: 1.5}
    ]
  }

  switchNameHandler = () => {
    console.log('Button Clicked');
    // Don't do this. It won't work
    //this.state.persons[0].name = 'Ruchi Chandorkar';
    this.setState({
      persons: [
        {name: 'SAURABH CHANDORKAR', age: 37},
      {name: 'RUCHI CHANDORKAR', age: 33},
      {name: 'VIHAAN CHANDORKAR', age: 4},
      {name: 'PRISHA CHANDORKAR', age: 1.5}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}><h5>My Hobbies : Travelling</h5></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('hi', null, 'Hi, I am a React App!!!'));
  }
}*/


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
      showPersons: false
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

  const styles = {
    backgroundColor : 'green',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  if(personsState.showPersons){
    // Toggle Background color of toggle persons button to red

    styles.backgroundColor = 'red';

    /*persons = (
      <div>
      // Two ways of passing arguments in methods - one using bind and other using () => function() expression
        <Person click={() => {switchNameHandler('SAU')}} name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person changed={nameChangedHandler} name={personsState.persons[1].name} age={personsState.persons[1].age}><h5>My Hobbies : Travelling</h5></Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        <Person name={personsState.persons[3].name} age={personsState.persons[3].age}/>
      </div>
    );*/
  // Using lists 
  persons = (
    <div>
      { personsState.persons.map((person, index) => {
        return <Person 
                click={() => deletePersonHandler(index)} 
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
      })
      }
    </div>
  );

  }

  return (
    <div className="App">
    <h1>Hi, I am a React App</h1>
    <button onClick={switchNameHandler.bind(this, 'Saurabh Chandorkar !!!')}>Switch Name</button>
    <button style={styles} onClick={togglePersonsHandler}>Toggle Persons</button>
    {persons}  
  </div>
  );
  /*return (
    <div>
      <UserInput />
      <UserOutput name="Ruchi"/>
      <UserOutput name="Saurabh"/>
    </div>
     {
      personsState.showPersons ?  <div></div>
       : null
    }
  );*/
}

export default App;
