import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from './logo.jpg'


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>

        {/* Logo */}
       <div className='flex items-center justify-between max-w-[500px] flex-row'>
       <img src={logo} alt='Logo' className='w-[100px] h-[100px]'></img>
       <h1 className='w-full text-3xl font-bold text-[#00df9a] items-center'>Springdale Public School</h1>
       </div>
          <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer scroll-smooth'>
                <a href='#about'>About</a>
            </li>
            <li className='p-4 cursor-pointer'>
            <a href='#Academics'>Academics</a>
            </li>

            <li className='p-4 cursor-pointer'>
            <a href='#admission'>Admission</a>
            </li>

            <li className='p-4 cursor-pointer'>
            <a href='#gallery'>Gallery</a>
            </li>

            <li className='p-4 cursor-pointer scroll-smooth'>
            <a href='#contact'>Contact</a>
           
  
            </li>
          </ul>
          <div onClick={handleNav} className='block md:hidden'>
              {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
          </div>
          <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Springdale Public School</h1>
            <li className='p-4 text-white'>Home</li>
            <li className='p-4 text-white'>About</li>
            <li className='p-4 text-white'>Academics</li>
            <li className='p-4 text-white'>Admissions</li>
            <li className='p-4 text-white'>Gallery</li>
            <li className='p-4 text-white'>Conatct</li>
          </ul>
        </div>
      );
    };

export default Navbar;
