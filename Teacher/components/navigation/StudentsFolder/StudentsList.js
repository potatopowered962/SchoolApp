import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';


export default function Students({ navigation }) {

  const [event, setEvent] = useState([
    { name: 'Math Olympiad Elective', number: '26', students: 'Alex Alec 19S101, Ben Tom 19S101, Carl Anderson 19S101', id: '1' },
    { name: 'VIA Food Drive', number: '21', students: 'Hendrix, Maverick, Dakota, Drake', id: '2' },
    { name: 'GP Day', number: '175', students: 'Holden, Dallas, Austin, Cash, Justice', id: '3' },
    { name: 'Math Day Elective', number: '12', students: 'Austin, Cash, Justice', id: '4' },
    { name: 'Chemistry Elective', number: '32', students: 'Booker, Poe, Huck', id: '5' },
    { name: 'Econmics Elective', number: '21', students: 'Jericho, West', id: '6' },
    { name: 'Physics Elective', number: '34', students: 'Tennessee, Langston', id: '7' },
    { name: 'Literature Day Elective', number: '4', students: 'Conrad, Roy, Rick, Demosthenes', id: '8' }
  ]);

  return (
    <View style={styles.container}>

      <FlatList 
        keyExtractor={(item) => item.id} 
        data={event} 

        renderItem={({ item }) => ( 
          <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('StudentsPage', item)}>
            <Text style={styles.cardHeader}>{item.name}</Text>
            <Text style={styles.studentNumber}>{item.number} students</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 20,
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
