import React from 'react';
import PopularTagsStyles from './PopularTags.module.css';

function PopularTags() {
  const popularTags = [{name:'performance', color:'#C7382E'}, {name:'canvas', color:'#1A48BD'}, {name:'accessibility', color:'#4A2522'}, {name:'css', color:'#2C9562'}, {name:'react', color:'#7624C9'}, {name:'webgl', color:'#EEB012'}, {name:'three.js', color:'#1A48BD'}];


  return (
    <div className={PopularTagsStyles['page-tags"']}>
      {popularTags.map(tag => (
        <div className={`tag ${tag.color}`}>
          {`#${tag.name}`}
        </div>
      ))}
    </div>
    );
}

export default PopularTags;
