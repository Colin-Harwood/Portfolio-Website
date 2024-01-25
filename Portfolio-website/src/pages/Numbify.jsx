import React from 'react'
import Navbar from '../components/Navbar';
import './Numbify.css'

const Numbify = () => {
  return (
    <>
    <Navbar/>
      <div className="flex justify-center mt-7">
        <h1 className="text-5xl lg:text-8xl font-bold">Ivy Fashion<br/><img src="/image-removebg-preview (6).png" alt="wavyUnderline" width="550px" id="line1"/></h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center ">
          
          <p className='px-10 text-xl'>
            
          Welcome to Numbify, where drawing meets artificial intelligence. Using Django and Bootstrap, Numbify lets you sketch numbers, and behind the scenes, 
          a custom TensorFlow neural network predicts what you've drawn. It's a seamless blend of web development and machine learning, offering an engaging, user-friendly experience.
          Numbify is also completely responsive and mobile compatible allowing users of all devices to enjoy the experience.
          
          </p>
          <div className="flex flex-row justify-center gap-10">

          </div>
          
        </div>
        <div className="flex flex-row justify-center align-center content-center items-center p-3">
          <img src="/FireShot Capture 020 -  - 127.0.0.1.png" alt="project"  className="rounded w-11/12 mb-3"/>
        </div>
      </div >
      
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mx-6 " id="img-cont">
        
          
          
            <img src="/FireShot Capture 018 -  - 127.0.0.1.png" alt="mens clothes"  className="rounded w-full mb-3"/>
            <img src="/FireShot Capture 019 -  - 127.0.0.1.png" alt="project"  className="rounded w-full mb-3"/>
          
          
          
      </div >
      
    </>
  )
}

export default Numbify