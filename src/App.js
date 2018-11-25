import React from 'react';
import { Title } from './components/title';
import { Carasoul } from './components/carasoul';
import { Profile } from './components/profile';
import { Experience } from './components/experience';
import injectSheet from 'react-jss';


const style = (Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Theme.bgDark,
    fontFamily: Theme.titleFontFamily,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderTopWidth: '1vh',
    borderColor: 'white',
    padding: '0.5rem',
    margin: '0.5rem',
    color: Theme.textLight,
    fontFamily: Theme.contentFontFamily,
    textAlign: 'justify',
    textJustify: 'inter-word',
  },
});

class UnstyledApp extends React.Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <Title />
        <Carasoul/>
        <div className={classes.content}>
          <Profile/>
          <Experience/>
          // TODO: Projects <br/>
          // TODO: Education <br/>
          // TODO: Awards <br/>
          // TODO: Contact <br/>
        </div>
      </div>
    );
  }
};

export const App = injectSheet(style)(UnstyledApp);
