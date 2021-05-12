import React, { useRef } from 'react';
import { Button, TextField } from '@material-ui/core';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <>
      <h2>sign up</h2>
      <form>
        <TextField label="Email" ref={emailRef} type="email" required />
        <TextField label="Password" ref={passwordRef} type="password" required />
        <TextField label="Password Confirm" ref={passwordConfirmRef} type="password" required />
        <Button type="submit">Sign Up</Button>
      </form>
      <div>
        already have an account? login
      </div>
    </>
  )
}

export default Signup;
