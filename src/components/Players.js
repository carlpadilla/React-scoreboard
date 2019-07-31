import React from 'react';
import Counter from './Counter';

const Players = props => {
  return (
    <div className='player'>
      <span className='player-name'>{props.playerName}</span>
      <Counter />
    </div>
  );
};

export default Players;
