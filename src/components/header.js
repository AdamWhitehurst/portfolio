import React from 'react';
import injectSheet from 'react-jss';
import { Title } from '../constants/constants';

const style = (Theme) => ({
  header: {
    position: 'fixed',
    top: '1vh',
    left: 0,
    margin: 0,
    width: '100%',
    paddingLeft: Theme.padding,
    marginLeft: Theme.margin,
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontSize: '4vh',
    lineHeight: '80%',
    verticalAlign: 'baseline',
    color: Theme.textLight,
    fontWeight: '100',
    fontFamily: Theme.titleFontFamily,
    textShadow: Theme.outTextShadow,

    // backgroundColor: 'red',
  }
});

const UnstyledHeader = ({classes, children}) => (
  <h2 className={classes.header}>{Title}</h2>
);

export const Header = injectSheet(style)(UnstyledHeader);