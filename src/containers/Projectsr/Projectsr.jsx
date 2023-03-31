import React from 'react'

import { projects } from '../../constants/constants';
import ProjectCard from '../../components/ProjectCard';
const Projectsr = () => {
  return (
    <section className="flex flex-col w-full p-0 mt-0 mb-[-5rem] grid-cols-[1fr 1fr] mx-auto max-w-[1040px] gradient__bg2 md:pt-[58px] md:px-[16px] md:pb-0 " id="projects">
     <h2 className="text-[28px] font-bold inline-block bg-gradient-to-r from-scred to-scredhover text-transparent bg-clip-text mb-[8px] text-center p-0 max-w-full 
      sm:text-[56px] sm:leading-[56px] sm:mb-[12px] sm:p-[48px 0 12px] md:text-[65px] md:leading-[72px] md:mb-[16px] md:pt-[58px] mx:p-0 md:pb-[16px]">Projects</h2>
      <section className="flex flex-col p-[2rem] pb-0 sm:grid md:grid-cols-2 sm:p-[2rem] gap-x-[2rem] gap-y-[3rem]">

        {projects.map((project) => (
          <ProjectCard key={project.id} {...project}/>
        ))}
      </section>
    </section>
  )
}

export default Projectsr