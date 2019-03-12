import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component{
    
    playerInput = React.createRef();

    handleSubmit(e){
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
    }

    render(){
        //console.log(this.state.value)
        console.log(this.playerInput)
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input 
                    type="text"
                    ref={this.playerInput} 
                    placeholder="Enter a player's name">
                </input>
                <input 
                type="submit" 
                value="Add Player">
                </input>
            </form>
        )
    }
}

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func
}

export default AddPlayerForm ;