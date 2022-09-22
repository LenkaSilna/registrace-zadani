import React, { useState } from 'react';
import './registration.css';

const Registration = () => {
  const [user, setUser] = useState({
    username: 'user',
    email: 'email',
    password: 'password',
    passwordConfirm: 'passwordConfirm',
  });

  const rightUser =
    user.username.length <= 0
      ? user.username
      : user.email.substring(0, user.email.indexOf('@'));

  return (
    <>
      <form>
        <div className="input">
          <input
            size="35"
            maxLength="35"
            placeholder="user"
            type="text"
            value={rightUser}
            onChange={(event) => {
              setUser({ ...user, username: event.target.value });
            }}
          ></input>
        </div>
        <div className="input">
          <input
            size="35"
            maxLength="35"
            placeholder="email"
            type="email"
            pattern="@"
            title="adresa musí obsahovat @ "
            value={user.email}
            onChange={(event) => {
              setUser({ ...user, email: event.target.value });
            }}
          ></input>
        </div>
        <div className="input">
          <input
            size="35"
            maxLength="35"
            placeholder="password"
            type="text"
            value={user.password}
            onChange={(event) => {
              setUser({ ...user, password: event.target.value });
            }}
          ></input>
        </div>
        <div className="input">
          <input
            size="35"
            maxLength="35"
            placeholder="passwordConfirm"
            type="text"
            value={user.passwordConfirm}
            onChange={(event) => {
              setUser({ ...user, passwordConfirm: event.target.value });
            }}
          ></input>
        </div>
        <button
          type="submit"
          onClick={() => {
            console.log({ ...user });
          }}
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Registration;
