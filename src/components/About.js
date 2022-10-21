import React from 'react'
import logo from '../assets/merostay.jpg'
const About = () => {
  return (
    <div className="about mb-10">
  <h1 className="text-5xl font-bold text-center my-10">About us</h1>
<div className="py-0 ">  
  <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <img src={logo} alt="image" loading="lazy" width={400} />
        </div>
        <div className="md:7/12 lg:w-6/12 ">
          <h2 className="text-2xl text-white font-bold md:text-4xl">FIRST HOTEL BOOKING SITES OF NEPAL</h2>
          <p className="mt-6 text-white text-justify">MeroStay is equipped and specialised for more hotel booking options and also provides a better reservations experience. We pride ourselves on delivering the best hotel prices from the largest selection of hotels in India.When looking for your perfect hotel in MeroStay, our in-depth tools make it easy to browse rooms by hotel star rating, by destinations and availability. Search by destination, by neighborhood.We make finding the right hotel as simple and as frustration-free as can be.We provide a Top-level customer service and that is why we promise you our Best Price Guaranteed . For any additional assistance, MeroStay Customer Service representatives are available 24/7 to help you with any queries or clarifications regarding your hotel booking . </p>
          <p className="mt-4 text-white text-justify"> When you book hotels with MeroStay, you can be confident that you have booked the best hotel at the lowest price!</p>
        </div>
      </div>
  </div>
</div>
    </div>
  )
}

export default About