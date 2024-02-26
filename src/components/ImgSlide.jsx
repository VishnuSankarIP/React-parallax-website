import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgSlide() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <Slider {...settings} >
      <div >
        <img className='ms-5 me-5 ' src='Seventh-section.jpg' style={{width:'90%'}}></img>
      </div>
      <div>
      <img className='ms-5 me-5 ' src='Eight-section.jpg' style={{width:'90%'}}></img>
      </div>
      <div>
      <img className='ms-5 me-5 ' src='Fourth-section.png' style={{width:'90%'}}></img>
      </div>
      
     
    </Slider>
  )
}

export default ImgSlide
