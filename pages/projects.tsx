import React from 'react';
import RecentProjects from '../components/RecentProjects'
import PageSection from '../components/PageSection';

export default function Projects() {
  return (
    <div className="container page projects">
      <PageSection title="Projects">
        <RecentProjects />
      </PageSection>
    </div>
  )
}
