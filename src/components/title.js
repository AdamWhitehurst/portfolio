import React from 'react';
import injectSheet from 'react-jss';
import { MainTitle, ContactText } from '../constants/texts';

const style = (theme) => ({
  container: {
    height: theme.titleFontSize,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  mainTitle: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    verticalAlign: 'baseline',
    padding: 0,
    margin: 0,
    color: theme.textLight,
    fontWeight: '100',
    fontFamily: theme.titleFontFamily,
    textShadow: theme.outTextShadow,
    fontSize: theme.titleFontSize,
    lineHeight: '85%',
    position: 'fixed',
    left: 0,
    paddingRight: '0.25em',
    marginLeft: '0.15em',
    borderBottom: `0.2rem solid ${theme.textLight}`,
    borderRadius: '25%',
    borderBottomLeftRadius: '8%',
    boxShadow: theme.outBorderShadow,
    zIndex: 99,
  },
  contactContainer: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.75rem',
    paddingTop: 0,
    color: theme.textLight,
    fontWeight: '100',
    zIndex: 99,
    borderLeft: `0.06em solid ${theme.colorPrimaryLight}`,
    backgroundColor: `${theme.bgDark}bb`,
  },
    contactTitle: {
    display: 'flex',
    alignSelf: 'flex-start',
    alignItems: 'baseline',
    color: theme.colorPrimaryLight,
    textShadow: theme.outTextShadow,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    verticalAlign: 'baseline',
    fontWeight: '100',
    margin: 0,
  },
  contactText: {
    fontFamily: theme.contentFontFamily,
    fontWeight: '100',
    textShadow: theme.outTextShadow,
    margin: 0,
  },
});

const UnstyledTitle = ({classes, children}) => (
  <div className={classes.container}>
    <h1 className={classes.mainTitle}>{MainTitle}</h1>
    <div className={classes.contactContainer}>
      <h4 className={classes.contactTitle}>{ContactText.Title}</h4>
      <h6 className={classes.contactText}>{ContactText.Address}</h6>
      <h6 className={classes.contactText}>{ContactText.Email}</h6>
      <h6 className={classes.contactText}>{ContactText.Phone}</h6>
    </div>
  </div>
);

export const Title = injectSheet(style)(UnstyledTitle);