import React from 'react'
import { useState } from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbarr = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex w-full justify-between items-center pt-[1rem] lg:pt-[2rem]">
      <div className="flex w-full items-center justify-between">
        <div className="">
          <p className="text-scred dark:text-white font-manrope font-semibold text-[27px] pl-4">Spencer C. Carlson</p>
        </div>
        <div className="hidden lg:flex flex-row items-between
         text-scred dark:text-white text-lg 2xl:text-2xl">
          <p><a className="lg:mx-[1rem] hover:text-scredhover dark:hover:text-whitehover" href="#home">Home</a></p>
          <p><a className="lg:mx-[1rem] hover:text-scredhover dark:hover:text-whitehover" href="#projects">Projects</a></p>
          <p><a className="lg:mx-[1rem] hover:text-scredhover dark:hover:text-whitehover" href="#tech">Technologies</a></p>
          {/* <p><a className="lg:mx-[1rem] hover:text-scredhover" href="#footer">Contact</a></p> */}
        </div>
        <div className="hidden xs:flex flex-wrap pr-[16px] md:pr-0 md:flex-nowrap justify-center md:justify-none items-end">
          {/* <BsFillMoonFill className="moon cursor-pointer" />
          <BsFillSunFill className="sun cursor-pointer" /> */}

          <a href="https://github.com/anomic84" className="duration-300 text-scred dark:text-white rounded-[50px] p-[8px] hover:text-whitebg dark:hover:text-scred hover:bg-scredhover dark:hover:bg-whitehover cursor-pointer scale-[1.2px]" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="h-[2rem] w-[2rem]" />
          </a>
          <a href="https://www.linkedin.com/in/spencer-carlson-59054a259" className="duration-300 text-scred dark:text-white rounded-[50px] p-[8px] hover:text-whitebg dark:hover:text-scred hover:bg-scredhover dark:hover:bg-whitehover cursor-pointer scale-[1.2px]" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="h-[2rem] w-[2rem]" />
          </a>
          <a href="https://www.instagram.com/spencercarlsonmusic/" className="duration-300 text-scred dark:text-white rounded-[50px] p-[8px] hover:text-whitebg dark:hover:text-scred hover:bg-scredhover dark:hover:bg-whitehover cursor-pointer scale-[1.2px]" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className="h-[2rem] w-[2rem]" />
          </a>
        </div>
        <div className='hidden lg:flex pr-4'>
        </div>
      </div>
      <div className="pr-4 lg:hidden">
        {toggleMenu
          ? <FaTimes color="#530E1A" size={27} onClick={() => setToggleMenu(false)} />
          : <FaBars color="#530E1A" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="p-[2rem]">
            <div className="text-scred dark:text-white sm:text-xl">
              <p><a href="#home">Home</a></p>
              <p><a href="#projects">Projects</a></p>
              <p><a href="#tech">Technologies</a></p>
              {/* <p><a href="#footer">Contact</a></p> */}

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbarr