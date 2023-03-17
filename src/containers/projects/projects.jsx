import React from 'react'

import { projects } from '../../constants/constants';
import ProjectCard from '../../components/ProjectCard';
const Projects = () => {
  return (
    <section className="app__projects gradient_bg2" id="projects">
      <div className="app__projects-divider" />
      <h2 className="app__projects-title">Projects</h2>
      <section className="app__projects-grid">
        
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project}/>
        ))}
      </section>
    </section>
  )
}

export default Projects