import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Creative Design Agency Responsive Page Website',
    github: 'https://Github.com',
    demo: 'https://dribbble.com/shots/19464656-Das-Gr-ne-Creative-Design-Agency-Responsive-Page-Website'
  },
  
  {
    id: 2,
    image: IMG2,
    title: 'Lofty Homepage Redesign',
    github: 'https://Github.com',
    demo: 'https://dribbble.com/shots/17702134-Lofty-Homepage-Redesign'
  },
  
  {
    id: 3,
    image: IMG3,
    title: 'Finced- Web Site- Hero',
    github: 'https://Github.com',
    demo: 'https://dribbble.com/shots/20076776-Crypto-trading-home-page'
  },
  
  {
    id: 4,
    image: IMG4,
    title: 'Creative Design Agency Responsive Page Website',
    github: 'https://Github.com',
    demo: 'https://dribbble.com/shots/19104887-Finced-Web-Site-Hero'
  },
  
  {
    id: 5,
    image: IMG5,
    title: 'Oxywear redesign concept appliction',
    github: 'https://Github.com',
    demo: 'https://dribbble.com/shots/19913397-Oxywear-redesign-concept'
  },
  
  {
    id: 6,
    image: IMG6,
    title: 'landing page home page ux ui web',
    github: 'https://Github.com',
    demo: 'https://dribbble.com/shots/20203524-Streamlit-Website-Design-landing-page-home-page-ux-ui-web'
  },
  
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) =>{
          return(
            <artical key={id} className="item">
            <div className="item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="item-cta">
  
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </artical>
          )
        }
        )
      }
      </div>

    </section>
  )
}

export default Portfolio