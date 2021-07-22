import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link'
import Button from './Button';

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');



  return (
    <section>
      <form>
        <fieldset>
          <label htmlFor='register-name'>Name</label>
          <input type='text' value={name} onChange={e => setName(e.target.value)} id='register-name' name='register-name' placeholder='Your name' />
        </fieldset>
        <fieldset>
          <label htmlFor='register-email'>Email</label>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} id='register-email' name='register-email' placeholder='test@test.com' />
        </fieldset>
        <fieldset>
          <label htmlFor='register-password'>Password</label>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} id='register-password' name='register-password' placeholder='test-password!' />
        </fieldset>
        <fieldset>
          <label htmlFor='register-repeat-password'>Repeat password</label>
          <input type='password' value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} id='register-repeat-password' name='register-repeat-password' placeholder='test-password!' />
        </fieldset>
        <div className='form-login-button-wrapper'>
          <Button />
          <Link href='/login'>
            <span>Already have an account?</span>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Register;
