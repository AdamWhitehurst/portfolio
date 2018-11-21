import React, { Component } from 'react';
import './App.css';
import Sectional from './components/sectional';
import { SimpleSlider } from './components/simple_slider';

class App extends Component {
  renderCarasoulItems() {
    let items = [];
    for (let i = 0; i < 10; i++) {
      items.push (
      <div key={i} className="carasoul-item">
        <p>HI</p>
      </div>
      );
    }
    return items;
  }
  renderSectionals () {
    let sectionals = [];
    for (let i = 0; i < 10; i++) 
    sectionals.push (<Sectional key={i} className="sectional"/>);
    return sectionals;
  }
  render() {
    return (
      <div className="main">
        <header className="header">
          <p>I AM A WIP AND I AM UGLY</p>
        </header>
        <div className="carasoul-container">
          <SimpleSlider className="carasoul">
          {this.renderCarasoulItems()}
          </SimpleSlider>
        </div>
        <div className="content">
        {this.renderSectionals()}
        </div>
      </div>
    );
  }
}

export default App;
