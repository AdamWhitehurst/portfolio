import React from 'react';
import injectSheet from 'react-jss';
import Slider from "react-slick";
import { Links } from '../constants/links';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(fab);

const style = (theme) => ({
  carasoul: {
    flex: props => props.flex,
    fontFamily: theme.titleFontFamily,
  },
  carasoulItem: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: '1.5em',
    margin: theme.margin,
  },
  carasoulIconLink: {
  },
  carasoulIcon: {
    color: theme.colorPrimaryLight,
    filter: `drop-shadow(${theme.outTextShadow})`,
    margin: theme.margin,
    transition: [
      {
      property: 'opacity',
      duration: '200ms'
    },
    {
      property: 'color',
      duration: '200ms'
    }],
    '&:hover': {
      color: theme.textLight,
    }
  }
});

const settings = {
  dots: false,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  easing: 'ease-in-out',
  cssEase: 'ease-in-out',
  speed: 1500,
  infinite: true,
  centerMode: true,
  centerPadding: '10%',
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      }
    },
  ],
}

class UnstyledCarasoul extends React.Component {

  renderCarasoulItems() {
    let items = [];
    for (let link in Links) {
      items.push (
        <CarasoulItem key={Links.indexOf(link)} {...Links[link]}/>
      );
    } 
    return items;
  }
  render () {
    return (
        <Slider className={this.props.classes.carasoul} {...settings}>
          {this.renderCarasoulItems()}
        </Slider>
    );
  }
}

export const Carasoul = injectSheet(style)(UnstyledCarasoul);

class UnstyledCarasoulItem extends React.Component {
  render () {
    const {classes, icon, url} = this.props;
    let iconArray = ['fab', icon];
    return (
      <div className={classes.carasoulItem}>
        <a href={url} className={classes.carasoulIconLink}>
          <FontAwesomeIcon transform={'grow-72'} icon={iconArray} className={classes.carasoulIcon}/>
        </a>
      </div>
    );
  }
};
const CarasoulItem = injectSheet(style)(UnstyledCarasoulItem);