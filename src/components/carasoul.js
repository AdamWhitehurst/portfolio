import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from './basic';
export class Carasoul extends React.Component {
  render() {
    const settings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      easing: 'ease-in-out',
      speed: 1500,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Slider {...settings}>
        {
          this.props.children
        }
      </Slider>
    );
  }
}

export class CarasoulItem extends React.Component {
  render () {
    const {item} = this.props;
    return (
      <Nav className={'carasoul-item'}>
        <a href={item.url} >
          <FontAwesomeIcon
              className={'carasoul-icon'}
              transform={'grow-64'}
              icon={['fab', item.icon]}
            />
        </a>
      </Nav>
    );
  }
}