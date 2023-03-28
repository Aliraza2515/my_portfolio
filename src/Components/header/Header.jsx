import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderScocial from './HeaderSocials'
import ME from '../../assets/me1.png'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Ali raza</h1>
        <h5 className="text-light">Full stack developer</h5>
        <CTA/>
        <HeaderScocial/>
        <div className="me">
          <img src={ME} alt='me' />

        </div>
        <a href="#Contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header