import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter'
import Crown from './Crown'


class Player extends PureComponent {

    static propTypes={  //another way to check types
        name: PropTypes.string.isRequired,
        id: PropTypes.number,
        score: PropTypes.number.isRequired,
        index: PropTypes.number,
        removePlayer: PropTypes.func,
        changeScore: PropTypes.func
    }

    render(){
        const { name,id,score,index,removePlayer,changeScore,highScore}=this.props;
        //console.log("player "+highScore);
        //console.log(name + ' rendered')
        return(
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={()=>removePlayer(id)}>✖</button>
                    <Crown 
                        highScore={highScore}
                        score={score}
                        />
                    {name}
                </span>
                <Counter 
                    score={score}
                    index={index}
                    changeScore={changeScore}
                />
            </div>
        );
    }
}

/* Player.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    score: PropTypes.number,
    index: PropTypes.number,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func
} */

export default Player;