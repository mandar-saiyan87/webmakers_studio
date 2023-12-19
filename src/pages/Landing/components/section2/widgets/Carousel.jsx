import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { landingImages } from '../../../../../assets/images/LandingImages';

function Carousel() {

  const carouselimg = [landingImages.carousel1, landingImages.carousel2, landingImages.carousel3, landingImages.carousel4, landingImages.carousel5]

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear"
  };

  return (
    <div className='w-full'>
      <Slider {...settings} >
        {carouselimg.map((image, index) => {
          return (
            <div className='p-4' key={index}>
              <img src={image} alt={image} className='object-contain aspect-square'/>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Carousel