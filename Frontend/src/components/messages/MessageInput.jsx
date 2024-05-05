import React from 'react'
import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className='px-4 my-3' action="">
        <div className='w-full relative'>
          <input
          type="text"
          placeholder='Send Message'
          className='border text-sm rounded-lg block w-full p-2.5 text-black bg-white border-lime-600'
          />
         <button type='submit' className='text-lime-500 absolute inset-y-0 end-0 flex items-center pe-3'>
         <IoSend/>
         </button>
        </div>
    </form>
  )
}

export default MessageInput