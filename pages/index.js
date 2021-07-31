import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Usama Sulaiman</title>
        <meta name="description" content="Usama's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Usama Sulaiman
        </h1>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://usamasulaiman.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check former website
        </a>
      </footer>
    </div>
  )
}
