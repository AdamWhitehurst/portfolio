import React from 'react';
import {Container} from './components/basics';
import { Title } from './components/title';
import { Carasoul } from './components/carasoul';
import Profile from './components/profile';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Title />
        <Carasoul flex={2}/>
        <Profile/>
        <Profile/>
      </Container>
    );
  }
}

export default App;
