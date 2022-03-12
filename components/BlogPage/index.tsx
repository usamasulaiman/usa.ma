import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import BlogStyles from './BlogPage.module.css';

function BlogPage(props) {
  console.log('meta is: ', props.meta);
  const router = useRouter();
  const parent = router?.pathname?.split('/')[1];
  return (
    <div className={BlogStyles['inner-wrapper']}>
      <button className={BlogStyles['back-button']} onClick={() => router.push('/blog')}>{`< ${parent}`}</button>
      {props.children}
    </div>
  )
}

BlogPage.propTypes = {
  children: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({}).isRequired,
}

export default BlogPage
