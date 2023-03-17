import React, { useState } from 'react'

import { FaReact, FaBars, FaTimes } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between items-start pt-[2rem]">
      <div className="flex items-center justify-between flex-1">
        <div className="ml-[2rem] mr-[2rem]">
          <p className="text-scred font-manrope font-semibold text-[27px]">Spencer C. Carlson</p>
        </div>
        <div className="invisible lg:visible flex flex-row items-around
         text-scred text-lg">
          <p><a className="lg:mx-[1rem] hover:text-scredhover" href="#home">Home</a></p>
          <p><a className="lg:mx-[1rem] hover:text-scredhover" href="#projects">Projects</a></p>
          <p><a className="lg:mx-[1rem] hover:text-scredhover" href="#tech">Technologies</a></p>
          <p><a className="lg:mx-[1rem] hover:text-scredhover" href="#footer">Contact</a></p>
        </div>
        <div className="invisible text-scred mr-[2rem] lg:visible flex flex-column text-lg  items-center">
          <p className="flex-nowrap items-center pl-5 text-xl">Made with React   </p>
        </div>
        <div className="invisible lg:visible flex flex-row  justify-between">
        <FaReact className=" text-scred"/>
          <SiTailwindcss className=" text-scred"/>
          </div>
      </div>
      <div className="mr-[2rem] lg:invisible">
        {toggleMenu
          ? <FaTimes color="#530E1A" size={27} onClick={() => setToggleMenu(false)} />
          : <FaBars color="#530E1A" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="p-[2rem]">
            <div className="text-scred sm:text-xl">
              <p><a href="#home">Home</a></p>
              <p><a href="#projects">Projects</a></p>
              <p><a href="#tech">Technologies</a></p>
              <p><a href="#footer">Contact</a></p>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar