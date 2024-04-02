import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <h1>Emmanuel Quarshie</h1>
        <p className='title'>Full-Stack Developer</p>
        <p className='website'>emmanuelquarshie.website</p>
        <div className="btn">
            <a href="mailto:your.email@example.com" target="_blank" class="email-button"><i className="fas fa-envelope"></i>Email</a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" class="linkedin-button"><i className="fab fa-linkedin"></i>LinkedIn</a>
        </div>
        <div>
            <h2>About</h2>
            <p className='about-text'>I am a full-stack developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2>Interest</h2>
            <p className='about-text'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    </div>
  )
}

export default About