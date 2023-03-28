import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>My Portfolio</a>

    <ul className="links">
      <li><a href="#">Home</a></li>
      <li><a href="about">About</a></li>
      <li><a href="experience">Experience</a></li>
      <li><a href="services">services</a></li>
      {/* <li><a href="portfolio">Portfolio</a></li>
      <li><a href="textimonials">Textimonials</a></li> */}
      <li><a href="contect">Contect</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://www.facebook.com/profile.php?id=100007395970988"><BsFacebook/></a>
      <a href="https://www.instagram.com/itx__aliraza/?igshid=ZDdkNTZiNTM="><FaInstagram/></a>
      <a href="https//twitter.com"><BsTwitter/></a>
    </div>
    <div className="footer__copyright">
      <small>&Copy; EGATOR Tutorials. All rights reserved </small>
    </div>
   </footer>
  )
}

export default Footer