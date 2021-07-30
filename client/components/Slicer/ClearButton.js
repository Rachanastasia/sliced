import React from 'react'
import styles from '../../styles/modules/Slicer.module.css'


export default function ClearButton({clearInput}){
    return (
    <button className={styles.clear_button} onClick={clearInput}>
        <span>clear</span>
    </button>)
}