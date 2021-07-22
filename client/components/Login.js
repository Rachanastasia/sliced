import React from 'react';
import Link from 'next/link'
import Button from './Button';

function Login() {
    return (
            <section className='Login_section'>
                    <form
                        autoComplete='off'
                        className='Login_form'>
                        <fieldset>
                            <label className='hidden' htmlFor='email'></label>
                            <input name='email' type='text' placeholder='test@gmail.com' />
                        </fieldset>
                        <fieldset>
                            <label className='hidden' htmlFor='password'></label>
                            <input name='password' type='password' placeholder='test-password' />
                        </fieldset>
                        <div className='form-login-button-wrapper'>
                            <Button />
                            <Link href='/register'>
                                <span>Create an account</span>
                            </Link>
                        </div>

                    </form>
                </section>

    )
}


export default Login
