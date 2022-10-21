import React from 'react'
import signupimg from '../../assets/signup_banner.png'
import Openingsoon from '../../pop_over/Openingsoon'
import {useState} from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  const [visible,setVisible]=useState(false)
  const close_visbile=()=>setVisible(false)
  return (
    <div className="">
        <div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg signup-banner"
						
					></div>
					
					<div className="w-full lg:w-7/12  p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
						<form className="px-8 pt-6 pb-8 mb-4  rounded">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-300" for="firstName">
										First Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="First Name"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-300" for="lastName">
										Last Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-300" for="email">
									Email
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-300" for="password">
										Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
									<p className="text-xs italic ">Please choose a password.</p>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-300" for="c_password">
										Confirm Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password"
										type="password"
										placeholder="******************"
									/>
								</div>
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold  bg-blue-500 rounded-full hover:bg-blue-300 focus:outline-none focus:shadow-outline"
									type="button"
                  onClick={()=>setVisible(!visible)}
								>
									Register Account
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<Link
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="/"
								>
									Forgot Password?
								</Link>
							</div>
							<div className="text-center">
								<Link
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									to="/login"
								>
									Already have an account? Login!
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
      <Openingsoon close_visbile={close_visbile} visible={visible}/>
		</div>
   {/* <div>
        <h1 className='text-center text-4xl font-bold mt-20'>Book your destination</h1>
        </div>
<div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
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
              className="w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
              className="w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
          className="w-full appearance-none rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
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
              className="w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
              className="w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

      </div>



      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div> */}

    </div>
  )
}

export default Signup