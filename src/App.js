import React from 'react';
import {Container, Content} from './components/basics';
import { Title } from './components/title';
import { Carasoul } from './components/carasoul';
import Profile from './components/profile';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Title />
        <Carasoul/>
        <Content flexDirection='row'>
          <Profile/>
          <Profile/>
          <Profile/>
          <Profile/>
        </Content>
      </Container>
    );
  }
}

export default App;
