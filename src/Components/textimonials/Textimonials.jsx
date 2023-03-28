import React from 'react'
import './textimonials.css'
import CIMG1 from '../../assets/avatar1.jpg'
import CIMG2 from '../../assets/avatar2.jpg'
import CIMG3 from '../../assets/avatar3.jpg'
import CIMG4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    Image: CIMG1,
    Name: 'Ernest Achiever',
    Review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et suscipit pariatur ad quisquam necessitatibus nihil placeat quasi nostrum quibusdam itaque velit dolor, exercitationem non totam,distinctio reprehenderit quae, recusandae nam? Autem, illo tempor",

  },

  {
    Image: CIMG2,
    Name: 'Fin Flor',
    Review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et suscipit pariatur ad quisquam necessitatibus nihil placeat quasi nostrum quibusdam itaque velit dolor, exercitationem non totam,distinctio reprehenderit quae, recusandae nam? Autem, illo tempor",

  },

  {
    Image: CIMG3,
    Name: 'Fahad',
    Review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et suscipit pariatur ad quisquam necessitatibus nihil placeat quasi nostrum quibusdam itaque velit dolor, exercitationem non totam,distinctio reprehenderit quae, recusandae nam? Autem, illo tempor",

  },

  {
    Image: CIMG4,
    Name: 'Noor fatima',
    Review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et suscipit pariatur ad quisquam necessitatibus nihil placeat quasi nostrum quibusdam itaque velit dolor, exercitationem non totam,distinctio reprehenderit quae, recusandae nam? Autem, illo tempor",

  },
]
const Textimonials = () => {
  return (
    <section id='textimonials'>
      <h5>Review from clients</h5>
      <h2>Textimonials</h2>
      <Swiper modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }} 
        className="container textimonials__container">
        {
          data.map(({ Image, Name, Review }, index) => {
            return (
              <SwiperSlide key={index} className="textimonials">
                <div className="clients">
                  <img src={Image} alt="Frist Client" />
                </div>
                <h5 className="client__name">{Name}</h5>
                <small className="review">
                  {Review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Textimonials