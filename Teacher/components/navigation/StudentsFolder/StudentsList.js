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
    { name: 'GP Day', students: 'Alex Alec 19S101, Ben Tom 19S101, Carl Anderson 19S101', id: '1' },
    { name: 'Placeholder event', students: 'Hendrix, Maverick, Dakota, Drake', id: '2' },
    { name: 'Math Olympiad Elective', students: 'Holden, Dallas, Austin, Cash, Justice', id: '3' },
    { name: 'Math Elective', students: 'Austin, Cash, Justice', id: '4' },
    { name: 'Chemistry Elective', students: 'Booker, Poe, Huck', id: '5' },
    { name: 'Econmics Elective', students: 'Jericho, West', id: '6' },
    { name: 'Physics Elective', students: 'Tennessee, Langston', id: '7' },
    { name: 'tertrtetert', students: 'Conrad, Roy, Rick, Demosthenes', id: '8' }
  ]);

  return (
    <View style={styles.container}>

      <FlatList 
        keyExtractor={(item) => item.id} 
        data={event} 

        renderItem={({ item }) => ( 
          <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('StudentsPage', item)}>
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
