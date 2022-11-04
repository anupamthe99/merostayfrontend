import React from 'react'
import Openingsoon from '../pop_over/Openingsoon'
import {useState} from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
const Booking = () => {
  const [visible,setVisible]=useState(false)
  const close_visbile=()=>setVisible(false)
  const [drop,setDrop]=useState(false)
  const [dropword,setDropword]=useState("Type of Property")

  const setHotelType=()=>{
    setDropword('Hotel')
    setDrop(false)
  }
  const setHostelType=()=>{
    setDropword('Hostel')
    setDrop(false)
  }
  const setResortType=()=>{
    setDropword('Resort')
    setDrop(false)
  }

  return (
    <div className="booking  text-white">
        <div>
        <h1 className='text-center text-4xl font-bold mt-20'>Book your destination</h1>
        </div>
<div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px]">
    {/* <form > */}
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="fName"
              className="mb-3 block text-base font-medium text-white"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="lName"
              className="mb-3 block text-base font-medium text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>



      


      <div className="mb-5">
        <label
          for="guest"
          className="mb-3 block text-base font-medium text-white"
        >
          How many guest are you bringing?
        </label>
        <input
          type="number"
          name="guest"
          id="guest"
          placeholder="5"
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>


    <div className="my-10">
      <div className="bg-[rgb(34,45,63)] p-3 rounded-[5px] flex gap-1 items-center justify-center w-[300px] cursor-pointer hover:scale-110 hover:bg-[rgb(34,45,63)] duration-300 ease-in-out" onClick={()=>setDrop(!drop)}>

      <div className="font-medium "  >{dropword} </div>
      <div className=""><RiArrowDropDownLine size={60}/></div> 
      </div>

{drop ?  <ul className="bg-[rgb(34,45,63)] p-3 mt-3 rounded-xl">
        <li className='hover:bg-[rgb(22,33,50)] mt-2 cursor-pointer p-2 ' onClick={setHotelType}>Hotel</li>
        <li className='hover:bg-[rgb(22,33,50)] mt-2 cursor-pointer p-2 ' onClick={setHostelType}>Hostel/PG</li>
        <li className='hover:bg-[rgb(22,33,50)] mt-2 cursor-pointer p-2 ' onClick={setResortType}>Resort</li>
      </ul>: ""}
     
    </div>



      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="date"
              className="mb-3 block text-base font-medium text-white"
            >
              Check in 
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="date"
              className="mb-3 block text-base font-medium text-white"
            >
              Check out 
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          onClick={()=>setVisible(!visible)}
        >
          Submit
        </button>
      </div>
    {/* </form> */}
  </div>
  <Openingsoon close_visbile={close_visbile} visible={visible}/>
</div>

    </div>
  )
}

export default Booking