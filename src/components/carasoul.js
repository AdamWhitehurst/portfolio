import React from 'react';
import injectSheet from 'react-jss';
import Slider from "react-slick";
import { Links } from '../constants/links';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(fab);

const style = (Theme) => ({
  carasoul: {
    flex: props => props.flex,
    marginTop: Theme.titleFontSize,
    paddingTop: Theme.padding,
    fontFamily: Theme.titleFontFamily,
    // backgroundColor: 'yellow',
  },
  carasoulItem: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    minHeight: '100%',
    padding: '10%',
    margin: Theme.margin,
  },
  carasoulIconLink: {
  },
  carasoulIcon: {
    color: Theme.textLight,
    filter: `drop-shadow(${Theme.outTextShadow})`,
  }
});

const settings = {
  dots: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  easing: 'ease-in-out',
  cssEase: 'ease-in-out',
  speed: 1500,
  infinite: true,
  centerMode: true,
  centerPadding: '10%',
  // responsive: [
  //   {
  //     breakpoint: 1440,
  //     settings: {
  //       slidesToShow: 4,
  //     }
  //   },
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 4,
  //     }
  //   },
  //   {
  //     breakpoint: 640,
  //     settings: {
  //       slidesToShow: 3,
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 360,
  //     settings: {
  //       slidesToShow: 1,
  //     }
  //   },
  // ]
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