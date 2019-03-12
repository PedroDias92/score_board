import React from 'react';
import Stats from './Stats';
import StopWatch from './StopWatch';

function Header (props){
    console.log(props)
    return(
        <header>
            <Stats players={props.players}/>
            <h1>{props.title}</h1>
            <StopWatch />
        </header>
    );
}

export default Header;