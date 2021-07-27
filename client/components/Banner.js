import Link from 'next/link'
import Button from '../components/Button'
import styles from '../styles/Banner.module.css'

export default function Banner(){
    return (
        <div className={styles.banner_wrapper}>
            <div className={styles.banner_contents}> 
                <h2 className={styles.banner_title}>Scale your recipes with Sliced</h2>
                <Link href='/#slicer' className={styles.banner_button}>
                    <a>
                    <Button text='Try it out!' buttonStyle={styles.button_inverted}/>
                    </a>
                </Link>
            </div>
        </div>
    )
}