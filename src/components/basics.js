import React from 'react';
import injectSheet from 'react-jss';

const style = (Theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column wrap',
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
  contentSecondary: {
    extend: 'content',
    backgroundColor: Theme.colorPrimaryDark,
    boxShadow: Theme.outBoxShadow,
  },
  contentTertiary: {
    extend: 'content',
    backgroundColor: Theme.colorAccentLight,
    boxShadow: Theme.inBoxShadow,
  }
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

const UnstyledContentSecondary = ({classes, children}) => (
  <div className={classes.contentSecondary}>
    {children}
  </div>
)
export const ContentSecondary = injectSheet(style)(UnstyledContentSecondary);

const UnstyledContentTertiary = ({classes, children}) => (
  <div className={classes.contentTertiary}>
    {children}
  </div>
)
export const ContentTertiary = injectSheet(style)(UnstyledContentTertiary);