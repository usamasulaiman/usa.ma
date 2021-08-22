import homeStyles from '../styles/Home.module.css';
import PageSection from '../components/PageSection';
import RecentProjects from '../components/RecentProjects';

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Usama Sulaiman</title>
        <meta name="description" content="Usama's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

     
      <main className="container home">
        <div className={homeStyles['small-intro']}>
          <h1 className="page-heading">Hey there! 👋🏼 </h1>
          <p className="page-heading-subtext">
            My name's Usama and I love stories. I also love to design and code, and find myself constantly in search of inspiration to create something new and hopefully tell a story with them.
          </p>
        </div>
        <PageSection withSeparator title="Currently working on">
          <RecentProjects />
        </PageSection>
      </main>

      
    </>
  )
}
