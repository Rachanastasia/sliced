import Link from 'next/link'
import styles from '../styles/Login.module.css'

export default function TempLoginRegistrationWarning(){
    return (
        <div className={styles.warning_wrapper}>
            <span className={styles.warning_text}>Sliced has a new login and registration in progress. To scale recipes without creating an account, use <Link href='/#slicer'><span className={styles.button_link}>the Slicer</span></Link> on the home page.</span>
        </div>
    )
}