import React, { Component } from 'react';


class Counter extends Component{
    /* constructor(){
        super(); //calls the React.Component methods and variables
        this.state ={   //is part of React.Component
            score:0
        };
    } */
    //or
    state={
        score:0
    };
  
    incrementScore(){
        //console.log("hi, increment");
        this.setState( prevState =>{
            return{
                score: prevState.score + 1
            };
        });
    }
    decrementScore(){
        //console.log("hi, increment");
        this.setState( prevState =>{
            return{
                score: prevState.score - 1
            };
        });
    }
  
    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
            </div>
        );
    }
  }

  export default Counter;