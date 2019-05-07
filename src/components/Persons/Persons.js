import React, { PureComponent } from 'react';
import Person from './Person/person'

class Persons extends PureComponent {
    constructor(props){
        super(props);
        console.log("[Persons.js] Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("[Persons.js]  getDerivedStateFromProps");
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    render (){
        console.log("[Persons.js] Render");
        console.log("[Persons.js]", this.props.isAuthenticated);
        return this.props.personsState.persons.map((person, index) => 
        <Person click={() => this.props.clicked(index)} 
                name={person.name} 
                age={person.age} 
                key={person.id} 
                changed={(event) => this.props.changed(event, person.id)}
                isAuthenticated={this.props.isAuthenticated}>
       </Person>)
        return 
    }

    getSnapshotBeforeUpdate(props, state){
        console.log('[Persons.js] getSnapshotBeforUpdate');
        return {'message': 'Person snapshot updated'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] ComponentDidUpdate');
        console.log('Snapshot: ', snapshot);
    }

    componentDidMount(){
        console.log("[Persons.js] ComponentDidMount");
    }
}

export default Persons;