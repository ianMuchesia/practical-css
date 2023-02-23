import React from 'react'
import './team.css'
import { team, laptop } from '../assets'
const Team = () => {
  return (
  <section>
    <div className="section-center">
        <div className="section-team">
            <div className='image-wrapper'>
            <div className="image-overlay">
                <img src={team} alt="team" className='image1'/>
                <img src={laptop} alt="laptop" className='image2' />
            </div>
            </div>
            <div className="team-content">
                <h4>Our Team</h4>
                <h1>We are the Leaders in Web Development</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore voluptatibus ipsum suscipit in ratione. Magnam totam illo nesciunt vero culpa, itaque veritatis suscipit inventore provident aliquid sunt, iure quibusdam.</p>
                <div className='team-buttons'>
                    <button className='btn team-video'> Watch Video</button>
                    <button className='btn team-started'>Get Started</button>
                </div>

            </div>
        </div>
    </div>
  </section>
  )
}

export default Team