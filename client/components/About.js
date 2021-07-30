import React from 'react'
import Link from 'next/link'
import styles from '../styles/About.module.css'

export default function About(){

    return (
        <div id='about' className={styles.about_wrapper}>
            <h2 className={styles.about_subtitle}>About</h2>
  
            <p className={styles.about_p}>With Sliced, you can <em>half</em>, <em>quarter</em>, or <em>two and a half</em> your recipes. Just copy one of your favorite recipes and paste it in the textbox. Use the slider to scale the ingredient amounts. It works by parsing your recipe&#39;s ingredients and splitting the ingredient name, amount, and unit. To make measuring easier, some units -- including teaspoons, tablespoons, and cups -- are scaled up and down with the amount.</p>
            <p className={styles.about_p}>I developed Sliced during the pandemic when I was always cooking for one or two. I kept asking Siri to make calculations then having her convert those to smaller units. I saw recipe sites that had tools to scale up recipes, but I didn&#39;t see any tools to scale down recipes. I made Sliced to help people scale their recipes all at once and have that conversion at hand. I hope Sliced helps people adapt their recipes to the amount of food they want to make.</p>
            <p className={`${styles.about_p} ${styles.about_name}`}> - <Link passHref href='https://github.com/rachelrly'>Rachel Reilly</Link>, Software Engineer</p>
        </div>
    )
}

//the app, the measurements, the creator