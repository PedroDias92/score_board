import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component{
  //console.log(props.initialPlayers)
  state={
      players:[
          {
              name: "Guil",
              score:0,
              id:1
          },
          {
              name: "Treasure",
              score:0,
              id:2
          },
          {
              name: "Ashley",
              score:0,  
              id:3
          },
          {
              name: "James",
              score:0,
              id:4
          }
      ]
  }
  //player id counter
  prevPlayerId = 4;

  handleScoreChange(index,delta){
    //console.log("hi, increment");
    this.setState(prevState =>({
        score: prevState.players[index].score += delta
    }))
    //console.log(index);
    //console.log(delta);
    }


  handleRemovePlayer(id){
      this.setState(prevState => {
          return{
              players: prevState.players.filter(p => p.id !== id)
          }
      });
  }

  handleAddPlayer(name){
      this.setState( prevState => {
          return{
            players:[
                ...prevState.players, //Spread syntax , makes a copy of all objects and adds a new one
                {
                  name,
                  score: 0,
                  id: this.prevPlayerId +=1,
                }
            ]
        }
      });
  }

  render(){
      return(
          <div className="scoreboard">
              <Header 
                  title="Scoreboard" 
                  players={this.state.players}
  
              />
              {/* Players List */}
              {/* <Player name="pedro" score={2}/> */}
              {this.state.players.map((player,index) =>{
                  return(
                  <Player 
                      name={player.name} 
                      score={player.score}
                      id={player.id}
                      key={index.toString()}   //need to had a key because react needs to know what element to render
                      index={index}
                      removePlayer={this.handleRemovePlayer.bind(this)}
                      changeScore={this.handleScoreChange.bind(this)}
                  />
              )})}
              <AddPlayerForm addPlayer={this.handleAddPlayer.bind(this)}/>
          </div>
      )
  } 
}

export default App;
