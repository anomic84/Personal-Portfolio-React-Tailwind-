import React from 'react'
import { DiNpm, DiReact, DiSass } from 'react-icons/di';

const Techr = () => {
  return (
<section className="flex flex-col w-full pt-[16px] px-[16px] pb-0 mt-[-5rem] grid-cols-[1fr 1fr] mx-auto max-w-[1040px] md:pt-[32px] md:px-[48px] md:pb-0 " id="tech">
      <div className="w-[32px] h-[2px] rounded-[10px] gradient__bg3 my-[2rem] ml-[1rem] sm:w-[48px] sm:h-[4px] md:w-[64px] md:h-[6px]" />
      <br />
      <h2 className="text-[28px] sm:text-[56px] md:text-[65px] sm:leading-[56px] md:leading-[72px] font-bold inline-block bg-gradient-to-r  from-scred to-scredhover text-transparent bg-clip-text  text-center 
      mb-[8px] pt-[16px] sm:pt-[40px] md:pt-[58px] pb-[8px] sm:pb-[12px] md:pb-[16px] max-w-full sm:mb-[20px] md:mb-[16px]">Technologies</h2>
      <ul className="flex  sm:grid flex-col mx-[32px] my-0 sm:mx-[62px] lg:mx-[3rem] sm:gap-[24px] md:gap-[40px] list-none sm:grid-cols-3">
        <li className="mb-[14px]  max-w-[320px] flex flex-row sm:max-w-[203px] md:max-w-[320px] md:flex-col">
          <DiReact size="3rem" className="text-scred hidden md:flex" />
          <div className="flex flex-col ml-[18px] sm:ml-0">
            <h4 className="text-scred font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-[28px] md:leading-[32px] tracking-[0.02em] mb-[4px] md:mb-[8px]">Front-End</h4>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[28px] md:leading-[30px]">Experience with <br />React, Next,<br />Handlebars, and Vite</p>
          </div>
        </li>
        <li className="mb-[14px]  max-w-[320px] flex flex-row sm:max-w-[203px] md:max-w-[320px] md:flex-col">
          <DiNpm size="3rem" className="text-scred hidden md:flex" />
          <div className="flex flex-col ml-[18px] sm:ml-0">
            <h4 className="text-scred font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-[28px] md:leading-[32px] tracking-[0.02em] mb-[4px] md:mb-[8px]">Back-End</h4>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[28px] md:leading-[30px]">Experience with <br />Node, MySql2, Sequelize,<br />RESTful APIs and MongoDB</p>
          </div>
        </li>
        <li className="mb-[14px] max-w-[320px] flex flex-row sm:max-w-[203px] md:max-w-[320px] md:flex-col">
          <DiSass size="3rem" className="text-scred hidden md:flex" />
          <div className="flex flex-col ml-[18px] sm:ml-0">
            <h4 className="text-scred font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-[28px] md:leading-[32px] tracking-[0.02em] mb-[4px] md:mb-[8px]">Design</h4>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[28px] md:leading-[30px]">Experience with <br />Tailwind, SCSS, and <br />Styled-Components</p>
          </div>
        </li>
      </ul>
    </section >
  )
}

export default Techr