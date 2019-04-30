import React from 'react';
import Person from './Person/person'

const Persons = props => props.personsState.persons.map((person, index) => <Person click={() => props.clicked(index)} 
                         name={person.name} age={person.age} key={person.id} changed={(event) => props.changed(event, person.id)}>
                        </Person>)

export default Persons;