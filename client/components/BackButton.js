import React from 'react'
import { VscReply } from 'react-icons/vsc'


export default function BackButton({goBack}){
return (
    <div className='goBack_wrapper'>
        <button
            className='goBack round'
            onClick={goBack}
            aria-label="Go back to the previous page">
            <VscReply className='arrow round-child' />
        </button>
    </div>
)
}