import React from 'react';
import Header from './components/Header';
import Players from './components/Players';
import './App.css';

const players = [
  { name: 'Carl Padilla', score: 14, id: 1 },
  {
    name: 'Jenny Moua',
    score: 69,
    id: 2
  },
  {
    name: 'Nina Moua',
    score: 10,
    id: 3
  }
];

function App(props) {
  return (
    <div className='App'>
      <Header title='Scoreboard' totalPlayers={players.length} />
      {players.map(plyr => {
        return (
          <Players
            key={plyr.id.toString()}
            playerName={plyr.name}
            score={plyr.score}
          />
        );
      })}
    </div>
  );
}

export default App;
