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
    fontSize: Theme.titleFontSize,
    lineHeight: '80%',
    position: 'fixed',
    left: 0,
    margin: 0,
    paddingRight: `calc(3.5 * ${Theme.padding})`,
    marginLeft: `calc(4 * ${Theme.margin})`,
    borderBottom: `0.25rem solid ${Theme.textLight}`,
    borderRadius: '25%',
    borderBottomLeftRadius: '8%',
    boxShadow: Theme.outBorderShadow,
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