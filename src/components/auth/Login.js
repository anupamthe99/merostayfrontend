import React from 'react'
import {useState} from 'react'
import Openingsoon from '../../pop_over/Openingsoon'
import { Link } from 'react-router-dom'
const Login = () => {
    const [visible,setVisible]=useState(false)
  const close_visbile=()=>setVisible(false)
    return (
        <div className="flex justify-center items-center ">
            <div className="w-full lg:w-7/12  p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Login </h3>
                <form className="px-8 pt-6 pb-8 mb-4  rounded">

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
                    <div className="mb-4 ">

                        <label className="block mb-2 text-sm font-bold text-gray-300" for="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-300 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                        />
                        <p className="text-xs italic ">Please choose a password.</p>


                    </div>
                    <div className="mb-6 text-center">
                        <button
                            className="w-full px-4 py-2 font-bold  bg-blue-300 rounded-full hover:bg-blue-300 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={()=>setVisible(!visible)}
                        >
                            Login Account
                        </button>
                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="text-center">
                        <Link
                            className="inline-block text-sm text-blue-300 align-baseline hover:text-blue-800"
                            to="/"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="text-center">
                        <Link
                            className="inline-block text-sm text-blue-300 align-baseline hover:text-blue-800"
                            to="/signup"
                        >
                            Don't have an account? Register here!
                        </Link>
                    </div>
                </form>
            </div>
            <Openingsoon close_visbile={close_visbile} visible={visible}/>
        </div>
    )
}

export default Login