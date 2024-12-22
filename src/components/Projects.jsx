import React from 'react';
import SquidGameCard from './SquidGameCard';
import projectsData from '../data/projects.json'; 

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div> 
        {projectsData.map((project) => (
          <SquidGameCard 
            key={project.title} 
            title={project.title} 
            description={project.description} 
            image={project.image} 
            technologies={project.technologies} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;