import Link from 'next/link'
import Button from '../components/Button'
import styles from '../styles/Banner.module.css'

export default function Banner(){
    return (
        <div className={styles.img_wrapper}>
            <h2>Welcome to Sliced!</h2>
            <span>Slice your recipes</span>
            <Link href='/#slicer'>
                <Button text='try it out!' />
            </Link>
        </div>
    )
}