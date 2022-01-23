import React from 'react'
import PageDescription from '../components/PageDescription';
import PopularTags from '../components/PopularTags';

export default function Blog() {
  const pageDescription = "This space hosts posts focused mostly on tech, design, product and anything else that is not fiction. Here are a selected few tags to filter these by,";

  return (
    <div className="container page blog">
      <PageDescription text={pageDescription} />
      <PopularTags />
    </div>
  )
}
