import React, {useRef} from 'react'
import Button from '../Button'
import styles from '../../styles/Slicer.module.css'



export default function SelectScaleByAmount({constant, setConstant}){
const options = [
    {
    label: 'x 1/4',
    constant: 0.25,
    ref: useRef(0.25)
    },
    {
    label: 'x 1/3',
    constant: 0.3333,
    ref: useRef(0.33333)
    },
    {
    label: 'x 1 1/2',
    constant: 1.5,
    ref: useRef(1.5)
    },
    {
    label: 'x 3',
    constant: 3,
    ref: useRef(3)
    },
]
    return (
        <div className={styles.select_amount_wrapper}>
            {options.map(o => <Button buttonStyle={styles.button_inverted} textStyle={styles.constant_button_text} key={o.constant} ref={o.ref} onClick={()=>setConstant(o.ref.current)} text={o.label} />)}
        </div>
    )
}