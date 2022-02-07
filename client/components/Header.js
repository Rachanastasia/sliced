import React from 'react'

import KnifeIcon from './elements/KnifeIcon'
import Link from 'next/link'

import styles from '../styles/modules/Header.module.css'

export function Header({ hideAbout }) {
  return (
    <header className={styles.header_wrapper}>
      <Link href="/" passHref>
        <h1 className={styles.title} aria-label="Sliced">
          <span>S</span>
          <KnifeIcon iconStyles={styles.knife_icon} />
          <span>iced</span>
        </h1>
      </Link>
      {!hideAbout && (
        <Link href="/about" passHref>
          <span className={styles.header_link}>About</span>
        </Link>
      )}
    </header>
  )
}
