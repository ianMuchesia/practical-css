import React from 'react'
import './testimonial.css'
import { testimonial } from '../assets'
import {AiFillStar} from 'react-icons/ai'
import{FaQuoteLeft} from 'react-icons/fa'
const Testimonial = () => {
  return (
    <section className='testimonial'>
        <div className="section-center">
            <h3 className='testimonial-header'>Testimonials</h3>
            <h2 className='testimonial-header2'>Don't Believe Me Check what the clients are saying</h2>
            <div className="section-testimonial">
                <div className='testimonial-img'>
                    <img src={testimonial} alt="testimonial" />
                </div>
                <div className='testimonial-content'>
                    <h1 className='testimonial-subheader'>Save Time Managing Social Media for your business</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda tempore, eveniet consequatur omnis, quibusdam ducimus officia iste itaque earum officiis molestiae cupiditate nostrum modi.</p>
                    <div className='testimonial-rating'>
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                    </div>
                    <h3>Ian Muchesia</h3>
                    <h5>Software Developer</h5>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial