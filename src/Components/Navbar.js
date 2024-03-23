
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navLinks } from '../constants';
import { ecell, logo } from '../assets';
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  const [scroll, setScroll] = useState(false);

  const changeColor=()=>{
    if(window.scrollY >= 100){
      setScroll(true);
    }else{
      setScroll(false);
    }
  }

  window.addEventListener('scroll',changeColor);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items


  return (
    <div className={scroll ? 'bg-opacity-5 shadow-lg backdrop-blur-md flex justify-center items-center h-24 max-w-full mx-auto px-4 text-white' :'flex justify-center items-center h-24 max-w-full mx-auto px-4 text-white'}>
      {/* Logo */}
      <div className='w-full'> <Link to={`/`}><img src={ecell} height={100} width={100} /></Link></div>  

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navLinks.map(item => (
          <li
            key={item.id}
            className='p-4 rounded-xl m-2 cursor-pointer'
          >
           {item.id == 'home' ? <Link to={`/`}>{item.title}</Link> :<Link to={`/${item.id}`}>{item.title}</Link>}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div className='w-full'><img src={ecell} height={100} width={100} /></div>

        {/* Mobile Navigation Items */}
        {navLinks.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl cursor-pointer border-gray-600'
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;