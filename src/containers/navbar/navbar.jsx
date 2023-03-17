import React, { useState } from 'react'

import { FaReact, FaBars, FaTimes } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between items-start pt-[2rem]">
      <div className="">
        <div className="ml-[1rem]">
          <p className="text-scred font-manrope font-semibold text-[27px]">Spencer C. Carlson</p>
        </div>
        <div className="invisible">
          <p><a href="#home">Home</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#tech">Technologies</a></p>
          <p><a href="#footer">Contact</a></p>
        </div>
      </div>
      <div className="invisible text-scred mr-[1rem] ">
        <p>Made with React</p>
        {/* <FontAwesomeIcon icon="fa-brands fa-react" className="app__navbar-icon_img"/> */}
        <FaReact className="" />
      </div>
      <div className="mr-[1rem]">
        {toggleMenu
          ? <FaTimes color="#530E1A" size={27} onClick={() => setToggleMenu(false)} />
          : <FaBars color="#530E1A" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="p-[2rem]">
            <div className="text-scred">
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