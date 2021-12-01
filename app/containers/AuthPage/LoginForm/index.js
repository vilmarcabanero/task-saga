import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Close } from '@material-ui/icons';
import {
  Button as MUIButton,
  TextField,
  CircularProgress,
  Card,
} from '@material-ui/core';
import { Container } from './styles';
import { validateLogin } from '../validator';

export default function LoginForm(props) {
  const { setIsRegistered, login, getUser, userData, history } = props;
  const [loginUserData, setLoginUserData] = useState({
    email: '',
    password: '',
  });
  // const { loginUserData } = authPageState;
  const [error, setError] = useState('Invalid password.');
  const [isValid, setIsValid] = useState(true);
  const [doneLoggingIn, setDoneLoggingIn] = useState(true);

  const clearError = () => {
    setTimeout(() => {
      setIsValid(true);
    }, 4000);
  };

  const handleLogin = e => {
    e.preventDefault();
    const validateSuccess = validateLogin({
      loginUserData,
      setIsValid,
      setError,
    });

    if (validateSuccess) {
      login({
        loginUserData,
        setIsValid,
        setError,
        setDoneLoggingIn,
        history,
      });
    }

    clearError();
    // console.log(loginUserData);
    getUser();
    // console.log('userData', userData);
  };

  return (
    <Container>
      <Card className="login-card">
        <form onSubmit={handleLogin} className="form">
          {!userData.firstName ? (
            <h2 className="title">Login </h2>
          ) : (
            <h2 className="title"> {userData.firstName}</h2>
          )}
          <div className="input-groups pb-3 mt-3">
            <TextField
              type="text"
              label="Email address"
              fullWidth
              style={{ paddingBottom: '1rem' }}
              id="standard-basic-email"
              className="pb-3"
              value={loginUserData.email}
              onChange={e =>
                setLoginUserData({
                  ...loginUserData,
                  email: e.target.value,
                })
              }
            />

            <TextField
              type="password"
              label="Password"
              fullWidth
              id="standard-basic-password"
              style={{ paddingBottom: '1rem' }}
              value={loginUserData.password}
              onChange={e =>
                setLoginUserData({
                  ...loginUserData,
                  password: e.target.value,
                })
              }
            />

            <MUIButton style={{ marginBottom: '1rem' }}>
              Forgot password?
            </MUIButton>
            <MUIButton
              variant="contained"
              color="primary"
              type="submit"
              style={{ width: '100%', marginBottom: '1rem' }}
            >
              {doneLoggingIn ? (
                'Login'
              ) : (
                <CircularProgress size={24} style={{ color: '#fff' }} />
              )}
            </MUIButton>

            <MUIButton
              className="not-yet-registered"
              style={{ marginBottom: '1rem' }}
              onClick={() => setIsRegistered(false)}
            >
              Not yet registered?
            </MUIButton>
          </div>
          {!isValid && (
            <div className="error-container">
              <span className="error">{error}</span>
              <Close className="close-icon" onClick={() => setIsValid(true)} />
            </div>
          )}
        </form>
      </Card>
    </Container>
  );
}

LoginForm.propTypes = {
  history: PropTypes.func,
  getUser: PropTypes.func,
  userData: PropTypes.object,
  login: PropTypes.func,
  setIsRegistered: PropTypes.func,
};
