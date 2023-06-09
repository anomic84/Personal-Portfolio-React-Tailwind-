import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footerr = () => {
  return (
    // footer
    <section className="w-[calc(100vw-32)] ms:w-[calc(100vw-96)] pt-0 px-[16px] pb-[48px] sm:pt-[2rem] sm:px-[48px] sm:pb-[40px] max-w-[1040px] mx-[1rem] my-auto box-content" id="footer">
      {/* Email/Resume */}
      <ul className=" pt-[32px] px-[4px] pb-[16px] sm:px-0 lg:pt-[40px] lg:pb-[28px] gap-[20px] sm:gap-[16px] lg:gap-[40px]
      w-full grid grid-cols-2">
        {/* grid grid-cols-2 */}
        {/* Email */}
        <div className="flex flex-col max-w-[220px] w-full">
          <h4 className="text-scred font-semibold text-[10px] sm:text-[12px] leading-[12px] sm:leading-[24px] mb-[8px] sm:mb-[16px]">Email</h4>
          <div className="text-[12px] sm:text-[20px] md:text-[22px] leading-[16px] sm:leading-[32px] md:leading-[34px]
          mb-[8px] md:mb-[16px] text-scred relative left-0 duration-300 flex items-center hover:text-scredhover hover:left-[6px] cursor-pointer" href="mailto:spencerccarlson0@gmail.com">Get in touch
          </div>
        </div>
        {/* Resume */}
        <div className="flex flex-col max-w-[220px] w-full">
          <h4 className="text-scred font-semibold text-[10px] sm:text-[12px] leading-[12px] sm:leading-[24px] mb-[8px] sm:mb-[16px] ">Resume</h4>
          <div className="text-[12px] sm:text-[20px] md:text-[22px] leading-[16px] sm:leading-[32px] md:leading-[34px]
          mb-[8px] md:mb-[16px] text-scred relative left-0 duration-300 flex items-center hover:text-scredhover hover:left-[6px] cursor-pointer" href="https://drive.google.com/drive/folders/1_YLEVboEeRS1BdYeZH8in-UF8RjVffwv?usp=sharing" target="_blank" rel="noopener noreferrer">drive.google.com
          </div>
        </div>
      </ul>
      {/* slogan/icons */}
      <div className="flex flex-col md:flex-row md:justify-between max-w-[1040px] w-full">
        <div className="flex flex-col mb-[32px] items-center sm:mb-0 sm:items-baseline md:mr-auto">
          <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[28px] md:leading-[30px]
          text-scred tracking-[0.02em] p-[1rem] min-w-[100px] sm:min-w-[280px]">Bringing passion to every project.</p>
        </div>
        <br />
        {/* icons */}
        <div className="flex flex-wrap pr-[16px] md:pr-0 md:flex-nowrap justify-center md:justify-none items-center">
          <a href="https://github.com/anomic84" className="duration-300 text-scred rounded-[50px] p-[8px] hover:text-whitebg hover:bg-scredhover cursor-pointer scale-[1.2px]" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/spencer-carlson-59054a259" className="duration-300 text-scred rounded-[50px] p-[8px] hover:text-whitebg hover:bg-scredhover cursor-pointer scale-[1.2px]" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="3rem" />
          </a>
          <a href="https://www.instagram.com/spencercarlsonmusic/" className="duration-300 text-scred rounded-[50px] p-[8px] hover:text-whitebg hover:bg-scredhover cursor-pointer scale-[1.2px]" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size="3rem" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footerr