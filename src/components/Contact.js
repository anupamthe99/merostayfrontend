import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import {MdClose} from 'react-icons/md'

const Contact = () => {
    const [emailsuccess,setEmailsuccess]=useState(false);

    const close=()=>{
        setEmailsuccess(false)
    }

    const sendmessage=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_o1zp4gr','template_6u158xw',e.target,'i_dYSJ1vhaoeJqdLA')
        .then((resp)=>setEmailsuccess(true))
        .catch((err)=>console.log(err))
    }
  return (
    <div>
{emailsuccess ?<div className="alert bg-green-500 sm:h-[5vh] sm:mx-[33%] mt-5 mx-10 flex p-3  items-center w-[400px] sm:w-[1000px]">
    <h1 className="sm:text-xl font-bold sm:ml-[10%]">Your message has been sent successfully .</h1>
    <span className="sm:ml-[35%] ml-4" onClick={close}><MdClose size={35}/></span>
</div>: ""}



<div className="flex items-center justify-center p-12">

  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" onSubmit={sendmessage}>
      <div className="mb-5">
        <label
          for="name"
          className="mb-3 block text-base font-medium "
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="email"
          className="mb-3 block text-base font-medium "
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="subject"
          className="mb-3 block text-base font-medium "
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="message"
          className="mb-3 block text-base font-medium "
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>



    </div>
  )
}

export default Contact