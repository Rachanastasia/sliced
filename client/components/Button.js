import React from 'react'
import styles from '../styles/ect.module.css'

export default function Button({onClick, text='submit', buttonStyle=styles.button, textStyle=null, disabled}){
    buttonStyle = disabled ? `${buttonStyle} ${styles.button_disabled}` : buttonStyle
    return (
        <button onClick={onClick} className={buttonStyle} disabled={disabled}>
            <span className={textStyle}>{text}</span>
        </button>
    )
}