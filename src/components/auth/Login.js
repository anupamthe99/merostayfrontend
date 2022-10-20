import React from 'react'
import {useState} from 'react'
import Openingsoon from '../../pop_over/Openingsoon'
const Login = () => {
    const [visible,setVisible]=useState(false)
  const close_visbile=()=>setVisible(false)
    return (
        <div className="flex justify-center items-center ">
            <div class="w-full lg:w-7/12  p-5 rounded-lg lg:rounded-l-none">
                <h3 class="pt-4 text-2xl text-center">Login </h3>
                <form class="px-8 pt-6 pb-8 mb-4  rounded">

                    <div class="mb-4">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                            Email
                        </label>
                        <input
                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div class="mb-4 ">

                        <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                            Password
                        </label>
                        <input
                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                        />
                        <p class="text-xs italic ">Please choose a password.</p>


                    </div>
                    <div class="mb-6 text-center">
                        <button
                            class="w-full px-4 py-2 font-bold  bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={()=>setVisible(!visible)}
                        >
                            Login Account
                        </button>
                    </div>
                    <hr class="mb-6 border-t" />
                    <div class="text-center">
                        <a
                            class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div class="text-center">
                        <a
                            class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                            href="./index.html"
                        >
                            Don't have an account? Register here!
                        </a>
                    </div>
                </form>
            </div>
            <Openingsoon close_visbile={close_visbile} visible={visible}/>
        </div>
    )
}

export default Login