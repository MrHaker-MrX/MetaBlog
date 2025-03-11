import React, { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { NavLink } from 'react-router-dom'
import logo from './assets/Logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import darkLogo from './assets/DarkLogo.svg'
function Navbar() {
    const [mode, setMode] = useState('')
    useEffect(() => {
        const mode = localStorage.getItem('theme')
        console.log(mode)
        setMode(mode)
    }, [])
  return (
    <div className='w-full h-[100px] flex items-center'>
        <div className="container mx-auto px-[165px] flex items-center justify-between">
            <NavLink to={'/'}>
                <img src={mode == 'light' ? logo : darkLogo} alt="" />
            </NavLink>
            <ul className='flex gap-10'>
                <NavLink to={'/'}><li className='font-semibold'>Home</li></NavLink>
                <NavLink to={'blog'}><li className='font-semibold'>Blog</li></NavLink>
                <NavLink to={'single-post'}><li className='font-semibold'>Single Post</li></NavLink>
                <NavLink to={'page'}><li className='font-semibold'>Pages</li ></NavLink>
                <NavLink to={'contact'}><li className='font-semibold'>Contact</li></NavLink>
            </ul>
            <div className="relative">
                <input
                    className="rounded-[10px] w-[166px] h-[36px] bg-[#f4f4f5] p-[20px] outline-none"
                    type="search"
                    placeholder="Search"
                />
                <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
            <ThemeToggle />

        </div>

    </div>
  )
}

export default Navbar
