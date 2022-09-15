import React from 'react'
import cake from '../assets/img/cake.png'

const Home = () => {
  return (
    <div>
         <h1 className='mt-4'>Bienvenido a <strong>Happy Cake</strong> </h1>
         <p className='mt-2 fs-5'>El lugar de los pasteles felices</p>
         <img src={cake} className='mt-4 animate__animated animate__shakeY'/>
    </div>
  )
}

export default Home