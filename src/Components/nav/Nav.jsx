import React from 'react'
import './nav.css'
import { BiHomeCircle } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { RiServiceFill } from 'react-icons/ri'
import { MdOutlineMessage } from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><BiHomeCircle /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}  ><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}  ><BsFillJournalBookmarkFill /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}  ><RiServiceFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><MdOutlineMessage /></a>


    </nav>
  )
}

export default Nav