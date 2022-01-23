import React from 'react';
import PropTypes from 'prop-types';
import PageDescriptionStyles from './PageDescription.module.css';

function PageDescription({text}) {
  return (
    <div className={PageDescriptionStyles['page-description']}>
      {text}
    </div>
    );
}

PageDescription.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageDescription;
