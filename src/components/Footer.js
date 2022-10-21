import React from 'react'
import {BsInstagram,BsFacebook,BsWhatsapp,BsTwitter} from 'react-icons/bs'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer-merostay">
        
        

<footer className="relative bg-blueGray-200 pt-8 pb-6">
  <div className="container mx-auto px-4 ">
    <div className="flex flex-wrap text-left lg:text-left sm:items-center ">
      <div className="w-full lg:w-6/12 px-4 sm:mb-0 mb-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
        <h2 className="font-bold">Email contact : <span className="text-blue-400">merostayinfo@gmail.com</span> </h2>
        <h2 className="font-bold">Phone contact : <span className="text-blue-400">9823775820</span> </h2>
        {/* <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Connect with merostay.com 
        </h5> */}
        {/* <div className="mt-6 lg:mb-0 mb-6 ">
          <button className=" text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <BsInstagram size={40}/></button><button className="ml-4 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <BsFacebook size={40}/></button><button className="ml-4  shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <BsWhatsapp size={40}/></button><button className="ml-4 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <BsTwitter size={40}/>
          </button>
        </div> */}
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top justify-end">
 
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase  text-sm font-semibold mb-2">Usefull Links</span>
            <ul className="list-unstyled">
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/" >Home </Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to='/hotels' > Hotels</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to='/booking'>Booking</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm  font-semibold py-1">
          Copyright © <span id="get-current-year">2022</span><Link href="://wtive-tim.com/product/notus-js" className=" hover:text-gray-800" target="_blank"> merostay.com</Link>
          
        </div>
      </div>
    </div>
  </div>
</footer>


    </div>
  )
}

export default Footer