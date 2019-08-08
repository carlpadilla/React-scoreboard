import React, { PureComponent } from 'react';
import Counter from './Counter';

class Players extends PureComponent {
  render() {
    const {
      playerName,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props;
    return (
      <div className='player'>
        <span className='player-name'>
          <button className='remove-player' onClick={() => removePlayer(id)}>
            x
          </button>
          {playerName}
        </span>
        <Counter changeScore={changeScore} score={score} index={index} />
      </div>
    );
  }
}

export default Players;
