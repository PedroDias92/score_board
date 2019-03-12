import React,{Component} from 'react';

class StopWatch extends Component{
    state={
        isRunning:false,
        elapsedTime:0,
        previousTime:0
    }
    
    componentDidMount(){
        console.log('The stopwatch mounted');
        this.intervalID = setInterval(()=>this.tick(),100);
    }

    componentWillUnmount(){   //clear setInterval, prevents memory leak
        clearInterval(this.intervalID);
        console.log('UNmount');
    }

    tick(){
        console.log("ticking")
        if(this.state.isRunning){
            const now = Date.now();
            this.setState( prevState =>({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
            }));
        }
    }

    handleStopWatch(){
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
        if(!this.state.isRunning){
            console.log("start")
            this.setState( prevState =>({
                previousTime: Date.now()
            }));
        }
    }

    handleResetWatch(){
        this.setState(prevState =>({
            isRunning:false,
            elapsedTime:0,
            previousTime:0
        }))
    }

    

    render(){
        const seconds = Math.floor(this.state.elapsedTime/1000);
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{seconds}</span>
                <button onClick={this.handleStopWatch.bind(this)}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleResetWatch.bind(this)}>Reset</button>
            </div>
        );
    }
}

export default StopWatch;
