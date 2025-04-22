import React, { useState } from 'react'
import { FiHeart, FiMenu, FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi'
import {HiMiniBars3CenterLeft} from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import avatar from '../assets/avatar.png'
import {useSelector} from 'react-redux'

const navItems=[

    {name:"Dashboard",href:"/dashboard"},
    {name:"Orders",href:"/orders"},
    {name:"Cart Page",href:"/cart"},
    {name:"Checkout",href:"/checkout"},
]

const NavComp=()=>{

    return(
    <ul className='absolute'>
        {
            navItems.map((item)=>{
                return(
                    <li >{item.name}</li>
                )
            })
        }
    </ul>
    )
}

const Navbar = () => {
    const cartItems=useSelector(state=>state.cart.cartItems)
    const [isDropDownOpen,setIsDropDownOpen]=useState(false)
    const currentUser = true

  return (

    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
            {/* left side */}
            <div className='flex items-center md:gap-16 gap-4'> 
                <Link to={'/'}>

                <HiMiniBars3CenterLeft className='size-4'/>
                </Link>

                {/* search input */}
                <div className='relative sm:w-72 w-40 space-x-2'>
                <IoMdSearch className='absolute inline-block left-3 inset-y-2 '/>
                <input type="text" name="" id="" placeholder='search here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />

                </div>
            </div>

            {/* right side  */}
            <div className='relative  flex items-center md:space-x-3 space-x-2'>
                <div>
                    {
                        currentUser ? 
                       <>
                        <button  onClick={()=>setIsDropDownOpen(!isDropDownOpen)}>
                            <img src={avatar} alt="" className={`size-7 rounded-full ${currentUser?'ring-2 ring-blue-500':""}`} />
                        </button>
                          {/* show dropdown */}
                        {
                            isDropDownOpen && (
                                <div  className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                                    <ul className='py-2'>
                                        {
                                            navItems.map((item)=>(
                                                <li key={item.name}onClick={()=>setIsDropDownOpen(false)}>
                                                    <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                                    {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                        
                                        
                                    </ul>
                                </div>
                            )
                        }
                       </>
                        
                        : <Link to={'/login'}>
                         <FaRegUser className='size-4'/>
                        </Link>              

                    }
                </div>
                <button className='hidden sm:block'>
                <FaRegHeart className='size-4'/>
                </button>

                <Link to={'/cart'} className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
                <MdOutlineShoppingCart/>
                <span className='text-sm font-semibold sm:ml-1'>{cartItems?.length}</span>

                </Link>

              

            </div>
        </nav>

    </header>
  )
}

export default Navbar


