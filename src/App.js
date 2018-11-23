import React, { Component } from 'react';
import {Container, Content, ContentSecondary} from './components/basics';
import { Header } from './components/header';
import { Carasoul } from './components/carasoul';

class App extends Component {
  renderCarasoulItems() {
    let items = [];
    for (let i = 0; i < 10; i++) 
    items.push (

    );
    return items;
  }

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
        <Carasoul/>
        <Content>
          <p>2</p>
        </Content>
        <ContentSecondary>
          <p>3</p>
        </ContentSecondary>
        <Content>
          <p>4</p>
        </Content>
        <ContentSecondary>
          <p>5</p>
        </ContentSecondary>
        <Content>
          <p>6</p>
        </Content>
        <ContentSecondary>
          <p>7</p>
        </ContentSecondary>
        <Content>
          <p>8</p>
        </Content>
        <ContentSecondary>
          <p>9</p>
        </ContentSecondary>
      </Container>
    );
  }
}

export default App;
