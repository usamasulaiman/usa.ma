import homeStyles from '../styles/Home.module.css';
import PageSection from '../components/PageSection';
import RecentWork from '../components/RecentWork';
import PageDescription from '../components/PageDescription';
import Callout from '../components/Callout';
import { aboutMeDescription, colors } from '../constants';

export default function Home() {  
  return (
    <>
      <main className="container page home">
        <div className={homeStyles['small-intro']}>
          <h1 className="page-heading">Hey there! 👋🏼 </h1>
          <PageDescription text={aboutMeDescription.home} isHTML />
          <Callout emoji="🧑🏽‍💻" color={colors.YELLOW}>
            <p>If you are a recruiter or want to hire me for freelance work, you can find my resume <a href='./resume' >here</a> and <a href="mailto:postusama@gmail.com">reach out to me</a> on my 📭</p>
          </Callout>
        </div>
        <PageSection withSeparator title="Currently working on">
          <RecentWork />
        </PageSection>
      </main>      
    </>
  )
}
