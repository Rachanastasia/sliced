import React from 'react'
import styles from '../styles/ect.module.css'

export default function Button({onClick, text='submit'}){
    return (
        <button onClick={onClick} className={styles.button}>
            <span>{text}</span>
        </button>
    )
}