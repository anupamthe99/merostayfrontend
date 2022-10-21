import { useState } from "react";
import merostaybanner from "../assets/mero_stay_banner.jpg"
// import { Header } from './Home'
import Booking from './Booking';
import Destination from './Destination';
import About from './About'
import Openingsoon from '../pop_over/Openingsoon'
export const Header = () => {
  const [visible,setVisible]=useState(false)
  const close_visbile=()=>setVisible(false)
  return (
    <div className=" header-hotel">
      {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <a href="/" className="mb-6 sm:mx-auto">
        
              </a>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-[2000px] ] mb-6  text-3xl font-bold leading-none tracking-tight text-white underline sm:text-7xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                        width="52"
                        height="24"
                      />
                    </svg>
                  </span>{' '}
                  Nepal Best Hotel Searching Platform
                </h2>
                <p className="text-base text-indigo-100 md:text-lg font-bold text-white">
                  merostay.com
                </p>
              </div>
              <div>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                >
                  <button className="bg-[rgb(17,24,39)] py-3 w-[100px] font-bold text-white hover:bg-black hover:scale-110">Book Now</button>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      
      <div className="header_img relative" blurhash="LEHV6nWB2yk8pyo0adR*.7kCMdnj">
        <img className="w-full" src={merostaybanner} alt="" loading="lazy" />
        <button className="absolute sm:bottom-20 sm:left-[44%] bg-[rgb(17,24,39)] sm:p-4 font-bold sm:text-2xl text-gray-400 hover:bg-[rgb(14,20,32)] ease-in-out duration-300 hover:scale-110 bottom-4 left-[40%] p-1.5 text-[16px]" onClick={()=>setVisible(!visible)}>Book Now</button>
      </div>
      <Openingsoon close_visbile={close_visbile} visible={visible}/>
      <Booking />
      <Destination />
      <About />
      
    </div>
  );
};