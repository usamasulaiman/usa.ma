import React, { useState } from 'react';
import PageSection from '../components/PageSection';
import Image from 'next/image';
import Pills from '../components/Pills';
import profileStyles from '../styles/Profile.module.css';
import { aboutMeDescription } from '../constants';


export default function About() {
  // Constants
  const data = [{ text: 'short', id: 1 }, { text: 'medium', id: 2 }, { text: 'long', id: 3 }]

  // States
  const [descriptionType, updateDescriptionType] = useState('medium');

  // Logic
  const handleProfileTypeSelection = (data) => {
    updateDescriptionType(data.text.toLowerCase());
  }

  return (
    <div className="container page about">
      <PageSection title="About me">
        <div className={profileStyles['avatar']}>
          <Image src="/images/profile-photo-usama.jpg" alt="Usama's Profile photo" width={120} height={120} />
        </div>
        <div className={profileStyles['type-of-description']}>
          <Pills pillData={data} onSelect={handleProfileTypeSelection} noUnselect />
        </div>
        <div className="description">
          <p>{aboutMeDescription[descriptionType]}</p>
        </div>
      </PageSection>
    </div>
  )
}
