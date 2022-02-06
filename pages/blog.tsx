import React from 'react'
import PageDescription from '../components/PageDescription';
import PageSection from '../components/PageSection';
import Pills from '../components/Pills';

export default function Blog() {
  const pageDescription = "This space hosts posts focused mostly on tech, design, product and anything else that is not fiction. Here are a selected few tags to filter these by,";
  const popularTags = [{text:'performance', id:1, color:'red'}, {text:'canvas', id:2, color:'blue'}, {text:'accessibility', id:3, color:'brown'}, {text:'css', id:4, color:'green'}, {text:'react', id:5, color:'purple'}, {text:'webgl', id:6, color:'yellow'}, {text:'three.js', id:7, color:'blue'}];

  const handleTagSelection = (tag) => {
    console.log('selected tag is', tag);
  }

  return (
    <div className="container page blog">
      <PageSection title="Blog">
        <PageDescription text={pageDescription} />
      </PageSection>
      <Pills pillData={popularTags} onSelect={handleTagSelection} />
    </div>
  )
}
