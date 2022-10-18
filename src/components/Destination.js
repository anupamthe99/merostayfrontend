import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { data } from './DestinationImgList'
const Destination = () => {

    const sliderleft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 400
    }
    const sliderright = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 400
    }

    return (
        <div className="">
            <h1 className='text-5xl text-center mb-8 mt-3'>HOTELS BASED ON CITIES</h1>
            <div className=' flex items-center gap-8'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={sliderleft} />
                <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {data.map((item) => {
                        return (
                            <>

                                <div className="group relative w-[400px]  inline-block ">
                                    <img className=" relative h-[300px] w-full inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={item.img} alt="" />
                                    <div class="absolute bottom-0 left-0 right-0 px-4 ml-2 py-2 bg-gray-800 h-[60px] w-[386px] group-hover:w-[401px] group-hover:ml-0 ease-in-out duration-300">
                                        <h3 class="text-xl text-white font-bold text-center mt-2">
                                            {item.name}</h3>

                                    </div>


                                </div>


                            </>
                        )

                    })}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={sliderright} />


            </div>

        </div>
    )
}

export default Destination