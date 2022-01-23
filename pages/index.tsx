import homeStyles from '../styles/Home.module.css';
import PageSection from '../components/PageSection';
import RecentWork from '../components/RecentWork';
import PageDescription from '../components/PageDescription';

export default function Home() {
  const pageDescription = "My name's Usama and I love stories. I also love to design and code, and find myself constantly in search of inspiration to create something new and hopefully tell a story with them.";
  
  return (
    <>
      <main className="container page home">
        <div className={homeStyles['small-intro']}>
          <h1 className="page-heading">Hey there! 👋🏼 </h1>
          <PageDescription text={pageDescription} />
        </div>
        <PageSection withSeparator title="Currently working on">
          <RecentWork />
        </PageSection>
      </main>      
    </>
  )
}
