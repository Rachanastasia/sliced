import React from 'react';
import Link from 'next/link'
import Button from './Button'
import TempLoginRegistrationWarning from './TempLoginRegistrationWarning'
import styles from '../styles/Login.module.css'

function Login() {
    return (
            <section className={styles.outer_wrapper}>
                    <form
                        autoComplete='off'
                        className={styles.form_wrapper}>
                        <fieldset>
                            <label  htmlFor='email'>email</label>
                            <input name='email' type='text'/>
                        </fieldset>
                        <fieldset>
                            <label  htmlFor='password'>password</label>
                            <input name='password' type='password' />
                        </fieldset>
                        <TempLoginRegistrationWarning />
                        <div className={styles.button_wrapper}>
                            <Button disabled buttonStyle={styles.button} disabled/>
                            <Link href='/register'>
                                <span className={styles.button_link}>Create an account</span>
                            </Link>
                        </div>

                    </form>
                </section>

    )
}


export default Login
