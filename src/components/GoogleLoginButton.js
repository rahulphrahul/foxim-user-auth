import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ handleSuccess, handleFailure }) => {
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    >
      Log in with Google
    </GoogleLogin>
  );
};

export default GoogleLoginButton;
