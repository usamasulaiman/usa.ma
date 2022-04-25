import React, { useState } from 'react';
import PageSection from '../components/PageSection';
import Image from 'next/image';
import Link from 'next/link';
import Pills from '../components/Pills';
import profileStyles from '../styles/Profile.module.css';
import { aboutMeDescription, twitterLink, socialIcons } from '../constants';


export default function About() {
  // Constants
  const data = Object.keys(aboutMeDescription).filter(item => item !== 'home').map((type, index) => ({ text: type, id: index + 1 }));

  // States
  const [descriptionType, updateDescriptionType] = useState('medium');

  // Logic
  const handleProfileTypeSelection = (data) => {
    updateDescriptionType(data?.text?.toLowerCase());
  }

  return (
    <div className="container page about">
      <PageSection title="About me">
        <div className={profileStyles['profile-page']}>
          <div className={profileStyles['image-area']}>
            <div className={profileStyles['avatar']}>
              <Image src="/images/profile-photo.jpg" alt="Usama's Profile photo" width={1934} height={2512} layout="intrinsic" />
              {/* <Image src="/images/profile-photo-usama.jpg" alt="Usama's Profile photo" width={120} height={120} /> */}
            </div>
          </div>
          <div className={profileStyles['text-area']}>
            <div className={profileStyles['type-of-description']}>
              <Pills pillData={data} onSelect={handleProfileTypeSelection} noUnselect />
            </div>
            {/* <p className={profileStyles['description']}>{aboutMeDescription[descriptionType]}</p> */}
            <p className={profileStyles['description']} dangerouslySetInnerHTML={{ __html: aboutMeDescription[descriptionType] }} />
            <div className={profileStyles['social']}>
              {socialIcons.map((icon, index) => (
                <Link key={index} href={icon?.url}>
                  <a target="_blank">
                    <Image src={`/social/${icon?.name}.svg`} alt={icon?.name} width={24} height={24} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection withSeparator>
        <div className={profileStyles['contact']}>
          <h2 className={profileStyles['contact-subheading']}>Want to get in touch?</h2>
          <p>The fastest way to get in touch with me is through <a href={twitterLink} target="_blank">twitter</a>. Otherwise you can drop me a line <a href="mailto: postusama@gmail.com" target="_blank">here</a>, and I’ll get in touch.</p>
          <p>Please add as much information as you can, it would reduce friction and we’ll be talking about important things sooner.</p>
        </div>
      </PageSection>
    </div>
  )
}
