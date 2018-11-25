import React from 'react';
import injectSheet from 'react-jss';

const style = (Theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    boxSizing: 'border-box',
    backgroundColor: Theme.bgDark,
    fontFamily: Theme.titleFontFamily,
  },
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: props => props.justifyContent || 'center',
    alignItems: props => props.alignItems || 'center',
    borderRadius: Theme.borderRadius,
    padding: Theme.paddingSmall,
    margin: Theme.margin,
    color: Theme.textDark,
    fontFamily: Theme.contentFontFamily,
    flexDirection: props => props.flexDirection || 'column',
    overflow: props => props.overflow,
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