import React from 'react';
import { Title } from './components/title';
import { Carasoul } from './components/carasoul';
import { Profile } from './components/profile';
import { Experience } from './components/experience';
import { Education } from './components/education';
import injectSheet from 'react-jss';


const style = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.bgDark,
    fontFamily: theme.titleFontFamily,
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
    color: theme.textLight,
    fontFamily: theme.contentFontFamily,
    textAlign: 'justify',
    textJustify: 'inter-word',
  },
  profileContainer: {
    width: '100%',
    display: 'flex',
  },
  footer: {
    position: 'fixed',
    backgroundColor: theme.bgDark,
    bottom: 0,
    paddingRight: '1rem',
    color: theme.textLight,
    fontFamily: theme.contentFontFamily,
    textAlign: 'end',
  }
});

class UnstyledApp extends React.Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <Title />
        <Carasoul/>
        <div className={classes.content}>
          <div className={classes.profileContainer}>
            <Profile/>
            <Education/>
          </div>
          <Experience/>
          {/*
          // TODO: Projects <br/>
          // TODO: Awards <br/>
          // TODO: Contact <br/>
          */}
        </div>
        <div className={classes.footer}>
          <p> Made with three simple ingredients: ♡ , ⚛ , and ♫</p>
        </div>
      </div>
    );
  }
};

export const App = injectSheet(style)(UnstyledApp);
