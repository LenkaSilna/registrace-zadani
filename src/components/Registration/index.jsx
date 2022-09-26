import React, { useState } from 'react';
import './style.css';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidForm = () => {
    if (
      user.username === '' ||
      user.email === '' ||
      user.password === '' ||
      user.passwordConfirm == '' ||
      emailError ||
      passwordError
    ) {
      return false;
    } else {
      return true;
    }
  };

  const computeUsername = (email) => {
    return email.substring(0, email.indexOf('@'));
  };

  const handleChange = (event) => {
    let computedUsername = '';
    if (event.target.name === 'email') {
      if (!isValidEmail(event.target.value)) {
        setEmailError('Invalid email address');
      } else {
        setEmailError(null);
        computedUsername = computeUsername(event.target.value);
      }
    }
    if (
      (event.target.name === 'passwordConfirm' ||
        event.target.name === 'password') &&
      user.passwordConfirm !== ''
    ) {
      if (event.target.value !== user.password) {
        setPasswordError('Passwords do not match');
      } else {
        setPasswordError(null);
      }
    }
    if (event.target.name === 'email' && computedUsername) {
      setUser({
        ...user,
        email: event.target.value,
        username: computedUsername,
      });
    } else {
      setUser({ ...user, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    alert('You have successfully completed your registration.');
    setUser({ username: '', email: '', password: '', passwordConfirm: '' });
  };

  return (
    <div className="panel">
      <div className="user">
        <img src="../../assets/images/user.svg" alt="user" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input_wrapper">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
          />
          <div className="form_error">{emailError}</div>
        </div>
        <div className="input_wrapper">
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="input_wrapper">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="input_wrapper">
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm password"
            value={user.passwordConfirm}
            onChange={handleChange}
          />
          <div className="form_error">{passwordError}</div>
        </div>
        <div className="input_wrapper">
          <button disabled={!isValidForm()}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
