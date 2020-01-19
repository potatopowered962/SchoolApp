import React, { Component ,useState} from 'react';
import { 
  StyleSheet,
  Text,
  View ,
  Button,
  FlatList,
  ActivityIndicator,

} from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';


export default class Home extends React.Component {

  render(){

    return(
      <View style={styles.container} >


        <View style={styles.classContainer}>

          <View style={styles.infoContainer}>
            <Text style={styles.text}>Class: </Text>
            <Text style={styles.textImportant}>JC2 H2 Physics Tutorial</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.text}>Time: </Text>
            <Text style={styles.textImportant}>10:45 AM</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.text}>Venue: </Text>
            <Text style={styles.textImportant}>Tutorial Room C3-3</Text>
          </View>

        </View>

        <View style={styles.classContainer}>

          <View style={styles.infoContainer}>
            <Text style={styles.text}>Upcoming Examination: </Text>
            <Text style={styles.textImportant}>H2 Mathematics</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.text}>Date: </Text>
            <Text style={styles.textImportant}>2 July 2020</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.text}>Venue: </Text>
            <Text style={styles.textImportant}>Hall</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.text}>Seat Number: </Text>
            <Text style={styles.textImportant}>D-93</Text>
          </View>

        </View>

      </View>
        
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  classContainer: {
    flex: 1,
    paddingVertical: 20,
    borderWidth: 3,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#d5c455',
    borderColor: '#be8abf',
    marginVertical: 40,
    
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginHorizontal: 2,
  },
  textImportant: {
    fontSize: 16,
    marginHorizontal: 2,
    fontWeight: 'bold',
  }
  

  

});












