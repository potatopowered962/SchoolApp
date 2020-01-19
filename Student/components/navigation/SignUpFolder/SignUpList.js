import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

 import { getSignUpButton } from "../../../../backend test/tempbacktest";

export default function SignUpList({ navigation }) {
  // var tempint = 9;
  // var temparray = [
  //   { name: 'This is all placeholder data', description: 'fggfgfgfgsd', id: '1' },
  //   { name: 'placeholder event', description: 'with lorem ipsumthe ', id: '2' },
  //   { name: 'Careers And Higher Education Fest', description: 'lelorem ipsumtte, content', id: '3' },
  //   { name: 'Math Elective', description: 'years, ,  hereccident', id: '4' },
  //   { name: 'Chemistry Elective', description: 'are gipsumoing  Ipsum, you', id: '5' },
  //   { name: 'Econmics Elective', description: 'ipsumipsumipsum', id: '6' },
  // ];
  // temparray.push({ name: 'tertrtetert', description: 'ryry ipsum ock', id: '8' })
  // temparray.push({ name: 'ehbrehr', description: 'ryry efe ock', id: '9' })

  // <getSignUpButton/>

  /*
  for (var i = 0; i < tempint; i++) {
    var n = i.toString()
    temparray.push({ name: a[i].name(), description: a[i].description(), id:n});
  }
  */


  
  /*
  const [event, setEvent] = useState([
    { name: 'This is all placeholder data', description: 'fggfgfgfgsd', id: '1' },
    { name: 'placeholder event', description: 'with lorem ipsumthe ', id: '2' },
    { name: 'Careers And Higher Education Fest', description: 'lelorem ipsumtte, content', id: '3' },
    { name: 'Math Elective', description: 'years, ,  hereccident', id: '4' },
    { name: 'Chemistry Elective', description: 'are gipsumoing  Ipsum, you', id: '5' },
    { name: 'Econmics Elective', description: 'ipsumipsumipsum', id: '6' },
    { name: 'Physics Elective', description: '2000 ipsum ock', id: '7' },
    { name: 'tertrtetert', description: 'ryry ipsum ock', id: '8' }
  ]);
  */

 const [event, setEvent] = useState(getSignUpButton())

  return (
    <View style={styles.container}>

      <FlatList 
        keyExtractor={(item) => item.id} 
        data={event} 

        renderItem={({ item }) => ( 
          <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('SignUpPage', item)}>
            <Text style={styles.cardHeader}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f1f1f1',
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 2,
    marginTop: 24,
    padding: 30,
    backgroundColor: '#f1f1f6',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333366',
  },
  cardHeader: {
    fontSize: 23,
    marginBottom: 20,
  },
  
});
