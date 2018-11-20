import React, { Component } from 'react';
import './App.css';
import Sectional from './components/sectional';

class App extends Component {
  renderSectionals () {
    let sectionals = [];
    for (let i = 0; i < 10; i++) 
    sectionals.push (<Sectional className="sectional"/>);
    return sectionals;
  }
  render() {
    return (
      <div className="main">
        <header className="header">
          <p>I AM A WIP AND I AM UGLY</p>
        </header>
        <div className="carasoul">
          <p>ONE DAY I WILL SPIN FOR I AM THE CARASOUL</p>
        </div>
        <div className="content">
        {this.renderSectionals()}
        </div>
      </div>
    );
  }
}

export default App;
