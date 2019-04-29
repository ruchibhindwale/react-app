import React from 'react';
import Person from './Person/person'

const Persons = props => {

    const persons = [];

    props.personsState.persons.map((person) => {
        persons = <Person click={props.clicked} name={person.name} age={person.age}
                   key={person.id} changed={(event) => props.changed(event, person.id)}>
                  </Person>
    })

    return(
        { persons }
    );
}

export default Persons;