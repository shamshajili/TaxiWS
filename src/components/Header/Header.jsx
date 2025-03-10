import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">

            <img src="./logo.png" alt="logo" width={100}/>


            <div className="flexCenter h-menu">
                <a href="">Personenfahrten</a>
                <a href="">Kurierfahrten</a>
                <a href="">Flughafenfahrten</a>
                <a href="">Krankenfahrten</a>
                <a href="">Kinderfahrten</a>
                <button className="button">
                <a href="">Kontact</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header