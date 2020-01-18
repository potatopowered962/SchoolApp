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
// import {globalStyles} from '../../styles/global'
import { Header } from 'react-native-elements';


export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container} >

        <Header centerComponent={{ text: 'MY TITLE', style: { color: '#000' } }}/>

        <View style={styles.classContainer}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) =>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}, {item.releaseYear}</Text>
              </View>
            }
            keyExtractor={({id}, index) => id}
          />
        </View>

        <View style={styles.classContainer}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) =>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}, {item.releaseYear}</Text>
              </View>
            }
            keyExtractor={({id}, index) => id}
          />
        </View>

      </View>
        
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cadefc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  classContainer: {
    flex: 1,
    paddingTop:20,
    borderWidth: 3,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#d5c455',
    borderColor: '#be8abf'
  },
  textContainer: {
    width: 200,
    height:50,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: 'rgb(100,50,50)',
    flex:1,
    alignItems: 'center',

  },
  text:{
    alignContent: 'center'
  },
  

});












