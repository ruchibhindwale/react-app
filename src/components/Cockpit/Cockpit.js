import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';
import { StyleRoot } from 'radium';

const Cockpit = props => {

    const toggleBtnRef = useRef(null);
    const AppContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] UseEffect');
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] Cleanup')
        }
    }, [])

    useEffect(() => {
        console.log('[Cockpit.js] 2nd UseEffect');
        return () => {
            console.log('[Cockpit.js] 2nd Cleanup');
        }
    })

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

      if(props.showPersons){
        styles.backgroundColor = 'red';
      }

    return(
        <div>
            <h1>Hi, I am a React App</h1>
            <StyleRoot>
                <button onClick={props.click}>Switch Name</button>
                <button ref={toggleBtnRef} style={styles} onClick={props.btnClick}>Toggle Persons</button>
                <button onClick={AppContext.login}>Log In</button>
            </StyleRoot>
        </div>
    );
}

export default React.memo(Cockpit);