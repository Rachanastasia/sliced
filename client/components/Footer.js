import React from 'react'
import {RiLinkedinLine, RiGithubLine} from 'react-icons/ri'
import {AiOutlineMedium} from 'react-icons/ai'


export default function Footer(){
    return (
        <footer>
            <p>Rachel Reilly  |  2021</p>
            
            <a className='footer-button' href='https://www.linkedin.com/in/rachel-a-reilly/'>
              <RiLinkedinLine />
            </a>
            <a className="footer-button" href='https://rachanastasia.medium.com/'>
               <AiOutlineMedium/>
            </a>
            <a className='footer-button' href='https://github.com/Rachanastasia'>
                <RiGithubLine />
            </a>
        </footer>
    )
}