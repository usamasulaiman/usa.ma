import React from 'react';
import Image from 'next/image';
import projects from '../../constants/projects';
import projectStyles from './RecentProjects.module.css';
import { palette } from '../../constants';

function RecentProjects() {
  return (
    <div className={projectStyles['recent-projects']}>
      {projects.length && projects.map((project, index) => {
        const projectDescriptionStyle = `${projectStyles['recent-project-info']} ${projectStyles[palette[project.id%7]]}`;
        return (
          <div key={index} className={projectStyles['recent-project']}>
            <div className={projectStyles['recent-project-image']}>
              <Image src={project.image} alt={project.title} layout="fill" objectFit='cover' />
            </div>
            <div className={projectDescriptionStyle}>
              <h4 className={projectStyles['recent-project-title']}>{project.title}</h4>
              <p className={projectStyles['recent-project-description']}>{project.subtitle}</p>
            </div>
          </div>
        )}
      )}
    </div>
  )
}

export default RecentProjects;
