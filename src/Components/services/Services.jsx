import React from 'react'
import './services.css'
import { BsCheck2 } from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>KPI & JD</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <artical className="services">
          <div className="head">
            <h3>Front-End Developer</h3>
          </div>
          <ul className="list">
            <li>
              <BsCheck2 className='list-icon' />
              <p>The excellent knowledge of HTML5, CSS and javascript.</p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>Responsible for developing new user-facing front-end features.</p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>Determining the structure, design and reusable codes.</p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>Perform code reviews and code analysis.</p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>Analyze market trends and user feedback.</p>
            </li>

          </ul>
        </artical>
        {/* End of fist lis */}


        <artical className="services">
          <div className="head">
            <h3>Full Stack Developer</h3>
          </div>
          <ul className="list">
            <li>
              <BsCheck2 className='list-icon' />
              <p>The knowledge of Express JS, Node JS and MongoDB.</p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>Understanding of data structures and algorithms.</p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>Debug and resolve software issues.
              </p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>Is adept at working in an agile environment</p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>Stay up-to-date with emerging technologies and industry trends.</p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>The potential improvements and setup good practices.</p>
            </li>

          </ul>
        </artical>
        {/* end of second list */}

        <artical className="services">
          <div className="head">
            <h3>User-Interface</h3>
          </div>
          <ul className="list">
            <li>
              <BsCheck2 className='list-icon' />
              <p>Have a good experience in (UI)</p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>The potential improvements and setup good practices.</p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>Have the ability to lead the entire feature lifecycle.</p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>Mentoring, coordinating activities, inspiring and motivating others</p>
            </li>
            <li>
              <BsCheck2 className='list-icon' />
              <p>Writing clean and secure modular codes that have undergone strict testing and evaluation.</p>
            </li>

          </ul>
        </artical>
      </div>
    </section>
  )
}

export default Services