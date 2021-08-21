import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Header from '../Header/index'
import homeStyles from '../../styles/Home.module.css'
import headerStyles from '../Header/Header.module.css'

function Wrapper(props) {
  const { children } = props;

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:ital,wght@0,400;0,700;1,300&display=swap"
          rel="stylesheet"
        />
        <title>Usama Sulaiman</title>
        <meta name="description" content="Usama's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header className={`container ${homeStyles['main-header']}`}>
          <Header />
        </header>
        {children}
        <footer className={homeStyles.footer}>
          <a
            href="https://usamasulaiman.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check former website
          </a>
        </footer>
      </div>
    </>
  )
}

Wrapper.propTypes = {

}

export default Wrapper

