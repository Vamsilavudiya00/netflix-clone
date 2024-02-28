import React from 'react'
import BannerImg from '../assets/images/st-banner.jpg'
import '../styles/headercarousel.css'

const HeaderCarousel = () => {
  return (
    <div className='header_carousel'>
      <img src={BannerImg} alt="banner" />
      <span></span>
    </div>
  )
}

export default HeaderCarousel