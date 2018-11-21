import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Carasoul extends React.Component {
  render() {
    return (
      <Slider className={this.props.className} dots={false} autoplay={true} easing={'ease-in-out'} speed={1500}>
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
      <div className="carasoul-item">
      <a href={item.url} >
        <FontAwesomeIcon
            size='6x'
            icon={['fab', item.icon]}
          />
      </a>
      </div>
    );
  }
}