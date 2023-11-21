import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import "../styles/Slider.scss"

import pic1 from "../Images/pic1.jpg"
import pic2 from "../Images/pic2.jpg"
import pic3 from "../Images/pic3.jpg"

// import required modules
import { Pagination, Navigation } from "swiper/modules"

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={pic2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
