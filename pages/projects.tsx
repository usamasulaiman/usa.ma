import React from 'react';
import RecentProjects from '../components/RecentProjects'
import PageSection from '../components/PageSection';
import PageDescription from '../components/PageDescription';

export default function Projects() {
  const pageDescription = "List of currrent and past projects. These range from tech to design to anything that is catching my fancy at the moment. ";
  
  return (
    <div className="container page projects">
      <PageSection title="Projects">
        <PageDescription text={pageDescription} />
        <RecentProjects />
      </PageSection>
    </div>
  )
}
