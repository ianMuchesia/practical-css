import React from 'react'
import { card5, portfolio } from '../assets'
import { card1, card2, card3, card4,card6 } from '../assets'
import './hero.css'
const Hero = () => {
  return (
    <section className=''>
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
                <button className='btn hero-video'>Watch Video</button>
                <button className='btn hero-started'>Get Started</button>
            </div>
        </div>
        <div className="hero-image-section">

            <img src={portfolio} alt='portfolio'  className='hero-image'/>
            <img src={card1} alt="card1"  className='card1'/>
            <img src={card2} alt="card2" className='card2'/>
            <img src={card3} alt="card3" className='card3'/>
            <img src={card4} alt="card4" className='card4'/>
            <img src={card5} alt="card5" className='card5'/>
            <img src={card6} alt="card6" className='card6'/>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Hero