import React from 'react'

import styles from '../styles/modules/About.module.css'

export function About() {
  return (
    <div className={styles.about_wrapper}>
      <div className={styles.about_content}>
        <h2 className={styles.about_subtitle}>About Sliced</h2>
        <p className={styles.about_p}>
          I first conceptualized Sliced at the beginning of the pandemic when I
          was cooking for 2 and making do with what I had in the kitchen most
          days. To convert recipes to the lowest common denominator of what I
          had on-hand, I kept asking Siri{' '}
          <em>whats half of 1/3 cups in tablespoons</em>. Since these
          calculations are more quickly done by a computer, I created Sliced to
          scale down amounts and units, and provide a visual reference of the
          new ingredients.
        </p>
        <span className={styles.about_byline}>
          - Rachel Reilly
          <span className={styles.about_byline_tag}>, creator of Sliced</span>
        </span>
      </div>
    </div>
  )
}
