import React from 'react';
import {Container, Content} from './components/basics';
import { Title } from './components/title';
import { Carasoul } from './components/carasoul';
import { Profile } from './components/profile';
import { Experience } from './components/experience';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Title />
        <Carasoul/>
        <Content flexDirection='row'>
          <Profile/>
          <Experience/>
        </Content>
      </Container>
    );
  }
}

export default App;
