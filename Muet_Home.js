
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Muet_Subjects from './Muet_Subjects';

const Stack = createStackNavigator();

const Muet_Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[styles.touchableBlock, { backgroundColor: '#FF6347' }]}
          onPress={() => navigation.navigate('')}
        >
          <Text style={styles.touchableText}>About Muet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.touchableBlock, { backgroundColor: '#7EC8E3' }]}
          onPress={() => navigation.navigate('')}
        >
          <Text style={styles.touchableText}>Muet Entry Test Format</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[styles.touchableBlock, { backgroundColor: '#3CB371' }]}
          onPress={() => navigation.navigate('Muet_Subjects')}
        >
          <Text style={styles.touchableText}>Past Papers</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.touchableBlock, { backgroundColor: '#FFD700' }]}
          onPress={() => navigation.navigate('')}
        >
          <Text style={styles.touchableText}>Mock Test</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Muet_Home} />
      <Stack.Screen name="Muet_Subjects" component={Muet_Subjects} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  touchableBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  touchableText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF', // White text color
  },
});

export default AppNavigator;
