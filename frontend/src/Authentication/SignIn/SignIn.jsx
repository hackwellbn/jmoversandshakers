// SignIn.jsx
import React, { useState } from 'react';
import './Signin.css';

const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    open: false
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const create = async (user) => {
    try {
      const response = await fetch('https://jmoversandshakers.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      return await response.json();
    } catch (err) {
      console.log('Error signing in:', err);
    }
  };

  const clickSubmit = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    };
    create(user).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: '', open: true });
      }
    });
  };

  return (
    <>
      <div className="SignIn-card">
        <div className="signin-body">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange('email')}
            required
          />
        </div>
        <div className="signin-body">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange('password')}
            required
          />
        </div>
        <button onClick={clickSubmit}>Sign In</button>
      </div>
      {values.open && (
        <div className="open-message">
          <p>Welcome Back!</p>
          <div>
            <p>Sign in successful.</p>
          </div>
          <div>
            <a href="/signup">
              <button>Sign Up</button>
            </a>
          </div>
        </div>
      )}
      {values.error && (
        <div className="error-message">
          <p>{values.error}</p>
        </div>
      )}
    </>
  );
};

export default SignIn;
