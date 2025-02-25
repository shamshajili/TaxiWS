import React from "react";
import "./Residencies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";  
import { Navigation, Pagination } from "swiper/modules";

import data from "../../utils/slider.json";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Beste Wahlen</span>
          <span className="primaryText">Unser Servicevorteil</span>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}  
          spaceBetween={20} 
          slidesPerView={1} 
          navigation
          pagination={{ clickable: true }} 
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt={card.name} />
                <div className="r-text">
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
