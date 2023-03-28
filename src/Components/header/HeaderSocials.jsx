import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {SiGmail} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.facebook.com/profile.php?id=100007395970988" target="_blank">
            <BsFacebook/>
                </a>
        <a href="https://github.com/aliRaza238" target="_blank"> <GoMarkGithub/>   </a>
        <a href="https://ar.developer2515@gmail.com" target="_blank"> <SiGmail/>   </a>


    </div>
  )
}

export default HeaderSocials