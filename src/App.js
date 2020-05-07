import React, { Component } from 'react';
import Display from './components/Display'
import ButtonBoard from './components/ButtonBoard'
import Logic from './logic/Logic'
import './App.css';

//
// Calculator
//
//
//
class App extends Component {

  state = {
    total: null,
    current: null,
    action: null
  };

  handleCLick = (buttonid) => {
   // e.preventDefault();
    //console.log(e.target.id)
    this.setState(Logic(this.state, buttonid))
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col s12 m6">
          <div className="calcBorder">
            <Display value={this.state.current || this.state.total || "0"} />
            <ButtonBoard clickHandler={this.handleCLick} />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
