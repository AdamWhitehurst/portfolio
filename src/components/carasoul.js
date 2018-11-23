import React from 'react';
import Slider from "react-slick";
import injectSheet from 'react-jss';
import {BasicContent} from '../constants/theme';

const style = (Theme) => ({
  carasoul: {
    ...BasicContent,
    backgroundColor: 'none',
    marginTop: '1.5rem',
    boxShadow: 'none',
  }
});

const UnstyledCarasoul = ({classes, children}) => (
  <Slider className={classes.carasoul} dots={false} autoplay={true} easing={'ease-in-out'} speed={1500}>
    {children}
  </Slider>
);

export const Carasoul = injectSheet(style)(UnstyledCarasoul);
