import React from 'react';
import Header from './components/Header';
import Players from './components/Players';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header title='Scoreboard' totalPlayers={1} />
      <Players playerName='Carl Padilla' score={0} />
      <Players playerName='Jenny Moua' score={10} />
    </div>
  );
}

export default App;
