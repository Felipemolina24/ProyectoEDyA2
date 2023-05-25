import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <>
    <div className='banner' style={{ backgroundImage: `url(./banner.png)` }}>
        <div className='banner-container'>
            <h2 className='text-banner'>¡Vive una experiencia diferente! </h2>
            <h4 className='sub-text'>"Conéctate, juega y comparte con gamers de todo el mundo en nuestra red social dedicada a los apasionados por los videojuegos"</h4>
        </div>
    </div>
    </>
  )
}

export default Banner