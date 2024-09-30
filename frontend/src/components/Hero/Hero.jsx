import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
      <h1>We Ensure butter education for a better world</h1>
      <p>Educated people are more productive. With the help of knowledge and skills, they can explore new ideas The countries that focus on educating higher education level</p>
      <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
