import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [values, setValues] = useState({
    name: '',
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
      console.log(err);
    }
  };

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
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
      <div className="SignUp-card">
        <div className="signup-body">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Username"
            value={values.name}
            onChange={handleChange('name')}
            required
          />
        </div>
        <div className="signup-body">
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
        <div className="signup-body">
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
        <button onClick={clickSubmit}>Sign Up</button>
      </div>
      {values.open && (
        <div disableBackdropClick={true}>
          <p>New Account</p>
          <div>
            <p>New account successfully created.</p>
          </div>
          <div>
            <a href="/signin">
              <button>Sign In</button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
