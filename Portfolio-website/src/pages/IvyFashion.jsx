import './IvyFashion.css'

import React from 'react'
import Navbar from '../components/Navbar';

const IvyFashion = () => {
  return (
    <>
    <Navbar/>
      <div className="flex justify-center mt-7">
        <h1 className="text-5xl lg:text-8xl font-bold">Ivy Fashion<br/><img src="/image-removebg-preview (6).png" alt="wavyUnderline" width="720px" id="line1"/></h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center ">
          <h1 className="text-5xl mb-7 px-10">Landing Page</h1>
          <p className='px-10'>
            The landing page here is short and sweet, introducing the brand and giving a reason to use the website.
            The user is then presented with two simple options, allowing them to easily find what they want without unneccesary clutter.
            The landing page is also fully responsive and mobile friendly!
          </p>
          <div className="flex flex-row justify-center gap-10">

          </div>
          
        </div>
        <div className="flex flex-row justify-center align-center content-center items-center p-10 pl-10 pr-10">
          <img src="/FireShot Capture 008 - Ivy Fashion - localhost.png" alt="project"  className="rounded  w-2/3"/>
        </div>
      </div >
      
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        
          <div class="columns-2 ml-5 order-last lg:order-first">
          <div className="flex flex-col justify-center items-center">
            <img src="/FireShot Capture 009 - Ivy Fashion - localhost.png" alt="mens clothes"  className="rounded w-full mb-3 mt-28"/>
            <img src="/FireShot Capture 010 - Ivy Fashion - localhost.png" alt="project"  className="rounded w-full mb-3"/>
          </div>
          </div>
          <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center ">
            <h1 className="text-5xl mb-7">Men and Women's Page</h1>
            <p className='px-10'>
              The men's and women's section are split into three categories, allowing the user to either view all of the items or pick between just tops, bottoms and outerwear.<br />
              To view the details of item the user can just click on that item and be instantly taken to a page with the details of the item.
            </p>
          </div>
      </div >
      
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-32 mb-28">
          <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center">
            <h1 className="text-5xl mb-7 px-12">Favourites and Item Details Pages</h1>
            <p className='px-10'>
              Upon clicking on an item the user is taken to a page with all of the details of the item, as well as the ability to add the item to their favourites.
              The user is also able to go to view the item further and go to the official brands website.
              <br />The user can also add the item to their wishlist where, after logging in, they can save certain items they like.
            </p>
          </div>
          <div class="columns-2 mr-5">
            <div className="flex flex-col">
              <img src="/FireShot Capture 012 - Ivy Fashion - localhost.png" alt="project"  className="rounded w-full mb-3 mt-3"/>
              <img src="/FireShot Capture 011 - Ivy Fashion - localhost.png" alt="project"  className="rounded w-full mb-3"/>
            </div>
          </div>
          
      </div >

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5 mb-20">
        
          <div class="columns-2 ml-5 order-last lg:order-first">
            <div className="flex flex-col">
              <img src="/FireShot Capture 014 - Ivy Fashion - localhost.png" alt="project"  className="rounded w-full mb-3"/>
              <img src="/FireShot Capture 013 - Ivy Fashion - localhost.png" alt="project"  className="rounded w-full mb-3"/>
            </div>
          </div>
          <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center ">
            <h1 className="text-5xl mb-7">Login and Register Pages</h1>
            <p className='px-10'>
            The login and register are simple and effectively allow the user to login and add items to their favourited items. 
            <br />Once logged in it is also extremely simple to logout with the logout button in the navbar only requiring a simple click.
            </p>
          </div>
      </div >
    </>
  )
}

export default IvyFashion