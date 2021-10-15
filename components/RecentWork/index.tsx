import React from 'react'
import PropTypes from 'prop-types'
import recentWork from '../../constants/recentWork';
import projectStyles from './RecentWork.module.css';

function RecentWork(props) {

  return (
    <>
      {recentWork.length && recentWork.map((workItem, index) => (
        <div key={index} className={projectStyles['recent-work']}>
          <div className="recent-work-info">
            <div className="recent-work-title">{workItem.title}</div>
            <div className="recent-work-description">{workItem.subtitle}</div>
          </div>
        </div>
      ))}
    </>
  )
}

RecentWork.propTypes = {

}

export default RecentWork

