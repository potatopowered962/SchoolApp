import React from 'react';
import Navigator from './LoginStack';
// import Amplify from 'aws-amplify';
// //import amplify from './YOUR-PATH-TO/aws-exports';
// import {Authenticator} from 'aws-amplify-react-native';
// import awsconfig from '../aws-exports'
// Amplify.configure({
//   ...awsconfig,
//   Analytics: {
//     disabled: true,
//   },
// })


export default function App(){
  return (
    <>
      <Navigator/>
      {/* <Authenticator usernameAttributes="email" /> */}
    </>
  );
}