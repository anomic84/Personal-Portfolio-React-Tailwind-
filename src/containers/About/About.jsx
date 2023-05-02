import React from 'react'

const About = () => {
    return (
        <section className="flex flex-col items-center w-full pt-[16px] px-[16px] pb-0 mt-[-5rem] grid-cols-[1fr 1fr] mx-auto max-w-[1040px] md:pt-[32px] md:px-[48px] md:pb-0 " id="about">
            <div className="w-[32px] h-[2px] rounded-[10px] gradient__bg3 my-[2rem] ml-[1rem] sm:w-[48px] sm:h-[4px] md:w-[64px] md:h-[6px]" />
            <br />
            <h2 className="text-[28px] sm:text-[56px] md:text-[65px] sm:leading-[56px] md:leading-[72px] 
            font-bold inline-block bg-gradient-to-r  from-scred to-scredhover  text-transparent bg-clip-text  text-center 
      mb-[8px] pt-[16px] sm:pt-[40px] md:pt-[58px] pb-[8px] sm:pb-[12px] md:pb-[16px] max-w-full sm:mb-[20px] md:mb-[16px]">About Me</h2>
            <p className='font-manrope text-scred max-w-[400px] md:max-w-[600px] text-center
            text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[28px] md:leading-[30px]'>
                Spencer Carlson is an up-and-coming web developer based in Seattle, WA. A hard working and effective communicator who prides himself on his ability to mix soft skills with technical prowess.
            </p>
        </section >
    )
}

export default About