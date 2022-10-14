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
        console.log(res.data);
        window.history.pushState({}, null, '/');
      })
      .catch((error) => {
        if (!error.response) {
          console.log('network error');
        } else {
          console.log('other error');
        }
      });
  }, [code]);
};

export default useAuth;
