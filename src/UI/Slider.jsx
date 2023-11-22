<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { Component, useState } from "react";
>>>>>>> 1edc3d0f42a8a0c898416245fbd61838c839e0f7
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.scss"

import image1 from "../Images/pic1.jpg"
import image2 from "../Images/pic2.jpg"
import image3 from "../Images/pic3.jpg"


export default class Slick extends Component {
<<<<<<< HEAD
=======
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
>>>>>>> 1edc3d0f42a8a0c898416245fbd61838c839e0f7
  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
<<<<<<< HEAD
      slidesToShow: 3,
=======
      slidesToShow: this.state.windowWidth <= 1600? 1:3,
>>>>>>> 1edc3d0f42a8a0c898416245fbd61838c839e0f7
      slidesToScroll: 1,
      centerPadding: "-25px",
      speed: 500,
    };
    return (
<<<<<<< HEAD
=======
      <div className={'slider_wrapper'}>
>>>>>>> 1edc3d0f42a8a0c898416245fbd61838c839e0f7
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
<<<<<<< HEAD
=======
      </div>
>>>>>>> 1edc3d0f42a8a0c898416245fbd61838c839e0f7
    );
  }
}