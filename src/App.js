import React from 'react';
import { Title } from './components/title';
import { Carasoul } from './components/carasoul';
import { Profile } from './components/profile';
import { Experience } from './components/experience';
import { Education } from './components/education';
import { ExperienceText, ProjectText } from './constants/texts';
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
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignContent:'center',
    bottom: 0,
    paddingRight: '1rem',
    textAlign: 'center',
    color: theme.textLight,
    fontFamily: theme.contentFontFamily,
    fontSize: '0.5em',

    '& a': {
      display: 'flex',
      flexDirection: 'row',
      margin: '0.8em',
      color: theme.colorPrimaryLight,
      textDecoration: 'none',
      textShadow: theme.outTextShadow,
      '& em': {
        fontSize: '2.2em',
        paddingTop: '0.25rem',
        paddingRight: '0.5rem',
      }

    },
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
          <Experience experience={ExperienceText} left/>
          <Experience experience={ProjectText} right/> 
          {/*
          // TODO: PICTURE!!
          // TODO: Skills
          // TODO: Languages
          // TODO: Awards <br/>
          */}
        </div>


        <div className={classes.footer}>
        <a href={'https://github.com/AdamWhitehurst/portfolio/'}>
          <em>♫ + ⚛ = ♡  | </em>
          <p> Click for source<br/>(it's pretty neat)</p>
        </a>
        </div>
      </div>
    );
  }
};

export const App = injectSheet(style)(UnstyledApp);
