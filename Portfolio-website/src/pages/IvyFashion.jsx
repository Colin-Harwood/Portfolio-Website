import './IvyFashion.css'

import React from 'react'

const IvyFashion = () => {
  return (
    <>
      <div className="flex justify-center mt-7">
        <h1 className="text-5xl lg:text-8xl font-bold">Ivy Fashion<br/><img src="/image-removebg-preview (6).png" alt="wavyUnderline" width="720px" id="line1"/></h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center ">
          <h1 className="text-5xl mb-7 px-10">Landing Page</h1>
          <p className='px-10'>The landing page consists of a simple but effective and easy to view layout, giving potential clients an easy understanding of the service as well as specific details to build trust well also supplying reasons as to why use EasyChauffeur over competitors. 
          <br/>After a client clicks on the button to book a chauffeur they are taken to a clean and simple page with two options, which allows clients to easily navigate and not get confused or misleaded away from the actual service.
          <br/>The fleet page is a simple page with a list of the cars available for hire, with all of the information easily available ans consumable, leading to clients knowing exactly what options are available.
          </p>
          <div className="flex flex-row justify-center gap-10">

          </div>
          
        </div>
        <div className="flex flex-row justify-center align-center content-center items-center p-10 pl-10 pr-10">
          <img src="/FireShot Capture 015 - Professional Chauffeur Services - Chauffeur - 127.0.0.1.png" alt="project"  className="rounded  w-1/2"/>
          <div className="flex flex-col">
          <img src="/FireShot Capture 002 - Professional Chauffeur Services - Chauffeur - 127.0.0.1.png" alt="project"  className="rounded w-full ml-3 mb-3"/>
            <img src="/FireShot Capture 001 - Professional Chauffeur Services - Chauffeur - 127.0.0.1-copy.png" alt="project"  className="rounded w-full ml-3"/>
            
          </div>
        </div>
      </div >
      
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        
          <div class="columns-2 ml-5 order-last lg:order-first">
            <div className="flex flex-col">
              <img src="/FireShot Capture 003 - Professional Chauffeur Services - Chauffeur - 127.0.0.1.png" alt="project"  className="rounded w-full mb-3"/>
              <img src="/FireShot Capture 005 - Professional Chauffeur Services - Chauffeur - 127.0.0.1.png" alt="project"  className="rounded w-full mb-3"/>
              <img src="/FireShot Capture 004 - Professional Chauffeur Services - Chauffeur - 127.0.0.1.png" alt="project"  className="rounded w-full mb-3"/>
            </div>
          </div>
          <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center ">
            <h1 className="text-5xl mb-7">Favourites Page</h1>
            <p className='px-10'>
            The payment pages are simple and easy to use, with the client being able to easily input their details 
            with google maps api helping and automatically complete addresses. Clients are also then shown the route on the interactable map
            and instantly give prices per vehicle, based on the distance and time of the route, 
            after confirming their initial details. The payment page is also fully responsive and mobile friendly, allowing clients to easily book a chauffeur on the go.
            </p>
          </div>
      </div >
      
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5 ">
          <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center ml-5">
            <h1 className="text-5xl mb-7">Login and Register Pages</h1>
            <p className='px-10'>
            The managing bookings pages are simple and easy to use, with the client being able to easily input their email and quickly find al of their bookings.<br/>
            The client is then able to view all of their bookings and easily change their details, vehicle or cancel a booking at the click of a button.
            </p>
          </div>
          <div class="columns-2 mr-5">
            <div className="flex flex-col">
              <img src="/FireShot Capture 006 - Professional Chauffeur Services - Chauffeur - 127.0.0.1.png" alt="project"  className="rounded w-full mb-3"/>
              <img src="/FireShot Capture 007 - Professional Chauffeur Services - Chauffeur - 127.0.0.1.png" alt="project"  className="rounded w-full mb-3"/>
              <img src="/FireShot Capture 016 - Professional Chauffeur Services - Chauffeur - 127.0.0.1.png" alt="project"  className="rounded w-full mb-3"/>
              <img src="/FireShot Capture 017 - Professional Chauffeur Services - Chauffeur - 127.0.0.1.png" alt="project"  className="rounded w-full mb-3"/>

            </div>
          </div>
          
      </div >
    </>
  )
}

export default IvyFashion