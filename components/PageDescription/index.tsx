import React from 'react';
import PropTypes from 'prop-types';
import PageDescriptionStyles from './PageDescription.module.css';

type TDescription = {
  text: string | HTMLParagraphElement,
  isHTML?: boolean,
}

function PageDescription({ text, isHTML }: TDescription) {
  if (isHTML) return <div className={PageDescriptionStyles['page-description']} dangerouslySetInnerHTML={{ __html: text }} />
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
