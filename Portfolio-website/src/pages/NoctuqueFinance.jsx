import React from 'react'
import Navbar from '../components/Navbar';

const NoctuqueFinance = () => {
  return (
    <>
    <Navbar/>
      <div className="flex justify-center mt-7 lg:mt-12">
        <h1 className="text-5xl lg:text-8xl font-bold">Noctuque Finance<br/><img src="/image-removebg-preview (6).png" alt="wavyUnderline" width="850px" id="line1"/></h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center ">
          <h1 className="text-4xl lg:text-5xl mb-7 px-10">Landing Page</h1>
          <p className='px-10'>
          The website's landing page is designed for user-friendly financial management. It simplifies tracking, investing, and data analysis with a clear layout and intuitive design. Clear calls-to-action help users navigate easily and utilize the platform effectively for their financial goals!
          </p>
          <div className="flex flex-row justify-center gap-10">

          </div>
          
        </div>
        <div className="flex flex-row justify-center align-center content-center items-center p-10 pl-10 pr-10">
          <img src="/FireShot Capture 021 - Noctuque Finance - localhost.jpg" alt="project"  className="rounded  lg:w-1/3 w-2/3"/>
        </div>
      </div >
      
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        
          <div class=" ml-5 order-last lg:order-first mr-5 lg:mr-0">
          <div className="flex flex-col justify-center items-center">
            <img src="FireShot Capture 022 - Noctuque Finance - localhost.png" alt="project"  className="rounded w-full mb-3"/>
          </div>
          </div>
          <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center ">
            <h1 className="text-4xl lg:text-5xl mb-7">Dashboard</h1>
            <p className='px-10'>
            The dashboard offers users a streamlined experience for managing their finances. With a clean and intuitive layout, it provides easy access to essential financial tools and data. Users can quickly track expenses, monitor investments, and analyze financial trends. The dashboard's user-friendly interface ensures efficient navigation and seamless interaction, helping users to make informed financial decisions with ease.
            </p>
          </div>
      </div >
      
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-24 mb-28">
          <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center">
            <h1 className="text-4xl lg:text-5xl mb-7 px-12">Income, Expenses, Subscriptions and Goal Pages</h1>
            <p className='px-10'>
            Our finance website features dedicated pages for managing income, expenses, subscriptions, and setting income goals. Users can easily track income sources, monitor expenses, manage subscriptions, and set specific financial targets—all in one convenient platform.
            </p>
          </div>
          <div class="columns-2 mr-5 ml-5 lg:ml-0">
            <div className="flex flex-col">
              <img src="FireShot Capture 023 - Noctuque Finance - localhost.png" alt="project"  className="rounded w-full mb-3 mt-3"/>
              <img src="/FireShot Capture 024 - Noctuque Finance - localhost.png" alt="project"  className="rounded w-full mb-3"/>
              <img src="/FireShot Capture 025 - Noctuque Finance - localhost.png" alt="project"  className="rounded w-full mb-3"/>
              <img src="/FireShot Capture 026 - Noctuque Finance - localhost.png" alt="project"  className="rounded w-full mb-3"/>
              
            </div>
          </div>
          
      </div >

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5 mb-20">
        
          <div class=" ml-5 mr-5 lg:mr-0 order-last lg:order-first">
            <div className="flex flex-col items-center">
              <img src="/FireShot Capture 027 - Noctuque Finance - localhost.png" alt="project"  className="rounded w-4/5 mb-3"/>
            </div>
          </div>
          <div className="flex flex-col lg:flex-col justify-center align-center content-center items-center ">
            <h1 className="text-4xl lg:text-5xl mb-7">Settings Page</h1>
            <p className='px-10'>
            The User Settings section provides users with essential control over their account security and preferences. Here, users can conveniently change their password for added security and privacy. Additionally, the option to delete their account ensures users have complete autonomy over their data and online presence, fostering a sense of trust and confidence in the platform.
            </p>
          </div>
      </div >
    </>
  )
}

export default NoctuqueFinance
