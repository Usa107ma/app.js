import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Muet_Subjects from './Muet_Subjects';
import Muet_Past from './Muet_Past';
import Chemistry_Muet from './Chemistry_Muet';
import English_Muet from './English_Muet';
import Maths_Muet from './Maths_Muet';

const Stack = createStackNavigator();

const Muet_Home = ({ navigation }) => {
  return (
    <ImageBackground
    source={require('./assets/Background3.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[styles.touchableBlock, { backgroundColor: '#FF6347' }]}
            onPress={() => navigation.navigate('Maths_Muet')}
          >
            <Text style={styles.touchableText}>MATHS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.touchableBlock, { backgroundColor: '#7EC8E3' }]}
            onPress={() => navigation.navigate('Chemistry_Muet')}
          >
            <Text style={styles.touchableText}>CHEMISTRY</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[styles.touchableBlock, { backgroundColor: '#3CB371' }]}
            onPress={() => navigation.navigate('Muet_Past')}
          >
            <Text style={styles.touchableText}>PHYSICS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.touchableBlock, { backgroundColor: '#FFD700' }]}
            onPress={() => navigation.navigate('English_Muet')}
          >
            <Text style={styles.touchableText}>ENGLISH</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Muet_Home} />
      <Stack.Screen name="Muet_Subjects" component={Muet_Subjects} options={{ headerShown: false }} />
      <Stack.Screen name="Muet_Past" component={Muet_Past} />
      <Stack.Screen name="Chemistry_Muet" component={Chemistry_Muet} />
      <Stack.Screen name="English_Muet" component={English_Muet} />
      <Stack.Screen name="Maths_Muet" component={Maths_Muet} />
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
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default AppNavigator;
