import React, { useEffect } from 'react'
import {useState} from 'react'
import {hotels_list} from './Hotellist'
import Openingsoon from '../../pop_over/Openingsoon'
import Axios from 'axios'
import {Link} from 'react-router-dom'
const Hotels = () => {

  const [hotelname,sethotelname]=useState('')
  useEffect(()=>{
      Axios.get(`https://backendmerostay-production.up.railway.app/api/hotel/`).then((res)=>{
        // console.log("api fetching")
        console.log(res.data)
        setHotels(res.data)
      })
  },[])



  const [visible,setVisible]=useState(false)
  const close_visbile=()=>setVisible(false)

  const [hotels,setHotels]=useState([])

//   const [hotels,setHotels]=useState([{
//     id:1,
//     name:"MSHotel 1",
//     img:"https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/90/f4/14/scpkathmandu.jpg"
// },
// {
//     id:2,
//     name:"MSHotel 2",
//     img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/251085752.jpg?k=b115d6fff4718a177c2a1d43426a5f6f079168832f721f44aa1a3aff7e7347f5&o=&hp=1"
// },
// {
//     id:3,
//     name:"MSHotel 3",
//     img:"https://www.yakandyeti.com/templates/yootheme/cache/slide4-7f44eb04.jpeg"
// },
// {
//     id:4,
//     name:"MSHotel 4",
//     img:"https://q-xx.bstatic.com/xdata/images/hotel/840x460/317985378.jpg?k=11ec3c955ff05a858aca2a6adec11a963809009870e995c300c41d9affefa32c&o="
// },
// {
//     id:5,
//     name:"MSHotel 5",
//     img:"https://images.squarespace-cdn.com/content/v1/53ecd1bde4b0a6f9524254f8/1408787712126-YOPVCUUW1LBVH8IIKQP0/morning_web_fixed.jpg"
// },
// {
//     id:6,
//     name:"MSHotel 6",
//     img:"https://hotelhimalaya.com.np/images/slideshow/Cx1yR-ext.jpg"
// },
// {
//     id:7,
//     name:"MSHotel 7",
//     img:"https://www.nepal-travel-guide.com/wp-content/uploads/2020/05/image-156.png"
// },])

const [newFilterHotel,setNewFilterHotel]=useState([])

  useEffect(()=>{
      console.log(hotels)
      
  },[])

  const filter_hotels=(event)=>{
      const searchword=event.target.value
      console.log(searchword)
      const newFilter=hotels.filter((value)=>{
        return value.name.toLowerCase().includes(searchword.toLowerCase());
      });
      setNewFilterHotel(newFilter)
  }
  
  return (
    <div>
        

<section className="">
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4">
        <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
          <span className="text-primary mb-2 block text-lg font-semibold">
           
          </span>
          <h2
            className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
          >
            Find the best stay as you desire :
          </h2>
          <div>
            <input type="text" placeholder="search hotel" className="shadow appearance-none border rounded w-[400px] sm:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3" onChange={filter_hotels}/>
          </div>
        </div>
      </div>
    </div>
    <div className="-mx-4 flex justify-center flex-wrap container gap-3 ">

{newFilterHotel.length != 0 ? newFilterHotel.map((hotel)=>{
  return (
    <>
    
    <div className="w-full px-4 md:w-1/2 lg:w-1/4 bg-[rgb(5, 8, 15)] shadow-2xl shadow-black">
        <div className="mx-auto mb-10 max-w-[370px] ">
          <div className="mb-8 overflow-hidden rounded ">
            {/* <img
              src={hotel.img}
              alt="image"
              className="w-full h-[220px]"
            /> */}
          </div>
          <div>
            <span
              className="mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white bg-green-400 hover:bg-green-700 ease-in-out duration-300 hover:scale-110 cursor-pointer" onClick={()=>setVisible(!visible)}
            >
              <Link to={`${hotel.slug}`}>
              Book Now
              </Link>
            </span>
            <h3 className='text-2xl font-bold'>
              
                {hotel.hotel_name}
              
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}) : hotels.map((hotel)=>{
  return (
    <>
    
    <div className="w-full px-4 md:w-1/2 lg:w-1/4 bg-[rgb(5, 8, 15)] py-3 shadow-2xl shadow-black ">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            {/* <img
              src={hotel.img}
              alt="image"
              className="w-full h-[220px]"
            /> */}
          </div>
          <div>
            <span
              className="mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white bg-green-400 hover:bg-green-700 ease-in-out duration-300 hover:scale-110 cursor-pointer" onClick={()=>setVisible(!visible)}
            >
             <Link to={`${hotel.slug}`}>
              Book Now
              </Link>
            </span>
            <h3 className='text-2xl font-bold'>
              
                {hotel.hotel_name}
              
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}) }

<Openingsoon close_visbile={close_visbile} visible={visible}/>





      {/* <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <img
              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
              alt="image"
              className="w-full"
            />
          </div>
          <div>
            <span
              className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
              Mar 15, 2023
            </span>
            <h3>
              <a
                href="javascript:void(0)"
                className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
                How to earn more money as a wellness coach
              </a>
            </h3>
            <p className="text-body-color text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <img
              src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
              alt="image"
              className="w-full"
            />
          </div>
          <div>
            <span
              className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
              Jan 05, 2023
            </span>
            <h3>
              <a
                href="javascript:void(0)"
                className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
                The no-fuss guide to upselling and cross selling
              </a>
            </h3>
            <p className="text-body-color text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>



    </div>
  )
}

export default Hotels