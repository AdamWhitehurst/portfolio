import React from 'react';
import injectSheet from 'react-jss';
import { MainTitle } from '../constants/constants';


const style = (Theme) => ({
  basicHeader: {
    alignSelf: props => props.alignSelf,
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
  },
  title: {
    extend: 'basicHeader',
    fontSize: Theme.titleFontSize,
    lineHeight: '85%',
    position: 'fixed',
    left: 0,
    margin: 0,
    paddingRight: `calc(5 * ${Theme.padding})`,
    marginLeft: `calc(4 * ${Theme.margin})`,
    borderBottom: `0.05em solid ${Theme.textLight}`,
    borderRadius: '25%',
    borderBottomLeftRadius: '8%',
    boxShadow: Theme.outBorderShadow,
  },
  header: {
    extend: 'basicHeader',
    fontSize: props=> props.fontSize || '2em',
  },
  subheader: {
    extend: 'basicHeader',
    fontSize: props=> props.fontSize || '0.8em',
    fontFamily: Theme.contentFontFamily,
    fontStyle: 'italic',
  }
});

const UnstyledTitle = ({classes, children}) => (
  <h1 className={classes.title}>{MainTitle}</h1>
);

export const Title = injectSheet(style)(UnstyledTitle);