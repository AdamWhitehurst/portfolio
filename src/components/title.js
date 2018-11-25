import React from 'react';
import injectSheet from 'react-jss';
import { MainTitle } from '../constants/texts';


const style = (Theme) => ({
  title: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    verticalAlign: 'baseline',
    padding: 0,
    margin: 0,
    color: Theme.textLight,
    fontWeight: '100',
    fontFamily: Theme.titleFontFamily,
    textShadow: Theme.outTextShadow,
    fontSize: Theme.titleFontSize,
    lineHeight: '85%',
    position: 'fixed',
    left: 0,
    paddingRight: '0.15em',
    marginLeft: '0.15em',
    borderBottom: `0.2rem solid ${Theme.textLight}`,
    borderRadius: '25%',
    borderBottomLeftRadius: '8%',
    boxShadow: Theme.outBorderShadow,
    zIndex: 99,
  }
});

const UnstyledTitle = ({classes, children}) => (
  <h1 className={classes.title}>{MainTitle}</h1>
);

export const Title = injectSheet(style)(UnstyledTitle);