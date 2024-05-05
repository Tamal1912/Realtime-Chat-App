import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (
    <div className='flex flex-col border-r-4  border-lime-400 p-4'>
        <SearchInput/>
        <div className='divider px-3'></div>
         <Conversations/>
         <LogoutButton/>
         </div>
  )
}

export default Sidebar