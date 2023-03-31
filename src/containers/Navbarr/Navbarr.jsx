import React from 'react'
import { useState } from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbarr = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex w-full justify-between items-center pt-[1rem] lg:pt-[2rem]">
      <div className="hidden md:flex w-full items-center justify-between">
        <div className="">
          <p className=" text-scred  font-manrope font-semibold text-[27px] pl-4">Spencer C. Carlson</p>
        </div>
        <div className="hidden md:flex flex-row items-between
         text-scred  text-lg 2xl:text-2xl">
          <p><a className="md:mx-[0.5rem] lg:mx-[1rem] hover:text-scredhover" href="#home">Home</a></p>
          <p><a className="md:mx-[0.5rem] lg:mx-[1rem] hover:text-scredhover" href="#projects">Projects</a></p>
          <p><a className="md:mx-[0.5rem] lg:mx-[1rem] hover:text-scredhover" href="#tech">Technologies</a></p>
          <p><a className="md:mx-[0.5rem] lg:mx-[1rem] hover:text-scredhover" href="#contact">Contact</a></p>
        </div>
        <div className="hidden sm:flex flex-wrap pr-[16px] md:pr-0 md:flex-nowrap justify-center md:justify-none items-end">
          <a href="https://github.com/anomic84" className="duration-300 text-scred rounded-[50px] p-[8px] hover:text-whitebg hover:bg-scredhover  cursor-pointer scale-[1.2px]" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="h-[2rem] w-[2rem]" />
          </a>
          <a href="https://www.linkedin.com/in/spencer-carlson-59054a259" className="duration-300 text-scred rounded-[50px] p-[8px] hover:text-whitebg  hover:bg-scredhover cursor-pointer scale-[1.2px]" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="h-[2rem] w-[2rem]" />
          </a>
          <a href="https://www.instagram.com/spencercarlsonmusic/" className="duration-300 text-scred rounded-[50px] p-[8px] hover:text-whitebg  hover:bg-scredhover cursor-pointer scale-[1.2px]" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className="h-[2rem] w-[2rem]" />
          </a>
        </div>
        <div className='hidden lg:flex pr-4'>
        </div>
      </div>
      {/* // TABLET */}

      {/* mobile */}
      <div className="md:hidden flex justify-between items-center px-4 w-full">
        {toggleMenu
          ? ''
          : <h1 className=" text-scred  font-manrope whitespace-nowrap font-semibold text-[27px] pl-4">Spencer C. Carlson</h1>
        }
        <div className='flex justify-end w-full'>
          {toggleMenu
            ? <FaTimes color="#530E1A" size={27} onClick={() => setToggleMenu((prev) => !prev)} />
            : <FaBars color="#530E1A" size={27} onClick={() => setToggleMenu((prev) => !prev)} />}
          {toggleMenu && (
            <div className="z-10 h-screen w-[100%] flex justify-center items-center">
              <div className="text-scred  text-center flex flex-col justify-center w-full">
                <p className='py-5 text-xl sm:text-3xl text-scred'><a href="#home">Home</a></p>
                <p className='py-5 text-xl sm:text-3xl text-scred'><a href="#projects">Projects</a></p>
                <p className='py-5 text-xl sm:text-3xl text-scred'><a href="#tech">Technologies</a></p>
                <p className='py-5 text-xl sm:text-3xl text-scred'><a href="#contact">Contact</a></p>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbarr