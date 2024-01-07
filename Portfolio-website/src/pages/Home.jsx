import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center justify-center basis-1/2 px-50 h-1/3"> 
            <div className="text-left">
              <h1 className="text-8xl font-bold">Hi, I'm Colin.</h1>
              <p className="text-xl">I'm a fullstack web developer based out of South Africa that speciales<br/> in NodeJS, Django, and React. In my free time I enjoy some reading,<br /> videogames and fashion.</p>
              
            </div>
          </div>
          <div className="basis-1/2">02</div>
        </div>
      </div>
      <div className="flex justify-center">
      <h1 className="text-8xl font-bold">My Projects</h1>
      </div>
    </>
  )
}

export default Home