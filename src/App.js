import React from 'react';
import './App.css';
import ButtonPanel from './Component/ButtonPanel';
import Display from './Component/Display';
import Calculate from './Logic/Calculate';

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(Calculate(this.state, buttonName));
  };

  render () {
    return (
      <div className='App'>
        <Display value= {this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
