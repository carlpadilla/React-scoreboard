import React, { Component } from 'react';

class AddPlayerForm extends Component {
  state = {
    value: ''
  };

  handleValueChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form action=''>
        <input
          type='text'
          placeholder='Enter Player Name'
          value={this.state.value}
          onChange={this.handleValueChange}
        />

        <input type='submit' value='Add Player' />
      </form>
    );
  }
}

export default AddPlayerForm;
