import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
             <img src="https://avatar.iran.liara.run/public/boy" alt="" />
            </div>
        </div>
      <div className='chat-bubble text-black font-semibold bg-lime-300'>Hi, New message App</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-lime-100'>9.08 am</div>
    </div>
  )
}

export default Message