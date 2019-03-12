import React from 'react';
import Counter from './Counter'

const Player = (props) => {
    //console.log(props.removePlayer)  //to check if function has been called
    //console.log(props.id) //to check if id has been called
    return(
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={()=>props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>
            <Counter/>
        </div>
    );
  }

export default Player;