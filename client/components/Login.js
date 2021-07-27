import React from 'react';
import Link from 'next/link'
import styles from '../styles/Login.module.css'

function Login() {
    return (
            <section className={styles.temp_block}>
                <h2>Sliced has a new login system in progress</h2>
                <span>To try out Sliced without saving your reipes, use the Slicer <Link href='/#slicer'>here</Link>. </span>
                    {/* <form
                        autoComplete='off'
                        className='Login_form'>
                        <fieldset>
                            <label className='hidden' htmlFor='email'></label>
                            <input name='email' type='text'/>
                        </fieldset>
                        <fieldset>
                            <label className='hidden' htmlFor='password'></label>
                            <input name='password' type='password' />
                        </fieldset>
                        <div className='form-login-button-wrapper'>
                            <Button disabled />
                            <Link href='/register'>
                                <span>Create an account</span>
                            </Link>
                        </div>

                    </form> */}
                </section>

    )
}


export default Login
