import React from 'react'
import Separator from '../Separator';
import PropTypes from 'prop-types';
import SectionStyles from './PageSection.module.css';

function PageSection(props) { 
  const { children, withSeparator, title } = props;
  return (
    <div className={SectionStyles.section}>
      {withSeparator &&  <Separator />}
      <div className={SectionStyles['section-header']}>
        <h2 className={SectionStyles['section-heading']}>{title}</h2>
        {/* <svg className={SectionStyles.underline} width="179" height="21" viewBox="0 0 179 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 14.052C13.9025 10.7022 22.3284 12.2104 29.7231 10.3846C37.282 8.5182 44.0357 5.42713 51.9487 5.42713C57.4832 5.42713 63.2367 4.36357 68.7008 5.593C77.3838 7.54667 85.578 9.89842 94.5201 10.5504C103.898 11.2342 113.111 10.2796 122.44 9.66584C128.781 9.24868 135.137 8.78135 141.496 8.74438C145.126 8.72328 148.746 8.5444 152.295 9.40783C156.904 10.5288 161.517 10.403 166.228 10.403C168.69 10.403 170.866 10.5155 173.194 9.73956" stroke="#95CAB1" stroke-width="9" stroke-linecap="square" stroke-linejoin="round"/>
        </svg> */}
        <svg className={SectionStyles.underline} width="179" height="21" viewBox="0 0 179 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 14.052c6.902-3.35 15.328-1.842 22.723-3.667 7.559-1.867 14.313-4.958 22.226-4.958 5.534 0 11.288-1.063 16.752.166 8.683 1.954 16.877 4.305 25.82 4.957 9.377.684 18.59-.27 27.919-.884 6.341-.417 12.697-.885 19.056-.922 3.63-.02 7.25-.2 10.799.664 4.609 1.12 9.222.995 13.933.995 2.462 0 4.638.112 6.966-.663" stroke="#95CAB1" stroke-width="9" stroke-linecap="square" stroke-linejoin="round"/>
        </svg>
      </div>
      {children}
    </div>
  )
}

PageSection.propTypes = { 
  children: PropTypes.any.isRequired,
  withSeparator: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

PageSection.defaultProps = {
  withSeparator: false,
}

export default PageSection;
