import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post('http://localhost:3001/login', {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        // Remove 'code' from URL
        window.history.pushState({}, null, '/');
      })
      .catch((error) => {
        if (!error.response) {
          console.log('network error from logging in');
        } else {
          console.log('other error from logging in');
        }
        window.location = '/';
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    // Refresh if token is close to expiration
    axios
      .post('http://localhost:3001/refresh', {
        refreshToken,
      })
      .then((res) => {
        // setAccessToken(res.data.access_token);
        // setRefreshToken(res.data.refresh_token);
        // setExpiresIn(res.data.expires_in);
        // // Remove 'code' from URL
        // window.history.pushState({}, null, '/');
      })
      .catch((error) => {
        if (!error.response) {
          console.log('network error from refresh');
        } else {
          console.log('other error from refresh');
        }
        window.location = '/';
      });
  }, [refreshToken, expiresIn]);

  return accessToken;
};

export default useAuth;
