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
        setAccessToken(res.data.access_token);
        setRefreshToken(res.data.refresh_token);
        setExpiresIn(res.data.expires_in);
        // Remove 'code' from URL
        window.history.pushState({}, null, '/');
      })
      .catch((error) => {
        if (!error.response) {
          console.log('network error');
        } else {
          console.log('other error');
        }
        window.location = '/';
      });
  }, [code]);

  return accessToken;
};

export default useAuth;
