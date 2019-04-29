import React from 'react';
import { StyleRoot } from 'radium';

const Cockpit = props => {

    const styles = {
        backgroundColor : 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      }

    return(
        <div>
            <h1>Hi, I am a React App</h1>
            <StyleRoot>
                <button onClick={props.click}>Switch Name</button>
                <button style={styles} onClick={props.btnClick}>Toggle Persons</button>
            </StyleRoot>
        </div>
    );
}

export default Cockpit;