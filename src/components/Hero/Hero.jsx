import React from 'react'
import "./Hero.css"
import CountUp from "react-countup"

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">


        <div className="flexColStart hero-left">
            <div className="hero-title">
                <div className="orange-circle"/>
                <h1>
                    Star <br/> Taxi <br/> Lübeck
                </h1>


            </div>

            <div className="flexColStart hero-des">
               <span className="secondaryText">
               Star Taxi Lübeck ist Ihr zuverlässiger Partner für sichere Fahrten.
               </span>
               
               <span className="secondaryText">
               Mit uns erreichen Sie Ihr Ziel schnell und komfortabel.
               </span>
            </div>
            <div className="flexCenter stats">
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={8800} end={9000} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className="secondaryText">Zufriedene Fahrgäste</span>
                </div>

                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={1950} end={2000} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className="secondaryText">Sichere Fahrten</span>
                </div>

                <div className="flexColCenter stat">
                    <span>
                        <CountUp end={28}/>
                        <span>+</span>
                    </span>
                    <span className="secondaryText">Jahre Erfahrung</span>
                </div>
            </div>
        </div>

        <div className="flexCenter hero-right">
            <div className="image-container">
                <img src="./hero-image.png" alt="" />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero