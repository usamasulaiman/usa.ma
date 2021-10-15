import React, { useState } from 'react'
import PageSection from '../components/PageSection'
import Pill from '../components/Pill';
import { aboutMeDescription } from '../constants';


export default function About() {
  const [descriptionType, updateDescriptionType] = useState('medium');
  const showDescription = (value) => {
    console.log('got value', value)
    updateDescriptionType(value.text.toLowerCase());
  };
  const pillColor = ['red', 'blue', 'green'];

  return (
    <div className="container page about">
      <PageSection withSeparator title="Currently working on">
        <div className="avatar">
          <img src="../../images/profile-photo-usama.png" alt="Usama's Profile photo" />
        </div>
        <div className="type-of-description">
          {Object.keys(aboutMeDescription).map((key, index) => (
            <Pill key={index} selected={key === descriptionType} value={{ text: key, id: index }} color={pillColor[index]} onClick={(value) => showDescription(value)} />
          ))}
        </div>
        <div className="description">
          <p>{aboutMeDescription[descriptionType]}</p>
        </div>
      </PageSection>
    </div>
  )
}
