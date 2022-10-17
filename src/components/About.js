import React from 'react'
import logo from '../assets/merostay.jpg'
const About = () => {
  return (
    <div className="about">
  <h1 className="text-5xl font-bold text-center mt-10">About us</h1>
<div class="py-0 ">  
  <div class="container m-auto px-6 text-white md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src={logo} alt="image" loading="lazy" width={400} />
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-white font-bold md:text-4xl">FIRST HOTEL BOOKING SITES OF NEPAL</h2>
          <p class="mt-6 text-white">meroshare ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
          <p class="mt-4 text-white"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
      </div>
  </div>
</div>
    </div>
  )
}

export default About