import React from 'react'
import { ProfileText } from '../constants/texts';
import injectSheet from 'react-jss';

const style = (Theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: Theme.textLight,
    fontFamily: Theme.contentFontFamily,
  },
  title: {
    width: '98%',
    color: Theme.colorPrimaryLight,
    paddingRight: '1em',
    fontSize: '1.9em',
    fontFamily: Theme.titleFontFamily,
    fontWeight: '100',
    lineHeight: '85%',
    borderBottom: `0.06em solid ${Theme.colorPrimaryLight}`,
    borderRadius: '25%',
    borderBottomRightRadius: '8%',
    boxShadow: Theme.outBorderShadow,
    textAlign: 'end',
  },
  body: {
    padding: '1.2em',
  }
});

class UnstyledProfile extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <h2 className={classes.title}>{ProfileText.Title}</h2>
        <div className={classes.body}> {ProfileText.Body}</div>
      </div>
    )
  }
}

export const Profile = injectSheet(style)(UnstyledProfile);