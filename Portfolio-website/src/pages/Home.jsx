import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="flex flex-row justify-center align-middle">
        <div className="flex flex-col items-center basis-1/2 p-4"> 
          <div className="text-left">
            <h1 className="text-3xl font-bold">Hi, I'm Colin.</h1>
            <p>I'm a fullstack web designer based out of South Africa</p>
            <p>Test</p>
            <p>Test2</p>
          </div>
        </div>
        <div className="basis-1/2">02</div>
      </div>
    </>
  )
}

export default Home