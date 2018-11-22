import React, { Component } from 'react';
import './App.css';
import { Carasoul, CarasoulItem } from './components/carasoul';
import {carasoulItems} from './constants/values';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Nav } from './components/basic';

library.add(
  faEnvelope,
  faKey,
  fab);


class App extends Component {
  renderCarasoulItems() {
    let items = [];
    for (let key in carasoulItems) {
      console.log(key);
      items.push (
      <CarasoulItem key={key} item={carasoulItems[key]}/>
      );
    }
    return items;
  }
  renderSectionals () {
    let sectionals = [];
    for (let i = 0; i < 10; i++) 
    sectionals.push (<Nav key={i}></Nav>);
    return sectionals;
  }
  render() {
    return (
      <div className="main"> 
        <header className="header">
          <h2>Adam Whitehur.st</h2>
        </header>
        <div className="carasoul-container">
          <Carasoul className="carasoul">
          {this.renderCarasoulItems()}
          </Carasoul>
        </div>
        <div className="content">
        {this.renderSectionals()}
        </div>
      </div>
    );
  }
}

export default App;
