import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

const Hotel_detail = () => {

    const [hoteldetail, setHotelDetail] = useState([])
    const slug = useParams();

    const getDetail = () => {
        const url = `https://backendmerostay-production.up.railway.app/hotel_detail/${slug.slug}`
        // fetching the data for the hotel detail 
        Axios.get(url).then((res) => {
            console.log(res.data)
            setHotelDetail(res.data)
        })
    }

    useEffect(() => {
        getDetail();
    }, [])


    return (
        <div>
            <h2>We are getting the hotel data from the source ...</h2>

            <div className="Hotel_detail mx-[20%]">
                <div className="hotel_info">
                    <div className="img flex justify-center w-full my-10 ">
                        <img src="https://merostay.com/static/media/merostay.e0abc4375cfefc889d8d.jpg" className='border-red-400 border-2' alt="" />
                    </div>
                    <div className="title text-3xl font-bold text-center my-5">
                        Name of the Property : {hoteldetail.hotel_name}
                    </div>
                    <div className="title text-2xl  text-center my-5">
                        Property Type : {hoteldetail.property_type}
                    </div>
                    <div className="title text-2xl  text-center my-5">
                        Hotel Address : {hoteldetail.hotel_address}
                    </div>
                    <div className="title text-2xl  text-center my-5">
                        Contact Us : {hoteldetail.phone_number}
                    </div>

                    <div className="hotel_room_info flex justify-evenly w-full text-xl my-10">
                        <div className="number_info">
                            <div className="total_room">
                                Total Room : {hoteldetail.total_rooms}
                            </div>
                            <div className="total_single_room">
                                Total Single Room : {hoteldetail.total_single_room}
                            </div>
                            <div className="total_double_room">
                                Total Double Room : {hoteldetail.total_double_room}
                            </div>
                            <div className="total_family_room">
                                Total Family Room : {hoteldetail.total_family_room}
                            </div>
                            <div className="total_luxary_room">
                                Total Luxary Room : {hoteldetail.total_luxary_room}
                            </div>

                        </div>

                        <div className='price_info'>
                            <div className="single_room_price">
                                Single Room Price : {hoteldetail.single_room_price}
                            </div>
                            <div className="double_room_price">
                                Double Room Price : {hoteldetail.double_room_price}
                            </div>
                            <div className="single_room_price">
                                Single Room Price : {hoteldetail.single_room_price}
                            </div>
                            <div className="family_room_price">
                                Family Room Price : {hoteldetail.family_room_price}
                            </div>
                            <div className="luxary_room_price">
                                Luxary Room Price : {hoteldetail.luxary_room_price}
                            </div>
                        </div>

                    </div>


                        <div className="amenities">
                            <div className="text-2xl my-5">Amenities</div>
                            <div className="list">
                                <div>
                                {hoteldetail.balcony_room ? "Balcony Room":null}
                                </div>
                                <div>
                                {hoteldetail.resturant ? "Resturant":null}
                                </div>
                                <div>
                                {hoteldetail.coffe_maker_service ? "Coffe Maker Service":null}
                                </div>
                                <div>
                                {hoteldetail.full_time_service ? "Full time service":null}
                                </div>
                                <div>
                                {hoteldetail.laundary_service ? "Laundary Service":null}
                                </div>
                                <div>
                                {hoteldetail.smoking_room ? "Smoking Room":null}
                                </div>
                                <div>
                                {hoteldetail.tv_room ? "Tv Room":null}
                                </div>
                            </div>
                        </div>

                    <div className="space-y-4 my-10">
                    <h2 className='text-2xl text-center my-5'>Most asked questions :</h2>
                        <details className="group" open>
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-300 p-4"
                            >
                                <h2 className="font-medium text-gray-900">
                                    Who is the manager and the owner of this Property ?
                                </h2>

                                <svg
                                    className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-white">
                                The manager of this property is {hoteldetail?.managers_name} and the owner ot this property is {hoteldetail?.owner_name}
                            </p>
                        </details>

                        <details className="group">
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-300 p-4"
                            >
                                <h2 className="font-medium text-gray-900">
                                    In which city is this city located ?
                                </h2>

                                <svg
                                    className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-white">
                                It is located in the {hoteldetail?.hotel_city}
                            </p>
                        </details>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Hotel_detail