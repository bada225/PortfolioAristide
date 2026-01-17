import React from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import Navbare from '../Navbare'
import { Link } from 'react-router-dom'

const Header = ({ toggleDark, dark }) => {
  return (
    <header className="flex justify-between items-centerpx  px-10  p-6 border  bg-transparent backdrop-blur-md">
      <Link to='/' className="text-5xl font-bold cursor-pointer">Portfolio</Link>

      <Navbare/>
      <button
        onClick={toggleDark}
        className="px-4 py-4  bg-gray-600 rounded  rounded-full cursor-pointer"
      >
        {dark ? (
           <MoonIcon className="h-6 w-6 text-gray-800" />  
        ): (
              <SunIcon className="h-6 w-6 text-yellow-500" />
        )}
      </button> 
    </header>
  )
}
 
export default Header
