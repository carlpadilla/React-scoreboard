import React from 'react';
import Counter from './Counter';

const Players = props => {
  return (
    <div className='player'>
      <span className='player-name'>
        <button
          className='remove-player'
          onClick={() => props.remPlayer(props.id)}
        >
          x
        </button>
        {props.playerName}
      </span>
      <Counter />
    </div>
  );
};

export default Players;
