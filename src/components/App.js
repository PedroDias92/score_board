import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component{
  //console.log(props.initialPlayers)
  state={
      players:[
          {
              name: "Guil",
              id:1
          },
          {
              name: "Treasure",
              id:2
          },
          {
              name: "Ashley",  
              id:3
          },
          {
              name: "James",
              id:4
          }
      ]
  }

  handleRemovePlayer(id){
      this.setState(prevState => {
          return{
              players: prevState.players.filter(p => p.id !== id)
          }
      });
  }

  render(){
      return(
          <div className="scoreboard">
              <Header 
                  title="Scoreboard" 
                  totalPlayers={this.state.players.length}
  
              />
              {/* Players List */}
              {/* <Player name="pedro" score={2}/> */}
              {this.state.players.map((player,index) =>{
                  return(
                  <Player 
                      name={player.name} 
                      id={player.id}
                      key={index.toString()}   //need to had a key because react needs to know what element to render
                      removePlayer={this.handleRemovePlayer.bind(this)}
                  />
              )})}
          </div>
      )
  } 
}

export default App;
