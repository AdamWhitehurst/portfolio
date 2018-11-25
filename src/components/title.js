import React from 'react';
import injectSheet from 'react-jss';
import { TitleText } from '../constants/constants';


const style = (Theme) => ({
  basicHeader: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    verticalAlign: 'baseline',
    padding: 0,
    margin: 0,
    color: Theme.textLight,
    fontSize: '3em',
    fontWeight: '100',
    fontFamily: Theme.titleFontFamily,
    textShadow: Theme.outTextShadow,
    zIndex: 99,
  },
  header: {
    extend: 'basicHeader',
    width: '100%',
    fontSize: Theme.titleFontSize,
    position: 'fixed',
    left: 0,
    margin: 0,
    paddingLeft: Theme.padding,
    marginLeft: Theme.margin,
  }
});

const UnstyledTitle = ({classes, children}) => (
  <h1 className={classes.header}>{TitleText}</h1>
);

export const Title = injectSheet(style)(UnstyledTitle);

const UnstyledHeader2 = ({classes, children}) => (
  <h2 className={classes.basicHeader}>{children}</h2>
);
export const Header2 = injectSheet(style)(UnstyledHeader2);