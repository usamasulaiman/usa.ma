import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import t from '../../lib/translator';
import NavItems from '../../lib/navItems';
import headerStyles from './Header.module.css'

function NavItem(props) {
  console.log('props passed', props)
  return (
    <li className={headerStyles['nav-item']}>
      <Link href={props.link}>
        <a className="nav-link">{t(props.name)}</a>
      </Link>
    </li>
  )
}

function Header(props) {

  return (
    <>
      <Link href="/">
        <a className="nav-link">
          <h1 className={headerStyles.logo}>
          Usama <span>M.</span><br/>Sulaiman
          </h1>
        </a>
      </Link>
        
      <nav className={headerStyles.navigation}>
        <ul className={headerStyles['nav-items']}>
          {NavItems.map(navItem => (
            <NavItem key={navItem.id} {...navItem} />
          ))}
        </ul>
      </nav>
    </>
  )
}

Header.propTypes = {

}

export default Header

