import React from 'react';
import './App.css';
import ButtonPanel from './Component/ButtonPanel';
import Display from './Component/Display';

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}

export default App;
