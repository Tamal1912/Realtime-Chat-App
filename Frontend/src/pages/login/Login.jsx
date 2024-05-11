import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <span className=' flex items-center justify-center text-4xl font-semibold text-lime-400 p-4'>Cypher</span>
       <h1 className='text-xl font-semibold text-center text-gray-300'>
        Login
       </h1>

       <form action="">
         <div>
           <label htmlFor="" className='label p-2'>
               <span className='text-base label-text text-slate-400'>Username</span>
           </label>
           <input type="text" placeholder='Enter Username' className='w-full h-10 input input-bordered'/>
         </div>

         <div>
          <label htmlFor="" className='label'>
            <span className='text-base label-text text-slate-400'>Password</span>
          </label>
          <input type="text" placeholder='Enter Password' className='w-full input input- h-10' />
         </div>
         
         <Link to="/signup" className='text-sm text-lime-300 font-mono font-semibold tracking-wide hover:underline hover:text-slate-300 inline-block mt-2'>
          Don't Have An Account ?
         </Link>

         <div>
         <button className="btn btn-block transition duration-300 ease-in-out btn-sm mt-3 hover:bg-lime-400 hover:text-black">Login</button>
         </div>

       </form>
      </div>
    </div>
  )
}

export default Login