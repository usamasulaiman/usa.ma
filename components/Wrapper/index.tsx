import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import Header from '../Header/index';
import homeStyles from '../../styles/Home.module.css';

function Wrapper(props) {
  const { children } = props;
  const router = useRouter();
  const routeArray = router?.pathname?.split('/');
  const shouldShowPageHeader = routeArray?.length === 2;

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Yeseva+One&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300&display=swap"
          rel="stylesheet"
        />
        <title>Usama Sulaiman</title>
        <meta name="description" content="Usama's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="outer-wrapper">
        {shouldShowPageHeader && (
          <header className={`container ${homeStyles['main-header']}`}>
            <Header />
          </header>
        )}
        {/* {routeArray.length > 2 ? (
          <div className={`${homeStyles['inner-page']} ${routeArray[1]}`}>{children}</div>
        ) : ( */}
          <>{children}</>
        {/* )} */}
        <footer className="footer">
          <a
            href="https://usamasulaiman.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright @ Usama Sulaiman 2021
          </a>
        </footer>
      </div>
    </>
  )
}

Wrapper.propTypes = {

}

export default Wrapper

