// src/components/LinkedInLoginButton.js
import React, { useEffect, useState } from 'react';
import { useScript } from 'react-linkedin-sdk';

const LinkedInLoginButton = ({ handleSuccess, handleFailure }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const [loaded, error] = useScript({
    onLoad: () => {
      // LinkedIn SDK has been loaded
      console.log('LinkedIn SDK has been loaded');
      setScriptLoaded(true);
    },
    onError: () => {
      // Error occurred while loading the LinkedIn SDK
      console.error('Error loading LinkedIn SDK');
    },
    authorization: true, // Include this option to enable authorization features
  });

  useEffect(() => {
    if (scriptLoaded && window.IN) {
      // Initialize the LinkedIn SDK after it has been loaded
      window.IN.Event.on(window.IN, 'auth', handleLinkedInAuth);
    }
  }, [scriptLoaded]);

  const handleLinkedInLogin = () => {
    if (scriptLoaded && window.IN) {
      window.IN.User.authorize(() => {
        window.IN.API.Profile('me').fields(['id', 'firstName', 'lastName', 'pictureUrl', 'publicProfileUrl']).result(handleSuccess).error(handleFailure);
      });
    }
  };

  const handleLinkedInAuth = () => {
    // Handle authentication events
    console.log('LinkedIn authentication event');
  };

  return (
    <button onClick={handleLinkedInLogin} disabled={!scriptLoaded || error}>
      Log in with LinkedIn
    </button>
  );
};

export default LinkedInLoginButton;
