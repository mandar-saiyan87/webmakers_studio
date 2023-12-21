import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TestimonialTile from './widget/TestimonialTile';

function Section4() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Slider {...settings} className='w-full bg-[#F9FAFB] my-28'>
        <TestimonialTile />
        <TestimonialTile />
        <TestimonialTile />
      </Slider>
    </>
  )
}

export default Section4