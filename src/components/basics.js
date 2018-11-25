import React from 'react';
import injectSheet from 'react-jss';

const style = (Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Theme.bgDark,
    fontFamily: Theme.titleFontFamily,
  },
  content: {
    display: 'flex',
    justifyContent: props => props.justifyContent || 'center',
    alignItems: props => props.alignItems || 'center',
    flexDirection: props => props.flexDirection || 'column',
    flexWrap: props => props.flexWrap || 'wrap',
    width: props => props.width,
    borderTopWidth: '1vh',
    borderColor: 'white',
    padding: Theme.paddingSmall,
    margin: Theme.margin,
    color: Theme.textLight,
    fontFamily: Theme.contentFontFamily,
    textAlign: 'justify',
    textJustify: 'inter-word',
  },
});


const UnstyledContainer = ({classes, children}) => (
  <div className={classes.container}>
    {children}
  </div>
);
export const Container = injectSheet(style)(UnstyledContainer);

const UnstyledContent = ({classes, children}) => (
  <div className={classes.content}>
    {children}
  </div>
)
export const Content = injectSheet(style)(UnstyledContent);