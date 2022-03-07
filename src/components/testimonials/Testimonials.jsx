import React from 'react'
import './testimonials.css'
import { testimonial } from "./../../Data"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section>
      <span className="section__subtitle">My client say</span>
      <h2 className="section__title">Testimonial</h2>

      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={40}
       slidesPerView={2}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       >
        {
          testimonial.map(({avatar, name, review}, index)=>{
            return (
              <SwiperSlide key={index}className="testimonial">
          <div className="client_avatar">
            <img src={avatar}/>
          </div>
          <h5 className="client_name">{name}</h5>
            <small className="client_review">{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials