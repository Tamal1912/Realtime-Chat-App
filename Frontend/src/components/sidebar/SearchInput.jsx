import React from 'react'
import { FaSearch } from "react-icons/fa";


const SearchInput = () => {
  return (
    <form action="" className='flex gap-2 items-center'>
      <input type="search"  placeholder='Search....' className='input input-bordered rounded-full'/>
      <button type="submit" className='btn btn-circle bg-lime-400 text-slate-950'>
      <FaSearch />
      </button>
    </form>
  )
}

export default SearchInput