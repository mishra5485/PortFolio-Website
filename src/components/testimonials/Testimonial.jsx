import React from "react";
import "./Testimonial.css";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Avtar1 from "../../assets/avatar1.jpg";
import Avtar2 from "../../assets/avatar2.jpg";
import Avtar3 from "../../assets/avatar3.jpg";
import Avtar4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: Avtar1,
    name: "Adarsh Ballary",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus eaque earum eos quisquam recusandae optio quis molestiae soluta id",
  },
  {
    avatar: Avtar2,
    name: "Harsh Mishra",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus eaque earum eos quisquam recusandae optio quis molestiae soluta id",
  },
  {
    avatar: Avtar3,
    name: "Shivam Jaiswal",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus eaque earum eos quisquam recusandae optio quis molestiae soluta id",
  },
  {
    avatar: Avtar4,
    name: "Vipul Vishwakarma",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus eaque earum eos quisquam recusandae optio quis molestiae soluta id",
  },
];

function Testimonial() {
  return (
    <section>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client-avatar">
                <img src={avatar} alt="Avatar1" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="cleint_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;
