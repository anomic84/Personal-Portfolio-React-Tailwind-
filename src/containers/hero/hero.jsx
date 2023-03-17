import React from 'react'
import me from '../../assets/Me.jpg'

const Hero = () => {
  return (
    <div className="flex flex-col py-[4rem] px-[2rem]" id="home">
    <div className="flex items-center flex-col mb-[3rem] ">
      {/* lg:mr-[5rem] ^^^^? */}
      <h1 className="font-manrope font-bold text-scred text-[48px] leading-[60px] text-center">Curious and Creative</h1>
      <p className="font-manrope font-bold text-scred text-[16px] leading-[24px]" >spencerccarlson0@gmail.com</p>
      {/* lg:m-[1.5rem] lg:text-[16px] lg:leading-[24px] ^^^^^^^?*/}
    </div>
    <div className="flex justify-center items-center">
      <img src={me} alt="Spencer" />
    </div>
  </div>
  )
}

export default Hero