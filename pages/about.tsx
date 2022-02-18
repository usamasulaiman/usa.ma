import React, { useState } from 'react';
import PageSection from '../components/PageSection';
import Image from 'next/image';
import Link from 'next/link';
import Pills from '../components/Pills';
import profileStyles from '../styles/Profile.module.css';
import { aboutMeDescription, twitterLink, socialIcons } from '../constants';


export default function About() {
  // Constants
  const data = Object.keys(aboutMeDescription).map((type, index) => ({ text: type, id: index + 1 }));

  // States
  const [descriptionType, updateDescriptionType] = useState('medium');

  // Logic
  const handleProfileTypeSelection = (data) => {
    updateDescriptionType(data?.text?.toLowerCase());
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
        <div className={profileStyles['description']}>
          <p>{aboutMeDescription[descriptionType]}</p>
        </div>
        <div className={profileStyles['social']}>
          {socialIcons.map((icon, index) => (
            <Link key={index} href={icon?.url}>
              <a target="_blank">
                <Image src={`/social/${icon?.name}.svg`} alt={icon?.name} width={24} height={24} />
              </a>
            </Link>
            // <p> sdaff</p>
          ))}
        </div>
      </PageSection>
      <PageSection title="Want to get in touch?" withSeparator>
        <div className={profileStyles['contact']}>
          <p className={profileStyles['description']}>The fastest way to get in touch with me is through <a href={twitterLink} target="_blank">twitter</a>. Otherwise you can drop me a line <a href="mailto: postusama@gmail.com" target="_blank">here</a>, and I’ll get in touch.</p>
          <p className={profileStyles['description']}>Please add as much information as you can, it would reduce friction and we’ll be talking about important things sooner.</p>
        </div>
      </PageSection>
    </div>
  )
}
