import React from 'react'
import { DiNpm, DiReact, DiSass } from 'react-icons/di';

const Tech = () => {
  return (
<section className="flex flex-col w-full pt-[16px] px-[16px] pb-0 mt-[5rem] grid-cols-[1fr 1fr] mx-auto max-w-[1040px] md:pt-[32px] md:px-[48px] md:pb-0 " id="tech">
      <div className="w-[32px] h-[2px] rounded-[10px] gradient__bg3 my-[2rem] ml-[1rem] sm:w-[48px] sm:h-[4px] md:w-[64px] md:h-[6px]" />
      <br />
      <h2 className="text-[28px] font-bold inline-block bg-gradient-to-r from-scred to-scredhover text-transparent bg-clip-text mb-[8px] text-center p-0 max-w-full sm:text-[56px] sm:leading-[56px] sm:mb-[12px] sm:p-[48px 0 12px] md:text-[65px] md:leading-[72px] md:mb-[16px] md:pt-[58px] mx:p-0 md:pb-[16px]">Technologies</h2>
      <ul className="flex sm:grid flex-col mx-[32px] my-0 sm:mx-[62px] lg:mx-[3rem] sm:gap-[24px] md:gap-[40px] list-none grid-cols-3">
        <li className="mb-[14px] max-w-[320px] flex flex-row sm:max-w-[203px] md:max-w-[320px] md:flex-col">
          <DiReact size="3rem" className="text-scred" />
          <div className="flex flex-col ml-[18px] sm:ml-0">
            <h4 className="app__tech-list-item_title">Front-End</h4>
            <p className="app__tech-list-item_paragraph">Experience with <br />React, Next, and <br />Vite</p>
          </div>
        </li>
        <li className="mb-[14px] max-w-[320px] flex flex-row sm:max-w-[203px] md:max-w-[320px] md:flex-col">
          <DiNpm size="3rem" className="text-scred" />
          <div className="flex flex-col ml-[18px] sm:ml-0">
            <h4 className="app__tech-list-item_title">Back-End</h4>
            <p className="app__tech-list-item_paragraph">Experience with <br />Node, MySql2, Sequelize,<br /> and MongoDB</p>
          </div>
        </li>
        <li className="mb-[14px] max-w-[320px] flex flex-row sm:max-w-[203px] md:max-w-[320px] md:flex-col">
          <DiSass size="3rem" className="text-scred" />
          <div className="flex flex-col ml-[18px] sm:ml-0">
            <h4 className="app__tech-list-item_title">Design</h4>
            <p className="app__tech-list-item_paragraph">Experience with <br />Tailwind, SCSS, and <br />Styled-Components</p>
          </div>
        </li>
      </ul>
    </section >
  )
}

export default Tech