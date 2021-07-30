import React from 'react';
import Link from 'next/link'
import Button from './Button'
import TempLoginRegistrationWarning from './TempLoginRegistrationWarning'
import styles from '../styles/modules/Login.module.css'

function Login() {
    return (
            <section className={styles.outer_wrapper}>
                    <form
                        autoComplete='off'
                        className={styles.form_wrapper}>
                        <fieldset>
                            <label  htmlFor='email'>Email</label>
                            <input name='email' type='text'/>
                        </fieldset>
                        <fieldset>
                            <label  htmlFor='password'>Password</label>
                            <input name='password' type='password' />
                        </fieldset>
                        <TempLoginRegistrationWarning />
                        <div className={styles.button_wrapper}>
                            <Button buttonStyle={styles.button} disabled/>
                            <Link href='/register' passHref>
                                <span className={styles.button_link}>Create an account</span>
                            </Link>
                        </div>

                    </form>
                </section>

    )
}


export default Login
