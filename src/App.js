import React from 'react';
import Header from './components/Header';
import Players from './components/Players';
import './App.css';

const players = [
  { name: 'Carl Padilla', score: 14 },
  {
    name: 'Jenny Moua',
    score: 69
  },
  {
    name: 'Nina Moua',
    score: 10
  }
];

function App(props) {
  return (
    <div className='App'>
      <Header title='Scoreboard' totalPlayers={players.length} />
      {players.map(plyr => {
        return <Players playerName={plyr.name} score={plyr.score} />;
      })}
    </div>
  );
}

export default App;
