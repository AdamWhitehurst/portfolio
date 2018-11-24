import React, { Component } from 'react';
import {Container, Content, ContentSecondary} from './components/basics';
import { Header } from './components/header';
import { Carasoul } from './components/carasoul';

class App extends Component {

  renderSectionals () {
    let sectionals = [];
    for (let i = 0; i < 10; i++) 
    sectionals.push (
    );
    return sectionals;
  }

  render() {
    return (
      <Container>
        <Header/>
        <Carasoul flex={2}>
        </Carasoul>
        <Content>

        </Content>
      </Container>
    );
  }
}

export default App;
