import React from 'react'
import { ProfileText } from '../constants/texts';
import injectSheet from 'react-jss';

const style = (Theme) => ({
  container: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    color: Theme.textLight,
    fontFamily: Theme.contentFontFamily,
  },
  title: {
    width: '98%',
    color: Theme.colorPrimaryLight,
    paddingLeft: '0.5em',
    textAlign: 'start',
    fontSize: '1.9em',
    fontFamily: Theme.titleFontFamily,
    fontWeight: '100',
    lineHeight: '85%',
    borderBottom: `0.06em solid ${Theme.colorPrimaryLight}`,
    borderBottomLeftRadius: '8%',
    boxShadow: Theme.outBorderShadow,
  },
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingRight: '1em',
  }
});

class UnstyledProfile extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <h2 className={classes.title}>{ProfileText.Title}</h2>
        <div className={classes.body}><p>{ProfileText.Body}</p></div>
      </div>
    )
  }
}

export const Profile = injectSheet(style)(UnstyledProfile);