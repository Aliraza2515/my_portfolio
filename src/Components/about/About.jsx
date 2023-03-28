import React from 'react'
import './about.css'
import p1 from '../../assets/me2.jpg'
import { FaAward } from 'react-icons/fa'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="img">
          <div className="img__me">
            <img src={p1} alt="Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="cards">
            <article className="card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ month React-Native</small>
            </article>



            <article className="card">
              <AiOutlineUsergroupAdd className="about__icon" />
              <h5>Experience</h5>
              <small>6+ month React JS</small>
            </article>



            <article className="card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>
          <p>Computer Science graduate with an understanding of HTML, CSS,  JavaScript , 
            React JS & REACT-NATIVE, eager to join a company as a MERN web application development 
            internship to learn more about developing user-interactive features.
</p>

          <a href="#contact" className='btn btn-primary '>Let's Talk</a>
        </div>


      </div>

    </section>
  )
}

export default About