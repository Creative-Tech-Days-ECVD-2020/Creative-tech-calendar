import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>Login</h1>
      <input type="text" />
      <input type="password" />
    </>
  )
};

export default Login;