import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { TESTIMONIALDATA } from "@/constants";
import TestimonialItems from "./TestimonialItems";

const Testimonials = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="mb-20 text-center">
          <h1 className="font-pacifiko text-3xl font-semibold tracking-wider lg:text-5xl">
            Testimonials
          </h1>
          <div className="flex justify-center">
            <div className="backy mb-3 mt-5 h-1 w-full max-w-xl rounded-full"></div>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {TESTIMONIALDATA.map((testimon) => (
            <SwiperSlide key={testimon.id}>
              <TestimonialItems
                name={testimon.name}
                aosDelay={testimon.aosDelay}
                description={testimon.description}
                img={testimon.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
