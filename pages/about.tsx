import React, { useState } from 'react';
import PageSection from '../components/PageSection';
import Image from 'next/image';
import Pill from '../components/Pill';
import profileStyles from '../styles/Profile.module.css';
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
      <PageSection title="About me">
        <div className={profileStyles['avatar']}>
          <Image src="/images/profile-photo-usama.jpg" alt="Usama's Profile photo" width={120} height={120} />
        </div>
        <div className={profileStyles['type-of-description']}>
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
