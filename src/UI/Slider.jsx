import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.scss"

import image1 from "../Images/pic1.jpg"
import image2 from "../Images/pic2.jpg"
import image3 from "../Images/pic3.jpg"


export default class Slick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }
  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: this.state.windowWidth <= 1600? 1:3,
      slidesToScroll: 1,
      centerPadding: "-25px",
      speed: 500,
    };
    return (
      <div className={'slider_wrapper'}>
        <Slider {...settings}>
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image2} />
          </div>
          <div>
            <img src={image3} />
          </div>
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image2} />
          </div>
          <div>
            <img src={image3} />
          </div>
        </Slider>
      </div>
    );
  }
}