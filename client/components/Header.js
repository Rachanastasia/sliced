import React from 'react';
import { RiKnifeLine } from 'react-icons/ri'
import KnifeIcon from './KnifeIcon';
import Link from 'next/link'
import styles from '../styles/Header.module.css'

function Header() {
    return (
        <header className={styles.header_wrapper}>
            <Link href='/' passHref>
                    <h1 className={styles.title} aria-label='Sliced'>
                        <span>S</span><KnifeIcon iconStyles={styles.KnifeIcon} /><span>iced</span>
                    </h1>
            </Link>

                <ul className={styles.menu_wrapper}>
                    <li className={styles.menu_item}>
                        <Link href='/#about' passHref>
                            <span>about</span>
                        </Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link href='/login' passHref>
                            <span>login</span>
                        </Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link href='/register' passHref>
                            <span>register</span>
                        </Link>
                    </li>
                </ul>
        </header >
    )

}

export default Header;
