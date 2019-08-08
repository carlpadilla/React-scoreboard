import React, { PureComponent } from 'react';
import Counter from './Counter';

class Players extends PureComponent {
  render() {
    return (
      <div className='player'>
        <span className='player-name'>
          <button
            className='remove-player'
            onClick={() => this.props.remPlayer(this.props.id)}
          >
            x
          </button>
          {this.props.playerName}
        </span>
        <Counter
          changeScore={this.props.changeScore}
          score={this.props.score}
          index={this.props.index}
        />
      </div>
    );
  }
}

export default Players;
