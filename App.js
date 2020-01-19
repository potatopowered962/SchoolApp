import React, { useState } from 'react';
import Navigator from './LoginStack';
//import Amplify from 'aws-amplify';
//import amplify from './YOUR-PATH-TO/aws-exports';
//Amplify.configure(amplify);
// import {Authenticator} from 'aws-amplify-react-native';
// import awsconfig from ''
// Amplify.configure({
//   ...awsconfig,
//   Analytics: {
//     disabled: true,
//   },
// })


//Just some code for text fonts
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
const getFonts = () => Font.loadAsync({
  'dosis-regular': require('./assets/fonts/Dosis-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'bebas-neue': require('./assets/fonts/BebasNeue-Regular.ttf'),
});

export default function App(){
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );

  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }
}
