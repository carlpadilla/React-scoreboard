import React from 'react';

const Players = () => {
  return (
    <div className='player'>
      <span className='player-name'>Carl</span>
      <div className='counter' />
      <button className='counter-action decrement'> - </button>
      <button className='counter-action increment'> + </button>
    </div>
  );
};

export default Players;
