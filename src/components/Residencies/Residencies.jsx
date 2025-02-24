import React from 'react'
import "./Residencies.css"
import {Swiper,SwiperSlide,useSwiper} from "swiper/react"
import "swiper/css"
import data from "../../utils/slider.json"

const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className="orangeText">Beste Wahlen</span>
                <span className="primaryText">Unser Servicevorteil</span>
            </div>
            <Swiper>
                {data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className=" flexColStart r-card">
                                <img src={card.image} alt="" />

                                <span className="secondaryText r-price">
                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                                </span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies