import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { ImHappy } from "react-icons/im";
import { BsChatLeftQuote } from "react-icons/bs";


const MessageContainer = () => {
    const noChatSelected=false;
  return (
    <div className='md:min-w-[450px] flex flex-col '>
       {noChatSelected ? (<NoChatSelected/>):(
         <>
         {/* Header  */}
         <div className='bg-lime-600 px-4 py-2 mb-2'>
             <span className='label-text font font-semibold pr-2 pl-2'>To</span>
             <span className='font-bold text-gray-300'>Grase</span>
         </div>
 
         <Messages/>
         <MessageInput/>
         </>
       )}

    </div>
  )
}

export default MessageContainer;

const NoChatSelected= ()=>{
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p className='text-xl flex items-center gap-3 text-lime-400 font-mono'>
                    <ImHappy className=''/>
                     Welcome Tamal</p>
                <p className='text-sm tracking-wider font-normal p-3'>Select a chat to start messaging</p>
            <div >
                <BsChatLeftQuote className='text-4xl md-6xl text-center'/>
            </div>
            </div>
        </div>
    )
}