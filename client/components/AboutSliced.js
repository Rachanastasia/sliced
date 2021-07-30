import React, {Fragment} from 'react'
import styles from '../styles/modules/AboutSliced.module.css'



export default function AboutSliced(){

    return(
        <div className={styles.about_wrapper}>
            <h2 className='title'>Welcome to Sliced!</h2>
            <span className={styles.subtitle}>Scale your recipes</span>

            <span className={styles.about_text}>Copy and paste one of your favorite recipes or view the sample recipe below.</span>
        </div>
    )
}