import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        <div className="flex flex-col-reverse md:flex-row justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-9 text-center md:text-left">
            <div className="text-left">
            <img src="/south-africa (1)-modified.png" alt="wavyUnderline" width="71px" className="absolute"/>
      <img src="/closed-book-with-bookmark-modified.png" alt="wavyUnderline" width="71px" className="absolute"/>
      <img src="/console-modified.png" alt="wavyUnderline" width="71px" className="absolute"/>
      <img src="/sweater-modified.png" alt="wavyUnderline" width="71px" className="absolute"/>
              <h1 className="lg:text-8xl md:text-6xl sm:text-6xl text-6xl font-bold mt-10">Hi, I'm Colin.</h1>
              <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-bold mb-10">I'm a full stack web developer who makes clean and user friendly websites.</h1>
              <p className="text-xl">I'm based out of South Africa and specialise in NodeJS, Django, and React.<br/> In my free time I enjoy some reading, videogames and fashion.</p>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 items-center justify-center content-center text-center md:text-left">
            <span className="dot"></span>
            <div className="flex flex-row items-center justify-center mt-10 gap-10 cont-icons">
              <span className="dotSm flex flex-row items-center justify-center"><img src="/gmail.0287b363a72d3c0f445cc724d84f1452.svg" alt="project" width="50px" height="50px" /></span>
              <span className="dotSm flex flex-row items-center justify-center"><img src="/github.a4a6a7ae8671bf5749a6aaa4d604fdaa.svg" alt="project" width="50px" height="50px" /></span>
              <span className="dotSm flex flex-row items-center justify-center"><img src="/linkedin.7defd339fd92d3e5fa034b24a5f10ed6.svg" alt="project" width="50px" height="50px" /></span>
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
            
              <img src="/FireShot Capture 015 - Professional Chauffeur Services - Chauffeur - 127.0.0.1.png" alt="Chauffeur Template Image"  className="img-ad"/>
            
          </div>
        </div>
        <div className="flex flex-col justify-center align-center content-center items-center">
          <h1 className="text-5xl">EasyChauffeur</h1>
          <p>EasyChauffeur is a chauffeur booking service that allows clients to book a chauffeur service.</p>
          
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center lg:order-first order-last">
          <h1 className="text-5xl mb-12">Chauffeur</h1>
          <p>Chauffeur is a chauffeur booking service that allows clients to book a chauffeur service.</p>
          
        </div>
        <div className="flex flex-col justify-center align-center content-center items-center">
          <div className="image-wrap">
            
              <img src="/FireShot Capture 008 - Ivy Fashion - localhost.png"  className="img-ad"/>
            
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
          <h3 className="pr-7">SQL</h3>
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
          <h3 className="pr-7">Tailwind</h3>
          <div className="skill-bar ">
            <div className="skill-level" style={{width: '40%'}}></div>
          </div>
        </div>
        
        
      </div>
      </div>
      <div className="flex justify-center mt-16 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold">Interested?<br/>Lets Get In Touch!<br/><img src="/image-removebg-preview (6).png" alt="wavyUnderline" width="650px" id="line1"/></h1>
      </div>
      <div className="flex justify-center cont-btn border-white">

      </div>
    </>
  )
}

export default Home