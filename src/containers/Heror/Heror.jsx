import React from 'react'
import me from '../../assets/Me.jpg'

const Heror = () => {
  return (
    <section className="flex flex-col py-[4rem] px-[2rem] lg:flex-row lg:items-center" id="home">
      {/* LEFT/TOP */}
      <div className="flex items-center flex-col mb-[3rem] lg:flex-1">
        {/* name */}
        <h1 className=" font-manrope font-bold bg-gradient-to-r from-scred to-scredhover text-transparent bg-clip-text text-[48px] leading-[60px] text-center tracking-[-0.04em] lg:text-[62px] lg:leading-[75px]">Curious and Creative</h1>
        {/* email */}
        <div className="text-[12px] sm:text-[16px] md:text-[18px] leading-[14px] sm:leading-[28px] md:leading-[30px]
          mb-[8px] md:mb-[16px] text-scred relative left-0 duration-300 flex items-center hover:text-scredhover hover:left-[6px]" href="mailto:spencerccarlson0@gmail.com">spencerccarlson0@gmail.com
        </div>
        {/* resume */}
        <a className="text-[12px] sm:text-[16px] md:text-[18px] leading-[14px] sm:leading-[28px] md:leading-[30px]
          mb-[8px] md:mb-[16px] text-scred relative left-0 duration-300 flex items-center hover:text-scredhover hover:left-[6px] cursor-pointer" href="https://drive.google.com/drive/folders/1_YLEVboEeRS1BdYeZH8in-UF8RjVffwv?usp=sharing
          " target="_blank" rel="noopener noreferrer">Resume
        </a>
      </div>

{/* RIGHT/BOTTOM */}

      {/* photo */}
      <div className="flex justify-center items-center lg:flex-1">
        <a target="_blank" rel="noopener noreferrer" href="https://spencercarlsonmusic.com/">
          <img className="border-[6px] border-scred w-[85%] h-[85%] rounded-[50%] 
        sm:border-[9px]  md:w-[58%] md:h-[58%] 
        lg:border-[12px] lg:w-full lg:h-full 
        2xl:w-[85%] 2xl:h-[85%] 
        çmin-[1710px]:w-[75%] min-[1710px]:h-[75%] min-[1910px]:w-[70%] min-[1910px]:h-[70%]"
            src={me}
            alt="Spencer" />
        </a>

      </div>
    </section>
  )
}

export default Heror