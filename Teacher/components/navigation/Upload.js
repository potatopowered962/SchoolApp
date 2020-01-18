import React, { Component, PureComponent } from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  Button,
  Alert,
  AppRegistry,
  TouchableOpacity,
  Image,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

import ImagePicker from "react-native-image-picker";


export default class Upload extends React.Component {
  state={photo:null,}
 handleChoosePhoto=()=> {
   const options = {noData :true };
   ImagePicker.launchImageLibrary(options,response=>{
     console.log("response",response);
     }
   )
 }
 render(){
 const {photo} = this.state;
    return (
    <View style={{  flex: 1,
      alignItems: 'center',
      justifyContent: 'center',}}>
      <View> 
        <Button
          title="Upload timetable"
          
          onPress={this.handleChoosePhoto.bind(this)}
        />
        </View>
      
    
    </View>

    )
}

}