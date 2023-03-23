import React from 'react'
import './about.css'
import Me from '../../assets/me1.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About image" />
          </div>
        </div>
        <div className="container about__content">

          <h2>Hii 👋 I'm Rohit and I'm Front End Web Developer</h2>
          <ul>
            <li>I am 22 years old front-end  web-developer and i have completed B.EMEchanical Engineering.</li>
            <li>I am a Passionate self-lerner ,open-source enthusiast ,exploring and buildind project using various technologies</li>
            <li>My goal is to become a MERN stack developer.</li>
            <li>I have build more than 8 project and sharpen my problem-solving skills , i make responsive Websites</li>
            <li>I'm always up to learn new things</li>
          </ul>

          <div >
            <a href="#contact" className='btn btn-primary '>Let's Talk</a>
          </div>


        </div>

      </div>
    </section>
  )
}

export default About
