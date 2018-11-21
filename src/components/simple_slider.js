import React from 'react';
import Slider from "react-slick";

export class SimpleSlider extends React.Component {
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