import Link from 'next/link'
import Button from '../components/Button'
import styles from '../styles/Banner.module.css'

export default function Banner(){
    return (
        <div className={styles.banner_wrapper}>
            <div className={styles.banner_contents}> 
                <h2 className={styles.banner_title}>Welcome to Sliced!</h2>
                <span className={styles.banner_subtitle}>Scale your recipes</span>
                <Link href='/#slicer' className={styles.banner_button}>
                    <Button text='Try it out!' buttonStyle={styles.button_inverted}/>
                </Link>
            </div>
        </div>
    )
}