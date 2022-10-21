import React from 'react'

const Openingsoon = ({visible,close_visbile}) => {
    if (!visible) return null;

  return (
    <div className="opening-soon-merostay  z-10">
        <div onClick={close_visbile} className="fixed inset-0 bg-[[rgb(17,24,39)]] bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-[#020917] text-4xl text-white p-10 rounded-3xl h-[400px] font-bold w-[800px]">
                <h1 className="mt-[14%]">
                merostay.com is launching soon .....<br/><br/><h2 className="text-xl">Thanks for waiting patiently</h2>
                </h1>
                <button className="bg-slate-600 p-3 mt-3 rounded-xl text-xl hover:bg-slate-800 ease-in-out duration-300 " onClick={close_visbile}>Close now</button>
            </div>
        </div>
    </div>
  )
}

export default Openingsoon