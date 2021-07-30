import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link'
import Button from './Button'
import styles from '../styles/Login.module.css'


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');



  return (
      <section className={styles.outer_wrapper}>
      <form className={styles.form_wrapper}>
        <fieldset>
          <label htmlFor='register-name'>Name</label>
          <input type='text' value={name} onChange={e => setName(e.target.value)} id='register-name' name='register-name' />
        </fieldset>
        <fieldset>
          <label htmlFor='register-email'>Email</label>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} id='register-email' name='register-email' />
        </fieldset>
        <fieldset>
          <label htmlFor='register-password'>Password</label>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} id='register-password' name='register-password' />
        </fieldset>
        <fieldset>
          <label htmlFor='register-repeat-password'>Repeat password</label>
          <input type='password' value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} id='register-repeat-password' name='register-repeat-password' />
        </fieldset>
        <div className={styles.button_wrapper}>
          <Button buttonStyle={styles.button} disabled/>
          <Link href='/login' passHref>
            <span className={styles.button_link}>Already have an account?</span>
          </Link>
        </div>
      </form>
    </section>
  )
    }

export default Register;
