import React from 'react';
import Header from './components/Header';
import Players from './components/Players';
import AddPlayerForm from './components/AddPlayerForm';
import './App.css';

// const players = [

// ];

class App extends React.Component {
  state = {
    players: [
      { name: 'Player One', id: 1, score: 0 },
      {
        name: 'Player Two',
        id: 2,
        score: 0
      },
      {
        name: 'Player Three',
        id: 3,
        score: 0
      }
    ]
  };

  //player is counter

  prevPlayerId = 3;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      return {
        score: (prevState.players[index].score += delta)
      };
    });
    // console.log(index, delta);
  };

  handleAddPlayer = name => {
    let newPlayer = {
      name,
      score: 0,
      id: (this.prevPlayerId += 1)
    };
    this.setState(prevState => ({
      players: prevState.players.concat(newPlayer)
    }));
  };

  removePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  render() {
    return (
      <div className='App'>
        <Header title='Scoreboard' players={this.state.players} />
        {this.state.players.map((player, index) => {
          return (
            <Players
              key={player.id.toString()}
              id={player.id}
              playerName={player.name}
              score={player.score}
              index={index}
              changeScore={this.handleScoreChange}
              removePlayer={this.removePlayer}
            />
          );
        })}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
