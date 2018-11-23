import React from 'react';
import injectSheet from 'react-jss';
import {BasicContainer, BasicContent, BasicContentSecondary} from '../constants/theme';

const style = (Theme) => ({
  container: BasicContainer,
  content: BasicContent,
  contentSecondary: {
    extend: 'content',
    ...BasicContentSecondary,
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