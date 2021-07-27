import React from 'react'
import styles from '../styles/ect.module.css'

export default function Button({onClick, text='submit', buttonStyle=styles.button, textStyle=undefined, disabled}){
    buttonStyle = disabled ? `${buttonStyle} ${styles.button_disabled}` : buttonStyle
    textStyle = `${textStyle} ${styles.button_text}`
    return (
        <button onClick={onClick} className={buttonStyle} disabled={disabled}>
            <span className={textStyle}>{text}</span>
        </button>
    )
}