import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import recentWork from '../../constants/recentWork';
import projectStyles from './RecentWork.module.css';

function RecentWork(props) {

  return (
    <ul className={projectStyles['recent-work']}>
      {recentWork.length && recentWork.map((workItem, index) => (
        <li key={index} className={projectStyles['recent-work-info']}>
          <Link href={`/project/${workItem.slug}`}>
            <a>    
              <h4 className={projectStyles['recent-work-title']}>{workItem.title}</h4>
              <p className={projectStyles['recent-work-description']}>{workItem.subtitle}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

RecentWork.propTypes = {

}

export default RecentWork

