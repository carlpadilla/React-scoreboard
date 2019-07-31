import React from 'react';
import Header from './components/Header';
import Players from './components/Players';
import './App.css';

// const players = [

// ];

class App extends React.Component {
  state = {
    players: [
      { name: 'Player One', id: 1 },
      {
        name: 'Player Two',
        id: 2
      },
      {
        name: 'Player Three',
        id: 3
      }
    ]
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
        <Header title='Scoreboard' totalPlayers={this.state.players.length} />
        {this.state.players.map(plyr => {
          return (
            <Players
              key={plyr.id.toString()}
              id={plyr.id}
              playerName={plyr.name}
              remPlayer={this.removePlayer}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
