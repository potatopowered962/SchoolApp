import React from 'react';
import Navigator from './LoginStack';
import Amplify from 'aws-amplify';
import amplify from './YOUR-PATH-TO/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure(amplify);

export default withAuthenticator(App) {
  return (
    <Navigator/>
  );
}

