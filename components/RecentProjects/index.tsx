import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import projects from '../../constants/projects';
import projectStyles from './RecentProjects.module.css';

function RecentProjects(props) {
  return (
    <>
      {projects.length && projects.map((project, index) => (
        <div key={index} className={projectStyles['recent-project']}>
          <div className={projectStyles['recent-project-image']}>
            <Image src={project.image} alt={project.title} layout="fill" />
          </div>
          <div className="recent-project-info">
            <div className="recent-project-title">{project.title}</div>
            <div className="recent-project-description">{project.subtitle}</div>
          </div>
        </div>
      ))}
    </>
  )
}

RecentProjects.propTypes = {

}

export default RecentProjects

