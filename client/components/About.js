import React from 'react'
import styles from '../styles/About.module.css'

export default function About(){

    return (
        <div id='about' className={styles.about_wrapper}>
            <h2 className={styles.about_subtitle}>What is Sliced?</h2>
            <p className={`${styles.about_p} ${styles.margin_bottom}`}>Sliced was conceptualized during the pandemic. I had a lot of time to cook, but I was living alone. To avoid food waste</p>
            <p className={`${styles.about_p} ${styles.margin_bottom}`}>Sliced is an app for scaling your recipes. It scales the ingredients up and down between 1/4 and 4 times the original amount. Common units, including as tablespoons, teaspoons, and cups scale with the amount.</p>

            <h2 className={styles.about_subtitle}>How can I use Sliced?</h2>
            <p className={styles.about_p}>Just type out one of your recipes or copy and paste it below. The slider beneath the textbox lets you select the amount to scale.</p>


            <h2>How precise are the Sliced conversions?</h2>

            <h2>What are the limitations of Sliced recipe conversion?</h2>
        </div>
    )
}

//the app, the measurements, the creator