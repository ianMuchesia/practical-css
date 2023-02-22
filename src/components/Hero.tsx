import React from 'react'
import { portfolio } from '../assets'
import './hero.css'
const Hero = () => {
  return (
    <section className='section-two'>
        <div className='section-center'>
    <div className='hero-section'>
        <div className='hero'>
            <h6 className='welcome'>Welcome to my portfolio</h6>
            <h1 className='hero-title'>
                Full Stack Software Developer
            </h1>
            <p className='hero-intro'>
                I am a Full Stack Software Developer with a passion for learning new technologies, and a passion for learning new technologies.
            </p>
            <div className='hero-buttons'>
                <button className='hero-video'>Watch Video</button>
                <button className='hero-started'>Get Started</button>
            </div>
        </div>
        <div className="hero-image-section">
            <img src={portfolio} alt='portfolio'  className='hero-image'/>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Hero