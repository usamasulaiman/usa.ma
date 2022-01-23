import React from 'react'
import PageDescription from '../components/PageDescription'
import PageSection from '../components/PageSection'

export default function Stories() {
  const pageDescription = "This is the dream where I publish fruits of my imagination. New and old alike. Enjoy!";
  
  return (
    <div className="container page stories">
      <PageSection title="Stories">
        <PageDescription text={pageDescription} />
      </PageSection>
    </div>
  )
}
