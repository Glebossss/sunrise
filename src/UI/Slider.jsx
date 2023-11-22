import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.scss"

import image1 from "../Images/pic1.jpg"
import image2 from "../Images/pic2.jpg"
import image3 from "../Images/pic3.jpg"


export default class Slick extends Component {
  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: "-25px",
      speed: 500,
    };
    return (
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
    );
  }
}