import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Experience i have</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="frontend">
          <h3>Frontend Developer</h3>
          <div className="content">
            <article className="details">
              <BsFillPatchCheckFill className='details__icon' />
              <div>
              <h4>HTML</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsFillPatchCheckFill className='details__icon' />
              <div>
              <h4>CSS</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsFillPatchCheckFill className='details__icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className="details">
              <BsFillPatchCheckFill className='details__icon'/>
              <div>
              <h4>JavaScript</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsFillPatchCheckFill className='details__icon'/>
              <div>
              <h4>ReactNative</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsFillPatchCheckFill className='details__icon'/>
              <div>
              <h4>Reactjs</h4>
              <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="backend">
        <h3>Backend Developer</h3>
          <div className="content">
            <article className="details">
              <BsFillPatchCheckFill className='details__icon'/>
              <div>
              <h4>Node js</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className="details">
              <BsFillPatchCheckFill className='details__icon'/>
              <div>
              <h4>MongoDB</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className="details">
              <BsFillPatchCheckFill className='details__icon'/>
              <div>
              <h4>Express</h4>
              <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience