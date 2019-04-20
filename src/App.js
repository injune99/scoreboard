import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import {Player} from "./components/Player";





class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score:0, id: 1},
      {name: 'HONG', score:0, id: 2},
      {name: 'KIM', score:0, id: 3},
      {name: 'PARK', score:0, id: 4},
    ]
  };
  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }
  render() {
    let div = <>
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length}/>

        {/*Players List*/}
        {this.state.players.map(item => <Player name={item.name} score={item.score}
                                                key={item.id.toString()} removePlayer={this.handleRemovePlayer}
                                                id={item.id}/>)
        }
      </div>
    </>;
    return div;
  }
}

export default App;
