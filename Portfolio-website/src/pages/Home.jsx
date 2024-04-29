import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Home.css'
import { BsFillEnvelopeFill, BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import Navbar from '../components/Navbar';



const Home = () => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-section') {
      const element = document.getElementById('contact-section');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  return (
    <>
      <Helmet>
      <meta name="description" content="Colin Harwood - Full stack web developer specializing in NodeJS, Django, and React. Based in South Africa. Check out my portfolio and projects." />
      <link rel="preload" as="image" href="/Face.jpg" />
      </Helmet>
      <Navbar/>
      <div className="flex flex-col justify-center lg:h-screen h-auto mt-10 lg:mt-0">
        <div className="flex flex-col-reverse md:flex-row justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-9 text-center md:text-left">
            <div className="text-left">
            <img src="/south-africa (1)-modified.png" alt="South African Flag Icon" width="71px" className="absolute visible"/>
      <img src="/closed-book-with-bookmark-modified.png" alt="Closed Book Icon" width="71px" className="absolute visible"/>
      <img src="/console-modified.png" alt="Games Controller Icon" width="71px" className="absolute visible"/>
      <img src="/sweater-modified.png" alt="Sweater Icon" width="71px" className="absolute visible"/>
              <h1 className="lg:text-8xl md:text-6xl sm:text-6xl text-6xl font-bold mt-10">Hi, I'm Colin.</h1>
              <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-bold mb-10">I'm a full stack web developer who makes clean and user friendly websites.</h1>
              <p className="text-xl">I'm based out of South Africa and specialise in NodeJS, Django, and React.<br/> In my free time I enjoy some reading, videogames and fashion.</p>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 items-center justify-center content-center text-center md:text-left">
            <span className="flex dot items-center justify-center overflow-hidden">
      <img src="Face.jpg" alt="Photo of Colin's Face" width="240px" className="mt-5"/>

            </span>
            <div className="flex flex-row items-center justify-center mt-10 gap-10 cont-icons">
            <a href="mailto:colinharwood0@gmail.com">
              <span className="dotSm flex flex-row items-center justify-center"><img src="/gmail.0287b363a72d3c0f445cc724d84f1452.svg" alt="Gmail icon" width="50px" height="50px" /></span>
              </a>
              <a href="https://github.com/Colin-Harwood">
              <span className="dotSm flex flex-row items-center justify-center"><img src="/github.a4a6a7ae8671bf5749a6aaa4d604fdaa.svg" alt="Github Icon" width="50px" height="50px" /></span>
              </a>
              <a href="https://www.linkedin.com/in/colin-harwood-1b8704274/">
              <span className="dotSm flex flex-row items-center justify-center"><img src="/linkedin.7defd339fd92d3e5fa034b24a5f10ed6.svg" alt="linkedIn icon" width="50px" height="50px" /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-6xl lg:text-8xl font-bold">My Projects<br/><img src="/image-removebg-preview (6).png" alt="wavyUnderline" width="600px" id="line1"/></h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div className="flex flex-col justify-center align-center content-center items-center">
          <div className="image-wrap">
            
              <img src="/FireShot Capture 021 - Noctuque Finance - localhost.jpg" alt="Noctuque Finance Home Page"  className="img-ad"/>
            
          </div>
        </div>
        <div className="flex flex-col justify-center align-center content-center items-center">
          <h1 className="text-5xl mb-7">Noctuque Finance</h1>
          <p className='px-10'>Noctuque Finance seamlessly integrates the MERN stack, providing a robust platform for intuitive financial tracking. Users can effortlessly manage expenses, income, subscriptions, and goals, while interactive Chart.js visualizations offer valuable insights for informed decision-making. </p>
          <div className="flex flex-row justify-center gap-10">
            <a href="https://github.com/Colin-Harwood/Finance-tracker">
            <img src="/github.a4a6a7ae8671bf5749a6aaa4d604fdaa.svg" alt="Github Icon" width="50px" height="50px" className="projBtn"/>
            </a>
            <a href="/NoctuqueFinance">
            <img src="/ddd1c2476bcb099d675bf282f0a40192-removebg-preview.png" alt="Arrow Icon" width="50px" height="50px" className="projBtn"/>
            </a>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center lg:order-first order-last">
          <h1 className="text-5xl mb-7">Numbify</h1>
          <p className='px-10'>Numbify, developed with Django and Bootstrap, enables users to draw numbers and utilises a TensorFlow neural network via an integrated API to predict the drawn digits. The project seamlessly merges web development with machine learning, offering an interactive and intelligent user experience.</p>
          <div className="flex flex-row justify-center gap-10">
            <a href="https://github.com/Colin-Harwood/Hand-Writing-To-Text">
            <img src="/github.a4a6a7ae8671bf5749a6aaa4d604fdaa.svg" alt="Github Icon" width="50px" height="50px" className="projBtn"/>
            </a>
            <a href="/Numbify">
            <img src="/ddd1c2476bcb099d675bf282f0a40192-removebg-preview.png" alt="Arrow Icon" width="50px" height="50px" className="projBtn"/>
            </a>
          </div>
          
        </div>
        <div className="flex flex-col justify-center align-center content-center items-center">
          <div className="image-wrap">
            
              <img src="/FireShot Capture 019 -  - 127.0.0.1.png" alt="Ivy Fashion Landing Page" className="img-ad"/>
            
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div className="flex flex-col justify-center align-center content-center items-center">
          <div className="image-wrap">
            
              <img src="/FireShot Capture 015 - Professional Chauffeur Services - Chauffeur - 127.0.0.1.png" alt="EasyChauffeur Template Image"  className="img-ad"/>
            
          </div>
        </div>
        <div className="flex flex-col justify-center align-center content-center items-center">
          <h1 className="text-5xl mb-7">EasyChauffeur</h1>
          <p className='px-10'>EasyChauffeur is a full stack CRUD application built with Django, SQL, React and Bootstrap that combines googles maps api with a sleek user interface, allowing clients to easily select their route as well as vehicle. EasyChauffeur also allows clients to easily view, edit and cancel their bookings with no delay.</p>
          <div className="flex flex-row justify-center gap-10">
            <a href="https://github.com/Colin-Harwood/Full-Stack-Car-Rental-Website">
            <img src="/github.a4a6a7ae8671bf5749a6aaa4d604fdaa.svg" alt="Github Icon" width="50px" height="50px" className="projBtn"/>
            </a>
            <a href="/EasyChauffeur">
            <img src="/ddd1c2476bcb099d675bf282f0a40192-removebg-preview.png" alt="Arrow Icon" width="50px" height="50px" className="projBtn"/>
            </a>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center lg:order-first order-last">
          <h1 className="text-5xl mb-7">Ivy Fashion</h1>
          <p className='px-10'>Ivy Fashion is a full stack web app built utilising NodeJs, MongoDb, ExpressJS and React. Ivy Fashion allows users to eaily view an assortment of products from different brands in a single location, as well as log in and save items to their wishlist and view the original item on the brands official website.</p>
          <div className="flex flex-row justify-center gap-10">
            <a href="https://github.com/Colin-Harwood/IvyFashion">
            <img src="/github.a4a6a7ae8671bf5749a6aaa4d604fdaa.svg" alt="Github Icon" width="50px" height="50px" className="projBtn"/>
            </a>
            <a href="/IvyFashion">
            <img src="/ddd1c2476bcb099d675bf282f0a40192-removebg-preview.png" alt="Arrow Icon" width="50px" height="50px" className="projBtn"/>
            </a>
          </div>
          
        </div>
        <div className="flex flex-col justify-center align-center content-center items-center">
          <div className="image-wrap">
            
              <img src="/FireShot Capture 008 - Ivy Fashion - localhost.png" alt="Ivy Fashion Landing Page" className="img-ad"/>
            
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <h1 className="text-6xl lg:text-8xl font-bold">My Skills<br/><img src="/image-removebg-preview (6).png" alt="wavyUnderline" width="430px" id="line1"/></h1>
      </div>
      <div className="flex justify-center mt-10">
      <div className="flex flex-col content-center rounded-md skill-div">
        <div className="skill px-4 flex flex-row">
          <h3 className="pr-7">Django</h3>
          <div className="skill-bar ">
            <div className="skill-level" style={{width: '87%'}}></div>
          </div>
        </div>
        <hr/>
        <div className="skill px-4 flex flex-row">
          <h3 className="pr-7">Bootstrap</h3>
          <div className="skill-bar ">
            <div className="skill-level" style={{width: '85%'}}></div>
          </div>
        </div>
        <hr />
        <div className="skill px-4 flex flex-row">
          <h3 className="pr-7">NodeJS</h3>
          <div className="skill-bar ">
            <div className="skill-level" style={{width: '82%'}}></div>
          </div>
        </div>
        <hr/>
        <div className="skill px-4 flex flex-row">
          <h3 className="pr-7">React</h3>
          <div className="skill-bar ">
            <div className="skill-level" style={{width: '80%'}}></div>
          </div>
        </div>
        <hr/>
        <div className="skill px-4 flex flex-row">
          <h3 className="pr-7">MongoDb</h3>
          <div className="skill-bar ">
            <div className="skill-level" style={{width: '75%'}}></div>
          </div>
        </div>
        <hr/>
        <div className="skill px-4 flex flex-row">
          <h3 className="pr-7">JavaScript</h3>
          <div className="skill-bar ">
            <div className="skill-level" style={{width: '68%'}}></div>
          </div>
        </div>
        <hr/>
        <div className="skill px-4 flex flex-row">
          <h3 className="pr-7">Tailwind</h3>
          <div className="skill-bar ">
            <div className="skill-level" style={{width: '65%'}}></div>
          </div>
        </div>
        <hr/>
        <div className="skill px-4 flex flex-row">
          <h3 className="pr-7">Git</h3>
          <div className="skill-bar ">
            <div className="skill-level" style={{width: '60%'}}></div>
          </div>
        </div>
        <hr/>
        <div className="skill px-4 flex flex-row">
          <h3 className="pr-7">Postman</h3>
          <div className="skill-bar ">
            <div className="skill-level" style={{width: '55%'}}></div>
          </div>
        </div>
        <hr/>
        <div className="skill px-4 flex flex-row">
          <h3 className="pr-7">SQL</h3>
          <div className="skill-bar ">
            <div className="skill-level" style={{width: '40%'}}></div>
          </div>
        </div>
        
        
      </div>
      </div>
      <section id="contact-section">
      <div className="flex justify-center mt-16 text-center">
        <h1 className="text-4xl lg:text-7xl font-bold">Interested?<br/>Lets Get In Touch!<br/><img src="/image-removebg-preview (6).png" alt="wavyUnderline" width="650px" id="line1"/></h1>
      </div>
      <div className="flex justify-center items-center border-white mt-10">
        <div className="flex flex-col justify-center items-center contact-2-div">
          <a href="mailto:colinharwood0@gmail.com">
        <button className="bg-none hover:bg-white text-white font-semibold py-2 px-4 shadow cont-btn flex flex-row text-center content-center justify-center btn-1">
          <BsFillEnvelopeFill className='btn-icon' alt="Email Icon"/>
          <span className="ml-2">ColinHarwood0@gmail.com</span>
        </button>
        </a>
        <a href="tel:27631274468">
        <button className="bg-none hover:bg-white text-white font-semibold py-2 px-4 shadow cont-btn flex flex-row text-center content-center justify-center btn-2">
        <BsFillTelephoneFill className='btn-icon' alt="Phone Icon"/>
          <span className="ml-2">+27 63 127 4468</span>
        </button>
        </a>
        <a href="https://www.linkedin.com/in/colin-harwood-1b8704274/" >
        <button className="bg-none hover:bg-white text-white font-semibold py-2 px-4 shadow cont-btn flex flex-row text-center content-center justify-center btn-3">
        <BsLinkedin className='btn-icon' alt="LinkedIn Icon"/>
          <span className="ml-2">Colin-Harwood</span>
        </button>
        </a>

        </div>
      </div>
      </section>
    </>
  )
}

export default Home