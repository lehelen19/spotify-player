import React from 'react';

const AUTH_URL = `https://accounts.spotify.com/authorize?
client_id=3d8c865e52ed4544b848fe4de836158d&
response_type=code&
redirect_uri=http://localhost:3000&
scope=streaming%20user-read-email%20user-read-private%20user-library-read%user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

const Login = () => {
  return (
    <a className="login-btn" href={AUTH_URL}>
      Login with Spotify
    </a>
  );
};

export default Login;
