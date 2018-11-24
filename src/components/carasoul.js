import React from 'react';
import injectSheet from 'react-jss';
import Slider from "react-slick";
import { BasicContent, BasicContainer } from '../constants/theme';
import { Content } from './basics';
import { Links } from '../constants/links';

const style = (Theme) => ({
  carasoul: {
    ...BasicContainer,
    //backgroundColor: 'red',
    marginTop: '1.4rem',
    flex: props => props.flex || 1, 
  },
});

const settings = {
  dots: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  easing: 'ease-in',
  speed: 1500,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
}

class UnstyledCarasoul extends React.Component {

  renderCarasoulItems() {
    let items = [];
    for (let link in Links) {
      items.push (
        <CarasoulItem key={link}>
          <p>{link}</p>
        </CarasoulItem>
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

const UnstyledCarasoulItem = ({classes, children}) => (
  <Content className={classes.carasoulItem}>
    {children}
  </Content>
);

const CarasoulItem = injectSheet(style)(UnstyledCarasoulItem);
