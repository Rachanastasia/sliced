import React from 'react'
import styles from '../styles/ect.module.css'

export default function Button({onClick, text='submit', buttonStyle=styles.button, textStyle=null}){
    return (
        <button onClick={onClick} className={buttonStyle}>
            <span className={textStyle}>{text}</span>
        </button>
    )
}